sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],function (Controller,JSONModel) {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.InvoiceList",{
        onInit(){
            const oViewModel = new JSONModel({
                currency:'INR'
            });

            this.getView().setModel(oViewModel,"view");
        }
    })
})