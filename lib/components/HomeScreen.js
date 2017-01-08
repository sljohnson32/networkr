import React, { Component } from 'react';
import Home from './displays/Home';
import FollowUpzz from './displays/FollowUpzz';
import Contactzz from './displays/Contactzz';
import NewContactForm from './displays/NewContactForm';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      onHome: true,
      onNewContact: false,
      selectedUser: null,
    };
  }

  displayContactzz() {
    this.setState({ onHome: false, onContactzz: true });
  }

  displayFollowUpzz() {
    this.setState({ onHome: false, onFollowUpzz: true });
  }

  displayNewContactForm() {
    this.setState({ onNewContact: true, onHome: false })
  }

  displayFullContact(contact) {
    console.log('it works');
  }

  showStuff(props) {
    const { user, contactzz, addNewContact, editContact, signOut } = props;
    const { onHome, onFollowUpzz, onContactzz, onNewContact } = this.state;
    if (onHome) {
      return (
        <Home
          displayContactzz={ this.displayContactzz.bind(this) }
          displayFollowUpzz={ this.displayFollowUpzz.bind(this) }
        />
      )
    }
    if (onContactzz) {
      return (
        <Contactzz
          contactzz={ contactzz }
          displayFullContact={ this.displayFullContact.bind(this) }
        />
      )
    }
    if (onNewContact) {
      return (
        <NewContactForm
          contact={ {} }
          addNewContact= { addNewContact }
          editContact={ editContact }
          editView={ true }
        />
      )
    }
  }

  render() {
    const { user, contactzz, addNewContact, signOut } = this.props;
    return (
      <div className='home-screen'>
        <button
          className='btn-addnew'
          onClick={ () => this.displayNewContactForm() }
        >Add Contact</button>
        <p>WE'RE IN!</p>
        <button
          className='btn-signout'
          onClick={ () => signOut() }
        >Sign Out</button>
        { this.showStuff(this.props) }
      </div>
    )
  }
}
