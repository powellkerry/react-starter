import React, { Component } from 'react';
import style from './style.css';

export default class PageTitle extends Component {
    render() {
        return (
            <h1 className={`${style['page-title']} ${this.props.className}`}>{this.props.title}</h1>
        )
    }
}
