import {useState,useEffect} from 'react'

export default function MultiplayerResult({userResult}) {

    const Result = userResult.map((data,index) => {
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

    // useEffect(() => {
    //     console.log(userResult);
    // },)



//8qHE7
    return (
        <div>
            <Result/>
            {/* result */}
        </div>
    )
}
