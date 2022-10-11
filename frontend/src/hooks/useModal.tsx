import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useState,
} from 'react';

interface ModalContextData {
    open():void
    close():void
    getStatus():boolean
}


const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [isOpen,setIsOpen] = useState(false)
    const open = useCallback(() => {
        setIsOpen(true)
    },[isOpen])

    const close = useCallback(() => {
        setIsOpen(false)    
    },[isOpen])
    

    const getStatus = useCallback(() => {
        return isOpen    
    },[isOpen])


    return (
        <ModalContext.Provider
            value={{
                open,
                close,
                getStatus
            }}
        >
        {children}
        </ModalContext.Provider>
    );
};

function useModal(): ModalContextData {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within an ModalProvider');
    }
    return context;
}

export { useModal, ModalProvider };
