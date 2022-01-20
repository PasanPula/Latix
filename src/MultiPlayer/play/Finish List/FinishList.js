import { useEffect, useState } from "react";
import { useSocket } from "../../../Services/SocketProvider";
// eslint-disable-next-line
import Leaderboard from "../../../Componenet/leaderboard/leaderboard";
import { IoCreate } from "react-icons/io5";
import "./FinishList.css";

export default function FinishList() {
  const [userList, setUserList] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    socket.on("GetFinished", (res) => {
      setUserList(res);
    });
    return () => {
      socket.off("GetFinished");
    };
  }, [socket]);

  const users = userList.map((user, index) => {
    return (
      <li key={index}>
        <img
          className="FinishList-avatar"
          src={`/Assets/Avatar list/${user.Avatar}.svg`}
          alt="avatar"
        />
        <mark>{user.User}</mark>
        {user.Owner ? <IoCreate className="FinishList-icon" /> : <span></span>}
      </li>
    );
  });

  return (
    {
      /* <label style={{ color: "blue" }}>Leaderboard</label>
      <ul style={ { listStyleType: "none"}} >
      {users}
      </ul> */
    },
    (
      <>
        <div className="FinishList">
          <h1>Finished Users-{userList.length}</h1>
          {/* <span className="leaderboard-breakline"></span>
           */}
          <hr className="leaderboard-breakline"></hr>
          <div className="FinishList-list">
            <ol>{users}</ol>
          </div>
        </div>
      </>
    )
  );
}
