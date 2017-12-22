import React from 'react';



//get use
const UsersList = () => {
   return(
   	<div className ="user-list">
    <h3 >David Azaria </h3>
      <div class="user-description">
        <p>Plan </p>
        <p>Zip </p>
         <p> Income</p>
        </div>


         <span className="clickme" /*onClick={() => props.setEditing(props.user.id)}*/ >Edit</span>

    </div>
)
}

//for every id render sa user-list div
 //create a user form page to edit saved inform
export default UsersList;
