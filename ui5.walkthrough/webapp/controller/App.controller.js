sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.App", {
        // without Component Configuration

        // onInit(){
        
        //     const oData = {
        //         recipient:{
        //             name:"World"
        //         }
        //     }

        //     const oModel = new JSONModel(oData);
        //     this.getView().setModel(oModel);

        //     // getView-> to use this in XMLView
        //     // setModel-> set model on the view
        //     // ----------------------------------------------------------------------------

        //     // Set i18n model on view
        //     const i18nModel = new ResourceModel({
        //         bundleName:"ui5.walkthrough.i18n.i18n"
        //     });

        //     this.getView().setModel(i18nModel, "i18n");
        // },

        // onClick(){
        //     // read message from i18n model
        //     const oBundle = this.getView().getModel("i18n").getResourceBundle(); 
        //     const sRecipient = this.getView().getModel().getProperty("/recipient/name");  // Get name form JSON
        //     const oMsg = oBundle.getText("helloMsg",[sRecipient]);

        //     MessageToast.show(oMsg);
        // },


        // with Component Configuration

        onClick(){
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg",[sRecipient]);
        }

    });
});