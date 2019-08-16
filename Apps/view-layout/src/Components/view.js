import React, {Component} from 'react';
class View extends Component {


    render() {

        var {className, children, viewName, activeView} = this.props;

        // true  ?  when true  :  when not true

        var newClassName = (viewName == activeView) ? 'view active '+ className : 'view ' + className;

        return (
            <div className= {"view " + newClassName}>

                {children}

            </div>

        );
    }
}

export default View;