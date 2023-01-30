import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export function RedirectLogin({ children }) {
  const bearer = localStorage.getItem("bearer");
  const { name } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (bearer) {
      return navigate("/dashboard");
    }
    return navigate("/");
  }, [name]);

  return <>{children}</>;
}
