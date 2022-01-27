import React from "react";
import "./leaderboard.css";
import { FaCrown } from "react-icons/fa";

export default function Leaderboard({ userList, title }) {
  const users = userList.map((user, index) => {
    return (
      // <li key={index} className="mt-2">
      //   <div className="row justify-content-center">
      //     <div className="col-md-2 text-center">
      //       <img
      //         className="leaderboard-avatar"
      //         src={`/Assets/Avatar list/${user.Avatar}.svg`}
      //         alt="avatar"
      //       />
      //     </div>
      //     <div className="col-md-8 text-center">
      //       <mark>{user.User}</mark>
      //     </div>
      //     <div className="col-md-2 text-center">
      //       {user.Owner ? (
      //         <FaCrown className="Leaderboard-icon" />
      //       ) : (
      //         <span></span>
      //       )}
      //     </div>
      //   </div>
      // </li>

      <li  key={index} className="mt-2">
      <div className="row align-items-center ">
        <div className="col-md-2 text-center">
          <img
            className="leaderboard-avatar"
            src={`/Assets/Avatar list/${user.Avatar}.svg`}
            alt="avatar"
          />
        </div>
        <div className="col-md-8 text-center">
          <mark>{user.User}</mark>
        </div>
        <div className="col-md-2">
        {user.Owner ? (
              <FaCrown className="Leaderboard-icon" />
            ) : (
              <span></span>
            )}
        </div>
      </div>
    </li>

    );
  });

  return (
    <div>
      <div className="leaderboard">
        <h1>
          Joined Players-{" "}
          <samp className="Number-leader"> {userList.length} </samp>
        </h1>
        {/* <span className="leaderboard-breakline"></span>
         */}
        <hr className="leaderboard-breakline"></hr>
        {/* <div className="leaderboard-list"> */}
        <div className="row justify-content-center leaderboard-list gx-0">
          <div className="col-md-11 ">
            <ol>
              {users}
            </ol>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
