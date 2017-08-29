import React, { Component } from 'react';
import style from './style.css';

export default class Columns extends Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
        this.expand = () => {
            this.setState({expanded: true});
        }
    }
    render() {
        return (
            <div className={`${style['columns']} ${this.props.className}`}>
                {
                    this.props.columns.map((column, index)=>{
                        return <div key={index} data-order={index} className={`${style['columns__column']}`}>
                            {
                                column.expandable ? (
                                    <div className={`${style['columns__column__expand']}`} data-expanded={`${this.state.expanded}`}>
                                        <button type="button" className={`${style['columns__column__expand__button']}`} onClick={this.expand}>{column.expanderText}</button>
                                    </div>
                                )
                                : ''
                            }
                            <div className={`${style['columns__column__container']}`} data-expanded={`${column.expandable ? this.state.expanded : true}`}>
                                {
                                    column.components.map((component, index)=>{
                                        var Comp = require(`../../components/${component.partialName}/index.js`).default;
                                        return <Comp key={index} {...component}/>;
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                <div className={`${style['columns__footer']}`} data-expanded={`${this.state.expanded}`}>
                    <input className={`${style['columns__submit']}`}  type="submit" name={this.props.footer.submitText} value={this.props.footer.submitText}/>
                    <div className={`${style['columns__disclaimer']}`}>{this.props.footer.disclaimerText}</div>
                </div>
            </div>
        )
    }
}
