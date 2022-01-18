import { useRef, useEffect } from "react";
import Timer from "../../Componenet/Timer/Timer";
import Grid from "../../Componenet/Game grid/grid";
import Submitbutton from "../../Componenet/Game grid/components/Button";
import CorrectIncorrectDisplay from "../../Componenet/crt.incrt.display/Correct.Incorrect.Display";
import Leaderboard from "./Leaderboard";
import { useSocket } from "../../Services/SocketProvider";
import { useHistory } from 'react-router-dom';
import CreatorControls from  './CreatorControls';

export default function MultiplayerPlay({
  SubmitAnswers,
  isJoinAsPlayer,
  isCreator,
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

    socket.on("GetResult",(res) => 
    {
        setUserResult(res);

        if(setShowRef.current!== null)
        {
          setShowRef.current.setShow(true);
        }
        history.push('/Multiplay/result');
    })
  });

  

  return (
    <div>
      <div className="Container">
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

        <div className="Grid2">
          <div className="Fixed">
            <div>
              <Timer
                isJoinAsPlayer={isJoinAsPlayer}
                SubmitAnswers={SubmitAnswers}
                setTimeSpent={setTimeSpent}
                showValRef={isJoinAsPlayer ? setShowRef : false}
                initMinute={time}
              />
            </div>

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

            <Leaderboard />
          </div>
        </div>

        {(isJoinAsPlayer && isJoinAsPlayer) ? (
          <CorrectIncorrectDisplay ref={resultValueCountRef} />
        ) : (
          <span></span>
        )}
      </div>

      <CreatorControls isCreator={isCreator} Gameid = {Gameid}/>


    </div>
  );
}
