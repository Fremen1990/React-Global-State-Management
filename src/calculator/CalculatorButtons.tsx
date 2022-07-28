interface Props {
  setOperationResult: (result: number | string) => void;
  first: number;
  second: number;
  addToHistory: (line: string) => void;
  clearHistory: () => void;
  history: string[];
}

const CalculatorButtons = ({ clearHistory, history }: Props) => {
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
