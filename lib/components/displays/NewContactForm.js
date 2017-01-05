import React, { Component } from 'react';

export default class NewContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name || '',
      email:this.props.email ||'',
      socialFB:this.props.socialFB || '',
      followUp:this.props.followUp || false,
      notes:this.props.notes || ''
    };
  }

  updateState(e, keyName) {
    this.setState({ [keyName]: e.target.value })
  }

  submitContact(addNewContact) {
    const newContact = {
      name: this.state.name,
      email:this.state.email,
      socialFB:this.state.socialFB,
      followUp:this.state.followUp,
      notes:this.state.notes
    };
    addNewContact(newContact)
  }



  render() {
    const {addNewContact}= this.props;
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
          placeholder = 'name'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'name')}}
        />
        <input
          className = 'email-input'
          value = {this.state.email}
          name = 'email'
          placeholder = 'email'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'email')}}
        />
        <input
          className = 'social-input'
          value = {this.state.socialFB}
          name = 'socialFB'
          placeholder = 'facebook'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'socialFB')}}
        />
        <input
          className = 'notes-input'
          value = {this.state.notes}
          name = 'notes'
          placeholder = 'notes'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'notes')}}
        />
      <button
        onClick = { ()=> this.submitContact(addNewContact) }
      >SUBMIT
    </button>
      </div>
    )
  }
}
