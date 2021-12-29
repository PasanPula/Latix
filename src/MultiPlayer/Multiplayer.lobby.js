import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSocket } from "../Services/SocketProvider";
import { useHistory } from "react-router-dom";

export default function MultiplayerLobby({
  setColoumNumbers,
  setRowNumbers,
  HandleSelectedOperator,
  HandleSetSize,
  HandleSetTime,
  name,
  Gameid,
}) {
  const [userList, setUserList] = useState([]);
  const [tempCreator, setTempCreator] = useState(false);
  const socket = useSocket();
  const history = useHistory();
  const [url,setURL] = useState("Empty");

  useEffect(() => {
    
    socket.on("GetUser", (res) => {
      setUserList(res);

      console.log(res);
      res.filter((user) => {
        if (user.UserId === socket.id) {
          setTempCreator(user.Owner);
        }
        return user;
      });
    });

    socket.on("GetGame", (res) => {
      setColoumNumbers(res.Column);
      setRowNumbers(res.Row);
      HandleSelectedOperator(res.Operator);
      HandleSetSize(parseInt(res.Size));
      HandleSetTime(parseInt(res.Time));
      history.push("/Multiplay/play");
    });


    setURL(window.location.origin.concat("/Multiplay/join/"+Gameid)  );

    return () => {
      socket.off("GetUser");
      socket.off("GetGame");
    };
  }, [Gameid, HandleSelectedOperator, HandleSetSize, HandleSetTime, history, setColoumNumbers, setRowNumbers, socket, userList]);

  const users = userList.map((user, index) => {
    return (
      <li key={index}>
        <label style={{ color: "white" }}>{index + 1}: </label>
        <label style={{ color: "White" }}> {user.User} </label>
      </li>
    );
  });

  const handleStart = () => {
    socket.emit(
      "GetGame",
      {
        GameId: Gameid,
      },
      (res) => {
        // console.log(res);
      }
    );
  };

  return (
    <div>
      <div>
        <label style={{ color: "white" }}>Userlist</label>
        {users}
      </div>
      {tempCreator ? 
        <div>
          <label style={{ color: "white" }}>Game Code:</label>
          <input
            placeholder="Game Code"
            type="text"
            name="GameCode"
            value={Gameid}
            disabled={true}
          />
          <label style={{ color: "white" }}>Game Link:</label>
          <input
            placeholder="Game Code"
            type="text"
            name="GameCode"
            value={url}
            disabled={true}
          />
          <div>
            <Button onClick={handleStart}>Start Game</Button>
          </div>
        </div>
       : 
        <span></span>
      }
    </div>
  );
}
