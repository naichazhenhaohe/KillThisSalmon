import React, { useState, useEffect } from 'react'
import moment from 'moment'
const MapInfo = require('@/utils/MapInfo.json')

export default function Container(props) {
  const { schedule, isNow, isNext, color } = props
  const [remainTime, setRemainTime] = useState(null)

  let formatDuring = mss => {
    var hours = parseInt(
      ((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(),
      10
    )
    var minutes = parseInt(
      ((mss % (1000 * 60 * 60)) / (1000 * 60)).toString(),
      10
    )
    var seconds = parseInt(((mss % (1000 * 60)) / 1000).toString(), 10)
    if (hours) {
      return `${hours}h ${minutes}m ${seconds}s REMAINING`
    }
    return `${minutes}m ${seconds}s REMAINING`
  }
  useEffect(() => {
    if (isNow) {
      let interval = setInterval(() => {
        if (schedule) {
          let endTime = moment.unix(schedule.end_time)
          let diff = endTime.diff(moment())
          setRemainTime(formatDuring(diff))
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  })

  const { startTime, endTime, stage_a, stage_b, rule } = schedule
  let stageA = MapInfo.find(item => item.Id.toString() === stage_a.id)
    .MapFileName
  let stageB = MapInfo.find(item => item.Id.toString() === stage_b.id)
    .MapFileName
  return (
    <div className="schedule-container">
      <div className={`box ${color}`}>
        <span className="hanger"></span>
        <div className="rotation">
          {startTime} → {endTime}
        </div>
        {isNow ? <div className="schedule">{remainTime}</div> : ''}
        {isNext ? <div className="schedule">COMMING SOON!</div> : ''}
        <div className="game-rule">{rule.name}</div>
        <div className="schedule-imgs">
          <div className="stage-a stage">
            <span>{stage_a.name}</span>
            <img src={`/images/stages/${stageA}.png`} alt={stage_a.name} />
          </div>
          <div className="stage-b stage">
            <span>{stage_b.name}</span>
            <img src={`/images/stages/${stageB}.png`} alt={stage_b.name} />
          </div>
        </div>
      </div>
    </div>
  )
}
