sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent"
], function (Controller, JSONModel, Filter, FilterOperator, UIComponent) {
	"use strict";

	return Controller.extend("sap.ui.demo.staff.controller.UsersList", {

		onInit: function () {
			var oViewModel = new JSONModel({
			});
			this.getView().setModel(oViewModel, "view");
		},

		onSearchUser: function (oEvent) {

			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("LastName", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			var list = this.byId("usersList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				userPath: oItem.getBindingContext("users").getPath().substr(7)
			});
		}
	});

});