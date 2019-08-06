import React, {Component} from 'react';
import { FaLightbulb } from 'react-icons/fa';

class NewIdea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleInput:'',
            contentInput:'',
            noteInput:'',
        }
    }

    handleTitleInputChange = (e) => {
        this.setState ({
            titleInput:e.target.value
        });
    };

    handleContentInputChange = (e) => {
        this.setState ({
            contentInput:e.target.value
        });
    };

    handleNoteInputChange = (e) => {
        this.setState ({
            noteInput:e.target.value
        });
    };

    handleAddIdeaClick = (e) => {
        e.preventDefault(); 
        let data = {
            title:this.state.titleInput,
            content:this.state.contentInput,
            notes:this.state.noteInput
        };
        this.props.addIdea(data);

        this.setState({
            title:'',
            content:'',
            notes:''
        })
    }




render (){
        return (
            <div className="ideaBubble">
               
                <form onSubmit={this.handleAddIdeaClick} className="IdeaForm">
                <FaLightbulb />
                    <h2>Brainstorm</h2>
                    <input type="text"  onChange={this.handleTitleInputChange} placeholder="Idea Title" className="titleStyle"/>
                    <textarea rows="10" cols="10" wrap="hard"  onChange={this.handleContentInputChange} placeholder="Your Idea" className="contentStyle"/>
                    <input type="text"  onChange={this.handleNoteInputChange} placeholder="Notes" className="noteStyle"/>
                    <button type="submit" className="btn btn-primary idea-add">Add Idea +</button>
                </form>
            </div>
        );
    }   
}

export default NewIdea;