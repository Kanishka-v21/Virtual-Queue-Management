import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import { getUserProfile } from "./Services/authService";
import { getMyQueues } from "./Services/queueService";
import { useAuth } from "./Context/AuthContext";
import "./App.css";

function App() {
  
  const { user } = useAuth();

  useEffect(() => {

  const fetchProfile = async () => {

    if(!user){
      return;
    }

    try {

      const profile = await getUserProfile();

      console.log("Profile:", profile);

    } 
    catch(error){

      console.error(
        error.response?.data || error.message
      );

    }

  };


  fetchProfile();

},[user]);

  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/joinqueue" element={<JoinQueue />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute />}>
          
          <Route path="/dashboard" element={<Dashboard />} />
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
     <ToastContainer
    position="top-right"
    autoClose={2500}
    newestOnTop
    closeOnClick
    pauseOnHover
    draggable
    theme="dark"
/>
    </BrowserRouter>
  );
}


export default App;