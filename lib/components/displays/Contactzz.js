import React, { Component } from 'react';
import ContactCard from '../ContactCard'
import NewContactForm from './NewContactForm';

export default class Contactzz extends Component {
  constructor() {
    super();
    this.state = {
      selectedContact: {}
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
            contact={ this.state.selectedContact }
            addNewContact= { addNewContact }
            editContact={ editContact }
            editView={ false }
          />
        )
      }
    }
  }

  selectContact(contact, displayContactzz) {
    this.setState({ selectedContact: contact });
    displayContactzz();
  }

  render() {
    const { contactzz, onNewContactForm, addNewContact, displayContactzz, editContact } = this.props;
    return (
      <div>
        <aside className='all-contactzz'>
          <h2>Contacts</h2>
            { contactzz.map((contact, index) => {
              const card = <ContactCard
                key={ index }
                contact={ contact }
                selectContact={ this.selectContact.bind(this) }
                displayContactzz={ displayContactzz }
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
