import "./styles.css";
import Header from "./header";
import React from "react";
import TodoList from "./todolist";
import SubmitForm from './submitform';

class App extends React.Component {
  state = {
    todoTasks: []
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
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
