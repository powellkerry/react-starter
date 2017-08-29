import dataService from '../data-services/data-service.js';
import platformDS from '../data-services/platform-data-service.js';
import async from 'async';
import config from '../../../config';
import merge from 'merge';


var get = function(req, queryStrings, endpoint) {
	return function(callback) {
		dataService.get(req.hostname, req.headers.cookie, endpoint, queryStrings, function(error, data) {
			if (error) {
				callback(error);
			} else {
				callback(null, data);
			}
		});
	};
};

var getPage = function(req, res, next) {
    var data = {
    	"partialName": "landing",
        "components": [
            {
                "partialName": "page-title",
                "title": "Referrals for Missionaries"
            },
            {
                "partialName": "content-block",
                "content": "<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>"
            },{
                "component": "form-component",
                "partialName": "form-component",
                "submitUrl": "/missionaries/submit",
                "name": "referral",
                "components": [{
                    "component": "columns",
                    "partialName": "columns",
                    "footer": {
                        "submitText": "Send",
                        "disclaimerText": "By selecting \"Send\", I certify that I or the person I am referring give permission to provide contact information to the Church and agree to meet with missionaries.",
                    },
                    "columns": [{
                        "expandable": true,
                        "expanderText": "Send A Referral",
                        "components": [{
                            "component": "section",
                            "partialName": "section",
                            "title": "Your Contact Information",
                            "subTitle": "The missionaries may use this information to contact you.",
                            "components": [{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "referrerFirstName",
                                "type": "hidden"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "referrerLastName",
                                "type": "hidden"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "referrerPhone",
                                "type": "text",
                                "disabled": true,
                                "label": "Phone",
                                "value": "801-234-5678"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "referrerEmail",
                                "type": "text",
                                "disabled": true,
                                "label": "Email Address",
                                "value": "alexosmond@ldschurch.org"
                            }]
                        },{
                            "component": "section",
                            "partialName": "section",
                            "title": "Referral's Contact Information",
                            "subTitle": "Please include as much information as possible",
                            "components": [{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "firstName",
                                "type": "text",
                                "label": "First Name"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "lastName",
                                "type": "text",
                                "label": "Last Name"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "email",
                                "type": "email",
                                "label": "Email Address"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "phone",
                                "type": "tel",
                                "label": "Phone"
                            }]
                        },{
                            "component": "section",
                            "partialName": "section",
                            "title": "Referral's Location",
                            "components": [{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "address",
                                "type": "text",
                                "disabled":true,
                                "value": "3740 W Market Center Dr, Riverton, Utah 84065"
                            },{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "addressDescription",
                                "type": "textarea",
                                "label": "Location Description"
                            }]
                        },{
                            "component": "section",
                            "partialName": "section",
                            "title": "Referral's Preferred Language",
                            "components": [{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "languageId",
                                "type": "select",
                                "label": "Preferred Language",
                                "options": [{
                                    "lang": "English",
                                    "id": "1"
                                },{
                                    "text": "Spanish",
                                    "id": "2"
                                },{
                                    "text": "French",
                                    "id": "3"
                                },{
                                    "text": "Portuguese",
                                    "id": "4"
                                }]
                            }]
                        },{
                            "component": "section",
                            "partialName": "section",
                            "title": "Helpful Message for the Local Missionaries",
                            "components": [{
                                "component": "form-field",
                                "partialName": "form-field",
                                "name": "note",
                                "type": "textarea"
                            }]
                        }]
                    },{
                        "components": [{
                            "component": "section",
                            "partialName": "section",
                            "title": "Your Referrals",
                            //"subTitle": "After sending the missionaries your referrals, you'll be able to track their progress with that individual here.",
                            "components": [{
                                "component": "referral",
                                "partialName": "referral",
                                "personGuid": "eidt-309c-3029-c9ej-9end",
                                "firstName": "James",
                                "lastName": "Madison",
                                "referralAssignedDateLabel": "Sent",
                                "referralAssignedDate": "30 Aug 2017",
                                "referralStatusName": "Not yet contacted",
                                "missionName": "Canada Calgary Mission",
                                "missionNameLabel": "Assigned to",
                                "missionaries": [{
                                    "firstName": "Todd",
                                    "lastName": "Jacobsen",
                                    "genderCode": "Elder",
                                    "photoUrl": "https://placebear.com/50/50"
                                },{
                                    "firstName": "Ethan",
                                    "lastName": "Lowe",
                                    "genderCode": "Elder",
                                    "photoUrl": "https://placebear.com/50/50"
                                }],
                                "areaNumbers": ["458-965-8569", "235-687-4859"],
                                "areaEmail": "calgary-north-area@myldsmail.net",
                                "bishopLabel": "Bishop",
                                "bishopFirstName": "Barry",
                                "bishopLastName": "Klaven",
                                "bishopPhone": "613-584-6985",
                                "wardMissionLeaderLabel": "Ward Mission Leader",
                                "wardMissionLeaderFirstName": "Joel",
                                "wardMissionLeaderLastName": "Jensen",
                                "wardMissionLeaderPhone": "598-695-3568",
                                "missionOfficeName": "Canada Calgary Mission Office",
                                "missionOfficePhone": "854-854-6957",
                                "missionOfficeEmail": "canada_calgary_mission_office@ldschurch.org",
                                "meetinghouseLabel": "Meetinghouse and Ward",
                                "unitName": "Calgary 1st Ward",
                                "unitMeetingTimes": "9am-12pm",
                                "unitAddress": "2526 24 Ave NW, Calgary, AB T2N 4H9, Canada",
                                "noteLabel": "Your Message",
                                "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.",
                                "viewMoreText": "View More",
                                "viewLessText": "View Less",
                                "deleteConfirm": {
                                    "component": "confirm",
                                    "partialName": "confirm",
                                    "title": "Remove referral from list?",
                                    "message": "Removing a referral will <b>not</b> cancel it. Please contact the assigned missionaries if needed.",
                                    "continueText": "Remove",
                                    "cancelText": "Nevermind"
                                }
                            }]
                        }]
                    }]
                }]
            }
        ]
    };
    platformDS.getLayoutData(req, res, next, function(platform) {
        data = merge(data, platform);
        res.locals.data = data;
        next(data);
    })
};

module.exports = {
	getPage: getPage,
};
