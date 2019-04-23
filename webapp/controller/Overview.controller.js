sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./HelpDialog",
	"./AddUserDialog",
	"../model/formatter",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	'sap/m/TablePersoController',
	"../model/PersoService",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, HelpDialog, AddUserDialog, formatter, UIComponent, JSONModel, TablePersoController, PersoService, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.staff.controller.Overview", {
		onInit: function () {
			
			var oData = {
				recipient : {
					UserID: '',
					FirstName: '',
					LastName: '',
					DateBirth: '',
					Login: '',
					CreatedDate: '',
					Project: '',
					Manager: '',
					Room: '',
					Position: '',
					Computer: ''
				}
			 };
			var oModel = new JSONModel(oData);
	
			this.getView().setModel(oModel);
			console.log(this.getView().getModel());

			this._helpDialog = new HelpDialog(this.getView());
			this._addUserDialog = new AddUserDialog(this.getView());

			this._oTPC = new TablePersoController({
				table: this.byId("usersListTable"),
				componentName: "staff",
				persoService: PersoService
			}).activate();

			
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
			var aFilter = [],
			resFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) { 
				aFilter.push(new Filter("LastName", FilterOperator.Contains, sQuery));
				aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
				aFilter.push(new Filter("Project", FilterOperator.Contains, sQuery));
				aFilter.push(new Filter("Room", FilterOperator.Contains, sQuery));

				resFilter.push(new Filter({
					filters: aFilter,
					and: false
				}));
			}
		
			var oList = this.getView().byId("usersListTable");
			var oBinding = oList.getBinding("items"); 
			oBinding.filter(resFilter);

		},

		onSettingViewColumms : function () {
			this._oTPC.openDialog();
		},

		formatter : formatter
	});

});
