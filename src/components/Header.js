

import React, { Component } from "react";

export class Header extends Component {
  state = { todo: '' };

  handleChange = ({ target }) => {
    this.setState({ todo: target.value })
  };

  handleSubmit = ({ keyCode }) => {
    if(keyCode === 13) {
      this.props.addItem({ title: this.state.todo, completed: false });
    }
  };

  render() {
    return <header className="header">
      <h1>{this.props.title}</h1>
      <input className="new-todo"
             value={this.state.todo}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit}
             placeholder="What needs to be done?"
             autoFocus/>
    </header>;
  }
}