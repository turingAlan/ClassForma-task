import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Navigation from "./Navigtion";
import Workflow from "./pages/Workflow";

function App() {
  return (
    <div className="min-w-full">
      <Navigation />
    </div>
  );
}

export default App;
