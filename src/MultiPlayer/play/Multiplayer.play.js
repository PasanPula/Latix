import { useRef, useEffect,useState } from "react";
import Timer from "../../Componenet/Timer/Timer";
import Grid from "../../Componenet/Game grid/grid";
import Submitbutton from "../../Componenet/Game grid/components/Button";
import CorrectIncorrectDisplay from "../../Componenet/crt.incrt.display/Correct.Incorrect.Display";
import FinishList from "./Finish List/FinishList";
import { useSocket } from "../../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import CreatorControls from "./CreatorControls";
import './Multiplayer.play.css';
import { IconButton } from "../../Componenet/Button/ButtonIcon/Button";
import { faHome } from "@fortawesome/free-solid-svg-icons";


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
  // const timeSpentRef = useRef("0.0");
  const [timeSpentRef, settimeSpentRef] = useState("0.0");
  const showResult = useRef(false);
  const socket = useSocket();
  const history = useHistory();

  const setshowResult = (val) =>
  {
    showResult.current = val;
  }

  useEffect(() => {
     
    if(name === undefined)
    {
      onGoBackHome();
    }

    if (isCreator && !isJoinAsPlayer) {
      setShowRef.current.setShow(true);
    }

    socket.on("GetResult", (res) => {

      if (setShowRef.current !== null) {
        setShowRef.current.setShow(true);
      }

      setUserResult(res);

      history.push("/Multiplay/result");
    });
  });


  const onGoBackHome = () => 
  {
    history.push("/");
    history.go(0);
  }

  const handleTimeSpent = (val) => 
  {
    settimeSpentRef(val);
    setTimeSpent(val);
  }


  return (
   
    <div className="container-fluid vh-100">
     <div className="row align-items-center text-center   vh-10">
          <div
            className="col-md-4 "
          >
          </div>
          <div
            className="col-md-4"
          >
             <img
                className="multi-logo-style position-front"
                src={`/Assets/logo.svg`}
                alt="Latix"
              />
          </div>
          <div
            className="col-md-4 "
          >
          </div>
        </div>
      <div className="row  align-items-center">
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-12 position-front">
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
              // showResult.current?
          <CorrectIncorrectDisplay ref={resultValueCountRef} timeSpentRef={timeSpentRef} showResult={showResult.current} /> 
          // : <span></span>
        ) : (
          <span></span>
        )}
            </div>
          </div>
        </div>
        <div className=" pe-3 col-md-4 text-center ">
          <div className="row align-items-center">
            <div className="col-md-12">
            <label className="multi-play-time-label position-front">Time Remaining</label>
            <Timer
                isJoinAsPlayer={isJoinAsPlayer}
                SubmitAnswers={SubmitAnswers}
                setTimeSpent={handleTimeSpent}
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
                      setshowResult(true)
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
      <div className="row mt-5 vh-5 align-items-center">
            <div  className="col-md-2 ">
            <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBackHome}
          />
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
