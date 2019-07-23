import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: null,
        id: null
    }
    handleChange =(e) => {
        this.setState({
        [e.target.id]: e.target.value
        })
        }
    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render(){
    return(
    <div className="container">
        <form onSubmit={this.handleSubmit}>
            <input id='content' placeholder='Add Todo' type='text' onChange={this.handleChange}/>
            <button className="btn btn-success">Add TODO</button>
        </form>
    </div>
)
}}
export default AddTodo;