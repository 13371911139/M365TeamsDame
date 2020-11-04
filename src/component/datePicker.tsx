import React, { useState } from "react";
import "./index.less";
const moment = require("moment");
type valueChange = () => string
interface iDateValue { }
interface iDatePickerProps {
  name: string;
  onChange: (value?: any) => void;
  className?: string;
  value?: string;
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
  const { onChange, value=new Date(), disabled, disableRange, optionalRange } = props;
  const [current, setcurrent] = useState(value);
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
          <span>{moment(current).format("MM")*1+1}月</span>
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
            const active = thisDate.diff(moment(current),'days')===0 && 'active'
            debugger
            return (
              <li className={`${active}`} onClick={(r) => onChange(thisDate.format("YYYY-MM-DD"))}>
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
    value = moment().format("YYYY-MM-DD"),
    onChange,
    ...otherProps
  } = props;
  const [showPanel, setPanel] = useState(false);
  const [values, setValue] = useState(value);

  const onChanges = (event: any) => {
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
          onChange={onChanges}
          value={values}
          onClick={(r) => setPanel(!showPanel)}
        />
        {showPanel && <DatePicker value={values} onChange={r => dateChange(r)} {...otherProps} />}
      </div>
    </>
  );
};
export default DatePickerInput;
