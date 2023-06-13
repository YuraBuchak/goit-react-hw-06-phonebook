import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <AddContactForm />
      <h2 className={css.titleFilter}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
