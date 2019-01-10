import React, { Component } from 'react';

class BrowseDocs extends Component{
    static displayName = BrowseDocs.displayName;
    constructor(props) {
        super(props);
        this.state = {
            docLink : "",
            category: ""
        };
    }
    render(){
        return(
            <div>
                <p>Browse Docs</p>
            </div>
        )
    }

}
export default BrowseDocs;