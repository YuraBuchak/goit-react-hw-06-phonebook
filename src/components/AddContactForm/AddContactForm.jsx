import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice/contactsSlice';
import { stateContacts } from 'redux/selectors';

export const AddContactForm = () => {
  const contacts = useSelector(stateContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const normalizeName = name.toLowerCase().trim();
    const isContact = contacts
      .map(contact => contact.name.toLowerCase().trim())
      .includes(normalizeName);

    if (isContact) {
      alert(`${name} was added earlyer`);
      return;
    }

    dispatch(addContact(name, number));
    event.target.reset();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmitForm}
      className={css.addForm}
    >
      <label className={css.addContactLabel}>
        Name
        <input
          className={css.addContactInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.addContactLabel}>
        Number
        <input
          className={css.addContactInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
