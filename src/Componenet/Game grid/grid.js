import { useState,useEffect } from 'react';
import Generate from './components/Generate';
import { randomUnique } from "./components/getrandom";


export default function Grid({MathOperator ,numberRangeStart,numberRangeEnd,gridSize}) {

    const[rowNumbers,setRowNumbers] = useState([]);
    const[coloumNumbers,setcoloumNumbers] = useState([]);

    

    useEffect(() => {
        
        window.dispatchEvent(new CustomEvent("navigationhandler"));

    
        if(MathOperator=="/")
        {
            console.log("divide");
            setRowNumbers(randomUnique(numberRangeStart,numberRangeEnd-5,gridSize));
            setcoloumNumbers(randomUnique(numberRangeStart+4,numberRangeEnd,gridSize));
        }
        else
        {
            setRowNumbers(randomUnique(numberRangeStart,numberRangeEnd,gridSize));
            setcoloumNumbers(randomUnique(numberRangeStart,numberRangeEnd,gridSize));
        }




    }, [numberRangeStart , numberRangeEnd , gridSize])

   

    return (
        <div>
            < Generate MathOperator={MathOperator} gridSize ={gridSize} rowNumbers={rowNumbers} coloumNumbers={coloumNumbers}/>
        </div>
    )
}
