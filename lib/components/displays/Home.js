import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    const { displayContactzz, displayFollowUpzz } = this.props;
    return (
      <div>
        <section className='upcoming-follow-ups'>
          <h2 onClick={ () => displayFollowUpzz() }>Follow-up</h2>
          <p>This is where we'll map upcoming follow-ups with contacts</p>
        </section>
        <section className='recent-contacts'>
          <h2 onClick={ () => displayContactzz() }>Most Recent Contacts</h2>
          <p>This is where we'll map most recent contacts touched</p>
        </section>
      </div>
    )
  }
}