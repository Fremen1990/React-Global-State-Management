import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

const CalculatorForm = () => {
  const context = useContext(CalculatorContext);

  // check if context exists
  if (!context) return null;

  const { first, second, handleFirstChange, handleSecondChange } = context;

  return (
    <>
      <input
        style={{ fontSize: 24, width: 100 }}
        type="number"
        value={first}
        onChange={handleFirstChange}
      />
      <input
        style={{ fontSize: 24, width: 100 }}
        type="number"
        value={second}
        onChange={handleSecondChange}
      />
    </>
  );
};
export default CalculatorForm;
