import React, { useState } from "react";
import ItemButton from "./button";
import Display from "./display";

const Calculator = () => {
  const [value, setValue] = useState(0);
  const [operand, setOperand] = useState("");
  const [numbers, setNumbers] = useState({});
  const [float, setFloat] = useState(false);

  const onClick = (e) => {
    const regNum = /^\d+$/;
    const digit = e.target.innerText;
    if (regNum.test(digit)) {
      let num;

      if (numbers.first) {
        if (
          numbers.first.toString().length >= 8 ||
          numbers.second.toString().length >= 8
        ) {
          console.log("second");
          return;
        }
      } else {
        if (numbers.first.toString().length >= 8) {
          console.log("first");
          return;
        }
      }

      value === "0" ? (num = digit) : (num = value + digit);

      float
        ? (num = parseFloat(num).toFixed(value.length - 1))
        : (num = parseInt(num, 10));

      setValue(num);
      if (operand !== "") {
        setNumbers({ ...numbers, second: num });
      } else {
        setNumbers({ first: num, second: null });
      }
    } else if (digit === "•" && regNum.test(value)) {
      setValue(value + ".");
      setFloat(true);
    } else if (digit === "=") {
      calcOperation();
      setFloat(false);
      setOperand("");
    } else if (
      digit === "-" ||
      digit === "+" ||
      digit === "x" ||
      digit === "/"
    ) {
      setOperand(digit);
      setValue(0);
    } else if (digit === "%") {
      setValue(value / 100);
    } else if (digit === "C") {
      setValue(0);
      setOperand("");
      setNumbers({});
      setFloat(false);
    } else if (digit === "±") {
      if (operand !== "") {
        setNumbers({ ...numbers, second: -value });
      } else {
        setNumbers({ first: -value, second: null });
      }

      setValue(-value);
    }
  };

  const calcOperation = () => {
    let ret;
    let first = numbers.first;
    let second = numbers.second;
    if (float) {
      first = parseFloat(first);
      second = parseFloat(second);
    }
    if (operand === "+") {
      ret = first + second;
    } else if (operand === "-") {
      ret = first - second;
    } else if (operand === "x") {
      ret = first * second;
    } else if (operand === "/") {
      ret = first / second;
    }
    setValue(ret);
    setNumbers({ first: ret, second: null });
  };

  return (
    <div className="calculator">
      <Display value={value} />

      <div className="keyboard">
        <div className="inputKeys">
          <div className="functions">
            <ItemButton
              buttonClass="key-c border-left"
              onClick={onClick}
              itemText="C"
            />
            <ItemButton buttonClass="key-sign" onClick={onClick} itemText="±" />
            <ItemButton
              buttonClass="key-percent"
              onClick={onClick}
              itemText="%"
            />
          </div>
          <div className="keys">
            <ItemButton
              buttonClass="key-1 border-left"
              onClick={onClick}
              itemText="1"
            />
            <ItemButton buttonClass="key-2" onClick={onClick} itemText="2" />
            <ItemButton buttonClass="key-3" onClick={onClick} itemText="3" />
            <ItemButton
              buttonClass="key-4 border-left"
              onClick={onClick}
              itemText="4"
            />
            <ItemButton buttonClass="key-5" onClick={onClick} itemText="5" />
            <ItemButton buttonClass="key-6" onClick={onClick} itemText="6" />
            <ItemButton
              buttonClass="key-7 border-left"
              onClick={onClick}
              itemText="7"
            />
            <ItemButton buttonClass="key-8" onClick={onClick} itemText="8" />
            <ItemButton buttonClass="key-9" onClick={onClick} itemText="9" />
          </div>
          <div className="foot">
            <ItemButton
              buttonClass="key-0 border-left"
              onClick={onClick}
              itemText="0"
            />
            <ItemButton buttonClass="key-dot" onClick={onClick} itemText="•" />
          </div>
        </div>
        <div className="operations">
          <ItemButton buttonClass="key-plus" onClick={onClick} itemText="+" />
          <ItemButton buttonClass="key-minus" onClick={onClick} itemText="-" />
          <ItemButton buttonClass="key-per" onClick={onClick} itemText="x" />
          <ItemButton buttonClass="key-fract" onClick={onClick} itemText="/" />
          <ItemButton buttonClass="key-doit" onClick={onClick} itemText="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
