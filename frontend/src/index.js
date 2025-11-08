import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// ---------------------------
// Existing Pages
// ---------------------------
import HomePage from "./landing_page/home/HomePage";
import SignupPage from "./landing_page/signup/SignupPage"; // marketing-style signup
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import NotAvailable from "./landing_page/NotAvailable";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

// ---------------------------
// Auth Pages (backend-connected)
// ---------------------------
import UserSignup from "./landing_page/UserSignup";
import UserLogin from "./landing_page/UserLogin";

// ---------------------------
// App Layout Wrapper
// ---------------------------
function AppWrapper() {
   const location = useLocation();
   const path = location.pathname || "/"; // ✅ Fix for home route 

  // ✅ Define normal pages (with Navbar/Footer)
  const knownRoutes = ["/", "/about", "/product", "/pricing", "/support", "/signup"];

  // ✅ Define auth or restricted pages
  const isAuthPage = ["/login", "/register", "/not-available"].includes(path);

  // ✅ Detect if current route is unknown (404)
  const is404Page = !knownRoutes.includes(path) && !isAuthPage;

  // ✅ Hide layout for auth and 404 pages
  const hideLayout = isAuthPage || is404Page;

  return (
    <>
      {/* Show Navbar only when not on auth pages or 404 */}
      {!hideLayout && <Navbar />}

      {/* ✅ Add conditional class for padding */}
      <div className={hideLayout ? "" : "with-navbar"}>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/not-available" element={<NotAvailable />} />  
          
          {/* Marketing Signup Page */}
          <Route path="/signup" element={<SignupPage />} />

          {/* ✅ Backend-Connected Auth Routes */}
          <Route path="/register" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Show Footer only when not on auth pages or 404 */}
      {!hideLayout && <Footer />}
    </>
  );
}
// Render the App
// ---------------------------
// Render the App
// ---------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);
