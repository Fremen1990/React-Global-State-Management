import { Operation } from "./Calculator";
import { RootState } from "../redux-toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToHistory,
  setResult,
} from "../redux-toolkit/features/calculator/calculator-slice";

const CalculatorArithmeticsButtons = () => {
  const { first, second } = useSelector((store: RootState) => store.calculator);

  const dispatch = useDispatch();

  const handleSetOperationResult = (result: number) => {
    dispatch(setResult(result));
  };

  const handleAddHistory = (line: string) => {
    dispatch(addToHistory(line));
  };

  const handleOperation = (operation: Operation): any => {
    switch (operation) {
      case Operation.ADD:
        const operationResult = first + second;
        handleSetOperationResult(operationResult);
        handleAddHistory(
          `Added ${first} to ${second} and got ${operationResult}`
        );
        break;
      case Operation.SUBTRACT: {
        const operationResult = first - second;
        handleSetOperationResult(operationResult);
        handleAddHistory(
          `Subtracted ${first} minus ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.MULTIPLY: {
        const operationResult = first * second;
        handleSetOperationResult(operationResult);
        handleAddHistory(
          `Multiplied ${first} * ${second} and got ${operationResult}`
        );
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          // handleSetOperationResult("Cannot divide by 0");
          handleAddHistory(
            `Tried to divide ${first} / ${second} but dividing by 0 is prohibited`
          );
        } else {
          const operationResult = first / second;
          handleSetOperationResult(operationResult);
          handleAddHistory(
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
