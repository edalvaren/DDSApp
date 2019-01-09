import React, { Component } from 'react';
import { CardGroup, Row } from 'reactstrap';
import DocCategory from "./DocCategory"

export class SpiralDocs extends Component {
    static displayName = SpiralDocs.displayName;
    render() {
        return (
            <div>
               <h2> Reports </h2>
                <Row>
                    <br/>
                    <CardGroup>
                        <DocCategory CardTitle="By Application" CardText="(Freezer, HydroChiller, etc.." />
                        <DocCategory CardTitle="By Technology" CardText="DDS™/StructureSupported/SelfStacker/SideDrive" />
                        <DocCategory CardTitle="By OEM" />
                        <DocCategory CardTitle="By End User" />
                    </CardGroup>
                </Row>
                <h2> Manuals </h2>
                <Row>
                    <br/>
                        <CardGroup>
                        <DocCategory CardTitle="Design Guidelines"/>
                        <DocCategory CardTitle="Controls Manuals" docLink="spiralDocs/Controls"/>
                        <DocCategory CardTitle="Schematics and Drawings" />
                        <DocCategory CardTitle="Training Presentations" />
                    </CardGroup>
                </Row>
            </div>
        )
    }
}