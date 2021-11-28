import { useState,useEffect,Fragment  } from 'react'


export default function Timer({setTimeSpent,initMinute,showValRef}) {
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(59);

    let showVal = showValRef.current===undefined ? false : showValRef.current.showVals();

  
    useEffect(() => {
      let myInterval;
      if(!showVal){
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval)
            showValRef.current.setShow(true);
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
    }
    else
    {
      setTimeSpent(toString(initMinute - minutes)+":"+toString(60 - seconds));
    }
      return () => {
        clearInterval(myInterval)
      }
    })
  
    return (
     <Fragment>
            <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
     </Fragment>
     )
  }
  