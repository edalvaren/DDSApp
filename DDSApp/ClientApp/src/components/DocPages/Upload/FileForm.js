import React from 'react';


class FileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {filesToBeUploaded: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({filesToBeUploaded: event.target.files[0]});
    }

    handleSubmit(event){
        event.preventDefault();
        alert(this.state.filesToBeUploaded[0].files);
    }
    render () {

        return (
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <label> Upload File: </label>
            <input type="file" onChange={this.handleChange} accept=".pdf" />
            <input type="submit"/>
            </form>
        )
    }


}

export default FileForm;


