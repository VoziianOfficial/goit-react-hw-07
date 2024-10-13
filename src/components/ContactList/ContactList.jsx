import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice"; // Добавляем правильный импорт селектора

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts); // Используем селектор для фильтрации контактов

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // удаления контакта
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
