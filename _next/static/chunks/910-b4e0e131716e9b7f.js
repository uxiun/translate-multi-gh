"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{8669:function(n,a,e){class i extends Error{}let t=(n,a)=>{let e=a||1e5,t=new Promise((n,a)=>{setTimeout(n,e)}).then(()=>Promise.reject(new i("Operation timed out after ".concat(e," ms"))));return Promise.race([n,t])},r=n=>new Promise((a,e)=>{n.then(n=>{n.ok?n.json().then(n=>{a(n)}).catch(n=>{e(n)}):e(n)}).catch(n=>{e(n)})}),o=(n,a)=>r(t(fetch(n,a)));a.Z=o},7910:function(n,a,e){e.d(a,{OV:function(){return c},EE:function(){return f},H7:function(){return g},Id:function(){return k},Bg:function(){return p},XQ:function(){return l},T0:function(){return h},vY:function(){return y},bJ:function(){return b},qQ:function(){return s},UI:function(){return m}});var i=e(7246);e(2243);var t=e(7207);let r=new Map([["アフリカーンス語","af"],["アルバニア語","sq"],["アムハラ語","am"],["アラビア文字","ar"],["アルメニア語","hy"],["アッサム語","as"],["アイマラ語","ay"],["アゼルバイジャン語","az"],["バンバラ語","bm"],["バスク語","eu"],["ベラルーシ語","be"],["ベンガル語","bn"],["ボージュプリー語","bho"],["ボスニア語","bs"],["ブルガリア語","bg"],["カタロニア語","ca"],["セブ語","ceb"],["中国語（簡体）","zh-CN","zh"],["中国語（繁体）","zh-TW"],["コルシカ語","co"],["クロアチア語","hr"],["チェコ語","cs"],["デンマーク語","da"],["ディベヒ語","dv"],["ドグリ語","doi"],["オランダ語","nl"],["英語","en"],["エスペラント語","eo"],["エストニア語","et"],["エウェ語","ee"],["フィリピン語（タガログ語）","fil"],["フィンランド語","fi"],["フランス語","fr"],["フリジア語","fy"],["ガリシア語","gl"],["グルジア語","ka"],["ドイツ語","de"],["ギリシャ語","el"],["グアラニ語","gn"],["グジャラート語","gu"],["クレオール語（ハイチ）","ht"],["ハウサ語","ha"],["ハワイ語","haw"],["ヘブライ語","he","iw"],["ヒンディー語","hi"],["モン語","hmn"],["ハンガリー語","hu"],["アイスランド語","is"],["イボ語","ig"],["イロカノ語","ilo"],["インドネシア語","id"],["アイルランド語","ga"],["イタリア語","it"],["日本語","ja"],["ジャワ語","jv","jw"],["カンナダ文字","kn"],["カザフ語","kk"],["クメール語","km"],["キニヤルワンダ語","rw"],["コンカニ語","gom"],["韓国語","ko"],["クリオ語","kri"],["クルド語","ku"],["クルド語（ソラニ語）","ckb"],["キルギス語","ky"],["ラオ語","lo"],["ラテン語","la"],["ラトビア語","lv"],["リンガラ語","ln"],["リトアニア語","lt"],["ルガンダ語","lg"],["ルクセンブルク語","lb"],["マケドニア語","mk"],["マイティリー語","mai"],["マラガシ語","mg"],["マレー語","ms"],["マラヤーラム文字","ml"],["マルタ語","mt"],["マオリ語","mi"],["マラーティー語","mr"],["メイテイ語（マニプリ語）","mni-Mtei"],["ミゾ語","lus"],["モンゴル語","mn"],["ミャンマー語（ビルマ語）","my"],["ネパール語","ne"],["ノルウェー語","no"],["ニャンジャ語（チェワ語）","ny"],["オリヤ語","or"],["オロモ語","om"],["パシュト語","ps"],["ペルシャ語","fa"],["ポーランド語","pl"],["ポルトガル語（ポルトガル、ブラジル）","pt"],["パンジャブ語","pa"],["ケチュア語","qu"],["ルーマニア語","ro"],["ロシア語","ru"],["サモア語","sm"],["サンスクリット語","sa"],["スコットランド ゲール語","gd"],["セペディ語","nso"],["セルビア語","sr"],["セソト語","st"],["ショナ語","sn"],["シンド語","sd"],["シンハラ語","si"],["スロバキア語","sk"],["スロベニア語","sl"],["ソマリ語","so"],["スペイン語","es"],["スンダ語","su"],["スワヒリ語","sw"],["スウェーデン語","sv"],["タガログ語（フィリピン語）","tl"],["タジク語","tg"],["タミル語","ta"],["タタール語","tt"],["テルグ語","te"],["タイ語","th"],["ティグリニャ語","ti"],["ツォンガ語","ts"],["トルコ語","tr"],["トルクメン語","tk"],["トウィ語（アカン語）","ak"],["ウクライナ語","uk"],["ウルドゥー語","ur"],["ウイグル語","ug"],["ウズベク語","uz"],["ベトナム語","vi"],["ウェールズ語","cy"],["コーサ語","xh"],["イディッシュ語","yi"],["ヨルバ語","yo"],["ズールー語","zu"]].map(n=>[n[0],n.slice(1)])),o=new Map([["Afrikaans","af"],["Albanian","sq"],["Amharic","am"],["Arabic","ar"],["Armenian","hy"],["Assamese","as"],["Aymara","ay"],["Azerbaijani","az"],["Bambara","bm"],["Basque","eu"],["Belarusian","be"],["Bengali","bn"],["Bhojpuri","bho"],["Bosnian","bs"],["Bulgarian","bg"],["Catalan","ca"],["Cebuano","ceb"],["Chinese (Simplified)","zh-CN","zh"],["Chinese (Traditional)","zh-TW"],["Corsican","co"],["Croatian","hr"],["Czech","cs"],["Danish","da"],["Dhivehi","dv"],["Dogri","doi"],["Dutch","nl"],["English","en"],["Esperanto","eo"],["Estonian","et"],["Ewe","ee"],["Filipino (Tagalog)","fil"],["Finnish","fi"],["French","fr"],["Frisian","fy"],["Galician","gl"],["Georgian","ka"],["German","de"],["Greek","el"],["Guarani","gn"],["Gujarati","gu"],["Haitian Creole","ht"],["Hausa","ha"],["Hawaiian","haw"],["Hebrew","he","iw"],["Hindi","hi"],["Hmong","hmn"],["Hungarian","hu"],["Icelandic","is"],["Igbo","ig"],["Ilocano","ilo"],["Indonesian","id"],["Irish","ga"],["Italian","it"],["Japanese","ja"],["Javanese","jv","jw"],["Kannada","kn"],["Kazakh","kk"],["Khmer","km"],["Kinyarwanda","rw"],["Konkani","gom"],["Korean","ko"],["Krio","kri"],["Kurdish","ku"],["Kurdish (Sorani)","ckb"],["Kyrgyz","ky"],["Lao","lo"],["Latin","la"],["Latvian","lv"],["Lingala","ln"],["Lithuanian","lt"],["Luganda","lg"],["Luxembourgish","lb"],["Macedonian","mk"],["Maithili","mai"],["Malagasy","mg"],["Malay","ms"],["Malayalam","ml"],["Maltese","mt"],["Maori","mi"],["Marathi","mr"],["Meiteilon (Manipuri)","mni-Mtei"],["Mizo","lus"],["Mongolian","mn"],["Myanmar (Burmese)","my"],["Nepali","ne"],["Norwegian","no"],["Nyanja (Chichewa)","ny"],["Odia (Oriya)","or"],["Oromo","om"],["Pashto","ps"],["Persian","fa"],["Polish","pl"],["Portuguese (Portugal, Brazil)","pt"],["Punjabi","pa"],["Quechua","qu"],["Romanian","ro"],["Russian","ru"],["Samoan","sm"],["Sanskrit","sa"],["Scots Gaelic","gd"],["Sepedi","nso"],["Serbian","sr"],["Sesotho","st"],["Shona","sn"],["Sindhi","sd"],["Sinhala (Sinhalese)","si"],["Slovak","sk"],["Slovenian","sl"],["Somali","so"],["Spanish","es"],["Sundanese","su"],["Swahili","sw"],["Swedish","sv"],["Tagalog (Filipino)","tl"],["Tajik","tg"],["Tamil","ta"],["Tatar","tt"],["Telugu","te"],["Thai","th"],["Tigrinya","ti"],["Tsonga","ts"],["Turkish","tr"],["Turkmen","tk"],["Twi (Akan)","ak"],["Ukrainian","uk"],["Urdu","ur"],["Uyghur","ug"],["Uzbek","uz"],["Vietnamese","vi"],["Welsh","cy"],["Xhosa","xh"],["Yiddish","yi"],["Yoruba","yo"],["Zulu","zu"]].map((n,a)=>[n[0],Array.from(r.values())[a]]));var u=e(3284);let s=(0,i.cn)({pinyin:!0}),l={lang:"ja",form:{limit:200},result:{multiline:!1},history:{displayLimit:30}},c=(0,i.cn)(l),h={text:"",from:"",to:["ja"]},m=(0,i.cn)(h),g=(0,i.cn)({zh:{segment:!0,pinyin:!0,pinyin_display:"line",pinyin_position:"below"}}),f=(0,i.cn)(new Map);(0,i.cn)([]);let d=new Map(Object.entries({ja:r,en:o}).map(n=>{let[a,e]=n;return[a,new Map([...e].flatMap(n=>{let[a,e]=n;return e.map(n=>[n,a])}))]}));(0,i.cn)(r);let p=(0,i.cn)(new Map([...r].flatMap(n=>{let[a,e]=n;return e.map(n=>[n,a])}))),k=(0,i.cn)((()=>{let n=new Set(Array.from(r.values()).flatMap(n=>n[0]));return[...n]})()),y=n=>a=>{var e,i;return null!==(i=null===(e=d.get(a))||void 0===e?void 0:e.get(n))&&void 0!==i?i:(0,u.wH)(t.Z.getName(n))(n=>0==n.length)(a=>n)(u.CD)},b=n=>a=>e=>["ja","zh","zh-TW","zh-CN"].includes(e)?n(a)("en")+" "+n(a)(e):n(a)("en")},2243:function(n,a,e){e.d(a,{RM:function(){return s},zA:function(){return r}});var i=e(8669),t=e(3284);e(835);let r="https://script.google.com/macros/s/AKfycbx23Gy7UiDJEfHi7--3cjgyVoAzlM2YRV8zEmiqjrZxNNW11ZbI7m_b7rnW1e02BrfJ-g/exec",o=n=>a=>{let e=(0,t.Gq)(r)(0===n.from.length?{target:a,text:n.text}:{source:n.from,target:a,text:n.text});return console.log(e),(0,i.Z)(e)},u=n=>200==n.code?n.text:"error(".concat(n.code,")"),s=n=>a=>n.text.split("\n").map(e=>e.match(/^\s*$/)?e:o({...n,text:e})(a).then(n=>u(n)))},3284:function(n,a,e){e.d(a,{CD:function(){return m},Gq:function(){return h},HR:function(){return g},_M:function(){return u},aL:function(){return s},dY:function(){return f},wH:function(){return l},wf:function(){return c}});var i,t,r=e(835);let o=(n,a)=>{let e=[];return[...n].forEach((n,i)=>{let t=a.at(i);if(!t)return e;e.push([n,t])}),e},u=n=>a=>a.reduce((a,e)=>a+n+e,"").slice(n.length),s=u("\n"),l=n=>a=>e=>i=>a(n)?e(n):i(n),c=n=>a=>e=>null!==(t=null!==(i=a.at(e))&&void 0!==i?i:a.at(0))&&void 0!==t?t:n,h=n=>a=>n+"?"+Object.entries(a).reduce((n,a)=>{let[e,i]=a;return n+"&"+e+"="+i},"").slice(1),m=n=>n,g=n=>a=>e=>n(e)?e:a;RegExp("\\p{sc=Han}","u");let f=n=>{let a=(0,r.N9)(n,{nonZh:"spaced",type:"array"});return o(n,a)},d=n=>a=>[a.slice(0,n),...d(n)(a.slice(n))]}}]);