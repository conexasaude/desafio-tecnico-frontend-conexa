import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading/loading";

import { API } from "../../services/api";

interface authContexProviderProps {
  children: ReactNode;
}

type userProps = {
  email: "string";
  password: "string";
};

export const AuthContext = createContext({} as any);

export function AuthProvider({ children }: authContexProviderProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    if (token && userName) {
      API.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      setUserName(JSON.parse(userName));
    }

    setLoading(false);
  }, []);

  async function handleLogin(item: userProps) {
    const dataLogin = item;

    const {
      data: { token, name },
    } = await API.post("/login", dataLogin);

    setUserName(name);
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userName", JSON.stringify(name));
    API.defaults.headers.Authorization = `Bearer ${token}`;
    navigate("/home");
  }

  function handleLogout() {
    setUserName(undefined);
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    API.defaults.headers.Authorization = "";
    navigate("/login");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        handleLogin,
        userName,
        loading,
        setLoading,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
