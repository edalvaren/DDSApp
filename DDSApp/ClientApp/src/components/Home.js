import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1> DDS Web App </h1>
    <h2> Spiral Tools Online</h2>
    <div className="imgbox">
    <img className="img-fluid" src="./dds-lg.jpg" alt="background"/>
    </div>
        <p>Current Web app features</p>
        <ul>
          <li><strong>Searchable Documentation</strong>. A single place <code>to search </code> and <code> download </code> reports, spiral analysis, manuals, etc. </li>
          <li><strong>Remote Connectivity </strong>. You can enter a <code>support request online</code> and schedule a remote support session from anywhere.</li>
        </ul>
      </div>
    );
  }
}
