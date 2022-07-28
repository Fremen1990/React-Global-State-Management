import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CalculatorHistory = () => {
  const { history } = useSelector((store: RootState) => store.calculator);

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
