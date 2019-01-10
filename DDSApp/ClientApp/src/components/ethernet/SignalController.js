import React, { Component } from 'react';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { Col, Row, Container, ListGroup, ListGroupItem } from 'reactstrap';

var transport = HttpTransportType; 
class SignalRController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            message: '',
            connected: false,
            listMessages: []
        };
        this.connection = new HubConnectionBuilder().withUrl('http://127.0.0.1:5000/chatter', transport).build();
        this.connection.start();
        this.netflix.start();
        this.connection.on("ReceiveMessage", (user, message) => this.onMessageReceived(user, message)); 
        this.latestMessage = ''; 
        this.onMessageReceived = this.onMessageReceived.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        //this.connection.on("ReceiveMessage", (user, message) => this.onMessageReceived(user, message));
    }

    onMessageReceived(user, message) {
        var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var encodedMsg = user + " says " + msg;
        this.setState({
            message: encodedMsg
        });
        this.ConcatMessages(encodedMsg); 
    }

    SendMessage(user, message) {
        this.connection.invoke("SendMessage", user, message).then(
            this.setState({
                message: message
            })); 
    }

    ConcatMessages(msg1) {
        var joined = this.state.listMessages.concat(msg1)
        this.setState(state => ({
            listMessages: joined
        }));
    }

    handleSubmit(event) {
 
        this.SendMessage('erick', this.state.message);
        this.ConcatMessages(this.state.message); 
        
        //this.state.listMessages.push(this.state.message); 
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleClick(e) {
        this.SendMessage('erick', ); 
        this.setState(state => ({
            user: 'erick',
            message: this.message
        }));
    }

    static MessageList(mess) {
        const messages = mess;
        const listMessages = messages.map((message) =>
            <li> {message} </li>
        );
        return (
            <ul> {listMessages} </ul>
        );
    }

    render() {
        let contents = SignalRController.MessageList(this.state.listMessages); 
        return (
            <Container>
                <Row> 
                    <Col xs="6">
                        <form onSubmit={this.handleSubmit}>
                            <label> User.......... </label><input type="text" />
                        <br />
                            Message...<input type="text" value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                            <button type="submit">Send Message</button>

                        </form> 
                    </Col>

                </Row>
            <Row>
                    &nbsp;
                        <ListGroup>
                        <ListGroupItem> {contents} </ListGroupItem>
                    </ListGroup>
                </Row>
            </Container>

        );
    }

}

export default SignalRController; 
