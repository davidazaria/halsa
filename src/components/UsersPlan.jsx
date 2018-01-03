
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import planlogo from '../image/planlogo.png';
import axios from 'axios';


 class UsersPlan extends Component {
  constructor() {
    super();
    this.state ={
      plans: null,
      users: null,
      apitDataLoaded: false,
      showPopup: false
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }
  showPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  showPlan() {
    this.setState(prevState => ({
        isClicked: true,
      }));
    }

    getAllUsers() {
      axios.get('/api/users')
        .then((res) => {
          this.setState({
            users: res.data.data.users,
            apiUserDataLoaded: true,
            shouldShowUserForm: false,
            currentlyEditing: null,
          });
        }).catch(err => console.log(err));
    }

    componentDidMount() {
      this.getAllUsers();
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
          <h3>In-Network Deductable:<span>{this.state.in_network_deductible}</span></h3>
          <h3>Out-Of-Network Deductable: <span>{this.state.out_of_network_deductible}</span> </h3>
          <h3>Maximum Out of Pocket:<span>{this.state.maximum_out_of_pocket}</span></h3>
          <h3>Primary Care Co-Pay: <span>{this.state.primary_care_copay}</span></h3>
          <h3>Specialist Co-Pay:<span>{this.state.specialist_copay}</span></h3>
          <h3>Urgent Care Co-Pay:{this.state.urgent_care_copay}</h3>
          <h3>Generic Drugs:<span>{this.state.generic_drugs}</span> </h3>
          <h3>Brand Drugs:<span>{this.state.brand_drugs}</span></h3>
          <h3>Concierge Acces:<span>{this.state.concierge_access}</span> </h3>

          <button className= "btn" onClick={this.showPopup.bind(this)}>Change Plan</button>
            {!this.state.users ? <div>Loading..</div> : <Link className= "btn" to='/UsersList'>Halsa Users</Link>}
      </div>

{this.state.showPopup ?
          <Popup
            text='Delete'
            closePopup={this.showPopup.bind(this)}
          />
          : null
        }

 </div>
</div>
  );
}
}

export default UsersPlan;
