import React, { Component } from 'react';

export default class ContactCard extends Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     selected: false
  //   };
  // }

  selectContact(props) {
    const { contact, viewDetails, selectedContact, displayContactzz } = props;
      if (contact !== selectedContact) {
        displayContactzz();
        viewDetails(contact);
      }
      if (contact === selectedContact) {
        displayContactzz();
        viewDetails(null);
      }
  }

  render() {
    const { contact, viewDetails, selectedContact } = this.props
    if (contact === selectedContact) {
      return (
        <div>
          <ul
            className='selected-user'
            onClick={ () => this.selectContact(this.props) }
          >
            <li>{ contact.firstName }</li>
            <li>{ contact.lastName }</li>
            <li>{ contact.organization }</li>
            <li>{ contact.followUp }</li>
          </ul>
          <br></br>
        </div>
      )
    }
    if (contact !== selectedContact) {
      return (
        <div>
          <ul
            onClick={ () => this.selectContact(this.props) }
          >
            <li>{ contact.firstName }</li>
            <li>{ contact.lastName }</li>
            <li>{ contact.organization }</li>
            <li>{ contact.followUp }</li>
          </ul>
          <br></br>
        </div>
      )
    }
  }
}
