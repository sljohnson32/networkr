import React, { Component } from 'react';

export default class ContactCard extends Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     selected: false
  //   };
  // }

  selectContact(props) {
    const { contact, setSelectedContact, selectedContact, displayContactzz } = props;
      if (contact !== selectedContact) {
        displayContactzz();
        setSelectedContact(contact);
      }
      if (contact === selectedContact) {
        displayContactzz();
        setSelectedContact(null);
      }
  }

  render() {
    const { contact, viewDetails, selectedContact, setSelectedContact } = this.props
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
  }
}
