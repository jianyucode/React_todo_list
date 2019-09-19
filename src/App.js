import React, {Component} from 'react';
import List from "./components/todos/List.js"

class App extends Component {
  state = {
    todos: [
      {id: 1, name: "learn rails", complete: true},
      {id: 2, name: "learn react", complete: false},
      {id: 3, name: "learn react_route", complete: true},
      {id: 4, name: "learn JS", complete: false},
    ]
  }

    // renderTodos = () => {
    //   const {todos} = this.state
    //   return todos.map( todo => {
    //     return (
    //       <li key={todo.id}>{todo.name}</li>
    //     )
    //   })
    // }


  render () {
      const { todos } = this.state
    return (
      <div>
        <List name="Bucket List" items={todos} />
      </div>
    )
  }
}

export default App;
