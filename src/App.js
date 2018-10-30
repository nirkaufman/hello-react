import React, {Component} from 'react';
import './app.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import Footer from "./components/Footer";
import {update, remove} from 'ramda';

class App extends Component {

  state = {
    title    : 'Todos',
    items    : [],
    completed: 0
  };

  getItemIndex = (item) => {
    return this.state.items.indexOf(item);
  };

  removeItem = (item) => {
    const index = this.getItemIndex(item);

    this.setState({
      items: remove(index, index + 1, this.state.items)
    })
  };

  addItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
  };

  checkItem = (item) => {
    const index = this.state.items.indexOf(item);

    item.completed = !item.completed;

    const newItems = update(index, item, this.state.items)

    this.setState({ items: newItems })
  };

  toggleAll = () => {

  };

  clearCompleted = () => {
    this.setState({
      items: this.state.items.filter(item => item.completed === false)
    })
  };

  render() {
    return (
      <section className="todoapp">
        <Header title={this.state.title}
                addItem={this.addItem}/>
        <Main items={this.state.items}
              actions={{
                remove: this.removeItem,
                check : this.checkItem
              }}/>
        <Footer count={this.state.count}
                onClearCompleted={this.clearCompleted}/>
      </section>
    )
  }
}


export default App;
