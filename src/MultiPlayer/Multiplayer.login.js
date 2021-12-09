import {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
export default function MultiplayerLogin({userName,setName,showCheckBox,setIsJoinAsPlayer,HandleShowCheckBox}) {
    
    const[checked,setChecked] = useState(true);
    const history = useHistory();

    const handleSubmit = () => 
    {
        if(showCheckBox)
        {
            history.push('/Multiplay/create');
        }
        else 
        {
            history.push('/Multiplay/join');
        }
       
    }


    useEffect(() => {
        return () => {
            HandleShowCheckBox(false);
        }
    }, [HandleShowCheckBox]);

    const HandleCheckbox = () => 
    {
        setChecked(!checked);
        if(!checked)
        {
           setIsJoinAsPlayer(true);
        }
        else
        {
           setIsJoinAsPlayer(false);
        }
    
        
        
    }
    
    
    return (
        <div>
            <div>
           <form onSubmit={handleSubmit} >
          
           <input 
           placeholder="Name"
            type="text"
            name="name"
            value={userName}
            onChange={setName}
            required
          />

          
           {showCheckBox ? <div>
         <input
         name="isGoing"
         type="checkbox"
         checked={checked}
         onChange={HandleCheckbox} />
         <label style={{color:'white'}} >Join As a player</label>
          </div>
        : <span> </span>} 
       

        <div>
           <button>Login
           </button>
        </div>


           </form>
            
            </div>
        </div>
    )
}
