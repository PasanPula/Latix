import {useState} from 'react'
export default function MultiplayerResult({userResult}) {

    const[result] = useState(userResult);

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

    return (
        <div>
            { Result }
        </div>
    )
}
