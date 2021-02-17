import React, { Component } from "react";

class SubmitForm extends Component {
  state = { term: "" };

  render() {
    return (
      <form>
        <input
          type="text"
          className="input"
          placeholder="Enter Todo Task"
          value={this.state.term}
          onChange={(e) =>
            this.setState({
              term: e.target.value
            })
          }
        />
        <button className="button">Submit Todo task</button>
      </form>
    );
  }
}

export default SubmitForm;
