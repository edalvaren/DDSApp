import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardLink, Col } from 'reactstrap';


/*
*Class Component to represent a Document Gategory. //#endregion
*@param docLink: link that the card will open //#endregion
*@param cateory
*/
class DocCategory extends Component {
    static displayName = DocCategory.displayName;

    constructor(props) {
        super(props);
        this.state = {
            docLink: "",
            category: ""
        };
    }

    render() {
        return (
            <Col sm="6">
                <Card body>
                    <center>
                        <CardTitle>{this.props.CardTitle}</CardTitle>
                        <CardText>{this.props.CardText}</CardText>
                        <CardLink href={this.props.docLink}> Browse </CardLink>
                    </center>
                </Card>
            </Col>)
    }
}
export default DocCategory;