import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactsThunk,
  editContactThunk,
  fetchContactThunk,
} from "./contactsOps";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(
    //     (contact) => contact.id !== action.payload
    //   );
    // },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    fetchDataSuccess: (state, action) => {
      state.contacts = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts[index] = action.payload; // Оновлюємо контакт
        }
      });
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { setLoading, setError, fetchDataSuccess } = contactsSlice.actions;
export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.contacts;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
