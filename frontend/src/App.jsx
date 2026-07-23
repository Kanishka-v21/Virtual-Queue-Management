import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import About from "./Pages/About";
import Features from "./Pages/Features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/features" element={<Features />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
