import React, { useState, createContext } from "react";
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

interface CalculatorContextType {
  first: number;
  second: number;
  result: number | string | undefined;
  history: string[];
  addToHistory: (line: string) => void;
  clearHistory: () => void;
  handleFirstChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOperationResult: (operationResult: number | string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType | null>(
  null
);

const Calculator = () => {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [result, setResult] = useState<number | string>("");
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
      <CalculatorContext.Provider
        value={{
          first,
          second,
          result,
          history,
          addToHistory,
          clearHistory,
          setOperationResult,
          handleFirstChange,
          handleSecondChange,
        }}
      >
        <CalculatorForm />
        <CalculatorArithmeticsButtons />
        <CalculatorButtons />
        <CalculatorResult />
        <CalculatorHistory />
      </CalculatorContext.Provider>
    </div>
  );
};
export default Calculator;
