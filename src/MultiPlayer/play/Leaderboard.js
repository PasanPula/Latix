import { useEffect, useState } from "react";
import { useSocket } from "../../Services/SocketProvider";

export default function Leaderboard() {
  const [userList, setUserList] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    socket.on("GetFinished", (res) => {
      setUserList(res);
    });
    return () => 
    {
      socket.off("GetFinished");
    }

  }, [socket]);

  

  const users = userList.map((user, index) => {
    return (
      <li key={index}>
        <label style={{ color: "black" }}>{index + 1}: </label>
        <label style={{ color: "black" }}> { user.User} </label>
      </li>
    );
  });

  return (
    <div>
      <label style={{ color: "blue" }}>Leaderboard</label>
      <ul style={ { listStyleType: "none"}} >
      {users}
      </ul>
    </div>
  );
}
