sap.ui.define(["sap/ui/core/UIComponent"],function(UIComponent){

    return UIComponent.extend("youtube/tutorial/Component",{
        metadata:{
            interface : ["sap.ui.core.IAsyncContentCreation"],
            rootView:{
                viewName:'youtube/tutorial/view/App',
                type:'XML',
                id:"app"
            }
        }
    })

})