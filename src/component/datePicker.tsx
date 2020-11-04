import React, { useState } from "react";
import "./index.less";
const moment = require("moment");

interface iDateValue {}
interface iDatePickerProps {
  name: string;
  onChange?(value: any): void;
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
    <div className="panel">
      <div className="picker-header">
        <span
          onClick={(r) => setcurrent(moment(current).subtract(1, "years"))}
          className="iconfont iconleft"
        ></span>
        <span
          onClick={(r) => setcurrent(moment(current).subtract(1, "months"))}
          className="iconfont"
        >
          &#xe628;
        </span>
        <span className="dateTitle">
          <span>{moment(current).format("YYYY")}年</span>
          <span>{moment(current).format("MM")}月</span>
          <span>{moment(current).format("DD")}日</span>
        </span>
        <span
          onClick={(r) => setcurrent(moment(current).add(1, "months"))}
          className="iconfont"
        >
          &#xe63a;
        </span>
        <span
          onClick={(r) => setcurrent(moment(current).add(1, "years"))}
          className="iconfont"
        >
          &#xe62b;
        </span>
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
            const thisDate = moment(startDay).add(index - thisWeek, "days");

            return (
              <li onClick={(r) => onChange(thisDate.format("YYYY-MM-DD HH:mm:ss"))}>
                {thisDate.format("DD")}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const DatePickerInput: React.FC<iDatePickerProps> = (props) => {
  const {
    type = "text",
    placeholder = "请选择时间",
    value = "",
    ...otherProps
  } = props;
  const [showPanel, setPanel] = useState(false);
  const [values, setValue] = useState(value);

  const onChange = (event: any) => {
    debugger;
    console.log(event);
  };
  const dateChange = (date: any) => {
    setPanel(false);
    setValue(date)
  };
  return (
    <>
      <div className="picker-box">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={values}
          onClick={(r) => setPanel(!showPanel)}
        />
        {showPanel && <DatePicker onChange={dateChange} {...otherProps} />}
      </div>
    </>
  );
};
export default DatePickerInput;
