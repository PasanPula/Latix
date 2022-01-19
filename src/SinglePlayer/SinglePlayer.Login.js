import { useHistory } from "react-router-dom";
import Avatar from "../Componenet/avatar slider/Avatar";
import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";


function SinglePlayerLogin({ name, OnChangeName,OnChangeAvatar }) {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/SinglePlayer/Create");
  };

  const onChange = (e) => {
    OnChangeName(e.target.value);
  };

  return (
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
              <Avatar OnChangeAvatar = {OnChangeAvatar}/>
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
              <form onSubmit={onSubmit}>
                <div className="row pt-2 justify-content-center position-front">
                  <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
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

export default SinglePlayerLogin;
