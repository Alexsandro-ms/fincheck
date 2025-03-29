import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import { LoginPage } from "../view/pages/Login";
import { RegisterPage } from "../view/pages/Register";
import { DashboardPage } from "../view/pages/Dashboard";
import { AuthLayout } from "../view/layouts/AuthLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Publicas */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Route>

        {/* Privadas */}
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
