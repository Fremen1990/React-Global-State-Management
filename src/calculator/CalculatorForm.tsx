import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { RootState } from "../redux-toolkit/store";
import {
  setFirst,
  setSecond,
} from "../redux-toolkit/features/calculator/calculator-slice";

const CalculatorForm = () => {
  const dispatch = useDispatch();
  const { first, second } = useSelector((store: RootState) => store.calculator);

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirst(Number(e.target.value)));
  };

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSecond(Number(e.target.value)));
  };

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
