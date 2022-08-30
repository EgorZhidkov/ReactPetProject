import React, { useEffect, useState } from "react";
import CalcButton from "../components/CalcButton/CalcButton/button";
import ResultCalc from "../components/ResultCalc/ResultCalc";
import buttons from "../staticData/buttons";
import "../pageCss/Calculator.scoped.scss";

function Calculator() {
  const [result, setResult] = useState("0");
  const [intermediateResult, setIntermediateResult] = useState(0);
  const [intermediateOperations, setIntermediateOperations] = useState("");
  const [history, setHistory] = useState("");
  useEffect(() => {}, [intermediateOperations]);
  const saveIndetrminateWindow = (value) => {
    setIntermediateOperations(value);
    setIntermediateResult(intermediateResult + result);
    setResult("");
  };
  const lastSymbolIsOperand = () => {
    const operators = ["+", "-", "x", "/"];
    const historySplit = history.replace(/\s/g, "").split("");
    const lastStrItem = historySplit[historySplit.length - 1];

    if (operators.find((item) => item === lastStrItem) === undefined) {
      return false;
    } else {
      return true;
    }
  };
  const checkRepeatOperands = (value) => {
    if (value === intermediateOperations) {
      return true;
    } else {
      return false;
    }
  };
  const convertStringOperator = {
    "+": (a, b) => {
      return a + b;
    },
    "-": (a, b) => {
      return a - b;
    },
    x: (a, b) => {
      return a * b;
    },
    "/": (a, b) => {
      return a / b;
    },
  };
  const changeHistory = (value, isOperations) => {
    if (checkRepeatOperands(value) === true) {
      return;
    }
    if (isOperations) {
      switch (value) {
        case "AC":
          setHistory("");
          setResult("0");
          setIntermediateOperations("");
          break;
        case "=":
          break;
        case ".":
          setHistory(history + value);
          break;
        default:
          if (lastSymbolIsOperand(value)) {
            let historySplit = history.replace(/\s/g, "").split("");
            historySplit.splice(historySplit.length - 1, 1, value);
            // debugger;
            setHistory(historySplit.join(" ") + " ");
          } else {
            setHistory(history + " " + value + " ");
          }
          break;
      }
      return;
    }
    setHistory(history + value);
  };
  const changeOperations = (value) => {
    if (checkRepeatOperands(value) === true) {
      return;
    }

    if (result === "0") {
      if (value === "-") {
        setIntermediateOperations(value);
        setResult(value);
      }
      return;
    }
    switch (value) {
      case "AC":
        setResult("0");
        setHistory("");
        break;
      case ".":
        setResult(result.concat("."));
        break;
      case "=":
        setResult(
          convertStringOperator[intermediateOperations](
            Number(intermediateResult),
            Number(result)
          )
        );
        setIntermediateOperations("");
        setIntermediateResult("");
        break;
      default:
        saveIndetrminateWindow(value);
        break;
    }
  };
  const displayResult = (value) => {
    result === "0" ? setResult(value) : setResult(result + value);
  };
  let row = [];
  const renderButtons = buttons.map((item, index) => {
    if (index !== 0 && buttons[index - 1].action === "operations") {
      row = [];
    }
    row.push(
      <CalcButton
        id={item.id}
        key={item.id}
        text={item.text}
        value={item.value}
        textColor={item.textColor}
        background={item.bacgroundColor}
        type={item.type}
        changeHistory={changeHistory}
        displayResult={displayResult}
        changeOperations={changeOperations}
      />
    );
    if (item.action === "operations") {
      return <div className={`row number${index}`}>{row}</div>;
    }
    return null;
  });
  return (
    <div className="calculator container content-center flex justify-center">
      <div className="result-window">
        <ResultCalc result={result} history={history} />
      </div>
      <div className="button-window">{renderButtons}</div>
    </div>
  );
}

export default Calculator;
