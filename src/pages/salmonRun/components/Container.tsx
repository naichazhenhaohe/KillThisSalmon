import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Weapon from '@/utils/WeaponInfo_Main.json'
import MapInfo from '@/utils/MapInfo.json'
import Dict from '@/utils/dict.json'
// import coop from '../../../utils/coop.json'
// import clothes from '../../../utils/GearInfo_Clothes.json'
// import shoes from '../../../utils/GearInfo_Shoes.json'
// import hats from '../../../utils/GearInfo_Head.json'

interface Weapon {
  Id: number
  ModelName: string
  Name: string
}

interface phase {
  EndDateTime: string
  StartDateTime: string
  RareWeaponID: number
  StageID: number
  WeaponSets: number[]
}

interface props {
  phase: phase
  index: number
}

export default function Container(props: props) {
  const { phase, index } = props
  const start = moment(phase.StartDateTime + '+00:00')
  const end = moment(phase.EndDateTime + '+00:00')
  const isOpening = start.isBefore(moment()) ? true : false

  function getRemain(time: moment.Moment, state: string) {
    const duration = moment.duration(time.diff(moment()))
    return (
      <div className="salmon-remain">
        {`${state}${duration.days() > 0 ? `${duration.days()}d` : ''} ${
          duration.hours() > 0 ? `${duration.hours()}h` : ''
        } ${duration.minutes()}m ${duration.seconds()}s`}{' '}
      </div>
    )
  }

  let [remaining, setRemaining] = useState(
    index === 0
      ? isOpening
        ? getRemain(end, 'REMAINING: ')
        : getRemain(start, 'WILL OPEN IN: ')
      : ''
  )

  useEffect(() => {
    if (index === 0) {
      let interval = setInterval(() => {
        if (isOpening) {
          setRemaining(getRemain(end, 'REMAINING: '))
        } else {
          setRemaining(getRemain(start, 'WILL OPEN IN: '))
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  })

  // 获取stage信息
  const stage = MapInfo.find(item => item.Id === phase.StageID).MapFileName
  // 获取 award gear 信息
  // const award = coop.MonthlyRewardGears.find(
  //   item => item.DateTime === phase.StartDateTime
  // );
  // let database;
  // switch (award.GearKind) {
  //   case "cClothes":
  //     database = clothes;
  //     break;
  //   case "cShoes":
  //     database = shoes;
  //     break;
  //   default:
  //     database = hats;
  // }
  // const awardInfo = database.find(item => item.Id === award.GearID);

  const WeaponNames = []

  phase.WeaponSets.forEach((weapon: number) => {
    let weaponName: string
    let weaponInfo = Weapon.find((item: Weapon) => item.Id === weapon)
    weaponName = weaponInfo
      ? `Wst_${weaponInfo.Name}`
      : weapon === -1
      ? 'questionmark'
      : 'questionmark2'
    WeaponNames.push(weaponName)
  })

  return (
    <div className="schedule-container">
      <div className="box origin">
        <span className="hanger"></span>
        {remaining}
        <div className="salmon-phase">
          <span>开始时间：{start.format('lll')}</span>
          <span>结束时间：{end.format('lll')}</span>
        </div>
        <div className="salmon-flex">
          <div className="salmon-weapon">
            <span>Supplied Weapons</span>
            <div className="weapon-img">
              {WeaponNames &&
                WeaponNames.map((weapon, index) => (
                  <div key={index}>
                    <img src={`/images/weapons/${weapon}.png`} alt="weaopn" />
                  </div>
                ))}
            </div>
          </div>
          <div className="salmon-stage">
            <img src={`/images/stages/${stage}.png`} alt="stage" />
            <div className="stage-name">{Dict[stage]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
