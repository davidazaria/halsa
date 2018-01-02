import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import PlansList from './components/PlansList';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import UsersPlan from './components/UsersPlan';
import PlanCard from './components/PlanCard';
import UsersList from './components/UsersList';
import Landing from './components/Landing';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plans: null,
      users: null,
      apiUserDataLoaded: false,
      apiPlanDataLoaded: false,
      shouldShowUserForm: false,
      isHidden: true,
    };
    this.usersSubmit = this.usersSubmit.bind(this);
    this.showUserForm = this.showUserForm.bind(this);
    this.getAllPlans = this.getAllPlans.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
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

  setEditing(id) {
    this.setState({
      currentlyEditing: id,
    });
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  deleteUser(id) {
    axios.delete(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      this.getAllUsers();
    });
    console.log("Hey you deleted me!");
  }

  usersSubmit(method, event, data, id) {
    event.preventDefault();
    axios(`http://localhost:3000/api/users/${id || ''}`, {
      method:
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }).then((res) => {
      this.getAllUsers();
    });
    console.log('This is the usersSubmit console.log');
  }

  //  change state if button was clicked
  showUserForm() {
    this.setState(prevState => ({
      isClicked: true,
    }));
  }

  //  user must click button to render form

  render() {
    console.log(this.state.users, 'users');
    if (!this.state.plans) {
      return (<p className="Loading">Loading...</p>);
    }
    return (
      <div className="App">
        <main>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Form"
              render={props =>
                <Form usersSubmit={this.usersSubmit} />}
              />
          </Switch>
          {/*}{!this.state.users
            ? (<div>loading..</div>)
            : (<UsersList deleteUser={this.deleteUser} usersList={this.state.users} />)
          }*/}
        </main>
      </div>
    );
  }
}

export default App;
