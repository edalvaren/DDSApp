import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SignalRController from './SignalController'; 

export class RsDrinx extends Component {
    static displayName = RsDrinx.displayName;

    constructor(props) {
        super(props);
        this.state = {
            docLink: "",
            category: ""
        };
    }

    render() {
        return (
            <Container>
                    <SignalRController> </SignalRController>
            </Container>

        )
    };
}
