import React, { Component } from 'react';
import ContactCard from '../ContactCard'
import NewContactForm from './NewContactForm';

export default class Contactzz extends Component {
  constructor() {
    super();
    this.state = {
      selectedContact: null
    };
  }

  displayFullContact(props) {
    const { contactzz, addNewContact, editContact, onNewContactForm, toggleNewContactForm } = props;
    if (onNewContactForm) {
      return (
        <NewContactForm
          contact={ {} }
          addNewContact= { addNewContact }
          editContact={ editContact }
          editView={ true }
          toggleNewContactForm={ toggleNewContactForm }
        />
      )
    } else if (!onNewContactForm && this.state.selectedContact !== null) {
      return (
        <NewContactForm
          contact={ this.state.selectedContact }
          addNewContact= { addNewContact }
          editContact={ editContact }
          editView={ false }
        />
      )
    } else if (!onNewContactForm && this.state.selectedContact === null) {
      return (
        <h3>Please select a contact from the list on the left to display more details</h3>
      )
    }
  }

  viewDetails(contact) {
    this.setState({ selectedContact: contact });
  }

  render() {
    const { contactzz, addNewContact, displayContactzz, editContact, onNewContactForm, toggleNewContactForm } = this.props;
    return (
      <div>
        <aside className='all-contactzz'>
          <h2>Contacts</h2>
          <section className ='add-new-container'>
            <button
              className='btn-addnew'
              onClick={ () => toggleNewContactForm(true) }
            >Add Contact</button>
          </section>
            { contactzz.map((contact, index) => {
              const card = <ContactCard
                key={ index }
                contact={ contact }
                selectedContact={ this.state.selectedContact }
                viewDetails={ this.viewDetails.bind(this) }
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
