import { Component } from 'react';
import { Form, Input, Text, BtnSubmit } from './ContactForm.styled';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  state = {
    name: '',
    number: '',
  };

  formChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.addContacts(this.state);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Text>Name</Text>
        <Input
          placeholder=" Taras Hryhorovych Shevchenko"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.formChange}
        />
        <Text>Number</Text>
        <Input
          placeholder=" ***-**-**"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.formChange}
        />
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    );
  }
}
