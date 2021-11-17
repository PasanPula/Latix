import { useState, useCallback} from "react";
import SelectButton from "./SinglePlayer.create_components/SelectButton"


export default function SinglePlayerCreate ({name}) {

    const[ operators] =  useState(["+","-","/","X"]);
    const [ modes ]  =  useState(["Easy","Medium","Hard"]); 
    const [ size ]  =  useState(["5X5","8X8","10X10"]); 

        return (
            <div>
                <h5>Welcome {name}</h5>
                <form>
                 <h3>Select your Game Mode</h3>
                 <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={modes} />
                 <h3>Select your Mathamatical operator</h3>
                 <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={operators} />
                 <h3>Select your worksheet size</h3>
                 <SelectButton btnStyle={'button'} btnSelectedStyle={'button selected'} contentsArr={size} />
                


                </form>
            </div>
        )

}
