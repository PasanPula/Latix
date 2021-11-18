import "./Styles/GenerateStyle.css";
import "./Styles/GridStyle.css"
import { useState, useCallback} from "react";
import Cel from "./Cel";
import CelTex from "./CelTex";
import Button from "./Button";
import Text from "./Text";
import Operator from "./Operator";


export default function Generate({rowNumbers,coloumNumbers,gridSize,MathOperator})
{ 
  const[Correct_,setcorrect]=useState(0); // store the current number of correct
  const[incorrect_,setincorrect] = useState(0); // store the current number of incorrect
  const[wrong] = useState([]); // store id of the incorrect answer
  const[Correct] = useState([]); // store the correct answer  as array
  const[rowstat,setrow] = useState(''); // store the value chage row 
  const[column,setcolumn] = useState(""); //  store the value chnage column
  const[show,setshow] = useState(false); //  store wether submit button is click or not
   

    const RowColChnage =useCallback((ID)=>  //  function for exacting column, row from ID
    {
      setrow('row-'+ID[0]);
      setcolumn('col-'+ID[1]);  
    },[setrow,setcolumn]);

    function Update() //  updating current correct and wrong answers
    {
        setcorrect(Correct.length);
        setincorrect(wrong.length);
    }
    
    const answercheck=(id,correct,aswer)=> //  function for checking answers
    {
       
        if(aswer!==''&&aswer!==" "&&!show)
        {
           if(correct=== aswer)
           {
              if(!Correct.includes(id))
               {
                   
                   if(wrong.includes(id))
                   {
                     wrong.pop(id); 
                     Correct.push(id); 
                     Update();
                    
                   }
                   else
                   {
                    Correct.push(id);
                    Update();
                  
                   }
               }
             
            }
            
        
         else
         {
           if(!wrong.includes(id))
           {
             
             if(Correct.includes(id))
             {
               Correct.pop(id);  
               wrong.push(id);
               Update();
             }
             else
             {
               wrong.push(id);
               Update();
             }
          }
        }
      }
        else
        {
          
          if(Correct.includes(id)&&!show)
          {
            //console.log("yes enters");
            Correct.pop(id);
            Update();
          }
          else if(wrong.includes(id)&&!show)
          {
            wrong.pop(id);
            Update();
          }
            
        }
    }

    const onshow  =useCallback((sow)=> // handdling the sumbit or not 
    {
       setshow(sow);
    },[ setshow]);
    
    
     
     
     let operator =  <Operator key="Operator" Operator={MathOperator} color="blue" />    //<Cel key="Operator" id="Operator" No="+" />
    const row1 = rowNumbers.map((item,index)=>
      { 
       return <Cel key={"col-"+index} id={"col-"+index} No={item} iden={column} />
       } );
         const rows = coloumNumbers.map((item,index)=>
         {
             let row =[];
             let cell = <Cel key={"row-"+index} id={"row-"+index} No={item} iden={rowstat} />;
             
            row.push(cell);
            
             for(let i=0;i<gridSize;i++)
             {
                row.push(
                 <CelTex MathOperator={MathOperator} key={index.toString()+i.toString()} item1={item} item2={rowNumbers[i]} id={index.toString()+i.toString()} RowColChnage={RowColChnage} answer={answercheck} show={show}  />
                )
             }
             return(
             
              <div class="flex-box">
                {row}
              </div>
             );
         });
           
          const button = (
              <div className="bottom">
              <Button onshow={onshow}/>
              <Text text="Correct" value={(show)?Correct_:0}/>
              <Text text = "Wrong" value={(show)?incorrect_:0} />
             </div>
          )
    return( 
    <div  class="Container">
      <div class="Grid1">
        <div class="flex-box">
          <div class="flex-box">{operator}{row1}</div> 
           {rows} {button}
        </div>
      </div>
      <div class="Grid2">
            <div class="Fixed">
                <div>Timer</div>
                <div>Start Button</div>
                <div> <Button onshow={onshow}/></div>
                <div>Correct {(show)?Correct_:0}</div>
                <div>Wrong {(show)?incorrect_:0}</div>
              </div>
        </div>
    </div> 
    )
}