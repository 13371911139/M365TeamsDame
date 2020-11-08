
import React from 'react'
import Transfer from '../component/transfer'

const dataList=new Array(100).fill({}).map((item,index)=>({
    content:'content_'+index,
    key:index
}))

const StepView: React.FC = () => {
  
  return <>
    <div style={{ marginBottom: 20 }}><Transfer dataList={dataList}  /></div>
  </>
}
export default StepView