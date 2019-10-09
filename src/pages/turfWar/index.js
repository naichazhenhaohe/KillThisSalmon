import React from "react";
import axios from "@/axios";
import moment from "moment";
import Header from "@com/Logo";
import Container from "@com/Container";
import { withRouter } from "react-router-dom";
import "./index.scss";

class TurfWar extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: null,
      isContinue: false
    };
    this.loaded = [];
  }
  componentDidMount() {
    axios
      .get("/schedule")
      .then(res => {
        let schedule = res.data.data.regular;
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
      <section className="turfWar page-box">
        <Header sentence="" mode="regular" />
        {schedule &&
          schedule.map((item, index) => (
            <Container
              color="green"
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

export default withRouter(TurfWar);
