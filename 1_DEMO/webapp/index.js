sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";
        new ComponentContainer({
            name: "path.demo",
            settings: {
                id: "demo"
            },
            async: true
        }).placeAt("content");
})