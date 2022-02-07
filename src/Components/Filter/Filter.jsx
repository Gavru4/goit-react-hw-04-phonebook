import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ heandlerInputChange, filter }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Find contacts by name</span>
      <input
        value={filter}
        onChange={heandlerInputChange}
        type="text"
        name="filter"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  heandlerInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
