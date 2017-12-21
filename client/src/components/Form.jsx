import React, { Component } from 'react';

//Here is the the form component where users enter demographics
class Form extends Component {
  constructor() {
    this.state = {
      name: '',
      age: '',
      zip: '',
      income: ''
    }
    //BIND METHODS!
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //Takes the input from the Form and saves it to state
  handleInputChange(e) {
    const name = e.target.name;
    const val  = e.target.value;
    this.setState({
      [name]: val,
    });
  }
 
  render() {
    <div className="user-form">
      <form {/*isAdd here?*/}>
        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleInputChange} />
        <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleInputChange} />
        <input type="text" name="zip" placeholder="zip" value={this.state.zip} onChange={this.handleInputChange} />
        <input type="text" name="income" placeholder="income" value={this.state.income} onChange={this.handleInputChange} />
      </form>
    </div>
  }
};

export default Form;
