import React from 'react'
import './index.scss'

export default function About(props) {
  return (
    <div className="about">
      <div className="about-background"></div>
      <div className="about-container">
        <div className="fixed">
          <span className="hanger"></span>
        </div>
        <div>Hi,</div>
        <p>
          首先，本站与 Nintendo
          无关。本站内涉及的图片、数据等内容皆为所有者的财产。如果有侵害到你的权益，请一定通过最后的邮箱联系我。
        </p>
        <p>
          网站内容为 splatoon 2 的游戏模式地图时间表/打工时间表以及
          NintendoSwitch Online
          里的商店正在出售的装备数据，后面会拓展深化一些功能。如果碰巧进来了又不了解splatoon
          2的话，可以看
          <a href="https://splatoon.nintendo.com/">这里</a>
          (大陆的话应该需要翻墙)。欢迎入坑ㄛ。
        </p>
        <p>正在尽力维护/完善中。初衷是出于对 splatoon 2 的喜爱。</p>
        <p>
          本站的前端使用 ReactJs 以及一些 ReactJs 生态里的工具开发。后端使用 KOA
          2 搭建。可以在
          <a href="https://github.com/naichazhenhaohe/KillThisSalmonid">这里</a>
          查看到前端的源码。(因为后端写的烂就没放出来了。
        </p>
        <p>
          本站的一部分schedule数据来源于
          <a href="https://splatoon2.ink/about">这里</a>
          以及在
          <a href="https://content.oatmealdome.me/bcat/salmon_run">这里</a>
          获取到的剩下部分的数据以及装备、武器、技能等图片。
        </p>
        <p>
          如果有任何的问题/想法的话，请一定要联系我哦 → bbbiaozzza@gmail.com
        </p>
      </div>
      <div
        className="close"
        onClick={() => {
          props.set()
        }}
      ></div>
    </div>
  )
}
