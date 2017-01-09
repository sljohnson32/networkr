import React, { Component } from 'react';

export default class Navigation extends Component{
  // constructor(props) {
  //   super();
  //   this.state = {
  //     home: false
  //   };
  // }

  DisplayNav(props) {
    const { displayHome, displayContactzz, displayFollowUpzz, onHome, onFollowUpzz, onContactzz, onNewContactForm } = props;
    if (onHome) {
      return (
        <div>
          <section className='navbar'>
          <ul className = 'nav-list'>
            <li className=' nav-selected home'>Home</li>
            <li className='follow-up'  onClick={ () => displayFollowUpzz() }>Follow-ups</li>
            <li className='contact' onClick={ () => displayContactzz() }>Contacts</li>
          </ul>
          </section>
        </div>
      )
    }
    if (onFollowUpzz) {
      return (
        <div>
          <section className='navbar'>
          <ul className = 'nav-list'>
            <li className='home' onClick={ () => displayHome() }>Home</li>
            <li className='nav-selected follow-up'>Follow-ups</li>
            <li className='contact' onClick={ () => displayContactzz() }>Contacts</li>
          </ul>
        </section>
        </div>
      )
    }
    if (onContactzz) {
      return (
        <div>
          <section className='navbar'>
          <ul className ='nav-list'>
            <li className ='home' onClick={ () => displayHome() }>Home</li>
            <li className ='follow-up' onClick={ () => displayFollowUpzz() }>Follow-ups</li>
            <li
              className='nav-selected contact'
              onClick={() => displayContactzz()}
            >Contacts</li>
          </ul>
          </section>
        </div>
      )
    }
  }
  render() {
    return this.DisplayNav(this.props);
  }
}
