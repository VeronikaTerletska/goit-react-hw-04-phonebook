import React from 'react';
import propTypes from 'prop-types';
import { ContactListUl, ContactListLi, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <ContactListUl>
    {contacts.map((contact, id) => (
      <ContactListLi key={id}>
        {contact.name}: {contact.number}
        <BtnDelete type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </BtnDelete>
      </ContactListLi>
    ))}
  </ContactListUl>
);
ContactList.propTypes = {
  deleteContact: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
