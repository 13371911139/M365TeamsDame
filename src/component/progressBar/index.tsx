import React from 'react'
import './index.less'
interface iProps {
    value: number,
    content?: string,
    style?:object
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
    const { content, value } = props
    return <div className="progressBarCi">
        {content && <span className="content_circula">{content}</span>}
        <svg width="230" height="230" viewBox="0 0 230 230" transform="rotate(90),scale(-1,1)">
            //进度条渐变色
            <defs>
                <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#7a7ac5" />
                    <stop offset="100%" stop-color="blue" />
                </linearGradient>
            </defs>
　　　　　　　　//进度条渐变
　　　　　　　　//外层圆
　　　　　　　　<circle cx="115" cy="115" r="50" fill="none" stroke="#f7f7f7" stroke-width="20" />
　　　　　　　　//外层圆
　　　　　　　　//内容圆
　　　　　　    <circle cx="115" cy="115" r="50" fill="none" stroke="url(#orange)" stroke-width="12" stroke-dasharray={Math.PI * 100} stroke-dashoffset={Math.PI * 100 - Math.PI * value} stroke-linecap="round" />
　　　　　　　　//内层圆
　　　　</svg>
    </div>
}
export default ProgressBar