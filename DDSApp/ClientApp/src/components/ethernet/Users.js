import React, { Component } from 'react';

export default class Users extends Component {
    static displayName = Users.displayName;
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Erick' },
                { id: 2, name: 'Wyles' },
                { id: 3, name: 'Willis' },
                { id: 4, name: 'Nala' }]
            , loading: true
        };
    }

    render() {
        return (
            <div className='panel panel-default'>
                <div className='panel-body'>
                    <h4> Users Online</h4>
                    <ul className='chat-users'>
                        {this.state.users.map(user =>
                            <li key={user.id}>{user.name}</li>
                        )}
                    </ul>

                </div>
            </div>
        )
    };


}