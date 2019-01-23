import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DocSearchResults } from './DocSearchResults';
import { Wrapper, InputBox, SearchForm, SearchButton } from './StyledDocs/StyledSearch'

export class SearchBar extends Component {
    static displayName = SearchBar.name;
    constructor(props) {
        super(props);
        this.state = { value: '', docs: [], loading: true, searchQuery: '', loadSearch: false };
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.docResults = React.createRef();
        this.updateDocs = this.updateDocs.bind(this);
    }

    handleSubmitSearch(event) {
        this.setState({ loadSearch: true, searchQuery: this.state.value })
        event.preventDefault();

    }

    onClick = (e) => {
        e.preventDefault();
        this.docResults.current.updateComponent(this.state.value);

    }

    updateDocs(){
        this.docResults.current.updateComponent(this.state.searchQuery);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
        }

    static RenderSearchResults(docs) {

    }

    render() {
        return (
            <div>
                <div className="media-body">
                    <Wrapper>
                        <SearchForm>
                            <InputBox ref={elem => this.inputField = elem} type="text" onChange={this.handleChange} placeholder="Search" />
                            <SearchButton onClick={this.onClick}>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </SearchButton>
                        </SearchForm>
                    </Wrapper>
                </div>
                <div>
                    <DocSearchResults ref={this.docResults} searchQuery={this.state.value} loadSearch={this.state.loadSearch}></DocSearchResults>
                </div>
            </div>
        )

    }
}


