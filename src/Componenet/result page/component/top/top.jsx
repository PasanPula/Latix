import "./top.css";
import { useEffect, useState } from "react";
export function Top({ place, No, Image, Name, time, correct, incorrect }) {
  return (
    <div className={"item " + place}>
      <div className="pos">{No}</div>
      <div
      >
        <img  className="pic" src={Image} alt="avatar" />
      </div>
      <div className="name">{Name}</div>
      <div className="score">Time{time}</div>
      <div className="score">Correct{correct}</div>
      <div className="score">Incorrect{incorrect}</div>
    </div>
  );
}
