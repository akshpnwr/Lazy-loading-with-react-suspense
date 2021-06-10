import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/DemoList";
import "./App.css";

function App() {
  // const [showPara, setShowPara] = useState(false);

  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("APP RUNNING");

  // const toggleHandler = useCallback(() => {
  //   console.log(allowToggle);
  //   if (allowToggle) {
  //     setShowPara((prevShowPara) => !prevShowPara);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New title");
  }, []);

  const listItems = [5, 1, 3, 2, 4];

  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}
      <DemoList title={listTitle} items={useMemo(() => listItems, [])} />
      {/* <Button onClick={allowToggleHandler}>Allow Toggle</Button> */}
      <Button onClick={changeTitleHandler}>Change title</Button>
    </div>
  );
}

export default App;
