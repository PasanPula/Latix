import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSocket } from "../../Services/SocketProvider";
import Avatar from "../../Componenet/avatar slider/Avatar";
import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";


export default function MultiplayerLinkJoin({name,setName,setGameId, Setavatar, avatar}) {
  const { code } = useParams();
  const history = useHistory();
  const socket = useSocket();
  const [username,SetUsername] = useState("");

  const handleSubmit = (e) => {

    console.log(name);

    e.preventDefault();
    
    socket.emit("JoinGame",
        {
            UserName:username,
            GameId:code,
            Avatar:avatar
        },(res)=>
        {
            if(res.Status === 0)
            {
                alert(`${res.Message}`);
            }
            else if (res.Status === 1)
            {
                setGameId(code);
                history.push('/Multiplay/lobby');
            }
        });
  };

  const HandleNameChange = (e) => 
  {
    setName(e);
    SetUsername(e.target.value);
  }

  return (
    // <div>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <input
    //       placeholder="Name"
    //       type="text"
    //       name="name"
    //       value={name}
    //       onChange={HandleNameChange}
    //       required
    //     />

    //     <div>
    //       <button>Login</button>
    //     </div>
    //   </form>
    // </div>

    <div className="container-fluid">
      <div style={{ backgroundColor: "red" }} className="row position-front">
        <div className="col-md-12">
          <h3>LOGO</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 text-center ">
          <button className="home-navigate-button">
            {" "}
            <IoChevronBackCircleSharp />{" "}
          </button>
        </div>
        <div className="col-md-8 "></div>
        <div className="col-md-2 "></div>
      </div>
      <div className="row mt-5 ">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <div className="row mb-2">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
            <div className="Login-header-avatar-select position-front">Select Your Avatar</div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
              <Avatar OnChangeAvatar = {Setavatar}/>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
            <div className="Login-header-avatar-select position-front">Enter Your Name:</div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row  ">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row pt-2 justify-content-center position-front">
                  <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={HandleNameChange}
                    required
                    maxLength={15}
                  />
                </div>
                <div className="row pt-3 justify-content-center">
                  <button className="btnGame learn-more position-front">Login</button>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2  mt-5 text-center">
          <button className="home-navigate-button">
            {" "}
            <IoHome />{" "}
          </button>
        </div>
        <div className="col-md-8 mt-5 text-center"></div>
        <div className="col-md-2  text-center"> </div>
      </div>
    </div>









  );
}
