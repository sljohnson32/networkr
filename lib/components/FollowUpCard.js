import React, { Component } from 'react';
import filter from 'lodash';

export default class FollowUpCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      editView: this.props.editView,
      contactID: this.props.contact.contactID,
      existingContact: this.props.contact.existingContact,
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      organization: this.props.contact.organization,
      email: this.props.contact.email,
      socialFB: this.props.contact.socialFB,
      gitHub: this.props.contact.gitHub,
      twitter: this.props.contact.twitter,
      followUp: this.props.contact.followUp,
      notes: this.props.contact.notes,

    };
  }

  updatedContact() {
    return {
      contactID: this.state.contactID,
      existingContact: true,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      organization: this.state.organization,
      email: this.state.email,
      socialFB: this.state.socialFB,
      gitHub: this.state.gitHub,
      twitter: this.state.twitter,
      followUp: this.state.followUp,
      notes: this.state.notes,

    }
  };

  toggleFollowUp(editContact) {

    this.setState(({ followUp: false }), editContact(this.updatedContact()))
  }


  render(){

    return(
      <div>
        <h2>{this.props.contact.firstName}  {this.props.contact.lastName}</h2>
        <h2>{this.props.contact.organization}</h2>
        <h2>{this.props.contact.email}</h2>
        <button className = 'follow-up-toggle'
          onClick= { ()=> this.toggleFollowUp(this.props.editContact)}>Complete Follow up
        </button>
      </div>
    )
  }
}
