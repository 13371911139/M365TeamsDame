
import React,{useState} from 'react'
import Step from '../component/step'

const StepView:React.FC = ()=>{
    const [current,setCurrent] = useState(0)
    const list=new Array(5)
        .fill({})
        .map((item, index) => ({
          name: "step" + index,
          content: "content",
          // disabled:index%3==0,
          icon:false && index===2&&<span style={{
              display:'flex',alignItems:'center',width:'100%',height:'100%',
              background:'green',borderRadius:'100%',justifyContent:'center'
          }}>√</span>
        }))
    const nextTicks = ()=>{
        if(current>=list.length-1){
            return alert('step is end')
        }
        setCurrent(current+1)
    }
    return <>
    <div style={{margin:'30px 0 '}}><Step list={list}></Step></div>
    <div style={{margin:'30px 0 '}}><Step current={2} list={list} small></Step></div>
    <div style={{margin:'30px 0 '}}><Step current={current} list={list}></Step>
     <button onClick={nextTicks}>下一步</button>
    </div>
    </>
}
export default StepView