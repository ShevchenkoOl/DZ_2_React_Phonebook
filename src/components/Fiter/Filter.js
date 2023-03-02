import { Component } from 'react';
import { Input, Label } from './ContactForm.styled';

export class Filter extends Component {
//   state = {
//     id: 0,
//     name: '',
//     number:''
//   }


//   handleChange = (event) => {
//     const { name, value } = event.target
  
//     this.setState({
//       [name]: value,
//     })
    
//   }
  
  render() {
    //const { name } = this.state;
  
    return(
           <form>
                <Label>Find contacts by name
                        <Input
                            type="text"
                            name="filter"
                            id="filter"
                            //value={name}
                            onChange={this.handleChange}
                            />
                       </Label>
                    </form>
    );
  }
}