import {memo, useRef,useEffect} from 'react';
import Timer from '../Componenet/Timer/Timer';
import Grid from '../Componenet/Game grid/grid';
import Button from '../Componenet/Game grid/components/Button';
import CorrectIncorrectDisplay from '../Componenet/crt.incrt.display/Correct.Incorrect.Display';
import { IoHome} from "react-icons/io5";



function SinglePlayerPlay({setTimeSpent,Correct,incorrect ,setinCorrectCount,setCorrectCount,time,operator,gridSize,columnNumbers,rowNumbers}) {

    const setShowRef = useRef(); 
    const resultValueCountRef = useRef();


    return (
    //     <div  className="Container">
    //           <Grid ref={setShowRef} resultValueCountRef={resultValueCountRef} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} gridSize ={gridSize} columnNumbers={columnNumbers} rowNumbers={rowNumbers} MathOperator={operator}/>

    //     <div className="Grid2">
    //         <div className="Fixed">
    //             <div> <Timer setTimeSpent={setTimeSpent} showValRef={setShowRef} initMinute={time} /> </div>
    //             <div> <div className="bottom"><Button onshow={ () =>{setShowRef.current.setShow(true)}}/> </div></div>
                 
    //           </div>
    //     </div>
    //     < CorrectIncorrectDisplay ref={resultValueCountRef}  />
    // </div> 

    <div className="container-fluid vh-100">
    <div className="row vh-5" style={{ backgroundColor: "red" }}>
      <div className="col-md-12">Logo</div>
    </div>
    <div className="row vh-80  align-items-center">
      <div className="col-md-8 ">
        <div className="row">
          <div className="col-md-12">
          <Grid ref={setShowRef} resultValueCountRef={resultValueCountRef} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} gridSize ={gridSize} columnNumbers={columnNumbers} rowNumbers={rowNumbers} MathOperator={operator}/>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 d-flex justify-content-between">
          < CorrectIncorrectDisplay ref={resultValueCountRef}  />
          </div>
        </div>
      </div>
      <div className=" pe-3 col-md-4 text-center ">
        <div className="row align-items-center">
          <div className="col-md-12">
          <label className="no">Time Remaining</label>
            <Timer setTimeSpent={setTimeSpent} showValRef={setShowRef} initMinute={time} />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 ">
              <div className="bottom">
              <Button onshow={ () =>{setShowRef.current.setShow(true)}}/>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5 vh-5 align-items-center">
          <div  className="col-md-2 ">
          <button className="home-navigate-button">
            <IoHome />
          </button>
          </div>
          <div className="col-md-6 ">
          </div>
          <div  className="col-md-4 text-center">
          </div>
        </div>
  </div>
  

    )
}

export default memo(SinglePlayerPlay);