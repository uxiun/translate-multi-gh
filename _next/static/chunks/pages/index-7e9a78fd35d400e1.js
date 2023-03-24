(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{240:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(8401)}])},2632:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return F}});var i=l(1527),r=l(7910),t=l(9150),s=l(8794),o=l(3765),a=l(4328),c=l(5586),u=l(5707),d=l(3016),h=l(574),p=l(1163),m=l(959),x=l(5924),f=l(1137),j=l(4842),g=l(969),v=l(7450),y=l(5633);function Z(e){return(0,y.Z)("MuiFormGroup",e)}(0,v.Z)("MuiFormGroup",["root","row","error"]);var w=l(6904),_=l(3062);let z=["className","row"],N=e=>{let{classes:n,row:l,error:i}=e;return(0,f.Z)({root:["root",l&&"row",i&&"error"]},Z,n)},b=(0,j.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:l}=e;return[n.root,l.row&&n.row]}})(({ownerState:e})=>(0,p.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),O=m.forwardRef(function(e,n){let l=(0,g.Z)({props:e,name:"MuiFormGroup"}),{className:r,row:t=!1}=l,s=(0,h.Z)(l,z),o=(0,w.Z)(),a=(0,_.Z)({props:l,muiFormControl:o,states:["error"]}),c=(0,p.Z)({},l,{row:t,error:a.error}),u=N(c);return(0,i.jsx)(b,(0,p.Z)({className:(0,x.Z)(u.root,r),ownerState:c,ref:n},s))});var k=l(7535),M=l(2095),E=l(4231),V=l(7207),I=l(3284);function F(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Q,{}),(0,i.jsx)(K,{})]})}let K=()=>{let[e,n]=(0,k.KO)(r.OV),[l,h]=(0,k.KO)(r.H7),p=new Map([["zh.pinyin",["pinyin","拼音"]],["zh.pinyin_display",["pinyin display","拼音表示方式"]],["zh.pinyin_position",["pinyin position","拼音表示位置"]],["zh.segment",["segment chinese","中文単語分割"]]]),{control:x}=(0,M.cI)({defaultValues:l}),f=(0,M.qo)({control:x});(0,m.useEffect)(()=>{var e,n,i,r,t,s,o,a;console.log("specificonfig:",l),console.log("specific useWatchValue:",f),h({...l,zh:{...l.zh,...f,pinyin:null!==(t=null===(e=f.zh)||void 0===e?void 0:e.pinyin)&&void 0!==t?t:l.zh.pinyin,pinyin_display:null!==(s=null===(n=f.zh)||void 0===n?void 0:n.pinyin_display)&&void 0!==s?s:l.zh.pinyin_display,pinyin_position:null!==(o=null===(i=f.zh)||void 0===i?void 0:i.pinyin_position)&&void 0!==o?o:l.zh.pinyin_position,segment:null!==(a=null===(r=f.zh)||void 0===r?void 0:r.segment)&&void 0!==a?a:l.zh.segment}})},[f]);let j=(0,E.X$)(e.lang)(p),g=function(e){let{name:n,checked:l}=e;return(0,i.jsx)(M.Qr,{control:x,name:n,render:e=>{let{field:r}=e;return(0,i.jsx)(t.Z,{...r,control:(0,i.jsx)(s.Z,{checked:l}),label:j(n)})}})},v=e=>function(n){let{name:l}=n;return(0,i.jsx)(M.Qr,{control:x,name:l,render:n=>{let{field:r}=n;return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(a.Z,{id:l+"label",children:j(l)}),(0,i.jsx)(c.Z,{...r,id:l,labelId:l+"label",children:e.map(e=>{let[n,l]=e;return(0,i.jsx)(u.Z,{value:n,children:l},n)})})]})}})},y=new Map([["zh.pinyin_display",new Map([["line",["line","線"]],["zi",["with character","字毎"]]])],["zh.pinyin_position",new Map([["above",["above","上"]],["below",["below","下"]]])]]),Z=n=>{var l;let{name:r}=n,t=[...null!==(l=y.get(r))&&void 0!==l?l:[]].map(n=>{let[l,i]=n;return[l,(0,I.wf)(l)(i)(E.xi.findIndex(n=>n==e.lang))]}),s=v(t);return(0,i.jsx)(s,{name:r})};return(0,i.jsxs)(d.Z,{component:"form",className:"specifiConfig",children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(g,{name:"zh.pinyin",checked:l.zh.pinyin}),(0,i.jsx)(g,{name:"zh.segment",checked:l.zh.segment})]}),(0,i.jsx)(Z,{name:"zh.pinyin_display"}),(0,i.jsx)(Z,{name:"zh.pinyin_position"})]})},Q=()=>{let[e,n]=(0,k.KO)(r.OV),{getValues:l,control:h,watch:p}=(0,M.cI)({defaultValues:{lang:e.lang,multiline:e.result.multiline}}),x=(0,M.qo)({control:h});(0,m.useEffect)(()=>{var l,i;console.log("config form value",x),n({...e,lang:null!==(l=x.lang)&&void 0!==l?l:r.XQ.lang,result:{multiline:null!==(i=x.multiline)&&void 0!==i?i:r.XQ.result.multiline}})},[x]);let f=e=>"lang"==e?["UI language","表示言語"]:[e],j=(0,E.X$)(e.lang)(new Map([["lang",["UI language","表示言語"]],["multiline",["multiline output","結果を複数行に"]]]));return(0,i.jsxs)(d.Z,{component:"form",className:"appConfig",children:[(0,i.jsx)(M.Qr,{control:h,name:"lang",render:n=>{let{field:l}=n;return(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(a.Z,{id:"config.lang",children:(0,E.lB)(e.lang)(f("lang"))}),(0,i.jsx)(c.Z,{...l,labelId:"config.lang",value:e.lang,children:E.xi.map(e=>(0,i.jsx)(u.Z,{value:e,children:V.Z.getNativeName(e)},e))})]})}}),(0,i.jsx)(O,{children:(0,i.jsx)(function(e){let{name:n,checked:l}=e;return(0,i.jsx)(M.Qr,{control:h,name:n,render:e=>{let{field:r}=e;return(0,i.jsx)(t.Z,{...r,control:(0,i.jsx)(s.Z,{checked:l}),label:j(n)})}})},{name:"multiline",checked:e.result.multiline})})]})}},3394:function(e,n,l){"use strict";l.r(n);var i=l(1527),r=l(7910),t=l(4231),s=l(7246),o=l(7535),a=l(489);let c=(0,s.cn)(new Map),u=()=>{let[e]=(0,o.KO)(r.EE),[n,l]=(0,o.KO)(c),[s]=(0,o.KO)(r.OV),u=[...e];return u.pop(),(0,i.jsxs)("div",{className:"history",children:[(0,i.jsx)("h1",{children:(0,t.XF)(s.lang)("history")}),(0,i.jsx)(a.default,{listsrc:u,limit:s.history.displayLimit})]})};n.default=u},8401:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return c}});var i=l(1527),r=l(4103),t=l.n(r),s=l(2632),o=l(5076),a=l(3394);function c(){return(0,i.jsxs)("main",{className:t().main,children:[(0,i.jsx)(s.default,{}),(0,i.jsx)(o.default,{}),(0,i.jsx)(a.default,{})]})}},489:function(e,n,l){"use strict";l.r(n);var i=l(1527),r=l(7910),t=l(7535),s=l(959),o=l(1235),a=l(2095),c=l(9150),u=l(8794),d=l(3016);let h=e=>{let{listsrc:n,limit:l}=e,r=null!=n?n:[];return(0,i.jsx)("div",{className:"sessions",children:[...r].slice(Math.max(0,r.length-l)).reverse().map((e,n)=>{let[l,{srclang:r,trans:t}]=e;return(0,i.jsx)("div",{children:(0,i.jsx)(p,{srclang:r,srctext:l,trans:t})},n)})})},p=e=>{let{srclang:n,srctext:l,trans:h}=e,[p]=(0,t.KO)(r.OV),[m,x]=s.useState(!0),f=e=>(0,r.vY)(e)(p.lang)+" (".concat(e,")"),{control:j}=(0,a.cI)({defaultValues:{show:!0}}),g=(0,a.qo)({control:j});return(0,s.useEffect)(()=>{var e;console.log("useWatchValue",g),x(n=>null!==(e=g.show)&&void 0!==e?e:n)},[g]),(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)(d.Z,{component:"form",children:(0,i.jsx)(function(e){let{name:n,checked:l}=e;return(0,i.jsx)(a.Qr,{control:j,name:n,render:e=>{let{field:n}=e;return(0,i.jsx)(c.Z,{...n,control:(0,i.jsx)(u.Z,{checked:l}),label:""})}})},{name:"show",checked:m})}),(0,i.jsxs)("div",{className:"src flex",children:[n?(0,i.jsx)("div",{className:"srclang",children:f(n)}):"",(0,i.jsx)("div",{className:"text",children:l})]}),m?(0,i.jsx)("div",{className:"resultbox",children:[...h].map(e=>{let[n,l]=e,r=f(n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"targetLang",children:r}),(0,i.jsx)("div",{className:"units",children:(0,i.jsx)(o.default,{lang:n,text:l})})]})})}):""]})};n.default=h},4103:function(){}},function(e){e.O(0,[399,365,781,374,929,813,177,910,76,774,888,179],function(){return e(e.s=240)}),_N_E=e.O()}]);