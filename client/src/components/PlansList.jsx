import React from 'react';

//Probably need to make this stateful
//In state, collect data from plans database: age, priceMultiple, etc...

const PlansList = (props) => {

  //take zip from user, interpolate into api  url
  //Return object of zip code api
  //In set state, collect State abbreviation from json object
  //In lists component, plug in US states names into each health plan component

  //Make a function for each column in plansDB, or make a function for each health plan that takes multiple args:
  //make api call (David's db)
  //Collect price_multiple and..
  //takes age from input, and multiplies by the price_multiple (depends on the plan).

  //If plan 1, method-for-plan A
  //If plan 1, method for-plan B

  //Danny- Instead of using props in render here, pass in the function that will return you the result.
  //You just need a method that multiplies the numbers in plans table, with AGE INPUT from form.

  render() {
    return(
      <div className="plans-list">
        <div className="plan-1">
          <h1>Halsa Health Bronze Choice 3000: {props.location}</h1>
          <h2>Price Multiple: {this.priceMultiple}</h2>
          <h2>In-Network Deductable: {this.inNetwork}</h2>
          <h2>Out-Of-Network Deductable: {this.outNetwork}</h2>
          <h2>Maximum Out of Pocket: {this.maxPocket}</h2>
          <h2>Primary Care Co-Pay: {this.primary}</h2>
          <h2>Specialist Co-Pay: {this.specialist}</h2>
          <h2>Urgent Care Co-Pay: {this.urgent}</h2>
          <h2>Generic Drugs: {this.generic}</h2>
          <h2>Brand Drugs: {this.brand}</h2>
          <h2>Concierge Acces: {this.concierge}</h2>
        </div>
        <div className="plan-2">
          <h1>Halsa Health Silver Choice 2000: {props.location}</h1>
          <h2>Price Multiple: {this.priceMultiple}</h2>
          <h2>In-Network Deductable: {this.inNetwork}</h2>
          <h2>Out-Of-Network Deductable: {this.outNetwork}</h2>
          <h2>Maximum Out of Pocket: {this.maxPocket}</h2>
          <h2>Primary Care Co-Pay: {this.primary}</h2>
          <h2>Specialist Co-Pay: {this.specialist}</h2>
          <h2>Urgent Care Co-Pay: {this.urgent}</h2>
          <h2>Generic Drugs: {this.generic}</h2>
          <h2>Brand Drugs: {this.brand}</h2>
          <h2>Concierge Acces: {this.concierge}</h2>
        </div>
        <div className="plan-3">
          <h1>Halsa Health Gold Choice 1000: {props.location}</h1>
          <h2>Price Multiple: {this.priceMultiple}</h2>
          <h2>In-Network Deductable: {this.inNetwork}</h2>
          <h2>Out-Of-Network Deductable: {this.outNetwork}</h2>
          <h2>Maximum Out of Pocket: {this.maxPocket}</h2>
          <h2>Primary Care Co-Pay: {this.primary}</h2>
          <h2>Specialist Co-Pay: {this.specialist}</h2>
          <h2>Urgent Care Co-Pay: {this.urgent}</h2>
          <h2>Generic Drugs: {this.generic}</h2>
          <h2>Brand Drugs: {this.brand}</h2>
          <h2>Concierge Acces: {this.concierge}</h2>
        </div>
        <div className="plan-4">
          <h1>Halsa Health Platinum Select Plus: {props.location}</h1>
          <h2>Price Multiple: {this.priceMultiple}</h2>
          <h2>In-Network Deductable: {this.inNetwork}</h2>
          <h2>Out-Of-Network Deductable: {this.outNetwork}</h2>
          <h2>Maximum Out of Pocket: {this.maxPocket}</h2>
          <h2>Primary Care Co-Pay: {this.primary}</h2>
          <h2>Specialist Co-Pay: {this.specialist}</h2>
          <h2>Urgent Care Co-Pay: {this.urgent}</h2>
          <h2>Generic Drugs: {this.generic}</h2>
          <h2>Brand Drugs: {this.brand}</h2>
          <h2>Concierge Acces: {this.concierge}</h2>
        </div>
      </div>
    )
  }
};

export default PlansList;
