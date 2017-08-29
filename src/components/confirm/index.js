import React, { Component } from 'react';
import style from './style.css';

export default class Icon extends Component {
    render() {
        return (
            <div className={`${style['confirm']}`}>
                <h3 className={`${style['confirm__title']}`}>{this.props.title}</h3>
                <div className={`${style['confirm__message']}`} dangerouslySetInnerHTML={{__html: this.props.message}}></div>
                <div className={`${style['confirm__controls']}`}>
                    <button type="button" className={`${style['confirm__continue']}`} onClick={this.props.continue}>{this.props.continueText}</button>
                    <button type="button" className={`${style['confirm__cancel']}`} onClick={this.props.cancel}>{this.props.cancelText}</button>
                </div>
            </div>
        )
    }
}
