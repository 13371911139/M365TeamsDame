import React from 'react';
import CollapssePanel from './CollapsePanel'

interface IProps {

}

interface CollapseInterface extends React.FC<IProps> {
    Panel: typeof CollapssePanel;
  }

const Collapse:CollapseInterface  = (props) => {
    
    return (
        <div className ='collapse__container'>
                {props.children}
        </div>
    )
}

Collapse.Panel = CollapssePanel;
export default Collapse
