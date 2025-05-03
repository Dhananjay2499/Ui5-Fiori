sap.ui.define([
    "sap/ui/core/UIComponent"
],function(UIComponent){
"use strict";
return UIComponent.extend( "path.calculator.Component",{
    metadata: {
        "interfaces": ["sap.ui.core.IAsyncComponentCreation"],
        "rootView": "path.calculator.view.App",
        "type": "XML",
        "id": "app"
    },
        init(){
            UIComponent.prototype.init.apply(this, arguments);
        }
} );

})