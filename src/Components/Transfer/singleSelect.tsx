import React, { Fragment,useState,useEffect } from 'react'

interface IProps {
    content:string,
    allSelected:boolean,
    seleteable:boolean,
    moveSourceToTarget:(index:number)=>void,
    id:number,
    removeSourceToTarget:(index:number)=>void
}
    
const SingleSelect:React.FC<IProps> = ({content,allSelected,seleteable,moveSourceToTarget,id,removeSourceToTarget}) => {

    const [checked,setChecked]=useState(false)

    useEffect(()=>{
            setChecked(allSelected)
    },[allSelected])

    useEffect(()=>{
        checked && moveSourceToTarget(id)
        !checked && removeSourceToTarget(id)
    },[checked])

    return (
        <Fragment>
            <label className ='single_checkbox' style={ !seleteable ?{cursor: 'not-allowed',color:'#d9d9d9'} :{}}>
                <input type='checkbox' 
                className ='selectBox' 
                onClick ={()=> {setChecked(!checked) ; }} 
                checked= {checked}  
                disabled={!seleteable}>
                </input>
                <span>{content}</span>
            </label>
        </Fragment>
    )
}

export default SingleSelect
