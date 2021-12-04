import {useState} from 'react';
import SelectionButton from '../../Componenet/select button/SelectionButton'
import ValueButton from '../../Componenet/value button/ValueButton';
import RangeSlide from '../../Componenet/range slider/RangeSlide';

export default function MultiPlayerCreate({rangeStart,HandleRangeStart,rangeEnd,HandleRangeEnd,size,HandleSetSize,HandleSetTime,time,selectedOperator,HandleSelectedOperator}) {

    const [operators] = useState([
        "+",
        "-",
        "/",
        "*"
      ]);

    const setOperator = (val) =>
    {
        if(val==='X')
        {
          HandleSelectedOperator('*');
        }
        else
        {
          HandleSelectedOperator(val);
        }
    }
    
    return (
        <div>

            <h2 style={{color:'white'}} >Select operator</h2>
            <SelectionButton valueList={operators} pickedValue={selectedOperator} setPickvalue={setOperator} /> 
            <h2 style={{color:'white'}} >Set time : minutes</h2>
            <ValueButton rangeEnd={10} rangeStart={1} value={time} HandleValue={HandleSetTime}/>
            <h2 style={{color:'white'}} >Set Grid size</h2>
            <ValueButton rangeEnd={10} rangeStart={5} value={size} HandleValue={HandleSetSize}/>

            <h2 style={{color:'white'}} >Set Number range</h2>

            <h4 style={{color:'white'}} >Start</h4>
            <RangeSlide min={'1'} max={'30'} mark={rangeEnd} value={rangeStart} setValue={HandleRangeStart} />

            <h4 style={{color:'white'}} >End</h4>
            <RangeSlide min={'5'} max={'30'} mark={rangeStart} value={rangeEnd} setValue={HandleRangeEnd} />
            


        </div>
    )
}
