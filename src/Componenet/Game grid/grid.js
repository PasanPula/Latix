import { useState,useEffect, memo, useRef, forwardRef,useImperativeHandle } from 'react';
import Generate from './components/Generate';
import { randomUnique } from "./components/getrandom";
import { useHistory } from 'react-router';



function Grid({ setCorrectCount ,setinCorrectCount,MathOperator ,numberRangeStart,numberRangeEnd,gridSize},ref) {

    useImperativeHandle(ref, () => ({setShow: (bool) => {return setShowref.current.setShow(bool) }}), []);

    const[rowNumbers,setRowNumbers] = useState([]);
    const[coloumNumbers,setcoloumNumbers] = useState([]);
    const history = useHistory();
    const setShowref = useRef();



    useEffect(() => {
        
        window.dispatchEvent(new CustomEvent("navigationhandler"));

          
        if(MathOperator==="/")
        {
            setRowNumbers(randomUnique(numberRangeStart,numberRangeEnd-5,gridSize));
            setcoloumNumbers(randomUnique(numberRangeStart+4,numberRangeEnd,gridSize));
        }
        else
        {
            setRowNumbers(randomUnique(numberRangeStart,numberRangeEnd,gridSize));
            setcoloumNumbers(randomUnique(numberRangeStart,numberRangeEnd,gridSize));
        }

        const unloadCallback = (event) => {
            history.push("/");
            event.preventDefault();
            event.returnValue = "";
            return "";
          };
        
          window.addEventListener("beforeunload", unloadCallback);
          return () => window.removeEventListener("beforeunload", unloadCallback);




    }, [history,MathOperator,numberRangeStart , numberRangeEnd , gridSize])

   

    return (
        <div>
            < Generate    ref={setShowref} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} MathOperator={MathOperator} gridSize ={gridSize} rowNumbers={rowNumbers} coloumNumbers={coloumNumbers}/>
        </div>
    )
}


export default memo(forwardRef(Grid));
