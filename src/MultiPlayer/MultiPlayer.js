import {useState,useRef, useEffect} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import MultiPlayerMode from './MultiPlayer.mode';
import MultiplayerLogin from './Multiplayer.login';
import MultiPlayerCreate from './create/Multiplayer.create';
// import useSlider from '../Componenet/range slider/RangeSlide';

export default function MultiPlayer() {
 
  const [showCheckBox,setShowCheckBox] = useState(false);
  const name = useRef();
  const isJoinAsPlayer = useRef(false);
  const time = useRef(5);
  const size = useRef(5);
  const selectedOperator = useRef("+");
  const rowNumbers = useRef([]);
  const coloumNumbers = useRef([]);


  const setRowNumbers = (val) => 
  {
    rowNumbers.current = val;
  }
  const setColoumNumbers = (val) => 
  {
    coloumNumbers.current = val;
  }
  
  const HandleSetSize = (val)=>{
    size.current = val;
  }

  const HandleSetTime = (val)=>{
    size.current = val;
  }

  const HandleSelectedOperator = (val) => 
  {
    selectedOperator.current = val;
  }

  const setName = (value) =>
  {
     name.current = value;
  }

  const setIsJoinAsPlayer = () =>
  {
    isJoinAsPlayer.current = !isJoinAsPlayer;
  }

  const HandleShowCheckBox = (bool) =>
  {
    setShowCheckBox(bool);
  }

    return (
        <div>
          <Switch>
            <Route  path="/Multiplay/Mode" component={()=> <MultiPlayerMode HandleShowCheckBox={HandleShowCheckBox} />}/>
            <Route  path="/Multiplay/Login" component={()=> <MultiplayerLogin HandleShowCheckBox={HandleShowCheckBox} name={name.current} setName={setName} showCheckBox={showCheckBox} setIsJoinAsPlayer ={setIsJoinAsPlayer} />}/>
            <Route  path="/Multiplay/create" component={()=> <MultiPlayerCreate setRowNumbers={setRowNumbers} setColoumNumbers={setColoumNumbers}  HandleSetSize={HandleSetSize} HandleSetTime={HandleSetTime}  HandleSelectedOperator={HandleSelectedOperator}  />}/>
            <Redirect to="/Multiplay/Mode" />  
          </Switch>
        </div>
    )
}
