import React, { Component } from 'react';

export default class ContactCard extends Component{


  render() {
    debugger
    const { contact }= this.props
    return (
      <div>
      <ul>
        <li>{ contact.firstName }</li>
        <li>{ contact.lastName }</li>
        <li>{ contact.organization }</li>
        <li>{ contact.email }</li>
        <li>{ contact.socialFB }</li>
        <li>{ contact.twitter}</li>
        <li>{ contact.gitHub }</li>
        <li>{ contact.followUp }</li>
        <li>{ contact.notes }</li>
        <li>{ contact.createdAt }</li>
      </ul>
      <br></br>
      </div>
    )
  }
}
