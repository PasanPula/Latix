
import "./Styles/OperatorStyle.css"

function Operator(parms)




{
    return (
    <div className="operator">
           <input type="text"  className={parms.color} value={parms.Operator==="*" ? "X":parms.Operator }  readOnly={true} />
       </div>
    )
}

export default Operator;