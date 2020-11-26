import React,{useEffect, useState} from 'react';
import WeekAndDay from './weekAndDay';
import Month from './month'
import Year from './year'
import moment from'moment'

interface IProps {
    getStartDate?: (date:string)=>void
}

const Calendar :React.FC<IProps> = ({getStartDate}) => {
    const [year,setYear] = useState<number>(parseInt(moment().format('YYYY')))
    const [month,setMonth] = useState<number>(parseInt(moment().format('MM')))

    const [day,setDay] = useState<number>(parseInt(moment().format('DD')))
    const [select, setSelect] =useState<any>({
        year:false,
        month:false,
        day:true,
    })

    const [isLeftPart,setIsLeftPart] =useState(false)
    const nextMonth:()=>void = ()=>{
        month ===12 ? setMonth(1):setMonth(month+1)
        month === 12 && setYear(year+1)
    }

    const goBackMonth:()=>void = ()=>{
        month ===1 ? setMonth(12) :setMonth(month-1)
        month === 1 && setYear(year-1)
    }
    
    // const resetDate:()=>void = () => {
    //     setYear(parseInt(moment().format('YYYY')));
    //     setMonth(parseInt(moment().format('MM')))
    //     setDay(parseInt(moment().format('DD')))
    // }

    useEffect(()=>{
        let date = isLeftPart?  `${month ===12 ? year+1 : year}-${month ===12 ? 1 : month+1}-${day}`: `${year}-${month}-${day}`
        getStartDate && getStartDate(date)
    },[year,month,day])
    
    
    return (
        <>
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
                        <button className='button' onClick ={nextMonth} aria-label='forward to next month' disabled></button>
                        <button className='button' onClick ={()=>setYear(year+1)} aria-label='forward to next year'disabled></button>
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
                        select.day && <WeekAndDay isRightPart ={(status:boolean) => setIsLeftPart(status)} year ={year} month={month} dayPicker ={(day : number )=> {setDay(day);setSelect({month:false,year:false,day:true})}}/>
                    }
                </article>
            </div>
            
            
            <div className ='calendar__container'  tabIndex={0} aria-label='This is the date container'>
                <header className = 'header'>
                    <div >
                        <button className='button' onClick ={()=>setYear(year-1)} aria-label='Back to last year' disabled> </button>
                        <button className='button' onClick ={goBackMonth} aria-label='Back to last month'disabled ></button>
                    </div>
                    <div>
                        <button className='button' onClick={()=>setSelect({year:true,month:false,day:false})} aria-label={` The year is ${year} and you can click to select years`}>{month ===12 ? year+1 : year} 年</button>
                        &nbsp;
                        <button className='button' onClick={()=>setSelect({year:false,month:true,day:false})}aria-label={` The month is ${month} and you can click to select month`}>{month ===12 ? 1 : month+1} 月</button>
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
                        select.year && <Year currentYear ={month ===12 ? year+1 : year} yearPicker={(year : number )=> {setYear(year);setSelect({month:false,year:false,day:true})}}/>
                    }
                    {
                        select.day && <WeekAndDay isLeftPart ={(status:boolean) => setIsLeftPart(status)} year ={year} month={month ===12 ? 1 : month+1} dayPicker ={(day : number )=> {setDay(day);setSelect({month:false,year:false,day:true})}}/>
                    }
                </article>
            </div>



                        {/* <footer className ='fotter__container'>
                                    <div 
                                    className ='fotter' 
                                    role='button' 
                                    aria-label='reset date' 
                                    tabIndex={0}
                                    onClick={resetDate}
                                    >重置今天的日期</div>
                        </footer> */}
        </>
    )
}

export default Calendar
