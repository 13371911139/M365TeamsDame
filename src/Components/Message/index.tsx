import React ,{useState,useEffect}from 'react';
import MessageCo from './messageCo';
import _ from 'lodash'

const Message = () => {

    const [display,setDisplay] = useState<boolean>(false)
    const [initial,setInitial] = useState<boolean>(false)
    console.log(1)
    
    useEffect(()=>{
        setTimeout(()=>setDisplay(false),4000)
    },[display])
    return (
        <div className='message__container'>
            {
                initial && <MessageCo display ={display}/>
            }
            

            <div className='control__panel' onClick ={ _.debounce(()=> {setInitial(()=>true);setDisplay(true)},500)}>Success</div>
        </div>
    )
}

export default Message
