import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.labelFilter}>
      <span className={css.labelSerch}>Serch contact</span>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
