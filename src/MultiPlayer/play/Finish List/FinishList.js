import { useEffect, useState } from "react";
import { useSocket } from "../../../Services/SocketProvider";
// eslint-disable-next-line
import Leaderboard from "../../../Componenet/leaderboard/leaderboard";
import { FaCrown } from "react-icons/fa";
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
        {user.Owner ? <FaCrown className="FinishList-icon" /> : <span></span>}
      </li>
    );
  });

  return (
      <>
        <div className="FinishList">
          <h1>
          Finished Players-
          <samp className="finishlist-Number-leader"> {userList.length} </samp>
        </h1>
          <hr className="leaderboard-breakline"></hr>
          <div className="row justify-content-center  gx-0">
          <div className=" col-md-12 m-0 ps-2 pe-2 FinishList-list">
            <ol>{users}</ol>
          </div>
          </div>
        </div>
      </>
  );
}
