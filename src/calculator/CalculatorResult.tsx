interface Props{
    result: number | string | undefined;
    first: number;
    second:number;
}

const CalculatorResult = ({result, first, second}: Props) => {



    return (
        <div style={{border:"4px solid white"}}>
        <h1 style={{color: "#350"}}>{result}</h1>
        <p>for values {first} and {second}</p>
        </div>

    )
}

export default CalculatorResult