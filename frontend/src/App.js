import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Contact_copy from "./components/Home/Contact_copy";
import Pricing from "./components/Home/Pricing";
import Profile_form from "./components/Dashboard/Profile_form";
import Searching from "./components/Dashboard/Searching";
import Dashoard from "./components/Dashboard/Dashboard";
import Footer from "./Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Home/Login";

// Color Code is
// Hex: #00b0f0
// RGB: rgba(0,176,240,255)

function App() {
  return (
    <div className="App">
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/contact" element={<Contact_copy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile-form" element={<Profile_form />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
