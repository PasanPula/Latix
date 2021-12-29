import { useState, useRef, useCallback, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MultiPlayerMode from "./MultiPlayer.mode";
import MultiplayerLogin from "./Multiplayer.login";
import MultiPlayerCreate from "./create/Multiplayer.create";
import { useSocket } from "../Services/SocketProvider";
import MultiplayerJoin from "./Multiplayer.join";
import MultiplayerLobby from "./Multiplayer.lobby";
import MultiplayerPlay from "./play/Multiplayer.play";
import MultiplayerResult from "./result/Multiplayer.result";
import MultiplayerLinkJoin from "./link join/Multiplayer.Link";

export default function MultiPlayer() {
  const [showCheckBox, setShowCheckBox] = useState(false);
  const name = useRef();
  const isJoinAsPlayer = useRef(true);
  const time = useRef(5);
  const size = useRef(5);
  const selectedOperator = useRef("+");
  const rowNumbers = useRef([]);
  const coloumNumbers = useRef([]);
  const GameId = useRef("");
  const isCreator = useRef(false);

  const timeSpent = useRef(0);
  const Correct = useRef(0);
  const incorrect = useRef(0);
  const isFinished = useRef(false);
  const socket = useSocket();
  const userResult = useRef();

 

  

  const setUserResult = (val) => {
    userResult.current = val;
  };

  const SubmitAnswers = () => {
    socket.emit(
      "SetResult",
      {
        GameId: GameId.current,
        Results: {
          Time: parseFloat(timeSpent.current),
          Correct: Correct.current,
          InCorrect: incorrect.current,
        },
      },
      (res) => {
        //  console.log(res);
      }
    );
  };

  const CreateGame = (history) => {
    socket.emit(
      "CreateGame",
      {
        UserName: name.current,
        Avatar: 1,
        GameName: name.current,
        GameDetails: {
          Column: coloumNumbers.current,
          Row: rowNumbers.current,
          Operator: selectedOperator.current,
          Size: size.current,
          Time: time.current,
        },
        GameId: GameId.current,
      },
      (response) => {
        if (response.Game !== "") {
          isCreator.current = true;
          GameId.current = response.GameId;
          history.push("/Multiplay/lobby");
        } else {
          alert("empty");
        }
      }
    );
  };

  const setGameId = (val) => {
    GameId.current = val;
  };

  const setTimeSpent = (val) => {
    timeSpent.current = val;
  };

  const setCorrectCount = useCallback((value) => {
    Correct.current = value;
  }, []);

  const setinCorrectCount = useCallback((value) => {
    incorrect.current = value;
  }, []);

  const setRowNumbers = (val) => {
    rowNumbers.current = val;
  };
  const setColoumNumbers = (val) => {
    coloumNumbers.current = val;
  };

  const HandleSetSize = (val) => {
    size.current = val;
  };

  const HandleSetTime = (val) => {
    time.current = val;
  };

  const HandleSelectedOperator = (val) => {
    selectedOperator.current = val;
  };

  const setName = (value) => {
    name.current = value.target.value;
  };

  const setIsJoinAsPlayer = (bool) => {
    isJoinAsPlayer.current = bool;
  };

  const HandleShowCheckBox = (bool) => {
    setShowCheckBox(bool);
  };

  return (
    <div>
      <Switch>
        <Route
          path="/Multiplay/Mode"
          component={() => (
            <MultiPlayerMode HandleShowCheckBox={HandleShowCheckBox} />
          )}
        />
        <Route
          path="/Multiplay/Login"
          component={() => (
            <MultiplayerLogin
              HandleShowCheckBox={HandleShowCheckBox}
              name={name.current}
              setName={setName}
              showCheckBox={showCheckBox}
              setIsJoinAsPlayer={setIsJoinAsPlayer}
            />
          )}
        />
        <Route
          path="/Multiplay/create"
          component={() => (
            <MultiPlayerCreate
              CreateGame={CreateGame}
              setRowNumbers={setRowNumbers}
              setColoumNumbers={setColoumNumbers}
              HandleSetSize={HandleSetSize}
              HandleSetTime={HandleSetTime}
              HandleSelectedOperator={HandleSelectedOperator}
            />
          )}
        />
        <Route exact
          path="/Multiplay/join"
          component={() => (
            <MultiplayerJoin name={name.current} setGameId={setGameId} />
          )}
        />
        <Route
          path="/Multiplay/lobby"
          component={() => (
            <MultiplayerLobby
              setColoumNumbers={setColoumNumbers}
              setRowNumbers={setRowNumbers}
              HandleSelectedOperator={HandleSelectedOperator}
              HandleSetSize={HandleSetSize}
              HandleSetTime={HandleSetTime}
              // isCreator={isCreator.current}
              name={name.current}
              Gameid={GameId.current}
            />
          )}
        />
        <Route
          path="/Multiplay/play"
          component={() => (
            <MultiplayerPlay
              setUserResult={setUserResult}
              SubmitAnswers={SubmitAnswers}
              isJoinAsPlayer={isJoinAsPlayer.current}
              isCreator={isCreator.current}
              name={name.current}
              Gameid={GameId.current}
              setTimeSpent={setTimeSpent}
              Correct={Correct.current}
              incorrect={incorrect.current}
              setinCorrectCount={setinCorrectCount}
              setCorrectCount={setCorrectCount}
              time={time.current}
              gridSize={size.current}
              operator={selectedOperator.current}
              rowNumbers={rowNumbers.current}
              columnNumbers={coloumNumbers.current}
            />
          )}
        />
        <Route
          path="/Multiplay/result"
          component={() => (
            <MultiplayerResult
              isCreator={isCreator.current}
              userResult={userResult.current}
            />
          )}
        />
        <Route 
          path="/Multiplay/join/:code"
          component={() => (
            <MultiplayerLinkJoin  name={name.current} setGameId={setGameId} setName={setName}   />
          )}
        />

        <Redirect to="/Multiplay/Mode" />
      </Switch>
    </div>
  );
}
