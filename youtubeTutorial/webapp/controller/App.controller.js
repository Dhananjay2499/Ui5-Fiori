sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'],
    function(Controller,MessageToast){
    'use strict';
    return Controller.extend('youtube/tutorial/controller/App',{
        onPress:function(){
            MessageToast.show('The Button is clicked',{
                width:'10em',
                at:'LeftTop'
            });
        }
    });
})