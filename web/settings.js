(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(e,t,r){"use strict";r(73),r(72),r(38);var n=r(390),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(74),u=r(166);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e){var t=e.level,r=e.children,a=e.testID,o=void 0===a?"heading":a,i=s(Object(n.a)(),1)[0],c=i.colors,y=i.layout,h=i.typography,f=[b.root,{color:c.heading,fontSize:"1"===t?h.sizePrimary:"2"===t?h.sizeSecondary:h.sizeTertiary,marginHorizontal:y.gapExtraLarge,marginTop:y.gapLarge}];return l.a.createElement(u.a,{accessibilityRole:"heading","aria-level":t,style:f,testID:o},r)};y.propTypes={level:o.a.oneOf(["1","2","3"]).isRequired,children:o.a.node.isRequired,testID:o.a.string};var b=c.a.create({root:{fontWeight:"bold"}});t.a=y},166:function(e,t,r){"use strict";r(83),r(73),r(72),r(38),r(25),r(24),r(78);var n=r(390),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(108);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=function(e){var t=e.style,r=void 0===t?[]:t,a=y(e,["style"]),o=s(Object(n.a)(),1)[0].typography,i=[{fontFamily:o.family,lineHeight:"".concat(o.lineHeight)}].concat(r);return l.a.createElement(c.a,u({},a,{style:i}))};b.propTypes={style:o.a.any},t.a=Object(i.memo)(b)},211:function(e,t,r){"use strict";var n=r(70),a=r(387);t.a=function(){return Object(n.useContext)(a.a)}},403:function(e,t,r){"use strict";r.r(t);var n=r(136),a=r(71),o=r.n(a),i=r(70),l=r.n(i),c=r(76),u=(r(73),r(72),r(38),r(390)),s=r(211),y=(r(83),r(101)),b=r(111),h=r(197),f=r(74),p=r(110);function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){v(e,t,r[t])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g="0px 1px 3px rgba(0,0,0,0.5)",O=g+", 0 0 0 10px rgba(0,0,0,0.1)",w=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this)._handleChange=function(e){var r=t.props.onValueChange;r&&r(e.nativeEvent.target.checked)},t._handleFocusState=function(e){var r="focus"===e.nativeEvent.type?O:g;t._thumbElement&&t._thumbElement.setNativeProps({style:{boxShadow:r}})},t._setCheckboxRef=function(e){t._checkboxElement=e},t._setThumbRef=function(e){t._thumbElement=e},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.blur=function(){p.a.blur(this._checkboxElement)},a.focus=function(){p.a.focus(this._checkboxElement)},a.render=function(){var e=this.props,t=e.accessibilityLabel,r=e.activeThumbColor,n=e.activeTrackColor,a=e.disabled,o=(e.onValueChange,e.style),i=e.thumbColor,u=e.trackColor,s=e.value,y=e.onTintColor,p=e.thumbTintColor,d=e.tintColor,v=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value","onTintColor","thumbTintColor","tintColor"]),g=f.a.flatten(o),O=g.height,w=g.width,k=O||20,C=Object(h.a)(k,2),T=w>C?w:C,S=Object(h.a)(k,.5),E=s?y||n:d||u,I=s?r:p||i,x=k,D=x,P=[j.root,o,{height:k,width:T},a&&j.cursorDefault],_=[j.track,{backgroundColor:E,borderRadius:S},a&&j.disabledTrack],A=[j.thumb,{backgroundColor:I,height:x,width:D},a&&j.disabledThumb],z=Object(b.a)("input",{accessibilityLabel:t,checked:s,disabled:a,onBlur:this._handleFocusState,onChange:this._handleChange,onFocus:this._handleFocusState,ref:this._setCheckboxRef,style:[j.nativeControl,j.cursorInherit],type:"checkbox"});return l.a.createElement(c.a,m({},v,{style:P}),l.a.createElement(c.a,{style:_}),l.a.createElement(c.a,{ref:this._setThumbRef,style:[A,s&&j.thumbOn,{marginStart:s?Object(h.a)(D,-1):0}]}),z)},n}(i.Component);w.displayName="Switch",w.defaultProps={activeThumbColor:"#009688",activeTrackColor:"#A3D3CF",disabled:!1,style:{},thumbColor:"#FAFAFA",trackColor:"#939393",value:!1},w.propTypes={};var j=f.a.create({root:{cursor:"pointer",userSelect:"none"},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},track:d({},f.a.absoluteFillObject,{height:"70%",margin:"auto",transitionDuration:"0.1s",width:"100%"}),disabledTrack:{backgroundColor:"#D5D5D5"},thumb:{alignSelf:"flex-start",borderRadius:"100%",boxShadow:g,start:"0%",transform:[{translateZ:0}],transitionDuration:"0.1s"},thumbOn:{start:"100%"},disabledThumb:{backgroundColor:"#BDBDBD"},nativeControl:d({},f.a.absoluteFillObject,{height:"100%",margin:0,opacity:0,padding:0,width:"100%"})}),k=Object(y.a)(w);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=Object(i.memo)(function(e){var t=Object.assign({},e),r=T(Object(u.a)(),1)[0].colors;return l.a.createElement(k,C({},t,{thumbColor:r.switchThumb,trackColor:r.switchTrack,activeThumbColor:r.switchActiveThumb,activeTrackColor:r.switchActiveTrack}))}),E=r(166);function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(e){var t=e.testID,r=void 0===t?"debug-switch":t,a=Object(n.b)().t,o=I(Object(u.a)(),1)[0],i=o.colors,c=o.typography,y=I(Object(s.a)(),2),b=y[0],h=y[1],f={color:i.bodyText,fontSize:c.sizeSecondary};return l.a.createElement(E.a,{accessibilityRole:"label",testID:r},l.a.createElement(E.a,{style:f},a("pages.settings.debugHeading")),l.a.createElement(S,{value:b,testID:"".concat(r,"-checkbox"),onValueChange:h}))};x.propTypes={testID:o.a.string};var D=Object(i.memo)(x),P=r(165),_=(r(132),r(79));r(78),r(25),r(24);var A=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.color,r=e.label,n=e.testID,a=e.value,o={color:t};return Object(b.a)("option",{style:o,testID:n,value:a},r)},n}(i.Component);function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}A.propTypes={};var H=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this)._handleChange=function(e){var r=t.props.onValueChange,n=e.target,a=n.selectedIndex,o=n.value;r&&r(o,a)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.children,r=e.enabled,n=e.selectedValue,a=e.style,o=e.testID,i=(e.itemStyle,e.mode,e.prompt,e.onValueChange,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","enabled","selectedValue","style","testID","itemStyle","mode","prompt","onValueChange"]));return Object(b.a)("select",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){z(e,t,r[t])})}return e}({children:t,disabled:!1===r||void 0,onChange:this._handleChange,style:[R.initial,a],testID:o,value:n},i))},n}(i.Component);H.Item=A,H.propTypes={};var R=f.a.create({initial:{fontFamily:"System",fontSize:"inherit",margin:0}}),F=Object(y.a)(H),B=r(108);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var N=function(e){var t=e.values,r=q(e,["values"]),n=L(Object(u.a)(),1)[0],a=n.colors,o={fontSize:n.typography.sizeSecondary},i=[J.picker,{backgroundColor:a.bodyBackground,borderColor:a.border,color:a.bodyText}],c=Object.keys(t).map(function(e){return l.a.createElement(F.Item,{key:e,label:t[e],value:e})});return l.a.createElement(B.a,{style:o},l.a.createElement(F,V({},r,{style:i}),c))};N.propTypes={values:o.a.object.isRequired};var J=f.a.create({picker:{width:"100%"}}),U=Object(i.memo)(N);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(e){var t=e.testID,r=void 0===t?"language-picker":t,a=Object(n.b)(),o=a.i18n,c=a.t,s=M(Object(u.a)(),1)[0],y=s.colors,b=s.typography,h=o.languages.find(function(e){return _.b.hasOwnProperty(e)}),f=Object(i.useCallback)(function(e){o.changeLanguage(e)},[]),p={color:y.bodyText,fontSize:b.sizeSecondary};return l.a.createElement(E.a,{accessibilityRole:"label"},l.a.createElement(E.a,{style:p},c("pages.settings.languageHeading")),l.a.createElement(U,{values:_.b,selectedValue:h,testID:r,onValueChange:f}))};W.propTypes={testID:o.a.string};var Z=Object(i.memo)(W),G=r(185),K={bodyBackground:G.a.themeTertiary,bodyText:G.a.white,bodySubtext:G.a.light,border:G.a.light,link:G.a.themePrimary,linkHover:G.a.themeSecondary,heading:G.a.light,itemPrimary:G.a.white,itemSecondary:G.a.light,itemPrimaryHover:G.a.black,itemSecondaryHover:G.a.dark,itemBackground:G.a.dark,itemBackgroundHover:G.a.light,itemShadowHover:"rgba(255, 255, 255, 0.2)",liveIndicator:G.a.white,liveIndicatorBackground:"rgba(0, 0, 0, 0.6)",liveIndicatorDot:G.a.red,navBackground:G.a.themeSecondary,navBackgroundHover:G.a.themePrimary,spinner:G.a.themePrimary,switchTrack:G.a.dark,switchThumb:G.a.black,switchActiveTrack:G.a.dark,switchActiveThumb:G.a.themePrimary},Q=r(186),X=r(187);function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $={colors:K,layout:Q.a,typography:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Y(e,t,r[t])})}return e}({},X.a,{family:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif"})},ee=r(414);function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var re=function(e){var t=e.testID,r=void 0===t?"theme-switch":t,a=Object(n.b)().t,o=te(Object(u.a)(),2),i=o[0],c=o[1],s=i===$,y={color:i.colors.bodyText,fontSize:i.typography.sizeSecondary};return l.a.createElement(E.a,{accessibilityRole:"label",testID:r},l.a.createElement(E.a,{style:y},a("pages.settings.themeHeading")),l.a.createElement(S,{value:s,onValueChange:function(e){return c(e?$:ee.a)}}))};re.propTypes={testID:o.a.string};var ne=Object(i.memo)(re),ae=function(){var e=Object(n.b)().t;return l.a.createElement(c.a,null,l.a.createElement(P.a,{level:"2"},e("pages.settings.mainHeading")),l.a.createElement(Z,null),l.a.createElement(ne,null),l.a.createElement(D,null))};ae.propTypes={testID:o.a.string};var oe=Object(i.memo)(ae);r.d(t,"default",function(){return oe})}}]);
//# sourceMappingURL=settings.js.map