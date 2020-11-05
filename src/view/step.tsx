import React, { useState } from "react";
import Step from "../component/step";

const StepView: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const list = new Array(5).fill({}).map((item, index) => ({
    name: "step" + index,
    content: "content",
    // disabled:index%3==0,
    icon: false && index === 2 && (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "green",
          borderRadius: "100%",
          justifyContent: "center",
        }}
      >
        √
      </span>
    ),
  }));
  const nextTicks = (num: number) => {
    if (num === 1 && current >= list.length - 1) {
      return alert("step is end");
    }
    const newcurrent = current + num;
    setCurrent(num === 0 ? 0 : newcurrent <= 0 ? 0 : newcurrent);
  };
  return (
    <>
      <div style={{ margin: "30px 0 " }}>
        <Step list={list}></Step>
      </div>
      <div style={{ margin: "30px 0 " }}>
        <Step current={2} list={list} small></Step>
      </div>
      <div style={{ margin: "30px 0 " }}>
        <Step current={current} list={list}></Step>
        <button role='button' aria-lable="click to previous step"  onClick={(r) => nextTicks(-1)}>上一步</button>
        <button aria-lable="click to next step" onClick={(r) => nextTicks(1)}>下一步</button>
        <button onClick={(r) => nextTicks(0)}>重置</button>
      </div>
    </>
  );
};
export default StepView;
