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
            plan_name={users.plan_name}
            age={users.age}
            income={users.income}
            zip={users.zip_code}
          />
<<<<<<< HEAD
          );
        })}
=======
        );
      })}
>>>>>>> david-more-readme
    </div>
  );
};

export default UsersList;
