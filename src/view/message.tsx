import React,{useState} from 'react'

import { Message } from '../component/message'
const MessageView = () => {
    const [type,setType]=useState<string>('')
    const buttonClick = (type:string) => {
        setType(type)
    }
    return <div>
        <button onClick={r => buttonClick('error')}>error</button>
        <button onClick={r => buttonClick('success')}>success</button>
        <button onClick={r => buttonClick('warning')}>warning</button>
        <Message content={type} type={type}></Message>
    </div>
}
export default MessageView
