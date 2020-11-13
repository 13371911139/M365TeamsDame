import React from 'react'
interface IProps {
    percent:number
}


const ProgressCircle :React.FC<IProps>= ({percent}) => {

    

    return (
        <div >
            <div className='progress-circle__first'>
                <div className='progress-circle__second'>
                </div>

                <div className={`${percent <=0.5 ? 'progress-circle__third__less' : 'progress-circle__third__more'}`} style={{transform:`rotate(${percent*180}deg)`}} >
                </div>

                <div className="progress-circle__mask">
                        <span>{percent*100}%</span>     
                </div>
            </div>
        </div>
    )
}

export default ProgressCircle
