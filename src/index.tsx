import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import Transfer from './Components/Transfer'
import Calendar from './Components/Calendar'
import reportWebVitals from './reportWebVitals';
import RoundDatePciker from './Components/RoundDatePicker/index';
import Collapse from './Components/Collapse';
import ToolTip from './Components/ToolTip';

import { Provider } from 'react-redux';
import store from './store'
const { Panel } = Collapse;

ReactDOM.render(
   <div>
     <Collapse>   
         <Panel>
            <ToolTip title='1'/>
         </Panel>
         <Panel>
            <ToolTip title='2'/>
         </Panel>
         <Panel>
            <ToolTip title='3'/>
         </Panel>
         <Panel>
            <ToolTip title='4'/>
         </Panel>
         <Panel>
            <ToolTip title='5'/>
         </Panel>
     </Collapse>
    </div>
   ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
