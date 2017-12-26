import React, { Component } from 'react';

//Probably need to make this stateful
//In state, collect data from plans database: age, priceMultiple, etc...

class PlansList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: ''
    };
    //BIND YOUR METHODS!!
  }

  //take zip from user, interpolate into api url
  //Return object from zip code api
  //In set state, collect State abbreviation from json object
  //In lists component, plug in US states names into each health plan component

  //Make a function for each column in plansDB, or make a function for each health plan that takes multiple args:
  //make api call (David's db)
  //Collect price_multiple and..
  //takes age from input, and multiplies by the price_multiple (depends on the plan).

  priceMultiple(age) {
    fetch(/*David's API*/)
    .then(res => {
      this.setState({
        data: res.data.price_multiple
      })
    });
    return this.data * age;
  }

  inNetwork(age) {
    fetch(/*David's API for Bronze plan*/)
    .then(res => {
      this.setState({
        data: res.data.in_network_deductible
      })
    });
    return this.data * age;
  }

  outNetwork(age) {
    fetch(/*David's API for Bronze plan*/)
    .then(res => {
      this.setState({
        data: res.data.out_of_network_deductible
      })
    });
    return this.data * age;
  }


  maxPocket(age) {
    fetch(/*David's API for Bronze plan*/)
    .then(res => {
      this.setState({
        data: res.data.in_network_deductible
      })
    });
    return this.data * age;
  }
  //If plan 1, method-for-plan A
  //If plan 1, method for-plan B

  //Danny- Instead of using props in render here, pass in the function that will return you the result.
  //You just need a method that multiplies the numbers in plans table, with AGE INPUT from form.

  render() {
    return(
      <div className="plans-list">
        <div className="plan-1">
          <h1>Halsa Health Bronze Choice 3000: DATA</h1>
          <h2>Price Multiple: DATA</h2>
          <h2>In-Network Deductable: DATA</h2>
          <h2>Out-Of-Network Deductable: DATA </h2>
          <h2>Maximum Out of Pocket: DATA</h2>
          <h2>Primary Care Co-Pay: DATA</h2>
          <h2>Specialist Co-Pay: DATA</h2>
          <h2>Urgent Care Co-Pay:</h2>
          <h2>Generic Drugs: DATA </h2>
          <h2>Brand Drugs: DATA</h2>
          <h2>Concierge Acces: DATA </h2>
        </div>
        <div className="plan-2">
          <h1>Halsa Health Bronze Choice 3000: DATA</h1>
          <h2>Price Multiple: DATA</h2>
          <h2>In-Network Deductable: DATA</h2>
          <h2>Out-Of-Network Deductable: DATA </h2>
          <h2>Maximum Out of Pocket: DATA</h2>
          <h2>Primary Care Co-Pay: DATA</h2>
          <h2>Specialist Co-Pay: DATA</h2>
          <h2>Urgent Care Co-Pay:</h2>
          <h2>Generic Drugs: DATA </h2>
          <h2>Brand Drugs: DATA</h2>
          <h2>Concierge Acces: DATA </h2>
        </div>
        <div className="plan-3">
          <h1>Halsa Health Bronze Choice 3000: DATA</h1>
          <h2>Price Multiple: DATA</h2>
          <h2>In-Network Deductable: DATA</h2>
          <h2>Out-Of-Network Deductable: DATA </h2>
          <h2>Maximum Out of Pocket: DATA</h2>
          <h2>Primary Care Co-Pay: DATA</h2>
          <h2>Specialist Co-Pay: DATA</h2>
          <h2>Urgent Care Co-Pay:</h2>
          <h2>Generic Drugs: DATA </h2>
          <h2>Brand Drugs: DATA</h2>
          <h2>Concierge Acces: DATA </h2>
        </div>
        <div className="plan-4">
          <h1>Halsa Health Bronze Choice 3000: DATA</h1>
          <h2>Price Multiple: DATA</h2>
          <h2>In-Network Deductable: DATA</h2>
          <h2>Out-Of-Network Deductable: DATA </h2>
          <h2>Maximum Out of Pocket: DATA</h2>
          <h2>Primary Care Co-Pay: DATA</h2>
          <h2>Specialist Co-Pay: DATA</h2>
          <h2>Urgent Care Co-Pay:</h2>
          <h2>Generic Drugs: DATA </h2>
          <h2>Brand Drugs: DATA</h2>
          <h2>Concierge Acces: DATA </h2>
        </div>
      </div>
    )
  }
};

export default PlansList;
