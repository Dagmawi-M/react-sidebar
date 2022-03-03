import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/PageOne" element={<PageOne/>} />
          <Route path="/PageTwo" element={<PageTwo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
