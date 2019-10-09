import React from "react";

export default function Future(props) {
  let schedules = props.schedules;
  return (
    <>
      <div className="salmonRun-container salmon-future">
        <div className="salmon-future-sm">
          <div className="rotation-box box">
            <span className="hanger"></span>
            <div className="salmonRun-status">FUTURE !</div>
            {schedules &&
              schedules.map((item, index) => (
                <div
                  className="salmon-schedule-item"
                  key={item.start_time + index}
                >
                  <span>
                    {item.start_time} → {item.end_time}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="salmon-future-lg">
          <span
            onClick={() => {
              props.setIsShowModal();
            }}
            className="salmon-futrue-text"
          >
            FUTURE!
          </span>
        </div>
      </div>
    </>
  );
}
