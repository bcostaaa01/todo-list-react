import "./styles.css";
import Header from "./header";
import React from "react";
import TodoList from "./todolist";

class App extends React.Component {
  state = {
    todoTasks: ["task 1", "task 2", "task 3"]
  };
  render() {
    return (
      <div className="wrapper">
        <div className="cardFrame">
          <Header numberTodos={this.state.todoTasks.length} />
          <TodoList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
