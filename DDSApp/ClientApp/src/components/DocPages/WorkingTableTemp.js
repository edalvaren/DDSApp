// import React, { Component } from 'react';
// import { Table } from 'reactstrap';
// import styled from 'styled-components';


// /*
// **Styled Table
// */


// export class TableTemp extends Component {
//     static displayName = DocSearchResults.displayName;
//     constructor(props) {
//         super(props);
//         this.state = { docs: [], loading: true, searchQuery: '', searching: false };
//     }



//     componentDidUpdate(prevProps) {
//         if (this.props.loadSearch !== prevProps.loadSearch) {
//             if (this.props.searchQuery !== prevProps.searchQuery) {
//                 this.setState({ loadSearch: this.props.loadSearch })
//                 this.setState({ searchQuery: this.props.searchQuery })
//                 fetch(`http://localhost:5000/api/search/${this.state.searchQuery}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         this.setState({ docs: data, loading: false })
//                     });
//             }
//         }
//     }


//     static renderDocumentTable(docs) {
//         return (
//             <Table striped bordered>
//                 <thead>
//                     <tr>
//                         <th>Document Name</th>
//                         <th>Key Phrases </th>

//                         <th>People</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {docs.results.map(doc =>
//                         <tr key={doc.document}>
//                             <td> <a href={DocSearchResults.DecodeStringWithTrailing(doc.document.metadata_storage_path)}>

//                                 {doc.document.metadata_storage_name}</a>  </td>
//                             <td> {doc.document.locations.map((place) =>
//                                 <ul> <li key={place.toString()}> {place} </li></ul>)}</td>
//                             <td> {doc.document.keyphrases.map((person) =>
//                                 <ul> <li> {person} </li></ul>)}
//                             </td>
//                             <td>
//                                 {doc.document.people.map((person) =>
//                                     <ul> <li> {person} </li></ul>)}
//                             </td>

//                         </tr>)}

//                 </tbody>
//             </Table>
//         );
//     }

//     /*
//     * Removes the trailing character from a string and decodes
//     *@param base64String string to be decoded
//     */
//     static DecodeStringWithTrailing(base64String) {
//         var stringLength = base64String.length - 1;
//         var noTrail = base64String.substring(0, stringLength);

//         return atob(noTrail);
//     }



//     render() {
//         let contents = this.state.loading
//             ? <p> <em> ...Loading </em> </p>
//             : DocSearchResults.renderDocumentTable(this.state.docs);
//         return (

//             <div>
//                 {contents}
//             </div>
//         );
//     }

// }




