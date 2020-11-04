import React from "react";
import StepView from "./step";
import DatePicker from './datePicker'
interface ViewList {
  component: React.ReactNode;
  name: string;
}
const ViewList: ViewList[] = [
    { component: <StepView></StepView>, name: "step" },
    { component: <DatePicker/>, name: "DatePicker" },
    { component: <span>待定待定待定待定待定</span>, name: "holle every body" },
];
export default ViewList
