sap.ui.define([
    'sap/ui/core/mvc/XMLView',
    "sap/ui/core/ComponentContainer"
],function(XMLView,ComponentContainer){
    'use strict';

//  XMLView.create({
//         viewName : "path.calculator.view.App"
//     }).then((oView)=>oView.placeAt('content')) ;

new ComponentContainer({
    name:"path.calculator",
    settings : {
        id : "calculator"
    } ,
        async : true
}).placeAt("content")

})