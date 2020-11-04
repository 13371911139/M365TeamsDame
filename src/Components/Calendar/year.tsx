import React,{useState} from 'react';
import _ from 'lodash';


interface IMonthProps{
    yearPicker : (month:number)=>void;
    currentYear:number;
}

const Year : React.FC<IMonthProps> = ({yearPicker,currentYear}) => {

    let yearArr : number[] =_.range(currentYear,currentYear+12,1)

    const[goAheadYear,setGoAheadYear] =useState<number[]>(yearArr)
    
    return (
        <>
           <header className ='year__header'>
               <button className='button'  onClick={()=> setGoAheadYear([..._.range(goAheadYear[0]-12,goAheadYear[0],1)])}>&lt;&lt; </button>
               <button className='button'  onClick={()=> setGoAheadYear([..._.range(goAheadYear[0]+12,goAheadYear[0]+24,1)])}>&gt;&gt;</button>
            </header>
        
            <table className='table'>     
            
        
            {
                    _.chunk(goAheadYear, 4).map((item,index)=> {
                        return (
                            <tr key ={index} tabIndex={0} aria-label={`The day is ${item}`}>
                                {
                                    item.map((item,index)=>{
                                        return(
                                        <td tabIndex={0} aria-label={`The day is ${item}`} key ={index} onClick ={(event: any) =>{ yearPicker(parseInt(event.target.innerHTML))}}>{item}</td>
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

export default Year