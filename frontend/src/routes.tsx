import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/privateRoute";
import { Header } from "./components/header/header";
import { AuthProvider } from "./auth/context/authContext";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute />}>
              <Route path="" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
