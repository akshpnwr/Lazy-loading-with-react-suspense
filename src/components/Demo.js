import React from "react";

const Demo = (props) => {
  console.log("DEMO RUNNING");

  return <p>{props.show ? "Hi there" : ""}</p>;
};

export default React.memo(Demo);
