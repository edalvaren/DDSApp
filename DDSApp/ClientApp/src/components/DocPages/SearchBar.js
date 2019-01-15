import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DocSearchResults } from './DocSearchResults';

const Wrapper = styled.section`
        padding: 1em;
        margin: 1em;
        background-color: #094145;
        height: 10vh;
        width: 100%;
        border-radius: 10px;
        `;


const SearchForm = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 3s;
    width: 100%;
    height: 60px;
    background: white;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1.5px solid #05747C;
    padding: 5px;

    &:hover {
    width: 100%;
    cursor: pointer
    }
    `;

const InputBox = styled.input.attrs({
    type: 'text'
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    padding: 0.5em;
    margin: 0.5em;
    display: block;
    font-size: 18px;
    color: black;
    border-radius: 1px;
    padding: 0 5px;

    &:hover {
        background-color: lightgray;
    }
    `;

const SearchButton = styled.button`
    position: absolute;
  right: -50px;
  width: 40px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
`;




export class SearchBar extends Component {
    static displayName = SearchBar.name;
    constructor(props) {
        super(props);
        this.state = { value: '', docs: [], loading: true, searchQuery: '', loadSearch: false};
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmitSearch(event) {
        this.setState({loadSearch: true, searchQuery: this.state.value})
        event.preventDefault();

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.setState({loadSearch: false});
        event.preventDefault();
    }

    static RenderSearchResults(docs) {

    }




    render() {
        const loadSearch = this.state.loadSearch;
        let results; //#endregion

        if (loadSearch) {
            results = <DocSearchResults searchQuery={this.state.value}></DocSearchResults>;
        } else {
            results = <h3> Results will appear here</h3>
        }


        return (
            <div>
            <div className="media-body">

                <Wrapper>
                    <SearchForm>
                        <InputBox type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
                        <SearchButton onClick={this.handleSubmitSearch}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </SearchButton>
                    </SearchForm>
                </Wrapper>

            </div>

            <div>
                    <DocSearchResults searchQuery={this.state.searchQuery} loadSearch={this.state.loadSearch}></DocSearchResults>
            </div>
            </div>
        )

    }
}


