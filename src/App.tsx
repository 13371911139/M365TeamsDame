import React, { Fragment ,useState } from 'react'
import Processing from './Components/Processing/index';

const singStepsDetails =[
    {title: 'Waiting',description:'this is description'},
    {title: 'In Progress', subTitle :'  Left 00.00:08',description:'this is description'},
    {title: 'Finished',description:'this is description'},
  ]

const App = () => {
    const [status,setStatus] =useState<number>(0)

    console.log(status)
    const changeStatus = ()=>{
        status >=3 ?setStatus(()=> 0) :
        setStatus(()=>{return status + 1;})
    }
    return (
        <Fragment>
                <Processing current ={status} singStepsDetails={singStepsDetails}></Processing>
                <button className='go-button' onClick ={changeStatus} role ='button'aria-label='click to go to next step'>前进</button>
        </Fragment>
    )
}

export default App
