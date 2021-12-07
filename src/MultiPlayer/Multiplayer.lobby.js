import {useEffect, useState} from 'react'
import { useSocket } from '../Services/SocketProvider';

export default function MultiplayerLobby({name,GameId,isCreator}) {

const [userList, setUserList] = useState([]);
const socket = useSocket();

useEffect(() => {
    
    socket.on("GetUser",(res)=>
    {
       setUserList(res);
       console.log(res);
    });
    
    return () => {
        socket.off("GetUser");
    }
}, [socket, userList])

    const users = userList.map((user,index) => 
    {
        return (
           <li key={index}>
            <label style={{color:'white'}} >{index+1}: </label>
              <label style={{color:'White'}} > {user.User} </label>
           </li>
        );
    })


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
        value={GameId}
        disabled={true}
      /> </div> : <span></span>}
        
        </div>
    )
}
