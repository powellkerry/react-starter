import React, { Component } from 'react';
import style from './style.css';

export default class HelloWorld extends Component {
    render() {
        return (
            <h1 className={`${style['hello-world']} ${this.props.className}`}>{this.props.title}</h1>
        )
    }
}
