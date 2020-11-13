import React from 'react';
import { InputGroup, InputGroupAddon, Input,Button } from 'reactstrap';

const SearchBar = (props) => {
  return (
    <div>
      
      <InputGroup>
        <Input />
            <InputGroupAddon addonType="append"><Button>Validate</Button>     
        </InputGroupAddon>
      </InputGroup>
      
    </div>
  );
};

export default SearchBar;