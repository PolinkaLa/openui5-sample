sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./HelpDialog",
	"./AddUserDialog",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent"
], function (Controller, HelpDialog, AddUserDialog, formatter,Filter,FilterOperator, UIComponent) {
	"use strict";

	return Controller.extend("sap.ui.demo.staff.controller.Overview", {
		onInit: function () {

			this._helpDialog = new HelpDialog(this.getView());
			this._addUserDialog = new AddUserDialog(this.getView());

		},
		onOpenHelpDialog : function () {
			this._helpDialog.open();
		},
		onOpenAddUserDialog : function () {
			this._addUserDialog.open();
		},
		onShowDetail : function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				userPath: oItem.getBindingContext("users").getPath().substr(7)
			});
		},
		onSearchUser : function (oEvent) {
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("LastName", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			var list = this.byId("usersList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		formatter : formatter
	});
});
