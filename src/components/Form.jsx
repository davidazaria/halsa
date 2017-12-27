import React, { Component } from 'react';

//  Here is the the form component where users enter demographics
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      zip: '',
      income: ''
    };
    //  BIND METHODS!
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //  Takes the input from the Form and saves it to state
  handleInputChange(e) {
    const name = e.target.name;
    const val  = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  //  If !FormData, render Form
  //  Else, render PlansList

  render() {
<<<<<<< HEAD
    return(
    <div className="user-form">

      <form className={this.props.isAdd}>
      <div className="userflow1">
        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleInputChange} />
        </div>
            <div className="userflow2">
        <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleInputChange} />
           </div>
               <div className="userflow3">
        <input type="text" name="zip" placeholder="zip" value={this.state.zip} onChange={this.handleInputChange} />
        </div>
           <div className="userflow4">
        <input type="text" name="income" placeholder="income" value={this.state.income} onChange={this.handleInputChange} />
        </div>

        <input type="submit" />

      </form>
    </div>
    )
         onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
>>>>>>> master
  }
}

export default Form;
