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
          <ul>
            <li className='nav-selected'>Home</li>
            <li onClick={ () => displayFollowUpzz() }>Follow-ups</li>
            <li onClick={ () => displayContactzz() }>Contacts</li>
          </ul>
        </div>
      )
    }
    if (onFollowUpzz) {
      return (
        <div>
          <ul>
            <li onClick={ () => displayHome() }>Home</li>
            <li className='nav-selected'>Follow-ups</li>
            <li onClick={ () => displayContactzz() }>Contacts</li>
          </ul>
        </div>
      )
    }
    if (onContactzz) {
      return (
        <div>
          <ul>
            <li onClick={ () => displayHome() }>Home</li>
            <li onClick={ () => displayFollowUpzz() }>Follow-ups</li>
            <li
              className='nav-selected'
              onClick={() => displayContactzz()}
            >Contacts</li>
          </ul>
        </div>
      )
    }
  }
  render() {
    return this.DisplayNav(this.props);
  }
}
