import { useState,useEffect,Fragment  } from 'react'


export default function Timer(props) {
    const { initMinute = 0, initSeconds = 30 } = props
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(initSeconds)
  
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval)
            console.log("end");
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
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
  