import React from 'react'

interface IProps {
    title:string
}

const ToolTip:React.FC<IProps>= ({title}) => {
    return (
        <>   
        <div className='tool-tip__container'>
            {title} 
        </div>
        </>
     

    )
}


export default ToolTip
