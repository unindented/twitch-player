(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(e,t,n){var o={".":91,"./":91,"./GraphQLLanguageService":128,"./GraphQLLanguageService.js":128,"./GraphQLLanguageService.js.flow":248,"./autocompleteUtils":107,"./autocompleteUtils.js":107,"./autocompleteUtils.js.flow":249,"./getAutocompleteSuggestions":98,"./getAutocompleteSuggestions.js":98,"./getAutocompleteSuggestions.js.flow":250,"./getDefinition":108,"./getDefinition.js":108,"./getDefinition.js.flow":251,"./getDiagnostics":110,"./getDiagnostics.js":110,"./getDiagnostics.js.flow":252,"./getHoverInformation":111,"./getHoverInformation.js":111,"./getHoverInformation.js.flow":253,"./getOutline":127,"./getOutline.js":127,"./getOutline.js.flow":254,"./index":91,"./index.js":91,"./index.js.flow":255};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=157},310:function(e,t,n){"use strict";n.r(t);n(27),n(25),n(30);var o=n(78),r=n.n(o),i=n(114),s=n(172),a=n.n(s);n(287);function u(e,t,n,o,r,i,s){try{var a=e[i](s),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(o,r)}var c=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.twitch.tv/gql",{method:"post",headers:{"Content-Type":"application/json","Client-ID":"jzkbprff40iqj646a697cyrvl0zt2m6"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function s(e){u(i,o,r,s,a,"next",e)}function a(e){u(i,o,r,s,a,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}();t.default=function(e){return Object(i.render)(r.a.createElement(a.a,{fetcher:c}),e)}}}]);
//# sourceMappingURL=render.js.map