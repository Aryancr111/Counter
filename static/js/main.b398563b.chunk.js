(this.webpackJsonpcounter3=this.webpackJsonpcounter3||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),c=n(5),a=n.n(c),i=(n(10),n(3)),u=n(0),d=function(e){var t=e.label,n=void 0===t?"":t,r=e.width,o=void 0===r?60:r,c=e.height,a=void 0===c?"100%":c,i=e.color,d=void 0===i?"primary":i,l=e.backgroundColor,b=void 0===l?"tertiary":l,v=e.borderWidth,s=void 0===v?1:v,h=e.borderStyle,m=void 0===h?"solid":h,j=e.borderColor,p=void 0===j?"primary":j,f=e.onClick,x=void 0===f?function(){}:f,y=e.disabled,O=void 0!==y&&y,C={primary:"primary",secondary:"secondary",tertiary:"tertiary"},g={width:o,height:a,cursor:O?"auto":"pointer",borderWidth:s,borderStyle:m,borderColor:"var(--".concat(C[p],"-color)"),color:"var(--".concat(C[d],"-color)"),backgroundColor:"var(--".concat(C[b],"-color)")};return Object(u.jsx)("button",{style:g,onClick:x,disabled:O,children:n})},l=(n(12),function(e){var t=e.value,n=void 0===t?1:t,r=e.max,o=void 0===r?1e3:r,c=e.handleDecrement,a=void 0===c?function(){}:c,i=e.handleIncrement,l=void 0===i?function(){}:i,b=e.onChange,v=void 0===b?function(){}:b;return Object(u.jsxs)("div",{className:"counter",children:[Object(u.jsx)(d,{label:"-",width:60,height:56,color:"primary",backgroundColor:"tertiary",borderWidth:"0 1px 0 0",borderColor:"primary",onClick:a}),Object(u.jsx)("input",{type:"number",className:"count-input","aria-label":"Count",value:n,max:o,onChange:v}),Object(u.jsx)(d,{label:"+",width:60,height:56,color:"tertiary",backgroundColor:"primary",borderWidth:"0 0 0 1px",borderColor:"primary",disabled:n===o,onClick:l})]})}),b=function(e){var t=e.count,n=void 0===t?1:t,r=e.max,o=void 0===r?1e3:r,c=e.handleDecrement,a=void 0===c?function(){}:c,i=e.handleIncrement,d=void 0===i?function(){}:i,b=e.onChange,v=void 0===b?function(){}:b;return Object(u.jsx)(l,{value:n,max:o,handleDecrement:a,handleIncrement:d,onChange:v})},v=n(1),s={count:1,max:1e3};function h(e,t){switch(t.type){case"increment":var n=e.count+1;return Object(v.a)(Object(v.a)({},e),{},{count:n<=e.max?n:e.count});case"decrement":return Object(v.a)(Object(v.a)({},e),{},{count:e.count-1});case"absolute":return Object(v.a)(Object(v.a)({},e),{},{count:+t.value<=e.max?+t.value:e.count});default:return e}}n(13);var m=function(e){var t=e.initialValue,n=void 0===t?1:t,o=e.max,c=function(e){var t=Object(r.useReducer)(h,Object(v.a)(Object(v.a)({},s),e)),n=Object(i.a)(t,2);return[n[0],n[1]]}({count:n,max:void 0===o?1e3:o}),a=Object(i.a)(c,2),d=a[0],l=a[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)(b,{count:d.count,max:d.max,handleDecrement:function(){return l({type:"decrement"})},handleIncrement:function(){return l({type:"increment"})},onChange:function(e){return l({type:"absolute",value:e.target.value})}})})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.b398563b.chunk.js.map