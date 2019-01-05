
import React, { Component } from 'react';

function new_script(src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });
        document.body.appendChild(script);
    })
};
var chatScript = new_script('../scripts/signal.js');

export class Chat extends Component {
    static displayName = Chat.name;

    constructor(props) {
        super(props);
        this.state = {
            status: "start"
        };
    }
    do_load = () => {
        var self = this;
        chatScript.then(function () {
            self.setState({ 'status': 'done' });
        }).catch(function () {
            self.setState({ 'status': 'error' });
        })
    }

    render() {
        var self = this;
        if (self.state.status === 'start') {
            self.state.status = 'loading';
            setTimeout(function () {
                self.do_load()
            }, 5000);
        }
        return (
                <div className="container">
                <div>{self.state.status}   {self.state.status === 'done' && 'here you can use the script loaded'}</div>
                <div className="row">&nbsp;</div>
                <div className="row">
                    <div className="col-6">&nbsp;</div>
                    <div className="col-6">
                        User..........<input type="text" id="userInput" />
                        <br />
                        Message...<input type="text" id="messageInput" />
                        <input type="button" id="sendButton" value="Send Message" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">&nbsp;</div>
                    <div className="col-6">
                        <ul id="messagesList"></ul>
                    </div>
                </div>
            </div>
        );
    }
}
