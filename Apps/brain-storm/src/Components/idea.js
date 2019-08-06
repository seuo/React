import React, {Component} from 'react';
import Draggable from 'react-draggable';
import { FaTrash } from 'react-icons/fa';



class Idea extends Component {
    constructor(props) {
        super(props)
        this.state = [
            updatingTitle:false,
            updatingIdea:false,
            updatingNotes:false
        ]
    }

handleTitleDoubleClick = () => {
    this.setState ({
        updatingTitle:true
    });
}

handleIdeaRemoveClick = () => {
    var id = this.props.id;
    this.props.removeIdea(id);
}


render (){
        return(
            <Draggable
            // axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="handle" >
                <div className="idea">
                <div className="titleContent">
                    {this.props.title}
                </div>
                <div className="ideaContent" rows="10" cols="10" wrap="hard">
                    {this.props.content}
                </div>
                <div className="ideaNote">
                    {this.props.notes}
                </div>
                <div className="removeIdea" onClick={this.handleIdeaRemoveClick}><FaTrash /></div>
                </div>
            </div>
          </Draggable>

        );
    }
}

export default Idea;