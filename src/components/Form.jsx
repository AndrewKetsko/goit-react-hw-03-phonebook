import React, { Component } from "react";

class Form extends Component {

    state = {
        name: '',
        number: ''
    };

    onFillInput = (e) => {
        // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.name);
    e.target.innerHTML = this.state.name;
  };


    // const { submitForm, onFillInput } = this.props;
    render() {return <>
        <form action="" onSubmit={this.props.submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onInput={this.onFillInput}
            />
            <label htmlFor="number">Number</label>
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
    </>}
}

export { Form };