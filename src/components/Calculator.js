import React, { useState /* useEffect */ } from "react";
import ItemButton from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [states, setStates] = useState({
    value: 0,
    float: false,
    newNumber: false,
  });
  const [operand, setOperand] = useState([]);
  const [numbers, setNumbers] = useState([]);
  let num;
  let arr = [];
  let currentOpString = "";

  const onClick = (e) => {
    const regNum = /^\d+$/;
    const digit = e.target.innerText;
    if (regNum.test(digit) || digit === "±") {
      if (digit === "±") {
        setStates({ ...states, value: -states.value });
        return;
      }

      if (states.value.toString().length >= 8) {
        return;
      }

      states.value === "0" ? (num = digit) : (num = states.value + digit);

      if (states.float) {
        num = parseFloat(num).toFixed(states.value.length - 1);
      } else {
        num = parseInt(num, 10);
      }

      if (states.newNumber) {
        setNumbers([...numbers, states.value]);
        setStates({ ...states, value: digit, newNumber: false });
      } else {
        setStates({ ...states, value: num });
      }
    } else if (digit === "•" && regNum.test(states.value)) {
      setStates({ ...states, float: true, value: states.value + "." });
    } else if (digit === "%") {
      setStates({ ...states, value: states.value / 100 });
    } else if (digit === "C") {
      setOperand([]);
      setNumbers([]);
      setStates({ ...states, value: 0, float: false });
    } else if (
      digit === "-" ||
      digit === "+" ||
      digit === "x" ||
      digit === "/"
    ) {
      setOperand([...operand, digit]);
      setStates({ ...states, newNumber: true });
    } else if (digit === "=") {
      arr = [...numbers, states.value];
      let res = calculateOperation();
      setOperand([]);
      setNumbers([]);
      setStates({ value: res, newNumber: false, float: false });
    }
  };

  const calculateOperation = () => {
    let ret = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      let tempNum = parseFloat(arr[i]);
      let tempNum2 = parseFloat(arr[i + 1]);

      let op = operand[i];

      if (!ret) {
        ret = tempNum;
        currentOpString = tempNum + op + tempNum2;
      } else {
        currentOpString = currentOpString + op + tempNum2;
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
    return ret;
    /* setStates({ ...states, value: ret }); */
  };

  return (
    <div className="calculator">
      {/* <History ret={operationResult} /> */}
      <Display value={states.value} />

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
