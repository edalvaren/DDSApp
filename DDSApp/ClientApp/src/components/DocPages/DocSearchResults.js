import React, { Component } from 'react';
import axios from 'axios';


export class DocSearchResults extends Component {
    static displayName = DocSearchResults.displayName;
    state = {
        blobs: []
    }

    componentDidMount() {
        axios.get('')
            .then(res => {
                const blobs = res.data;
                this.setState({ blobs })
            })
    }

    render() {
        return (
            <div>
                <p> Document search results to appear here </p> 
            </div>
        )
    }

}
    //constructor(props) {
    //    super(props);
    //    this.state = { users: [], loading: true };
    //    fetch('http://localhost:5000/api/spiralusers/')
    //        .then(response => response.json())
    //        .then(data => {
    //            this.setState({ users: data, loading: false })
    //        });
    //}



//    static renderFilesTable(files) {
//        return (
//            <table className='table table-striped'>
//                <thead>
//                    <tr>
//                        <th>First Name</th>
//                        <th>Last Name</th>
//                        <th>Title</th>
//                        <th> Team </th>
//                        <th> Email </th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {files.map(file =>
//                        <tr key={file.id}>
//                            <td> {file.firstName}</td>
//                            <td> {file.lastName} </td>
//                            <td> {file.title}</td>
//                            <td> {file.team} </td>
//                            <td> {file.email} </td>

//                        </tr>)}

//                </tbody>
//            </table>
//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading...</em></p>
//            : DocSearchResults.renderFilesTable(this.state.files);

//        return (
//            <div>
//                <h1>Spiral Team</h1>
//                {contents}
//            </div >
//        );


//    }
//}
