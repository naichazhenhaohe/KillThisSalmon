/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Container(props) {
  const { schedule, isNow, isNext, color } = props;
  const [remainTime, setRemainTime] = useState(null);
  let interval = null;

  let formatDuring = mss => {
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((mss % (1000 * 60)) / 1000);
    if (hours) {
      return `${hours}h ${minutes}m ${seconds}s REMAINING`;
    }
    return `${minutes}m ${seconds}s REMAINING`;
  };
  useEffect(() => {
    if (isNow) {
      interval = setInterval(() => {
        if (schedule) {
          let endTime = moment.unix(schedule.end_time);
          let diff = endTime.diff(moment());
          setRemainTime(formatDuring(diff));
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  const { startTime, endTime, stage_a, stage_b, rule } = schedule;
  return (
    <div className="schedule-container">
      <div className={`box ${color}`}>
        <span className="hanger"></span>
        <div className="rotation">
          {startTime} → {endTime}
        </div>
        {isNow ? <div className="schedule">{remainTime}</div> : ""}
        {isNext ? <div className="schedule">COMMING SOON!</div> : ""}
        <div className="game-rule">{rule.name}</div>
        <div className="schedule-imgs">
          <div className="stage-a stage">
            <span>{stage_a.name}</span>
            <img src={`/images/stage/${stage_a.name}.png`} alt={stage_a.name} />
          </div>
          <div className="stage-b stage">
            <span>{stage_b.name}</span>
            <img src={`/images/stage/${stage_b.name}.png`} alt={stage_b.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
