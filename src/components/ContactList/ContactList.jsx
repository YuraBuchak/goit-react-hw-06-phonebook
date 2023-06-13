import { ContactItem } from '../ContactItem/ContactItem';
import css from '../Phonebook.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contact);

  const filter = useSelector(state => state.filter);

  const filterContactsInput = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = filterContactsInput();

  return (
    <>
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.labelFilter}>No contacts!</p>
      )}
    </>
  );
};
