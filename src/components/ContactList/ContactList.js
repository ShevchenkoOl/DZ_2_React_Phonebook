import React from 'react';
import { Title } from '../ContactForm/ContactForm.styled';


const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                
            </tr>
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



