import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export function Protected({ children }) {
  const navigate = useNavigate();

  const { name } = useAuth();

  const bearer = localStorage.getItem("bearer");

  useEffect(() => {
    if (!bearer && !name) {
      navigate("/");
    }
  }, [name]);

  if (bearer) {
    return children;
  }
}
