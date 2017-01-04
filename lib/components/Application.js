import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      contactzz: [],
    };
  }

  componentDidMount() {
    reference.limitToLast(50).on('value', (snapshot) => {
      const contactzz = snapshot.val() || {};
      this.setState({
        contactzz: map(contactzz, (val, key) => extend(val, { key })),
      });
    });
  }

  signInHandler() {
    signIn().then((fromFirebase) => {
      this.setState({ user: fromFirebase.user });
    });
  }

  addNewContact(newContact) {
    const { user } = this.state;
    reference.push({
      user: user.uid,
      contact: pick(newContact, 'name', 'email', 'othercontact', 'social', 'follow-up', 'notes'),
      createdAt: Date.now(),
    });
  }

  signOutHandler() {
    signOut();
    this.setState({ user: null });
  }

  render() {
    const { user, contactzz } = this.state;
    return (
      <div className="Application">
        <h1>Networkr</h1>
        { user ?
          <HomeScreen
            user={ user }
            contactzz={ contactzz }
            addNewContact={ this.addNewContact.bind(this) }
            signOut={ this.signOutHandler.bind(this) }
          /> :
          <WelcomeScreen
            signIn={ this.signInHandler.bind(this) }
          /> }
      </div>
    );
  }
}
