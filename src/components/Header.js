import React, {Component} from "react";

export class Header extends Component {

  state = { todo: '' };

  handleChange = ({ target }) => {
    this.setState({ todo: target.value })
  };

  handleSubmit = ({ keyCode }) => {
    if(keyCode === 13) {
      console.log(this.state);
    }
  };

  render() {
    return <header className="header">
      <h1>todos</h1>
      <input className="new-todo"
             value={this.state.todo}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit}
             placeholder="What needs to be done?"
             autoFocus/>
    </header>;
  }
}