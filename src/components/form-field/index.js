import React, { Component } from 'react';
import style from './style.css';

export default class FormField extends Component {
    render() {
        return (
            <div className={`${style['form-field']} ${this.props.className}`}>
                <label className={`${style['form-field__label']}`} htmlFor={this.props.name}>
                    {this.props.label}
                </label>
                {(() => {
                    switch(this.props.type) {
                        case 'textarea':
                            return (<textarea className={`${style['form-field__input']}`} rows="6" id={this.props.name} name={this.props.name} value={this.props.value}></textarea>)
                        case 'select':
                            return (
                                <div className={`${style['form-field__select']}`}>
                                    <select className={`${style['form-field__input']}`} id={this.props.name} name={this.props.name}>
                                        {
                                            this.props.options.map((option,index) => (
                                                <option key={index} value={option.id}>{option.text}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )
                        default:
                            return this.props.disabled ?
                                (<input className={`${style['form-field__input']}`} id={this.props.name} type={this.props.type} name={this.props.name} disabled value={this.props.value}/>) :
                                (<input className={`${style['form-field__input']}`} id={this.props.name} type={this.props.type} name={this.props.name} value={this.props.value}/>)
                    }
                })()}
            </div>
        )
    }
}
