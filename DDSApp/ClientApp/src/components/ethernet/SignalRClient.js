import React, { Component } from 'react';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';


class SignalRClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            connection: null,
            connected: false,
        };

    }

    componentDidMount() {
        this.connection = new HubConnectionBuilder().withUrl('/chatter').configureLogging(LogLevel.Information).build();
        this.connection.start().catch(err => console.error(err, 'red'));
    }

    registerMessageAdded(messageAdded) {
        this.connection.on("ReceiveMessage", (message) => {
            messageAdded(message);
        }); 
    }

    sendMessage(message) {
        this.connection.invoke('SendMessage', message); 
    }


    render () {
        return (
            <div> </div>
        )
    }
}

export default SignalRClient;