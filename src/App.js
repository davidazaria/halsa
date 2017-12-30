import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import PlansList from './components/PlansList';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import UsersPlan from './components/UsersPlan';
// import SelectedPlan from './components/SelectedPlan.jsx';
import PlanCard from './components/PlanCard';
import UsersList from './components/UsersList';

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

  }
    toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
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

  //  showUserForm if button was clicked
  showUserForm() {
    this.setState(prevState => ({
      isClicked: true
    }));
  }



  render() {
    if (!this.state.plans) {
      return (<p className="Loading">Loading...</p>);
    }
    return (
      <div className="App">
        <main>
          <Header />
          <button className="button" onClick={this.showUserForm}>
            {this.state.isClicked
              ? <Form />
              : 'Get your quote!' }
            </button>

          <div>
        <button onClick={this.toggleHidden.bind(this)} >
          check!
        </button>

        {!this.state.isHidden && <PlansList
        age={this.state.age}
        location={this.state.location}
        plansList={this.state.plans} />}

         {!this.state.isHidden && <UsersPlan />}

          {!this.state.isHidden && <UsersList

            usersList={this.state.users}

        />}

      </div>


        </main>
      </div>
    );
  }
}
export default App;
