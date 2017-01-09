import React, { Component } from 'react';

export default class FollowUpzz extends Component {
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
      createdAt: this.props.contact.creadedAt
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
      createdAt: this.state.createdAt
    }
  };

  toggleFollowUp() {
    this.setState(({ followUp: false }), () => {
      editContact(this.newContact());
    })
  }

  

  render() {
    return (
      <div>
        <section className='all-follow-upzz'>
          <h2>Follow-up</h2>
          <p>This is where we'll map ALL upcoming follow-ups with contacts</p>
        </section>
      </div>
    )
  }
}
