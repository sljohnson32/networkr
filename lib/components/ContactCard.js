import React, { Component } from 'react';

export default class ContactCard extends Component{

  selectContact(props) {
    const { contact, setSelectedContact, selectedContact } = props;
      if (contact !== selectedContact) {
        setSelectedContact(contact);
      } else if (contact === selectedContact) {
        setSelectedContact(null);
      }
  }

  render() {
    const { contact, selectedContact, setSelectedContact } = this.props
    if (contact === selectedContact) {
      return (
        <div>
          <ul
            className='selected-user'
            onClick={ () => this.selectContact(this.props) }
          >
            <li className='selected-user'>{ contact.firstName }</li>
            <li className='selected-user'>{ contact.lastName }</li>
            <li className='selected-user'>{ contact.organization }</li>
            <li className='selected-user'>{ contact.followUp }</li>
          </ul>
          <br></br>
        </div>
      )
    }
    if (contact !== selectedContact) {
      return (
        <div>
          <ul
            className='user'
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
