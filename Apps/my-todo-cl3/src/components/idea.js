import React, {Component} from 'react';

class Idea extends Component {
    constructor(props) {
        super(props);
            this.state = {

        }
    }

    handleIdeaRemoveClick = () => {
        var id = this.props.id;
        this.props.removeIdea(id);

    }

    render() {
        return (
            <div className="ideasContainer">
                <div className="ideaBody">
                    <div className="ideasUser">{this.props.user}</div>
                    <div className="ideaContent">{this.props.content}</div>
                    <div className="ideaDate">{this.props.date}</div>
                </div>
            </div>
        )
    }

}

export default Idea;