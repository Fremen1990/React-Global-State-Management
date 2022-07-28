import { combineReducers, createStore } from "redux";
import calculatorReducer from "../reducers/calculator-reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
