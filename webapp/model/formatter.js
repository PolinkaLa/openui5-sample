sap.ui.define([], function () {
	"use strict";
	return {
		roomName: function (roomNumber) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (roomNumber) {
				case "1":
					return resourceBundle.getText("room_1");
				case "2":
					return resourceBundle.getText("room_2");
				case "3":
					return resourceBundle.getText("room_3");
				default:
					return roomNumber;
			}
		},
		dateFormatter : function (ts){ 
		var d = new Date(ts*1000);
    	return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
		}
	};
});