import { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem("contact", JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contact")) || [];
    this.setState({ contacts }); //{contacts: contacts}
  }

  heandlerInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  removeContact = (id) =>
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));

  onContactSubmit = (user) => {
    const array = this.state.contacts;
    for (const obj of array) {
      if (obj.name.includes(user.name)) {
        return alert(`${user.name} is olredy in contact`);
      }
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...user, id: nanoid() }],
    }));
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const filterEl = this.state.contacts;
    const findEl = filterEl.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return findEl;
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onContactSubmit={this.onContactSubmit}
            contscts={this.state.contacts}
          />
        </Section>

        <Section title="Contacts">
          <>
            <Filter
              heandlerInputChange={this.heandlerInputChange}
              filter={this.state.filter}
            />
            <ContactList
              getFilterContacts={this.getFilterContacts}
              removeContact={this.removeContact}
            />
          </>
        </Section>
      </>
    );
  }
}

export default App;
