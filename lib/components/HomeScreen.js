import React, { Component } from 'react';
import Home from './displays/Home';
import FollowUpzz from './displays/FollowUpzz';
import Contactzz from './displays/Contactzz';
import Contact from './displays/Contact';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      onHome: true,
      onFollowUpzz: false,
      onContactzz: false,
      onContact: false,
      selectedUser: null,
    };
  }

  displayContactzz() {
    this.setState({ onHome: false, onContactzz: true });
  }

  displayFollowUpzz() {
    this.setState({ onHome: false, onFollowUpzz: true });
  }

  displayContact() {
    this.setState({ onContact: true, onHome: false })
  }

  showStuff(props) {
    const { user, contactzz, addNewContact, signOut } = props;
    const { onHome, onFollowUpzz, onContactzz, onContact } = this.state;
    if (onHome) {
      return (
        <Home
          displayContactzz={ this.displayContactzz.bind(this) }
          displayFollowUpzz={ this.displayFollowUpzz.bind(this) }
        />
      )
    }
    if (onFollowUpzz) {
      return <FollowUpzz />
    }
    if (onContactzz) {
      return <Contactzz />
    }
    if (onContact) {
      return <Contact />
    }
  }

  render() {
    const { user, contactzz, addNewContact, signOut } = this.props;
    return (
      <div className='home-screen'>
        <button
          className='btn-addnew'
          onClick={ () => this.displayContact() }
        >Add Contact</button>
        <p>WE'RE IN!</p>
        <button
          className='btn-signout'
          onClick={ () => signOut }
        >Sign Out</button>
        { this.showStuff(this.props) }
      </div>
    )
  }
}
