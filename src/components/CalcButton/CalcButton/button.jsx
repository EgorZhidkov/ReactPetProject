import React, { useState } from "react";
import "./button.scoped.scss";

const CalcButton = (props) => {
  const [active, setActive] = useState(false);
  const { changeHistory, displayResult, changeOperations } = props;
  const click = (event) => {
    // setActive(true);
    if (props.type) {
      changeOperations(event.target.value);
      changeHistory(event.target.value, props.type);
    } else {
      console.log("btn clicked value", event.target.value);
      displayResult(event.target.value);
      changeHistory(event.target.value);
    }
  };

  return (
    <button
      id={props.id}
      value={props.text}
      style={{ backgroundColor: props.background, color: props.textColor }}
      className={`calcButton ${active === true ? "active" : ""}`}
      onClick={click}
    >
      {props.text}
    </button>
  );
};
export default CalcButton;
