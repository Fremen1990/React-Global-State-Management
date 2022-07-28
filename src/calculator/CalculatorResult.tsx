import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

const CalculatorResult = () => {
  const context = useContext(CalculatorContext);

  // check if context exists
  if (!context) return null;

  const { first, second, result } = context;

  return (
    <div style={{ border: "4px solid white" }}>
      <h1 style={{ color: "#350" }}>{result}</h1>
      <p>
        for values {first} and {second}
      </p>
    </div>
  );
};

export default CalculatorResult;
