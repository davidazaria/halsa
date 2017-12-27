import React from 'react';


const PlanCard = (props) => {
  return (
    <div className="plan">
      <h2>{props.plan_name}</h2>
      <p>Price: {props.price_multiple}</p>
      <p>In-Network Deductable: {props.in_network_deductible}</p>
      <p>Out-Of-Network Deductable: {props.out_of_network_deductible} </p>
      <p>Maximum Out of Pocket: {props.maximum_out_of_pocket}</p>
      <p>Primary Care Co-Pay: {props.primary_care_copay}</p>
      <p>Specialist Co-Pay: {props.specialist_copay}</p>
      <p>Urgent Care Co-Pay: {props.urgent_care_copay}</p>
      <p>Generic Drugs: {props.generic_drugs} </p>
      <p>Brand Drugs: {props.brand_drugs}</p>
      <p>Concierge Acces: {props.concierge_access} </p>
      <input type="submit" placeholder="Select this plan!" className="button" />
    </div>
  )
}

export default PlanCard;
