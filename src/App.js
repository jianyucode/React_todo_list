import React, {Component} from 'react';
import List from "./components/todos/List.js"
import TodoForm from "./components/todos/TodoForm.js"

class App extends Component {
  state = {
    todos: [
      {id: 1, name: "learn rails", complete: true},
      {id: 2, name: "learn react", complete: false},
      {id: 3, name: "learn react_route", complete: true},
      {id: 4, name: "learn JS", complete: false},
    ]
  }

  getUniqId = () => {
   //NOTE We are just using this as a helper function for id's since we aren't using a db yet
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addTodo = (name) => {
    const {todos} = this.state
    const todo = {name, complete: false, id: this.getUniqId()}
    this.setState({ todos: [todo, ...todos]})

  }

  render () {
      const { todos } = this.state
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <List name="Bucket List" items={todos} />
      </div>
    )
  }
}

export default App;
