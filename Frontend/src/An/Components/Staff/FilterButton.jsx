
import PropTypes from 'prop-types';

export default function FilterButton({ label, filterType, filterValue, currentFilter, onFilterChange, count }) {
    return (
        <div
            className={currentFilter === filterValue ? 'active' : ''}
            onClick={() => onFilterChange(filterType, filterValue)}
        >
            {label} <span className="ms-1">{count}</span>
        </div>
    );
}

FilterButton.propTypes = {
    label: PropTypes.string.isRequired,
    filterType: PropTypes.string.isRequired,
    filterValue: PropTypes.string.isRequired,
    currentFilter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
};
