import React, { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import NameList from './NameList/NameList';
import NameItem from './NameItem/NameItem';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    id: '',
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const checkname = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!checkname) {
      const contact = { id: shortid.generate(), name: name, number: number };
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
      // this.setState(prevState => ({
      //   contacts: [name + ": " + number, ...prevState.contacts],
      // }))
    } else {
      alert(name + ' is already in contact list');
    }

    this.reset(form);
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  reset(form) {
    form.elements.name.value = '';
    form.elements.number.value = '';
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts);

    return (
      <>
        <h1>Phonebook</h1>
        <Form handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} filter={filter} />
        <NameList>
          <NameItem
            visibleContacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </NameList>
      </>
    );
  }
}

export default App;
