import React from "react";
import "./leaderboard.css";
import { IoCreate } from "react-icons/io5";


export default function Leaderboard({ userList,title }) {
  const users = userList.map((user, index) => {
    return (
      <li key={index}>
        <img
          className="leaderboard-avatar"
          src={`/Assets/Avatar list/${user.Avatar}.svg`}
          alt="avatar"
        />
        <mark>{user.User}</mark>
        {
          user.Owner ?
        <IoCreate className="Leaderboard-icon"/> : <span></span>
        }
      </li>
    );
  });

  return (
    <div>
      <div className="leaderboard">
        <h1>Joined Players-{userList.length}</h1>
        {/* <span className="leaderboard-breakline"></span>
         */}
         <hr className="leaderboard-breakline"></hr>
        <div className="list">
          <ol>
          {users}
          </ol>
        </div>
      </div>
    </div>
  );
}
