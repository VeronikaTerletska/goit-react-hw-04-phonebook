import PropTypes from 'prop-types';
import { Text, Input } from './Filter.styled';

export const Filter = ({ filter }) => {
  return (
    <div>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filter}
      />
    </div>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
