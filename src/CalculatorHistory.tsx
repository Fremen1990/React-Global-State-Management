interface Props {
history: string[]
}

const CalculatorHistory=({history}: Props)=>{


    return(
        <div style={{border:"4px solid white"}}>

            <h3>Hisotry</h3>
        <ul >
            {history.map((line, i)=> <li style={{listStyleType: "none"}} key={i}>{line}</li>)}
        </ul>
        </div>

    )
}

export default CalculatorHistory