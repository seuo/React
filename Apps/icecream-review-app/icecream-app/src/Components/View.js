import React, {Component} from 'react';

class View extends Component {


    render() {

        var {className, children, viewName, activeView} = this.props;
        var newClass = 'view ' + className;

        return (viewName == activeView) ? (
            <div className={"view " + newClass}>
                {children}
            </div>    
        )
            :null
    }

}

export default View;