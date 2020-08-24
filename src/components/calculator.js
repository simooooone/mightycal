import React, { useState, useEffect } from "react";
import ItemButton from "./button";
import Display from "./display";

const Calculator = () => {
  useEffect(() => {}, [value]);

  const [value, setValue] = useState(0);
  const [operand, setOperand] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [float, setFloat] = useState(false);
  const [newNumber, setNewNumber] = useState(false);
  let num;
  const onClick = (e) => {
    const regNum = /^\d+$/;
    const digit = e.target.innerText;
    if (regNum.test(digit) || digit === "±") {
      if (digit === "±") {
        setValue(-value);
        return;
      }

      if (value.toString().length >= 8) {
        return;
      }

      value === "0" ? (num = digit) : (num = value + digit);

      if (float) {
        num = parseFloat(num).toFixed(value.length - 1);
      } else {
        num = parseInt(num, 10);
      }

      if (newNumber) {
        setNumbers([...numbers, value]);
        setValue(digit);
        setNewNumber(false);
      } else {
        setValue(num);
        console.log(numbers[numbers.length - 1]);
        setNumbers(() => (numbers[numbers.length - 1] = num));
      }
    } else if (digit === "•" && regNum.test(value)) {
      setValue(value + ".");
      setFloat(true);
    } else if (digit === "%") {
      setValue(value / 100);
    } else if (digit === "C") {
      setValue(0);
      setOperand([]);
      setNumbers([]);
      setFloat(false);
    } else if (
      digit === "-" ||
      digit === "+" ||
      digit === "x" ||
      digit === "/"
    ) {
      setOperand([...operand, digit]);
      console.log(operand);
      setNewNumber(true);
    } else if (digit === "=") {
      setNumbers([...numbers, value]);
      calcOperation();
      setFloat(false);
      setOperand([]);
      setNumbers([]);
      setNewNumber(false);
    }
  };

  const calcOperation = () => {
    let ret = 0;
    console.log("numbers", numbers);

    for (let i = 0; i < numbers.length; i++) {
      let tempNum = parseFloat(numbers[i]);
      let tempNum2 = numbers[i + 1] ? parseFloat(numbers[i + 1]) : num;
      let op = operand[i];
      if (!ret) {
        ret = tempNum;
      }

      if (op === "+") {
        ret = ret + tempNum2;
      } else if (op === "-") {
        ret = ret - tempNum2;
      } else if (op === "x") {
        ret = ret * tempNum2;
      } else if (op === "/") {
        ret = ret / tempNum2;
      }
    }
    setValue(ret);
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
