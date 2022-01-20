import "./list.css";

export function List({ No, Image, name, score }) {
  return (
    <div className="item">
      <div className="pos">{No}</div>
      <div

// className="pic"
        // style={{
        //   backgroundImage: `url(${Image})`,
        // }}
      >
        <img  className="pic" src={Image} alt="avatar" />
      </div>
      <div className="name">{name}</div>
      <div className="score">{score}</div>
    </div>
  );
}
