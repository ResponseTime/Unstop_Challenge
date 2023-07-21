import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Assessment from "./components/Assessment";
import Header from "./components/Header";
import { useState } from "react";
import Overview from "./components/Overview";
function App() {
  const [head, setHead] = useState("DashBoard");
  const [inner, setInner] = useState("DashBoard");
  const [style, setStyle] = useState("hidden");
  return (
    <>
      <Router>
        <Navbar />
        <Header head={head} inner={inner} />
        <Overview style={style} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard set={setHead} setI={setInner} setO={setStyle} />
            }
          />
          <Route
            path="/assement"
            element={
              <Assessment set={setHead} setI={setInner} setO={setStyle} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
