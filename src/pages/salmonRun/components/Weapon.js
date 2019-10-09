import React from "react";

export default function Weapon(props) {
  const weaponList = [];
  for (let [index, weapon] of props.weapons.entries()) {
    if (weapon.id === "-1") {
      weaponList.push(
        <div className="weapon" key={"coop_special_weapon" + index}>
          <img src={`/images/weapon/Random.png`} alt={`Random`} />
        </div>
      );
    } else {
      let name = weapon.weapon.name;
      // 因为 52 和 96 这两把加农武器的名字以'.'开头，所以可能获取不到图片
      // 因此把图片以及数据里的'.'都删掉了，这样获取数据也不会报错。
      if (name.startsWith(".")) name = name.slice(1);
      weaponList.push(
        <div className="weapon" key={name}>
          <img src={`/images/weapon/${name}.png`} alt={`${name}`} />
        </div>
      );
    }
  }
  return <div className="salmon-weapons">{weaponList}</div>;
}
