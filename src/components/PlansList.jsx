import React from 'react';
import PlanCard from './PlanCard';

//  Probably need to make this stateful
//  In state, collect data from plans database: age, priceMultiple, etc...

const PlansList = (props) => {
  return (
    <div className="plans-list">
      {props.plansList.map(plans => {
        return (
          <PlanCard
            age={props.age}
            location={props.location}
            key={plans.id}
            plan_name={plans.plan_name}
            price_multiple={plans.price_multiple}
            in_network_deductible={plans.in_network_deductible}
            out_of_network_deductible={plans.out_of_network_deductible}
            maximum_out_of_pocket={plans.maximum_out_of_pocket}
            primary_care_copay={plans.primary_care_copay}
            specialist_copay={plans.specialist_copay}
            urgent_care_copay={plans.urgent_care_copay}
            generic_drugs={plans.generic_drugs}
            brand_drugs={plans.brand_drugs}
            concierge_access={plans.concierge_access}
            planID={plans.id}
          />
        );
      })}
    </div>
  );
};

export default PlansList;
