(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],f=0,p=[];f<r.length;f++)o=r[f],i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/my-portfolio-site/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"003b":function(t,e,n){t.exports=n.p+"img/JavaScript.dff36bad.png"},"03da":function(t,e,n){},"0596":function(t,e,n){},"0f0d":function(t,e,n){t.exports=n.p+"img/Firebase.10ef412d.png"},1774:function(t,e,n){"use strict";var a=n("03da"),i=n.n(a);i.a},"217e":function(t,e,n){t.exports=n.p+"img/mylogo.28446314.png"},"21bb":function(t,e,n){"use strict";var a=n("bcc9"),i=n.n(a);i.a},3759:function(t,e,n){t.exports=n.p+"img/portfolio.e1383a9a.png"},"3f3e":function(t,e,n){},"469d":function(t,e,n){"use strict";var a=n("ed86"),i=n.n(a);i.a},5331:function(t,e,n){},"53d7":function(t,e,n){"use strict";var a=n("730d"),i=n.n(a);i.a},5443:function(t,e,n){"use strict";var a=n("3f3e"),i=n.n(a);i.a},5452:function(t,e,n){"use strict";var a=n("0596"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("fa6d"),n("15f5");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.afterTitleCall,expression:"!afterTitleCall"}],staticClass:"before-title-call"},[n("h1",[t._v(t._s(t.title))])]),n("transition",{attrs:{name:"switch"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.afterTitleCall,expression:"afterTitleCall"}],staticClass:"after-title-call"},[n("header-component"),n("transition",{attrs:{name:"switch"}},[n("router-view")],1),n("footer-component")],1)])],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"header-navi"},[n("nav",[n("ul",t._l(t.pages,function(e){return n("li",{key:e.name},[n("router-link",{attrs:{to:e.path}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)}),0)])]),n("div",{staticClass:"menu-button",on:{click:t.toggleMenu}},[n("i",{directives:[{name:"show",rawName:"v-show",value:!t.active,expression:"!active"}],staticClass:"fas fa-bars"}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"fas fa-times"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"overlay",on:{click:t.toggleMenu}}),n("div",{staticClass:"drawer-menu",class:{"menu-open":t.active},on:{click:t.toggleMenu}},[n("nav",[n("ul",t._l(t.pages,function(e){return n("li",{key:e.name},[n("router-link",{attrs:{to:e.path}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)}),0)])]),n("h1",{staticClass:"glitch",attrs:{"data-text":"Takuto's"}},[t._v("Takuto's")]),n("h2",{staticClass:"glitch",attrs:{"data-text":"portfolio site"}},[t._v("portfolio site")]),n("p",{staticClass:"glitch",attrs:{"data-text":"Welcome to my site!"}},[t._v("Welcome to my website!")]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"down-button",attrs:{href:"#landing"}},[n("i",{staticClass:"fas fa-angle-down"})])}],l={name:"HeaderComponent",data:function(){return{pages:[{name:"HOME",path:"/"},{name:"ABOUT",path:"/about"},{name:"SKILLS",path:"/skills"},{name:"WORKS",path:"/works"}],active:!1,currentPage:null}},methods:{toggleMenu:function(){this.active=!this.active}}},c=l,u=(n("5452"),n("2877")),f=Object(u["a"])(c,o,r,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"landing"}},[n("div",{staticClass:"footer-top"},[n("nav",[n("ul",t._l(t.pages,function(e){return n("li",{key:e.name},[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.pageSwitching(e)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])])}),0)])]),t._m(0)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-bottom"},[n("small",[t._v("copyright© 2019 All rights reserved. Takuto Takeuchi")])])}],m={name:"FooterComponent",data:function(){return{pages:[{name:"HOME",path:"/"},{name:"ABOUT",path:"/about"},{name:"SKILLS",path:"/skills"},{name:"WORKS",path:"/works"}]}},methods:{pageSwitching:function(t){this.$router.push({path:t.path})}}},g=m,v=(n("53d7"),Object(u["a"])(g,h,d,!1,null,null,null)),b=v.exports,k={name:"App",mounted:function(){var t=this;this.$nextTick(function(){return t.addTypingMovement("Welcome to my website!")})},data:function(){return{title:"",afterTitleCall:!1}},methods:{addTypingMovement:function(t){for(var e=this,n=function(n){setTimeout(function(){e.title=e.title+t.slice(n,n+1)},200*n),n===t.length-1&&setTimeout(function(){e.afterTitleCall=!0},200*(n+2))},a=0;a<t.length;a++)n(a)}},components:{"header-component":p,"footer-component":b}},_=k,w=(n("5c0b"),Object(u["a"])(_,i,s,!1,null,null,null)),C=w.exports,y=n("8c4f"),S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"home-box"},[n("div",{staticClass:"title"},[n("h1",[t._v("\n          Takuto Takeuchi's"),n("br"),t._v("\n          Portfolio Site\n        ")])]),n("p",[t._v("\n      私のポートフォリオサイトにお越しいただき、ありがとうございます."),n("br"),t._v("\n      独学でフロントエンドエンジニアを目指す大学生です."),n("br"),t._v("\n      どうぞ、よろしくお願いいたします。\n    ")])]),n("a",{staticClass:"move",attrs:{href:"#"}},[t._v("MORE "),n("i",{staticClass:"fas fa-angle-right"})])])}],M={name:"home"},T=M,O=(n("21bb"),Object(u["a"])(T,S,x,!1,null,null,null)),j=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"about-box"},[n("h3",[t._v("My Profile")]),n("table",t._l(t.dataSet,function(e){return n("tr",{key:e.th},[n("th",[t._v(t._s(e.th))]),n("td",[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.td))])])])}),0)]),n("a",{staticClass:"move",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push({path:"/"})}}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(" BACK\n  ")])])},E=[],P={name:"about",data:function(){return{dataSet:[{th:"Name",td:"竹内 琢人（Takeuchi Takuto）",link:null},{th:"Occupation",td:"大学生",link:null},{th:"University",td:"法政大学 経済学部 国際経済学科",link:null},{th:"Qiita",td:"▶ @yzli_taku",link:"https://qiita.com/yzli_taku"},{th:"Github",td:"▶ taku-hu",link:"https://github.com/taku-hu"},{th:"Mail",td:"hs.tm.ec.a.tt@gmail.com",link:null}]}}},A=P,L=(n("f26d"),Object(u["a"])(A,$,E,!1,null,null,null)),V=L.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"skills-box"},[n("h3",[t._v("My Skills")]),n("div",{staticClass:"skill-box"},[t._m(0),n("a",{staticClass:"show-all",on:{click:t.toggleAll}},[t._v("\n        "+t._s(t.toggleMessage)+"\n        "),n("i",{staticClass:"fas fa-sort"})])]),n("accordion-component",{attrs:{inheritedSkills:t.skills,inheritedMessage:t.toggleMessage},on:{"update:inheritedMessage":function(e){t.toggleMessage=e},"update:inherited-message":function(e){t.toggleMessage=e}}})],1),n("a",{staticClass:"move",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push({path:"/"})}}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(" BACK\n  ")])])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subheading"},[t._v("Click the item "),n("span",[t._v("or")])])}],G=(n("ac4d"),n("8a81"),n("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion-wrapper"},t._l(t.inheritedSkills,function(e){return a("div",{key:e.name,staticClass:"accordion",style:{border:"8px solid "+e.bgColor,backgroundColor:e.bgColor}},[a("div",{staticClass:"label",style:{backgroundColor:e.bgColor},on:{click:function(n){return t.toggleAccordion(e)}}},[a("h2",[t._v("\n        "+t._s(e.name)+" \n      "),a("i",{staticClass:"fa fa-angle-down label-icon",class:{rotate:e.show}})])]),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"skill.show"}],staticClass:"box"},[a("img",{attrs:{src:n("e078")("./"+e.name+".png")}}),a("p",{domProps:{innerHTML:t._s(e.description)}})])])],1)}),0)}),N=[],K=(n("7f7f"),n("7514"),{name:"AccordionComponent",props:{inheritedSkills:Array,inheritedMessage:String},data:function(){return{inherited_message:this.inheritedMessage}},methods:{toggleAccordion:function(t){this.inheritedSkills.find(function(e){return e.name===t.name}).show=!this.inheritedSkills.find(function(e){return e.name===t.name}).show}},beforeUpdate:function(){var t=this.inheritedSkills.every(function(t){return!0===t.show}),e=this.inheritedSkills.every(function(t){return!1===t.show});t?this.inherited_message="Close all":e&&(this.inherited_message="Show all"),this.$emit("update:inheritedMessage",this.inherited_message)}}),D=K,J=(n("5443"),Object(u["a"])(D,G,N,!1,null,null,null)),U=J.exports,W={name:"Skills",data:function(){return{skills:[{name:"HTML・CSS",bgColor:"orangered",show:!1,description:"\n        両方共に主要な機能は理解しています。<br>\n        「flexbox」や「grid」を使いレスポンシブなウェブサイトを作ることが出来ます。\n        "},{name:"Sass",bgColor:"hotpink",show:!1,description:"\n        開発に必要な基本的な機能は理解しています。\n        "},{name:"JavaScript",bgColor:"gold",show:!1,description:"\n        私が現在メインで学習しており最も関心のある言語です。<br>\n        基本的な仕様については理解しており、全てES6以降の型で学習いたしました。<br>\n        Vue.jsはもちろん、JavaScript自体の知見もより深めていきたいと思っているので、日々コードを動かしながら学習しています。\n        "},{name:"Vue.js",bgColor:"mediumseagreen",show:!1,description:"\n        主な仕様や機能、vue-cliや単一ファイルコンポーネントによる開発の概念、Vuexでの状態管理については理解しています。<br>\n        WORKSに載せているポートフォリオは全てVue.jsで開発しました。\n        "},{name:"Firebase",bgColor:"orange",show:!1,description:"\n        本棚アプリにて、Cloud Firestoreを使用したデータベースの機能と、Authenticationを使用したグーグルアカウントでのログイン機能を実装するのに使用しました。<br>\n        概要は理解していますが、より使いこなせるように更なる学習を重ねています。\n        "},{name:"Git・Github",bgColor:"black",show:!1,description:"\n        Git Flow・Github Flowを理解し、git・githubを用いた開発が行えます。<br>\n        機能や仕組みは理解しているので複数人での開発にも対応できます。\n        "},{name:"webpack",bgColor:"skyblue",show:!1,description:"\n        1からJavaScriptの開発環境の構築をする事が出来ます。\n        "}],toggleMessage:"Show all"}},methods:{toggleAll:function(){var t=!0,e=!1,n=void 0;try{for(var a,i=this.skills[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;"Show all"===this.toggleMessage?s.show=!0:s.show=!1}}catch(o){e=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.changeMessage()},changeMessage:function(){"Show all"===this.toggleMessage?this.toggleMessage="Close all":this.toggleMessage="Show all"}},components:{"accordion-component":U}},B=W,R=(n("1774"),Object(u["a"])(B,H,F,!1,null,null,null)),I=R.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"works-box"},[n("h3",[t._v("My Works")]),n("div",{staticClass:"works-wrapper"},t._l(t.works,function(e){return n("div",{key:e.name,staticClass:"work-box",attrs:{ontouchstart:""}},[n("div",{staticClass:"face face1",style:{backgroundColor:e.color}},[n("span",{domProps:{innerHTML:t._s(e.icon)}}),n("h4",[t._v(t._s(e.name))]),n("a",{attrs:{href:e.link,target:"_blank"}},[n("i",{staticClass:"fas fa-angle-right"}),t._v("\n            Details\n          ")])]),n("div",{staticClass:"face face2"},[n("p",{domProps:{innerHTML:t._s(e.description)}})])])}),0)]),n("a",{staticClass:"move",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push({path:"/"})}}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(" BACK\n  ")])])},z=[],q={name:"works",data:function(){return{works:[{name:"ポートフォリオサイト",icon:'<i class="fas fa-address-card"></i>',color:"#3340cb",link:"https://github.com/taku-hu/my-portfolio-site",description:"\n        私が初めにVue.jsで作ったもので、私のポートフォリオサイトです。<br>\n        コーディングに慣れたりVue.jsへの理解を深めるため、UIパーツ等はあえて積極的に車輪の再発明を行いました。\n        "},{name:"タイピングアプリ",icon:'<i class="far fa-keyboard"></i>',color:"#2196f3",link:"https://github.com/taku-hu/my-typing-app",description:"\n        私が2番目にVue.jsで作ったものです。<br>\n        以前の開発の経験を生かしてより多くの機能を盛り込みました。\n        "},{name:"オンライン本棚",icon:'<i class="fas fa-book"></i>',color:"#21b1aa",link:"https://github.com/taku-hu/my-book-manager",description:"\n        私が3番目にVue.jsで作ったもので、Firebaseでログインとデータベースの機能を盛り込みました。<br>\n        そして状態管理に初めてVuexを使いました。まだまだではありますが、開発を通してVue.jsでのより実践的なコーディングが学べたと感じています。\n        "},{name:"過去の残骸達",icon:'<i class="fas fa-pager"></i>',color:"#333",link:"https://github.com/taku-hu",description:"\n        学習し始めの時に作ったLPやサイトの模写、簡単なアプリ達です。<br>\n        成果物としては無価値ですが思い出として...\n        "}]}}},X=q,Y=(n("469d"),Object(u["a"])(X,Q,z,!1,null,null,null)),Z=Y.exports;a["a"].use(y["a"]);var tt=new y["a"]({mode:"history",base:"/my-portfolio-site/",routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:V},{path:"/skills",name:"skills",component:I},{path:"/works",name:"works",component:Z}]}),et=n("46f8"),nt=n.n(et);a["a"].use(nt.a),a["a"].config.productionTip=!1,new a["a"]({router:tt,render:function(t){return t(C)}}).$mount("#app")},5704:function(t,e,n){t.exports=n.p+"img/webpack.c500a380.png"},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(t,e,n){},"730d":function(t,e,n){},"7ee5":function(t,e,n){t.exports=n.p+"img/SQL.2d8cae88.png"},"87b9":function(t,e,n){t.exports=n.p+"img/HTML・CSS.4f01488a.png"},"8f93":function(t,e,n){t.exports=n.p+"img/Sass.8e25db11.png"},"90c8":function(t,e,n){t.exports=n.p+"img/PHP.9097f0b0.png"},b168:function(t,e,n){t.exports=n.p+"img/Git・Github.22b3f7d7.png"},bcc9:function(t,e,n){},df86:function(t,e,n){t.exports=n.p+"img/Vue.js.c2a605fb.png"},e078:function(t,e,n){var a={"./Firebase.png":"0f0d","./Git・Github.png":"b168","./HTML・CSS.png":"87b9","./JavaScript.png":"003b","./PHP.png":"90c8","./SQL.png":"7ee5","./Sass.png":"8f93","./Vue.js.png":"df86","./mylogo.png":"217e","./portfolio.png":"3759","./webpack.png":"5704"};function i(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="e078"},ed86:function(t,e,n){},f26d:function(t,e,n){"use strict";var a=n("5331"),i=n.n(a);i.a}});
//# sourceMappingURL=app.93f8d0a2.js.map