import React from 'react';

import avatar from '../image/avatar.png';
const User = (props) => {
  return (
    <div className="user-info">
    <h1>Halsa Users</h1>

     <div className="userbox">
      <div className="avatar">
          <img src={avatar} width="200" height="200" />
        </div>
        <div className= "user-container" >



      <p className= "user-details"><span>Name...</span>{props.username}</p>
      <p className= "user-details"><span>Plan...</span>{props.plan_name}</p>

      <p className="user-details"><span>Age...</span>{props.age} </p>
      <p className="user-details"><span>Income...</span>{props.income}</p>
      <p className="user-details"><span>Zip...</span>{props.zip}</p>
</div>
</div>

    </div>
  )
}

export default User;
