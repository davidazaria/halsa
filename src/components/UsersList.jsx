import React from 'react';
import User from './User';

const UsersList = (props) => {
<<<<<<< HEAD
    return (
      <div className="users-list">
        {props.usersList.map((users, index) => {
          return (
            <User
              key={index}
              username={users.username}
              plan_name={users.plan_name}
              age={users.age}
              income={users.income}
              zip={users.zip_code}
=======
  return (
    <div className="users-list">
      {props.usersList.map((users, index) => {
        return (
          <User
            key={index}
            username={users.username}
            plan_name={users.plan_name}
            age={users.age}
            income={users.income}
            zip={users.zip_code}
>>>>>>> 4c3d050da6002db5dcc239d12447cdbf9582b632
            />
          );
        })}
    </div>
  );
};

export default UsersList;
