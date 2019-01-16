import React from 'react';
import { Row, StRow } from '../../styled/StyledTable';

export function DecodeStringWithTrailing(base64String) {
    var stringLength = base64String.length - 1;
    var noTrail = base64String.substring(0, stringLength);

    return atob(noTrail);
}


function TableRowAz(props) {
    return (
        <tbody>
            {props.docs.results.map(function (doc) {
                return (<Row key={doc.document}>
                    <StRow as="a" href={DecodeStringWithTrailing(doc.document.metadata_storage_path)}>{doc.document.metadata_storage_name} </StRow>
                    <StRow> {doc.document.locations} </StRow>
                    <StRow>{doc.document.people} </StRow>
                </Row>
                )
            })
            }
        </tbody>
    )
}

export default TableRowAz;