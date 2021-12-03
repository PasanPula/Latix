import React, { useState } from 'react'
import '../range slider/RangeSlide.css'

export default function RangeSlide({value,setValue,min,max,mark}) {

    const[localValue,setLocalValue] = useState(value);

    const HandleSlideChange = (e) => 
    {
        setLocalValue(e.target.value);
        setValue(e.target.value);
        console.log(mark);
    }

    return (
            <div className="range-container">
      <input type="range" onChange={HandleSlideChange} value={localValue} name="range" id="range" min={min} max={max} />
      <label htmlFor="range">{localValue}</label>
    </div>
    )
}
