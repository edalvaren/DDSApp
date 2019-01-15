import React, { Component } from 'react';
import { Table } from 'reactstrap'
import './Documents.css'


export class DocumentList extends Component {
    static displayName = DocumentList.displayName;
    constructor(props) {
        super(props);
        this.state = { docs: [], loading: true , category: ''};

    }

    componentDidMount () {
        const {category} = this.props.match.params;
        fetch(`http://localhost:5000/api/spiraldocs/${category}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ docs: data, loading: false, category: category })
        });
    }



    static renderDocumentTable(docs) {
        return (
            <Table striped bordered docTable>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {docs.map(doc =>
                        <tr key={doc.id}>
                            <td> <a href={doc.url}> {doc.title} </a> </td>
                            <td> {doc.topic}</td>
                            <td> {doc.category} </td>
                        </tr>)}

                </tbody>
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