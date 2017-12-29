import React, { Component } from 'react';
import './App.css';
//  import { Switch, Route } from 'react-dom-router';
import axios from 'axios';
import Form from './components/Form';
import PlansList from './components/PlansList';
import Header from './components/Header';
// import UsersPlan from './components/UserPlan.jsx';
import SelectedPlan from './components/SelectedPlan';

// import UsersPlan from './components/UserPlan.jsx';


// import SelectedPlan from './components/SelectedPlan.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      plans: null,
      users: null,
      apiUserDataLoaded: false,
      apiPlanDataLoaded: false,
      shouldShowUserForm: false,

    };
    this.usersSubmit = this.usersSubmit.bind(this);
    this.showUserForm = this.showUserForm.bind(this); //  Danny do you think you'll need this?
    this.setEditing = this.setEditing.bind(this); // Danny do you think you'll need this?
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.getAllPlans();
    this.getAllUsers();
  }

  getAllPlans() {
    axios.get('http://localhost:3000/api/plans')
      .then((res) => {
        this.setState({
          plans:
          res.data.data.plans,
          apiPlanDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  getAllUsers() {
    axios.get('http://localhost:3000/api/users')
      .then((res) => {
        this.setState({
          users:
          res.data.data.users,
          apiUserDataLoaded: true,
          shouldShowUserForm: false,
          currentlyEditing: null,
        });
      }).catch(err => console.log(err));
  }

  usersSubmit(method, event, data, id) {
    event.preventDefault();
    axios.get(`http://localhost:3000/api/users/${id || ''}`, {
      method:
      'method',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      this.getAllUsers();
    });
  }

  deleteUser(id) {
    axios.get(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      this.getAllUsers();
    });
  }

  //  Danny do you think you'll need this?
  showUserForm() {
    this.setState ({
      shouldShowUserForm: true,
    });
  }

  //  Danny do you think you'll need this?
  setEditing(id) {
    this.setState({
      currentlyEditing: id,
    });
  }

  // Danny, we might need to reconsider the below from a React behavior POV.

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
