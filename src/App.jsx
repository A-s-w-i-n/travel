import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import International from "./pages/International";
import Domestic from "./pages/Domestic";
import Experience from "./pages/Experience";
import Visa from "./pages/Visa";
import About from "./pages/About";
import CustomTip from "./pages/CustomTip";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/international" element={<International />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/about" element={<About />} />
        <Route path="/custom" element={<CustomTip />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
