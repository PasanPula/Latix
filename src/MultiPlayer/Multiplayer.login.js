import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../Componenet/avatar slider/Avatar";
import "./login/Multiplayer.creator.login.css";

export default function MultiplayerLogin({
  userName,
  setName,
  Setavatar,
  showCheckBox,
  setIsJoinAsPlayer,
  HandleShowCheckBox,
}) {
  const [checked, setChecked] = useState(true);
  const history = useHistory();

  const handleSubmit = () => {
    if (showCheckBox) {
      history.push("/Multiplay/create");
    } else {
      history.push("/Multiplay/join");
    }
  };

  useEffect(() => {
    return () => {
      HandleShowCheckBox(false);
    };
  }, [HandleShowCheckBox]);

  const HandleCheckbox = () => {
    setChecked(!checked);
    if (!checked) {
      setIsJoinAsPlayer(true);
    } else {
      setIsJoinAsPlayer(false);
    }
  };

  return (
    // <div>
    //     <div>
    //    <form onSubmit={handleSubmit} >

    //    <input
    //    placeholder="Name"
    //     type="text"
    //     name="name"
    //     value={userName}
    //     onChange={setName}
    //     required
    //   />

    //    {showCheckBox ? <div>
    //  <input
    //  name="isGoing"
    //  type="checkbox"
    //  checked={checked}
    //  onChange={HandleCheckbox} />
    //  <label style={{color:'white'}} >Join As a player</label>
    //   </div>
    // : <span> </span>}

    // <div>
    //    <button>Login
    //    </button>
    // </div>

    //    </form>

    //     </div>
    // </div>
    <div className="container-fluid">
      <div style={{ backgroundColor: "red" }} className="row ">
        <div className="col-md-12">
          <h3>LOGO</h3>
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <div className="row mb-2">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
              <div className="Login-header-avatar-select">
                Select Your Avatar
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
              <Avatar OnChangeAvatar={Setavatar} />
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
              <div className="Login-header-avatar-select">Enter Your Name:</div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row  ">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <form onSubmit={handleSubmit}>
                <div className="row pt-2 justify-content-center">
                  <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={userName}
                    onChange={setName}
                    required
                  />
                </div>
                <div className="row pt-3 justify-content-center">
                  {showCheckBox ? (
                  <div className="col-md-12 d-flex justify-content-center">
                    <input className="login-checkbox-multiplayer" type="checkbox" id="check" name="check" checked={checked} onChange={HandleCheckbox}/>
                    <label className="login-checkbox-label-multiplayer" for="check">
                      <span></span>Join As a player
                    </label>
                  </div>
                  ) : (
                     <span> </span>
                   )} 
                </div>
                <div className="row pt-3 justify-content-center">
                  <button className="btnGame learn-more">Login</button>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
}
