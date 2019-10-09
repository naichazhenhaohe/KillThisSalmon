import React from "react";
import "./index.scss";
import axios from "@/axios";
import Header from "./components/Header";
import moment from "moment";
import Future from "./components/Future";
import Modal from "./components/Modal";

const Container = React.lazy(() => import("./components/Container"));

export default class SalmonRun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: null,
      details: null,
      isShow: true,
      isShowModal: false
    };
    this.setIsShowModal = this.setIsShowModal.bind(this);
  }

  componentDidMount() {
    axios
      .get("/salmonRun")
      .then(res => {
        // console.log(res.data.data);
        const schedules = res.data.data.schedules;
        const details = res.data.data.details;
        // 格式化时间数据
        for (let detail of details) {
          detail.end_time_format = moment
            .unix(detail.end_time)
            .format("M/D - H:00");
          detail.start_time_format = moment
            .unix(detail.start_time)
            .format("M/D - H:00");
          detail.stage = detail.stage.name;
        }
        schedules.forEach(item => {
          item.start_time = moment.unix(item.start_time).format("M/D H:00");
          item.end_time = moment.unix(item.end_time).format("M/D H:00");
          return item;
        });
        // 删除时间表中的前两个已显示详细信息的内容
        schedules.shift();
        schedules.shift();
        // 因为数据更新并没有很及时，需要判断时间表是否存在过期的情况。
        let endTime = moment.unix(details[0].end_time);
        let diff = endTime.diff(moment());

        if (diff < 0) {
          this.setState({
            schedules,
            details,
            isShow: false
          });
        } else {
          this.setState({
            schedules,
            details
          });
        }
      })
      .catch(err => {
        throw err;
      });
  }

  setIsShowModal() {
    this.setState({
      isShowModal: !this.state.isShowModal
    });
  }

  render() {
    const { schedules, details, isShow, isShowModal } = this.state;
    return (
      <section className="salmonRun page-box">
        <Modal
          isShowModal={isShowModal}
          setIsShowModal={this.setIsShowModal}
          schedules={schedules}
        />
        <Header />
        <React.Suspense fallback={<div>loading...</div>}>
          {details && isShow ? (
            <Container detail={details[0]} imgs="worker" opeaning={true} />
          ) : (
            ""
          )}
          {details ? (
            <Container detail={details[1]} imgs="salmonids" opeaning={false} />
          ) : (
            ""
          )}
        </React.Suspense>
        <Future schedules={schedules} setIsShowModal={this.setIsShowModal} />
      </section>
    );
  }
}
