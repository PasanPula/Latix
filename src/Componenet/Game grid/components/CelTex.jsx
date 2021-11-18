//import "./style.css"
import "./Styles/CeltexStyle.css"
import react,{useState,useRef,useEffect } from "react";

function CelTex(parms)
{ 
    const[Value,setvalue] =useState('');
    const[corlor,setcorlor] = useState('correct');
    const[correct,setcorrect] = useState(true);
    const[previous,setprivious] = useState(0);

    const sum = useRef('0');

   useEffect(() => {
    if(parms.MathOperator==='X')
    {
        sum.current = eval(parms.item1.toString().concat('*',parms.item2.toString())).toString();
    }else
    {
        sum.current = eval(parms.item1.toString().concat(parms.MathOperator,parms.item2.toString())).toString();
    }
   }, [parms.item1 , parms.item2,parms.MathOperator]);
   
  
  
    function valuechnage(e)
    {
      setvalue(e.target.value); 
      if(e.target.value === sum.current ||e.target.value==="" ) //  change the color accoring to the correct or wrong
      {
            setcorrect(true);
            setcorlor('correct'); // back text color
      }
      else
      {
          setcorrect(false);
         setcorlor('wrong'); //class for red  text color
      }

    }
    function yes(e) // call parent function for checking correct answer or wrong answer
    {
        parms.answer(parms.id,sum.current,Value);
        if(correct===false && parms.show)
        {
            
            setcorlor("wrong");
            setvalue(previous);
            
        }

    }
    function forcus(e)
    {
        parms.RowColChnage(parms.id);
        if(correct===false && parms.show)
        {
            setprivious(Value);
            setcorlor("Display");
            setvalue(sum.current)
        }
        
    }

   return(
       <div className="celtex">
           <input type="text" key={parms.id}  className={(parms.show)?corlor:'correct'} id={parms.id} value={Value} pattern="\d*$" maxLength="3" onChange={valuechnage} onMouseEnter={forcus } onFocus={()=>parms.RowColChnage(parms.id)}  onMouseLeave={yes} readOnly={(parms.show)?true:false}/>
       </div>
   );
}


export default react.memo(CelTex);