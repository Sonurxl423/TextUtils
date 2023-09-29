import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.backgroundColor = "#242e7c";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils-DarkMode";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Textutils-LightMode";
    }
  };
  return (
    <>
    {/* I am just checking my githhub profile */}
      {/* <Navbar/> */}
      <Router>
      <Navbar titles="Textutiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About />} />

          <Route ex   act
            path="/"
            element={
              <div className="container my-3" >
              <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze the text"
                mode={mode}
              />
          </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
