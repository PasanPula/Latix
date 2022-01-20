import { useState} from "react";
import SelectionButton from "../../Componenet/select button/SelectionButton";
import ValueButton from "../../Componenet/value button/ValueButton";
import useSlider from "../../Componenet/range slider/RangeSlide";
import { randomUnique } from "../../Componenet/Game grid/components/getrandom";
import { useHistory } from "react-router-dom";
import { IoHome,IoChevronBackCircleSharp } from "react-icons/io5";


import "./Multiplayer.create.css";

export default function MultiPlayerCreate({
  CreateGame,
  setRowNumbers,
  setColoumNumbers,
  HandleSetSize,
  HandleSetTime,
  HandleSelectedOperator,
}) {
  const history = useHistory();

  const [operators] = useState(["+", "-", "/", "*"]);

  const [operator, setOperator] = useState("+");
  const [time, setTime] = useState(5);
  const [size, setSize] = useState(5);
  const [rangeStarts, rangeStartComponent] = useSlider(1, 0, 30 - size);
  const [rangeEnd, rangeEndComponent] = useSlider(
    parseInt(rangeStarts) + size,
    parseInt(rangeStarts) + size,
    30
  );

  const HandleCreateGame = () => {
    setRowNumbers(
      randomUnique(parseInt(rangeStarts), parseInt(rangeEnd), parseInt(size))
    );
    setColoumNumbers(
      randomUnique(parseInt(rangeStarts), parseInt(rangeEnd), parseInt(size))
    );
    CreateGame(history);
  };

  const HandlesetTime = (val) => {
    setTime(val);
    HandleSetTime(val);
  };
  const HandlesetSize = (val) => {
    setSize(val);
    HandleSetSize(val);
  };

  const HandleSetOperator = (val) => {
    if (val === "X") {
      HandleSelectedOperator("*");
      setOperator("*");
    } else {
      HandleSelectedOperator(val);
      setOperator(val);
    }
  };

  return (
    // <div>

    //     <h2 style={{color:'white'}} >Select operator</h2>
    //     <SelectionButton valueList={operators} pickedValue={operator} setPickvalue={HandleSetOperator} />
    //     <h2 style={{color:'white'}} >Set time : minutes</h2>
    //     <ValueButton rangeEnd={10} rangeStart={1} value={time} HandleValue={HandlesetTime}/>
    //     <h2 style={{color:'white'}} >Set Grid size</h2>
    //     <ValueButton rangeEnd={10} rangeStart={5} value={size} HandleValue={HandlesetSize}/>

    //     <h2 style={{color:'white'}} >Set Number range</h2>

    //     <h4 style={{color:'white'}} >Start</h4>
    //     {rangeStartComponent}

    //     <h4 style={{color:'white'}} >End</h4>
    //     {rangeEndComponent}

    //     <button onClick={HandleCreateGame} >Create game</button>

    // </div>

    <div className="container-fluid vh-100">
      <div className="row h-10" style={{ backgroundColor: "red" }}>
        <div className="col-md-12">Logo</div>
      </div>
      <div className="row">
        <div className="col-md-2 text-center "> 
                <button className="home-navigate-button" onClick={HandleCreateGame}> <IoChevronBackCircleSharp/> </button>
          </div>
          <div className="col-md-8 "> 
          </div>
          <div className="col-md-2 "> 
          </div>
      </div>
      <div className="row h-60">
        <div className="col-md-12">
          <div className="row align-items-center mt-5">
            <div className="col-md-6 text-center">
              <h2 className="multi-create-option-title">Select operator</h2>
            </div>
            <div className="col-md-6 text-center">
              <h2 className="multi-create-option-title text-center">
                Set time : minutes
              </h2>
            </div>
          </div>
          <div className="row h-30 align-items-center h-20 mt-3">
            <div className="col-md-6 text-center">
              {/* <h2 style={{ color: "white" }}>Select operator</h2> */}
              <SelectionButton
                valueList={operators}
                pickedValue={operator}
                setPickvalue={HandleSetOperator}
                radioPadStyle="multi-create-radioPad"
                radioStyle="multi-create-radioPad__radio"
                radioWrapper="multi-create-radioPad__wrapper"
                radioSelected="multi-create-radioPad__wrapper multi-create-radioPad__wrapper--selected"
              />
            </div>
            <div className="col-md-6 text-center">
              {/* <h2 style={{ color: "white" }}>Set time : minutes</h2> */}
              <ValueButton
                rangeEnd={10}
                rangeStart={1}
                value={time}
                HandleValue={HandlesetTime}
              />
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-md-6 text-center">
              <h2 className="multi-create-option-title">Set Grid size</h2>
            </div>
            <div className="col-md-6 text-center">
              <h2  className="text-center multi-create-option-title">
                Set Number range
              </h2>
            </div>
          </div>
          <div className="row align-items-center h-30">
            <div className="col-md-6 text-center">
              {/* <h2 style={{color:'white'}} >Set Grid size</h2> */}
              <ValueButton
                rangeEnd={10}
                rangeStart={5}
                value={size}
                HandleValue={HandlesetSize}
              />
            </div>
            <div className="col-md-6 text-center mt-5">
              {/* <h2 style={{color:'white'}} className="text-center">Set Number range</h2> */}
              <label className="multi-range-text">Start</label>
              {rangeStartComponent}
              <label className="multi-range-text">End</label>
              {rangeEndComponent}
            </div>
          </div>
          <div className="row align-items-center h-10 mt-5">
          <div className="col-md-2  mt-5 text-center"> 
                <button className="home-navigate-button" onClick={HandleCreateGame}> <IoHome/> </button>
          </div>
            <div className="col-md-8 mt-5 text-center">
              <button className="multi-create-button" onClick={HandleCreateGame}>Create game</button>
            </div>
            <div className="col-md-2  text-center"> </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
}
