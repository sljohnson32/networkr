import React, { Component } from 'react';

export default class ContactCard extends Component{

toggleFullContact() {
  
}

  render() {
    debugger
    const { contact }= this.props
    return (
      <div>
      <ul>
        <li>{ contact.firstName }</li>
        <li>{ contact.lastName }</li>
        <li>{ contact.organization }</li>
        <li>{ contact.followUp }</li>
      </ul>
      <br></br>
      </div>
    )
  }
}
