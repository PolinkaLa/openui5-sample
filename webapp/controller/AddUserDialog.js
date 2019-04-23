sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (ManagedObject, Fragment, syncStyleClass, MessageToast, JSONModel) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.staff.controller.AddUserDialog", {
		
		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},

		open : function () {
			var oView = this._oView;

			if (!oView.byId("addUserDialog")) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId("addUserDialog").close();
					},
					onSaveDialog: function () {
						
						//TODO real addition
						MessageToast.show('"' + data.FirstName + ' ' + data.LastName + '" was added');

						oView.byId("addUserDialog").close();
					}
				};
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.staff.view.AddUserDialog",
					controller: oFragmentController
				}).then(function (oDialog) {

					oView.addDependent(oDialog);
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("addUserDialog").open();
			}
		}

	});

});