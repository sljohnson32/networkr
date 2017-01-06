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
      contactzz: [],
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        firebase.database().ref(user.uid).limitToLast(50).on('value', (snapshot) => {
          const contactzz = snapshot.val() || {};
          this.setState({
            contactzz: map(contactzz, (val, key) => extend(val, { key })),
          });
        });
      }
    })
}



  signInHandler() {
    signIn().then((fromFirebase) => {
      this.setState({ user: fromFirebase.user });
    });
  }

  addNewContact(newContact) {
    const { user } = this.state;
    firebase.database().ref(user.uid).push({
      contact: pick(newContact, 'name', 'email', 'socialFB', 'followUp', 'notes', 'createdAt'),
    });
  }

  signOutHandler() {
    signOut();
    this.setState({ user: null, contactzz: [] });
  }

  render() {
    const { user, contactzz } = this.state;
    return (
      <div className="Application">
        <h1 className ='header'>Networkr</h1>
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
