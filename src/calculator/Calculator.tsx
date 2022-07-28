import React from "react";
import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorHistory from "./CalculatorHistory";
import CalculatorArithmeticsButtons from "./CalculatorArithmeticsButtons";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

const Calculator = () => {
  return (
    <Provider store={store}>
      <div>
        <CalculatorForm />
        <CalculatorArithmeticsButtons />
        <CalculatorButtons />
        <CalculatorResult />
        <CalculatorHistory />
      </div>
    </Provider>
  );
};
export default Calculator;
