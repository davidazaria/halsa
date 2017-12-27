import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Form } from './components/Form.js'
import UsersList from './components/Users-list'

class App extends Component {
  constructor() {
    super();
    this.setState = {
      apiDataLoaded: false,
      apiData: ''
    };
    //BIND YOUR METHODS HERE!!!
    this.getUsersPlan = this.getUsersPlan.bind(this);
    this.showUserList = this.
  }

  async componentDidMount() {
    //Need axios or fetch?
  }


  getUsersPlan() {
    fetch('')
    .then(res => res.json())
    .then(res => {
      this.setState
        plansData:res.data.plans

}
)

    showUserList() {
      fetch(''
        .then(res => res.json())
        .then(res => {
          this.setState
          plansData:res.
        })
))
    this.setState({
    plansData: true,
    });
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
}
export default App;
