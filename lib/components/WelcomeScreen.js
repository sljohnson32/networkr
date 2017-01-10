import React, { Component } from 'react';

export default class WelcomeScreen extends Component {
  render() {
    const { signIn } = this.props;
    return (
      <div className = 'welcome-container'>
        <h2>Welcome to Networkr!</h2>
        <p>Please <button className='sign-in-btn' onClick={ () => signIn() }> Sign In </button> to get started</p>
      </div>
    )
  }
}
