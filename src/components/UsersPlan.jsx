import React from 'react';
import {Link} from 'react-router-dom';

const UsersPlan = () => {
  return (
    <div className="user-plan">
    <div>
      <h1 className="congrats">Congratulations! Here is your selected plan:</h1>
      </div>
          <div className="section-plan">

      <h1 className ="health-plan">Halsa Health Bronze Choice 3000</h1>
      <h3>Price Multiple: DATA</h3>
      <h3>In-Network Deductable: DATA</h3>
      <h3>Out-Of-Network Deductable: DATA </h3>
      <h3>Maximum Out of Pocket: DATA</h3>


      <h3>Primary Care Co-Pay: DATA</h3>
      <h3>Specialist Co-Pay: DATA</h3>
      <h3>Urgent Care Co-Pay:</h3>
      <h3>Generic Drugs: DATA </h3>
      <h3>Brand Drugs: DATA</h3>
      <h3>Concierge Acces:No </h3>
</div>
    </div>

  );
}



export default UsersPlan;
