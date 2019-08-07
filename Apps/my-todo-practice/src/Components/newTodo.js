import React, { Component } from 'react';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentInput:'',
            priorityInput:''
        }
    }

    handleContentInputChange = (e) => {
        this.setState ({
            contentInput:e.target.value
        });
    }

    handlePriorityInputChange = (e) => {
        this.setState ({
            priorityInput:e.target.value
        });
    }

    handleTodoAddClick = (e) => {
        e.preventDefault();
       
        let data = {
                content:this.state.contentInput,
                priority:this.state.priorityInput
        };

        this.props.addTodo(data);
    }


    render() {
        return (
        <div className="formGrp">
            <form id="todoForm">
                <div className="InputContent">
                    <input type="text" onChange={this.handleContentInputChange}/>
                </div>
                <div className="InputPriority">
                    <input type="text" onChange={this.handlePriorityInputChange}/>
                </div>
            </form>
            <button type="submit" for="todoForm" onClick={this.handleTodoAddClick}>ADD</button>
        </div>

        )
    }

}


export default NewTodo;