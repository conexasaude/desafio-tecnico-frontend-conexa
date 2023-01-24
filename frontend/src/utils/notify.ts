import { toast, TypeOptions } from "react-toastify";

export const notify = (msg: string, type: TypeOptions, bgColor?: string) =>
  toast[type](msg, {
    autoClose: 5000,
    hideProgressBar: true,
    style: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      color: "#2E50D4",
    },
  });
