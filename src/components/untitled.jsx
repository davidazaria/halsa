import React from 'react';

import { Link } from 'react-router-dom';


 class UsersPlan extends Component {
 	constructor() {
 		super();
 		this.state ={
 			plans: null,
 			apitDataLoaded: false

 		};

 	}

render(){
	   if (!this.state.plans) {
      return(<p className="Loading">Loading...</p>)
    }
  return (
    	<div className="landing-background">
      <div className="row">
        <div className="halsalogo2">
          <img src={halsalogo} width="" height="" />
        </div>
    )
   }
