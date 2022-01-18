import { useEffect, useState } from "react";
import { useSocket } from "../../Services/SocketProvider";
import { Button } from "react-bootstrap";

export default function CreatorControls({ isCreator,setisCreator,Gameid }) {
  const socket = useSocket();
  const [tempCreator, setTempCreator] = useState(isCreator);

  useEffect(() => {

    console.log("isCreator",isCreator);

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

    return () => {
      socket.off("GetUser");
    };
  });

  const endGame = () => {
    socket.emit(
      "GetResult",
      {
        GameId: Gameid,
      },
      (res) => {
        console.log("get result", res);
      }
    );
  };

  return (
    <div>
      {tempCreator ? <Button onClick={endGame}>Next</Button> : <span></span>}
    </div>
  );
}
