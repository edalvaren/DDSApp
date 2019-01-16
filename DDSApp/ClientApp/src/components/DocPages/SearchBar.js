import React, { Component, forwardRef, useRef, useImperativeMethods } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DocSearchResults } from './DocSearchResults';
import { Wrapper, InputBox, SearchForm, SearchButton } from './StyledDocs/StyledSearch'

export class SearchBar extends Component {
    static displayName = SearchBar.name;
    constructor(props) {
        super(props);
        this.state = { value: '', docs: [], loading: true, searchQuery: '', loadSearch: false};
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.docResults = React.createRef();
    }

    handleSubmitSearch(event) {
        this.setState({loadSearch: true, searchQuery: this.state.value})
        event.preventDefault();

    }

    onClick = (e) => {
        this.setState({searchQuery: this.state.value})
        this.docResults.current.updateComponent(this.state.searchQuery);
        e.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }

    static RenderSearchResults(docs) {

    }

    render() {
        return (
            <div>
            <div className="media-body">
                <Wrapper>
                    <SearchForm>
                        <InputBox type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
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


