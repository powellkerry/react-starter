import React, { Component } from 'react';
import style from './style.css';

export default class FormComponent extends Component {
    render() {
        return (
            <form className={`${style['form']} ${this.props.className}`} action={this.props.submitUrl}>
                {this.props.components.map(function(component, index) {
                    var Comp = require(`../../components/${component.partialName}/index.js`).default;
                    return <Comp key={index} {...component}/>;
                })}
            </form>
        )
    }
}
