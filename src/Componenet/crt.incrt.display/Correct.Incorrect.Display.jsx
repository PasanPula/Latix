import { useState, forwardRef,useImperativeHandle } from "react";
import '../crt.incrt.display/TextStyle.css';

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
      <div className="top">
        <label className="lable"> Correct</label>
        <input
          type="text"
          className="text"
          name="text"
          id="text"
          value={correctCount}
          readOnly={true}
        />
      </div>
      <div className="top">
        <label className="lable"> Incorrect</label>
        <input
          type="text"
          className="text"
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
