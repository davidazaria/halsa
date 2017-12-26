import React, { Component } from 'react';
import halsalogo from '../image/halsalogo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="halsalogo">
          <img src={halsalogo} width="" height="" />
        </div>
      </div>
    );
  }
}
