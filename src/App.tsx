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

export default App;
