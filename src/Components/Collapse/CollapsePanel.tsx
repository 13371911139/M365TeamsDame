
import React, { useState } from 'react';

interface IPros {
    children:any
}

const CollapsePanel:React.FC<IPros> = ({children}) => {
    const [expand,setExpand] =useState<boolean>(false)
    const [initial,setInitial] =useState<boolean>(true)
    
    return (
        <>  
            <div className = 'collapse-panel__container' onClick ={()=>{setExpand(!expand);setInitial(false)}} tabIndex={0} aria-label={`expand the panel`} onKeyDown={(event:any)=>  {if(event.keyCode === 13) {setExpand(!expand);setInitial(false)}}}  >
                <div className={`${ !initial && (expand ?'span_arrow' :'reset_arrow')}`} >
                   <svg viewBox="64 64 896 896" focusable="false"  data-icon="right" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true" ><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
                </div>
                <span className = 'text_font'>This is the first panel</span>
                {children}
            </div>

            <div className={`${!initial && ( expand?'expand_text' :'narrow_text')}`} tabIndex={expand ? 0 :undefined} aria-label='expand content'>
            <span style={ {display:`${expand ? 'inline':'none'}`}}>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</span> 
            </div>
        </>
    )
}


export default CollapsePanel
