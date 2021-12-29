import { useEffect, useState } from "react";
import { useSocket } from "../../Services/SocketProvider";
import { Button } from "react-bootstrap";

export default function CreatorControls({ isCreator,Gameid }) {
  const socket = useSocket();
  const [tempCreator, setTempCreator] = useState(isCreator);

  useEffect(() => {
    socket.on("GetUser", (res) => {
      console.log("cont stream", res);
      res.filter((user) => {
        if (user.UserId === socket.id) {
          setTempCreator(user.Owner);
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
