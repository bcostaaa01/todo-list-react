import React, { Component } from "react";

class SubmitForm extends Component {
  render() {
    return (
      <form>
        <input type="text" className="input" placeholder="Enter Todo Task" />
        <button className="button">Submit Todo task</button>
      </form>
    );
  }
}

export default SubmitForm;
