import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSocket } from "../../Services/SocketProvider";
import FinalResult from "../../Componenet/result page/final.result";
import "./celebration.style.css"

export default function MultiplayerResult({
  isCreator,
  setisCreator,
  userResult,
}) {
  const [result] = useState(userResult);
  const history = useHistory();
  const socket = useSocket();
  // eslint-disable-next-line
  const [tempCreator, setTempCreator] = useState(isCreator);

  useEffect(() => {
    socket.on("GetUser", (res) => {
      res.filter((user) => {
        if (user.UserId === socket.id) {
          if (user.Owner) {
            setisCreator(true);
            setTempCreator(user.Owner);
          }
        }
        return user;
      });
    });

    if (!isCreator) {
      socket.on("UpdateGame", (res) => {
        console.log("result", res);
        if (res.IsUpdate) {
          history.push("/Multiplay/lobby");
        }
      });
    }

    return () => {
      socket.off("UpdateGame");
      socket.off("GetUser");
    };
  });

  // eslint-disable-next-line
  const Result = result.map((data, index) => {
    return (
      <li key={index}>
        <label style={{ color: "white" }}>{index + 1}: </label>
        <label style={{ color: "White" }}> {data.ClientName} </label>
        <label style={{ color: "White" }}> {data.Result.Time} </label>
        <label style={{ color: "White" }}> {data.Result.Correct} </label>
        <label style={{ color: "White" }}> {data.Result.InCorrect} </label>
      </li>
    );
  });

  // eslint-disable-next-line
  const handelPlayAgain = () => {
    history.push("/Multiplay/create");
  };

  return (
    <div>

      
<div class="pyro">
  <div class="before"></div>
  <div class="after"></div>
</div>
      <FinalResult resultList={result} />
      {/* {Result}
      <div>
        {tempCreator ? 
          <Button onClick={handelPlayAgain}>Play Again</Button>
         :
          <span></span>
        }
      </div> */}
    </div>
  );
}
