import { Component } from 'react';
import shortid from 'shortid';
import { Button, Input, Label, Sector, Title } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    id: 0,
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
    this.setState({id: shortid.generate(),name:'', number:''})
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
                            name="number"
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