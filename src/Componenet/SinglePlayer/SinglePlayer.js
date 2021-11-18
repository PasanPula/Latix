import { useState, useCallback, useRef} from "react";
import {Switch, Route,Redirect} from 'react-router-dom';
import SinglePlayerLogin from './SinglePlayer.Login';
import SinglePlayerCreate from './SinglePlayer.Create';
import Grid from "../Game grid/grid";

export default function SinglePlayer()  {


const[name,setName] = useState();
// const [gridSize,setgridSize] = useState(5);
// const [operrator,setOperator] = useState('+');
// const [time,setTime] = useState(5);
// const [numberRangeStart,setnumberRangeStart] = useState(1);
// const [numberRangeEnd,setnumberRangeEnd] = useState(10);


const gridSize = useRef(5);
const operator = useRef('+');
const time = useRef(5);
const numberRangeStart = useRef(1);
const numberRangeEnd = useRef(10);


const changeName =(value) =>
{
    setName(value);
};

const SetGridSize = (value) =>
{
  
  gridSize.current = value;
   console.log("gridsize:"+gridSize);
}


const SetOperator =  (value) =>
{
  operator.current =value;
  console.log("operator",value);
}


const SetTime = (value) =>
{
  time.current = value;
  console.log("time"+value);
}

const SetnumberRangeStart = (value) =>
{
  numberRangeStart.current = value;
  console.log("range Start"+value);
}

const SetnumberRangeEnd = (value) =>
{
  numberRangeEnd.current =value;
  console.log("range End"+value);
}

console.log("gridsize:"+gridSize);

        return (
            <div>
            <Switch>
            <Route  path="/SinglePlayer/Login" component={()=> <SinglePlayerLogin name={name} OnChangeName={changeName} />}/>
            <Route  path="/SinglePlayer/Create" component={()=> <SinglePlayerCreate  name={name} SetGridSize={SetGridSize} SetOperator={SetOperator} SetTime={SetTime} SetnumberRangeStart={SetnumberRangeStart} SetnumberRangeEnd={SetnumberRangeEnd}  />} />
            <Route  path="/SinglePlayer/play" component={()=> < Grid  gridSize ={gridSize.current} operator = {operator.current} time={time.current} numberRangeStart={ numberRangeStart.current } numberRangeEnd={numberRangeEnd.current} / >} />
            <Redirect to="/SinglePlayer/Login" /> 
          </Switch>
            </div>
        );
}
