import React from 'react';
import _ from 'lodash';

const week =['一','二','三','四','五','六','七'];

interface IdayProps{
    month:number,
    year:number,
    isLeftPart ?: (status:boolean)=>void,
    isRightPart ?: (status:boolean)=>void,
    dayPicker:(day:number)=>void,
}

const weekAndDay : React.FC<IdayProps>= ({month,year,dayPicker,isLeftPart,isRightPart}) => {
    const firstDayWeekDay :number = (new Date(`${year},${month},01`).getDay());
    const currentMonthDays : number = new Date(year,month,0).getDate();
    const dayArr:number[] = new Array(firstDayWeekDay === 0 ? 6 : firstDayWeekDay-1).concat(_.range(1,currentMonthDays+1,1))

    return (
        <>
            <table className='day-and-week_table' >
                <tr tabIndex={0} aria-label='weekdays'>
                   {
                       week.map((item)=>{
                           return(
                               <th tabIndex={0} aria-label={`The day is ${item}`} >{item}</th>
                           )
                       }
                       )
                   }
                </tr>
                {
                    _.chunk(dayArr, 7).map((item,index)=> {
                        return (
                            <tr key ={index}>
                                {
                                    item.map((item,index)=>{
                                        return(
                                        <td  
                                        tabIndex={0}        
                                        aria-label={`The day of the date is ${item}`} 
                                        key ={index}
                                        onClick ={(event: any) => {dayPicker(parseInt(event.target.innerHTML));isLeftPart &&isLeftPart(true);isRightPart&&isRightPart(false)}}
                                        onKeyDown={(event:any)=>  event.keyCode === 13 && dayPicker(parseInt(event.target.innerHTML))}
                                         >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
             }
            </table>
        </>
    )
}

export default weekAndDay
