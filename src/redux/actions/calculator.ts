import { CalculatorAction } from "../action-types/calculator";

export const setFirst = (first: number) => ({
  type: CalculatorAction.SET_FIRST,
  payload: first,
});
export const setSecond = (second: number) => ({
  type: CalculatorAction.SET_SECOND,
  payload: second,
});
export const setResult = (result: number | string) => ({
  type: CalculatorAction.SET_RESULT,
  payload: result,
});
export const addToHistory = (line: string) => ({
  type: CalculatorAction.ADD_TO_HISTORY,
  payload: line,
});
export const clearHistory = () => ({
  type: CalculatorAction.CLEAR_HISTORY,
});
