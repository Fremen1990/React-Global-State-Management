import React, { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import CalculatorResult from "./CalculatorResult";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorHistory from "./CalculatorHistory";
import CalculatorArithmeticsButtons from "./CalculatorArithmeticsButtons";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

const Calculator = () => {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [history, setHistory] = useState<string[]>([]);

  const handleFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  };
  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  };

  const setOperationResult = (operationResult: number | string) => {
    setResult(operationResult);
  };

  const addToHistory = (line: string) => {
    setHistory((prevHistory) => [...prevHistory, line]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      <CalculatorForm
        first={first}
        second={second}
        handleFirstChange={handleFirstChange}
        handleSecondChange={handleSecondChange}
      />

      <CalculatorArithmeticsButtons
        first={first}
        second={second}
        setOperationResult={setOperationResult}
        addToHistory={addToHistory}
        history={history}
        clearHistory={clearHistory}
      />

      <CalculatorButtons
        first={first}
        second={second}
        setOperationResult={setOperationResult}
        addToHistory={addToHistory}
        history={history}
        clearHistory={clearHistory}
      />

      <CalculatorResult first={first} second={second} result={result} />

      <CalculatorHistory history={history} />
    </div>
  );
};
export default Calculator;
