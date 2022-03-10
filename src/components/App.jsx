import React, { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import NameList from './NameList/NameList';
import NameItem from './NameItem/NameItem';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmitForm = state => {
    
    const checkname = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(state.name.toLowerCase())
    );

    if (!checkname) {
      const contact = { id: shortid.generate(), name: state.name, number: state.number };
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    } else {
      alert(state.name + ' is already in contact list');
    }

    // console.log('state', state);

    // const contact = { id: shortid.generate(), name: state.name, number: state.number };
    //   this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));

  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const currentContactList = JSON.parse(localStorage.getItem('contacts'));
      this.setState({ contacts: currentContactList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmitForm} />

        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} filter={filter} />
        <NameList
          visibleContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
