(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{277:function(t,e,n){"use strict";n.r(e);n(50),n(35);var r=n(7),c=n(229),o=n(228),l=n.n(o),f={components:{Map:c.default},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://api.fttx.gr/api/v1/centers?limit=0&approved=true").then((function(t){return t}));case 2:return e=t.sent,t.next=5,l.a.get("https://api.fttx.gr/api/v1/cabinets?limit=0&approved=true").then((function(t){return t}));case 5:return n=t.sent,r=n.data.data.filter((function(t){return"DSLAM"!==t.type})),t.abrupt("return",{dslam:e.data.data,numberOfCenter:e.data.data.length,numberOfCabinets:r.length,cabinetData:r});case 8:case"end":return t.stop()}}),t)})))()}},d=n(6),component=Object(d.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("Map",{attrs:{cabinetData:this.cabinetData,dslam:this.dslam}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Map:n(229).default})}}]);