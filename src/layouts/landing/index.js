import React, { Component } from 'react';
import style from './style.css';

export default class Landing extends Component {
    render() {
        return (
            <div className={`${style['landing']}`}>
                <div className={`${style.landing__container}`}>
                    {this.props.components.map(function(component, index) {
                        var Comp = require(`../../components/${component.partialName}/index.js`).default;
                        return <Comp key={index} {...component}/>;
                    })}
                </div>
            </div>
        )
    }
}
