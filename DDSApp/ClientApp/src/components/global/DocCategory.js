import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

class DocCategory extends Component {
    static displayName = DocCategory.displayName;
    render() {
        return (
            <Col sm="6">
                <Card body>
                    <center>
                        <CardTitle>{this.props.CardTitle}</CardTitle>
                        <CardText>{this.props.CardText}</CardText>
                        <Button>Browse</Button>
                    </center>
                </Card>
            </Col>)
    }
}
export default DocCategory; 