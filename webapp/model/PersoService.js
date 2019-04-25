sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";

	var PersoService = {

		oData : {
			_persoSchemaVersion: "1.0",
			aColumns : [
				{
					id: "staff-usersListTable-ProjectCol",
					order: 3,
					text: "Project",
					visible: false
				},
				{
					id: "staff-usersListTable-LastNameCol",
					order: 1,
					text: "Last Name",
					visible: true
				},
				{
					id: "staff-usersListTable-FirstNameCol",
					order: 0,
					text: "First Name",
					visible: true
				},
				{
					id: "staff-usersListTable-NameOfRoomCol",
					order: 2,
					text: "Room",
					visible: true
				},
				{
					id: "staff-usersListTable-DateBirthCol",
					order: 4,
					text: "DateBirth",
					visible: false
				}
			]
		},

		getPersData : function () {
			var oDeferred = new jQuery.Deferred();
			if (!this._oBundle) {
				this._oBundle = this.oData;
			}
			var oBundle = this._oBundle;
			oDeferred.resolve(oBundle);
			return oDeferred.promise();
		},

		setPersData : function (oBundle) {
			var oDeferred = new jQuery.Deferred();
			this._oBundle = oBundle;
			oDeferred.resolve();
			return oDeferred.promise();
		},

		resetPersData : function () {
			var oDeferred = new jQuery.Deferred();
			var oInitialData = {
					_persoSchemaVersion: "1.0",
					aColumns : [
					{
								
					id: "staff-usersListTable-ProjectCol",
					order: 3,
					text: "Project",
					visible: false
				},
				{
					id: "staff-usersListTable-LastNameCol",
					order: 1,
					text: "Last Name",
					visible: true
				},
				{
					id: "staff-usersListTable-FirstNameCol",
					order: 0,
					text: "First Name",
					visible: true
				},
				{
					id: "staff-usersListTable-NameOfRoomCol",
					order: 2,
					text: "Room",
					visible: false
				},
				{
					id: "staff-usersListTable-DateBirthCol",
					order: 4,
					text: "DateBirth",
					visible: true
				}
							]
			};

			this._oBundle = oInitialData;

			oDeferred.resolve();
			return oDeferred.promise();
		},
		getCaption : function () {
		},

	};

	return PersoService;

}, true);
