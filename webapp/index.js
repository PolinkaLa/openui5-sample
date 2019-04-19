sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.staff",
		settings : {
			id : "staff"
		},
		async: true
	}).placeAt("content");
});