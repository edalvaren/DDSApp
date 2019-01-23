import React from 'react';
import styled from 'styled-components';
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';





const StyledForm = styled(Form)`
    margin: 4px;

`;

function TitleRow(props)
{
    return (
        <FormGroup row>
            <Label for="Title" sm={2}>Title</Label>
            <Col sm={10}>
                <Input type="text" name="title" onChange={props.handleChange} id="TitleInput" value={props.titleValue} placeholder="Document Title" />
            </Col>
        </FormGroup>
    )
}

function NameRow(props){
    return (
        <FormGroup row>
            <Label for="Title" sm={2}>Your Name: </Label>
            <Col sm={10}>
                <Input type="text" onChange={props.nameChangeHandler} name="name" id="NameInput" value={props.nameValue} placeholder="Enter your name: " />
            </Col>
        </FormGroup>
    )
}

function CategoryRow(props){
    return (
        <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
        <Col sm={10}>
            <Input type="select"
                onChange={props.categoryChangeHandler}
                 value={props.categoryValue} name="category" id="CategoryInput" >
                <option> Start Up Report </option>
                <option> Troubleshoot Report </option>
                <option>  Health Check Report </option>
                <option> Installation Report </option>
            </Input>
        </Col>
    </FormGroup>
    )
}

function DateRow(props){
    return (
        <FormGroup row>
            <Label for="DateInput" sm={2}>Date</Label>
            <Col sm={10}>
                <Input
                    type="date"
                    name="date"
                    id="DateInput"
                    value={props.dateValue}
                    placeholder="date placeholder"
                    onChange={props.dateChangeHandler}
                />
            </Col>
        </FormGroup>
    )
}

function FileRow(props){
    return (
        <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
                <Input type="file" onChange={props.fileSelectedHandler} name="file" value={props.fileValue} id="exampleFile" />
                <FormText color="muted">
                    File must be PDF.
            </FormText>
            </Col>
        </FormGroup>
    )
}

function TripReportForm(props, {handleChange, onSubmit}){
   return (
    <StyledForm encType="multipart/form-data">
        <TitleRow titleValue={props.titleValue} handleChange={props.handleChange} />
        <NameRow nameValue={props.nameValue} nameChangeHandler={props.nameChangeHandler} />
        <CategoryRow categoryValue={props.categoryValue} categoryChangeHandler={props.categoryChangeHandler} />
        <DateRow dateValue={props.dateValue} dateChangeHandler={props.dateChangeHandler} />
        <FileRow fileSelectedHandler={props.fileSelectedHandler} fileValue={props.fileValue} multiple />
           <input type="submit" onSubmit={props.onSubmit} value="Submit" />
    </StyledForm>
)
}
export default TripReportForm;

