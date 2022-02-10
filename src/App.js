import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contact")) || []
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const heandlerInputChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const removeContact = (id) =>
    setContacts((prev) => prev.filter((el) => el.id !== id));

  const onContactSubmit = (user) => {
    const array = contacts;
    for (const obj of array) {
      if (obj.name.includes(user.name)) {
        return alert(`${user.name} is olredy in contact`);
      }
    }
    setContacts((prev) => [...prev, { ...user, id: nanoid() }]);
  };
  const getFilterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const findEl = contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return findEl;
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onContactSubmit={onContactSubmit} contscts={contacts} />
      </Section>

      <Section title="Contacts">
        <>
          <Filter heandlerInputChange={heandlerInputChange} filter={filter} />
          <ContactList
            getFilterContacts={getFilterContacts}
            removeContact={removeContact}
          />
        </>
      </Section>
    </>
  );
};

export default App;
