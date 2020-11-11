import React ,{useState}from 'react';
import Calendar from '../Calendar'

const RoundDatePicker = () => {
    const[startDatePciker,setStartDatePicker] = useState<boolean>(false)
    const[endDatePciker,setEndDatePicker] = useState<boolean>(false)

    const[startDate,setStarDate] = useState<string>()

    const getStartDate = (date:string)=>{
        setStarDate(date)
    }

    const[endDate,setEndDate] = useState<string>()

    const getEndDate = (date:string)=>{
        setEndDate(date)
    }

    console.log(endDate)


    return (
        <>
            <div className ={`double-date-picker__container ${(endDatePciker||startDatePciker) && 'selected-border__status'}`}>
    <div className={`date_picker ${startDatePciker && 'selected__status'}`} onClick = {() => {setStartDatePicker(true);setEndDatePicker(false)}} >{(startDate || startDatePciker)? startDate : '开始日期'}</div>
                ---
                <div className={`date_picker ${endDatePciker && 'selected__status'}`} onClick = {() => {setStartDatePicker(false);setEndDatePicker(true)}}>{(endDate || endDatePciker)? endDate : '结束日期'}</div>
            </div>

            {
                (endDatePciker||startDatePciker) && 
                        <div className ="round-calendar__container">
                                    <Calendar  getStartDate ={ startDatePciker ?(date:string)=> getStartDate(date) : (date:string)=> getEndDate(date)} />
                        </div>
            }
      

        </>
    )
}

export default RoundDatePicker
