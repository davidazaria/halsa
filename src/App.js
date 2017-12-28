import React, { Component } from 'react';
import './App.css';
//  import { Switch, Route } from 'react-dom-router';
import Form from './components/Form.jsx';
import PlansList from './components/PlansList.jsx';
import Header from './components/Header.jsx';
// import UsersPlan from './components/UserPlan.jsx';
import SelectedPlan from './components/SelectedPlan.jsx';
import axios from 'axios';

// import UsersPlan from './components/UserPlan.jsx';


// import SelectedPlan from './components/SelectedPlan.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      plans: null,
      apiDataLoaded: false,

    };
    //  BIND YOUR METHODS HERE!!!
  }


  componentDidMount() {
    axios.get('http://localhost:3000/api/plans')
      .then(res => {
        this.setState({
          plans: res.data.data.plans,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  //  Show logo and button here
  //  Click button to go the forms


  // follow the ice cream methodology here
  // what david wants to do is handle the CRUD elements for users here
  // danny will receive the api call results as props, and map through them for the usersList component

  render() {
    if (!this.state.plans) {
      return (<p className="Loading">Loading...</p>);
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
