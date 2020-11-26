import React from 'react'
import './index.less'
interface iProps {
    value: number,
    content?: string,
    style?:object,
    circelColor?:string[]
}
export const ProgressBar: React.FC<iProps> = (props) => {
    const { content, value ,style={}} = props
    return <div className="progressbar">
        <span className="value_progre"><i style={{ width: value + '%',...style }}></i></span>
        {
            content && <span className="content_progre">{content}</span>
        }
    </div>
}
export const ProgressBarCircular: React.FC<iProps> = (props) => {
    const { content, value ,circelColor} = props
    return <div className="progressBarCi">
        {content && <span aria-label="项目进展" className="content_circula">{content}</span>}
        <svg width="230" height="230" viewBox="0 0 230 230" transform="rotate(90),scale(-1,1)">
            <defs>
                <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color={circelColor?circelColor[0]:"#7a7ac5"} />
                    <stop offset="100%" stop-color={circelColor?circelColor[1]:"blue"} />
                </linearGradient>
            </defs>
　　　　　　　　<circle cx="115" cy="115" r="50" fill="none" stroke="#f7f7f7" stroke-width="20" />
　　　　　　    <circle cx="115" cy="115" r="50" fill="none" stroke="url(#orange)" stroke-width="12" stroke-dasharray={Math.PI * 100} stroke-dashoffset={Math.PI * 100 - Math.PI * value} stroke-linecap="round" />
　　　　</svg>
    </div>
}
export default ProgressBar