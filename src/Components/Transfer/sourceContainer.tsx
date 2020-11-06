import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SingleSelect from './singleSelect'
import _ from'lodash';


interface IProps{

    moveToTargetData:(data:Array<any>)=>void
}

const SourceContainer:React.FC<IProps>= ({moveToTargetData}) => {
    const sourceData =useSelector((state:any)=>state.transferSource.data)

    const[allSelected,setAllselected]= useState<any>(false)
    const[selectArr,setSelectArr]= useState<any>([])

    const moveSourceToTarget = (id:number)=>{
        !selectArr.includes(id) && selectArr.push(id)
        setSelectArr([...selectArr])
    }

    const removeSourceToTarget = (id:number)=>{
        _.remove(selectArr,(itemId)=> itemId===id);
        setSelectArr([...selectArr])
    }

    useEffect(()=>{
        moveToTargetData(selectArr)
    },[selectArr])

    return (
        <>
            <div className ='container' >
                <header className='header'>
                    <div className ='header_left'>
                        <input type='checkbox' className ='selectBox' onClick ={()=> setAllselected(!allSelected) }></input>
                        <span>{sourceData.length}项</span>
                    </div>
                    <span>
                            Source
                    </span>
                </header>
                <article className='content'>
                    {
                        sourceData.map((item:any,index:number)=>{
                            return(
                                        <SingleSelect 
                                        key ={item.id} 
                                        id ={item.id}
                                        content={item.content} 
                                        allSelected={allSelected} 
                                        seleteable={item.seleteable} 
                                        moveSourceToTarget ={moveSourceToTarget}
                                        removeSourceToTarget ={removeSourceToTarget}
                                        /> 
                                    )
                        })
                    }
                </article>
            </div>
        </>
    )
}


export default SourceContainer