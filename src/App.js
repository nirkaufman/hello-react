import React, {Component} from 'react';
import './app.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

class App extends Component {

  render(){
    return (
      <section className="todoapp">
        <Header />
        <Main/>
        <Footer/>
      </section>
    )
  }
}


export default App;
