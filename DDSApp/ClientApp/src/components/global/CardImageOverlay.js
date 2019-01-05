import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class CardImageOverlay extends Component {
    static displayName = CardImageOverlay.displayName; 
    render() {
        return (
            <Card inverse>
                <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{this.props.CardTitle}</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        )
    }
}

export default CardImageOverlay; 