import {useState,useRef, useCallback} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import MultiPlayerMode from './MultiPlayer.mode';
import MultiplayerLogin from './Multiplayer.login';
import MultiPlayerCreate from './create/Multiplayer.create';
import { useSocket } from '../Services/SocketProvider';
import MultiplayerJoin from './Multiplayer.join';
import MultiplayerLobby from './Multiplayer.lobby';
import MultiplayerPlay from './play/Multiplayer.play';


export default function MultiPlayer() {
 
  const [showCheckBox,setShowCheckBox] = useState(false);
  const name = useRef();
  const isJoinAsPlayer = useRef(false);
  const time = useRef(5);
  const size = useRef(5);
  const selectedOperator = useRef("+");
  const rowNumbers = useRef([]);
  const coloumNumbers = useRef([]);
  const GameId = useRef("");
  const isCreator = useRef(false);

  const timeSpent = useRef("00:00");
  const Correct = useRef(0);
  const incorrect = useRef(0);

  const socket = useSocket();



  const CreateGame = (history) =>
  {
    socket.emit("CreateGame",
    {
      UserName:name.current,
      Avatar:1,
      GameName: name.current,
      GameDetails:
      {
        Column:coloumNumbers.current,
        Row:rowNumbers.current,
        Operator:selectedOperator.current,
        Size:size.current,
        Time:time.current
      }
    },
    (response) => {
      if(response.Game !== "")
      {
        isCreator.current=true;
        console.log(response.GameId);
        GameId.current = response.GameId;
        history.push('/Multiplay/lobby');
       
      }
      else
      {
        alert("empty");
      }
    }
    )
  }

  const setTimeSpent = (val)=>
{
   timeSpent.current = val;
}

const setCorrectCount =useCallback((value) =>
{
  Correct.current = value;
},[]);

const setinCorrectCount =useCallback((value) =>
{
  incorrect.current = value;
},[]);


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
     name.current = value.target.value;
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
            <Route  path="/Multiplay/create" component={()=> <MultiPlayerCreate CreateGame={CreateGame} setRowNumbers={setRowNumbers} setColoumNumbers={setColoumNumbers}  HandleSetSize={HandleSetSize} HandleSetTime={HandleSetTime}  HandleSelectedOperator={HandleSelectedOperator}  />}/>
            <Route path="/Multiplay/join" component={()=> <MultiplayerJoin name={name.current} />} />
            <Route path="/Multiplay/lobby" component={()=> <MultiplayerLobby setColoumNumbers={setColoumNumbers} setRowNumbers={setRowNumbers} HandleSelectedOperator={HandleSelectedOperator}  HandleSetSize={HandleSetSize} HandleSetTime={HandleSetTime} isCreator={isCreator.current} name={name.current} Gameid={GameId.current} />} />
            <Route path="/Multiplay/play" component={()=> <MultiplayerPlay isCreator={isCreator.current} name={name.current} GameId={GameId.current} setTimeSpent={setTimeSpent} Correct={Correct.current} incorrect={incorrect.current}  setinCorrectCount={setinCorrectCount} setCorrectCount={setCorrectCount} time={time.current}  gridSize ={size.current} operator = {selectedOperator.current} rowNumbers={rowNumbers.current} columnNumbers={coloumNumbers.current} />} />

            <Redirect to="/Multiplay/Mode" />  
          </Switch>
        </div>
    )
}
