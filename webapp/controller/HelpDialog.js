sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {
	"use strict";

	return ManagedObject.extend("sap.ui.demo.staff.controller.HelpDialog", {

		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},

		open : function () {
			var oView = this._oView;

			if (!oView.byId("helpDialog")) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId("helpDialog").close();
					}
				};

				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.staff.view.HelpDialog",
					controller: oFragmentController
				}).then(function (oDialog) {

					oView.addDependent(oDialog);

					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helpDialog").open();
			}
		}

	});

});