import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../redux-toolkit/features/calculator/calculator-slice";
import { RootState } from "../redux-toolkit/store";

const CalculatorButtons = () => {
  const { history } = useSelector((store: RootState) => store.calculator);

  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <>
      <button
        style={{ padding: 15, fontSize: 24 }}
        onClick={handleClearHistory}
      >
        Clear ({history.length})
      </button>
    </>
  );
};
export default CalculatorButtons;
