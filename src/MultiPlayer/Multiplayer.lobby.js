import {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import { useSocket } from '../Services/SocketProvider';
import { useHistory } from 'react-router-dom';

export default function MultiplayerLobby({setColoumNumbers,setRowNumbers,HandleSelectedOperator,HandleSetSize,HandleSetTime,name,Gameid,isCreator}) {

const [userList, setUserList] = useState([]);
const socket = useSocket();
const history = useHistory();

useEffect(() => {
    
    socket.on("GetUser",(res)=>
    {
       setUserList(res);
       console.log(res);
    });

    socket.on('GetGame',(res) =>
    {
        setColoumNumbers(res.Column);
        setRowNumbers(res.Row);
        HandleSelectedOperator(res.Operator);
        HandleSetSize(res.Size);
        HandleSetTime(res.Time);
        history.push('/Multiplay/play');
    });
    
    return () => {
        socket.off("GetUser");
    }
}, [HandleSelectedOperator, HandleSetSize, HandleSetTime, history, setColoumNumbers, setRowNumbers, socket, userList])

    const users = userList.map((user,index) => 
    {
        return (
           <li key={index}>
            <label style={{color:'white'}} >{index+1}: </label>
              <label style={{color:'White'}} > {user.User} </label>
           </li>
        );
    })

    const testclick = () => 
    {
        socket.emit("GetGame",{
            GameId:Gameid
        },(res)=>
        {
            console.log(res);
        })
    }


    return (
        <div>
        <div>
        <label style={{color:'white'}} >Userlist</label>
            {users}
        </div>
    {isCreator ?
        <div>
            <label style={{color:'white'}} >Game Code:</label>
            <input 
       placeholder="Game Code"
        type="text"
        name="GameCode"
        value={Gameid}
        disabled={true}
      /> 
      <div>
          <Button onClick={testclick} >
              Start Game
          </Button>
      </div>
      
      </div> 

      
      : <span></span>}
        
        </div>
    )
}
