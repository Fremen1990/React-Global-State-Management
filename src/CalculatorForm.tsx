interface Props {
    first: number;
    second: number;
    handleFirstChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CalculatorForm = ({first, second, handleFirstChange, handleSecondChange}: Props) => {


    return <>
        <input style={{fontSize: 24, width: 100}} type="number" value={first} onChange={handleFirstChange}/>
        <input style={{fontSize: 24, width: 100}} type="number" value={second} onChange={handleSecondChange}/>


    </>
}
export default CalculatorForm