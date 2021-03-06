import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos: []
  }
  deleteTodos= (id) => {
const todos = this.state.todos.filter(todo => {
  return (todo.id !== id);
})
this.setState({
  todos: todos
})
  }
  addTodo =(todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })}
  render(){
  return (
    <div className="todo-app container">
    <h1 className="centre blue-text">Todo's</h1>
    <Todos  deleteTodos={this.deleteTodos}todos={this.state.todos}/>
    <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }}
export default App;
