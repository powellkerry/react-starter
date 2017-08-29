import React, { Component } from 'react';
import style from './style.css';

export default class Section extends Component {
    render() {
        return (
            <div className={`${style['section']} ${this.props.className}`}>
                <h2 className={`${style['section__title']}`}>{this.props.title}</h2>
                <p className={`${style['section__subtitle']}`}>{this.props.subTitle}</p>
                {this.props.components.map(function(component, index) {
                    var Comp = require(`../../components/${component.partialName}/index.js`).default;
                    return <Comp key={index} {...component}/>;
                })}
            </div>
        )
    }
}
