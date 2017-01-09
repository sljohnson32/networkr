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
      onNewContactForm: false
    };
  }

  displayContactzz() {
    this.setState({ onHome: false, onFollowUpzz: false, onNewContactForm: false, onContactzz: true });
  }

  displayFollowUpzz() {
    this.setState({ onHome: false, onContactzz: false, onNewContactForm: false, onFollowUpzz: true });
  }

  displayHome() {
    this.setState({ onFollowUpzz: false, onFollowUpzz: false, onNewContactForm: false, onHome: true })
  }

  displayNewContactForm() {
    this.setState({ onFollowUpzz: false, onFollowUpzz: false, onHome: false, onContactzz: true, onNewContactForm: true });
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
          onNewContactForm={ this.state.onNewContactForm }
          displayContactzz={ this.displayContactzz.bind(this) }
          addNewContact= { addNewContact }
          editContact={ editContact }
        />
      )
    if (onFollowUpzz) {
      return <FollowUpzz />
    }
  }}

  render() {
    const { user, contactzz, addNewContact, signOut } = this.props;
    return (
      <div className='home-screen'>

        <Navigation
          onHome={ this.state.onHome }
          displayHome={ this.displayHome.bind(this) }
          onFollowUpzz={ this.state.onFollowUpzz }
          displayFollowUpzz={ this.displayFollowUpzz.bind(this) }
          onContactzz={ this.state.onContactzz }
          displayContactzz={ this.displayContactzz.bind(this) }
        />
        { this.showStuff(this.props) }
        <section className = 'btn-container'>
        <button
          className='btn-addnew'
          onClick={ () => this.displayNewContactForm() }
        >Add Contact</button>
        <button
          className='btn-signout'
          onClick={ () => signOut() }
        >Sign Out</button>
      </section>
      </div>
    )
  }
}
