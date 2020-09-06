import React, { useState } from "react";
import ItemButton from "./Button";
import Display from "./Display";
import History from "./History";
import Decimal from "decimal.js";
/* function reducer(state, action) {
  if (action.type === "+") {
    return { ...state, value: state.value + 1 };
  } else if (action.type === "-") {
    return { ...state, value: state.value - 1 };
  } else {
    return state;
  }
} */

const Calculator = () => {
  /* const [reducerState, dispatch] = useReducer(reducer, {
    value: 0,
    float: false,
    newNumber: false,
    history: [],
    operand: [],
    numbers: [],
  }); */

  const [states, setStates] = useState({
    value: 0,
    float: false,
    newNumber: false,
    history: [],
    operand: [],
    numbers: [],
  });

  let num;

  const onClick = (e) => {
    const regNum = /^\d+$/;
    const digit = e.target.innerText;
    if (regNum.test(digit) || digit === "±") {
      setDigits(digit);
    } else if (digit === "•" && regNum.test(states.value)) {
      setStates({
        ...states,
        float: true,
        value: states.value + ".",
      });
    } else if (digit === "%") {
      setStates({
        ...states,
        value: states.value / 100,
      });
    } else if (digit === "C") {
      setStates({
        ...states,
        value: 0,
        float: false,
        numbers: [],
        operand: [],
      });
    } else if (
      digit === "-" ||
      digit === "+" ||
      digit === "x" ||
      digit === "/"
    ) {
      setStates({
        ...states,
        newNumber: true,
        operand: [...states.operand, digit],
      });
    } else if (digit === "=") {
      calculateOperation();
    }
  };

  const setDigits = (digit) => {
    if (digit === "±") {
      setStates({ ...states, value: -states.value });
      return;
    }

    if (!states.newNumber) {
      if (states.value.toString().length >= 8) {
        return;
      }
    }

    states.value === "0" ? (num = digit) : (num = states.value + digit);

    if (states.float) {
      num = parseFloat(num).toFixed(states.value.length - 1);
    } else {
      num = parseInt(num, 10);
    }

    if (states.newNumber) {
      setStates({
        ...states,
        value: digit,
        newNumber: false,
        numbers: [...states.numbers, states.value],
      });
    } else {
      setStates({ ...states, value: num });
    }
  };

  const calculateOperation = () => {
    let arr = [...states.numbers, states.value];
    let op = states.operand;
    let hist = "";

    if (arr[1]) {
      // Joining the history into a string
      for (let i = 0; i < arr.length - 1; i++) {
        let tempNum = new Decimal(arr[i]);
        let tempNum2 = new Decimal(arr[i + 1]);

        if (i === 0) {
          hist = tempNum.toFixed() + op[i] + tempNum2.toFixed();
        } else {
          hist = hist + op[i] + tempNum2.toFixed();
        }
      }

      // Calculating the result following operator precedence
      while (arr.length > 1) {
        let indexMultiply = op.indexOf("x");
        let indexDivision = op.indexOf("/");
        let indexPlus = op.indexOf("+");
        let indexMinus = op.indexOf("-");

        if (indexMultiply >= 0) {
          arr[indexMultiply] =
            //parseFloat(arr[indexMultiply]) * parseFloat(arr[indexMultiply + 1]);
            Decimal.mul(arr[indexMultiply], arr[indexMultiply + 1]).toFixed();
          arr.splice(indexMultiply + 1, 1);
          op.splice(indexMultiply, 1);
        } else if (indexDivision >= 0) {
          let zero = new Decimal(arr[indexDivision + 1]);
          if (
            /* parseInt(arr[indexDivision + 1]) === 0 ||
            parseFloat(arr[indexDivision + 1]) === 0 */

            zero.isZero() ||
            (zero.isZero() && zero.isNeg())
          ) {
            arr[0] = "Error: division by 0. Press C to continue";
            break;
          } else {
            arr[indexDivision] =
              /* parseFloat(arr[indexDivision]) /
              parseFloat(arr[indexDivision + 1]); */
              Decimal.div(arr[indexDivision], arr[indexDivision + 1]).toFixed();
            arr.splice(indexDivision + 1, 1);
            op.splice(indexDivision, 1);
          }
        } else if (indexPlus >= 0) {
          arr[indexPlus] =
            /* parseFloat(arr[indexPlus]) + parseFloat(arr[indexPlus + 1]); */
            Decimal.add(arr[indexPlus], arr[indexPlus + 1]).toFixed();
          arr.splice(indexPlus + 1, 1);
          op.splice(indexPlus, 1);
        } else if (indexMinus >= 0) {
          arr[indexMinus] =
            /*  parseFloat(arr[indexMinus]) - parseFloat(arr[indexMinus + 1]); */
            Decimal.minus(arr[indexMinus], arr[indexMinus + 1]).toFixed();
          arr.splice(indexMinus + 1, 1);
          op.splice(indexMinus, 1);
        }
      }

      setStates({
        history: [...states.history, hist + " = " + arr[0]],
        value: arr[0],
        newNumber: false,
        float: false,
        numbers: [],
        operand: [],
      });
    }
  };

  /* const calculateOperation = () => {
    arr = [...states.numbers, states.value];
    let ret = 0;
    let hist = "";
    if (arr[1]) {
      for (let i = 0; i < arr.length - 1; i++) {
        let tempNum = parseFloat(arr[i]);
        let tempNum2 = parseFloat(arr[i + 1]);

        let op = states.operand[i];

        if (!ret) {
          ret = tempNum;
          hist = tempNum + op + tempNum2;
        } else {
          hist = hist + op + tempNum2;
        }

        if (op === "+") {
          ret = ret + tempNum2;
        } else if (op === "-") {
          ret = ret - tempNum2;
        } else if (op === "x") {
          ret = ret * tempNum2;
        } else if (op === "/") {
          if (parseInt(tempNum2) === 0) {
            ret = "Error, division by 0 press C to continue";
          } else {
            ret = ret / tempNum2;
          }
        }
      }

      setStates({
        history: [...states.history, hist + " = " + ret],
        value: ret,
        newNumber: false,
        float: false,
        numbers: [],
        operand: [],
      });
    }
  }; */

  return (
    <div className="calculator">
      <History histories={states.history} />
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
