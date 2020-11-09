import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



const SourceContainer:React.FC = () => {
    const targetData =useSelector((state:any)=>state.transferSource.data1)
    return (
        <>
            <div className ='container'>
                <header className='header'>
                    <div className ='header_left'>

                    <span>{targetData.length}项</span>
                    </div>
                    <span>
                            Source
                    </span>
                </header>
                <article className='content'>
                {
                        targetData.map((item:any,index:number)=>{
                            return(
                                <label className ='single_checkbox'>
                                <div
                                className ='selectBox' style={{border:'none'}} >
                                </div>
                                <span>{item.content}</span>
                            </label>
                            )
                        })
                    }
                </article>

            </div>
        </>
    )
}


export default SourceContainer