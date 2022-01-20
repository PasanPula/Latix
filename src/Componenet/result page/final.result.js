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
      {/* <div className="center">
        <div className="top3">{TopResult}</div>

        {resultList.length > 3 ? (
          <div className="list scroll">{SecondaryResult}</div>
        ) : (
          <span></span>
        )}
      </div> */}
      <div className="center">
        <div className="top3">
          <Top
            key={1}
            place="one"
            No={1}
            Image={`/Assets/Avatar list/5.svg`}
            Name={"pasan pulasithi"}
            time={6.5}
            correct={10}
            incorrect={10}
          />
          <Top
            key={2}
            place="two"
            No={2}
            Image={`/Assets/Avatar list/5.svg`}
            Name={"pasan pulasithi"}
            time={6.5}
            correct={10}
            incorrect={10}
          />
          <Top
            key={3}
            place="three"
            No={3}
            Image={`/Assets/Avatar list/5.svg`}
            Name={"pasan pulasithi"}
            time={6.5}
            correct={10}
            incorrect={10}
          />
        </div>

        <div className="list scroll">
          <List
            No={1}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
          <List
            No={2}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
          <List
            No={3}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
          <List
            No={4}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
          <List
            No={5}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
          <List
            No={6}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
          <List
            No={7}
            name={"Pasan Pulasithi"}
            time={"10.50"}
            correct={"10"}
            incorrect={"20"}
            Image={`/Assets/Avatar list/3.svg`}
          />
        </div>
      </div>
    </>
  );
}
