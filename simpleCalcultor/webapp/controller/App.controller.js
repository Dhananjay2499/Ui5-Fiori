sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller,MessageToast) {
    "use strict";
    return Controller.extend("path.calculator.controller.App", {
        onPressOfButton(var1) {
            if (var1 === "AC"){
                this.byId("valInput").setValue('');
                new MessageToast.show('Input cleared!!');
            }else if (var1 === "+"){
                // MessageToast.show('+ Button clicked!');
                // this.byId("valInput").setHeight("200px");
                this.byId("valInput").addStyleClass("expanded");
            }else{
                this.byId("valInput").setValue(this.byId("valInput").getValue() + var1);
            }
        },


        onPressOfBack() {

            var input = this.byId("valInput").getValue();
            this.byId("valInput").setValue(input.substr(0,input.length-1));
            // this.substr(0,input.length-1).setValue();

        }
    });
});