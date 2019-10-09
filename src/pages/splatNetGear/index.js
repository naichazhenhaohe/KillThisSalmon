import React from "react";
import axios from "@/axios";
import moment from "moment";
import Header from "./components/Header";
import Card from "./components/Card";
import "./index.scss";

export default class SplatNetGear extends React.Component {
  constructor() {
    super();
    this.state = {
      merchandises: null
    };
  }
  componentDidMount() {
    axios
      .get("/gear")
      .then(res => {
        let data = res.data;
        if (data.code === 0) {
          let merchandises = data.data.merchandises;
          for (let item of merchandises) {
            item.endTime = moment.unix(item.end_time).format("M/D H:00");
          }
          this.setState({
            merchandises
          });
        } else {
          console.log("fail to get merchandises");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let { merchandises } = this.state;
    console.log(merchandises);
    return (
      <section className="page-box">
        <Header />
        <div className="gear-flex">
          {merchandises &&
            merchandises.map(item => (
              <Card merchandise={item} key={item.endTime} />
            ))}
        </div>
      </section>
    );
  }
}
