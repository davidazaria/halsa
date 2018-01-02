
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>


       <p> Are you sure you want to delete this Plan?</p>
          <h1>{this.props.text}</h1>
           <Link to='/'>Yes</Link>

        <button onClick={this.props.closePopup}>No</button>
        </div>
      </div>
    );
  }
}

export default Popup;
