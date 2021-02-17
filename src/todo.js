import React from "react";

const Todo = (props) => {
  return (
    <div className="list-item">
      {props.content}
      // delete button
      <button
        class="delete is-pulled-right"
        onClick={() => {
          props.onDelete(props.id);
        }}
      ></button>
      // rename button
      <button class="rename"
      onClick={() => {
        props.onChange(props.id);
      }}>
        </button>
    </div>
  );
};

export default Todo;
