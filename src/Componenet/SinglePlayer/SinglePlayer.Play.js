import {memo, useRef} from 'react';
import Timer from '../Timer/Timer';
import Grid from '../Game grid/grid';
import Button from '../Game grid/components/Button';
import Text from '../Game grid/components/Text';

function SinglePlayerPlay({showBool,Correct,incorrect ,setinCorrectCount,setCorrectCount,time,operator,numberRangeStart,numberRangeEnd,gridSize}) {

    const setShowRef = useRef(); 


     const button = (
              <div className="bottom">
              <Button onshow={() =>{setShowRef.current.setShow(true)}}/>
              <Text text="Correct" value={(showBool)?Correct:0}/>
              <Text text = "Wrong" value={(showBool)?incorrect:0} />
             </div>
          )
        
 
    return (
        <div  className="Container">
              <Grid ref={setShowRef} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} gridSize ={gridSize} numberRangeStart={numberRangeStart} numberRangeEnd={numberRangeEnd} MathOperator={operator}/>

        <div className="Grid2">
            <div className="Fixed">
                <div> <Timer initMinute={time} /> </div>
                <div>  </div>
                 
              </div>
        </div>
        {button}
    </div> 
  

    )
}

export default memo(SinglePlayerPlay);