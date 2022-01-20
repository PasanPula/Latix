import './Button.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 export function Button({content,height,width,icon,fontSize})
{
    return(
        <button className="custom-btn btn-2" style={{height:height,width:width,fontSize:fontSize}}>
           <label className='btn-con'>{content}<FontAwesomeIcon icon={icon} /></label></button>
    )
}