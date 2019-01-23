import React, { Component } from 'react';
import '../styles/index.scss';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1 className='main-title'> Spiral App </h1>
        <h2> STG Document Site  </h2>
        <div>
          <img className="img-fluid" src="./dds-lg.jpg" alt="background" />
        </div>
        <p> Features</p>
        <ul>
          <li><strong>Searchable Documentation</strong>. A single place <code>to search </code> and <code> download </code> reports, spiral analysis, manuals, etc. </li>
          <li><strong>Remote Connectivity </strong>. You can enter a <code>support request online</code> and schedule a remote support session from anywhere.</li>
        </ul>
      </div>
    );
  }
}
