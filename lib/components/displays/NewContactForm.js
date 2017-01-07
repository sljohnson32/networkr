import React, { Component } from 'react';
import moment from 'moment';

export default class NewContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.firstName || '',
      lastName: this.props.lastName || '',
      organization: this.props.organization || '',
      email: this.props.email ||'',
      socialFB: this.props.socialFB || '',
      gitHub: this.props.gitHub || '',
      twitter: this.props.twitter || '',
      followUp: this.props.followUp || false,
      notes: this.props.notes || ''
    };
  }

  updateState(e, keyName) {
    this.setState({ [keyName]: e.target.value })
  }

  submitContact(addNewContact) {
    const newContact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      organization: this.state.organization,
      email: this.state.email,
      socialFB: this.state.socialFB,
      gitHub: this.state.gitHub,
      twitter: this.state.twitter,
      followUp: this.state.followUp,
      notes: this.state.notes,
      createdAt: moment().format('MMMM Do YYYY, h:mm a')
    };
    addNewContact(newContact)
  }



  render() {
    const {addNewContact}= this.props;
    return (
      <div className = 'input-container'>
        <section className='new-contact'>
          <img src='' />
          <h2>Add A New Contact</h2>
        </section>
        <input
          className = 'first-name-input'
          value = {this.state.firstName}
          name = 'firstName'
          placeholder = 'First Name'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'firstName')}}
        />
        <input
          className = 'last-name-input'
          value = {this.state.lastName}
          name = 'lastName'
          placeholder = 'Last Name'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'lastName')}}
        />
        <input
          className = 'organization-input'
          value = {this.state.organization}
          name = 'organization'
          placeholder = 'Organization'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'organization')}}
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
          className = 'github-input'
          value = {this.state.gitHub}
          name = 'gitHub'
          placeholder = 'Git-Hub'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'gitHub')}}
        />
        <input
          className = 'twitter-input'
          value = {this.state.twitter}
          name = 'twitter'
          placeholder = 'Twitter'
          type = 'text'
          onChange = { (e)=> {this.updateState(e, 'twitter')}}
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
