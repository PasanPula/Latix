import {useState, useEffect,useContext} from 'react';
import SelectionButton from '../../Componenet/select button/SelectionButton'
import ValueButton from '../../Componenet/value button/ValueButton';
import useSlider from '../../Componenet/range slider/RangeSlide';
import { randomUnique } from "../../Componenet/Game grid/components/getrandom";

import { useHistory } from 'react-router-dom';


export default function MultiPlayerCreate({CreateGame,setRowNumbers,setColoumNumbers,HandleSetSize,HandleSetTime,HandleSelectedOperator}) {

    const history = useHistory();

    const [operators] = useState([
        "+",
        "-",
        "/",
        "*"
      ]);

      const[operator,setOperator] = useState("+");
      const[time,setTime] = useState(5);
      const[size,setSize] = useState(5);
      const[rangeStarts,rangeStartComponent] = useSlider(1,0,30-size);
      const[rangeEnd,rangeEndComponent] = useSlider(parseInt(rangeStarts)+size,parseInt(rangeStarts)+size,30);


    const HandleCreateGame = () => 
    {
      setRowNumbers(randomUnique(parseInt(rangeStarts),parseInt(rangeEnd),parseInt(size)));
      setColoumNumbers(randomUnique(parseInt(rangeStarts),parseInt(rangeEnd),parseInt(size)));
      CreateGame(history);
    }

    const HandlesetTime = (val) => 
    {
      setTime(val);
      HandleSetTime(val);
    }
    const HandlesetSize = (val) => 
    {
      setSize(val);
      HandleSetSize(val);
    }

    const HandleSetOperator = (val) =>
    {
        if(val==='X')
        {
          HandleSelectedOperator('*');
          setOperator("*");
        }
        else
        {
          HandleSelectedOperator(val);
          setOperator(val);
        }
    }
    
    return (
        <div>

            <h2 style={{color:'white'}} >Select operator</h2>
            <SelectionButton valueList={operators} pickedValue={operator} setPickvalue={HandleSetOperator} /> 
            <h2 style={{color:'white'}} >Set time : minutes</h2>
            <ValueButton rangeEnd={10} rangeStart={1} value={time} HandleValue={HandlesetTime}/>
            <h2 style={{color:'white'}} >Set Grid size</h2>
            <ValueButton rangeEnd={10} rangeStart={5} value={size} HandleValue={HandlesetSize}/>

            <h2 style={{color:'white'}} >Set Number range</h2>

            <h4 style={{color:'white'}} >Start</h4>
            {rangeStartComponent}

            <h4 style={{color:'white'}} >End</h4>
            {rangeEndComponent}

            <button onClick={HandleCreateGame} >Create game</button>


        </div>
    )
}
