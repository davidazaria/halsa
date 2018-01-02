import React from 'react';
import User from './User';

const UsersList = (props) => {
    return (
      <div className="users-list">
        {props.usersList.map((users, index) => {
          return (
            <User
              key={index}
              username={users.username}
              plan_id={users.plan_id}
              age={users.age}
              income={users.income}
              zip={users.zip}
              />
          );
        })}
      </div>
  );
};

export default UsersList;
