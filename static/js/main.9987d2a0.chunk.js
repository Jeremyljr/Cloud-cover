(this["webpackJsonpcloud-cover"]=this["webpackJsonpcloud-cover"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),i=a.n(s),r=a(3),o=(a(9),a(0)),d="0cc053d27d38802b10e3aa1d9b66c248",l="https://api.openweathermap.org/data/2.5/";var j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),j=i[0],u=i[1];return Object(o.jsx)("div",{className:"undefined"!=typeof j.main?j.main.temp>16?"app":"app cold":"app",children:Object(o.jsx)("main",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"contents",children:[Object(o.jsxs)("div",{className:"searchBar",children:[Object(o.jsx)("input",{list:"MoonTypes",type:"text",className:"searchBox",placeholder:"Search...",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(a,"&units=metric&appid=").concat(d)).then((function(e){return e.json()})).then((function(e){u(e),n("")}))}}),Object(o.jsxs)("datalist",{id:"MoonTypes",children:[Object(o.jsx)("option",{value:"Southampton"}),Object(o.jsx)("option",{value:"Kuala Lumpur"}),Object(o.jsx)("option",{value:"Sydney"}),Object(o.jsx)("option",{value:"New York City"})]})]}),"undefined"!=typeof j.main?Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"hero_1",children:[Object(o.jsxs)("div",{className:"temperature",children:[Math.round(j.main.temp),"\xb0c"]}),Object(o.jsx)("div",{className:"weather",children:j.weather[0].main})]}),Object(o.jsxs)("div",{className:"hero_2",children:[Object(o.jsxs)("div",{className:"location",children:[Object(o.jsx)("div",{className:"locationTitle",children:"Location"}),Object(o.jsx)("span",{className:"divider"}),Object(o.jsxs)("div",{className:"locationDescription",children:[j.name,", ",j.sys.country]})]}),Object(o.jsxs)("div",{className:"date",children:[Object(o.jsx)("div",{className:"dateTitle",children:"Date"}),Object(o.jsx)("span",{className:"divider"}),Object(o.jsx)("div",{className:"dateDescription",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}(new Date)})]})]})]}):""]})})})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.9987d2a0.chunk.js.map