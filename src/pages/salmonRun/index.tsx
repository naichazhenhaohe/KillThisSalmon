import React, { Suspense } from "react";
import Header from "./components/Header";
import moment from "moment";
import "moment/locale/zh-cn";
import "./index.scss";

const donation = require('../../utils/coop.json');

const Container = React.lazy(() => import("./components/Container"));

export default function SalmonRun() {
  let { Phases: phases } = donation;
  moment.locale("zh-cn");
  // 过滤已结束的部分
  phases = phases
    .filter(item => moment(item.EndDateTime + "+00:00").isAfter(moment())) // +0000 用于切换成 UTC 时间
    .slice(0, 5);
  return (
    <section className="salmonRun page-box">
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        {phases &&
          phases.map((item, index) => (
            <Container key={index} phase={item} index={index} />
          ))}
      </Suspense>
    </section>
  );
}
