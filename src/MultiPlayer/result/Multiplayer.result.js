import {useState} from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';


export default function MultiplayerResult({isCreator,userResult}) {

    const[result] = useState(userResult);
    const history = useHistory();

    const Result = result.map((data,index) => {
        return (
            <li key={index}>
             <label style={{color:'white'}} >{index+1}: </label> 
               <label style={{color:'White'}} > {data.ClientName} </label>
               <label style={{color:'White'}} > {data.Result.Time} </label>
               <label style={{color:'White'}} > {data.Result.Correct} </label>
               <label style={{color:'White'}} > {data.Result.InCorrect} </label>
            </li>
         );
    }); 

    const handelPlayAgain = () =>
    {
        history.push('/Multiplay/create');
    }

    return (
        <div>
            { Result }
            <div>
                {isCreator?
                <Button onClick={handelPlayAgain} >
                    Play Again
                </Button>
                :
                <span></span>}
            </div>
        </div>
    )
}
