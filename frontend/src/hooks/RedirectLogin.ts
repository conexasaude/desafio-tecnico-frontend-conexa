import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";

export function useRedirectLogin() {
  const bearer = localStorage.getItem("bearer");
  const { name } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (bearer) {
      navigate("/dashboard");
    }
  }, [name]);
}
