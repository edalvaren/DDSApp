import styled from 'styled-components';
import { themeDark, themeMedium, themeBlue } from '../../styled/utils/colors';
import React from 'react';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';

const InputWrapper = styled.form`
    padding: 10px;
    margin: 10px;
    width: 100%;
    background-color: ${themeDark};
    border-radius: 3px;
`;

const InputBox = styled.input`
    align-self: right;
    padding: 0.5em;
    margin: 0.5em;
    border-color: ${themeBlue};
    border-style: ${themeMedium};
    font-style: bold;
    background-color: white;
    color: ${themeBlue};
`;

const StyledInput = ({children, clickHandler, handleChange}) => (
    <InputWrapper encType="multiform/form-data" onSubmit={clickHandler}>
    <InputGroup>
    <InputBox type='file' multiple={true} onChange={handleChange} accept='.pdf'/>
    <InputGroupAddon addonType="append"><Button type="submit"> Upload </Button> </InputGroupAddon>
    </InputGroup>
    </InputWrapper>
)

export default StyledInput;