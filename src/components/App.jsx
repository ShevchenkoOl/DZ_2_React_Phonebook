import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Container } from "./ContactForm/ContactForm.styled";
import { ContactList } from "./ContactList/ContactList";
import { GlobalStyle } from "./GlobalStyle";
//import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: []
  }
  
  handleSubmit = (contact) => {
    this.setState({ contacts: [...this.state.contacts, contact]})
  }
  
  render() {
    const { contacts } = this.state;
    
    return (
      <Container>
            <ContactForm title="Phonebook" handleSubmit={this.handleSubmit}/>
            {/* <ContactList title="Contacts"
                         characterData={contacts}
            /> */}
            {contacts.length>0 ? (
            <ContactList title="Contacts"
                         characterData={contacts}
            />):(<h2>Your phonebook is empty. Please add contact.</h2>)}
           
            <GlobalStyle/>
      </Container>         
    );
}
}