import { useEffect, useState } from "react";
import { useSocket } from "../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import "./lobby/Multiplayer.Lobby.css";
import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";
import Leaderboard from "../Componenet/leaderboard/leaderboard";
import CopyButton from "../Componenet/copy button/copy.button";
import { ReactComponent as Countdown } from "./lobby/countdown/countdown.svg";

export default function MultiplayerLobby({
  setColoumNumbers,
  setRowNumbers,
  HandleSelectedOperator,
  HandleSetSize,
  HandleSetTime,
  name,
  Gameid,
  setisCreator,
}) {
  const [userList, setUserList] = useState([]);
  const [tempCreator, setTempCreator] = useState(false);
  const [showCountdown, setshowCountdown] = useState("lobby-countdown");
  const socket = useSocket();
  const history = useHistory();
  const [url, setURL] = useState("Empty");

  useEffect(() => {
    socket.on("GetUser", (res) => {
      setUserList(res);
      console.log("lobby", res);
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

    socket.on("GetGame", (res) => {
      setColoumNumbers(res.Column);
      setRowNumbers(res.Row);
      HandleSelectedOperator(res.Operator);
      HandleSetSize(parseInt(res.Size));
      HandleSetTime(parseInt(res.Time));

      setshowCountdown("lobby-countdown show-countdown");

      setTimeout(function () {
        setshowCountdown("lobby-countdown");
        history.push("/Multiplay/play");
      }, 4400);
    });

    setURL(window.location.origin.concat("/Multiplay/join/" + Gameid));

    return () => {
      socket.off("GetUser");
      socket.off("GetGame");
      setshowCountdown("lobby-countdown");
    };
  }, [Gameid, HandleSelectedOperator, HandleSetSize, HandleSetTime, history, setColoumNumbers, setRowNumbers, setisCreator, socket, userList]);

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

  const randomKey = () => {
    return Math.floor(Math.random() * 10000) + 10000;
  };

  return (
    // <div>
    //   <div>
    //     <label style={{ color: "white" }}>Userlist</label>
    //     {users}
    //   </div>
    //   {tempCreator ?
    //     <div>
    //       <label style={{ color: "white" }}>Game Code:</label>
    //       <input
    //         placeholder="Game Code"
    //         type="text"
    //         name="GameCode"
    //         value={Gameid}
    //         disabled={true}
    //       />
    //       <label style={{ color: "white" }}>Game Link:</label>
    //       <input
    //         placeholder="Game Code"
    //         type="text"
    //         name="GameCode"
    //         value={url}
    //         disabled={true}
    //       />
    //       <div>
    //         <Button onClick={handleStart}>Start Game</Button>
    //       </div>
    //     </div>
    //    :
    //     <span></span>
    //   }
    // </div>
    <>
      <div key={randomKey()} className={showCountdown}>
        <Countdown className="lobby-countdown-img" />
      </div>
      <div className="container-fluid vh-100 ">
        <div className="row vh-10 " style={{ backgroundColor: "red" }}>
          <div className="col-md-12">
            <h3>LOGO</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 text-center ">
            <button className="home-navigate-button">
              <IoChevronBackCircleSharp />
            </button>
          </div>
          <div className="col-md-8 "></div>
          <div className="col-md-2 "></div>
        </div>
        <div className="row vh-70 align-items-center">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-12 text-center ">
                <label className="lobby-title">Share with friends</label>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <label className="lobby-label">Game Link:</label>
                <CopyButton value={url} />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <label className="lobby-label">Game Code:</label>
                <CopyButton value={Gameid} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Leaderboard userList={userList} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2  text-center">
            <button className="home-navigate-button">
              <IoHome />
            </button>
          </div>
          <div className="col-md-8 text-center">
            {tempCreator ? (
              <button className="lobby-start-game" onClick={handleStart}>
                Start Game
              </button>
            ) : (
              <label className="lobby-label">Waiting for Start</label>
            )}
          </div>
          <div className="col-md-2  text-center"> </div>
        </div>
      </div>
    </>
  );
}
