import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ getFilterContacts, removeContact }) => {
  return (
    <ol className={s.list}>
      {getFilterContacts().map((el) => {
        return (
          <li className={s.item} key={el.id}>
            {el.name}: {el.number}
            <button
              className={s.btn}
              onClick={() => {
                removeContact(el.id);
              }}
            >
              Delate
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;

ContactList.propTypes = {
  getFilterContacts: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};
