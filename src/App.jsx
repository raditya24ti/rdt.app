import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const GuestPage = React.lazy(() => import("./pages/GuestPage"));

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
// 1. Komponen Products sekarang sudah di-import dan didefinisikan di sini:
const Products = React.lazy(() => import("./pages/Products")); 

/* ========================= */
/* AUTH PAGES */
/* ========================= */

const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));

/* ========================= */
/* LAYOUT */
/* ========================= */

import VisitorLayout from "./layouts/VisitorLayout";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import ProductDetail from "./pages/ProductDetail";
import Notes from "./pages/Notes";
/* ========================= */
/* NOT FOUND */
/* ========================= */

import NotFound from "./pages/NotFound";

/* ========================= */
/* LOADING */
/* ========================= */

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#eef3f6]">
    <h1 className="text-3xl font-bold text-red-500 animate-pulse">
      Loading...
    </h1>
  </div>
);

/* ========================= */
/* PROTECTED ROUTE */
/* ========================= */

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

/* ========================= */
/* APP */
/* ========================= */

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* ========================= */}
        {/* VISITOR LAYOUT */}
        {/* ========================= */}

        <Route element={<VisitorLayout />}>
          <Route path="/" element={<GuestPage />} />
        </Route>

        {/* ========================= */}
        {/* AUTH LAYOUT */}
        {/* ========================= */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ========================= */}
        {/* DASHBOARD LAYOUT */}
        {/* ========================= */}

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/customers" element={<Customers />} />
          
          <Route path="products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
            <Route path="/notes" element={<Notes />} /> 
        </Route>

        {/* ========================= */}
        {/* 404 PAGE */}
        {/* ========================= */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}