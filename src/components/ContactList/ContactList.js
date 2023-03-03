
import React from 'react';
import { List, Item, Button} from './ContactList.styled';
// import{Filter} from '../components/Filter/Filter'

export const ContactList = ({ contacts, onDeleteContact })=>{
    return (
      <List>
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
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              type="button"
              onClick={() => onDeleteContact(id)}>Delete</Button>
          </Item>
        ))}
      </List>
    );
  }


