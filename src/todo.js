import React from "react";

const Todo = (props) => {
  return (
    <div className="list-item">
      {props.content}
      <button class="delete"></button>
    </div>
  );
};

export default Todo;
