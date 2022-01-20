import { Link } from "react-router-dom";
import "./mode/Multiplayer.mode.css";
// import { FaEdit } from "react-icons/fa";
// import { AiFillPlusSquare } from "react-icons/ai";
import { faSignInAlt,faUserCog,faHome,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";
import {Card3D} from '../Componenet/3Dcard/3DCard' 
import { IconButton } from "../Componenet/Button/ButtonIcon/Button";

export default function MultiPlayerMode({ HandleShowCheckBox }) {
  const createButtonClick = () => {
    HandleShowCheckBox(true);
  };

  return (
    // <div>
    //      <div >
    //     <div className="mb-2 center">
    //         <Link to="/Multiplay/Login">
    //             <button variant="primary" size="lg" className="button">
    //                 Join
    //             </button>
    //         </Link>
    //         <br/>
    //         <Link to="/Multiplay/login">
    //             <button onClick={createButtonClick} variant="primary" size="lg" className="button">
    //                 Create
    //             </button>
    //         </Link>
    //     </div>
    // </div>
    // </div>

    <div className="container-fluid vh-100">
      <div className="row h-10">
        <div
          className="col-md-12  position-front"
          style={{ backgroundColor: "red" }}
        >
          Logo
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 text-center ">
          {/* <button className="home-navigate-button">
            
            <IoChevronBackCircleSharp />
          </button> */}
           <IconButton icon={faArrowLeft} height={'80px'} width={'100px'} fontSize={'40px'} />
        </div>
        <div className="col-md-8 "></div>
        <div className="col-md-2 "></div>
      </div>
      <div className="row align-items-end">
        <div className="col-md-12">
          <label className="mode-title position-front">
            What Do You Want To Do?
          </label>
        </div>
      </div>
      <div className="row h-40 align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-end">
          <Link to="/Multiplay/Login" className="cardstyle">
            <Card3D
                    Title="Join Game"
                    Cardtex="Join Game"
                    CardContent="Start Here &gt; &gt;"
                    Icon={faSignInAlt}
                  />
          </Link>
        </div>
        <div className="col-md-5  justify-content-start">
          <Link to="/Multiplay/login" className="cardstyle" onClick={createButtonClick}>
             <Card3D 
                    Title="Create Game"
                    Cardtex="Create Game"
                    CardContent="Start Here &gt; &gt;"
                    Icon={faUserCog}
                  />
          </Link>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2  mt-5 text-center">
          {/* <button className="home-navigate-button">
            
            <IoHome />
          </button> */}
          <IconButton icon={faHome} height={'80px'} width={'100px'} fontSize={'40px'} />
        </div>
        <div className="col-md-8 mt-5 text-center"></div>
        <div className="col-md-2  text-center"> </div>
      </div>

      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
}
