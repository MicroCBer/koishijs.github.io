import{_ as d,o as a,c as l,a as e,e as t,w as h,F as c,b as o,d as i,r as s}from"./app.d5e91e3a.js";const _={},p=e("h1",{id:"koishijs-plugin-adapter-qqguild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#koishijs-plugin-adapter-qqguild","aria-hidden":"true"},"#"),o(" @koishijs/plugin-adapter-qqguild")],-1),u=e("h2",{id:"\u63A5\u5165\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u63A5\u5165\u65B9\u6CD5","aria-hidden":"true"},"#"),o(" \u63A5\u5165\u65B9\u6CD5")],-1),b=o("QQ \u9891\u9053\u5B98\u65B9 SDK \u9002\u914D\u5668\uFF0C\u57FA\u4E8E "),f={href:"https://www.npmjs.com/package/@qq-guild-sdk/core",target:"_blank",rel:"noopener noreferrer"},q=o("@qq-guild-sdk/core"),g=o(" \u5B9E\u73B0\u3002"),k=o("\u524D\u5F80 "),m={href:"https://bot.q.qq.com/open/#/type?appType=2",target:"_blank",rel:"noopener noreferrer"},x=o("QQ \u9891\u9053\u7BA1\u7406\u540E\u53F0"),y=o(" \u6CE8\u518C"),Q=o("\u767B\u9646\u8FDB\u5165 "),w={href:"https://bot.q.qq.com/open/#/botlogin",target:"_blank",rel:"noopener noreferrer"},B=o("\u673A\u5668\u4EBA\u7BA1\u7406\u540E\u53F0"),v=o(" \u5E76\u521B\u5EFA\u5B98\u65B9\u673A\u5668\u4EBA"),A=o("\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u5728 "),j={href:"https://bot.q.qq.com/#/developer/developer-setting",target:"_blank",rel:"noopener noreferrer"},F=o("\u9891\u9053\u673A\u5668\u4EBA\u5F00\u53D1\u8BBE\u7F6E"),N=o(" \u83B7\u53D6\u673A\u5668\u4EBA\u57FA\u672C\u6570\u636E [id, token, key(secret)]"),T=e("li",null,"\u5C06\u4E0A\u9762\u7684\u57FA\u672C\u6570\u636E\u4F5C\u4E3A\u673A\u5668\u4EBA\u914D\u7F6E\u9879\u5373\u53EF\u4F7F\u7528",-1),V=o("\u53C2\u8003\u6587\u6863\uFF1A"),E={href:"https://nwylzw.github.io/qq-guild-sdk/api/core/Bot.html#bot",target:"_blank",rel:"noopener noreferrer"},I=o("https://nwylzw.github.io/qq-guild-sdk/api/core/Bot.html#bot"),L=i('<h2 id="\u673A\u5668\u4EBA\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u673A\u5668\u4EBA\u9009\u9879" aria-hidden="true">#</a> \u673A\u5668\u4EBA\u9009\u9879</h2><h3 id="options-bots-indents" tabindex="-1"><a class="header-anchor" href="#options-bots-indents" aria-hidden="true">#</a> options(.bots[]).indents</h3><ul><li>\u7C7B\u578B: <code>GBot.Intents | number</code></li><li>\u9ED8\u8BA4\u503C: <code>0</code></li></ul><p>\u8BE5\u673A\u5668\u4EBA\u7533\u8BF7\u7684 WS \u76D1\u542C\u4E8B\u4EF6\u6743\u9650\u3002</p><h3 id="options-bots-id" tabindex="-1"><a class="header-anchor" href="#options-bots-id" aria-hidden="true">#</a> options(.bots[]).id</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u673A\u5668\u4EBA id\u3002</p><h3 id="options-bots-key" tabindex="-1"><a class="header-anchor" href="#options-bots-key" aria-hidden="true">#</a> options(.bots[]).key</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u673A\u5668\u4EBA\u5BC6\u94A5\uFF0C\u7BA1\u7406\u7AEF\u53C8\u79F0\u547C\u4E3A secret\u3002</p><h3 id="options-bots-token" tabindex="-1"><a class="header-anchor" href="#options-bots-token" aria-hidden="true">#</a> options(.bots[]).token</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u673A\u5668\u4EBA token\u3002</p><h2 id="\u9002\u914D\u5668\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u9009\u9879" aria-hidden="true">#</a> \u9002\u914D\u5668\u9009\u9879</h2>',14),C=o("\u5305\u62EC\u5168\u90E8\u7684 "),R=e("code",null,"WsClient",-1),S=o(" \u9009\u9879\u548C\u4E0B\u5217\u989D\u5916\u9009\u9879\uFF1A"),z=i('<h3 id="options-sandbox" tabindex="-1"><a class="header-anchor" href="#options-sandbox" aria-hidden="true">#</a> options.sandbox</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>true</code></li></ul><p>\u662F\u5426\u5F00\u542F\u6C99\u76D2\u3002</p><h3 id="options-endpoint" tabindex="-1"><a class="header-anchor" href="#options-endpoint" aria-hidden="true">#</a> options.endpoint</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;https://api.sgroup.qq.com/&#39;</code></li></ul><p>\u8981\u8BF7\u6C42\u7684 API \u7F51\u5740\u3002</p><h3 id="options-authtype" tabindex="-1"><a class="header-anchor" href="#options-authtype" aria-hidden="true">#</a> options.authType</h3><ul><li>\u7C7B\u578B: <code>&#39;bot&#39; | &#39;bearer&#39;</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;bot&#39;</code></li></ul><p>\u9A8C\u8BC1\u65B9\u5F0F\u3002</p><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2>',10),D=e("li",null,"Q: \u5982\u4F55\u521B\u5EFA\u5B98\u65B9\u673A\u5668\u4EBA?",-1),G=o("A: \u4F7F\u7528\u8BE5 "),W={href:"https://bot.q.qq.com/open/#/type?appType=2",target:"_blank",rel:"noopener noreferrer"},J=o("\u5B98\u65B9\u7F51\u7AD9"),K=o(" \u6CE8\u518C\u3002"),P=e("li",null,"Q: \u5982\u4F55\u767B\u9646\u7BA1\u7406\u540E\u53F0?",-1),Y=o("A: "),Z={href:"https://bot.q.qq.com/open/#/botlogin",target:"_blank",rel:"noopener noreferrer"},H=o("QQ \u9891\u9053\u673A\u5668\u4EBA\u7BA1\u7406\u540E\u53F0\u767B\u9646"),M=e("li",null,"Q: \u5982\u4F55\u83B7\u53D6\u673A\u5668\u4EBA\u57FA\u672C\u6570\u636E (id, token, key)?",-1),O=o("A: "),U={href:"https://bot.q.qq.com/#/developer/developer-setting",target:"_blank",rel:"noopener noreferrer"},X=o("QQ \u9891\u9053\u673A\u5668\u4EBA\u5F00\u53D1\u8BBE\u7F6E"),$=e("li",null,"Q: \u5982\u4F55\u7533\u8BF7\u6D4B\u8BD5\u9891\u9053?",-1),ee=o("A: "),oe={href:"https://docs.qq.com/form/page/DZVF3RFJnTGF0Y3Nk?_w_tencentdocx_form=1",target:"_blank",rel:"noopener noreferrer"},te=o("\u7533\u8BF7\u6D4B\u8BD5\u9891\u9053\u95EE\u5377"),ne=e("li",null,"Q: \u5982\u4F55\u7533\u8BF7\u6D4B\u8BD5 (\u79C1\u57DF) \u9891\u9053\u4E0D\u6821\u9A8C\u8BED\u6599?",-1),se=o("A: "),ie={href:"https://wj.qq.com/s2/9379748/ed13/",target:"_blank",rel:"noopener noreferrer"},re=o("\u79C1\u57DF\u9891\u9053\u95EE\u5377");function de(ae,le){const n=s("ExternalLinkIcon"),r=s("RouterLink");return a(),l(c,null,[p,u,e("p",null,[b,e("a",f,[q,t(n)]),g]),e("ol",null,[e("li",null,[k,e("a",m,[x,t(n)]),y]),e("li",null,[Q,e("a",w,[B,t(n)]),v]),e("li",null,[A,e("a",j,[F,t(n)]),N]),T]),e("p",null,[V,e("a",E,[I,t(n)])]),L,e("p",null,[C,t(r,{to:"/plugins/adapter.html#%E7%B1%BB-adapter-wsclient"},{default:h(()=>[R]),_:1}),S]),z,e("ul",null,[D,e("li",null,[G,e("a",W,[J,t(n)]),K]),P,e("li",null,[Y,e("a",Z,[H,t(n)])]),M,e("li",null,[O,e("a",U,[X,t(n)])]),$,e("li",null,[ee,e("a",oe,[te,t(n)])]),ne,e("li",null,[se,e("a",ie,[re,t(n)])])])],64)}var ce=d(_,[["render",de],["__file","qqguild.html.vue"]]);export{ce as default};