import { useEffect, useState } from "react";
import './final.result.css';
import { Top } from './component/top/top';
import { List } from './component/list/list';

export default function FinalResult({resultList}) {

  const [anime, setanime] = useState("");
  useEffect(() => {
    setanime("anime");
  
  }, [anime]);


  const TopResult = resultList.map((data, index) => {
    return (
          index===0?
          <Top
            key={index}
            place="one"
            No={1}
            Image={
              `/Assets/Avatar list/${data.Avatar}.svg`
            }
            Name={data.ClientName}
            Score={24.9}
          /> : index===1?
          <Top
          key={index}
          place="two"
          No={2}
          Image={
            `/Assets/Avatar list/${data.Avatar}.svg`
          }
          Name={data.ClientName}
          Score={24.9}
        /> : index ===2? 
        <Top
        place="three"
        key={index}
        No={3}
        Image={
          `/Assets/Avatar list/${data.Avatar}.svg`
        }
        Name={data.ClientName}
        Score={24.9}
      /> : <span  key={index}></span>
    );
  });


  const SecondaryResult = resultList.map((data, index) => {
        return(
          <List
            No={index}
            name={data.ClientName}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
        );
  });

  return (
    <>
      <div className="center">
        <div className="top3">

        {TopResult}
          {/* <Top
            place="two"
            No={2}
            Image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
            Name={"Dasun"}
            Score={24.9}
          />
          <Top
            place="one"
            No={1}
            Image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
            Name={"Dasun"}
            Score={24.9}
          />
          <Top
            place="three"
            No={3}
            Image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
            Name={"Dasun"}
            Score={24.9}
          /> */}
        </div>
        <div className="list scroll">
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
          <List
            No={4}
            name={"Pasan"}
            score={67.0}
            image={
              "https://i.pinimg.com/236x/22/ae/2c/22ae2c6fbee73ed7d3bb607b5f91675b.jpg"
            }
          />
        </div>
      </div>
    </>
  );
}
