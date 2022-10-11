import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
} from 'react';
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage, getLocalStorage } from '../services/localStorage'

interface AuthContextData {
    setLogged(data:User):void
    getLogged(): false | User;
    altenticate(email:string,password:string):void
    logout():void
}

interface User {
    name:string
    token:string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();


    const setLogged = useCallback((data:User) => {
        setLocalStorage<User>({
            expiry:1000*60*60*24,
            name:'user',
            value:data
        })
    }, []);

    const getLogged = useCallback(() => {
        const user = getLocalStorage<User>('user')
        return user;
    }, []);


    const logout = useCallback( () => {
        setLogged({ name:"", token:""})
        return navigate("/login")
    },[])

    const altenticate = useCallback(async (email:string,password:string) => {
        try {
            const { data } = await API.post("login", {
                email,
                password
            });

            setLogged(data)
            return navigate("/")
            
        } catch (res) {
            setLogged({ name:"", token:""})
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                setLogged,
                getLogged,
                altenticate,
                logout
            }}
        >
        {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { useAuth, AuthProvider };
