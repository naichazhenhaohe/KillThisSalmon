import React, { useState, useEffect } from "react";
import hats from "@/utils/GearInfo_Head.json";
import clothes from "@/utils/GearInfo_Clothes.json";
import shoes from "@/utils/GearInfo_Shoes.json";
import dict from "@/utils/dict.json";
import moment from "moment";

export default function Card(props) {
  const { merchandise } = props;
  const { price, end_time } = merchandise;
  const { id: Id, rarity, kind: type } = merchandise.gear;
  const skill = Object.keys(dict).find(
    item => dict[item] === merchandise.skill.name
  );
  let [remainTime, setRemainTime] = useState(
    moment.unix(end_time).diff(moment(), "minutes")
  );
  useEffect(() => {
    let interval = setInterval(() => {
      setRemainTime(moment.unix(end_time).diff(moment(), "minutes"));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  });
  if (remainTime < 0) return;
  console.log("remainTime,", remainTime);
  const Rarity = [];
  for (let i = 0; i < rarity + 1; i++) {
    Rarity.push(
      <div className="gear-skill skill-sm" key={"unkown-" + i}>
        <img src={`/images/skills/Unknown.png`} alt="gear" />
      </div>
    );
  }
  let database;
  switch (type) {
    case "clothes":
      database = clothes;
      break;
    case "shoes":
      database = shoes;
      break;
    default:
      database = hats;
      break;
  }
  const Detail = database.find(item => item.Id.toString() === Id);
  const GearName = dict[Detail.ModelName];
  console.log(Detail);
  return (
    <div className="gear-card">
      <span className="hanger"></span>
      <div className="gear-reamin">
        REAMING:
        {remainTime < 60
          ? remainTime + " minutes"
          : parseInt(remainTime / 60, 10) + " hours"}
      </div>
      <div className="gear-skill">
        <img src={`/images/logo/glod.png`} alt="glod" />
      </div>
      <div>{price}</div>
      <div>
        <img src={`/images/brands/${Detail.Brand}.png`} alt={`brand`} />
      </div>
      <div>
        <img src={`/images/gear/${Detail.ModelName}.png`} alt="gear" />
      </div>
      <div className="gear-skill">
        <img src={`/images/skills/${skill}.png`} alt="gear" />
      </div>
      {Rarity}
      <div>{GearName}</div>
    </div>
  );
}
