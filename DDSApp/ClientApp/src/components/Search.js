import React, { Component } from 'react';

export class Search extends Component {
    static displayName = Search.displayName;
    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
        fetch('http://localhost:5000/api/spiralusers/')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, loading: false })
            });
        }
    static renderUsersTable(users) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th> Team </th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                        <td> {user.firstName}</td>
                        <td> {user.lastName} </td>
                        <td> {user.title}</td>
                        <td> {user.team} </td>
                        <td> {user.email} </td>

                        </tr> )}

                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Search.renderUsersTable(this.state.users);

        return (
            <div>
                <h1>Spiral Team</h1>
                {contents}
            </div >
        );


    }
}