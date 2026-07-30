import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Features from "./Pages/Features";
import JoinQueue from "./Pages/JoinQueue";
import Dashboard from "./Pages/Dashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

import ProtectedRoute from "./Components/ProtectedRoute";
import AdminRoute from "./Components/AdminRoute";
import { useEffect } from "react";
import { getUserProfile } from "./services/authService";
import "./App.css";
function App() {

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await getUserProfile();
        console.log(user);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute />}>
          
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/joinqueue" element={<JoinQueue />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

        </Route>


        {/* Admin Protected Route */}
        <Route element={<AdminRoute />}>

          <Route 
            path="/admin" 
            element={<AdminDashboard />} 
          />

        </Route>


      </Routes>

    </BrowserRouter>
  );
}


export default App;