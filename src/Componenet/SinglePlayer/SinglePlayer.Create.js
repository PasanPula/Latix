import { useState } from "react";
import { useHistory } from 'react-router';
import SelectButton from "./SinglePlayer.create_components/SelectButton";



 function SinglePlayerCreate (props) {

    const[ operators] =  useState(["+","-","/","X"]);
    const [ modes ]  =  useState(["Easy","Medium","Hard"]); 
    const [ size ]  =  useState(["5X5","8X8","10X10"]); 
    const history = useHistory();


    const setMode = (id) =>
    {
        console.log(id);
         if(id ==='0')
         {
             props.SetTime(5);
             props.SetnumberRangeStart(1);
             props.SetnumberRangeEnd(10);
        }
         else if (id ==='1')
         {
            props.SetTime(4);
            props.SetnumberRangeStart(6);
            props.SetnumberRangeEnd(20);
         }
         else if (id ==='2')
         {
            props.SetTime(3);
            props.SetnumberRangeStart(15);
            props.SetnumberRangeEnd(30);
         }
         else
         {
            props.SetTime(5);
            props.SetnumberRangeStart(1);
            props.SetnumberRangeEnd(10);
         }
    }


    const setOperator = (id) =>
    {
        console.log(id);
         if( id === '0')
         {
             props.SetOperator('+')
         }
         else if( id === '1')
         {
            props.SetOperator('-')
         }
         else if ( id === '2')
         {
            props.SetOperator('/')
         }
         else if ( id === '3')
         {
            props.SetOperator('X')
         }
         else 
         {
            props.SetOperator('+')
         }
    }
    const setSize = (id) =>
    {
         if(id === '0')
         {
            props.SetGridSize(5)
         }
         else if(id === '1')
         {
            props.SetGridSize(8)
         }
         else if(id === '2')
         {
            props.SetGridSize(10)
         }
         else 
         {
            props.SetGridSize(5)
         }
    }

    const startGame = () => {
      history.push("/SinglePlayer/play");
    }




        return (
            <div>
                <h5>Welcome {props.name}</h5>
                <form>
                 <h3>Select your Game Mode</h3>
                 <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={modes}  onValueChange={setMode  }/>
                 <h3>Select your Mathamatical operator</h3>
                 <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={operators} onValueChange={setOperator } />
                 <h3>Select your worksheet size</h3>
                 <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={size} onValueChange={setSize} />
                
            
                </form>
                <button className ="button" type="button" onClick = {startGame}> Start</button> 
            </div>
        )

}

export default SinglePlayerCreate;
