import { useState } from "react";
import { useHistory } from "react-router";
import SelectionButton from "../Componenet/select button/SelectionButton";
import './create/singleplayer.create.css';
import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";
import { ReactComponent as Countdown } from "../MultiPlayer/lobby/countdown/countdown.svg";



function SinglePlayerCreate(props) {
  const [operators] = useState(["+", "-", "/", "*"]);
  const [modes] = useState(["Easy", "Medium", "Hard"]);
  const [size] = useState(["4X4", "6X6", "8X8", "10X10"]);
  const [showCountdown, setshowCountdown] = useState("lobby-countdown");
  const history = useHistory();

  const [selectedMode, setSelectedMode] = useState("Easy");
  const [selectedOperator, setSelectedOperator] = useState("+");
  const [selectedSize, setSelectedSize] = useState("4X4");

  const setMode = (mode) => {
    if (mode === "Easy") {
      props.SetTime(5);
      props.SetnumberRangeStart(1);
      props.SetnumberRangeEnd(10);
    } else if (mode === "Medium") {
      props.SetTime(4);
      props.SetnumberRangeStart(6);
      props.SetnumberRangeEnd(20);
    } else if (mode === "Hard") {
      props.SetTime(3);
      props.SetnumberRangeStart(15);
      props.SetnumberRangeEnd(30);
    } else {
      props.SetTime(5);
      props.SetnumberRangeStart(1);
      props.SetnumberRangeEnd(10);
    }

    setSelectedMode(mode);
  };

  const HandlesetOperator = (val) => {
    if (val === "X") {
      props.SetOperator("*");
      setSelectedOperator("*");
    } else {
      props.SetOperator(val);
      setSelectedOperator(val);
    }
  };

  const HandleSetSize = (val) => {
    if (val === "4X4") {
      props.SetGridSize(4);
      setSelectedSize("4X4");
    }
     else if (val === "6X6") {
    props.SetGridSize(6);
    setSelectedSize("6X6");
  }
    else if (val === "8X8") {
      props.SetGridSize(8);
      setSelectedSize("8X8");
    } else if (val === "10X10") {
      props.SetGridSize(10);
      setSelectedSize("10X10");
    } else {
      props.SetGridSize(5);
    }
  };

  const startGame = () => {

    setshowCountdown("lobby-countdown show-countdown");
    props.HandleNumberGenarate().then(() => {

      setTimeout(function () {
        setshowCountdown("lobby-countdown");
        history.push("/SinglePlayer/play");
      }, 4400);
    });
  };

  const randomKey = () => {
    return Math.floor(Math.random() * 10000) + 10000;
  };

  return (
    // <div>
    //     <h5 style={{color:"white"}} >Welcome {props.name}</h5>
    //     <form>
    //      <h3 style={{color:"white"}}>Select your Game Mode</h3>

    //      <SelectionButton valueList={modes} pickedValue={selectedMode} setPickvalue={setMode} />
    //      {/* <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={modes}  onValueChange={setMode  }/> */}
    //      <h3 style={{color:"white"}}>Select your Mathamatical operator</h3>
    //      <SelectionButton valueList={operators} pickedValue={selectedOperator} setPickvalue={HandlesetOperator} />
    //      <h3 style={{color:"white"}}>Select your worksheet size</h3>
    //      <SelectionButton valueList={size} pickedValue={selectedSize} setPickvalue={HandleSetSize} />
    //      {/* <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={size} onValueChange={setSize} /> */}

    //     </form>
    //     <button className ="button" type="button" onClick = {startGame}> Start</button>
    // </div>
    <>
    <div key={randomKey()} className={showCountdown}>
        <Countdown className="lobby-countdown-img" />
      </div>
    <div className="container-fluid vh-100">
    <div className="row align-items-center text-center   h-10">
          <div
            className="col-md-4 "
          >
          </div>
          <div
            className="col-md-4"
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
      <div className="row">
        <div className="col-md-2 text-center ">
          <button className="home-navigate-button position-front">
            {" "}
            <IoChevronBackCircleSharp />{" "}
          </button>
        </div>
        <div className="col-md-8 "></div>
        <div className="col-md-2 "></div>
      </div>
      <div className="row h-10">
        <div className="col-md-12">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <label className="single-create-title pt-2 position-front">Select your game Settings</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center vh-20">
        <div className="col-md-12 text-center position-front">
        <label className="single-create-subtitle position-front">Game Mode</label>
         <SelectionButton valueList={modes} pickedValue={selectedMode} setPickvalue={setMode}
          radioPadStyle="single-mode-create-radioPad"
          radioStyle="single-mode-create-radioPad__radio"
          radioWrapper="single-mode-create-radioPad__wrapper"
          radioSelected="single-mode-create-radioPad__wrapper single-mode-create-radioPad__wrapper--selected"
         />
        </div>
      </div>
      <div className="row justify-content-center vh-30 mt-4
      ">
        <div className="col-md-6 text-center">
        <label className="single-create-subtitle  position-front">Mathamatical Operator</label>
        <SelectionButton valueList={operators} pickedValue={selectedOperator} setPickvalue={HandlesetOperator}
        radioPadStyle="single-mode-create-radioPad"
        radioStyle="single-mode-create-radioPad__radio"
        radioWrapper="single-mode-create-radioPad__wrapper"
        radioSelected="single-mode-create-radioPad__wrapper single-mode-create-radioPad__wrapper--selected"
        />
        </div>
        <div className="col-md-6 text-center">
        <label className="single-create-subtitle  position-front">Worksheet Size</label>
         <SelectionButton valueList={size} pickedValue={selectedSize} setPickvalue={HandleSetSize}
         radioPadStyle="single-mode-create-radioPad"
         radioStyle="single-mode-create-radioPad__radio"
         radioWrapper="single-mode-create-radioPad__wrapper"
         radioSelected="single-mode-create-radioPad__wrapper single-mode-create-radioPad__wrapper--selected"
         />
        </div>
      </div>
      <div className="row align-items-center vh-5">
        <div className="col-md-2  mt-5 text-center">
          <button className="home-navigate-button">
            {" "}
            <IoHome />{" "}
          </button>
        </div>
        <div className="col-md-8 mt-5 text-center">
           <button className ="single-create-button" type="button" onClick = {startGame}> Start Game</button>
        </div>
        <div className="col-md-2  text-center"> </div>
      </div>
    </div>
    </>
  );
}

export default SinglePlayerCreate;
