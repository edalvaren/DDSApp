import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SpiralDocs } from './components/DocPages/SpiralDocs';
import { DocumentList } from './components/DocPages/DocumentList';
import { Admin } from './components/admin/Admin';
import { SpiralUsers } from './components/admin/SpiralUsers';
import { SearchBar } from './components/DocPages/SearchBar';
import { createGlobalStyle } from "styled-components";
import {Create} from './views/Create';

export const GlobalStyles = createGlobalStyle`
  h1 {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
  h2 {
     @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', serif  };
`

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
            <GlobalStyles/>
                <Route exact path='/' component={Home} />
                {/* Components related to documentation  */}
                <Route path='/spiralDocs' component={SpiralDocs} exact />
                {/* <Route path='/spiralDocs/manuals/:category' render={(props) => <DocumentList {...props} category={"Design Guidelines"}/>}/> */}
                <Route path='/spiralDocs/manuals/:category' component={DocumentList} />
                <Route path='/spiralDocs/create' component={Create}/>
                {/* <Route path='/spiralDocs/manuals/:topic' component={DocumentList} /> */}
                    {/* Ethernet Connectivity Components*/ }

                    {/* Admin Panel Components */}
                <Route path='/admin' component={Admin}/>
                <Route path='/admin/spiralUsers' component={SpiralUsers} />
                <Route path='/search' component={SearchBar} />

            </Layout>
        );
    }
}
