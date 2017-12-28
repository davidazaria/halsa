import React, { Component } from 'react';
import PlansList from './PlansList';
import axios from 'axios';

//  Here is the the form component where users enter demographics
class Form extends Component {
  constructor() {
    super();
    this.state = {
      plans: null,
      apiDataLoaded: false,
      name: null,
      age: null,
      zip: null,
      income: null
    };
    //  BIND METHODS!
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  //  Takes the input from the Form and saves it to state
  handleChange(e) {
    // e.preventDefault();
    const name = e.target.name;
    const val  = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://api.zippopotam.us/us/${this.state.zip}`)
    .then(res => {
      this.setState({
        location: res.data.places[0].state,
      })
      console.log("hi! this is: "+this.state.location);
      console.log("Hey dude, you're this old: "+this.state.age)

    });

  }

  render() {
    if (!this.state.plans) {
      return(<p className="Loading">Loading...</p>)
    }

    return(
    <div className="user-form">
      <form className="user-form" onSubmit={this.handleSubmit}>
      <div className="userflow1">
        <input type="text" name="name" placeholder="name" />
        </div>
            <div className="userflow2">
              <input
                type="text"
                name="age"
                placeholder="age"
                onChange={this.handleChange}
              />
           </div>
           <div className="userflow3">
             <input
              type="text"
              name="zip"
              placeholder="zip"
              onChange={this.handleChange}
            />
          </div>
           <div className="userflow4">
        <input
          type="text"
          name="income"
          placeholder="income"
          onChange={this.handleChange}
         />
        </div>
        <input
          type="submit"
          name="submit" />
      </form>
      <PlansList
        age={this.state.age}
        plansList={this.state.plans} />
    </div>
    );
  }
}

export default Form;
