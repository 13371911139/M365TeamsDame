import React, { useState, useEffect } from "react";
import "./index.less";
const moment = require("moment");
type valueChange = () => string;
interface iDateValue {}
interface iDatePickerProps {
  name: string;
  onChange: (value?: any, dateList?: any, selectFlag?: any) => void;
  onClose: () => void;
  className?: string;
  value?: string;
  disabled?: boolean;
  disableRange?: string[];
  optionalRange?: string[];
  placeholder?: string;
  type?: string;
  isRangePicker?: boolean;
  where?: boolean;
}
interface iDay {
  date?: string;
}
const weekList = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const dayList: iDay[] = new Array(42).fill({}).map((item) => {
  return {};
});
export const DatePicker: React.FC<iDatePickerProps> = (props) => {
  const {
    onChange,
    onClose,
    value = new Date(),
    disabled,
    disableRange,
    optionalRange,
    isRangePicker = false,
    where,
  } = props;
  const [current, setcurrent] = useState(value);
  const [year, setyear] = useState(null);
  const [month, setmonth] = useState(null);
  const [selectFlag, setSelectFlag] = useState(false);
  const [dateList, setDateList] = useState<any[]>([
    current,
    moment(current).add(1, "months"),
  ]);
  useEffect(() => {
    document.addEventListener("click", clickOther);
    return () => document.removeEventListener("click", clickOther);
  });
  const clickOther = (event: any) => {
    onClose();
  };
  const yearSelect = () => {
    setyear(moment(current));
  };
  const monthSelect = () => {
    setmonth(moment(current));
  };
  const selectItem = (thisDate: any, type?: string) => {
    if (year) {
      setyear(null);
      setmonth(moment(current));
    } else {
      setmonth(null);
    }
    setcurrent(thisDate);
  };
  const dateChange = (thisDate: any) => {
    if (where) {
      dateList[selectFlag ? 1 : 0] = thisDate;
    } else {
      dateList[selectFlag ? 0 : 1] = thisDate;
    }
    setDateList([...dateList]);
    setSelectFlag(true);
    onChange(thisDate.format("YYYY-MM-DD"), dateList, selectFlag);
  };
  const panelArr = ["first"];
  let secondDate: any;
  if (isRangePicker) {
    secondDate = moment(current).add(1, "months");
  }
  isRangePicker && panelArr.push("second");
  return (
    <div className="panel" role="dialog" onClick={(e) => e.stopPropagation()}>
      {panelArr.map((items) => (
        <div key={items}>
          <div className="picker-header">
            {!month && (!isRangePicker || items === "first") && (
              <a
                aria-lable="click to last year"
                href="javascript:"
                onClick={(r) =>
                  setcurrent(moment(current).subtract(year ? 12 : 1, "years"))
                }
                className="iconfont iconleft"
              ></a>
            )}
            {!year && !month && (!isRangePicker || items === "first") && (
              <a
                href="javascript:"
                aria-lable="click to last month"
                onClick={(r) =>
                  setcurrent(moment(current).subtract(1, "months"))
                }
                className="iconfont"
              >
                &#xe628;
              </a>
            )}
            {!year && !month && (
              <span className="dateTitle">
                <a
                  aria-lable="click to select years"
                  onClick={yearSelect}
                  href="javascript:"
                >
                  {moment(items === "second" ? secondDate : current).format(
                    "YYYY"
                  )}
                  年
                </a>
                <a
                  aria-lable="click to select months"
                  onClick={monthSelect}
                  href="javascript:"
                >
                  {moment(items === "second" ? secondDate : current).format(
                    "MM"
                  )}
                  月
                </a>
                <span>
                  {moment(items === "second" ? secondDate : current).format(
                    "DD"
                  )}
                  日
                </span>
              </span>
            )}
            {(year || month) && (
              <span className="dateTitle">
                {!month && (
                  <span aria-lable="select years ">
                    {moment(items === "second" ? secondDate : current)
                      .subtract(12, "years")
                      .format("YYYY")}
                    年~
                    {moment(items === "second" ? secondDate : current).format(
                      "YYYY"
                    )}
                    年
                  </span>
                )}
                {!year && <span aria-lable="select months">1月~12月</span>}
              </span>
            )}
            {!year && !month && (!isRangePicker || items === "second") && (
              <a
                href="javascript:"
                aria-lable="click to next month"
                onClick={(r) => setcurrent(moment(current).add(1, "months"))}
                className="iconfont"
              >
                &#xe63a;
              </a>
            )}
            {!month && (!isRangePicker || items === "second") && (
              <a
                href="javascript:"
                aria-lable="click to next year"
                onClick={(r) =>
                  setcurrent(moment(current).add(year ? 12 : 1, "years"))
                }
                className="iconfont"
              >
                &#xe62b;
              </a>
            )}
          </div>
          <div className="picker-content">
            <ul>
              {!year && !month && weekList.map((item) => <li>{item}</li>)}
            </ul>
            <ul>
              {(year || month) &&
                new Array(12).fill({}).map((item, index) => {
                  const thisDate = year
                    ? moment(current).add(index - 12, "years")
                    : moment(moment(current).startOf("year")).add(
                        index - 12,
                        "months"
                      );
                  const active =
                    thisDate.diff(
                      moment(current),
                      year ? "years" : "months"
                    ) === 0 && "active";
                  let isDisabled = false;
                  if (optionalRange) {
                    isDisabled =
                      (optionalRange[0] !== undefined &&
                        thisDate - moment(optionalRange[0]) < 0) ||
                      (optionalRange[1] !== undefined &&
                        moment(optionalRange[1]) - thisDate < 0);
                  }
                  return (
                    <li
                      role="button"
                      className={`yearormounth ${active} ${
                        isDisabled && "day-disabled"
                      }`}
                    >
                      <button
                        disabled={isDisabled}
                        aria-lable={thisDate.format(year ? "YYYY" : "MM")}
                        onClick={(r) => !isDisabled && selectItem(thisDate)}
                      >
                        {year ? thisDate.format("YYYY") : thisDate.format("MM")}
                      </button>
                    </li>
                  );
                })}
              {!year &&
                !month &&
                dayList.map((item, index) => {
                  let thisCurrent = current;
                  let isDisabled = false;
                  if (isRangePicker) {
                    if (items === "second") {
                      thisCurrent = moment(current).add(1, "months");
                    }
                  }
                  const startDay = moment(thisCurrent).startOf("month");
                  const thisWeek = startDay.format("E");
                  const thisDate = moment(startDay).add(
                    index - thisWeek,
                    "days"
                  );
                  const active =
                    thisDate.diff(moment(thisCurrent), "days") === 0 &&
                    "active";
                  const activeCenter =
                    thisDate.diff(moment(dateList[0]), "days") > 0 &&
                    thisDate.diff(moment(dateList[1]), "days") < 0;
                  isDisabled =selectFlag &&
                    (thisDate.diff(moment(dateList[0]), "days") < 0 ||
                    thisDate.diff(moment(dateList[1]), "days") > 0)
                  if (optionalRange) {
                    isDisabled =
                      (optionalRange[0] !== undefined &&
                        thisDate - moment(optionalRange[0]) < 0) ||
                      (optionalRange[1] !== undefined &&
                        moment(optionalRange[1]) - thisDate < 0);
                  }
                  return (
                    <li
                      key={index}
                      role="button"
                      className={`${active} ${activeCenter && "activeCenter"} ${
                        isDisabled && "day-disabled"
                      }`}
                    >
                      <a
                        aria-lable={thisDate.format("YYYY-MM-DD")}
                        onClick={(r) => !isDisabled && dateChange(thisDate)}
                        href="javascript:"
                      >
                        {thisDate.format("DD")}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div style={{ padding: 10, textAlign: "center" }}>
            <button
              onClick={onClose}
              tabIndex={2}
              role="close"
              aria-label="close panel"
            >
              close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
const DatePickerInput: React.FC<iDatePickerProps> = (props) => {
  const {
    type = "text",
    placeholder = "请选择时间",
    value = moment().format("YYYY-MM-DD"),
    onChange,
    onClose,
    disabled = false,
    isRangePicker = false,
    ...otherProps
  } = props;
  const [showPanel, setPanel] = useState(false);
  const [values, setValue] = useState(value);
  const [where, setWhere] = useState<boolean>();
  const [rangePickerValue, setRangePickerValue] = useState<string[]>([]);
  const onChanges = (event: any) => {
    debugger;
    console.log(event);
  };
  const dateChange = (date: any, dataList: any, selectFlag: boolean) => {
    if (dataList) {
      setRangePickerValue(
        dataList.map((item: any) => {
          return item && moment(item).format("YYYY-MM-DD");
        })
      );
      selectFlag && setPanel(false);
    } else {
      setPanel(false);
      setValue(date);
    }
  };
  const RangePickerInputFocus = (type: boolean) => {
    setWhere(type);
    setPanel(true);
  };
  return (
    <>
      <div className="picker-box">
        {isRangePicker ? (
          <div>
            <input
              type="text"
              placeholder="select start day"
              onFocus={(r) => RangePickerInputFocus(true)}
              value={rangePickerValue[0]}
            />
            ~
            <input
              type="text"
              placeholder="select start day"
              onFocus={(r) => RangePickerInputFocus(false)}
              value={rangePickerValue[1]}
            />
          </div>
        ) : (
          <input
            tabIndex={3}
            type={"button"}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChanges}
            value={values}
            onClick={(r) => setPanel(!showPanel)}
          />
        )}
        {showPanel && (
          <DatePicker
            value={values}
            where={where}
            isRangePicker={isRangePicker}
            onClose={() => setPanel(false)}
            onChange={dateChange}
            {...otherProps}
          />
        )}
      </div>
    </>
  );
};
export default DatePickerInput;
