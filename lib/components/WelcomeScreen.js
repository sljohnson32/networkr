import React, { Component } from 'react';

export default class WelcomeScreen extends Component {
  render() {
    const { signIn } = this.props;
    return (
      <div className = 'welcome-container'>
        <button className='sign-in-btn' onClick={ () => signIn() }>Sign In</button>
      </div>
    )
  }
}
