import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Workflow from "./pages/Workflow";

const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Workflow" element={<Workflow />} />
    </Routes>
  );
};

export default Navigation;
