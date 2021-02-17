import "./styles.css";
import Header from "./header";
import React from "react";
import TodoList from "./todolist";

class App extends React.Component {
  state = {
    todoTasks: ["task 1", "task 2", "task 3"]
  };

  handleDelete = (index) => {
    const newArr = [...this.state.todoTasks];
    newArr.splice(index, 1);
    this.setState({
      todoTasks: newArr
    });
  };

  handleSubmit = (task) => {
    this.setState({
      todoTasks: [...this.state.todoTasks, task]
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="cardFrame">
          <Header numberTodos={this.state.todoTasks.length} />
          <TodoList tasks={this.state.todoTasks} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;
