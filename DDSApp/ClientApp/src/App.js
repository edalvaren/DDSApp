import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Chat } from './components/Chat';
import { Travel } from './components/Travel';
import { SpiralDocs } from './components/SpiralDocs';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/spiralDocs' component={SpiralDocs}/> 
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/chat' component={Chat} />
                <Route path='travel' component={Travel} />
            </Layout>
        );
    }
}
