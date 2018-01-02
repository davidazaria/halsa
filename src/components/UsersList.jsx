import React from 'react';
import User from './User';

const UsersList = (props) => {
  return (
    <div className="users-list">
      <h1>Halsa Health Members</h1>
      {props.usersList.map((users, index) => {
        return (
          <User
            key={index}
            username={users.username}
            plan_name={users.plan_name}
            age={users.age}
            income={users.income}
            zip={users.zip_code}
            id={users.id}
            deleteUser={props.deleteUser}
          />
          );
        })}
    </div>
  );
};

export default UsersList;
