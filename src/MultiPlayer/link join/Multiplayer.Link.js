import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSocket } from "../../Services/SocketProvider";

export default function MultiplayerLinkJoin({name,setName,setGameId}) {
  const { code } = useParams();
  const history = useHistory();
  const socket = useSocket();
  const [username,SetUsername] = useState("");

  const handleSubmit = (e) => {

    console.log(name);

    e.preventDefault();
    
    socket.emit("JoinGame",
        {
            UserName:username,
            GameId:code,
            Avatar:3
        },(res)=>
        {
            if(res.Status === 0)
            {
                alert(`${res.Message}`);
            }
            else if (res.Status === 1)
            {
                setGameId(code);
                history.push('/Multiplay/lobby');
            }
        });
  };

  const HandleNameChange = (e) => 
  {
    setName(e);
    SetUsername(e.target.value);
  }

  return (
    <div>
      <label style={{ color: "white" }}>{code} </label>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={HandleNameChange}
          required
        />

        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
