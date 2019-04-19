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

			// create dialog lazily
			if (!oView.byId("helpDialog")) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId("helpDialog").close();
					}
				};
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.staff.view.HelpDialog",
					controller: oFragmentController
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					// forward compact/cozy style into dialog
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helpDialog").open();
			}
		}

	});

});