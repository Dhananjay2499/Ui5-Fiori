sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("path.calculator.controller.App", {

        onPressOfButton(var1) {
            var value = this.byId("valInput").getValue();
            if (var1 === "AC") {
                this.byId("valInput").setValue('');
                new MessageToast.show('Input cleared!!');
            } 
            else {
            return this.byId("valInput").setValue( value + var1);
                
            }
        },


        onPressOfBack() {

            var input = this.byId("valInput").getValue();
            this.byId("valInput").setValue(input.substr(0, input.length - 1));

        },
        onPressOfOperation(varSign) {
            var value = this.byId("valInput").getValue();
            if (/[+\-*/]/.test(value)) {
                return this.byId("valInput").setValue(value.replace(/[+\-*/]/g, varSign));
            } else {
                return this.byId("valInput").setValue(value + "\n" + varSign);
            }
        },
    });
});