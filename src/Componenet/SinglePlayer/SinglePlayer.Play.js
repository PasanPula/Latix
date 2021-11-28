import {memo, useRef} from 'react';
import Timer from '../Timer/Timer';
import Grid from '../Game grid/grid';
import Button from '../Game grid/components/Button';
import CorrectIncorrectDisplay from '../crt.incrt.display/Correct.Incorrect.Display';


function SinglePlayerPlay({setTimeSpent,Correct,incorrect ,setinCorrectCount,setCorrectCount,time,operator,numberRangeStart,numberRangeEnd,gridSize}) {

    const setShowRef = useRef(); 
    const resultValueCountRef = useRef();





    return (
        <div  className="Container">
              <Grid ref={setShowRef} resultValueCountRef={resultValueCountRef} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} gridSize ={gridSize} numberRangeStart={numberRangeStart} numberRangeEnd={numberRangeEnd} MathOperator={operator}/>

        <div className="Grid2">
            <div className="Fixed">
                <div> <Timer setTimeSpent={setTimeSpent} showValRef={setShowRef} initMinute={time} /> </div>
                <div> <div className="bottom"><Button onshow={() =>{setShowRef.current.setShow(true)}}/> </div></div>
                 
              </div>
        </div>
        < CorrectIncorrectDisplay ref={resultValueCountRef}  />
    </div> 
  

    )
}

export default memo(SinglePlayerPlay);