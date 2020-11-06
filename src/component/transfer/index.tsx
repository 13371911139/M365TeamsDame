import React, { useEffect, useState } from "react";
import "./index.less";
interface iList {
  content: string;
  checked?: boolean;
  disabled?: boolean;
}
interface iBaseProps {
  toLeft?: (list: iList[]) => void;
  toRight?: (list: iList[]) => void;
  dataList: iList[];
  value?: iList[];
}

interface ileftRight {
  isValue: boolean;
  dataList: iList[];
  valueList: iList[];
}
const LeftRight: React.FC<ileftRight> = (props) => {
  const { dataList, isValue, valueList } = props;
  return (
    <div>
      <ul>
        {dataList.map((item, index) => {
          if (isValue) {
            return <li key={index}>{item.content}</li>;
          } else {
            return <li key={index}>{item.content}</li>;
          }
        })}
      </ul>
    </div>
  );
};

const Transfer: React.FC<iBaseProps> = (props) => {
  const { value = [], dataList } = props;
  const [leftSelect, setleftSelect] = useState<iList[]>();
  const [valueList, setValueList] = useState<iList[]>(value);
  return (
    <section>
      <div className="tf-box">
        <div className="tf-left">
          <LeftRight
            isValue={false}
            valueList={valueList}
            dataList={dataList}
          />
        </div>
        <div>button</div>
        <div className="right">
          <LeftRight isValue={true} valueList={valueList} dataList={dataList} />
        </div>
      </div>
    </section>
  );
};
export default Transfer;
