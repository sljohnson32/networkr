import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    const { displayContactzz, displayFollowUpzz } = this.props;
    return (
      <div className='home-container'>
        <section className='welcome-msg'>
          <h2>Welcome to Networkr.</h2>
          <p>Use that navigation bar to review your contacts and/or track your follow-ups</p>
        </section>
      </div>
    )
  }
}
