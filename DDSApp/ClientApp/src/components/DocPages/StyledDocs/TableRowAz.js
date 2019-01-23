import React from 'react';
import { Row, StRow, StLink } from '../../styled/StyledTable';
import ScoreBadge  from './ScoreBadge';
export function DecodeStringWithTrailing(base64String) {
    var stringLength = base64String.length - 1;
    var noTrail = base64String.substring(0, stringLength);

    return atob(noTrail);
}

 export function TextTruncate(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };


function DocumentRow(props){
    return (
        <StLink href={DecodeStringWithTrailing(props.docu.metadata_storage_path)}>{props.docu.metadata_storage_name} </StLink>
    )
}

function LocationRow(props){
    return (
        <StRow> {props.docu.locations.map(function (loc){
            return ( <ScoreBadge key={loc.length && loc}> {TextTruncate(loc, 10).slice(1,10)} </ScoreBadge>)
        })}   </StRow>
    )
}


function PeopleRow(props){
    return (
        <StRow>{props.docu.people.map(function (person) {
            return (<ScoreBadge key={person.length && person}> {TextTruncate(person, 25)} </ScoreBadge>)
        })}</StRow>
    )
}

function OrganizationRow(props){
    return(
        <StRow>{props.docu.organizations.map(function (org) {
            return (<ScoreBadge key={org.length && org}> {TextTruncate(org, 10)} </ScoreBadge>)
        })}</StRow>
    )
}

function TableRowAz(props) {
    return (
        <tbody>
            {props.docs.results.map(function (doc) {
                return (<Row key={doc.document + doc.document.metadata_storage_name}>
                    <DocumentRow docu={doc.document} />
                    <LocationRow docu={doc.document}/>
                    <PeopleRow docu={doc.document}/>
                    <OrganizationRow docu={doc.document}/>
                </Row>
                )
            })
            }
        </tbody>
    )
}

export default TableRowAz;