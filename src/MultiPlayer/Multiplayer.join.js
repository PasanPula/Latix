import {useState} from 'react';
import { Alert } from 'react-bootstrap';
import { useSocket } from '../Services/SocketProvider';

export default function MultiplayerJoin({name}) {

    const [gameCode,setGameCode] = useState("");
    const socket = useSocket();

    const handleGameCode = (val) =>
    {
        setGameCode(val.target.value);
    }

    const onSubmit = () =>
    {
        socket.emit("JoinGame",
        {
            UserName:name,
            GameId:gameCode,
            Avatar:3
        },(res)=>
        {
            if(res.Status === 0)
            {
                alert(`${res.Message}`);
            }
            else if (res.Status === 1)
            {
                console.log(res);
            }
        });
    }


    return (
        <div>

      
       <input 
       placeholder="Game Code"
        type="text"
        name="GameCode"
        value={gameCode}
        onChange={handleGameCode}
        required
      />

    <div>
       <button onClick={onSubmit} >Login
       </button>
    </div>

    </div>
    )
}
