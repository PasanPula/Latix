import { useState } from "react";
import { useSocket } from "../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import "./join/Multiplayer.join.css";

export default function MultiplayerJoin({ name, setGameId, avatar }) {
  const [gameCode, setGameCode] = useState("");
  const socket = useSocket();
  const history = useHistory();

  const handleGameCode = (val) => {
    setGameCode(val.target.value);
  };

  const onSubmit = () => {
    socket.emit(
      "JoinGame",
      {
        UserName: name,
        GameId: gameCode,
        Avatar: avatar,
      },
      (res) => {
        if (res.Status === 0) {
          alert(`${res.Message}`);
        } else if (res.Status === 1) {
          setGameId(gameCode);
          console.log(res);
          history.push("/Multiplay/lobby");
        }
      }
    );
  };

  return (
    //     <div>

    //    <input
    //    placeholder="Game Code"
    //     type="text"
    //     name="GameCode"
    //     value={gameCode}
    //     onChange={handleGameCode}
    //     required
    //   />

    // <div>
    //    <button onClick={onSubmit} >Login
    //    </button>
    // </div>

    // </div>
    <div className="container-fluid vh-100">
      <div className="row align-items-center text-center   h-10">
          <div
            className="col-md-4 "
          >
          </div>
          <div
            className="col-md-4 position-front"
          >
             <img
                className="logo-style"
                src={`/Assets/logo.svg`}
                alt="Latix"
              />
          </div>
          <div
            className="col-md-4 position-front"
          >
          </div>
        </div>
      <div className="row align-items-end h-40">
        <div className="col-md-12">
          <div className="row pt-5 justify-content-center">
            <div className="col-md-12 d-flex justify-content-center">
              <img
                className="join-avatar position-front"
                src={`/Assets/Avatar list/${avatar}.svg`}
                alt="avatar"
              />
            </div>
          </div>
          <div className="row pt-2 justify-content-center">
            <div className="col-md-12">
              <label className="join-title-1 pt-2  position-front"> Hi {name} {avatar} </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row h-40 align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-8  d-flex justify-content-center">
          <div>
          <label className="join-textbox-text pt-4  position-front"> Enter Your Game code Here </label>
          <div className="row pt-2 justify-content-center">
            <input
              className="join-input-field  position-front"
              placeholder="Code"
              type="text"
              name="Code"
              value={gameCode}
              onChange={handleGameCode}
              required
            />
          </div>
          <div className="row pt-3 justify-content-center">
            <button onClick={onSubmit} className="btnGame learn-more join-btn  position-front">
              Join
            </button>
          </div>
          </div>

        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
