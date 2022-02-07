import { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  heandlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onContactSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.onFormSubmit}>
        <label className={s.label}>
          <span className={s.title}>Name</span>
          <input
            value={this.state.name}
            onChange={this.heandlerInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <span className={s.title}>Number</span>
          <input
            value={this.state.number}
            onChange={this.heandlerInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </label>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onContactSubmit: PropTypes.func,
};
