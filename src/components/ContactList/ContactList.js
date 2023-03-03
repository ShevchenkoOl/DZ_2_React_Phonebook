
import React from 'react';
import { List, Item, Button} from './ContactList.styled';
import{Filter} from '../components/Filter/Filter'

export const ContactList = ({ contacts, onDeleteContact })=>{
    return (
      <List>
        <Filter/>
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


