import { useState,useEffect } from 'react';
import Generate from './components/Generate';
import { randomUnique } from "./components/getrandom";


export default function Grid({operator ,numberRangeStart,numberRangeEnd,gridSize}) {

    const[rowNumbers,setRowNumbers] = useState([]);
    const[coloumNumbers,setcoloumNumbers] = useState([]);


    useEffect(() => {
        setRowNumbers(randomUnique(numberRangeStart,numberRangeEnd,gridSize));
        setcoloumNumbers(randomUnique(numberRangeStart,numberRangeEnd,gridSize));
    }, [numberRangeStart , numberRangeEnd , gridSize])

   

    return (
        <div>
            < Generate MathOperator={operator} gridSize ={gridSize} rowNumbers={rowNumbers} coloumNumbers={coloumNumbers}/>

        </div>
    )
}
