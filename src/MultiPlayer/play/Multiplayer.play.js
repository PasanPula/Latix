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
import { IoHome} from "react-icons/io5";

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
      <div className="row  align-items-center">
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-12">
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
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 d-flex justify-content-between">
            {(isJoinAsPlayer && isJoinAsPlayer) ? (
          <CorrectIncorrectDisplay ref={resultValueCountRef} />
        ) : (
          <span></span>
        )}
            </div>
          </div>
        </div>
        <div className=" pe-3 col-md-4 text-center ">
          <div className="row align-items-center">
            <div className="col-md-12">
            <label className="multi-play-time-label">Time Remaining</label>
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
          <div className="row multi-submit-row">
            <div className="col-md-12 ">
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
      </div>
      {/* <div className="row vh-5 text-center">
        <div className="col-md-12">
        {(isJoinAsPlayer && isJoinAsPlayer) ? (
          <CorrectIncorrectDisplay ref={resultValueCountRef} />
        ) : (
          <span></span>
        )}
        </div>
      </div> */}
      <div className="row mt-5 vh-5 align-items-center">
            <div  className="col-md-2 ">
            <button className="home-navigate-button">
              <IoHome />
            </button>
            </div>
            <div className="col-md-6 ">
            </div>
            <div  className="col-md-4 text-center">
            <CreatorControls isCreator={isCreator} setisCreator={setisCreator} Gameid = {Gameid}/>
            </div>
          </div>
    </div>




  );
}
