import { useState, forwardRef,useImperativeHandle,useEffect } from "react";
import '../crt.incrt.display/Correct.incorrect.display.css';

function CorrectIncorrectDisplay(props,ref) {

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  const [minitSpend, setMinitSpend] = useState("0");
  const [secondsSpend, setSecondsSpend] = useState("00");
  useImperativeHandle(ref, () => ({setResultValueCount: (crt,incrt) => {return setResultValueCount(crt,incrt)}}), []);

  const setResultValueCount = (correct,incorrect) =>
  {
    setCorrectCount(correct);
    setInCorrectCount(incorrect);
  }

  useEffect(() => {
    let times = props.timeSpentRef.split('.')
    setMinitSpend(times[0])
    setSecondsSpend(times[1])
  }, [props.timeSpentRef]);
  

  return (
    <>
     { props.showResult ?
     <>
      <div className="CorrectIncorrect-top">
        <label className="CorrectIncorrect-lable"> Correct: </label>
        <input
          type="text"
          className="Correct-text"
          name="text"
          id="text"
          value={correctCount}
          readOnly={true}
        />
      </div>
      <br></br>
      <div className="CorrectIncorrect-top">
        <label className="CorrectIncorrect-lable"> Incorrect: </label>
        <input
          type="text"
          className="InCorrect-text"
          name="text"
          id="text"
          value={incorrectCount}
          readOnly={true}
        />
      </div>
      <br></br>
     { minitSpend === "0" ?
      <div className="CorrectIncorrect-top">
        <label className="CorrectIncorrect-lable"> Time Spend: </label>
        <label className="CorrectIncorrect-lable">  {secondsSpend} Seconds </label>
        {/* <input
          type="text"
          name="text"
          id="text"
          value={ `${secondsSpend} Seconds` }
          readOnly={true}
        /> */}
      </div> :
      <div className="CorrectIncorrect-top">
        <label className="CorrectIncorrect-lable"> Time Spend: </label>
        <label className="CorrectIncorrect-lable">  {minitSpend} Minitues and  {secondsSpend} Seconds </label>
        {/* <input
          type="text"
          name="text"
          id="text"
          value={ `${minitSpend} Minitues and ${secondsSpend} Seconds` }
          readOnly={true}
        /> */}
      </div>
      }
      </> :
           <span></span> 
      }
    </>
  );
}

export default  forwardRef(CorrectIncorrectDisplay);
