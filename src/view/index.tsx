import React from "react";
import StepView from "./step";
interface ViewList {
  component: React.ReactNode;
  name: string;
}
const ViewList: ViewList[] = [
    { component: <StepView></StepView>, name: "step" },
    { component: <span>待定待定待定</span>, name: "待待定待定定" },
    { component: <span>待定待定待定待定待定</span>, name: "待定待定待定" },
];
export default ViewList
