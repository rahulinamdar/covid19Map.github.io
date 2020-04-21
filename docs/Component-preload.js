//@ui5-bundle com/rahul/covid19-map/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/rahul/covid19-map/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/rahul/covid19-map/model/models"],function(e,i,t){"use strict";return e.extend("com.rahul.covid19-map.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"com/rahul/covid19-map/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.rahul.covid19-map.controller.View1",{onInit:function(){var e={MapProvider:[{name:"OSM",type:"",description:"",tileX:"256",tileY:"256",maxLOD:"20",copyright:"Tiles Courtesy of OpenMapTiles",Source:[{id:"s1",url:"https://a.tile.openstreetmap.org/{LOD}/{X}/{Y}.png"}]}],MapLayerStacks:[{name:"Default",MapLayer:[{name:"OSM",refMapProvider:"OSM"}]}]};var t=this.getView().byId("idGeoMap");t.setMapConfiguration(e)},formatRadius:function(e){var t=100*parseInt(e,10)/7777287176*15e3;if(t<=3){t=3}return t},onClickButton:function(e){var t=e.getSource().getParent().getBindingContext();if(!this._fragment){this._fragment=sap.ui.xmlfragment("com.rahul.covid19-map.view.overview",this);this.getView().addDependent(this._fragment)}this._fragment.setBindingContext(t);this._fragment.openBy(e.getSource())},formatDesign:function(e){if(e>1e5){return"Negative"}else if(e>5e4){return"Reject"}else if(e>2e4){return"Critical"}else if(e>1e4){return"Default"}else{return"Accept"}}})});
},
	"com/rahul/covid19-map/i18n/i18n.properties":'title=Covid-19 Map - Affected countries\nappTitle=covid19-map\nappDescription=App Description',
	"com/rahul/covid19-map/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.rahul.covid19-map","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"},"dataSources":{"personal_info":{"uri":"https://corona.lmao.ninja/countries?sort=cases","type":"JSON"}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"com.rahul.covid19-map.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.rahul.covid19-map.i18n.i18n"}},"":{"type":"sap.ui.model.json.JSONModel","dataSource":"personal_info"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.rahul.covid19-map.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}}}}',
	"com/rahul/covid19-map/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/rahul/covid19-map/view/View1.view.xml":'<mvc:View controllerName="com.rahul.covid19-map.controller.View1" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"\n\txmlns:core="sap.ui.core" xmlns:vbm="sap.ui.vbm" xmlns:vk="sap.ui.vk" xmlns:dnd="sap.ui.core.dnd"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><vk:MapContainer autoAdjustHeight="true"><vk:content><vk:ContainerContent title="Geographic Map" icon="sap-icon://map-2"><vk:content><vbm:GeoMap id="idGeoMap" drop="onDrop" initialZoom="2" initialPosition="37.52633333206177;12.963101322467267;0.0"><vbm:vos><vbm:Circles items="{/}" click="onClickItem" contextMenu="onContextMenuItem"><vbm:Circle position="{countryInfo/long};{countryInfo/lat};0" tooltip="{country}" radius="{ path:\'cases\', formatter:\'.formatRadius\' }"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor="rgba(92,186,230,0.6)" colorBorder="rgb(255,255,255)" hotDeltaColor="rgba(92,186,230,0.8)" click="onClickCircle"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontextMenu="onContextMenuCircle"/></vbm:Circles><vbm:Containers items="{/}" click="onClickItem" contextMenu="onContextMenuItem"><vbm:Container position="{countryInfo/long};{countryInfo/lat};0" tooltip="{country}" click="onClickItem" contextMenu="onContextMenuItem"><vbm:item><Button icon="sap-icon://accidental-leave" type="{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpath:\'cases\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformatter:\'.formatDesign\'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}" text="{cases}" press="onClickButton"/></vbm:item></vbm:Container></vbm:Containers></vbm:vos></vbm:GeoMap></vk:content></vk:ContainerContent><vk:ContainerContent title="Analytical Map" icon="sap-icon://choropleth-chart"><vk:content><vbm:AnalyticMap id="idAnalyticalMap" drop="onDrop" initialZoom="2" initialPosition="37.52633333206177;12.963101322467267;0.0"><vbm:vos><vbm:Circles items="{/}" click="onClickItem" contextMenu="onContextMenuItem"><vbm:Circle position="{countryInfo/long};{countryInfo/lat};0" tooltip="{country}" radius="{ path:\'cases\', formatter:\'.formatRadius\' }"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor="rgba(92,186,230,0.6)" colorBorder="rgb(255,255,255)" hotDeltaColor="rgba(92,186,230,0.8)" click="onClickCircle"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcontextMenu="onContextMenuCircle"/></vbm:Circles><vbm:Containers items="{/}" click="onClickItem" contextMenu="onContextMenuItem"><vbm:Container position="{countryInfo/long};{countryInfo/lat};0" tooltip="{country}" click="onClickItem" contextMenu="onContextMenuItem"><vbm:item><Button icon="sap-icon://accidental-leave" type="{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpath:\'cases\',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformatter:\'.formatDesign\'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}" text="{cases}" press="onClickButton"/></vbm:item></vbm:Container></vbm:Containers></vbm:vos></vbm:AnalyticMap></vk:content></vk:ContainerContent></vk:content></vk:MapContainer></content></Page></pages></App></Shell></mvc:View>',
	"com/rahul/covid19-map/view/overview.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:l="sap.ui.layout" xmlns:f="sap.ui.layout.form"><ResponsivePopover title="{country}" contentWidth="25%" placement="Auto"><f:SimpleForm id="SimpleFormDisplay354" editable="false" layout="ResponsiveGridLayout" labelSpanXL="6" labelSpanL="6" labelSpanM="6"\n\t\t\tlabelSpanS="6" adjustLabelSpan="false" emptySpanXL="3" emptySpanL="3" emptySpanM="3" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1"\n\t\t\tsingleContainerFullSize="false"><f:content><Label text="Total Cases"/><Text text="{cases}"/><Label text="New Cases"/><Text text="{todayCases}"/><Label text="Total Deaths"/><Text text="{deaths}"/><Label text="New Deaths"/><Text text="{todayDeaths}"/><Label text="Recovered"/><Text text="{recovered}"/><Label text="Active Cases"/><Text text="{active}"/><Label text="Critical"/><Text text="{critical}"/><Label text="Total Test Done"/><Text text="{tests}"/></f:content></f:SimpleForm></ResponsivePopover></core:FragmentDefinition>'
}});