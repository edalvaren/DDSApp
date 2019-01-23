﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup, Row, Col, Button} from 'reactstrap';
import DocCategory from "./DocCategory"
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-weight: bold;
    color: white;
`;


export class SpiralDocs extends Component {
    static displayName = SpiralDocs.displayName;
    render() {
        return (
            <div>
               <h2> Reports </h2>
                <Row>
                    <br/>
                    <Col>
                    <CardGroup>
                        <DocCategory CardTitle="By Application" CardText="(Freezer, HydroChiller, etc.." />
                        <DocCategory CardTitle="By Technology" CardText="DDS™/StructureSupported/SelfStacker/SideDrive" />
                        <DocCategory CardTitle="By OEM" />
                        <DocCategory CardTitle="By End User" />
                    </CardGroup>
                    </Col>
                </Row>
                <h2> Manuals </h2>
                <Row>
                    <br/>
                    <Col>
                    <CardGroup>
                        <DocCategory CardTitle="Design Guidelines" category="Design Guidelines " docLink="spiralDocs/manuals/Design Guidelines" />
                        <DocCategory CardTitle="Controls Manuals" category="TCP" docLink="spiralDocs/manuals/TCP"/>
                        <DocCategory CardTitle="Technical Guides and Misc. Documents" />
                        <DocCategory CardTitle="Training Presentations" />
                    </CardGroup>
                    </Col>
                </Row>
                <br />
                <p> Something missing? Add it to the Spiral Docs Database. <br/>
                    <Button type> <StyledLink to='/spiralDocs/create'>  Click to Upload a New Document </StyledLink>   </Button> </p>
            </div>
        )
    }
}