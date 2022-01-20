import "./list.css";

export function List({ No, image, name, score }) {
  return (
    <div className="item">
      <div className="pos">{No}</div>
      <div
        className="pic"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="name">{name}</div>
      <div className="score">{score}</div>
    </div>
  );
}
