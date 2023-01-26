import { Route, Routes } from "react-router-dom";
import { Protected } from "./components/Protected";
import { RedirectLogin } from "./components/RedirectLogin";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RedirectLogin>
            <Login />
          </RedirectLogin>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Protected>
            <RedirectLogin>
              <Dashboard />
            </RedirectLogin>
          </Protected>
        }
      />
    </Routes>
  );
}
