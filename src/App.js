import React, { Component } from 'react';
import './App.css';
import Todo from './Form/Todo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
