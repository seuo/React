import React, {Component} from 'react';
import Draggable from 'react-draggable';
import { FaTrash } from 'react-icons/fa';



class Idea extends Component {
    constructor(props) {
        super(props)
        // this.state = [
        //     updatingTitle:false,
        //     updatingIdea:false,
        //     updatingNotes:false
        // ]
    }

// handleTitleDoubleClick = () => {
//     this.setState ({
//         updatingTitle:true
//     });
// }

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
            grid={[52, 52]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className="handle" >
                <div className="idea">
                <div className="titleContent">
                   <h2> {this.props.title}</h2>
                </div>
                <div className="ideaContent">
                    <p>{this.props.content}</p>
                </div>
                <div className="ideaNote">
                    <p>{this.props.notes}</p>
                </div>
                <div className="removeIdea" onClick={this.handleIdeaRemoveClick}><FaTrash /></div>
                </div>
            </div>
          </Draggable>


        );
    }
}

export default Idea;