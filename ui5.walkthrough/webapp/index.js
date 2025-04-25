// sap.ui.define(["sap/m/Text"], (Text)=>{
//     'use strict';

//     new Text({
//         text:'Hello World'
//     }).placeAt("content")
// })


// without Component configuration
// sap.ui.define(['sap/ui/core/mvc/XMLView'], function(XMLView){

//         'use strict';

//         XMLView.create({
//             viewName: "ui5.walkthrough.view.App"
//         }).then((oView) => oView.placeAt("content"));

//     })


// with Component configuration

sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponenetContainer) {
    "use strict";
    new ComponenetContainer({
        name: "ui5.walkthrough",
        settings: {
            id: "walkthrough"
        },
        async: true
    }).placeAt("content");

})
