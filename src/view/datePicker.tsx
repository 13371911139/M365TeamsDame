
import React,{useState} from 'react'
import DatePicker from '../component/datePicker'

const StepView:React.FC = ()=>{
  const onChange=()=>{
    
  }
  return<>
    <DatePicker onChange={onChange} name='picker1'/>
    </>
}
export default StepView