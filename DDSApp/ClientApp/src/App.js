import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { SpiralDocs } from './components/DocPages/SpiralDocs';
import { Search } from './components/Search'
import { DocumentList } from './components/DocPages/DocumentList';
import BrowseDocs from './components/DocPages/BrowseDocs';
import { Admin } from './components/admin/Admin';
import { SpiralUsers } from './components/admin/SpiralUsers';
import {RsDrinx} from './components/ethernet/RsDrinx';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                {/* Components related to documentation  */}
                <Route path='/spiralDocs' component={SpiralDocs} exact/>
                {/* <Route path='/spiralDocs/manuals/:category' render={(props) => <DocumentList {...props} category={"Design Guidelines"}/>}/> */}
                <Route path='/spiralDocs/manuals/:category' component={DocumentList} />
                {/* <Route path='/spiralDocs/manuals/:topic' component={DocumentList} /> */}
                <Route path='/spiralDocs/browse' component={BrowseDocs}/>

                {/* Ethernet Connectivity Components*/ }
                <Route path='/RsDrinx' component={RsDrinx}/>

                {/* Admin Panel Components */}
                <Route path='/admin' component={Admin}/>
                <Route path='/admin/spiralUsers' component={SpiralUsers}/>
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/search' component={Search} />

            </Layout>
        );
    }
}
