import React, { Component } from 'react';
import style from './style.css';

export default class CampaignLanding extends Component {
    render() {
        return (
            <div className={`${style['landing']}`}>
                {this.props.components.map(function(component, index) {
                    var Comp = require(`../../components/${component.partialName}/index.js`).default;
                    return <Comp key={index} {...component}/>;
                })}
            </div>
        )
    }
}
