import { useState, useCallback} from "react";
import {Switch, Route,Redirect} from 'react-router-dom';
import SinglePlayerLogin from './SinglePlayer.Login';
import SinglePlayerCreate from './SinglePlayer.Create';

export default function SinglePlayer()  {


const[name,setName] = useState();

const changeName =(value) =>
{
    setName(value);
};


// const callbak = useCallback((name)=>
// {
//    console.log("value changes");
// },[name]);

        return (
            <div>
            <Switch>
            <Route  path="/SinglePlayer/Login" component={()=> <SinglePlayerLogin name={name} OnChangeName={changeName} />}/>
            <Route  path="/SinglePlayer/Create" component={()=> <SinglePlayerCreate name={name} />} />
            <Redirect to="/SinglePlayer/Login" /> 
          </Switch>
            </div>
        );
}
