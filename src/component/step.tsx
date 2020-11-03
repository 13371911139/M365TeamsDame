import React from "react";
import "./index.less";
interface StepList {
  name: string;
  content: string;
  href?: string;
  className?: string;
  disabled?:boolean;
  icon?:any;
  iconClass?:string
}

interface BaseStepProps {
  list: StepList[];
  current?: number;
  className?: string;
  small?: boolean;

}

const Step: React.FC<BaseStepProps> = (props) => {
  const { list, current = 0, className = "", small = false } = props;
  return (
    <div className={`step-box ${small && 'stepSmall'}  ${className}`}>
      {list.map((item, index) => {
        return (
          <div className={`step-item ${item.className} ${item.disabled && 'stepDisabled'}`}>
            <div className={`left-icon ${item.iconClass} ${item.icon && 'custom-icon-style'}`}>{item.icon || index + 1}</div>
            <div className="right-content">
              <div className="title">
                {item.name} <span className="line"></span>
              </div>
              {!small &&  <div className="item-content">{item.content}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Step;
