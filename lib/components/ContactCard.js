import React, { Component } from 'react';

export default class ContactCard extends Component{
  constructor() {
    super();
    this.state = {
      selected: false
    };
  }

  selectContact(props) {
    const { contact, selectUser } = props;
      if (this.state.selected === false) {
        this.setState({ selected: true });
        selectUser(contact);
      }
      if (this.state.selected === true) {
        this.setState({ selected: false });
        selectUser({});
      }
  }

  render() {
    const { contact, selectUser } = this.props
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
