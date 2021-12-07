import {useEffect, useState} from 'react'
import { useSocket } from '../Services/SocketProvider';
import { useHistory } from 'react-router-dom';

export default function MultiplayerLobby({name,GameId}) {

const [userList, setUserList] = useState([]);
const socket = useSocket();

useEffect(() => {
    
    socket.on("GetUser",(res)=>
    {
       console.log(res);
      
    });
    

    return () => {
        
    }
}, [userList])


    return (
        <div>
            
        </div>
    )
}
