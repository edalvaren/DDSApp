import React, { Component } from 'react';

export class SearchBar extends Component {
    static displayName = SearchBar.name;

    constructor(props) {
        super(props);
        this.state = { searchResults: [], loading: true };
        this.searchButtonClicked = this.searchButtonClicked.bind(this);
        // This Binding is necessary to make 'this' work in the callback

        fetch('http://localhost:5000/search/search/')
            .then(response => response.json())
            .then(data => {
                this.setState({ searchResults: data, loading: false });
            });
    }



    searchButtonClicked(){
        this.setState()
    }

    static RenderSearchResults (searchResults){

    }

    render () {
        return (
            <div>

                <button onClick={this.searchButtonClicked}> </button>

            </div>
        )
    }
}


