(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[750],{3363:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transListByLang",function(){return s(489)}])},5437:function(e,n,s){"use strict";s.r(n);var i=s(1527),l=s(7910),r=s(3284),a=s(835),c=s(4781),t=s(8669),d=s(7535);let h=e=>{let{text:n}=e,[s]=(0,d.KO)(l.H7);return(0,i.jsx)(i.Fragment,{children:(0,r.dY)(n).map(e=>{let[n,l]=e;return(0,i.jsx)("div",{className:"ziyin",children:"below"==s.zh.pinyin_position?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"hanzi",children:n}),(0,i.jsx)("div",{className:"pinyin",children:l})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"pinyin",children:l}),(0,i.jsx)("div",{className:"hanzi",children:n})]})},n)})})},x=e=>{var n;let{text:s}=e,[x]=(0,d.KO)(l.H7),{data:m,error:j,isLoading:o}=(0,c.ZP)("/api/chinese/"+s,t.Z);if(o||j)return j&&console.error(j),x.zh.pinyin?"line"==x.zh.pinyin_display?(0,i.jsx)(i.Fragment,{children:"below"==x.zh.pinyin_position?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"line",children:s}),(0,i.jsx)("div",{className:"pinyin",children:(0,a.N9)(s,{nonZh:"consecutive"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"pinyin",children:(0,a.N9)(s,{nonZh:"consecutive"})}),(0,i.jsx)("div",{className:"line",children:s})]})}):(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(h,{text:s})}):(0,i.jsx)(i.Fragment,{children:s});console.log("data",m);let{py:u,han:v}=null!==(n=null==m?void 0:m.pairs.reduce((e,n)=>{let[s,i]=n;return{py:[...e.py,i],han:[...e.han,s]}},{py:[],han:[]}))&&void 0!==n?n:{py:[],han:[]},p=(0,r._M)(" ")(v),N=(0,r._M)(" ")(u);console.log("hanSegmented",p),console.log("pinyinSegmented",N);let g=x.zh.segment?p:s;return x.zh.pinyin?"line"==x.zh.pinyin_display?(0,i.jsx)(i.Fragment,{children:"below"==x.zh.pinyin_position?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"line",children:g}),(0,i.jsx)("div",{className:"pinyin",children:N})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"pinyin",children:N}),(0,i.jsx)("div",{className:"line",children:g})]})}):(0,i.jsx)("div",{className:"flex",children:x.zh.segment?(0,i.jsx)(i.Fragment,{children:null==m?void 0:m.pairs.map(e=>{let[n,s]=e;return(0,i.jsx)("div",{className:"ziyin",children:"below"==x.zh.pinyin_position?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"hanzi",children:n}),(0,i.jsx)("div",{className:"pinyin",children:s})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"pinyin",children:s}),(0,i.jsx)("div",{className:"hanzi",children:n})]})},n)})}):(0,i.jsx)(h,{text:s})}):(0,i.jsx)(i.Fragment,{children:g})};n.default=x},1235:function(e,n,s){"use strict";s.r(n);var i=s(1527),l=s(7910),r=s(7535),a=s(5437);let c=e=>{let{text:n,lang:s}=e,[a]=(0,r.KO)(l.OV),c=e=>{let{line:n}=e;return(0,i.jsx)("div",{className:"unit",children:(0,i.jsx)(t,{lang:s,line:n})})};return a.result.multiline?(0,i.jsx)(i.Fragment,{children:n.split("\n").map((e,n)=>(0,i.jsx)(c,{line:e},n))}):(0,i.jsx)(c,{line:n})},t=e=>{let{lang:n,line:s}=e,[c]=(0,r.KO)(l.H7);return["zh","zh-CN","zh-TW"].includes(n)?(0,i.jsx)(a.default,{text:s}):(0,i.jsx)(i.Fragment,{children:s})};n.default=c},489:function(e,n,s){"use strict";s.r(n);var i=s(1527),l=s(7910),r=s(7535),a=s(959),c=s(1235),t=s(2095),d=s(9150),h=s(8794),x=s(3016);let m=e=>{let{listsrc:n,limit:s}=e,l=null!=n?n:[];return(0,i.jsx)("div",{className:"sessions",children:[...l].slice(Math.max(0,l.length-s)).reverse().map((e,n)=>{let[s,{srclang:l,trans:r}]=e;return(0,i.jsx)("div",{children:(0,i.jsx)(j,{srclang:l,srctext:s,trans:r})},n)})})},j=e=>{let{srclang:n,srctext:s,trans:m}=e,[j]=(0,r.KO)(l.OV),[o,u]=a.useState(!0),v=e=>(0,l.vY)(e)(j.lang)+" (".concat(e,")"),{control:p}=(0,t.cI)({defaultValues:{show:!0}}),N=(0,t.qo)({control:p});return(0,a.useEffect)(()=>{var e;console.log("useWatchValue",N),u(n=>null!==(e=N.show)&&void 0!==e?e:n)},[N]),(0,i.jsxs)("div",{className:"session",children:[(0,i.jsx)(x.Z,{component:"form",children:(0,i.jsx)(function(e){let{name:n,checked:s}=e;return(0,i.jsx)(t.Qr,{control:p,name:n,render:e=>{let{field:n}=e;return(0,i.jsx)(d.Z,{...n,control:(0,i.jsx)(h.Z,{checked:s}),label:""})}})},{name:"show",checked:o})}),(0,i.jsxs)("div",{className:"src flex",children:[n?(0,i.jsx)("div",{className:"srclang",children:v(n)}):"",(0,i.jsx)("div",{className:"text",children:s})]}),o?(0,i.jsx)("div",{className:"resultbox",children:[...m].map(e=>{let[n,s]=e,l=v(n);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"targetLang",children:l}),(0,i.jsx)("div",{className:"units",children:(0,i.jsx)(c.default,{lang:n,text:s})})]})})}):""]})};n.default=m}},function(e){e.O(0,[399,365,781,374,929,910,774,888,179],function(){return e(e.s=3363)}),_N_E=e.O()}]);