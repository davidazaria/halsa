import React, { Component } from 'react';
import './App.css';
//  import { Switch, Route } from 'react-dom-router';
import Form from './components/Form.jsx';
import PlansList from './components/PlansList.jsx';
import Header from './components/Header.jsx';
// import UsersPlan from './components/UserPlan.jsx';
import SelectedPlan from './components/SelectedPlan.jsx';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      plans: null,
      apiDataLoaded: false

    };
    //  BIND YOUR METHODS HERE!!!
  }


  componentDidMount() {
    axios.get('http://localhost:3000/api/plans')
      .then(res => {
        this.setState({
          plans: res.data.data.plans,
          apiDataLoaded: true
        });
      }).catch(err => console.log(err));
  }

  //  Show logo and button here
  //  Click button to go the forms


    //  take zip from user, interpolate into api url
    //  Return object from zip code api
    //  In set state, collect State abbreviation from json object
    //  In lists component, plug in US states names into each health plan component

    //  Make a function for each column in plansDB,
    //  or make a function for each health plan that takes multiple args:
    //  make api call (David's db)
    //  Collect price_multiple and..
    //  takes age from input, and multiplies by the price_multiple (depends on the plan).



  //  Danny- Instead of using props in render here, pass in the function that will return you the result.
  //  You just need a method that multiplies the numbers in plans table, with AGE INPUT from form.

  render() {
    if (!this.state.plans) {
      return (<p className="Loading">Loading...</p>)
    }
    return (
      <div className="App">
        <main>
          <Header />
          <Form />
          <SelectedPlan />
        </main>
      </div>
    );
  }
}
export default App;
