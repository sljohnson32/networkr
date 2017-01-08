import React, { Component } from 'react';

export default class ContactCard extends Component{
  constructor() {
    super();
    this.state = {
      selected: false
    };
  }

  selectContact(props) {
    const { contact, displayFullContact } = props;
      if (this.state.selected === false) {
        this.setState({ selected: true });
        displayFullContact(contact);
      }
      if (this.state.selected === true) {
        this.setState({ selected: false });
        displayFullContact({});
      }
  }

  render() {
    const { contact, displayFullContact } = this.props
    return (
      <div>
        <ul onClick={ () => this.selectContact(this.props) }>
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
