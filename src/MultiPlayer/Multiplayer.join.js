import {useState} from 'react';
import { useSocket } from '../Services/SocketProvider';
import { useHistory } from 'react-router-dom';


export default function MultiplayerJoin({name,setGameId}) {

    const [gameCode,setGameCode] = useState("");
    const socket = useSocket();
    const history = useHistory();

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
                setGameId(gameCode);
                console.log(res);
                history.push('/Multiplay/lobby');
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
