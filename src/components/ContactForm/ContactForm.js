import React, { Component } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  idName = shortid.generate();
  idNumber = shortid.generate();

  inputValue = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (e) => {
    e.preventDefault();

    const checkName = this.props.contactList({ name: this.state.name });
    if (checkName) {
      alert(`${this.state.name} is already in contacts`);

      return;
    }

    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label htmlFor={this.idName}>
          <p className={s.title}>Name</p>
          <input
          className={s.input}
            id={this.idName}
            value={this.state.name}
            onChange={this.inputValue}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.idNumber}>
          <p className={s.title}>Number</p>
          <input
            className={s.input}
            id={this.idNumber}
            value={this.state.number}
            onChange={this.inputValue}
            type="tel"
            name="number"
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submite">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
