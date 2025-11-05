import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Orders from "./Orders";
import Funds from "./Funds";
import Apps from "./Apps";
import Signup from "./Signup";
import Login from "./Login";

import Menu from "./Menu";
import TopBar from "./TopBar";

export default function Home() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="dashboard-layout">
                <Menu />
                <div className="dashboard-main">
                  <TopBar />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<Apps />} />
                  </Routes>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
