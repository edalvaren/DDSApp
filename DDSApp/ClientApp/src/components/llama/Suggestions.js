import React from 'react';

const Suggestions = (props) => {
const options = props.results.map(r => (
        <li key={r.firstName}>
        {r.firstName}
        </li>
    ));
    return <ul> {options} </ul>
}
export default Suggestions;