import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import About from "./Pages/About";
import Features from "./Pages/Features";
import JoinQueue from "./Pages/JoinQueue";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/features" element={<Features />} />
      <Route path = "/dashboard" element={<Dashboard />} />
      <Route path="/joinqueue" element={<JoinQueue />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
