import React, { Component } from 'react';

export class DocumentList extends Component {
    static displayName = DocumentList.displayName;
    constructor(props) {
        super(props);
        this.state = { docs: [], loading: true };
        fetch('http://localhost:5000/api/spiraldocs/')
            .then(response => response.json())
            .then(data => {
                this.setState({ docs: data, loading: false })
            });
    }
    static renderDocumentTable(docs) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Category</th>
                        <th> Last Updated </th>
                    </tr>
                </thead>
                <tbody>
                    {docs.map(doc =>
                        <tr key={doc.id}>
                            <td> <a href={doc.url}> {doc.title} </a> </td>
                            <td> {doc.topic}</td> 
                            <td> {doc.category} </td>
                            <td> {doc.lastUpdate} </td>

                        </tr>)}

                </tbody>
            </table>
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