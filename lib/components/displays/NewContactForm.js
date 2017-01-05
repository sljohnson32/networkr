import React, { Component } from 'react';

export default class NewContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name || '',
      email:this.props.email ||'',
      socialFB:this.props.socialFB || '',
      followUp:this.props.followUp ||'',
      notes:this.props.notes || ''
    };
  }

  updateState(e, keyName) {
    this.setState({ [keyName]: e.target.value })
  }

  render() {
    return (
      <div>
        <section className='contact'>
          <img src='' />
          <h2>Name of Contact</h2>
          <p>This is where we'll map ALL contacts</p>
        </section>
        <input
          className = 'name-input'
          value = {this.state.name}
          name = 'name'
          onChange = { (e)=> {this.updateState(e, 'name')}}
        />
      </div>
    )
  }
}
