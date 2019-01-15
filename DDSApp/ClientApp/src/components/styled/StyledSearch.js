import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.body`
    padding: 0;
    margin: 0;
    height: 50vh;
    width: 50%;
    border-radius: 50px;
    background: #07051a;
    `;

const SearchForm = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;

    &:hover {
    width: 200px;
    cursor: pointer
    }
    `;

const InputBox = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    padding: 0.5em;
    margin: 0.5em;
    display: none;
    font-size: 2em;
    border-radius: 20px;
    padding: 0 20px;

    &:hover {
        display: block;
    }

    `;





export class StyledSearch extends React.Component {
    static displayName = StyledSearch.displayName;
    render() {
        return (
            <Wrapper>
                <SearchForm>
                <InputBox type="text"/> <FontAwesomeIcon icon={faSearch} />
                </SearchForm>
            </Wrapper>
        );
    }
}