sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncComponentCreation"],
            // "rootView": "ui5.walkthrough.view.App",
            // "type": "XML",
            // "id": "app"
            manifest : "json"
        },
        
        init(){
            
            UIComponent.prototype.init.apply(this, arguments);

            //set data Model

            const oData = {
                recipient : {
                    name : 'World'
                }
            }
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // Not required once you configure it in manifest.json
            // set i18n model 
            // const i18nModel = new ResourceModel({
            //     bundleName : "ui5.walkthrough.i18n.i18n"
            // });
            // this.setModel(i18nModel,"i18n");


        }

    });

});
