(this.webpackJsonperk=this.webpackJsonperk||[]).push([[13],{230:function(e,t,n){},231:function(e,t,n){"use strict";t.a=n.p+"static/media/goz.74167323.svg"},300:function(e,t,n){"use strict";n.r(t);var a=n(72),c=n.n(a),i=n(73),r=n(26),o=n(0),s=n(69),l=n(297),u=n(3),d=(n(96),n(230),n(82)),p=n(70),f=n(231),b=n(24),h=n(1);t.default=function(){var e=Object(o.useContext)(b.a).dil,t=Object(u.f)(),n=Object(o.useState)("+9936"),a=Object(r.a)(n,2),j=a[0],m=a[1],g=Object(o.useState)(""),v=Object(r.a)(g,2),y=v[0],O=v[1],x=Object(o.useState)(!1),k=Object(r.a)(x,2),w=k[0],C=k[1],N=Object(o.useState)(!1),z=Object(r.a)(N,2),S=z[0],D=z[1],A=function(e){"Enter"===e.key&&B()},B=function(){var t=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(!0),t.next=3,s.b.post("/api/user/login",{phoneNumber:j,password:y}).then((function(t){console.log(t.data),!0===t.data.login?(localStorage.setItem("erkProfile",JSON.stringify(t.data)),l.b.success("tm"==e?"Siz ulgama girdi\u0148iz!":"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443!"),window.location.href="/home"):l.b.warn("tm"==e?"Hasaba alynmadyk ulanyjy!":"\u041d\u0435\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c!")})).catch((function(t){console.log(t),l.b.warn("tm"==e?"Ga\xfdtadan Barlap g\xf6r\xfc\u0148!":"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u044d\u0442\u043e \u0441\u043d\u043e\u0432\u0430!")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"login-page",children:[Object(h.jsx)("h2",{className:"login-header",children:"tm"==e?"Maglumatlary\u0148yzy girizi\u0148":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(h.jsx)("div",{className:"login-input",children:!S||"+9936"!=j&&null!=j?Object(h.jsx)(d.a,{addBefore:"tm"==e?"Telefon belgi\u0148iz:":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",placeholder:"+99365555555",value:j,onChange:function(e){return m(e.target.value)}}):Object(h.jsx)(d.a,{style:{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"},addBefore:"tm"==e?"Telefon belgi\u0148iz:":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",placeholder:"+99365555555",value:j,onChange:function(e){return m(e.target.value)}})}),Object(h.jsxs)("div",{className:"login-input",children:[!S||""!=y&&null!=y?Object(h.jsx)(d.a,{onKeyDown:A,addBefore:"tm"==e?"A\xe7ars\xf6zi:":"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login-input",type:!w&&"password",placeholder:"********",value:y,onChange:function(e){return O(e.target.value)}}):Object(h.jsx)(d.a,{style:{border:"1px solid #F64D3A",boxShadow:"0 0 1px #F64D3A"},onKeyDown:A,addBefore:"tm"==e?"A\xe7ars\xf6zi:":"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login-input",type:!w&&"password",placeholder:"********",value:y,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("img",{src:f.a,onClick:function(){C(!w)}})]}),Object(h.jsx)("div",{onClick:function(){return t.push("/sign-up")},className:"Hasapyok",children:"tm"==e?"Sizde Hasap \xfdokmy?":"\u041d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438?"}),Object(h.jsx)("div",{className:"login-button",children:Object(h.jsx)(p.a,{onClick:function(){return B()},children:"tm"==e?"I\xe7eri Gir":"\u0412\u043e\u0439\u0442\u0438"})})]})}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(85),c="http://31.31.201.41:1234",i=n.n(a).a.create({baseURL:c,timeout:1e6,headers:{"Content-Type":"application/json",Accept:"*/*"}})},70:function(e,t,n){"use strict";n(0),n(71);var a=n(1);t.a=function(e){return Object(a.jsx)("button",{className:"button ".concat(e.className),onClick:e.onClick,style:e.style,children:e.children})}},71:function(e,t,n){},72:function(e,t,n){e.exports=n(81)},73:function(e,t,n){"use strict";function a(e,t,n,a,c,i,r){try{var o=e[i](r),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(a,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,i){var r=e.apply(t,n);function o(e){a(r,c,i,o,s,"next",e)}function s(e){a(r,c,i,o,s,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return c}))},82:function(e,t,n){"use strict";n(0),n(83);var a=n(1);t.a=function(e){return Object(a.jsxs)("div",{style:e.styleDiv,className:"InputDiv",children:[Object(a.jsx)("p",{style:e.styleP,children:e.addBefore}),Object(a.jsx)("input",{required:e.required,id:e.id,className:e.className,style:e.style,name:e.name,type:e.type,value:e.value,onClick:e.onClick,onChange:e.onChange,placeholder:e.placeholder,hidden:"file"==e.type&&!0})]})}},83:function(e,t,n){}}]);
//# sourceMappingURL=13.7e691e4d.chunk.js.map