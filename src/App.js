import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Form from './components/Form.jsx';
import PlansList from './components/PlansList.jsx';
import Header from './components/Header.jsx';

class App extends Component {
  constructor() {
    super();
    this.setState = {
      apiDataLoaded: false,
      apiData: ''
    };
    //BIND YOUR METHODS HERE!!!
  }

  //async componentDidMount() {
    //Need axios or fetch?
  //}

//Show logo and button here
//Click button to go the forms

  render() {
    return (
      <div className="App">
        <main>
        <Header />
        <Form />
      </main>
      </div>
    );
  }
}
export default App;
