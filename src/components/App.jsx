import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';

const ST_KEY = 'ST_KEY';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(ST_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = info => {
    const { name, number } = info;
    const normalizeName = name.toLowerCase();
    const isContact = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(normalizeName);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (isContact) {
      alert(`${name} was added earlyer`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const changeFilter = event => setFilter(event.target.value);

  const filterInput = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

  useEffect(() => {
    localStorage.setItem(ST_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <AddContactForm onSubmit={addContact} />
      <h2 className={css.titleFilter}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contactArrays={filterInput()} onClick={deleteContact} />
    </div>
  );
};
