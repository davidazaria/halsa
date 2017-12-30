import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import PlansList from './components/PlansList';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';

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
    this.usersSubmit  = this.usersSubmit.bind(this);
    this.showUserForm = this.showUserForm.bind(this);
    this.setEditing   = this.setEditing.bind(this); // Danny do you think you'll need this?
    this.deleteUser   = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.getAllPlans();
    this.getAllUsers();
  }

  getAllPlans() {
    axios.get('http://localhost:3000/api/plans')
      .then((res) => {
        this.setState({
          plans: res.data.data.plans,
          apiPlanDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  getAllUsers() {
    axios.get('http://localhost:3000/api/users')
      .then((res) => {
        this.setState({
          users: res.data.data.users,
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

  //  This method will be used at the users-list component for deleting
  //  users from our database.
  deleteUser(id) {
    axios.get(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      this.getAllUsers();
    });
  }

  //  Danny do you think you'll need this?
  setEditing(id) {
    this.setState({
      currentlyEditing: id,
    });
  }

  //  change state if button was clicked
  showUserForm() {
    this.setState(prevState => ({
      isClicked: true
    }));
  }

  //  user must click button to render form

  render() {
    if (!this.state.plans) {
      return (<p className="Loading">Loading...</p>);
    }
    return (
      <div className="App">
        <main>
          <Header />
          {this.state.isClicked
            ? <Form />
            : <button className="button" onClick={this.showUserForm}>Get a quote!</button>}
        </main>
      </div>
    );
  }
}
export default App;
