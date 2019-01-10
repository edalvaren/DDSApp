import React, { Component } from 'react';
import {Controller} from 'ethernet-ip';

export default class TagRow extends Component {
    static displayName = TagRow.displayName;
    constructor(props) {
        super(props);
        this.state = { tagVal: [], loading: true, plc: new Controller() };

    }

    static connectPlc(){
        this.plc = new Controller();
    }



    render() {
        return (
            <div>
                <h3> Tag </h3>
                <button onClick={TagRow.connectPlc()} >Connect</button>
            </div>
        )
    }
}

