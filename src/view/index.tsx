import React from "react";
import StepView from "./step";
import DatePicker from './datePicker'
import Transfer from './transfer'
import ProgressBar from './progressBar'
import Message from './message'
interface ViewList {
  component: React.ReactNode;
  name: string;
}
const ViewList: ViewList[] = [
  { component: <StepView></StepView>, name: "step" },
  { component: <DatePicker />, name: "DatePicker" },
  { component: <Transfer />, name: "Transfer" },
  { component: <ProgressBar />, name: "ProgressBar" },
  { component: <Message />, name: "Message" },
];
export default ViewList
