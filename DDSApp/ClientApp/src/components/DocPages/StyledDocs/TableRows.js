import React from 'react';
import {Row, StRow } from '../../styled/StyledTable';

function TableRows(props){
    return (
        <tbody>
            {props.docs.map(function (doc, i) {
                return (<Row key={doc.id}>
                    <StRow as="a" href={props.props1}>{doc.title} </StRow>
                       <StRow> {doc.topic} </StRow>
                        <StRow>{doc.category} </StRow>
                </Row>
                )
            })
            }
        </tbody>
    )
}

export default TableRows;