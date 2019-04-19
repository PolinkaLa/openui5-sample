sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/HelpDialog",
	"./controller/AddUserDialog",
	"sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, AddUserDialog, Device) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.staff.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			this._addUserDialog = new AddUserDialog(this.getRootControl());

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		exit : function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		},
		openAddUserDialog : function () {
			this._addUserDialog.open();
		},
		
		getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}

	});

});