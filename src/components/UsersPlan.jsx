
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';

import
import planlogo from '../image/planlogo.png';


 class UsersPlan extends Component {
  constructor() {
    super();
    this.state ={
      plans: null,
      apitDataLoaded: false,
      showPopup: false
    };
  }
  showPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

showPlan(){


   this.setState(prevState => ({
      isClicked: true,
    }));
  }


render(){

  return (

    <div className="user-plan">
    <div>
      <h1 className="congrats">Congratulations!</h1>
      </div>
          <div className="section-plan">
      <div className="ribbon">

     <div className="member">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Selected Plan</div>

      </div>
      <div className="plan-box">
       <div className="planlogo">
          <img src={planlogo} width="70" height="70" />
        </div>
      <h1 className ="health-plan">Halsa Health Bronze Choice 3000</h1>
      <h3>Price Multiple:<span> </span></h3>
      <h3>In-Network Deductable:<span> DATA</span></h3>
      <h3>Out-Of-Network Deductable: <span>DATA</span> </h3>
      <h3>Maximum Out of Pocket:<span> DATA</span></h3>


      <h3>Primary Care Co-Pay: <span>DATA</span></h3>
      <h3>Specialist Co-Pay:<span> DATA</span></h3>
      <h3>Urgent Care Co-Pay:</h3>
      <h3>Generic Drugs:<span> DATA</span> </h3>
      <h3>Brand Drugs:<span> DATA</span></h3>
      <h3>Concierge Acces:<span>Yes</span> </h3>

      <button className= "btn" onClick={this.showPopup.bind(this)}>Change Plan</button>
         <Link className= "btn" to='/UsersList'>Halsa Users</Link>
         </div>
         </div>

{this.state.showPopup ?
          <Popup
            text='Delete'
            closePopup={this.showPopup.bind(this)}
          />
          : null
        }

 </div>






  );
}
}

export default UsersPlan;
