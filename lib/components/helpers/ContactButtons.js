import React, { Component } from 'react';

export default class EditSubmitButton extends Component {
  render() {
    const { addNewContact, editContact, setSelectedContact, existingContact, editView, toggleEditContact, submitContact } = this.props
    if(existingContact && !editView ) {
      return (
        <button className ='edit-button'
        onClick = { () => toggleEditContact() }
        >Edit Contact
        </button>
      )
    } else if (existingContact && editView) {
      return (
        <button className = 'save-changes'
          onClick = { () => submitContact(editContact, setSelectedContact) }
        >SAVE CHANGES
        </button>
      )
    } else {
      return (
          <button className ='submit-contact'
            onClick = { () => submitContact(addNewContact, setSelectedContact) }
          >SUBMIT
          </button>
        )
    }
  }
}
