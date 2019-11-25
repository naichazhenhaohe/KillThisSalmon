import React from 'react'
import moment from 'moment'
import Header from './components/Header'
import Container from './components/Container'
import donation from '@/utils/coop.json'
import 'moment/locale/zh-cn'
import './index.scss'

interface phase {
  EndDateTime: string
  StartDateTime: string
  RareWeaponID: number
  StageID: number
  WeaponSets: number[]
}

export default function SalmonRun() {
  let { Phases: phases } = donation
  // 设置moment的语言为中文。
  moment.locale('zh-cn')
  // 过滤已结束的部分
  // ToDo: 滚动条到底部自动更新
  phases = phases
    .filter((item: phase) =>
      moment(item.EndDateTime + '+00:00').isAfter(moment().utc())
    ) // +0000 用于切换成 UTC 时间
    .slice(0, 5)
  return (
    <section className="salmonRun page-box">
      <Header />
      {phases &&
        phases.map((item: phase, index: number) => (
          <Container key={index} phase={item} index={index} />
        ))}
    </section>
  )
}
