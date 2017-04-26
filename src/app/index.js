import React, { Component } from 'react';
import Landing from '../layouts/landing';


export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        switch (this.props.partialName) {
            case 'landing':
                return (<Landing {...this.props}/>);
                break;
            default:
                return (<Landing {...this.props}/>);
                break;
        }
    }
}
