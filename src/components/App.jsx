import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Container, Title } from "./ContactForm/ContactForm.styled";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Fiter/Filter";
import { GlobalStyle } from "./GlobalStyle";
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };
    const {contacts} = this.state;
          if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
      ) {
        alert(`${name} is already in contacts.`);
      } else if (contacts.find(contact => contact.number === number)) {
        alert(`${number} is already in contacts.`);
      } else if (name.trim() === '' || number.trim() === '') {
        alert("Enter the contact's name and number phone!");
      } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
        alert('Enter the correct number phone!');
      } else {
        this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
      }
    };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
            <ContactForm title="Phonebook" handleSubmit={this.addContact}/>
            
            {contacts.length>0 ? (
            <Title>Contacts
            <Filter value={filter} onChange={this.changeFilter}/>
            <ContactList title="Contacts"
                         contacts={visibleContacts}
                         onDeleteContact={this.deleteContact}
            />
            </Title>
            ):(<Title>Your phonebook is empty. Please add contact.</Title>)}
           
            <GlobalStyle/>
      </Container>         
    );
}
}