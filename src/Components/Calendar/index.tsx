import React,{useState} from 'react';
import WeekAndDay from './weekAndDay';
import Month from './month'
import Year from './year'
import moment from'moment'



const Calendar = () => {
    const [datePicker, setDatePicker] = useState<boolean>(false)
    const [year,setYear] = useState<number>(parseInt(moment().format('YYYY')))
    const [month,setMonth] = useState<number>(parseInt(moment().format('MM')))
    const [day,setDay] = useState<number>()
    const [select, setSelect] =useState<any>({
        year:false,
        month:false,
        day:true,
    })


    const nextMonth:()=>void = ()=>{
        month ===12 ? setMonth(1) :setMonth(month+1)
    }

    const goBackMonth:()=>void = ()=>{
        month ===1 ? setMonth(12) :setMonth(month-1)
    }
    
    return (
        <>
            <div 
            role ='button'
            aria-label='click ot type to Select date'
            tabIndex = {0} className = 'calendar__picker' 
            onClick= {()=> setDatePicker(!datePicker)} 
            onKeyDown={(e)=>  e.keyCode === 13 && setDatePicker(!datePicker)
            } >
                {
                   day? year+'-'+month+'-'+day : '请输入日期'
                } 
            </div>
            {
                datePicker && (
                    <div className ='calendar__container'  tabIndex={0} aria-label='This is the date container'>
                        <header className = 'header'>
                            <div >
                                <button className='button' onClick ={()=>setYear(year-1)} aria-label='Back to last year'>&lt;&lt; </button>
                                <button className='button' onClick ={goBackMonth} aria-label='Back to last month' >&lt; </button>
                            </div>
                            <div>
                                <button className='button' onClick={()=>setSelect({year:true,month:false,day:false})} aria-label={` The year is ${year} and you can click to select years`}>{year} 年</button>
                                &nbsp;
                                <button className='button' onClick={()=>setSelect({year:false,month:true,day:false})}aria-label={` The month is ${month} and you can click to select month`}>{month} 月</button>
                            </div>
                            <div>
                                <button className='button' onClick ={nextMonth} aria-label='forward to next month' >&gt;</button>
                                <button className='button' onClick ={()=>setYear(year+1)} aria-label='forward to next year'>&gt;&gt;</button>
                            </div>
                        </header>
                        <div className='header__border'></div>

                        <article className='article_container'>
                            {
                                select.month && <Month monthPicker={(month : number )=> {setMonth(month);setSelect({year:false,month:false,day:true})}}/>
                            }
                            {
                                select.year && <Year currentYear ={year} yearPicker={(year : number )=> {setYear(year);setSelect({month:false,year:false,day:true})}}/>
                            }
                            {
                                select.day && <WeekAndDay year ={year} month={month} dayPicker ={(day : number )=> {setDay(day);setSelect({month:false,year:false,day:true})}}/>
                            }
                        </article>
                    </div>
                )
            }
        </>
    )
}

export default Calendar
