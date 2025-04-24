// sap.ui.define(['sap/ui/core/mvc/XMLView'],function(XMLView){
// 'use strict';

// XMLView.create({
//     viewName:"youtube.tutorial.view.App"
// }).then(function(oView){ oView.placeAt('content') })

// });

sap.ui.define(['sap/ui/core/ComponentContainer'],function(ComponentContainer){
    new ComponentContainer({
        name : "youtube.tutorial",
        settings:{
            id:"youtube.tutorial"
        },
        async: true
    }).placeAt("content")
})