import { useRef, useEffect } from "react";
import Timer from "../../Componenet/Timer/Timer";
import Grid from "../../Componenet/Game grid/grid";
import Submitbutton from "../../Componenet/Game grid/components/Button";
import CorrectIncorrectDisplay from "../../Componenet/crt.incrt.display/Correct.Incorrect.Display";
import FinishList from "./Finish List/FinishList";
import { useSocket } from "../../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import CreatorControls from "./CreatorControls";
import './Multiplayer.play.css';

export default function MultiplayerPlay({
  SubmitAnswers,
  isJoinAsPlayer,
  isCreator,
  setisCreator,
  name,
  Gameid,
  setTimeSpent,
  Correct,
  incorrect,
  setinCorrectCount,
  setCorrectCount,
  time,
  gridSize,
  operator,
  columnNumbers,
  rowNumbers,
  setUserResult,
}) {
  const setShowRef = useRef();
  const resultValueCountRef = useRef();
  const socket = useSocket();
  const history = useHistory();

  useEffect(() => {
    if (isCreator && !isJoinAsPlayer) {
      setShowRef.current.setShow(true);
    }

    socket.on("GetResult", (res) => {
      setUserResult(res);

      if (setShowRef.current !== null) {
        setShowRef.current.setShow(true);
      }
      history.push("/Multiplay/result");
    });
  });

  return (
    // <div>
    //   <div className="grid-Container">
    //     <Grid
    //       ref={setShowRef}
    //       resultValueCountRef={resultValueCountRef}
    //       setCorrectCount={setCorrectCount}
    //       setinCorrectCount={setinCorrectCount}
    //       gridSize={gridSize}
    //       columnNumbers={columnNumbers}
    //       rowNumbers={rowNumbers}
    //       MathOperator={operator}
    //     />

    //     <div className="Grid2">
    //       <div className="Fixed">
    //         <div>
    //           <Timer
    //             isJoinAsPlayer={isJoinAsPlayer}
    //             SubmitAnswers={SubmitAnswers}
    //             setTimeSpent={setTimeSpent}
    //             showValRef={isJoinAsPlayer ? setShowRef : false}
    //             initMinute={time}
    //           />
    //         </div>

    //         {isJoinAsPlayer ? (
    //           <div>
    //             <div className="bottom">
    //               <Submitbutton
    //                 onshow={() => {
    //                   setShowRef.current.setShow(true);
    //                 }}
    //               />
    //             </div>
    //           </div>
    //         ) : (
    //           <span></span>
    //         )}

    //       </div>
    //     </div>

    //     {(isJoinAsPlayer && isJoinAsPlayer) ? (
    //       <CorrectIncorrectDisplay ref={resultValueCountRef} />
    //     ) : (
    //       <span></span>
    //     )}
    //   </div>

    //   <CreatorControls isCreator={isCreator} setisCreator={setisCreator} Gameid = {Gameid}/>

    // </div>

    <div className="container-fluid vh-100">
      <div className="row vh-5 " style={{ backgroundColor: "red" }}>
        <div className="col-md-12">Logo</div>
      </div>
      <div className="row vh-80 align-items-center">
        <div className="col-md-8 ">
          <Grid
          ref={setShowRef}
          resultValueCountRef={resultValueCountRef}
          setCorrectCount={setCorrectCount}
          setinCorrectCount={setinCorrectCount}
          gridSize={gridSize}
          columnNumbers={columnNumbers}
          rowNumbers={rowNumbers}
          MathOperator={operator}
        />
        </div>
        <div className=" pe-3 col-md-3 text-center ">
          <div className="row align-items-center">
            <div className="col-md-12 multi-play-timer">
            <Timer
                isJoinAsPlayer={isJoinAsPlayer}
                SubmitAnswers={SubmitAnswers}
                setTimeSpent={setTimeSpent}
                showValRef={isJoinAsPlayer ? setShowRef : false}
                initMinute={time}
              />
            </div>
          </div>
          <div className="row ">
            <div className=" col-md-12 gx-0">
            <FinishList />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5">
            {isJoinAsPlayer ? (
              <div>
                <div className="bottom">
                  <Submitbutton
                    onshow={() => {
                      setShowRef.current.setShow(true);
                    }}
                  />
                </div>
              </div>
            ) : (
              <span></span>
            )}
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>




  );
}
