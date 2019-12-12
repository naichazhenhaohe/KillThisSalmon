import React, { useState } from 'react'
import moment from 'moment'
import Weapon from '@/utils/WeaponInfo_Main.json'
import MapInfo from '@/utils/MapInfo.json'
import Dict from '@/utils/dict.json'
import {ModalMask} from '@com/ModalForImage'
import Remaining from './Remaining'
import styled from 'styled-components'

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

const StageImg = styled.img`
  width: 100%;
  height: 100%;
  pointer: cursor;
`
const StageName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`
const SalmonStage = styled.div`
  width: 65%;
  position: relative;
  border-radius: 25px;
  overflow: hidden;
`
const SalmonPhase = styled.div`
  font-family: 'ZCOOL KuaiLe', cursive;
  span {
    display: block;
  }
`
const WeaponImg = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-around;
  width: 100%;
  div {
    padding: 5px;
    img {
      max-width: 100%;
    }
  }
  @media screen and (min-width: 991px) {
    flex-flow: row wrap;
    div {
      width: 50%;
      img {
        max-width: 100%;
      }
    }
  }
`
const SalmonWeapon = styled.div`
  width: 30%;
  background: url('/images/bg/bg-stripes.png') repeat left top;
  background-color: #00000080;
  border-radius: 25px;
  display: flex;
  flex-flow: row wrap;
  align-content: space-around;
  span {
    width: 100%;
    padding: 5px 0;
    border-bottom: 5px dashed #fff;
    letter-spacing: 1px;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`
const SalmonFlex = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2vw;
  @media screen and (max-width: 991px) {
    flex-flow: row wrap;
    .salmon-stage {
      width: 100%;
    }
    .salmon-weapon {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`

export default function Container(props: props) {
  const { phase, index } = props
  const start = moment(phase.StartDateTime + '+00:00')
  const end = moment(phase.EndDateTime + '+00:00')
  const isOpening = start.isBefore(moment()) ? true : false

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

  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <div className="schedule-container">
      <div className="box origin">
        <span className="hanger"></span>
        <Remaining
          index={index}
          isOpening={isOpening}
          end={end}
          start={start}
        />
        <SalmonPhase>
          <span>开始时间：{start.format('lll')}</span>
          <span>结束时间：{end.format('lll')}</span>
        </SalmonPhase>
        <SalmonFlex>
          <SalmonWeapon>
            <span>Supplied Weapons</span>
            <WeaponImg>
              {WeaponNames &&
                WeaponNames.map((weapon, index) => (
                  <div key={index}>
                    <img src={`/images/weapons/${weapon}.png`} alt="weaopn" />
                  </div>
                ))}
            </WeaponImg>
          </SalmonWeapon>
          <SalmonStage>
            <ModalMask isShowModal={isShowModal} />
            <StageImg
              src={`/images/stages/${stage}.png`}
              alt="stage"
              onClick={() => {
                setIsShowModal(!isShowModal)
              }}
            />
            <StageName>{Dict[stage]}</StageName>
          </SalmonStage>
        </SalmonFlex>
      </div>
    </div>
  )
}
