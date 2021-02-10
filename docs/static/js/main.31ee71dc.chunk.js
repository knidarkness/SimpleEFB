(this["webpackJsonpa-checklist"]=this["webpackJsonpa-checklist"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),o=a(12),c=a.n(o),s=a(21),u=a.n(s),d=a(29),l=a(81),x=a(14),v=a(15),f=a(63),p=a(16),b=a(159),h=a(79),m=a.n(h),g=a(160),j=a(161),O=a(156),w=a(80),M=a(167),y=a(114);function k(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Welcome"}),Object(n.jsxs)("p",{children:["Welcome to the SimpleEFB project homepage. This is a tool which is intended for ",Object(n.jsx)("b",{children:"simulator use only"}),". As of now, it can only provide landing distance calculation for Boeing 767-300, however in near future it will be extended with other aircraft types (Boeing 767-200, Boeing 777-200, Airbus A32X family and maybe more), live airport data load and others."]})]})}var C=a(158),D=a(20),A=a(22),S=a(164),F=a(162),T=a(82),L=a(148),N=a(83);function R(e){var t=e.data,a=e.index,n=e.style;return r.a.cloneElement(t[a],{style:Object(A.a)(Object(A.a)({},n),{},{top:n.top+8})})}var W=r.a.createContext({}),I=r.a.forwardRef((function(e,t){var a=r.a.useContext(W);return Object(n.jsx)("div",Object(A.a)(Object(A.a)({ref:t},e),a))}));var B=r.a.forwardRef((function(e,t){var a=e.children,i=Object(T.a)(e,["children"]),o=r.a.Children.toArray(a),c=o.length,s=function(e){return r.a.isValidElement(e)&&e.type===L.a?48:36},u=function(e){var t=r.a.useRef(null);return r.a.useEffect((function(){null!=t.current&&t.current.resetAfterIndex(0,!0)}),[e]),t}(c);return Object(n.jsx)("div",{ref:t,children:Object(n.jsx)(W.Provider,{value:i,children:Object(n.jsx)(N.a,{itemData:o,height:(c>8?288:o.map(s).reduce((function(e,t){return e+t}),0))+16,width:"100%",ref:u,outerElementType:I,innerElementType:"ul",itemSize:function(e){return s(o[e])},overscanCount:5,itemCount:c,children:R})})})})),E=function(e){return[Object(n.jsx)(L.a,{component:"div",children:e.group},e.key),e.children]},H=a(57),P=a(74),V=a(8);function G(e){var t=e.runwayHeading,a=e.windDirection,n=e.windSpeed;if(void 0!==t&&void 0!==a&&void 0!==n){var i=Math.abs(t-a);return{headwind:n*Math.cos(i*Math.PI/180),crosswind:n*Math.sin(i*Math.PI/180)}}}function J(e){return 15-e/1e3*1.95}function q(e){return z.apply(this,arguments)}function z(){return(z=Object(d.a)(u.a.mark((function e(t){var a,n,i,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.allorigins.win/get?url=https%3A%2F%2Fapi.aviationapi.com%2Fv1%2Fweather%2Fmetar%3Fapt%3D".concat(t));case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",void 0);case 5:return e.next=7,a.json();case 7:return n=e.sent,i=n.contents,r=JSON.parse(i),e.abrupt("return",r[t]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U={25:{dry:{max:3200,aMax:5370,4:5540,3:6360,2:7090,1:7740},good:{max:5060,aMax:6190,4:6370,3:7330,2:8150,1:8900},medium:{max:6390,aMax:6970,4:7050,3:7670,2:8350,1:8970},poor:{max:8960,aMax:8960,4:8960,3:9050,2:9380,1:9720}},30:{dry:{max:3150,aMax:5220,4:5380,3:6180,2:6930,1:7590},good:{max:4990,aMax:6010,4:6200,3:7110,2:7970,1:8730},medium:{max:6850,aMax:6850,4:6920,3:7490,2:8150,1:8800},poor:{max:8880,aMax:8880,4:8880,3:8910,2:9250,1:9580}}},X={25:{dry:{more:{max:110,aMax:150,4:150,3:180,2:210,1:240},less:{max:-70,aMax:-150,4:-150,3:-180,2:-210,1:-240}},good:{more:{max:140,aMax:170,4:170,3:210,2:240,1:280},less:{max:-140,aMax:-170,4:-170,3:-210,2:-240,1:-280}},medium:{more:{max:210,aMax:210,4:210,3:230,2:250,1:280},less:{max:-210,aMax:-210,4:-210,3:-220,2:-250,1:-280}},poor:{more:{max:300,aMax:300,4:300,3:300,2:310,1:320},less:{max:-290,aMax:-290,4:-290,3:-290,2:-300,1:-310}}},30:{dry:{more:{max:140,aMax:240,4:250,3:290,2:310,1:330},less:{max:-80,aMax:-150,4:-160,3:-190,2:-220,1:-250}},good:{more:{max:200,aMax:280,4:290,3:330,2:360,1:380},less:{max:-140,aMax:-170,4:-180,3:-220,2:-250,1:-290}},medium:{more:{max:290,aMax:310,4:320,3:360,2:370,1:380},less:{max:-220,aMax:-220,4:-220,3:-230,2:-250,1:-290}},poor:{more:{max:390,aMax:390,4:390,3:430,2:430,1:430},less:{max:-300,aMax:-300,4:-300,3:-300,2:-310,1:-320}}}},Y={25:{dry:{max:80,aMax:150,4:160,3:190,2:220,1:250},good:{max:140,aMax:170,4:180,3:220,2:250,1:290},medium:{max:220,aMax:220,4:220,3:230,2:250,1:290},poor:{max:300,aMax:300,4:300,3:300,2:310,1:320}},30:{dry:{max:80,aMax:150,4:150,3:180,2:210,1:240},good:{max:140,aMax:170,4:170,3:210,2:240,1:280},medium:{max:220,aMax:220,4:220,3:230,2:250,1:280},poor:{max:300,aMax:300,4:300,3:300,2:310,1:320}}},_={25:{dry:{head:{max:-130,aMax:-250,4:-260,3:-300,2:-350,1:-400},tail:{max:440,aMax:840,4:870,3:1030,2:1180,1:1350}},good:{head:{max:-240,aMax:-290,4:-300,3:-350,2:-400,1:-460},tail:{max:830,aMax:980,4:1010,3:1180,2:1360,1:1550}},medium:{head:{max:-380,aMax:-380,4:-380,3:-400,2:-440,1:-470},tail:{max:1360,aMax:1360,4:1370,3:1440,2:1530,1:1630}},poor:{head:{max:-550,aMax:-550,4:-550,3:-560,2:-580,1:-590},tail:{max:2090,aMax:2080,4:2080,3:2100,2:2140,1:2190}}},30:{dry:{head:{max:-130,aMax:-240,4:-250,3:-300,2:-350,1:-390},tail:{max:440,aMax:830,4:860,3:1020,2:1170,1:1340}},good:{head:{max:-240,aMax:-290,4:-290,3:-350,2:-400,1:-450},tail:{max:830,aMax:970,4:1e3,3:1170,2:1350,1:1540}},medium:{head:{max:-380,aMax:-380,4:-380,3:-400,2:-430,1:-470},tail:{max:1360,aMax:1360,4:1370,3:1440,2:1520,1:1630}},poor:{head:{max:-550,aMax:-550,4:-550,3:-560,2:-580,1:-590},tail:{max:2090,aMax:2090,4:2090,3:2100,2:2140,1:2190}}}},K={25:{dry:{above:{max:80,aMax:160,4:160,3:190,2:220,1:250},below:{max:-70,aMax:-160,4:-160,3:-190,2:-210,1:-240}},good:{above:{max:140,aMax:180,4:180,3:220,2:250,1:290},below:{max:-140,aMax:-180,4:-180,3:-220,2:-240,1:-280}},medium:{above:{max:210,aMax:220,4:220,3:230,2:250,1:290},below:{max:-200,aMax:-210,4:-210,3:-230,2:-250,1:-280}},poor:{above:{max:290,aMax:290,4:290,3:300,2:300,1:320},below:{max:-260,aMax:-260,4:-260,3:-280,2:-290,1:-300}}},30:{dry:{above:{max:80,aMax:150,4:160,3:190,2:210,1:240},below:{max:-70,aMax:-150,4:-160,3:-190,2:-210,1:-230}},good:{above:{max:140,aMax:170,4:180,3:220,2:240,1:280},below:{max:-140,aMax:-170,4:-180,3:-220,2:-240,1:-260}},medium:{above:{max:210,aMax:210,4:220,3:230,2:250,1:280},below:{max:-200,aMax:-200,4:-210,3:-230,2:-240,1:-260}},poor:{above:{max:290,aMax:290,4:290,3:290,2:300,1:310},below:{max:-260,aMax:-260,4:-260,3:-280,2:-290,1:-290}}}},Q={25:{dry:{max:120,aMax:300,4:310,3:360,2:320,1:290},good:{max:200,aMax:350,4:360,3:410,2:370,1:330},medium:{max:250,aMax:330,4:360,3:410,2:370,1:330},poor:{max:300,aMax:300,4:300,3:380,2:370,1:330}},30:{dry:{max:130,aMax:300,4:310,3:360,2:320,1:290},good:{max:210,aMax:350,4:360,3:410,2:370,1:330},medium:{max:250,aMax:320,4:350,3:410,2:370,1:330},poor:{max:300,aMax:300,4:300,3:390,2:370,1:330}}},Z={25:{dry:{down:{max:50,aMax:0,4:0,3:0,2:50,1:170},up:{max:-40,aMax:0,4:0,3:-20,2:-120,1:-220}},good:{down:{max:140,aMax:20,4:10,3:0,2:60,1:200},up:{max:-130,aMax:0,4:0,3:-20,2:-140,1:-250}},medium:{down:{max:350,aMax:300,4:280,3:180,2:180,1:280},up:{max:-280,aMax:-180,4:-160,3:-120,2:-200,1:-290}},poor:{down:{max:760,aMax:760,4:760,3:700,2:670,1:690},up:{max:-520,aMax:-520,4:-510,3:-430,2:-450,1:-490}}},30:{dry:{down:{max:50,aMax:0,4:0,3:0,2:40,1:160},up:{max:-40,aMax:0,4:0,3:-10,2:-110,1:-210}},good:{down:{max:140,aMax:20,4:10,3:0,2:50,1:180},up:{max:-130,aMax:0,4:0,3:-10,2:-130,1:-240}},medium:{down:{max:350,aMax:320,4:290,3:200,2:180,1:260},up:{max:-280,aMax:-200,4:-170,3:-120,2:-180,1:-280}},poor:{down:{max:770,aMax:770,4:770,3:720,2:670,1:700},up:{max:-530,aMax:-530,4:-530,3:-440,2:-460,1:-490}}}},$={25:{dry:{one:{max:80,aMax:0,4:0,3:0,2:110,1:480},two:{max:170,aMax:0,4:0,3:0,2:110,1:620}},good:{one:{max:300,aMax:20,4:10,3:0,2:130,1:550},two:{max:670,aMax:90,4:60,3:0,2:130,1:710}},medium:{one:{max:790,aMax:690,4:610,3:400,2:370,1:660},two:{max:1910,aMax:1820,4:1740,3:1270,2:1010,1:1180}},poor:{one:{max:1670,aMax:1680,4:1680,3:1530,2:1380,1:1530},two:{max:4450,aMax:4470,4:4470,3:4320,2:4e3,1:3970}}},30:{dry:{one:{max:80,aMax:0,4:0,3:0,2:80,1:410},two:{max:160,aMax:0,4:0,3:0,2:80,1:540}},good:{one:{max:280,aMax:20,4:10,3:0,2:90,1:470},two:{max:620,aMax:90,4:60,3:0,2:90,1:620}},medium:{one:{max:750,aMax:690,4:620,3:410,2:350,1:580},two:{max:1770,aMax:1730,4:1640,3:1220,2:940,1:1080}},poor:{one:{max:1580,aMax:1590,4:1590,3:1480,2:1310,1:1450},two:{max:4140,aMax:4150,4:4150,3:4050,2:3740,1:3710}}}};function ee(e){console.log(e);var t=e.flaps,a=e.breakingAction,n=e.autobrakeSettings,i=e.landingAltitude,r=e.approachSpeedAddition;return U[t][a][n]+function(e){var t=X[e.flaps][e.breakingAction],a=e.landingWeight-150;return 0===a?0:Math.ceil(Math.abs(a)/5)*(a>=0?t.more[e.autobrakeSettings]:t.less[e.autobrakeSettings])}(e)+Math.ceil(i/1e3)*Y[t][a][n]+function(e){var t=Math.ceil(Math.abs(e.tailwind)/10);return e.tailwind>0?t*_[e.flaps][e.breakingAction].tail[e.autobrakeSettings]:t*_[e.flaps][e.breakingAction].head[e.autobrakeSettings]}(e)+function(e){var t=Math.ceil(Math.abs(e.rwySlope));return e.rwySlope>0?t*Z[e.flaps][e.breakingAction].up[e.autobrakeSettings]:t*Z[e.flaps][e.breakingAction].down[e.autobrakeSettings]}(e)+function(e){var t=Math.ceil(Math.abs(e.temperatureDeviation)/10);return e.temperatureDeviation>0?t*K[e.flaps][e.breakingAction].above[e.autobrakeSettings]:t*K[e.flaps][e.breakingAction].below[e.autobrakeSettings]}(e)+Math.ceil(Math.abs(r)/5)*Q[t][a][n]+function(e){return"both"===e.reversers?0:"1 inop"===e.reversers?$[e.flaps][e.breakingAction].one[e.autobrakeSettings]:$[e.flaps][e.breakingAction].two[e.autobrakeSettings]}(e)}var te,ae,ne=function e(){var t=this;Object(H.a)(this,e),this.id=void 0,this.runways=void 0,this.selectedRunway=void 0,this.metar=void 0,this.windDirection=void 0,this.windSpeed=void 0,this.brakingAction=void 0,this.temperature=void 0,this.LDR=void 0,this.LDA=void 0,this.landingAlt=void 0,this.rwySlope=void 0,this.runwayHeading=void 0,this.headwind=void 0,this.crosswind=void 0,Object(V.d)(this),Object(V.g)((function(){return t.id}),function(){var e=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}return e.next=3,q(a);case 3:if(n=e.sent,console.log(n),n){e.next=8;break}return alert("Faild to get the METAR, input data manually."),e.abrupt("return");case 8:Object(V.h)((function(){t.temperature=parseFloat(n.temp),t.windDirection=parseInt(n.wind),t.windSpeed=parseInt(n.wind_vel)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ie=function(){function e(){var t=this;Object(H.a)(this,e),this.airports=void 0,this.airportNames=[],this.currentDestination=void 0,this.aircraftConfiguration=void 0,this.computed=void 0,this.airports={},this.currentDestination=new ne,this.aircraftConfiguration={type:"b767",flaps:30,reversers:"both",vrefAdd:5,autobrakes:"1"},this.computed=!1,Object(V.d)(this),Object(V.g)((function(){return t.currentDestination.selectedRunway}),(function(e){if(t.currentDestination.id&&e){var a=t.airports[t.currentDestination.id].runways[e];t.currentDestination.landingAlt=a.elevationFt,t.currentDestination.runwayHeading=a.heading,t.currentDestination.LDA=a.length}}))}return Object(P.a)(e,[{key:"loadAirportsData",value:function(e){this.airports=e,this.airportNames=Object.keys(this.airports)}},{key:"calculateLDR",value:function(){var e,t,a,n,i,r,o,c,s,u=this;if(void 0===(null===(e=this.aircraftConfiguration)||void 0===e?void 0:e.flaps))return"Flaps not set";if(void 0===(null===(t=this.aircraftConfiguration)||void 0===t?void 0:t.reversers))return"Reversers not set";if(void 0===(null===(a=this.aircraftConfiguration)||void 0===a?void 0:a.flaps))return"Flaps not set";if(void 0===(null===(n=this.aircraftConfiguration)||void 0===n?void 0:n.vrefAdd))return"Approach speed not set";if(void 0===(null===(i=this.aircraftConfiguration)||void 0===i?void 0:i.landingWeight))return"Landing GW is not set";if(void 0===(null===(r=this.aircraftConfiguration)||void 0===r?void 0:r.autobrakes))return"Autobrakes not set";if(void 0===(null===(o=this.currentDestination)||void 0===o?void 0:o.landingAlt))return"Landing elevation is not set";if(void 0===(null===(c=this.currentDestination)||void 0===c?void 0:c.temperature))return"Temperature is not set";if(void 0===(null===(s=this.currentDestination)||void 0===s?void 0:s.brakingAction))return"Runway braking action is not set";var d=G(this.currentDestination);if(d){var l=-1*d.headwind,x=ee({flaps:this.aircraftConfiguration.flaps,reversers:this.aircraftConfiguration.reversers,approachSpeedAddition:this.aircraftConfiguration.vrefAdd,landingWeight:this.aircraftConfiguration.landingWeight,autobrakeSettings:this.aircraftConfiguration.autobrakes,landingAltitude:this.currentDestination.landingAlt,rwySlope:this.currentDestination.rwySlope||0,tailwind:l,temperatureDeviation:this.currentDestination.temperature-J(this.currentDestination.landingAlt),breakingAction:this.currentDestination.brakingAction});Object(V.h)((function(){u.computed=!0,u.currentDestination.LDR=x,u.currentDestination.headwind=d.headwind,u.currentDestination.crosswind=d.crosswind})),console.log("altns."),console.log(this.mutateConfigurations())}}},{key:"mutateConfigurations",value:function(){var e,t,a,n,i,r,o,c;if(!this.currentDestination.id)return"No airport id";if(void 0===(null===(e=this.currentDestination)||void 0===e?void 0:e.temperature))return"Temperature is not set";if(void 0===(null===(t=this.currentDestination)||void 0===t?void 0:t.brakingAction))return"Runway braking action is not set";if(void 0===(null===(a=this.aircraftConfiguration)||void 0===a?void 0:a.flaps))return"Flaps not set";if(void 0===(null===(n=this.aircraftConfiguration)||void 0===n?void 0:n.reversers))return"Reversers not set";if(void 0===(null===(i=this.aircraftConfiguration)||void 0===i?void 0:i.flaps))return"Flaps not set";if(void 0===(null===(r=this.aircraftConfiguration)||void 0===r?void 0:r.vrefAdd))return"Approach speed not set";if(void 0===(null===(o=this.aircraftConfiguration)||void 0===o?void 0:o.landingWeight))return"Landing GW is not set";if(void 0===(null===(c=this.aircraftConfiguration)||void 0===c?void 0:c.autobrakes))return"Autobrakes not set";var s=this.airports[this.currentDestination.id].runways;for(var u in s){var d=G({runwayHeading:s[u].heading,windDirection:this.currentDestination.windDirection,windSpeed:this.currentDestination.windSpeed});if(!d)return;var l=-1*d.headwind,x=ee({flaps:this.aircraftConfiguration.flaps,reversers:this.aircraftConfiguration.reversers,approachSpeedAddition:this.aircraftConfiguration.vrefAdd,landingWeight:this.aircraftConfiguration.landingWeight,autobrakeSettings:this.aircraftConfiguration.autobrakes,rwySlope:this.currentDestination.rwySlope||0,tailwind:l,landingAltitude:s[u].elevationFt,temperatureDeviation:this.currentDestination.temperature-J(s[u].elevationFt),breakingAction:this.currentDestination.brakingAction});console.log(u,x)}}}]),e}();function re(){return te||(te=new ie),te}ae||(ae=Object(i.createContext)(re()));var oe=ae;function ce(){var e=Object(x.a)(["\n  display: block;\n  margin-top: 10px;\n  width: 210px;\n"]);return ce=function(){return e},e}var se=Object(v.a)(S.a)(ce());var ue=Object(D.a)((function(){var e,t=Object(i.useContext)(oe);return Object(n.jsx)(F.a,{disableListWrap:!0,ListboxComponent:B,renderGroup:E,options:t.airportNames,value:null===(e=t.currentDestination)||void 0===e?void 0:e.id,onChange:function(e,a){Object(V.h)((function(){t.currentDestination.id=a||"",t.currentDestination.selectedRunway="",t.computed=!1}))},renderInput:function(e){return Object(n.jsx)(se,Object(A.a)(Object(A.a)({},e),{},{variant:"outlined",label:"Landing airport"}))},renderOption:function(e){return Object(n.jsx)(y.a,{noWrap:!0,children:e})}})}));function de(){var e=Object(x.a)(["\n  display: block;\n  margin-top: 10px;\n  width: 210px;\n"]);return de=function(){return e},e}var le=Object(v.a)(S.a)(de()),xe=Object(D.a)((function(){var e=Object(i.useContext)(oe);return Object(n.jsx)(F.a,{id:"combo-box-demo",options:e.currentDestination.id?Object.keys(e.airports[e.currentDestination.id].runways):[],getOptionLabel:function(e){return e},disabled:!e.currentDestination.id,value:e.currentDestination.selectedRunway,onChange:function(){var t=Object(d.a)(u.a.mark((function t(a,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(V.h)((function(){e.currentDestination.selectedRunway=n||"",e.computed=!1})),e.currentDestination.id;case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),renderInput:function(e){return Object(n.jsx)(le,Object(A.a)(Object(A.a)({},e),{},{label:"Landing runway",variant:"outlined"}))}},e.currentDestination.id)})),ve=a(54),fe=a(154),pe=a(163),be=a(166);function he(){var e=Object(x.a)(["\n  min-width: 200px;\n"]);return he=function(){return e},e}function me(){var e=Object(x.a)(["\n  display: block;\n  margin: 10px;\n  min-width: 200px;\n"]);return me=function(){return e},e}var ge=Object(v.a)(fe.a)(me()),je=Object(v.a)(pe.a)(he()),Oe=function(e){var t=e.label,a=(e.fieldName,e.items),i=e.value,r=e.onChange;return Object(n.jsxs)(ge,{children:[Object(n.jsx)(be.a,{children:t}),Object(n.jsx)(je,{value:i||"",onChange:function(t){r(t,e)},children:a.map((function(e){return Object(n.jsx)(M.a,{value:e.value,children:e.title},e.value)}))})]})},we=a(157);function Me(){var e=Object(x.a)(["\n  display: block;\n  margin-top: 10px;\n  width: 210px;\n"]);return Me=function(){return e},e}var ye=Object(v.a)(S.a)(Me()),ke=Object(D.a)((function(e){var t=e.endAdorment,a=e.label,i=e.expectedType,r=e.value,o=e.onChange;return console.log(a,r),Object(n.jsx)(ye,{variant:"outlined",label:a,type:"string"===i?"string":"number",size:"small",value:r||(0===r?0:""),InputProps:{endAdornment:Object(n.jsx)(we.a,{position:"end",children:t})},onChange:function(t){o(t,e)}})}));function Ce(){var e=Object(x.a)(["\n  display: block;\n  margin-top: 10px;\n  width: 210px;\n"]);return Ce=function(){return e},e}Object(v.a)(S.a)(Ce());var De=Object(D.a)((function(){var e=i.useContext(oe),t=function(t,a){var n;switch(a.expectedType){case"integer":n=t.target.value?parseInt(t.target.value):void 0;break;case"float":n=t.target.value?parseFloat(t.target.value):void 0;break;case"string":n=t.target.value?t.target.value:""}Object(V.h)((function(){e.currentDestination=Object(A.a)(Object(A.a)({},e.currentDestination),{},Object(ve.a)({},a.fieldName,n)),e.computed=!1}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Oe,{label:"RWY Breaking Action",expectedType:"string",fieldName:"brakingAction",value:e.currentDestination.brakingAction,onChange:function(t,a){var n;switch(a.expectedType){case"integer":n=t.target.value?parseInt(t.target.value||""):void 0;break;case"string":n=t.target.value?t.target.value:""}Object(V.h)((function(){e.currentDestination[a.fieldName]=n,e.computed=!1}))},items:[{title:"Dry",value:"dry"},{title:"Good",value:"good"},{title:"Medium",value:"medium"},{title:"Poor",value:"poor"}]}),Object(n.jsx)(ke,{expectedType:"integer",label:"Landing Altitude",fieldName:"landingAlt",endAdorment:"ft.",onChange:t,value:e.currentDestination.landingAlt}),Object(n.jsx)(ke,{expectedType:"integer",label:"Temperature (C)",fieldName:"temperature",endAdorment:"\xb0 C",onChange:t,value:e.currentDestination.temperature}),Object(n.jsx)(ke,{expectedType:"integer",label:"Runway heading",fieldName:"runwayHeading",endAdorment:"\xb0",onChange:t,value:e.currentDestination.runwayHeading}),Object(n.jsx)(ke,{expectedType:"integer",label:"Wind direction",fieldName:"windDirection",endAdorment:"\xb0",onChange:t,value:e.currentDestination.windDirection}),Object(n.jsx)(ke,{expectedType:"integer",label:"Wind speed",fieldName:"windSpeed",endAdorment:"kts",onChange:t,value:e.currentDestination.windSpeed}),Object(n.jsx)(ke,{expectedType:"float",label:"Runway slope",fieldName:"rwySlope",endAdorment:"%",onChange:t,value:e.currentDestination.rwySlope})]})})),Ae=Object(D.a)((function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"Airport configuration"}),Object(n.jsx)(ue,{}),Object(n.jsx)(xe,{}),Object(n.jsx)(De,{})]})})),Se=Object(D.a)((function(){var e,t,a,r,o,c=Object(i.useContext)(oe),s=function(e,t){var a;switch(t.expectedType){case"integer":a=e.target.value?parseInt(e.target.value||""):void 0;break;case"string":a=e.target.value?e.target.value:""}Object(V.h)((function(){var e;"b767"===(null===(e=c.aircraftConfiguration)||void 0===e?void 0:e.type)?(c.aircraftConfiguration[t.fieldName]=a,c.computed=!1,console.log(c.aircraftConfiguration)):alert("Unsupported aircraft type")}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Aircraft configuration"}),Object(n.jsx)(Oe,{label:"Autobrakes",fieldName:"autobrakes",expectedType:"string",value:null===(e=c.aircraftConfiguration)||void 0===e?void 0:e.autobrakes,onChange:s,items:[{title:"Max Manual",value:"max"},{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"Autobrake Max",value:"aMax"}]}),Object(n.jsx)(Oe,{label:"Flaps",fieldName:"flaps",expectedType:"integer",value:null===(t=c.aircraftConfiguration)||void 0===t?void 0:t.flaps,onChange:s,items:[{title:"25",value:25},{title:"30",value:30}]}),Object(n.jsx)(Oe,{label:"Reversers",fieldName:"reversers",expectedType:"string",value:null===(a=c.aircraftConfiguration)||void 0===a?void 0:a.reversers,onChange:s,items:[{title:"Both",value:"both"},{title:"1 inop",value:"1 inop"},{title:"2 inop",value:"2 inop"}]}),Object(n.jsx)(Oe,{label:"Approach speed",fieldName:"vrefAdd",expectedType:"integer",value:null===(r=c.aircraftConfiguration)||void 0===r?void 0:r.vrefAdd,onChange:s,items:[{title:"Vref",value:0},{title:"Vref + 5 kts",value:5},{title:"Vref + 10 kts",value:10},{title:"Vref + 15 kts",value:15},{title:"Vref + 20 kts",value:20}]}),Object(n.jsx)(ke,{expectedType:"float",label:"Landing weight",fieldName:"landingWeight",endAdorment:"tones",value:null===(o=c.aircraftConfiguration)||void 0===o?void 0:o.landingWeight,onChange:function(e,t){var a;switch(t.expectedType){case"integer":a=e.target.value?parseInt(e.target.value):void 0;break;case"float":a=e.target.value?parseFloat(e.target.value):void 0;break;case"string":a=e.target.value?e.target.value:""}Object(V.h)((function(){var e;"b767"===(null===(e=c.aircraftConfiguration)||void 0===e?void 0:e.type)?(c.aircraftConfiguration[t.fieldName]=a,c.computed=!1,console.log(c.aircraftConfiguration)):alert("Unsupported aircraft type")}))}})]})}));function Fe(){var e=Object(x.a)(["\n  width: inherit;\n"]);return Fe=function(){return e},e}function Te(){var e=Object(x.a)(["\n  display: inline-block;\n  margin: 5px;\n"]);return Te=function(){return e},e}var Le=v.a.h4(Te()),Ne=v.a.div(Fe()),Re=Object(D.a)((function(){var e,t=r.a.useContext(oe);return Object(n.jsx)(Ne,{children:t.computed?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(Le,{style:{display:"inline-block"},children:"Landing distance required:"})," ".concat(t.currentDestination.LDR," ft. required of ").concat(t.currentDestination.LDA," ft. available")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(Le,{children:t.currentDestination.headwind&&(null===(e=t.currentDestination)||void 0===e?void 0:e.headwind)>=0?"Headwind: ":"Tailwind: "})," ".concat(Math.abs(t.currentDestination.headwind||0).toFixed(0)," kts")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(Le,{children:"Crosswind: "})," ".concat(Math.abs(t.currentDestination.crosswind||0).toFixed(0)," kts")]})]}):void 0})}));function We(){var e=Object(x.a)(["\n  // width: 400px;\n  display: flex;\n  @media screen {\n    /* background: black;  */\n  }\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n  }\n"]);return We=function(){return e},e}function Ie(){var e=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n  }\n"]);return Ie=function(){return e},e}function Be(){var e=Object(x.a)(["\n  margin-top: 10px;\n  width: 210px;\n  display: block;\n"]);return Be=function(){return e},e}var Ee=Object(v.a)(C.a)(Be()),He=v.a.div(Ie()),Pe=v.a.div(We());var Ve=Object(D.a)((function(){var e=r.a.useContext(oe);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{textAlign:"center"},children:"Landing distance"}),Object(n.jsxs)(He,{children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)(Pe,{children:[Object(n.jsx)(Ae,{}),Object(n.jsx)(Se,{})]}),Object(n.jsx)(Ee,{variant:"contained",color:"primary",onClick:Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.calculateLDR());case 1:case"end":return t.stop()}}),t)}))),children:"Calculate"})]}),Object(n.jsx)(Re,{})]})]})}));function Ge(){var e=Object(x.a)(["\n  color: black;\n  text-decoration: none;\n"]);return Ge=function(){return e},e}function Je(){var e=Object(x.a)(["\n  flex-grow: 1;\n"]);return Je=function(){return e},e}function qe(){var e=Object(x.a)(["\n  width: 70%;\n  margin: auto;\n"]);return qe=function(){return e},e}var ze=v.a.div(qe()),Ue=v.a.nav(Je()),Xe=Object(v.a)(f.b)(Ge());function Ye(){var e=r.a.useState(null),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(i.useContext)(oe),s=function(){o(null)};return r.a.useEffect((function(){!function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://knidarkness.github.io/SimpleEFB","/airports.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c.loadAirportsData(a),console.log("Loaded airport data.");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(n.jsxs)(f.a,{basename:"/",children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(Ue,{children:Object(n.jsx)(g.a,{position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(O.a,{onClick:function(e){o(e.currentTarget)},children:Object(n.jsx)(m.a,{})}),Object(n.jsxs)(w.a,{anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:s,children:[Object(n.jsx)(Xe,{to:"/",children:Object(n.jsx)(M.a,{onClick:s,children:"Home"})}),Object(n.jsx)(Xe,{to:"/landing",children:Object(n.jsx)(M.a,{onClick:s,children:"Boeing 767 - Landing"})})]}),Object(n.jsx)(y.a,{variant:"h6",children:"SimpleEFB"})]})})}),Object(n.jsx)(ze,{children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/landing",children:Object(n.jsx)(Ve,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(k,{})})]})})]})}var _e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,168)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};c.a.render(Object(n.jsx)(oe.Provider,{value:re(),children:Object(n.jsx)(Ye,{})}),document.getElementById("root")),_e()}},[[112,1,2]]]);
//# sourceMappingURL=main.31ee71dc.chunk.js.map