import React, { Component } from 'react';

export default class ContactCard extends Component{


  render() {
    debugger
    const { contact }= this.props
    return (
      <ul>
        <li>{ contact.name }</li>
        <li>{ contact.email }</li>
        <li>{ contact.socialFB }</li>
        <li>{ contact.followUp }</li>
        <li>{ contact.notes }</li>
        <li>{ contact.createdAt }</li>
      </ul>
    )
  }
}
