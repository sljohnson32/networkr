import React, { Component } from 'react';
import ContactCard from '../ContactCard'

export default class Contactzz extends Component {


  render() {
    const { contactzz } = this.props;
    return (
      <div>
        <section className='all-contactzz'>
          <h2>Contacts</h2>
            {contactzz.map((contact, index) =>{
              return
              <ContactCard
                key={key}
                contact={contact}
              />})
            }
        </section>
      </div>
    )
  }
}
