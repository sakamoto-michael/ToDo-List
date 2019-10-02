import React, {Component} from 'react';
import Header from './components/Layout/Header.js';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title:'Take out the trash',
        completed: false
      },
      {
        id:2,
        title:'Make dinner',
        completed: false
      },
      {
        id:3,
        title:'Shop for groceries',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Delete To-Do
  delTodo = (id) => {
    this.setState( {todos: [...this.state.todos.filter(todo => todo.id !== id)]} );
  }

  // Add To-Do
  addToDo = (title) => {
    const newToDo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newToDo]})
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
       </div>
    );
  }
}

export default App;
