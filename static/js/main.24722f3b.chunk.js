(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(66),r=n.n(a),i=n(24),o=n(2),j=n(72),l=n(71),u=n(14),m=n(67),A=n.n(m),b=n(68),O=n.n(b),d=n(1),h=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),m=Object(u.a)(o,2),b=m[0],h=m[1],x=Object(c.useState)(""),p=Object(u.a)(x,2),N=p[0],S=p[1],C=Object(c.useState)([]),I=Object(u.a)(C,2),y=I[0],w=I[1];Object(c.useEffect)((function(){var e=A.a.parse(t.search),n=e.name,c=e.room;s=O()("localhost:5000"),i(n),h(c),s.emit("join",{name:n,room:c},(function(e){}))}),[t.search]),Object(c.useEffect)((function(){return s.on("message",(function(e){w([].concat(Object(l.a)(y),[e]))})),function(){}}),[y]);var E={message:N,setMessage:S,sendMesssge:function(e){e.preventDefault(),N&&s.emit("sendMessage",N,(function(){return S("")}))}};return Object(d.jsx)("div",{className:"outer-container",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(g,{room:b}),Object(d.jsx)(v,{messages:y,name:r}),Object(d.jsx)(f,Object(j.a)({},E))]})})},x=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),o=r[0],j=r[1],l=function(e,t){var n=e.target.value;"name"===t?s(n):j(n)};return Object(d.jsx)("div",{className:"join-outer-container",children:Object(d.jsxs)("div",{className:"join",children:[Object(d.jsx)("h1",{className:"heading",children:"Join"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{placeholder:"name",className:"joinInput",onChange:function(e){return l(e,"name")},type:"text"})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{placeholder:"room",className:"joinInput mt-20",onChange:function(e){return l(e,"room")},type:"text"})}),Object(d.jsx)(i.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(d.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})},g=function(e){var t=e.room;return Object(d.jsxs)("div",{className:"info-bar",children:[Object(d.jsxs)("div",{className:"left-inner-container",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",alt:"online",className:"online-icon"}),Object(d.jsx)("h3",{children:t})]}),Object(d.jsx)("div",{className:"right-inner-container",children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close",className:"online-icon"})})})]})},f=function(e){var t=e.message,n=e.setMessage,s=e.sendMesssge;return Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("input",{type:"text",className:"input",placeholder:"Type a message...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(d.jsx)("button",{className:"send-button",onClick:function(e){return s(e)},children:"Send"})]})},p=n(70),N=n.n(p),v=function(e){var t=e.messages,n=e.name;return Object(d.jsx)(N.a,{className:"messages",children:t.map((function(e,t){return Object(d.jsx)(I,{name:n,message:e},"message-".concat(n,"-").concat(t))}))})},S=n(39),C=n.n(S),I=function(e){var t=e.message,n=t.user,s=t.text,c=e.name.trim().toLowerCase();return n===c?Object(d.jsxs)("div",{className:"message-container justify-end",children:[Object(d.jsx)("p",{className:"sent-text pr-10",children:c}),Object(d.jsx)("div",{className:"message-box background-blue",children:Object(d.jsx)("p",{className:"message-text color-white",children:C.a.emojify(s)})})]}):Object(d.jsxs)("div",{className:"message-container justify-start",children:[Object(d.jsx)("div",{className:"message-box background-light",children:Object(d.jsx)("p",{className:"message-text color-dark",children:C.a.emojify(s)})}),Object(d.jsx)("p",{className:"sent-text pl-10",children:n})]})},y=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(d.jsx)(o.a,{path:"/chat",component:h})]})};n(138);r.a.render(Object(d.jsx)(y,{}),document.querySelector("#root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.24722f3b.chunk.js.map