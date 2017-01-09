import React, { Component } from 'react';
import ContactCard from '../ContactCard'
import NewContactForm from './NewContactForm';

export default class Contactzz extends Component {

  displayContact(props) {
    const { contactzz, addNewContact, editContact, onNewContactForm, toggleNewContactForm, selectedContact, setSelectedContact } = props;
    if (onNewContactForm) {
      return (
        <NewContactForm
          contact={ {} }
          addNewContact= { addNewContact }
          editContact={ editContact }
          editView={ true }
          toggleNewContactForm={ toggleNewContactForm }
          setSelectedContact={ setSelectedContact }
        />
      )
    } else if (selectedContact !== null) {
      return (
        <NewContactForm
          contact={ selectedContact }
          addNewContact= { addNewContact }
          editContact={ editContact }
          editView={ false }
          setSelectedContact={ setSelectedContact }
        />
      )
    } else if (selectedContact === null) {
      return (
        <h3>Please select a contact from the list on the left to display more details</h3>
      )
    }
  }

  render() {
    const { contactzz, addNewContact, displayContactzz, editContact, onNewContactForm, toggleNewContactForm, selectedContact, setSelectedContact } = this.props;
    return (
      <div>
        <aside className='all-contactzz'>
          <h2>Contacts</h2>
          <section className ='add-new-container'>
            <button
              className='btn-addnew'
              onClick={ () => toggleNewContactForm() }
            >Add Contact</button>
          </section>
            { contactzz.map((contact, index) => {
              const card = <ContactCard
                key={ index }
                contact={ contact }
                selectedContact={ selectedContact }
                setSelectedContact={ setSelectedContact }
                displayContactzz={ displayContactzz }
              />;
              return card;
              })
            }
        </aside>
        <section className='contact-info'>
          { this.displayContact(this.props)}
        </section>
      </div>
    )
  }
}
