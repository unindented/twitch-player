(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{164:function(e,t,r){"use strict";r(73),r(72),r(38);var n=r(385),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(74),u=r(165);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(e){var t=e.level,r=e.children,a=e.testID,o=void 0===a?"heading":a,i=s(Object(n.a)(),1)[0],c=i.colors,f=i.layout,b=i.typography,p=[y.root,{color:c.heading,fontSize:"1"===t?b.sizePrimary:"2"===t?b.sizeSecondary:b.sizeTertiary,marginHorizontal:f.gapExtraLarge,marginTop:f.gapLarge}];return l.a.createElement(u.a,{accessibilityRole:"heading","aria-level":t,style:p,testID:o},r)};f.propTypes={level:o.a.oneOf(["1","2","3"]).isRequired,children:o.a.node.isRequired,testID:o.a.string};var y=c.a.create({root:{fontWeight:"bold"}});t.a=f},165:function(e,t,r){"use strict";r(83),r(73),r(72),r(38),r(25),r(24),r(78);var n=r(385),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(107);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}}return a}var y=function(e){var t=e.style,r=void 0===t?[]:t,a=f(e,["style"]),o=s(Object(n.a)(),1)[0].typography,i=[{fontFamily:o.family,lineHeight:"".concat(o.lineHeight)}].concat(r);return l.a.createElement(c.a,u({},a,{style:i}))};y.propTypes={style:o.a.any};t.a=Object(i.memo)(y)},207:function(e,t,r){"use strict";var n=r(70),a=r(382);t.a=function(){return Object(n.useContext)(a.a)}},398:function(e,t,r){"use strict";r.r(t);var n=r(135),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(76),u=(r(73),r(72),r(38),r(385)),s=r(207),f=(r(83),r(101)),y=r(110),b=r(192),p=r(74),h=r(109);function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})));n.forEach(function(t){d(e,t,r[t])})}return e}function d(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g="0px 1px 3px rgba(0,0,0,0.5)",O=g+", 0 0 0 10px rgba(0,0,0,0.1)",j=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this)._handleChange=function(e){var r=t.props.onValueChange;r&&r(e.nativeEvent.target.checked)};t._handleFocusState=function(e){var r="focus"===e.nativeEvent.type?O:g;t._thumbElement&&t._thumbElement.setNativeProps({style:{boxShadow:r}})};t._setCheckboxRef=function(e){t._checkboxElement=e};t._setThumbRef=function(e){t._thumbElement=e};return t}var r=t.prototype;r.blur=function(){h.a.blur(this._checkboxElement)};r.focus=function(){h.a.focus(this._checkboxElement)};r.render=function(){var e=this.props,t=e.accessibilityLabel,r=e.activeThumbColor,n=e.activeTrackColor,a=e.disabled,o=(e.onValueChange,e.style),i=e.thumbColor,u=e.trackColor,s=e.value,f=e.onTintColor,h=e.thumbTintColor,v=e.tintColor,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}return a}(e,["accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value","onTintColor","thumbTintColor","tintColor"]),g=p.a.flatten(o),O=g.height,j=g.width,C=O||20,k=Object(b.a)(C,2),T=j>k?j:k,E=Object(b.a)(C,.5),S=s?f||n:v||u,x=s?r:h||i,I=C,D=I,_=[w.root,o,{height:C,width:T},a&&w.cursorDefault],P=[w.track,{backgroundColor:S,borderRadius:E},a&&w.disabledTrack],A=[w.thumb,{backgroundColor:x,height:I,width:D},a&&w.disabledThumb],z=Object(y.a)("input",{accessibilityLabel:t,checked:s,disabled:a,onBlur:this._handleFocusState,onChange:this._handleChange,onFocus:this._handleFocusState,ref:this._setCheckboxRef,style:[w.nativeControl,w.cursorInherit],type:"checkbox"});return l.a.createElement(c.a,m({},d,{style:_}),l.a.createElement(c.a,{style:P}),l.a.createElement(c.a,{ref:this._setThumbRef,style:[A,s&&w.thumbOn,{marginStart:s?Object(b.a)(D,-1):0}]}),z)};return t}(i.Component);j.displayName="Switch";j.defaultProps={activeThumbColor:"#009688",activeTrackColor:"#A3D3CF",disabled:!1,style:{},thumbColor:"#FAFAFA",trackColor:"#939393",value:!1};j.propTypes={};var w=p.a.create({root:{cursor:"pointer",userSelect:"none"},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},track:v({},p.a.absoluteFillObject,{height:"70%",margin:"auto",transitionDuration:"0.1s",width:"100%"}),disabledTrack:{backgroundColor:"#D5D5D5"},thumb:{alignSelf:"flex-start",borderRadius:"100%",boxShadow:g,start:"0%",transform:[{translateZ:0}],transitionDuration:"0.1s"},thumbOn:{start:"100%"},disabledThumb:{backgroundColor:"#BDBDBD"},nativeControl:v({},p.a.absoluteFillObject,{height:"100%",margin:0,opacity:0,padding:0,width:"100%"})}),C=Object(f.a)(j);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=Object(i.memo)(function(e){var t=Object.assign({},e),r=T(Object(u.a)(),1)[0].colors;return l.a.createElement(C,k({},t,{thumbColor:r.switchThumb,trackColor:r.switchTrack,activeThumbColor:r.switchActiveThumb,activeTrackColor:r.switchActiveTrack}))}),S=r(165);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){var t=e.testID,r=void 0===t?"debug-switch":t,a=Object(n.b)().t,o=x(Object(u.a)(),1)[0],i=o.colors,c=o.typography,f=x(Object(s.a)(),2),y=f[0],b=f[1],p={color:i.bodyText,fontSize:c.sizeSecondary};return l.a.createElement(S.a,{accessibilityRole:"label",testID:r},l.a.createElement(S.a,{style:p},a("pages.settings.debugHeading")),l.a.createElement(E,{value:y,testID:"".concat(r,"-checkbox"),onValueChange:b}))};I.propTypes={testID:o.a.string};var D=Object(i.memo)(I),_=r(164),P=(r(131),r(79));r(78),r(25),r(24);var A=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.color,r=e.label,n=e.testID,a=e.value,o={color:t};return Object(y.a)("option",{style:o,testID:n,value:a},r)};return t}(i.Component);A.propTypes={};function z(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}var R=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this)._handleChange=function(e){var r=t.props.onValueChange,n=e.target,a=n.selectedIndex,o=n.value;r&&r(o,a)};return t}t.prototype.render=function(){var e=this.props,t=e.children,r=e.enabled,n=e.selectedValue,a=e.style,o=e.testID,i=(e.itemStyle,e.mode,e.prompt,e.onValueChange,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}return a}(e,["children","enabled","selectedValue","style","testID","itemStyle","mode","prompt","onValueChange"]));return Object(y.a)("select",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})));n.forEach(function(t){z(e,t,r[t])})}return e}({children:t,disabled:!1===r||void 0,onChange:this._handleChange,style:[F.initial,a],testID:o,value:n},i))};return t}(i.Component);R.Item=A;R.propTypes={};var F=p.a.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}}),V=Object(f.a)(R),H=r(107);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}}return a}var N=function(e){var t=e.values,r=q(e,["values"]),n=L(Object(u.a)(),1)[0],a=n.colors,o={fontSize:n.typography.sizeSecondary},i=[J.picker,{backgroundColor:a.bodyBackground,borderColor:a.border,color:a.bodyText}],c=Object.keys(t).map(function(e){return l.a.createElement(V.Item,{key:e,label:t[e],value:e})});return l.a.createElement(H.a,{style:o},l.a.createElement(V,B({},r,{style:i}),c))};N.propTypes={values:o.a.object.isRequired};var J=p.a.create({picker:{width:"100%"}}),U=Object(i.memo)(N);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(e){var t=e.testID,r=void 0===t?"language-picker":t,a=Object(n.b)(),o=a.i18n,c=a.t,s=M(Object(u.a)(),1)[0],f=s.colors,y=s.typography,b=o.languages.find(function(e){return P.b.hasOwnProperty(e)}),p=Object(i.useCallback)(function(e){o.changeLanguage(e)},[]),h={color:f.bodyText,fontSize:y.sizeSecondary};return l.a.createElement(S.a,{accessibilityRole:"label"},l.a.createElement(S.a,{style:h},c("pages.settings.languageHeading")),l.a.createElement(U,{values:P.b,selectedValue:b,testID:r,onValueChange:p}))};W.propTypes={testID:o.a.string};var Z=Object(i.memo)(W),G=r(182),K=r(146),Q=r(147);function X(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}var Y={colors:G.a,layout:K.a,typography:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})));n.forEach(function(t){X(e,t,r[t])})}return e}({},Q.a,{family:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif"})},$=r(407);function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){r.push(i.value);if(t&&r.length===t)break}}catch(e){a=!0;o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var te=function(e){var t=e.testID,r=void 0===t?"theme-switch":t,a=Object(n.b)().t,o=ee(Object(u.a)(),2),i=o[0],c=o[1],s=i===Y,f={color:i.colors.bodyText,fontSize:i.typography.sizeSecondary};return l.a.createElement(S.a,{accessibilityRole:"label",testID:r},l.a.createElement(S.a,{style:f},a("pages.settings.themeHeading")),l.a.createElement(E,{value:s,onValueChange:function(e){return c(e?Y:$.a)}}))};te.propTypes={testID:o.a.string};var re=Object(i.memo)(te),ne=function(){var e=Object(n.b)().t;return l.a.createElement(c.a,null,l.a.createElement(_.a,{level:"2"},e("pages.settings.mainHeading")),l.a.createElement(Z,null),l.a.createElement(re,null),l.a.createElement(D,null))};ne.propTypes={testID:o.a.string};var ae=Object(i.memo)(ne);r.d(t,"default",function(){return ae})}}]);
//# sourceMappingURL=settings.js.map