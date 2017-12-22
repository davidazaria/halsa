import React from 'react';
import {Link} from 'react-router-dom';

const UserPlan = () => {
  return (
  	<div className = "selected-plan">
  	<h1>Congratulations! Here is your selected plan!</h1>
    </div>
     <div className="full-plan">
        <h2 className="user-plan"></h2>
        <p></p>
        <p></p>
        <p></p>

        <p></p>
      </div>

 {/* add get form for new quote*/}
      {/* add get plan from planlist*/}
 <div className="buttons">

    <NavLink to="/people" className="nav-item" activeClassName="active">
        Get new quote
      </NavLink>

      <NavLink to="/people" className="nav-item" activeClassName="active">
      Choose another plan
       </NavLink>


   </div>


  	)
}

export default UserPlan
