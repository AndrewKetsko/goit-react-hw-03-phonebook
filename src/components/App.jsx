import React, { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  };

  submitForm = (e) => {
    e.preventDefault();
    const contact = { id: nanoid(), name: e.target.name.value, number: e.target.number.value};
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
    this.setState({ name: '', number:'' });
    e.currentTarget.reset();
  };

  onFillInput = (e) => {
        // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.name);
    e.target.innerHTML = this.state.name;
  };

  searchFunc = (e) => {
        this.setState({ [e.target.name]: e.target.value.toLowerCase() });

  };

  render() {
    return <>
      <form action="" onSubmit={this.submitForm}>
        <label htmlFor="name">Name</label>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onInput={this.onFillInput}
        />
        <label htmlFor="number">Tel.</label>
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onInput={this.onFillInput}

        />
        <button type="submit">Add contact</button>
      </form>
      <label htmlFor="search">Search contact</label>
      <input type="text" name="filter" onInput={this.searchFunc}/>
        <ul>
      {
          this.state.contacts
            .filter((contact) => {return contact.name.toLowerCase().includes(this.state.filter)
              // console.log(contact);
              // console.log(contact.name);
              // console.log(this.state.filter);
              // console.log(contact.name.includes(this.state.filter));
            })
            .map((contact) => {
              return <>
                <li key={contact.id}>{contact.name}: { contact.number }</li>
              </>
            })
        }
        </ul>
    </>
  }
};

export {App};