import PropTypes from 'prop-types';
import { FormLabel } from './ContactsFilter.styled';
const ContactsFilter = ({ filter, onChange }) => (
  <FormLabel>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  </FormLabel>
);

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
