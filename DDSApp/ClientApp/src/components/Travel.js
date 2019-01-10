import React, { Component } from 'react';
import TagRow from './ethernet/TagRow';

export class Travel extends Component {
    static displayName = Travel.displayName;

    render() {
        return (
            <div>
                <h1> Travel </h1>
                <TagRow/>
            </div>
        );
    }
}