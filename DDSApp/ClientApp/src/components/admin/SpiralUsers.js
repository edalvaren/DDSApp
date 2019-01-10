import React, { Component } from 'react';

const API = 'http://localhost:5000/api/spiralusers/';

export class SpiralUsers extends Component {
    static displayName = SpiralUsers.displayName;
    constructor(props) {
        super(props);
        this.state = { users: [], loading: true , category: ''};
    }

    componentDidMount(){
        fetch(API)
        .then(response => response.json())
        .then(data => {
            this.setState({ users: data, loading: false })
        });
    }


    static renderUserTable(users) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.id}>
                            <td> {user.firstName}  {user.lastName} </td>
                            <td> {user.email}</td>
                            <td> {user.title}</td>
                        </tr>)}

                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : SpiralUsers.renderUserTable(this.state.users);

        return (
            <div>
                <h1> Spriral Users</h1>
                {contents}
            </div >
        );


    }
}