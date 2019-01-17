import React from 'react';
import { Row, StRow } from '../../styled/StyledTable';
import ScoreBadge  from './ScoreBadge';
export function DecodeStringWithTrailing(base64String) {
    var stringLength = base64String.length - 1;
    var noTrail = base64String.substring(0, stringLength);

    return atob(noTrail);
}


function TableRowAz(props) {
    return (
        <tbody>
            {props.docs.results.map(function (doc) {
                return (<Row key={doc.document + doc.document.metadata_storage_name}>
                    <StRow as="a" href={DecodeStringWithTrailing(doc.document.metadata_storage_path)}>{doc.document.metadata_storage_name} </StRow>
                    <StRow> {doc.document.locations.map(function (loc){
                        return( <ScoreBadge key={loc.length && loc}>{loc}</ScoreBadge> )
                    })} </StRow>

                    <StRow>{doc.document.people.map(function (person) {
                    return( <ScoreBadge key={person.length && person}> {person} </ScoreBadge> )
                    })}</StRow>
                    <StRow>{doc.document.organizations.map(function (org) {
                        return (<ScoreBadge key={org.length && org}> {org} </ScoreBadge>)
                    })}</StRow>
                </Row>
                )
            })
            }
        </tbody>
    )
}

export default TableRowAz;