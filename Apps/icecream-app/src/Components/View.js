import React, {Component} from 'react';

class View extends Component {
    constructor(props) {
        super(props);
            this.state = {

            }
    }

    render() {

        let {className, children, viewName, activeView} = this.props;
        let newClass = 'view ' + className;

        return (viewName == activeView) ? (
            <div className={"view " + newClass}>
                {children}
            </div>    
        )
            :null
    }

}

export default View;