"use strict";(self.webpackChunkai_career_assistant=self.webpackChunkai_career_assistant||[]).push([[469],{7469:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var n=t(4270),a=t(1413),r=t(370),i=t(6009),c=t(7689),u=t(3329),l=t(3433),o=t(9439),d=t(2791);var h=t.p+"static/media/bot.5c3674ddaad72b149fb670df373ba92b.svg";var f=t.p+"static/media/user.97eb91c07eec18b2a81bbf29612648e8.svg";var v=t.p+"static/media/send.dbced668c2a09d94029f856ecb325c14.svg",m=function(){var e=(0,d.useState)([]),s=(0,o.Z)(e,2),t=s[0],n=s[1],a=d.useRef(null),r=(0,d.useState)(!1),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,u.jsxs)("div",{className:"chat_wrapper",children:[(0,u.jsxs)("div",{id:"chat_container",children:[t.map((function(e,s){return(0,u.jsx)("div",{className:"wrapper ".concat(e.isAi?"ai":""),children:(0,u.jsxs)("div",{className:"chat",children:[(0,u.jsx)("div",{className:"profile",children:(0,u.jsx)("img",{src:e.isAi?h:f,alt:e.isAi?"bot":"user"})}),(0,u.jsx)("div",{className:"message",children:e.value})]})},s)})),c&&(0,u.jsx)("div",{className:"wrapper ai",children:(0,u.jsxs)("div",{className:"chat",children:[(0,u.jsx)("div",{className:"profile",children:(0,u.jsx)("img",{src:h,alt:"bot"})}),(0,u.jsx)("div",{className:"message",children:"..."})]})})]}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s=a.current.value;n((function(e){return[].concat((0,l.Z)(e),[{isAi:!1,value:s}])})),a.current.value="",a.current.focus(),m(!0),fetch("http://localhost:5000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:s})}).then((function(e){return m(!1),e.json()})).then((function(e){var s=e.bot.trim();n((function(e){return[].concat((0,l.Z)(e),[{isAi:!0,value:s}])}))})).catch((function(e){console.error("Error fetching data:",e),n((function(e){return[].concat((0,l.Z)(e),[{isAi:!0,value:"Something went wrong"}])}))}))},children:[(0,u.jsx)("input",{type:"text",name:"prompt",placeholder:"Ask me...",ref:a}),(0,u.jsx)("button",{type:"submit",children:(0,u.jsx)("img",{src:v,alt:"send"})})]})]})},p=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.ef,t=function(t){var n=(0,i.a)(),r=n.isLoggedIn,l=n.isRefreshing;return!r&&!l?(0,u.jsx)(c.Fg,{to:s}):(0,u.jsx)(e,(0,a.Z)({},t))};return t}((function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.q,{children:(0,u.jsx)("title",{children:"Assistant"})}),(0,u.jsx)(m,{})]})}),r._e)}}]);
//# sourceMappingURL=469.69fe8e48.chunk.js.map