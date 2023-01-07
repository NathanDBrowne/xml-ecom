import "./App.css";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import NotFound from "./routes/NotFound";

import Login from "./routes/Auth/login";
import SignUp from "./routes/Auth/signUp";
import Products from "./routes/Products";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const MenuItems = [
    { to: "/product-harmonisation", label: " -> Product Harmonisation" },
    { to: "/rulebook", label: " -> Add to Rulebook" },
    { to: "/", label: " -> Something Else" },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        {/* <Route element={<ProtectedRoute user={user} />}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  if (Object.keys(user).length === 0) {
    console.log("USER", user);
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default App;
