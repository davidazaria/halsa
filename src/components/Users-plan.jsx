import React from 'react';
import {Link} from 'react-router-dom';

const UserPlan = (props) => {
  return (
  	<div className = "selected-plan">
  	<h1>Congratulations! Here is your selected plan!</h1>
     <div className="full-plan">
        <h2 className="user-plan">{props.plans.plan_name}</h2>
        <p>{props.plans.price_multiple}</p>
        <p>{props.plans.in_network_deductible}</p>
        <p>{props.plans.out_of_network_deductible}</p>
        <p>{props.plans.maximum_out_of_pocket}</p>
        <p>{props.plans.primary_care_copay}</p>
        <p>{props.plans.specialist_copay}</p>
        <p>{props.plans.urgent_care_copay}</p>
        <p>{props.plans.generic_drugs}</p>
        <p>{props.plans.brand_drugs}</p>
        <p>{props.plans.concierge_access}</p>
      </div>
      <div className="buttons">

        <Link className="button1" to="/">Get new quote </Link>
        <Link className="button2" to="/">Choose another plan</Link>

    </div>

  	)
};
export default UserPlan;
