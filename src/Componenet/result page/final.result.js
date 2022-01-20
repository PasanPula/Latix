import { useEffect, useState } from "react";
import "./final.result.css";
import { Top } from "./component/top/top";
import { List } from "./component/list/list";

export default function FinalResult({ resultList }) {
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
        Score={24.9}
      />
    ) : index === 1 ? (
      <Top
        key={index}
        place="two"
        No={2}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
        Name={data.ClientName}
        Score={24.9}
      />
    ) : index === 2 ? (
      <Top
        place="three"
        key={index}
        No={3}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
        Name={data.ClientName}
        Score={24.9}
      />
    ) : (
      <span key={index}></span>
    );
  });

  const SecondaryResult = resultList.map((data, index) => {
    return (
      <List
        No={index+1}
        name={data.ClientName}
        score={67.0}
        image={`/Assets/Avatar list/${data.Avatar}.svg`}
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
      </div>
    </>
  );
}
