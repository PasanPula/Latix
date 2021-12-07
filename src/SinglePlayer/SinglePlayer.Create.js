import { useState } from "react";
import { useHistory } from 'react-router';
import SelectionButton from '../Componenet/select button/SelectionButton';


 function SinglePlayerCreate (props) {

    const[ operators] =  useState(["+","-","/","*"]);
    const [ modes ]  =  useState(["Easy","Medium","Hard"]); 
    const [ size ]  =  useState(["5X5","8X8","10X10"]); 
    const history = useHistory();

    const [selectedMode,setSelectedMode] = useState("Easy");
    const [selectedOperator,setSelectedOperator] = useState("+");
    const [selectedSize,setSelectedSize] = useState("5X5");
  


    const setMode = (mode) =>
    {
         if(mode ==="Easy")
         {
             props.SetTime(5);
             props.SetnumberRangeStart(1);
             props.SetnumberRangeEnd(10);
        }
         else if (mode ==="Medium")
         {
            props.SetTime(4);
            props.SetnumberRangeStart(6);
            props.SetnumberRangeEnd(20);
         }
         else if (mode ==="Hard")
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

         setSelectedMode(mode);
    }


    const HandlesetOperator = (val) =>
    {
      
      if(val==="X")
      {
         props.SetOperator("*");
         setSelectedOperator("*");
      }
      else
      {
         props.SetOperator(val);
         setSelectedOperator(val);
      }
      
    }
    
    const HandleSetSize = (val) =>
    {
         if(val === "5X5")
         {
            props.SetGridSize(5);
            setSelectedSize("5X5");
         }
         else if(val === "8X8")
         {
            props.SetGridSize(8);
            setSelectedSize("8X8");
         }
         else if(val === "10X10")
         {
            props.SetGridSize(10)
            setSelectedSize("10X10");
         }
         else 
         {
            props.SetGridSize(5)
         }
    }

    const startGame = () => {
      props.HandleNumberGenarate().then(() => 
      {
         history.push("/SinglePlayer/play");
      })
    }




        return (
            <div>
                <h5 style={{color:"white"}} >Welcome {props.name}</h5>
                <form>
                 <h3 style={{color:"white"}}>Select your Game Mode</h3>

                 <SelectionButton valueList={modes} pickedValue={selectedMode} setPickvalue={setMode} />
                 {/* <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={modes}  onValueChange={setMode  }/> */}
                 <h3 style={{color:"white"}}>Select your Mathamatical operator</h3>
                 <SelectionButton valueList={operators} pickedValue={selectedOperator} setPickvalue={HandlesetOperator} />
                 <h3 style={{color:"white"}}>Select your worksheet size</h3>
                 <SelectionButton valueList={size} pickedValue={selectedSize} setPickvalue={HandleSetSize} />
                 {/* <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={size} onValueChange={setSize} /> */}
                
            
                </form>
                <button className ="button" type="button" onClick = {startGame}> Start</button> 
            </div>
        )

}

export default SinglePlayerCreate;
