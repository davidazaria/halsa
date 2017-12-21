import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Form } from './components/Form.js'


class App extends Component {
  constructor() {
    super();
    this.setState = {
      apiDataLoaded: false,
      apiData: ''
    };
    //BIND YOUR METHODS HERE!!!
  }

  async componentDidMount() {
    //Need axios or fetch?
  }

  render() {
    return (
      <div className="App">
        <main>
        <h1>Halsa</h1>
        <Route path="/form" exact component={Form} />
        <Form />
      </main>
      </div>
    );
  }
}

export default App;
