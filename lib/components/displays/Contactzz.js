import React, { Component } from 'react';
import ContactCard from '../ContactCard'

export default class Contactzz extends Component {


  render() {
    const { contactzz } = this.props;
    return (
      <div>
        <section className='all-contactzz'>
          <h2>Contacts</h2>
            { contactzz.map((contact, index) => {
              const card = <ContactCard key={ index } contact={ contact }/>;
              return card;
              })
            }
        </section>
      </div>
    )
  }
}
