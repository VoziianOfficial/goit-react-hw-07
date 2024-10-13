import React from "react";
import PropTypes from "prop-types";
import s from "./contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      {name}: {number}
      <button className={s.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
