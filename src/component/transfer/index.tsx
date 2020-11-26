import React, { useEffect, useState, useRef, createRef } from "react";
import "./index.less";
interface iList {
  content: string;
  key: number,
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
  getList?: (list: number[]) => void
}
const LeftRight: React.FC<ileftRight> = (props) => {
  const { dataList, isValue, valueList, getList = (list: number[]) => { } } = props;
  const [checkList, setCheckList] = useState<number[]>([])
  const [valueListKey, setValueListKey] = useState<number[]>([])
  const inputChange = (item: iList, type: boolean) => {
    const list: number[] = [item.key, ...checkList]
    getList(list)
    setCheckList(list)
  }
  const selectAll = (checked: any, type: boolean) => {
    if (type) {
      const list: number[] = checked ? valueList.map(item => item.key) : []
      getList(list)
      setCheckList(list)
    } else {
      const list: number[] = !checked ? [] : dataList.filter(item => valueListKey.indexOf(item.key) < 0).map(item => item.key)
      getList(list)
      setCheckList(list)
    }
  }
  useEffect(() => {
    if (!isValue) {
      setValueListKey(valueList.map(item => item.key))

      setCheckList([])
    }
  }, [valueList])
  const showList = isValue ? valueList : dataList
  let checkedAll: number = checkList.length > 0 ? 1 : 0
  if (isValue) {
    checkList.length>0&&checkList.length === valueList.length && (checkedAll = 2)
  } else {
    checkList.length>0&&checkList.length === dataList.length - valueList.length && (checkedAll = 2)
  }
  return (
    <div>
      <div className="selectTitle"><input
          aria-label={`select all of ${isValue ? 'left' : 'right'} `}
          checked={checkedAll === 2}
          // indeterminate={true}
          onChange={r => selectAll(r.target.checked, isValue)}
          type="checkbox" />select all</div>
      <ul>
        {showList.map((item, index) => {
          const isDisabled = !isValue && valueListKey.indexOf(item.key) >= 0
          console.log(valueListKey)
          return <li className={`${isDisabled ? 'list-disabled' : ''}`} key={index}><input disabled={isDisabled} checked={checkList.indexOf(item.key) >= 0} onChange={r => inputChange(item, isValue)} type="checkbox" />{item.content}</li>;
        })}
      </ul>
    </div>
  );
};

const Transfer: React.FC<iBaseProps> = (props) => {
  const { value = [], dataList } = props;
  const [leftSelect, setleftSelect] = useState<number[]>([]);
  const [rightSelect, setRightSelect] = useState<number[]>([])
  const [valueList, setValueList] = useState<iList[]>(value);
  const buttonClick = (type: boolean) => {
    if (type) {
      const newValueList: iList[] = dataList.filter((item) => {
        return leftSelect.indexOf(item.key) >= 0
      })
      setValueList(newValueList)
      setRightSelect([])
    } else {
      const newValueList: iList[] = valueList.filter((item) => {
        return rightSelect.indexOf(item.key) < 0
      })
      setValueList(newValueList)
      setleftSelect([])
    }

  }
  return (
    <section>
      <div className="tf-box">
        <div className="tf-left">

          <LeftRight
            getList={(list: number[]) => { setleftSelect(list) }}
            isValue={false}
            valueList={valueList}
            dataList={dataList}
          />
        </div>
        <div className="tf-button">
          <button disabled={leftSelect.length===0} onClick={r => buttonClick(true)} aria-label="select to right" className="iconfont ">&#xe62b;</button>
          <button disabled={rightSelect.length===0} onClick={r => buttonClick(false)} aria-label="select to left" className="iconfont iconleft"></button>
        </div>
        <div className="tf-right">
          <LeftRight getList={(list: number[]) => { setRightSelect(list) }} isValue={true} valueList={valueList} dataList={dataList} />
        </div>
      </div>
    </section>
  );
};
export default Transfer;
