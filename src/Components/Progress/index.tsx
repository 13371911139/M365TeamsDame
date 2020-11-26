import React from 'react'

interface IProps {
    percent:number
}

const Progress:React.FC<IProps> = ({percent}) => {
    return (
        <div  className='progress__container'>
            <div className='progress' style={{width:`${percent*50}rem`}}>
                <div className='progress__action'></div>
            </div>
            <span>{percent*100} %</span>

        </div>
    )
}

export default Progress
