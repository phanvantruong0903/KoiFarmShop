import PropTypes from "prop-types";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function FilterBar({ initialTitle, NavItems, handleFilterChange, filter }) {
  const checkEmptyString = (item) => {
    if (item === 'All') {
      return true;
    }
    return false;
  }
  return (
    <DropdownButton id="dropdown-basic-button" title={initialTitle} onSelect={(e) => handleFilterChange(filter, e)}>
      {NavItems.map((item) => (
        <Dropdown.Item key={item} eventKey={checkEmptyString(item)  ? '' : item} >
          {item}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

FilterBar.propTypes = {
  initialTitle: PropTypes.string.isRequired,
  NavItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
