import React from 'react';
import ContactEl from './ContactEl';

export default function ContactList({ contacts, filter, delFunc }) {
  return (
    <>
      <ul>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter);
            // console.log(contact);
            // console.log(contact.name);
            // console.log(this.state.filter);
            // console.log(contact.name.includes(this.state.filter));
          })
          .map(contact => {
            //   console.log(contact.id);
            return (
              <ContactEl key={contact.id} contact={contact} delFunc={delFunc} />
            );
          })}
      </ul>
    </>
  );
}
