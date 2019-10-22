import React, { useState, useEffect } from "react";
import moment from "moment";
import hats from "@/utils/GearInfo_Head.json";
import clothes from "@/utils/GearInfo_Clothes.json";
import shoes from "@/utils/GearInfo_Shoes.json";
import dict from "@/utils/dict.json";

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

  if (remainTime <= 0) {
    return <div></div>;
  }

  const Rarity = [];
  for (let i = 0; i < rarity + 1; i++) {
    Rarity.push(
      <div className="subSkill" key={"unkown-" + i}>
        <img src={`/images/skills/Unknown.png`} alt="gear" />
      </div>
    );
  }

  let database;
  let gearNameClass;
  switch (type) {
    case "clothes":
      database = clothes;
      gearNameClass = "gearName clothes";
      break;
    case "shoes":
      database = shoes;
      gearNameClass = "gearName shoes";
      break;
    default:
      database = hats;
      gearNameClass = "gearName hats";
  }

  const Detail = database.find(item => item.Id.toString() === Id);
  const GearName = dict[Detail.ModelName];

  return (
    <div className="gear-card">
      <span className="hanger"></span>
      <div className="gear-remain">
        {remainTime < 60 ? (
          <span className="gear-warn">{remainTime + " minutes"}</span>
        ) : (
          <span>{parseInt(remainTime / 60, 10) + " hours"}</span>
        )}
      </div>
      <div className="gear-price">
        <img src={`/images/logo/glod.png`} alt="glod" />
        <span>{price}</span>
      </div>
      <div className="gear-brand">
        <img src={`/images/brands/${Detail.Brand}.png`} alt={`brand`} />
      </div>
      <div className="gear-pic">
        <img src={`/images/gear/${Detail.ModelName}.png`} alt="gear" />
      </div>
      <div className="gear-skill">
        <div className="mainSkill">
          <img src={`/images/skills/${skill}.png`} alt="gear" />
        </div>
        {Rarity}
      </div>
      <div className={gearNameClass}>{GearName}</div>
    </div>
  );
}
