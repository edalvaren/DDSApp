import React, { Component } from 'react';
import { CardGroup } from 'reactstrap';
import DocCategory from './global/DocCategory';
import CardImageOverLay from './global/CardImageOverlay'; 

export class SpiralDocs extends Component {
    static displayName = SpiralDocs.displayName;
    render() {
        return (
            <div>
                <CardGroup>
                    <DocCategory CardTitle="By Application" CardText="(Freezer, HydroChiller, etc.." />
                    <DocCategory CardTitle="By Technology" CardText="DDS™/StructureSupported/SelfStacker/SideDrive" />
                    <DocCategory CardTitle="By OEM" />
                    <DocCategory CardTitle="By End User"/> 
                </CardGroup>
            </div>
        )
    }
}