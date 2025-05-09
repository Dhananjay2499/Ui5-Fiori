sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {


        onClick() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },


        // Dialog Box
        async onOpenDialog(){
            this.oDialog ??= await this.loadFragment({
                name:"ui5.walkthrough.view.HelloDialog"
            });

            this.oDialog.open();

        },

        //Close Dialog Box
        onCloseDialog(){
            // note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.

            this.byId("helloDialog").close();

        }


    })

})