import React, { useEffect ,useState } from 'react';
import SingStep from './singStep'


interface IProps {
    current : Number;
    singStepsDetails:any[];
}
const status =[{
    isDoing:true,
    isDone:false
},{
    isDoing:false,
    isDone:false
},{
    isDoing:false,
    isDone:false
}]

const Processing :React.FC<IProps> = ({current,singStepsDetails}) => {
    
    const [statusSingleStep,setStatusSingleStep]=useState<Array<any>>(status)

    useEffect(()=> {
        current ===0 && setStatusSingleStep(()=>status);
        current ===1 && setStatusSingleStep(()=>[{
            isDoing:false,
            isDone:true
        },{
            isDoing:true,
            isDone:false
        },{
            isDoing:false,
            isDone:false
        }]);
        current ===2 && setStatusSingleStep(()=>[{
            isDoing:false,
            isDone:true
        },{
            isDoing:false,
            isDone:true
        },{
            isDoing:true,
            isDone:false
        }]);

        current ===3 && setStatusSingleStep(()=> [{
            isDoing:false,
            isDone:true
        },{
            isDoing:false,
            isDone:true
        },{
            isDoing:false,
            isDone:true
        }]);

    },[current])
    
    return (
         <div className ='Step__contanier'>
             {
                singStepsDetails.map((item,index)=>{

                    return(
                        <SingStep key={index} title={item.title} length ={singStepsDetails.length} subTitle ={item.subTitle} description={item.description} indexNumber ={index+1} status ={statusSingleStep[index]}/>
                    )
                })
            }
        </div>
    )
}

export default Processing
