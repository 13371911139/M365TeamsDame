import React, { useState } from "react";
import ProgressBar ,{ProgressBarCircular} from "../component/progressBar";

const ProgressBarView: React.FC = () => {
  return (
    <>
      <ProgressBar value={89}/><br/>
      <ProgressBar value={70}  content="70%"/><br/>
      <ProgressBar value={16} style={{background:'green'}} content="16%"/><br/>
      <div style={{display:'flex'}}>
           <div style={{width:300}}>
          <ProgressBarCircular value={30} content="30%"/><br/>
      </div>
      <div style={{width:300}}>
          <ProgressBarCircular  value={80} circelColor={['green','#fafafa']} content="进度80%"/><br/>
      </div>
      </div>
     
      
    </>
  );
};
export default ProgressBarView;
