import React, { Component } from 'react';
import moment from 'moment';
import EditSubmitButton from '../helpers/ContactButtons';

export default class NewContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      editView: this.props.editView || false,
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
      createdAt: this.props.contact.creadedAt || moment().format('MMMM Do YYYY, h:mm a')
    };
  }

  updateState(e, keyName) {
    this.setState({ [keyName]: e.target.value })
  }

  newContact() {
    return {
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
      createdAt: this.state.createdAt
    }
  };

  submitContact(handler, setSelectedContact) {
    const newContact = this.newContact();
    this.setState({ existingContact: true, editView: false });
    handler(newContact);
    setSelectedContact(newContact);
  }

  toggleEditContact() {
    this.setState({ editView: !this.state.editView, existingContact: true });
  }

  toggleFollowUp(val, editContact) {
    this.setState(({ followUp: val }), () => {
    if (this.state.existingContact === true) {
      editContact(this.newContact());
    }})
  }

  followUpButton(editContact) {
    const newVal= !this.state.followUp
    if (!this.state.followUp) {
      return (
        <button
          className='follow-up-toggle'
          onClick={ () => this.toggleFollowUp(true, editContact)}
          >Set Follow-Up
        </button>
      )} else if (this.state.followUp) {
        return (
          <div>
            <h2>Follow-up Set</h2>
            <button
              className='follow-up-toggle'
              onClick={ () => this.toggleFollowUp(false, editContact) }
              >Remove Follow-Up
            </button>
          </div>
      )}
  }

  render() {
    const { addNewContact, editContact, setSelectedContact } = this.props;
    return (
      <div>
        {this.state.editView ? <div className = 'input-container'>
            <section className='new-contact'>
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
            <section className='follow-up'>
              { this.followUpButton(editContact) }
            </section>
            <input
              className = 'notes-input'
              value = {this.state.notes}
              name = 'notes'
              placeholder = 'notes'
              type = 'text'
              onChange = { (e)=> {this.updateState(e, 'notes')}}
            />
            <EditSubmitButton
              addNewContact={addNewContact}
              editContact={editContact}
              setSelectedContact={setSelectedContact}
              existingContact={this.state.existingContact}
              editView={this.state.editView}
              toggleEditContact={this.toggleEditContact.bind(this)}
              submitContact={this.submitContact.bind(this)}
            />
          </div> : <div className = 'displayed-container'>
            <section className='existing-contact'>
              <h2 className = 'contact-name'>{ this.state.firstName } { this.state.lastName }</h2>
            </section>
            <h4 className = 'contact-org'><span className='org'>Organization:</span> {this.state.organization}</h4>
            <h4 className = 'contact-email'><span className='email'>Email:</span> {this.state.email}</h4>
              <h2 className = 'social-header'>Social Media</h2>
              <h4 className = 'contact-FB'><span className='facebook'>Facebook:</span> {this.state.socialFB}</h4>
              <h4 className = 'contact-GH'><span className='github'>Github:</span> {this.state.gitHub}</h4>
              <h4 className = 'contact-twitter'><span className='twitter'>Twitter:</span> {this.state.twitter}</h4>
            { this.followUpButton(editContact) }
            <h4 className = 'notes-header'>Notes:</h4>
            <p className='notes'>{this.state.notes}</p>
            <EditSubmitButton
              addNewContact={addNewContact}
              editContact={editContact}
              setSelectedContact={setSelectedContact}
              existingContact={this.state.existingContact}
              editView={this.state.editView}
              toggleEditContact={this.toggleEditContact.bind(this)}
              submitContact={this.submitContact.bind(this)}
            />
          </div> }
      </div>
    )
  }
}
