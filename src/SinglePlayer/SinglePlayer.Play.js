import {memo, useRef,useEffect} from 'react';
import Timer from '../Componenet/Timer/Timer';
import Grid from '../Componenet/Game grid/grid';
import Button from '../Componenet/Game grid/components/Button';
import CorrectIncorrectDisplay from '../Componenet/crt.incrt.display/Correct.Incorrect.Display';


function SinglePlayerPlay({setTimeSpent,Correct,incorrect ,setinCorrectCount,setCorrectCount,time,operator,gridSize,columnNumbers,rowNumbers}) {

    const setShowRef = useRef(); 
    const resultValueCountRef = useRef();


    return (
        <div  className="Container">
              <Grid ref={setShowRef} resultValueCountRef={resultValueCountRef} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} gridSize ={gridSize} columnNumbers={columnNumbers} rowNumbers={rowNumbers} MathOperator={operator}/>

        <div className="Grid2">
            <div className="Fixed">
                <div> <Timer setTimeSpent={setTimeSpent} showValRef={setShowRef} initMinute={time} /> </div>
                <div> <div className="bottom"><Button onshow={ () =>{setShowRef.current.setShow(true)}}/> </div></div>
                 
              </div>
        </div>
        < CorrectIncorrectDisplay ref={resultValueCountRef}  />
    </div> 
  

    )
}

export default memo(SinglePlayerPlay);