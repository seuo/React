import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props){
        super(props);
          this.state = {
            content: ''
          };
    
    }

    handleChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }

    render(){
        return (
            <div >
                <form onSubmit={this.handleAdd}>
                    <input type="submit" className="btn" value="+"/>
                    <input type="text" placeholder="Add a new Todo" className="textInput" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }

}

export default AddTodo