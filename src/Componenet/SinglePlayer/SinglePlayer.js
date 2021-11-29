import { useState, useCallback, useRef} from "react";
import {Switch, Route,Redirect} from 'react-router-dom';
import SinglePlayerLogin from './SinglePlayer.Login';
import SinglePlayerCreate from './SinglePlayer.Create';
import SinglePlayerPlay from "./SinglePlayer.Play";

export default function SinglePlayer()  {


const name = useRef();

const Correct = useRef(0);
const incorrect = useRef(0);
const timeSpent = useRef("00:00");
// const [Correct,setcorrectCount] = useState(0); // store the current number of correct
// const [incorrect,setincorrectCount]  = useState(0);
// const[showBool,setshow] = useState(false);
// const showBool = useRef(false);


const gridSize = useRef(5);
const operator = useRef('+');
const time = useRef(5);
const numberRangeStart = useRef(1);
const numberRangeEnd = useRef(10);


const setCorrectCount =useCallback((value) =>
{
  Correct.current = value;
},[]);

const setinCorrectCount =useCallback((value) =>
{
  incorrect.current = value;
},[]);

const setTimeSpent = (val)=>
{
   timeSpent.current = val;
}


const changeName =(value) =>
{
  name.current = value;
};

const SetGridSize = (value) =>
{
  
  gridSize.current = value;
}


const SetOperator =  (value) =>
{
  operator.current =value;
}


const SetTime = (value) =>
{
  time.current = value;
}

const SetnumberRangeStart = (value) =>
{
  numberRangeStart.current = value;
}

const SetnumberRangeEnd = (value) =>
{
  numberRangeEnd.current =value;
}


        return (
            <div>
            <Switch>
            <Route  path="/SinglePlayer/Login" component={()=> <SinglePlayerLogin name={name.current} OnChangeName={changeName} />}/>
            <Route  path="/SinglePlayer/Create" component={()=> <SinglePlayerCreate  name={name.current} SetGridSize={SetGridSize} SetOperator={SetOperator} SetTime={SetTime} SetnumberRangeStart={SetnumberRangeStart} SetnumberRangeEnd={SetnumberRangeEnd}  />} />
            <Route  path="/SinglePlayer/play" component={()=> < SinglePlayerPlay setTimeSpent={setTimeSpent} Correct={Correct.current} incorrect={incorrect.current}  setinCorrectCount={setinCorrectCount} setCorrectCount={setCorrectCount} time={time.current}  gridSize ={gridSize.current} operator = {operator.current} numberRangeStart={ numberRangeStart.current } numberRangeEnd={numberRangeEnd.current} />} />
            <Redirect to="/SinglePlayer/Login" />  
          </Switch>
            </div>
        );
}
