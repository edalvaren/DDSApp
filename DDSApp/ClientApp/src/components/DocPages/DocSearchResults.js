import React, { Component } from 'react';
import TableRowAz from './StyledDocs/TableRowAz';
import Table from '../styled/StyledTable';
/*
**Styled Table
*/


const DocResultsHead = ["Document Name", "Locations", "People", "Organizations"];


export class DocSearchResults extends Component {
    static displayName = DocSearchResults.displayName;
    constructor(props) {
        super(props);
        this.state = { docs: [], loading: true, searchQuery: '', searching: false };
    }


    updateComponent(query){
        this.setState({searchQuery: this.props.searchQuery});
        fetch(`http://localhost:5000/api/search/${this.state.searchQuery}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ docs: data, loading: false })
            });
        }


    componentDidUpdate(prevProps) {
        if (this.props.loadSearch !== prevProps.loadSearch) {
            if (this.props.searchQuery !== prevProps.searchQuery) {
                this.setState({ loadSearch: false })
                this.setState({ searchQuery: this.props.searchQuery })
                fetch(`http://localhost:5000/api/search/${this.state.searchQuery}`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ docs: data, loading: false })
                    });
            }
        }
    }



    static renderDocumentTable(docs) {
        return (
            <Table head={DocResultsHead} >
                <TableRowAz docs={docs}>

                </TableRowAz>
            </Table>
        );
    }

    /*
    * Removes the trailing character from a string and decodes
    *@param base64String string to be decoded
    */
    static DecodeStringWithTrailing(base64String) {
        var stringLength = base64String.length - 1;
        var noTrail = base64String.substring(0, stringLength);

        return atob(noTrail);
    }



    render() {
        let contents = this.state.loading
            ? <p> <em> ...Loading </em> </p>
            : DocSearchResults.renderDocumentTable(this.state.docs);
        return (

            <div>
                {contents}
            </div>
        );
    }

}




