sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.rahul.covid19-map.controller.View1", {
		onInit: function () {
			var oMapConfig = { "MapProvider":
            [
              {
                  "name": "OSM",
                  "type": "",
                  "description": "",
                  "tileX": "256",
                  "tileY": "256",
                  "maxLOD": "20",
                  "copyright": "Tiles Courtesy of OpenMapTiles",
                  "Source": [{
                      "id": "s1",
                      "url": "https://a.tile.openstreetmap.org/{LOD}/{X}/{Y}.png"
                  }]
              }],
            "MapLayerStacks":
              [
                {
                "name": "Default",
                "MapLayer":[
                    {
                    "name": "OSM",
                    "refMapProvider": "OSM"
                    }]
            }]
          };
        
          var oGeoMap = this.getView().byId("idGeoMap");
            oGeoMap.setMapConfiguration(oMapConfig);
		},
		
		formatRadius : function(data){
			var radius = ((100*parseInt(data,10))/7777287176)*15000;
			if(radius <= 3){
				radius = 3;
			}
			return radius;
		},
		onClickButton: function(oEvent){
			var oContext = oEvent.getSource().getParent().getBindingContext();
			if(!this._fragment){
				this._fragment = sap.ui.xmlfragment("com.rahul.covid19-map.view.overview",this);
				this.getView().addDependent(this._fragment);
			}
			this._fragment.setBindingContext(oContext);
			this._fragment.openBy(oEvent.getSource());
		},
		formatDesign: function(data){
			if(data >100000){
				return "Negative";
			}else if(data > 50000){
				return "Reject";
			}else if(data > 20000){
				return "Critical";
			}else if(data > 10000){
				return "Default";
			}else{
				return "Accept";
			}
		}
	});
});