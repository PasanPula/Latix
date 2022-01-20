import "./top.css";
import { useEffect, useState } from "react";
export function Top({ place, No, Image, Name, Score }) {
  return (
    <div className={"item " + place}>
      <div className="pos">{No}</div>
      <div
      >
        <img  className="pic" src={Image} alt="avatar" />
      </div>
      <div className="name">{Name}</div>
      <div className="score">{Score}</div>
    </div>
  );
}
