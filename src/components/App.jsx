import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Container, Title } from "./ContactForm/ContactForm.styled";
import { ContactList } from "./ContactList/ContactList";
// { Filter } from "./Fiter/Filter";
import { GlobalStyle } from "./GlobalStyle";
//import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: []
  }
  

  addContact = (contact) => {
    this.setState({ contacts: [...this.state.contacts, contact]})
  }
  
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    
    return (
      <Container>
            <ContactForm title="Phonebook" handleSubmit={this.addContact}/>
            
            {contacts.length>0 ? (
            <ContactList title="Contacts"
                         contacts={contacts}
                         onDeleteContact={this.deleteContact}
            />):(<Title>Your phonebook is empty. Please add contact.</Title>)}
           
            <GlobalStyle/>
      </Container>         
    );
}
}