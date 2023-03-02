import React from 'react';
import { Title, Button } from '../ContactForm/ContactForm.styled';


const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <ul key={index}>
                <li>{row.name} {row.number}</li>
                <Button type="button">Delete</Button>

            </ul>
        );
    });

    return <tbody>{rows}</tbody>;
}

export const ContactList = (props) => {
    const { characterData} = props;
        return (
          <Title>Contacts
            <table>
                <TableBody characterData={characterData}/>
            </table>
            </Title>
        );
}



