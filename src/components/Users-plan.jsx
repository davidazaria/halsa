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
        <Link className="button1" to="/">Get new quote</Link>

        <Link className="button2" to="/">Choose another plan</Link>
   </div>


  	)
}

export default UserPlan
