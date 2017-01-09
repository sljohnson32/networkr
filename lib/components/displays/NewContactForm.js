import React, { Component } from 'react';
import moment from 'moment';

export default class NewContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      editView: this.props.editView,
      contactID: this.props.contact.contactID || Date.now(),
      existingContact: this.props.contact.existingContact || false,
      firstName: this.props.contact.firstName || '',
      lastName: this.props.contact.lastName || '',
      organization: this.props.contact.organization || '',
      email: this.props.contact.email ||'',
      socialFB: this.props.contact.socialFB || '',
      gitHub: this.props.contact.gitHub || '',
      twitter: this.props.contact.twitter || '',
      followUp: this.props.contact.followUp || false,
      notes: this.props.contact.notes || '',
    };
  }

  updateState(e, keyName) {
    this.setState({ [keyName]: e.target.value })
  }

  submitContact(handler) {
    const newContact = {
      contactID: this.state.contactID,
      existingContact: true,
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
    handler(newContact);
    this.toggleEditContact();
  }

  toggleEditContact() {
    this.setState({ editView: !this.state.editView, existingContact: true });
  }

  editSubmitButton(addNewContact, editContact) {
    if(this.state.existingContact && !this.state.editView ) {
      return (
        <button className ='edit-button'
        onClick = { () => this.toggleEditContact() }
        >Edit Contact
        </button>
      )
    } else if (this.state.existingContact && this.state.editView) {
      return (
        <button className = 'save-changes'
          onClick = { () => this.submitContact(editContact) }
        >SAVE CHANGES
        </button>
      )
    } else if (!this.state.existingContact && this.state.editView) {
        return (
          <button className ='submit-contact'
            onClick = { () => this.submitContact(addNewContact) }
          >SUBMIT
          </button>
        )
    }
  }

  contactDisplayHandler(addNewContact, editContact) {
    if (this.state.editView) {
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
          { this.editSubmitButton(addNewContact, editContact) }
        </div>
      )
    }
    if (!this.state.editView) {
      return (
        <div className = 'input-container'>
          <section className='existing-contact'>
            <h2 className = 'contact-name'>{ this.state.firstName } { this.state.lastName }</h2>
          </section>
          <h4 className = 'contact-org'><span className='org'>Organization:</span> {this.state.organization}</h4>
          <h4 className = 'contact-email'><span className='email'>Email:</span> {this.state.email}</h4>
            <h2 className = 'social-header'>Social Media</h2>
            <h4 className = 'contact-FB'><span className='facebook'>Facebook:</span> {this.state.socialFB}</h4>
            <h4 className = 'contact-GH'><span className='github'>Github:</span> {this.state.gitHub}</h4>
            <h4 className = 'contact-twitter'><span className='twitter'>Twitter:</span> {this.state.twitter}</h4>
          <h4 className = 'notes-header'>Notes:</h4>
          <p className='notes'>{this.state.notes}</p>
          { this.editSubmitButton(addNewContact, editContact) }
        </div>
      )
    }
  }

  render() {
    const { addNewContact, editContact } = this.props;
    return (
      this.contactDisplayHandler(addNewContact, editContact)
    )
  }
}
