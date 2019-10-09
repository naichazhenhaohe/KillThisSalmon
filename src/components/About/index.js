import React from "react";
import "./index.scss";

export default function About(props) {
  function goBack() {
    props.history.goBack();
  }
  return (
    <div className="about">
      <div className="about-background"></div>
      <div className="about-container">
        <div className="fixed">
          <span className="hanger"></span>
        </div>
        <p>Hi,</p>
        <p>
          <span className="arrow">-></span>{" "}
          首先要说明本站与Nintendo无关。本站内涉及的武器、舞台、图标等内容，都为所有者的财产。
        </p>
        <p>
          <span className="arrow">-></span> 网站内容为 splatoon 2
          的游戏模式地图时间表/打工时间表以及 NintendoSwitch Online
          里的商店正在出售的装备数据。如果碰巧进来了又不了解splatoon
          2的话，可以看
          <a href="https://splatoon.nintendo.com/">这里</a>
          (大陆的话应该需要翻墙)。欢迎入坑ㄛ。
        </p>
        <p>
          <span className="arrow">-></span>{" "}
          本站还在维护/完善中。制作本站的初衷是出于对 splatoon 2
          的喜爱，以及想做一个小项目练练手。
        </p>
        <p>
          <span className="arrow">-></span> 本站依据 ReactJs 以及 KOA 2
          开发，可以在
          <a href="https://github.com/naichazhenhaohe/KillThisSalmonid">这里</a>
          查看源码。
        </p>
        <p>
          <span className="arrow">-></span> 本站的数据来源于
          <a href="https://splatoon2.ink/about">这里</a>
          ，非常的感谢！以及在
          <a href="https://leanny.github.io/splat2/en_files.html">这里</a>
          爬取到的武器图片<del>和装备图片</del>。
        </p>
        <p>
          <span className="arrow">-></span>{" "}
          如果有任何的问题的话，请一定要联系我哦。
        </p>
        <p>
          <span className="arrow">-></span> 我的邮箱：bbbiaozzza@gmail.com
        </p>
      </div>
      <div
        className="close"
        onClick={() => {
          goBack();
        }}
      ></div>
    </div>
  );
}
