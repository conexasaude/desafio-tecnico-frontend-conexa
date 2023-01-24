import { Route, Routes } from "react-router-dom";
import { Protected } from "./components/Protected";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
    </Routes>
  );
}
