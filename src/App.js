import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";

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
      {/* <Navbar/> */}
      <Navbar titles="Textutiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* 
          <Switch>
            <Route path="/about">
             
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
         */}
      <div className="container my-3">
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze the text"
          mode={mode}
        />
      </div>
      <About />

    </>
  );
}

export default App;
