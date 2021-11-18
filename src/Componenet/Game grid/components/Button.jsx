
import "./btnStyle.css"
import react from "react"

function Button({onshow})
{
    function chnage(e){  // call parent onshow method for updating button click flag as TRUE
        onshow(true);
    }


  return  <button className="button" type="submit" onClick={chnage}>Submit Answers</button>
}


export default react.memo(Button);