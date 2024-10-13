import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; // для генерации уникальных id контактов

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

// Селектор для получения контактов
export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
