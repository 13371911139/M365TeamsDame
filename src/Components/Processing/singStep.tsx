import React  from 'react';

interface IStatus {
    isDoing: boolean;
    isDone:boolean
}

interface IStepsProps {
    title ?: String;
    description ?: String;
    subTitle ?: String;
    indexNumber :number;
    status : IStatus;
    length:number;
}


const SingStep :React.FC<IStepsProps> = ({title,description,subTitle,indexNumber,status,length}) => {

    return (
        <div className = 'single-step__container'>
            <div className = {`circle ${ status.isDoing && 'isDoingCircle' } ${status.isDone && 'isDoneCircle'}`} >
              {
                    !status.isDone ? indexNumber
                    : 
                    <svg  style ={{color : '#1890ff'}} viewBox="64 64 896 896" focusable="false"  data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
              } 
                
            </div>
            <div className='title-description__container'>
                <div className = 'title-container'>
                    <div className = {`title ${ status.isDoing && 'isDoingTitle' } ${ status.isDone && 'isDoneTitle' }`}>
                        {title} 
                        {
                            subTitle && <span className = 'sunTitle'>{subTitle}</span>
                        }
                        &nbsp;
                    </div>
                    {
                        indexNumber !==length && status.isDone &&  <div className = 'line'></div>
                    }
                </div>
                 <div className={`description ${ status.isDoing && 'isDoingdescription' }`}>{description}</div>
            </div>

        </div>
    )
}

export default SingStep
