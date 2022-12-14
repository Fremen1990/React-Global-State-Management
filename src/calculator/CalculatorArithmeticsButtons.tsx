import { useContext } from "react";
import { CalculatorContext, Operation } from "./Calculator";

const CalculatorArithmeticsButtons = () => {
  const context = useContext(CalculatorContext);

  // check if context exists
  if (!context) return null;

  const { first, second, setOperationResult, addToHistory } = context;

  const handleOperation = (operation: Operation): any => {
    switch (operation) {
      case Operation.ADD:
        const operationResult = first + second;
        setOperationResult(operationResult);
        addToHistory(`Added ${first} to ${second} and got ${operationResult}`);
        break;
      case Operation.SUBTRACT: {
        const operationResult = first - second;
        setOperationResult(operationResult);
        addToHistory(
          `Subtracted ${first} minus ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.MULTIPLY: {
        const operationResult = first * second;
        setOperationResult(operationResult);
        addToHistory(
          `Multiplied ${first} * ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          setOperationResult("Cannot divide by 0");
          addToHistory(
            `Tried to divide ${first} / ${second} but dividing by 0 is prohibited`
          );
        } else {
          const operationResult = first / second;
          setOperationResult(operationResult);
          addToHistory(
            `Divided ${first} / ${second} and got ${operationResult}`
          );
        }
        break;
      }
    }
  };
  return (
    <>
      <button
        style={{ padding: 15, fontSize: 24 }}
        onClick={() => handleOperation(Operation.ADD)}
      >
        +
      </button>
      <button
        style={{ padding: 15, fontSize: 24 }}
        onClick={() => handleOperation(Operation.SUBTRACT)}
      >
        -
      </button>
      <button
        style={{ padding: 15, fontSize: 24 }}
        onClick={() => handleOperation(Operation.MULTIPLY)}
      >
        *
      </button>
      <button
        style={{ padding: 15, fontSize: 24 }}
        onClick={() => handleOperation(Operation.DIVIDE)}
      >
        /
      </button>
    </>
  );
};

export default CalculatorArithmeticsButtons;
