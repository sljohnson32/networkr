import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      contacts: [],
    };
  }

  componentDidMount() {
    reference.limitToLast(50).on('value', (snapshot) => {
      const msgs = snapshot.val() || {};
      this.setState({
        contacts: map(contacts, (val, key) => extend(val, { key })),
      });
    });
  }

  signInHandler() {
    signIn().then((fromFirebase) => {
      this.setState({ user: fromFirebase.user });
    });
  }

  // addNewMessage() {
  //   const { user, draftMsg } = this.state;
  //   reference.push({
  //     user: pick(user, 'displayName', 'email', 'uid', 'photoURL'),
  //     content: draftMsg,
  //     createdAt: Date.now(),
  //   });
  //   this.setState({ draftMsg: '', disabled: true });
  // }

  logOut() {
    signOut();
    this.setState({ user: null });
  }

  render() {
    const { user, contacts } = this.state;
    return (
      <div className="Application">
        <button onClick={ this.signInHandler.bind(this) }>Sign In</button>
      </div>
    );
  }
}
