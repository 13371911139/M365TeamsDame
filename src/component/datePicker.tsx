import React, { useState } from "react";
import "./index.less";
const moment = require("moment");

interface iDateValue {}
interface iDatePickerProps {
  name: string;
  onChange?(value: string[]): any;
  className?: string;
  value?: string[];
  disabled?: boolean;
  disableRange?: string[];
  optionalRange?: string[];
  placeholder?: string;
  type?: string;
}
interface iDay {
  date?: string;
}
const weekList = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const dayList: iDay[] = new Array(42).fill({}).map((item) => {
  return {};
});
export const DatePicker: React.FC<iDatePickerProps> = (props) => {
  const { onChange, value, disabled, disableRange, optionalRange } = props;
  const [current, setcurrent] = useState(new Date());
  const [year, setyear] = useState();
  const [month, setmonth] = useState();
  return (
    <div>
      <div className="picker-header">
        <span className="iconfont iconleft"></span>
        <span className="iconfont">&#xe628;</span>
        <span className="dateTitle">
          <span>{year}年</span>
          <span>{month}月</span>
          <span>{month}日</span>
        </span>
        <span className="iconfont">&#xe63a;</span>
        <span className="iconfont">&#xe62b;</span>
      </div>
      <div className="picker-content">
        <ul>
          {weekList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul>
          {dayList.map((item, index) => {
            const startDay = moment(current).startOf("month");
            const thisWeek = startDay.format("E");
            return (
              <li>{moment(startDay).subtract(thisWeek-index-7, "days").format("DD")}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const DatePickerInput: React.FC<iDatePickerProps> = (props) => {
  const [showPanel, setPanel] = useState(false);
  const { type = "text", placeholder = "请选择时间", ...otherProps } = props;
  const onChange = (event: any) => {
    console.log(event);
  };
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onClick={(r) => setPanel(!showPanel)}
        />
        {showPanel && <DatePicker {...otherProps} />}
      </div>
    </>
  );
};
export default DatePickerInput;
