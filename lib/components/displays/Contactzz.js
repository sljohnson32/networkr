import React, { Component } from 'react';
import ContactCard from '../ContactCard'
import NewContactForm from './NewContactForm';

export default class Contactzz extends Component {
  constructor() {
    super();
    this.state = {
      selectedUser: {}
    };
  }

  displayFullContact(props) {
      const { contactzz, onNewContactForm, addNewContact, editContact } = props;
    if (onNewContactForm === true) {
      return (
        <NewContactForm
          contact={ {} }
          addNewContact= { addNewContact }
          editContact={ editContact }
          editView={ true }
        />
      )
      if (onNewContactForm !== true) {
        return (
          <NewContactForm
            contact={ this.state.selectedUser }
            addNewContact= { addNewContact }
            editContact={ editContact }
            editView={ false }
          />
        )
      }
    }
  }

  selectUser(contact) {
    this.setState({ selectedUser: contact })
  }

  render() {
    const { contactzz, onNewContactForm, addNewContact, editContact } = this.props;
    return (
      <div>
        <aside className='all-contactzz'>
          <h2>Contacts</h2>
            { contactzz.map((contact, index) => {
              const card = <ContactCard
                key={ index }
                contact={ contact }
                selectUser={ this.selectUser.bind(this) }
              />;
              return card;
              })
            }
        </aside>
        <section className='contact-info'>
          { this.displayFullContact(this.props)}
        </section>
      </div>
    )
  }
}
