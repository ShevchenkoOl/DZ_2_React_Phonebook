import { Component } from 'react';
import { Button, Input, Label, Sector, Title } from './ContactForm.styled';
//let id=0;

export class ContactForm extends Component {
  state = {
    name: '',
    number:''
  }


  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
    
  }
  
  submitForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState(this.State)
  }

  render() {
    const { name, number } = this.state;
  
    return (
      <Title>
             Phonebook
             <Sector>
                   <form>
                        <Label>Name
                            <Input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="Ivan Ivanov"
                            />
                       </Label>
                       <Label>Number
                            <Input
                            type="tel"
                            name="nomber"
                            id="number"
                            value={number}
                            onChange={this.handleChange}
                            placeholder="123-45-67"
                            />
                       </Label>
                       {/* <Button type="button" value="Submit" onClick={this.submitForm}>Add contact</Button> */}
                       <Button value="Submit" onClick={this.submitForm}>Add contact</Button>
                    </form>
                </Sector>
      </Title>
    );
  }
}