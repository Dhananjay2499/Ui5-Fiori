sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
],(Button,MessageToast)=>{
    "use strict";
    new Button({
      text:"Ready...",
width:"10em",
        press(){
            MessageToast.show("Hello World",{
                width: "5em"
            });
        }
    }).placeAt("content");

});