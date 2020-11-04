import React,{useState} from 'react';
import _ from 'lodash';

const monthArr : string[] =['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']

interface IMonthProps{
    monthPicker : (month:number)=>void;
}

const month : React.FC<IMonthProps> = ({monthPicker}) => {



    return (
        <>
            <table className='table'>
            {
                    _.chunk(monthArr, 4).map((item,index)=> {
                        return (
                            <tr tabIndex={0} aria-label={`The day is ${item}`} key ={index}>
                                {
                                    item.map((item,index)=>{
                                        return(
                                        <td tabIndex={0} aria-label={`The day is ${item}`} key ={index} onClick ={(event: any) => monthPicker(parseInt(event.target.innerHTML))}>{item}</td>
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

export default month
