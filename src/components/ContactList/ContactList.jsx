import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts.length) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.contactItem} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className={s.deleteBtn} onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
