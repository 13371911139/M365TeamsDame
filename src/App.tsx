import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import Step from "./component/step";
import ViewList from "./view/index";
const App: React.FC = () => {
  const [component, setComponent] = useState();
  useEffect(() => {}, []);
  const changeComponent = (param: any) => {
    setComponent(param.component);
  };
  return (
    <div className="App">
      <header className="App-header">学习展示</header>
      <div className="layout">
        <div className="list">
          {ViewList.map((item) => {
            return (
              <li onClick={(r) => changeComponent(item)}>
                <a>{item.name}</a>
              </li>
            );
          })}
        </div>
        <div className="content">{component}</div>
      </div>
    </div>
  );
};

export default App;
