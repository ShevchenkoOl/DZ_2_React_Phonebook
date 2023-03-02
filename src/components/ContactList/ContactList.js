import React from 'react';
import { Title } from '../ContactForm/ContactForm.styled';


const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <ul key={index}>
                <li>{row.name}</li>
                <li>{row.number}</li>
                
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



