
import React, { useEffect, useState } from 'react'
import './index.less'
interface iProps {
    content: string,
    type: string
}
export const Message: React.FC<iProps> = (props) => {
    const { type, content } = props
    const [state, setState] = useState<boolean>()
    const [setTime, setsetTime] = useState<any>()

    useEffect(() => {
        setState(true)
        clearTimeout(setTime)
        setsetTime(setTimeout(() => {
            setState(false)
        }, 3000))
    }, [content, type])
    const hideMessage = () => {
        return new Promise((resolve, reject) => {
            // setTimeout
        })
    }
    const arrobj: any = {
        success: 'iconsuccess',
        error: 'iconerror',
        warning: 'iconError-Outline'
    }
    return <div style={state ? { display: 'flex' } : {}} className={`message iconfont ${arrobj[type]} `}>
        &nbsp;{content}
    </div>
}
export default Message