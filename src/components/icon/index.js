import React, { Component } from 'react';
import style from './style.css';

export default class Icon extends Component {
    render() {
        return (
            <svg className={`${style.icon} ${this.props.className || ''} ${style['icon__'+this.props['icon-name']]}`} viewBox="0 0 32 32" preserveAspectRatio="xMinYMin meet">
            	<use xlinkHref={`/missionaries/static/assets/icons.svg#${this.props['icon-name']}`}></use>
            </svg>
        )
    }
}
