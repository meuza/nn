import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.component";
import President from "./components/President.component";
import Page2 from "./components/Page2.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
         alert('A name was submitted: ' + this.state.value);

        event.preventDefault();
    }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>

          <h2><a href= "/">Home </a>
          <a href= "/Page2"> Home2</a></h2>
          <Home/>
          <President/>
          <Page2/>
          <form onSubmit={this.handleSubmit}>
              <label>

                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
          </form>

          <button>GET Data</button>
          <button>Clear</button>

      </div>
    );
  }
}

export default App;
