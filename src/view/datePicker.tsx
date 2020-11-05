
import React, { useState } from 'react'
import DatePicker from '../component/datePicker'

const StepView: React.FC = () => {
  const onChange = () => {

  }
  return <>
    <div style={{ marginBottom: 20 }}><DatePicker onClose={() => { }} onChange={onChange} name='picker1' /></div>
    <div style={{ marginBottom: 20 }}><DatePicker onClose={() => { }} disabled onChange={onChange} name='picker1' /></div>
    <div style={{ marginBottom: 20 }}><DatePicker onClose={() => { }} optionalRange={['2020/10/1']} onChange={onChange} name='picker1' /></div>
    <div style={{ marginBottom: 20 }}><DatePicker onClose={() => { }} optionalRange={['2020/11/1', '2020/11/7']} onChange={onChange} name='picker1' /></div>
  </>
}
export default StepView