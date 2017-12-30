import React from 'react';


const User = (props) => {
  return (
    <div className="user-info">

      <p>Name: {props.username}</p>
       <p>Plan: {props.plan_id}</p>
      <p>Age: {props.age} </p>
      <p>Income:{props.income}</p>
      <p>Zip: {props.zip_code}</p>


    </div>
  )
}

export default User;
