import React, { Component } from 'react';
import Home from './displays/Home';
import FollowUpzz from './displays/FollowUpzz';
import Contactzz from './displays/Contactzz';
import Navigation from './Navigation';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      onHome: true,
      onFollowUpzz: false,
      onContactzz: false,
      onNewContactForm: false,
      selectedContact: null,
    };
  }

  setSelectedContact(contact) {
    this.setState({ selectedContact: contact, onNewContactForm: false });
  }

  toggleNewContactForm() {
    this.setState({ onNewContactForm: true, selectedContact: null })
  }

  displayContactzz() {
    this.setState({ onHome: false, onFollowUpzz: false, onContactzz: true, onNewContactForm: false });
  }

  displayFollowUpzz() {
    this.setState({ onHome: false, onContactzz: false, onFollowUpzz: true, onNewContactForm: false });
  }

  displayHome() {
    this.setState({ onFollowUpzz: false, onFollowUpzz: false, onHome: true, onNewContactForm: false })
  }

  render() {
    const { user, contactzz, addNewContact, editContact, signOut } = this.props;
    const { onHome, onFollowUpzz, onContactzz } = this.state;
    return (
      <div className='home-screen'>
        <button
          className='btn-signout'
          onClick={ () => signOut() }
        >Sign Out</button>
        <Navigation
          onHome={ this.state.onHome }
          displayHome={ this.displayHome.bind(this) }
          onFollowUpzz={ this.state.onFollowUpzz }
          displayFollowUpzz={ this.displayFollowUpzz.bind(this) }
          onContactzz={ this.state.onContactzz }
          displayContactzz={ this.displayContactzz.bind(this) }
        />
        {onHome ? <Home
            displayContactzz={ this.displayContactzz.bind(this) }
            displayFollowUpzz={ this.displayFollowUpzz.bind(this) }
          /> : <div />}
        {onContactzz ? <Contactzz
            contactzz={ contactzz }
            displayContactzz={ this.displayContactzz.bind(this) }
            addNewContact= { addNewContact }
            editContact={ editContact }
            onNewContactForm={ this.state.onNewContactForm }
            selectedContact={ this.state.selectedContact }
            setSelectedContact={ this.setSelectedContact.bind(this) }
            toggleNewContactForm={ this.toggleNewContactForm.bind(this) }
          /> : <div />}
        {onFollowUpzz ? <FollowUpzz
            editContact ={ editContact }
            contactzz= { contactzz }
          /> : <div />}
        <section className = 'btn-container'>
          <button
            className='btn-signout'
            onClick={ () => signOut() }
          >Sign Out</button>
        </section>
      </div>
    )
  }
}
