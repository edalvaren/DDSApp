import React, {Component} from 'react';
import TripReportForm from '../components/forms/TripReportForm';
import axios from 'axios';

export class Create extends Component {
    constructor(props){
        super(props);
        this.state = { title: "Sample", name: "Your Name", category: "Installation Report", date: new Date(), fileToBeSent:[] }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    }

    categoryChangeHandler(e) {
        e.preventDefault();
        this.setState({ category: e.target.value })
    }

    nameChangeHandler(e) {
        e.preventDefault();
        this.setState({ name: e.target.value })
    }

    dateChangeHandler(e) {
        e.preventDefault();
        this.setState({ date: e.target.value })
    }

    fileSelectedHandler(e){
        e.preventDefault();
        this.setState({fileToBeSent: e.target.files[0]})
    }

    handleChange(e){
        e.preventDefault();
        this.setState({title: e.target.value});
    }

    handleSubmit(e)
    {
        e.preventDefault();
        var apiBaseUrl = "localhost:5000/api/FileUpload/UploadFile"
        if (this.state.fileToBeSent.length > 0) {
            var fileArray = this.state.fileToBeSent;
            let f = new FormData();
            for(var i in fileArray){
                f = new FormData();
                f.append("File", fileArray[i][0])
                axios.post(apiBaseUrl, f, {
                    headers: {'Content-Type': 'multipart/form-data'}
                });
            }
        alert("File Upload Completed");
        }
        else{
            alert("Please Select File First");
        }
    }

    render () {
        return(
            <TripReportForm titleValue={this.state.title}
                            nameValue={this.state.name}
                            dateValue={this.state.date}
                            categoryValue={this.state.category}
                            categoryChangeHandler={this.categoryChangeHandler}
                            nameChangeHandler={this.nameChangeHandler}
                            dateChangeHandler={this.dateChangeHandler}
                            fileSelectedHandler={this.fileSelectedHandler}
                             handleChange={this.handleChange}
                            onSubmit={this.handleSubmit} />
        )
    }
}

