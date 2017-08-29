import React, { Component, renderComponent } from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import Icon from '../icon';
import Confirm from '../confirm';

export default class Referral extends Component {
    constructor(props) {
        super(props);
        this.state = {detailsExpanded: false};
        this.toggleDetails = () => {
            this.setState({detailsExpanded: !this.state.detailsExpanded});
        }

        this.confirmDelete = () => {
            this.referral.setAttribute('data-hidden', 'true');
            this.confirmation.setAttribute('data-hidden', 'false');
        }

        this.cancelDelete = () => {
            this.referral.setAttribute('data-hidden', 'false');
            this.confirmation.setAttribute('data-hidden', 'true');
        }

        this.delete = () => {
            this.setState({detailsExpanded: this.state.detailsExpanded || false, deleted: true});
        }
    }

    render() {

        return !this.state.deleted ? (
            <div className={`${style['referral']} ${this.props.className}`}>
                <div className={`${style['referral__container']}`} ref={(referral) => {this.referral = referral}}>
                    <h3 className={`${style['referral__name']}`}>{this.props.firstName} {this.props.lastName} <button className={`${style['referral__delete']}`} type="button" onClick={this.confirmDelete}><Icon icon-name="delete"></Icon></button></h3>
                    <div className={`${style['referral__status']}`}>{this.props.referralAssignedDateLabel} {this.props.referralAssignedDate}&#44; {this.props.referralStatusName}</div>
                    <div className={`${style['referral__mission']}`}>{this.props.missionNameLabel} {this.props.missionName}</div>
                    {
                        this.props.missionaries ? this.props.missionaries.map((missionary, key) => (
                            <div className={`${style['referral__missionary']}`} key={key}>
                                <img className={`${style['referral__missionary__image']}`} src={missionary.photoUrl}/>
                                <span className={`${style['referral__missionary__name']}`}>{missionary.genderCode} {missionary.firstName} {missionary.lastName}</span>
                            </div>
                        )) : ''
                    }
                    {
                        this.props.areaNumbers ? this.props.areaNumbers.map((number, key) => (
                            <a href={`tel:${number}`} className={`${style['referral__area-number']}`} key={key}>{number}</a>
                        )) : ''
                    }
                    <a href={`mailto:${this.props.areaEmail}`} className={`${style['referral__area-email']}`}>{this.props.areaEmail}</a>

                    <div className={`${style['referral__details']}`} data-expanded = {this.state.detailsExpanded}>
                        <div className={`${style['referral__details__container']}`}>
                            <section className={`${style['referral__section']}`}>
                                <header className={`${style['referral__section__header']}`}>{this.props.bishopLabel}</header>
                                <div className={`${style['referral__section__text']}`}>{this.props.bishopFirstName} {this.props.bishopLastName}</div>
                                <a href={`tel:${this.props.bishopPhone}`} className={`${style['referral__section__link']}`}>{this.props.bishopPhone}</a>
                            </section>

                            <section className={`${style['referral__section']}`}>
                                <header className={`${style['referral__section__header']}`}>{this.props.wardMissionLeaderLabel}</header>
                                <div className={`${style['referral__section__text']}`}>{this.props.wardMissionLeaderFirstName} {this.props.wardMissionLeaderLastName}</div>
                                <a href={`tel:${this.props.wardMissionLeaderPhone}`} className={`${style['referral__section__link']}`}>{this.props.wardMissionLeaderPhone}</a>
                            </section>

                            <section className={`${style['referral__section']}`}>
                                <header className={`${style['referral__section__header']}`}>{this.props.missionOfficeName}</header>
                                <a href={`tel:${this.props.missionOfficePhone}`} className={`${style['referral__section__link']}`}>{this.props.missionOfficePhone}</a>
                                <a href={`mailto:${this.props.missionOfficeEmail}`} className={`${style['referral__section__link']}`}>{this.props.missionOfficeEmail}</a>
                            </section>

                            <section className={`${style['referral__section']}`}>
                                <header className={`${style['referral__section__header']}`}>{this.props.meetinghouseLabel}</header>
                                <div className={`${style['referral__section__text']}`}>{this.props.unitName}</div>
                                <div className={`${style['referral__section__text']} ${style['referral__space']}`}>{this.props.unitMeetingTimes}</div>
                                <a target="_blank" href={`https://maps.google.com/?q=${this.props.unitAddress}`} className={`${style['referral__section__link']}`}>{this.props.unitAddress}</a>
                            </section>

                            <section className={`${style['referral__section']}`}>
                                <header className={`${style['referral__section__header']}`}>{this.props.noteLabel}</header>
                                <div className={`${style['referral__section__text']} ${style['referral__space']}`}>{this.props.note}</div>
                            </section>
                        </div>
                    </div>
                    <button type="button" className={`${style['referral__details-trigger']}`} onClick={this.toggleDetails}>{this.state.detailsExpanded ? this.props.viewLessText : this.props.viewMoreText}</button>
                </div>
                <div className={`${style['referral__confirm']}`} ref={(confirm) => {this.confirmation = confirm}}>
                    <Confirm {...this.props.deleteConfirm} continue={this.delete} cancel={this.cancelDelete}/>
                </div>
            </div>
        ) : false;
    }
}
