import {useState} from 'react';
import SelectionButton from '../../select button/SelectionButton';

export default function MultiPlayerCreate({selectedOperator,HandleSelectedOperator}) {

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
                
        </div>
    )
}
