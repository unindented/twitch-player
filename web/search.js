(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{165:function(e,t,r){"use strict";r(73),r(72),r(38);var n=r(390),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(74),u=r(166);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e){var t=e.level,r=e.children,a=e.testID,o=void 0===a?"heading":a,i=s(Object(n.a)(),1)[0],c=i.colors,y=i.layout,p=i.typography,v=[f.root,{color:c.heading,fontSize:"1"===t?p.sizePrimary:"2"===t?p.sizeSecondary:p.sizeTertiary,marginHorizontal:y.gapExtraLarge,marginTop:y.gapLarge}];return l.a.createElement(u.a,{accessibilityRole:"heading","aria-level":t,style:v,testID:o},r)};y.propTypes={level:o.a.oneOf(["1","2","3"]).isRequired,children:o.a.node.isRequired,testID:o.a.string};var f=c.a.create({root:{fontWeight:"bold"}});t.a=y},166:function(e,t,r){"use strict";r(83),r(73),r(72),r(38),r(25),r(24),r(78);var n=r(390),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(108);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=function(e){var t=e.style,r=void 0===t?[]:t,a=y(e,["style"]),o=s(Object(n.a)(),1)[0].typography,i=[{fontFamily:o.family,lineHeight:"".concat(o.lineHeight)}].concat(r);return l.a.createElement(c.a,u({},a,{style:i}))};f.propTypes={style:o.a.any},t.a=Object(i.memo)(f)},412:function(e,t,r){"use strict";r.r(t);var n=r(136),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(76),u=r(165),s=function(){var e=Object(n.b)().t;return l.a.createElement(c.a,null,l.a.createElement(u.a,{level:"2"},e("pages.search.mainHeading")))};s.propTypes={testID:o.a.string};var y=Object(i.memo)(s);r.d(t,"default",function(){return y})}}]);
//# sourceMappingURL=search.js.map