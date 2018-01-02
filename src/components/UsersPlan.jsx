import React from 'react';
import {Link} from 'react-router-dom';
import planlogo from '../image/planlogo.png';
const UsersPlan = () => {
  return (
    <div className="user-plan">
    <div>
      <h1 className="congrats">Here is your selected plan!</h1>
      </div>
          <div className="section-plan">
      <div className="ribbon">
        // <div className="member">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Congratulations</div>

      </div>
      <div className="plan-box">
       <div className="planlogo">
          <img src={planlogo} width="60" height="60" />
        </div>
      <h1 className ="health-plan">Halsa Health Bronze Choice 3000</h1>
      <h3>Price Multiple:<span> DATA</span></h3>
      <h3>In-Network Deductable:<span> DATA</span></h3>
      <h3>Out-Of-Network Deductable: <span>DATA</span> </h3>
      <h3>Maximum Out of Pocket:<span> DATA</span></h3>


      <h3>Primary Care Co-Pay: <span>DATA</span></h3>
      <h3>Specialist Co-Pay:<span> DATA</span></h3>
      <h3>Urgent Care Co-Pay:</h3>
      <h3>Generic Drugs:<span> DATA</span> </h3>
      <h3>Brand Drugs:<span> DATA</span></h3>
      <h3>Concierge Acces:<span>Yes</span> </h3>
</div>
</div>

    </div>

  );
}



export default UsersPlan;
