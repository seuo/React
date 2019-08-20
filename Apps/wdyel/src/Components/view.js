import React, {Component} from 'react';
class View extends Component {


    render() {

        var {className, children, viewName, activeView} = this.props;

        // true  ?  when true  :  when not true
        
       
        
        var newClassName = 'view ' + className;


        // var newClassName = (viewName == activeView) ? 'view active '+ className : 'view ' + className;

        // if active ? insert the view : dont insert the view
        return (viewName == activeView) ? (            
        <div className= {"view " + newClassName}>
        {children}
        </div>
        )
        :null
    }
}

export default View;