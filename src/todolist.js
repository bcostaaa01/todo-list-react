import React from "react";
import Todo from "./todo";

const TodoList = (props) => {
  const todos = props.tasks.map(function (todo, index) {
    return <Todo content={todo} key={index} id={index} />;
  });
  return <div className="list-wrapper">{todos}</div>;
};

export default TodoList;
