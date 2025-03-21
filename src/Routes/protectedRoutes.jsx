import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HOC from "./higher-order";
import Dashboard from "../Pages/dashboard";
import Analytics from "../Pages/analytics";
import Billing from "../Pages/billing";
import Invoice from "../Pages/invoice";
import Orders from "../Pages/order";
import People from "../Pages/people";
import Profile from "../Pages/profile";
import Reports from "../Pages/reports";
import Settings from "../Pages/settings";
import Support from "../Pages/support";
import User from "../Pages/user";
import DashboardLayout from "../Layout/dashboardLayout";
import useAuthRedirect from "./isAuthenticated";

const routes = [
  { path: "/", element: <Dashboard /> },  // Add this
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/billing", element: <Billing /> },
  { path: "/invoice", element: <Invoice /> },
  { path: "/order", element: <Orders /> },
  { path: "/people", element: <People /> },
  { path: "/profile", element: <Profile /> },
  { path: "/reports", element: <Reports /> },
  { path: "/settings", element: <Settings /> },
  { path: "/support", element: <Support /> },
  { path: "/user", element: <User /> },
];

const ProtectedRoutes = () => {
  useAuthRedirect()
  return (
    <Routes>
    <Route element={<HOC />}>
      <Route path="/" element={<DashboardLayout />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Route>
  </Routes>
  );
};

export default ProtectedRoutes;
