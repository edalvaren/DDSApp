import React, { Component } from 'react';
import { Row } from 'reactstrap';

export class Error extends Component {
    static displayName = Error.displayName;
    render() {
        return (
            <div>
               <h2> Error </h2>
                <Row>
                    <h3> Error, Path does not exist. </h3>
                </Row>
            </div>
        )
    }
}