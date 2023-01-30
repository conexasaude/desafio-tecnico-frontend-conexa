import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../config/axios";
import { useAuth } from "../context/auth";

export function Protected({ children }) {
  const navigate = useNavigate();

  const { name } = useAuth();

  const bearer = localStorage.getItem("bearer");

  useEffect(() => {
    if (!bearer && !name) {
      return navigate("/");
    }
  }, [name]);

  if (bearer) {
    api.defaults.headers.common["Authorization"] = `${localStorage.getItem("bearer")}`;
    return children;
  }
}
