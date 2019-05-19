(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(e,t,r){"use strict";r(86);var a=r(82),n=r.n(a),i=r(204),o=r(132);function c(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query TopCategories($first: Int!) {\n    categories: games(first: $first) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          ...Category\n          tags(tagType: CONTENT) {\n            ...Tag\n          }\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);c=function(){return e};return e}t.a=n()(c(),i.a,o.a)},339:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(388),n=r(117),i=function(e){return e.categories.edges},o=Object(n.a)(i),c=Object(a.a)(Object(n.b)(i),o)},340:function(e,t,r){"use strict";r(86);var a=r(82),n=r.n(a),i=r(405);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query TopChannels($first: Int!, $platformType: PlatformType = all) {\n    channels: streams(first: $first, platformType: $platformType) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          ...Channel\n        }\n      }\n    }\n  }\n  ","\n"]);o=function(){return e};return e}t.a=n()(o(),i.a)},352:function(e,t,r){"use strict";var a=r(70),n=r.n(a),i=r(386),o=(r(73),r(72),r(38),r(94),r(206)),c=r(385),u=r(71),l=r.n(u),s=r(74),d=r(410),m=r(409),f=r(135),g=r(76),y=r(165);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){r.push(o.value);if(t&&r.length===t)break}}catch(e){n=!0;i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var t=e.name,r=e.viewersCount,a=e.width,i=e.isHighlighted,o=e.testID,u=void 0===o?"category-item-detail":o,l=Object(f.b)().t,s=p(Object(c.a)(),1)[0],d=s.colors,m=s.layout,h=s.typography,v={paddingHorizontal:m.gapMedium,paddingVertical:m.gapSmall,width:a},O=[b.primaryText,{color:i?d.itemPrimaryHover:d.itemPrimary,fontSize:h.sizeSecondary}],I={color:i?d.itemSecondaryHover:d.itemSecondary,fontSize:h.sizeTertiary};return n.a.createElement(g.a,{style:v,testID:u},n.a.createElement(y.a,{"aria-hidden":!0,numberOfLines:1,style:O},t),n.a.createElement(y.a,{numberOfLines:1,style:I},l("components.item.viewersCount",{count:r})))};h.propTypes={name:l.a.string.isRequired,viewersCount:l.a.number.isRequired,width:l.a.number.isRequired,isHighlighted:l.a.bool,testID:l.a.string};var b=s.a.create({primaryText:{fontWeight:"bold"}}),v=Object(a.memo)(h),O=r(118),I=r(335);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){r.push(o.value);if(t&&r.length===t)break}}catch(e){n=!0;i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var t=e.url,r=e.name,a=e.width,i=e.height,o=e.testID,u=void 0===o?"category-item-image":o,l=j(Object(c.a)(),1)[0],s=l.colors,d=l.layout,m=Object(I.a)(t,d.maxCategoryWidth,d.maxCategoryHeight),f=[E.image,{backgroundColor:s.itemBackground,height:i,width:a}];return n.a.createElement(O.a,{source:{uri:m},accessibilityLabel:r,style:f,testID:u})};w.propTypes={url:l.a.string.isRequired,name:l.a.string.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var E=s.a.create({image:{display:"block"}}),T=Object(a.memo)(w);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){r.push(o.value);if(t&&r.length===t)break}}catch(e){n=!0;i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=function(e){var t=e.item,r=t.name,a=t.boxArtURL,i=t.viewersCount,o=e.width,u=e.height,l=e.testID,s=void 0===l?"category-item":l,f=C(Object(c.a)(),1)[0],g=f.colors,y=f.layout,p=y.gapSmall/2,h=y.gapSmall/2;return n.a.createElement(d.a,null,function(e){var t={backgroundColor:g.itemBackgroundHover,boxShadow:"0 0 ".concat(p,"px ").concat(h,"px ").concat(g.itemShadowHover),transform:[{scale:1.025}]},c=[x.root,e?t:void 0];return n.a.createElement(m.a,{href:"/categories/".concat(r),style:c,activeStyle:t,testID:s},n.a.createElement(T,{url:a,name:r,width:o,height:u,testID:"".concat(s,"-image")}),n.a.createElement(v,{name:r,viewersCount:i,width:o,isHighlighted:e,testID:"".concat(s,"-detail")}))})};D.propTypes={item:o.a.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var x=s.a.create({root:{display:"block",outlineStyle:"none"}}),S=Object(a.memo)(D);function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){r.push(o.value);if(t&&r.length===t)break}}catch(e){n=!0;i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function(e){var t=e.width,r=e.height,a=e.testID,i=void 0===a?"category-item-error":a,o=Object(f.b)().t,u=H(Object(c.a)(),1)[0],l=u.colors,s=u.layout,d=u.typography,m=[R.image,{backgroundColor:l.itemBackground,height:r,width:t}],p={paddingHorizontal:s.gapMedium,paddingVertical:s.gapSmall,width:t},h=[R.detailPrimary,{color:l.itemPrimary,fontSize:d.sizeSecondary}],b={color:l.itemSecondary,fontSize:d.sizeTertiary};return n.a.createElement(g.a,{style:R.root,testID:i},n.a.createElement(g.a,{style:m,testID:"".concat(i,"-image")}),n.a.createElement(g.a,{style:p,testID:"".concat(i,"-detail")},n.a.createElement(y.a,{numberOfLines:1,style:h},o("errors.failedToRender")),n.a.createElement(y.a,{numberOfLines:1,style:b}," ")))};k.propTypes={width:l.a.number.isRequired,height:l.a.number.isRequired,testID:l.a.string};var R=s.a.create({root:{display:"block"},image:{display:"block"},detailPrimary:{fontWeight:"bold",textTransform:"uppercase"}}),q=Object(a.memo)(k);t.a=function(e){return n.a.createElement(i.a,{renderError:function(){return n.a.createElement(q,e)}},n.a.createElement(S,e))}},399:function(e,t,r){"use strict";r.r(t);var a=r(135),n=r(71),i=r.n(n),o=r(70),c=r.n(o),u=r(212),l=(r(86),r(82)),s=r.n(l),d=r(405);function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query FeaturedChannels($first: Int!) {\n    channels: featuredStreams(first: $first) {\n      node: stream {\n        ...Channel\n      }\n    }\n  }\n  ","\n"]);m=function(){return e};return e}var f=s()(m(),d.a),g=r(388),y=r(117),p=function(e){return e.channels},h=Object(y.a)(p),b=Object(g.a)(Object(y.b)(p),h),v=r(325),O=r(401),I=r(411),j=r(74),w=r(76),E=(r(25),r(24),r(78),r(73),r(72),r(38),r(385)),T=r(384),C=r(408);function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})));a.forEach(function(t){x(e,t,r[t])})}return e}function x(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){r.push(o.value);if(t&&r.length===t)break}}catch(e){n=!0;i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=function(e){var t=S(Object(E.a)(),1)[0].layout,r=S(Object(C.a)("main"),1)[0],a={itemCount:e,containerWidth:r.width,maxImageWidth:t.maxCategoryWidth,maxImageHeight:t.maxCategoryHeight,spaceSides:Object(T.f)(r)?t.gapLarge:t.gapExtraLarge,spaceBetween:t.gapSmall,spaceBottom:t.gapMedium,spaceTop:t.gapMedium},n=D({},a,Object(T.e)(a));return D({},n,{getItemLayout:e&&Object(T.c)(n),renderItemStyle:e&&Object(T.d)(n)})},k=function(e){var t=S(Object(E.a)(),1)[0].layout,r=S(Object(C.a)("main"),1)[0],a={itemCount:e,containerWidth:r.width,maxImageWidth:t.maxChannelWidth,maxImageHeight:t.maxChannelHeight,spaceSides:Object(T.f)(r)?t.gapLarge:t.gapExtraLarge,spaceBetween:t.gapSmall,spaceBottom:t.gapMedium,spaceTop:t.gapMedium},n=D({},a,Object(T.e)(a));return D({},n,{getItemLayout:e&&Object(T.c)(n),renderItemStyle:e&&Object(T.d)(n)})},R=r(400),q=r(134),P=r(207);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){r.push(o.value);if(t&&r.length===t)break}}catch(e){n=!0;i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=function(e){var t=e.data,r=e.getItemLayout,a=e.initialNumToRender,n=e.renderItem,i=e.renderHeader,u=e.renderFooter,l=e.testID,s=void 0===l?"horizontal-list":l,d=z(Object(P.a)(),1)[0];return c.a.createElement(w.a,{testID:s},i&&Object(o.createElement)(i),c.a.createElement(q.a,{data:t,debug:d,disableVirtualization:!1,getItemLayout:r,horizontal:!0,initialNumToRender:a,legacyImplementation:!1,numColumns:1,refreshing:!1,renderItem:n}),u&&Object(o.createElement)(u))};L.propTypes={data:i.a.array.isRequired,getItemLayout:i.a.func,initialNumToRender:i.a.number.isRequired,renderItem:i.a.func.isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var A=Object(o.memo)(L),W=function(e){var t=e.list,r=e.renderHeader,a=e.renderFooter,n=e.testID,i=void 0===n?"channel-list":n,u=k(t.length),l=u.numColumns,s=u.imageWidth,d=u.imageHeight,m=u.getItemLayout,f=u.renderItemStyle,g=Object(o.useCallback)(function(e){var t=e.item,r=e.index,a=[F.item,f(r)];return c.a.createElement(w.a,{style:a},c.a.createElement(R.a,{item:t,width:s,height:d}))},[s,d]);return c.a.createElement(A,{key:"".concat(s,"x").concat(d),data:t,getItemLayout:m,initialNumToRender:l+1,renderItem:g,renderHeader:r,renderFooter:a,testID:i})};W.propTypes={list:i.a.arrayOf(I.a).isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var F=j.a.create({item:{display:"block"}}),N=Object(o.memo)(W),$=r(164),B=r(387),M=function(e){var t=e.heading,r=e.testID,a=void 0===r?"featured-channels":r,n=k().numColumns,i=Object(v.a)(1.5*n,3,20),u=Object(O.a)(f,{suspend:!0,variables:{first:i}}),l=u.data,s=u.error,d=u.refetch,m=s?void 0:b(l),g=Object(o.useCallback)(function(){return c.a.createElement($.a,{level:"2"},t)},[t]);return s?c.a.createElement(B.a,{onPress:d}):c.a.createElement(N,{list:m,renderHeader:g,testID:a})};M.propTypes={heading:i.a.string.isRequired,testID:i.a.string};var V=Object(o.memo)(M),J=r(338),U=r(339),X=r(206),G=r(352),K=function(e){var t=e.list,r=e.renderHeader,a=e.renderFooter,n=e.testID,i=void 0===n?"category-list":n,u=H(t.length),l=u.numColumns,s=u.imageWidth,d=u.imageHeight,m=u.getItemLayout,f=u.renderItemStyle,g=Object(o.useCallback)(function(e){var t=e.item,r=e.index,a=[Q.item,f(r)];return c.a.createElement(w.a,{style:a},c.a.createElement(G.a,{item:t,width:s,height:d}))},[s,d]);return c.a.createElement(A,{key:"".concat(s,"x").concat(d),data:t,getItemLayout:m,initialNumToRender:l+1,renderItem:g,renderHeader:r,renderFooter:a,testID:i})};K.propTypes={list:i.a.arrayOf(X.a).isRequired,renderHeader:i.a.any,renderFooter:i.a.any,testID:i.a.string};var Q=j.a.create({item:{display:"block"}}),Y=Object(o.memo)(K),Z=function(e){var t=e.heading,r=e.testID,a=void 0===r?"top-categories":r,n=H().numColumns,i=Object(v.a)(1.5*n,6,40),u=Object(O.a)(J.a,{suspend:!0,variables:{first:i}}),l=u.data,s=u.error,d=u.refetch,m=s?void 0:Object(U.a)(l),f=Object(o.useCallback)(function(){return c.a.createElement($.a,{level:"2"},t)},[t]);return s?c.a.createElement(B.a,{onPress:d}):c.a.createElement(Y,{list:m,renderHeader:f,testID:a})};Z.propTypes={heading:i.a.string.isRequired,testID:i.a.string};var _=Object(o.memo)(Z),ee=r(340),te=r(396),re=function(e){var t=e.heading,r=e.platformType,a=void 0===r?"all":r,n=e.testID,i=void 0===n?"top-channels":n,u=k().numColumns,l=Object(v.a)(1.5*u,3,20),s=Object(O.a)(ee.a,{suspend:!0,variables:{platformType:a,first:l}}),d=s.data,m=s.error,f=s.refetch,g=Object(te.b)(a),y=m?void 0:g(d),p=Object(o.useCallback)(function(){return c.a.createElement($.a,{level:"2"},t)},[t]);return m?c.a.createElement(B.a,{onPress:f}):c.a.createElement(N,{list:y,renderHeader:p,testID:"".concat(i,"-").concat(a)})};re.propTypes={heading:i.a.string.isRequired,platformType:i.a.oneOf(["all","ps4","xbox"]),testID:i.a.string};var ae=Object(o.memo)(re),ne=function(e){var t=e.testID,r=void 0===t?"home-page":t,n=Object(a.b)().t;return c.a.createElement(u.a,{testID:r},c.a.createElement(V,{heading:n("pages.home.featuredChannelsHeading")}),c.a.createElement(_,{heading:n("pages.home.topCategoriesHeading")}),c.a.createElement(ae,{heading:n("pages.home.topChannelsHeading")}),c.a.createElement(ae,{platformType:"ps4",heading:n("pages.home.topPS4ChannelsHeading")}),c.a.createElement(ae,{platformType:"xbox",heading:n("pages.home.topXboxOneChannelsHeading")}))};ne.propTypes={testID:i.a.string};var ie=Object(o.memo)(ne);r.d(t,"default",function(){return ie})}}]);
//# sourceMappingURL=home.js.map