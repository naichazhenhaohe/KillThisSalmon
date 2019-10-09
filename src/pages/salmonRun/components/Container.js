import React from "react";
import moment from "moment";
import Weapon from "./Weapon";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      leftTime: null
    };
  }

  componentDidMount() {
    const { opeaning } = this.props;
    if (opeaning) {
      this.interval = setInterval(() => {
        const { detail } = this.props;
        if (detail) {
          let endTime = moment.unix(detail.end_time);
          let diff = endTime.diff(moment());
          this.setState({
            leftTime: this.formatDuring(diff)
          });
        }
      }, 1000);
    }
  }

  componentWillUnmount() {
    const { opeaning } = this.props;
    if (opeaning && this.interval) {
      clearInterval(this.interval);
    }
  }

  formatDuring(mss) {
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((mss % (1000 * 60)) / 1000);
    if (days) {
      return `${days}d ${hours}h ${minutes}m ${seconds}s REMAINING`;
    }
    return `${hours}h ${minutes}m ${seconds}s REMAINING`;
  }

  render() {
    const { detail, imgs, opeaning } = this.props;
    const { leftTime } = this.state;
    return (
      <div className="schedule-container">
        <div className="box origin">
          <span className="hanger"></span>
          <div className="container">
            <div className="worker sm-hidden">
              {imgs === "worker" ? (
                <img src="/images/salmon/salmon-run-char.png" alt="worker" />
              ) : (
                <img src="/images/salmon/salmon-run-char-2.png" alt="salmons" />
              )}
            </div>
            {detail ? (
              <div className="salmonRun-rotation">
                <div className="schedule sm-hidden">
                  {detail.start_time_format} → {detail.end_time_format}
                </div>
                <div className="schedule sm-show">
                  <div>FROM {detail.start_time_format}</div>
                  <div>TO {detail.end_time_format}</div>
                </div>
                {opeaning ? (
                  <>
                    <div className="salmonRun-status">OPEANING !</div>
                    <div className="diff">{leftTime}</div>
                  </>
                ) : (
                  <div className="salmonRun-status">COMING SOON!</div>
                )}
                <div className="stage">
                  <span>{detail.stage}</span>
                  <img
                    src={`/images/stage/${detail.stage}.png`}
                    alt={`${detail.stage}`}
                  />
                </div>
                <Weapon weapons={detail.weapons} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
