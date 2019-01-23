import React, { Component } from 'react';
import StyledInput from './StyledInput';
import axios from 'axios';

class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = { filesToBeSent: [], selectedFile: null, loaded: 0, servResp: null }
        this.onUpload = this.onUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUploadClick = this.handleUploadClick.bind(this);
    }

    // Handles Form Submitted event
    onUpload(e) {
        e.preventDefault();
        const myFile = this.state.files[0];
        const data = new FormData();
        data.append('file', myFile);
        // Now we call our server Endpoint
        fetch('http://localhost:5000/api/FileUpload/UploadFile', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.text()
            .then(text => console.log(text));
            // response.json().then((body) => {
            //     this.setState({ servResp: body });
            // })
        });
    }

    handleUploadClick(event) {
        event.preventDefault();
        var apiBaseUrl = "http://localhost.com:5000/api/FileUpload/UploadFile"
        if (this.state.filesToBeSent.length > 0) {
            var filesArray = this.state.filesToBeSent;
            let f = new FormData();
            for (var i in filesArray) {
                //console.log("files",filesArray[i][0]);
                f = new FormData();
                f.append("File", filesArray[i][0])
                axios.post(apiBaseUrl, f, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            alert("File upload completed");
        }
        else {
            alert("Please select files first");
        }
    }


    handleChange(event){
        event.preventDefault();
        this.setState({filesToBeSent: event.target.value });
    }


    render() {
        return (
            <div>
            <StyledInput handleChange={this.handleChange} />
            </div>
        )
    }
}

export default UploadForm;