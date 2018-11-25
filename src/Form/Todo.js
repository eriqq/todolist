import React, { Component } from "react";
import List from "./List.js";
import "../App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(function(prevState) {
      return { list: prevState.list.concat(this.state.text), text: "" };
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  removeItem(index) {
    const tempList = this.state.list.slice();
    tempList.splice(index, 1);
    this.setState({
      list: tempList
    });
  }

  render() {
    return (
      <div>
        <h1>Today's tasks</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Add task here!"type="text" value={this.state.text} onChange={this.handleChange} />
        </form>

        <List removeItem={this.removeItem} list={this.state.list}/>
      </div>
    );
  }
}

export default Todo;
