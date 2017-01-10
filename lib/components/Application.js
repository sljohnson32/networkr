import React, { Component } from 'react';
import firebase, { signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';

import moment from 'moment'

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      contactDatabase: [],
      contactzz: [],
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.createDatabaseRef(user)
    });
  }

  createDatabaseRef(user) {
    this.setState({
      user,
      contactDatabase: user ? firebase.database().ref(user.uid) : null,
    },
      () => {
        this.createDatabaseListener(user);
      }
    );
  }

  createDatabaseListener(user) {
    if (user) {
      firebase.database().ref(user.uid).on('value', (snapshot) => {
        const contactzz = snapshot.val() || {};
        this.setState({
          contactzz: map(contactzz, (val, key) => extend(val, { key })),
        });
      });
    } else {
      this.setState({
        contactzz: [],
      });
    }
  }

  addNewContact(newContact) {
    const newContactData = pick(newContact, 'contactID', 'existingContact','firstName', 'lastName', 'organization', 'email', 'socialFB', 'gitHub', 'twitter', 'followUp', 'notes', 'createdAt')
    this.state.contactDatabase.child(newContact.contactID).set(newContactData);
  }

  editContact(updatedContact) {
    const id = updatedContact.contactID;
    this.state.contactDatabase.child(id).update(updatedContact);
  }

  render() {
    const { user, contactzz } = this.state;
    return (
      <div className="Application">
        <div className='header'>
        <h1>Welcome To Networkr</h1>
        </div>
        { user ?
          <HomeScreen
            user={ user }
            contactzz={ contactzz }
            addNewContact={ this.addNewContact.bind(this) }
            editContact={ this.editContact.bind(this) }
            signOut={ signOut.bind(this) }
          /> :
          <WelcomeScreen
            signIn={ signIn.bind(this) }
          /> }
      </div>
    );
  }
}
