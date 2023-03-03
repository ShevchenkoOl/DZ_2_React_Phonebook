import { Input, Label } from '../ContactForm/ContactForm.styled';

export function Filter ({value, onChange}) {
  
    return(
          <Label>Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search ..."
                />
            </Label>
    );
  }