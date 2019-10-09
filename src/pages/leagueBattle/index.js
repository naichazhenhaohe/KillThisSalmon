import React from "react";
import axios from "@/axios";
import moment from "moment";
import Header from "@com/Logo";
import Container from "@com/Container";

import "./index.scss";

export default class LeagueBattle extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: null
    };
  }
  componentDidMount() {
    axios
      .get("/schedule")
      .then(res => {
        console.log(res);
        let schedule = res.data.data.league;
        for (let item of schedule) {
          item.endTime = moment.unix(item.end_time).format("M/D H:00");
          item.startTime = moment.unix(item.start_time).format("M/D H:00");
        }
        // 判断时间表第一项是否已经过期
        let endTime = moment.unix(schedule[0].end_time);
        let diff = endTime.diff(moment());
        if (diff < 0) {
          schedule.shift();
        }
        this.setState({
          schedule
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { schedule } = this.state;
    return (
      <section className="leagueBattle page-box">
        <Header sentence="" mode="league" />
        {schedule &&
          schedule
            .slice(0, 6)
            .map((item, index) => (
              <Container
                color="pink"
                schedule={item}
                key={"turfWar" + index}
                isNow={index === 0 ? true : false}
                isNext={index === 1 ? true : false}
              />
            ))}
      </section>
    );
  }
}
