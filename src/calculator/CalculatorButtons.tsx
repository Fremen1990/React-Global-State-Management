import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

const CalculatorButtons = () => {
  const context = useContext(CalculatorContext);

  // check if context exists
  if (!context) return null;

  const { clearHistory, history } = context;

  return (
    <>
      <button
        style={{ padding: 15, fontSize: 24 }}
        onClick={() => clearHistory()}
      >
        Clear ({history.length})
      </button>
    </>
  );
};
export default CalculatorButtons;
