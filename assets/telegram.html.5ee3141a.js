import{_ as s,o as d,c as h,a as e,e as t,w as r,F as c,d as i,b as o,r as l}from"./app.d5e91e3a.js";const p={},u=i('<h1 id="koishijs-plugin-adapter-telegram" tabindex="-1"><a class="header-anchor" href="#koishijs-plugin-adapter-telegram" aria-hidden="true">#</a> @koishijs/plugin-adapter-telegram</h1><h2 id="\u63A5\u5165\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u63A5\u5165\u65B9\u6CD5" aria-hidden="true">#</a> \u63A5\u5165\u65B9\u6CD5</h2><ol><li>\u641C\u7D22 @botfather\uFF08\u6709\u4E2A\u5B98\u65B9\u8BA4\u8BC1\u7684\u7B26\u53F7\uFF09\u5E76\u8FDB\u5165\u804A\u5929\u754C\u9762</li><li>\u8F93\u5165 <code>/start</code> \u540E\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4F7F\u7528\u83DC\u5355\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u91CC\u6307\u4EE4\u5BF9\u4F60\u7684\u673A\u5668\u4EBA\u8FDB\u884C\u914D\u7F6E</li><li>\u8981\u521B\u5EFA\u4E00\u4E2A\u673A\u5668\u4EBA\uFF0C\u8BF7\u70B9\u51FB <code>/newbot</code>\uFF0C\u5E76\u6839\u636E\u7CFB\u7EDF\u63D0\u793A\u5B8C\u6210\u521B\u5EFA\u6D41\u7A0B</li><li>\u4F7F\u7528 <code>/setprivacy</code> \u5F00\u542F Privacy Mode\uFF08\u4E0D\u7136\u673A\u5668\u4EBA\u53EA\u80FD\u6536\u5230\u7279\u5B9A\u6D88\u606F\uFF09</li><li>\u521B\u5EFA\u5B8C\u6BD5\u540E\uFF0C\u4F60\u4F1A\u83B7\u5F97\u4E00\u4E2A token\uFF08\u8BF7\u6CE8\u610F\u4E0D\u8981\u6CC4\u9732\uFF09\uFF0C\u5C06\u5176\u4F5C\u4E3A\u673A\u5668\u4EBA\u914D\u7F6E\u9879\u5373\u53EF\u4F7F\u7528</li></ol>',3),_=o("\u53C2\u8003\u6587\u6863\uFF1A"),f={href:"https://core.telegram.org/bots",target:"_blank",rel:"noopener noreferrer"},g=o("https://core.telegram.org/bots"),b=i('<h2 id="\u673A\u5668\u4EBA\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u673A\u5668\u4EBA\u9009\u9879" aria-hidden="true">#</a> \u673A\u5668\u4EBA\u9009\u9879</h2><h3 id="options-protocol" tabindex="-1"><a class="header-anchor" href="#options-protocol" aria-hidden="true">#</a> options.protocol</h3><ul><li>\u53EF\u9009\u503C: server, polling</li></ul><p>\u8981\u4F7F\u7528\u7684\u534F\u8BAE\u7C7B\u578B\u3002</p><h3 id="options-token" tabindex="-1"><a class="header-anchor" href="#options-token" aria-hidden="true">#</a> options.token</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u673A\u5668\u4EBA\u8D26\u6237\u7684\u4EE4\u724C\u3002</p><h3 id="options-endpoint" tabindex="-1"><a class="header-anchor" href="#options-endpoint" aria-hidden="true">#</a> options.endpoint</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;https://api.telegram.org&#39;</code></li></ul><p>\u8981\u8FDE\u63A5\u7684\u670D\u52A1\u5668\u5730\u5740\u3002</p><h3 id="options-proxyagent" tabindex="-1"><a class="header-anchor" href="#options-proxyagent" aria-hidden="true">#</a> options.proxyAgent</h3>',11),m=e("li",null,[o("\u7C7B\u578B: "),e("code",null,"string")],-1),x=o("\u9ED8\u8BA4\u503C: "),k=e("code",null,"app.options.request.proxyAgent",-1),y=i('<p>\u8BF7\u6C42\u65F6\u9ED8\u8BA4\u4F7F\u7528\u7684\u7F51\u7EDC\u4EE3\u7406\u3002</p><h3 id="options-files-endpoint" tabindex="-1"><a class="header-anchor" href="#options-files-endpoint" aria-hidden="true">#</a> options.files.endpoint</h3><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <a href="#options-bots-endpoint"><code>options.endpoint</code></a></li></ul><p>\u6587\u4EF6\u8BF7\u6C42\u7684\u7EC8\u7ED3\u70B9\u3002</p><h3 id="options-files-local" tabindex="-1"><a class="header-anchor" href="#options-files-local" aria-hidden="true">#</a> options.files.local</h3><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul>',6),v=o("\u662F\u5426\u542F\u7528 "),B={href:"https://github.com/tdlib/telegram-bot-api",target:"_blank",rel:"noopener noreferrer"},L=o("Telegram Bot API"),N=o(" \u672C\u5730\u6A21\u5F0F\u3002"),V=i('<h2 id="\u9002\u914D\u5668\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u9009\u9879" aria-hidden="true">#</a> \u9002\u914D\u5668\u9009\u9879</h2><h3 id="options-path" tabindex="-1"><a class="header-anchor" href="#options-path" aria-hidden="true">#</a> options.path</h3><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>&#39;/telegram&#39;</code></li></ul><p>\u670D\u52A1\u5668\u76D1\u542C\u7684\u8DEF\u5F84\u3002</p><h3 id="options-selfurl" tabindex="-1"><a class="header-anchor" href="#options-selfurl" aria-hidden="true">#</a> options.selfUrl</h3><ul><li>\u7C7B\u578B\uFF1A<code>string</code></li></ul>',6),j=o("Koishi \u670D\u52A1\u66B4\u9732\u5728\u516C\u7F51\u7684\u5730\u5740\uFF0C\u4F1A\u8986\u76D6 "),w=e("code",null,"app.options.selfUrl",-1),A=o(" \u7684\u503C\u3002");function E(I,q){const a=l("ExternalLinkIcon"),n=l("RouterLink");return d(),h(c,null,[u,e("p",null,[_,e("a",f,[g,t(a)])]),b,e("ul",null,[m,e("li",null,[x,t(n,{to:"/api/core/app.html#options-request-proxyagent"},{default:r(()=>[k]),_:1})])]),y,e("p",null,[v,e("a",B,[L,t(a)]),N]),V,e("p",null,[j,t(n,{to:"/api/app.html#options-selfurl"},{default:r(()=>[w]),_:1}),A])],64)}var F=s(p,[["render",E],["__file","telegram.html.vue"]]);export{F as default};
