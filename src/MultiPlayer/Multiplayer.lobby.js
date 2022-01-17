import { useEffect, useState } from "react";
import { useSocket } from "../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import "./lobby/Multiplayer.Lobby.css";
import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";
import Leaderboard from "../Componenet/leaderboard/leaderboard";
import CopyButton from "../Componenet/copy button/copy.button";

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
  const [url, setURL] = useState("Empty");

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

    setURL(window.location.origin.concat("/Multiplay/join/" + Gameid));

    return () => {
      socket.off("GetUser");
      socket.off("GetGame");
    };
  }, [
    Gameid,
    HandleSelectedOperator,
    HandleSetSize,
    HandleSetTime,
    history,
    setColoumNumbers,
    setRowNumbers,
    socket,
    userList,
  ]);



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
    <div className="container-fluid vh-100">
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
        <button className="lobby-start-game"  onClick={handleStart}>Start Game</button>
        </div>
        <div className="col-md-2  text-center"> </div>
      </div>
    </div>
  );
}
