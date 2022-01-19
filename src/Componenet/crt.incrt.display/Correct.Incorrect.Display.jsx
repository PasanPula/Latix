import { useState, forwardRef,useImperativeHandle } from "react";
import '../crt.incrt.display/Correct.incorrect.display.css';

function CorrectIncorrectDisplay(props,ref) {

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  useImperativeHandle(ref, () => ({setResultValueCount: (crt,incrt) => {return setResultValueCount(crt,incrt)}}), []);

  const setResultValueCount = (correct,incorrect) =>
  {
    setCorrectCount(correct);
    setInCorrectCount(incorrect);
  }

  return (
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
    </>
  );
}

export default  forwardRef(CorrectIncorrectDisplay);
