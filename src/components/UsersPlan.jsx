
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';


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
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
          <img src={planlogo} width="65" height="65" />
        </div>
      <h1 className ="health-plan">Halsa Health Bronze Choice 3000</h1>
      <h3>Price Multiple:<span> DATA</span></h3>
      <h3>In-Network Deductable:<span> DATA</span></h3>
      <h3>Out-Of-Network Deductable: <span>DATA</span> </h3>
      <h3>Maximum Out of Pocket:<span> DATA</span></h3>


      <h3>Primary Care Co-Pay: <span>DATA</span></h3>
      <h3>Specialist Co-Pay:<span> DATA</span></h3>
      <h3>Urgent Care Co-Pay:</h3>
      <h3>Generic Drugs:<span> DATA</span> </h3>
      <h3>Brand Drugs:<span> DATA</span></h3>
      <h3>Concierge Acces:<span>Yes</span> </h3>

</div>

    </div>
          <div className='popup'>


             <div className='popup'>

        <button onClick={this.togglePopup.bind(this)}>Change Plan</button>

        {this.state.showPopup ?
          <Popup
            text='Delete'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
      <div className="edit-plan">
      <Link to='/Form'>Change Plan</Link>
      </div>
      </div>




    </div>
  );
}
}

export default UsersPlan;
