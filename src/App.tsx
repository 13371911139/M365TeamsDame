<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import Step from "./component/step";
import ViewList from "./view/index";

const App: React.FC = () => {
  const [component, setComponent] = useState(ViewList[0].component);
  useEffect(() => {
    if (!component) {
      setComponent(ViewList[0].component);
    }
  }, []);
  const changeComponent = (param: any) => {
    setComponent(param.component);
  };
  return (
    <div className="App">
      <header className="App-header">学习展示</header>
      <div className="layout">
        <nav className="list" role ="navigation" aria-labelledby="navigation">
          <ul>
            {ViewList.map((item) => {
              return (
                <li onClick={(r) => changeComponent(item)}>
                  <a aria-label={`链接${item.name}`} href="vavascript:void(0)">{item.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="content">{component}</div>
      </div>
    </div>
  );
};
=======
import React, { useState } from 'react';
import './App.css';
import { Steps } from 'antd';
import 'antd/dist/antd.css';

import M365Steps from "./Components/M365Steps";
const { Step } = Steps;
type StepProps = {
	className?: string;
	description?: React.ReactNode;
	icon?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
	status?: 'wait' | 'process' | 'finish' | 'error';
	disabled?: boolean;
	title?: React.ReactNode;
	subTitle?: React.ReactNode;
	style?: React.CSSProperties;
}
function App() {

	const [currentStep, setcurrentStep] = useState(0);

	const stepsData: StepProps[] = [
		{ title: "step 1", subTitle: "This is a description." },
		{ title: "step 2", subTitle: "This is a description." }
	]
	return (
		<div className="App">
			<h2>ant-design 自带Steps组件实例</h2>
			<Steps current={1}>
				<Step title="Finished" description="This is a description." />
				<Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
				<Step title="Waiting" description="This is a description." />
			</Steps>
			<h2>自己的Steps组件实例</h2>
			<M365Steps current={currentStep} stepsData={stepsData}></M365Steps>

			<button onClick={() => {
				if (currentStep > 0) {
					setcurrentStep(currentStep - 1);
				}
			}}>Previous</button>
     		&nbsp;&nbsp;{currentStep}&nbsp;&nbsp;
			<button onClick={() => {
				if (currentStep < stepsData.length) {
					setcurrentStep(currentStep + 1);
				}
			}}>Next</button>
		</div>
	);
}
>>>>>>> master

export default App;
