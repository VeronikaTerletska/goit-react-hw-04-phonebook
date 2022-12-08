import { Component } from 'react';
import { Form, Input, Text, BtnSubmit, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  NameInputId = nanoid();
  NumberInputId = nanoid();

  formChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.currentTarget.reset();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.formSubmit}>
        <Label htmlFor={this.NameInputId}>
          <Text>Name</Text>
          <Input
            placeholder=" Taras Hryhorovych Shevchenko"
            type="text"
            name="name"
            id={this.NameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.formChange}
          />
        </Label>
        <Label htmlFor={this.NumberInputId}>
          <Text>Number</Text>
          <Input
            placeholder=" ***-**-**"
            type="tel"
            name="number"
            id={this.NumberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.formChange}
          />
        </Label>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    );
  }
}
