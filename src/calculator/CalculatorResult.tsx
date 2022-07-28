import { useSelector } from "react-redux";
import { RootState } from "../redux-toolkit/store";

const CalculatorResult = () => {
  const { first, second, result } = useSelector(
    (store: RootState) => store.calculator
  );

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
