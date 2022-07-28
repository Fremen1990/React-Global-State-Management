import { useContext } from "react";
import { CalculatorContext } from "./Calculator";

const CalculatorHistory = () => {
  const context = useContext(CalculatorContext);

  // check if context exists
  if (!context) return null;

  const { history } = context;

  return (
    <div style={{ border: "4px solid white" }}>
      <h3>Hisotry</h3>
      <ul>
        {history.map((line, i) => (
          <li style={{ listStyleType: "none" }} key={i}>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorHistory;
