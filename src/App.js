import React, {Component} from 'react';
import './app.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";


class App extends Component {

  constructor(props) {
    super(props);
    props.name = 'nir'
  }

  render(){
    console.log('APP RENDER');
    return (
      <section className="todoapp">
        <Header title={this.title}/>
        <Main/>
        <Footer/>
      </section>
    )
  }
}


export default App;
