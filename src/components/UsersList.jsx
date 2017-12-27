import React from 'react';
import { NavLink } from 'react-router-dom';



const UsersList = () => {
   return(
   	<div className ="user-list">
    <h3 >Name </h3>
      <div class="user-description">
        <p>Plan </p>
        <p>Zip </p>
         <p> Income</p>
        </div>


         <NavLink to="/" className="nav-link" activeClassName="active">
        Edit
      </NavLink>

    </div>
)
};

export default UsersList;
