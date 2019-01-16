import React, { Component } from 'react';
import Table from '../styled/StyledTable';
import TableRows from './StyledDocs/TableRows';

const tableHead = ["Title", "Topic", "Category"];
export class DocumentList extends Component {
    static displayName = DocumentList.displayName;
    constructor(props) {
        super(props);
        this.state = { docs: [], loading: true , category: '', tableHead: []};
    }

    componentDidMount () {
        const {category} = this.props.match.params;
        fetch(`http://localhost:5000/api/spiraldocs/${category}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ docs: data, loading: false, category: category})
        });
    }



    static renderDocumentTable(docs) {
        return (
            <Table head={tableHead}>
              <TableRows docs={docs}></TableRows>
                        </Table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : DocumentList.renderDocumentTable(this.state.docs);

        return (
            <div>
                <h1>Spiral Docs</h1>
                {contents}
            </div >
        );


    }
}