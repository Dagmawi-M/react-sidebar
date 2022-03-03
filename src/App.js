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
          <Route path="/" exact component={Home} />
          <Route path="/PageOne" component={PageOne} />
          <Route path="/PageTwo" component={PageTwo} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
