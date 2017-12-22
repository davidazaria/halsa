import React from 'react';

import IceCream from './IceCream';
import IceCreamForm from './IceCreamForm';

const UsersList = (props) => {
  return (
    <div className="users-list">
      {props.allIceCreams.map(icecream => {
        return (props.currentlyEditing == icecream.id)
          ? <IceCreamForm key={icecream.id} icecream={icecream} iceCreamSubmit={props.iceCreamSubmit} />
          : <IceCream key={icecream.id} icecream={icecream} setEditing={props.setEditing} deleteIceCream={props.deleteIceCream} />
      })}
    </div>
  );
};

export default UsersList;
