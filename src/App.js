import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";
import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleHandler = useCallback(() => {
    console.log(allowToggle);
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleHandler}>Toggle</Button>
    </div>
  );
}

export default App;
