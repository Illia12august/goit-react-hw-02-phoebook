import AddContact from './AddConatct/AddContact';
import { Component } from 'react';
import ListOfContacts from './ContactList/ListOfContacts';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addBookChild = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  filterChange = event => {
    this.setState({ filter: event.target.value });
  };
  onDelete = delId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== delId),
      };
    });
  };
  render() {
    const filteredContactList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <>
        <h1>Phonebook</h1>
        <AddContact addContact={this.addBookChild} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} filter={this.filterChange} />
        <ListOfContacts contacts={filteredContactList} onDelete={this.onDelete}/>
      </>
    );
  }
}
