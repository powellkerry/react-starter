import React, { Component } from 'react';
import style from './style.css';

export default class ContentBlock extends Component {
    render() {
        return (
            <div className={`${style['content-block']} ${this.props.className}`} dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        )
    }
}
