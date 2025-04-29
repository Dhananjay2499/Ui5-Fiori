sap.ui.define([
    "sap/ui/core/UIComponent",
    "spa/ui/model/json/JSONModel"    
], function (UIComponent,JSONModel) {
    "use strict";

    return UIComponent.extend("path.demo.Component", {
        metadata: {
            interface: ["sap.ui.core.IAsyncComponentCreation"],
            manifest: "json"
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);

            const oData = {
                recipient : {
                    name : 'World'
                }
            }
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

        }

    })

})