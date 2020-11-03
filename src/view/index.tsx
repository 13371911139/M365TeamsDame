import React from "react";
import StepView from "./step";
interface ViewList {
  component: React.ReactNode;
  name: string;
}
const ViewList: ViewList[] = [{ component: StepView, name: "step" }];
export default ViewList
