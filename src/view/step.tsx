import React from 'react'
import Step from '../component/step'

const StepView:React.FC = ()=>{
    const list=new Array(5)
        .fill({})
        .map((item, index) => ({
          name: "step" + index,
          content: "content",
          disabled:index%3==0,
          icon:index===2&&<span style={{
              display:'flex',alignItems:'center',width:'100%',height:'100%',
              background:'green',borderRadius:'100%',justifyContent:'center'
          }}>√</span>
        }))
    return <>
    <div style={{margin:'30px 0 '}}><Step list={list}></Step></div>
    <div style={{margin:'30px 0 '}}><Step list={list} small></Step></div>
    <div style={{margin:'30px 0 '}}><Step list={list}></Step></div>
    </>
}
export default StepView