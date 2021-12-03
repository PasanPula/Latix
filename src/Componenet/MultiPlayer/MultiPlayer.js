import {useState,useRef} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import MultiPlayerMode from './MultiPlayer.mode';
import MultiplayerLogin from './Multiplayer.login';
import MultiPlayerCreate from './create/Multiplayer.create';

export default function MultiPlayer() {
 
  const [showCheckBox,setShowCheckBox] = useState(false);
  const name = useRef();
  const isJoinAsPlayer = useRef(false);
  const [time,setTime] = useState(5);
  const [size,setSize] = useState(5);
  const rangeStart = useRef(1);
  const rangeEnd = useRef(30);
  const[selectedOperator,setSelectedOperator] = useState("+");

  const HandleRangeStart = (val) => 
  {
    rangeStart.current = val;
  }

  const HandleRangeEnd = (val) => 
  {
    rangeEnd.current = val;
  }


  const HandleSetSize = (val)=>{
    setSize(val);
  }

  const HandleSetTime = (val)=>{
        setTime(val);
  }

  const HandleSelectedOperator = (val) => 
  {
    setSelectedOperator(val);
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
            <Route  path="/Multiplay/create" component={()=> <MultiPlayerCreate  rangeEnd={rangeEnd.current} HandleRangeEnd={HandleRangeEnd} rangeStart={rangeStart.current} HandleRangeStart={HandleRangeStart} size={size} HandleSetSize={HandleSetSize} HandleSetTime={HandleSetTime} time={time} HandleSelectedOperator={HandleSelectedOperator} selectedOperator={selectedOperator} />}/>
            <Redirect to="/Multiplay/Mode" />  
          </Switch>
        </div>
    )
}
