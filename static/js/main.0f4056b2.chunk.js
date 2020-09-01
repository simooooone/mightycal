(this.webpackJsonpMightyCalc=this.webpackJsonpMightyCalc||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),c=(a(13),a(3)),i=a(1),s=a(7),u=function(e){var t=e.buttonClass,a=e.onClick,n=e.itemText;return l.a.createElement("button",{className:t,onClick:a},n)},m=function(e){var t=e.value;return l.a.createElement("div",{className:"contDisplay"},l.a.createElement("input",{className:"display",type:"text",value:t,readOnly:!0}))},b=Object(n.memo)((function(e){var t=e.histories,a=Object(n.useRef)(null),o=Object(n.useRef)(null);return Object(n.useEffect)((function(){o.current.scrollTop=o.current.scrollHeight,0!==t.length?a.current.style="display: block":a.current.style="display: none"}),[t]),l.a.createElement("div",{className:"history",ref:a},l.a.createElement("div",{className:"history-internal",ref:o},t.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e),l.a.createElement("br",null))}))))})),d=function(){var e,t=Object(n.useState)({value:0,float:!1,newNumber:!1,history:[],operand:[],numbers:[]}),a=Object(s.a)(t,2),o=a[0],r=a[1],d=function(e){var t=/^\d+$/,a=e.target.innerText;t.test(a)||"\xb1"===a?f(a):"\u2022"===a&&t.test(o.value)?r(Object(i.a)({},o,{float:!0,value:o.value+"."})):"%"===a?r(Object(i.a)({},o,{value:o.value/100})):"C"===a?r(Object(i.a)({},o,{value:0,float:!1,numbers:[],operand:[]})):"-"===a||"+"===a||"x"===a||"/"===a?r(Object(i.a)({},o,{newNumber:!0,operand:[].concat(Object(c.a)(o.operand),[a])})):"="===a&&v()},f=function(t){"\xb1"!==t?!o.newNumber&&o.value.toString().length>=8||(e="0"===o.value?t:o.value+t,e=o.float?parseFloat(e).toFixed(o.value.length-1):parseInt(e,10),o.newNumber?r(Object(i.a)({},o,{value:t,newNumber:!1,numbers:[].concat(Object(c.a)(o.numbers),[o.value])})):r(Object(i.a)({},o,{value:e}))):r(Object(i.a)({},o,{value:-o.value}))},v=function(){var e=[].concat(Object(c.a)(o.numbers),[o.value]),t=o.operand,a="";if(e[1]){for(var n=0;n<e.length-1;n++){var l=parseFloat(e[n]),i=parseFloat(e[n+1]);a=0===n?l+t[n]+i:a+t[n]+i}for(;e.length>1;){var s=t.indexOf("x"),u=t.indexOf("/"),m=t.indexOf("+"),b=t.indexOf("-");if(s>=0)e[s]=parseFloat(e[s])*parseFloat(e[s+1]),e.splice(s+1,1),t.splice(s,1);else if(u>=0){if(0===parseInt(e[u+1])||0===parseFloat(e[u+1])){e[0]="Error: division by 0. Press C to continue";break}e[u]=parseFloat(e[u])/parseFloat(e[u+1]),e.splice(u+1,1),t.splice(u,1)}else m>=0?(e[m]=parseFloat(e[m])+parseFloat(e[m+1]),e.splice(m+1,1),t.splice(m,1)):b>=0&&(e[b]=parseFloat(e[b])-parseFloat(e[b+1]),e.splice(b+1,1),t.splice(b,1))}r({history:[].concat(Object(c.a)(o.history),[a+" = "+e[0]]),value:e[0],newNumber:!1,float:!1,numbers:[],operand:[]})}};return l.a.createElement("div",{className:"calculator"},l.a.createElement(b,{histories:o.history}),l.a.createElement(m,{value:o.value}),l.a.createElement("div",{className:"keyboard"},l.a.createElement("div",{className:"inputKeys"},l.a.createElement("div",{className:"functions"},l.a.createElement(u,{buttonClass:"key-c border-left",onClick:d,itemText:"C"}),l.a.createElement(u,{buttonClass:"key-sign",onClick:d,itemText:"\xb1"}),l.a.createElement(u,{buttonClass:"key-percent",onClick:d,itemText:"%"})),l.a.createElement("div",{className:"keys"},l.a.createElement(u,{buttonClass:"key-1 border-left",onClick:d,itemText:"1"}),l.a.createElement(u,{buttonClass:"key-2",onClick:d,itemText:"2"}),l.a.createElement(u,{buttonClass:"key-3",onClick:d,itemText:"3"}),l.a.createElement(u,{buttonClass:"key-4 border-left",onClick:d,itemText:"4"}),l.a.createElement(u,{buttonClass:"key-5",onClick:d,itemText:"5"}),l.a.createElement(u,{buttonClass:"key-6",onClick:d,itemText:"6"}),l.a.createElement(u,{buttonClass:"key-7 border-left",onClick:d,itemText:"7"}),l.a.createElement(u,{buttonClass:"key-8",onClick:d,itemText:"8"}),l.a.createElement(u,{buttonClass:"key-9",onClick:d,itemText:"9"})),l.a.createElement("div",{className:"foot"},l.a.createElement(u,{buttonClass:"key-0 border-left",onClick:d,itemText:"0"}),l.a.createElement(u,{buttonClass:"key-dot",onClick:d,itemText:"\u2022"}))),l.a.createElement("div",{className:"operations"},l.a.createElement(u,{buttonClass:"key-plus",onClick:d,itemText:"+"}),l.a.createElement(u,{buttonClass:"key-minus",onClick:d,itemText:"-"}),l.a.createElement(u,{buttonClass:"key-per",onClick:d,itemText:"x"}),l.a.createElement(u,{buttonClass:"key-fract",onClick:d,itemText:"/"}),l.a.createElement(u,{buttonClass:"key-doit",onClick:d,itemText:"="}))))};var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"MightyCal"),l.a.createElement(d,null))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mightycal",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mightycal","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0f4056b2.chunk.js.map