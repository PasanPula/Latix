import { useEffect, useState } from "react";
import "./final.result.css";
import { Top } from "./component/top/top";
import { List } from "./component/list/list";

export default function FinalResult({
  resultList,
  tempCreator,
  handelPlayAgain,
  handelPlayAgainPlayer,
  playAgainInvite,
  creatorName,
}) {
  const [anime, setanime] = useState("");
  useEffect(() => {
    setanime("anime");
  }, [anime]);

  const TopResult = resultList.map((data, index) => {
    return index === 0 ? (
      <Top
        key={index}
        place="one"
        No={1}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
        Name={data.ClientName}
        time={data.Result.Time}
        correct={data.Result.Correct}
        incorrect={data.Result.InCorrect}
      />
    ) : index === 1 ? (
      <Top
        key={index}
        place="two"
        No={2}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
        Name={data.ClientName}
        time={data.Result.Time}
        correct={data.Result.Correct}
        incorrect={data.Result.InCorrect}
      />
    ) : index === 2 ? (
      <Top
        place="three"
        key={index}
        No={3}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
        Name={data.ClientName}
        time={data.Result.Time}
        correct={data.Result.Correct}
        incorrect={data.Result.InCorrect}
      />
    ) : (
      <span key={index}></span>
    );
  });

  const SecondaryResult = resultList.map((data, index) => {
    return (
      <List
        No={index + 1}
        name={data.ClientName}
        time={data.Result.Time}
        correct={data.Result.Correct}
        incorrect={data.Result.InCorrect}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
      />
    );
  });

  return (
    <>
      <div className="center">
        <div className="top3">{TopResult}</div>

        {resultList.length > 3 ? (
          <div className="list scroll">{SecondaryResult}</div>
        ) : (
          <span></span>
        )}

        <div className="list ">
          {tempCreator ? (
            <button onClick={handelPlayAgain}>Play Again</button>
          ) : playAgainInvite ? (
            <>
              <label className="lobby-label position-front">
                {creatorName} invite you to play again
              </label>
              <button onClick={handelPlayAgainPlayer}>Play </button>
            </>
          ) : (
            <label className="lobby-label position-front">
              Waiting for Creator response
            </label>
          )}
        </div>
      </div>
    </>
  );
}
