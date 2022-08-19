import{_ as d,o as n,c as r,a as e,e as o,w as l,F as h,b as a,d as i,r as c}from"./app.d5e91e3a.js";const u={},_=e("h1",{id:"\u6570\u636E\u7BA1\u7406-admin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6570\u636E\u7BA1\u7406-admin","aria-hidden":"true"},"#"),a(" \u6570\u636E\u7BA1\u7406 (Admin)")],-1),p={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),g=a("\u672C\u7AE0\u4E2D\u4ECB\u7ECD\u7684\u5185\u5BB9\u9700\u8981\u4F60\u5B89\u88C5\u6570\u636E\u5E93\u652F\u6301\uFF0C\u540C\u65F6\u5EFA\u8BAE\u63D0\u524D\u9605\u8BFB "),m=a("\u6307\u5357 / \u5185\u7F6E\u7528\u6237\u7CFB\u7EDF"),F=a("\u3002"),x=i('<h2 id="\u6307\u4EE4-authorize" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4-authorize" aria-hidden="true">#</a> \u6307\u4EE4\uFF1Aauthorize</h2><ul><li>\u522B\u540D\uFF1Aauth</li><li>\u57FA\u672C\u8BED\u6CD5\uFF1A<code>authorize &lt;value&gt; -u &lt;user&gt;</code></li><li>\u6700\u4F4E\u6743\u9650\uFF1A4</li></ul><p>authorize \u6307\u4EE4\u7528\u4E8E\u8BBE\u7F6E\u7528\u6237\u7684\u6743\u9650\u7B49\u7EA7\u3002\u8BE5\u6307\u4EE4 4 \u7EA7\u6743\u9650\u624D\u80FD\u8C03\u7528\uFF0C\u4E14\u9700\u8981\u6EE1\u8DB3\u76EE\u6807\u7528\u6237\u7684\u6743\u9650\u548C\u8981\u8BBE\u5B9A\u7684\u6743\u9650\u90FD\u4E25\u683C\u5C0F\u4E8E\u81EA\u5DF1\u7684\u6743\u9650\u7B49\u7EA7\uFF0C\u5426\u5219\u65E0\u6CD5\u8BBE\u7F6E\u3002</p><h3 id="\u6307\u5B9A\u7528\u6237\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u7528\u6237\u8BED\u6CD5" aria-hidden="true">#</a> \u6307\u5B9A\u7528\u6237\u8BED\u6CD5</h3><p>\u53EF\u4EE5\u901A\u8FC7\u4E09\u79CD\u65B9\u5F0F\u6307\u5B9A\u7528\u6237</p><ul><li><code>@user</code>: \u901A\u8FC7\u76F4\u63A5 @ \u4EBA\u7684\u65B9\u5F0F\u6307\u5B9A\uFF08\u4E0D\u80FD\u662F\u7EAF\u6587\u672C\uFF0C\u9700\u8981\u7528\u5404\u5E73\u53F0\u7684 @ \u4EBA\u65B9\u5F0F\uFF09</li><li><code>@&lt;userId&gt;</code>: @ \u7B26\u53F7\u540E\u9762\u63A5\u7528\u6237\u540D\uFF08\u5FC5\u987B\u662F\u7EAF\u6587\u672C\uFF09</li><li><code>@&lt;platform&gt;:&lt;userId&gt;</code>: @ \u7B26\u53F7\u540E\u6307\u5B9A\u5177\u4F53\u7684\u5E73\u53F0\u548C\u7528\u6237\u540D\uFF08\u5FC5\u987B\u662F\u7EAF\u6587\u672C\uFF09</li></ul><p>\u4F8B\u5B50</p>',7),B=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"authorize 3 -u @Koishi              "),e("span",{style:{color:"#88846F"}},"# \u901A\u8FC7 @ \u4EBA\u7684\u65B9\u5F0F")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"authorize 3 -u @123456789           "),e("span",{style:{color:"#88846F"}},"# \u901A\u8FC7\u6307\u5B9A\u7528\u6237\u540D\u65B9\u5F0F")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"authorize 3 -u @onebot:123456789    "),e("span",{style:{color:"#88846F"}},"# \u6307\u5B9A\u5177\u4F53\u7684\u5E73\u53F0\u548C\u7528\u6237\u540D")])])],-1),b=i('<h2 id="\u6307\u4EE4-assign" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4-assign" aria-hidden="true">#</a> \u6307\u4EE4\uFF1Aassign</h2><ul><li>\u57FA\u672C\u8BED\u6CD5\uFF1A<code>assign [bot]</code></li><li>\u6700\u4F4E\u6743\u9650\uFF1A4</li><li>\u9009\u9879\uFF1A <ul><li><code>-c, --channel</code> \u6307\u5B9A\u76EE\u6807\u9891\u9053\uFF08\u4E0D\u5728\u7FA4\u7EC4\u5185\u4F7F\u7528\u65F6\u5FC5\u987B\u6307\u5B9A\uFF09</li><li><code>-r, --remove</code> \u91CD\u7F6E\u8BBE\u7F6E</li></ul></li></ul>',2),v=a("assign \u6307\u4EE4\u53EF\u7528\u4E8E\u8BBE\u7F6E\u9891\u9053\u7684 "),y=a("\u4EE3\u7406\u8005"),z=a("\u3002\u8BE5\u6307\u4EE4 4 \u7EA7\u6743\u9650\u624D\u80FD\u8C03\u7528\u3002"),E=i('<p>\u5982\u679C <code>-c [channel]</code> \u7F3A\u7701\uFF0C\u5219\u8868\u793A\u76EE\u6807\u9891\u9053\u4E3A\u5F53\u524D\u9891\u9053\uFF08\u56E0\u6B64\u79C1\u804A\u72B6\u6001\u4E0B\u4E0D\u80FD\u7F3A\u7701\uFF09\uFF1B\u5982\u679C <code>bot</code> \u7F3A\u7701\uFF0C\u5219\u8868\u793A\u5F53\u524D\u63A5\u6536\u6D88\u606F\u7684\u673A\u5668\u4EBA\u8D26\u53F7\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u8981\u8BBE\u5B9A\u4E00\u4E2A\u9891\u9053 A \u7684\u4EE3\u7406\u8005\u4E3A B\uFF0C\u4E0B\u9762\u7684\u4E24\u79CD\u505A\u6CD5\u662F\u7B49\u4EF7\u7684\uFF1A</p><ol><li>\u79C1\u804A\u673A\u5668\u4EBA B\uFF0C\u53D1\u9001 <code>assign -c #A</code></li><li>\u5728\u9891\u9053 A \u4E2D\u53D1\u9001 <code>assign @B</code>\uFF08\u5047\u8BBE B \u80FD\u6536\u5230\u6B64\u6D88\u606F\uFF09</li></ol><h2 id="\u6307\u4EE4-user-flag" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4-user-flag" aria-hidden="true">#</a> \u6307\u4EE4\uFF1Auser.flag</h2><h2 id="\u6307\u4EE4-channel-flag" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4-channel-flag" aria-hidden="true">#</a> \u6307\u4EE4\uFF1Achannel.flag</h2><ul><li>\u57FA\u672C\u8BED\u6CD5\uFF1A<code>xxx.flag [...names]</code></li><li>\u9009\u9879\uFF1A <ul><li><code>-l, --list</code> \u6807\u8BB0\u5217\u8868</li><li><code>-s, --set</code> \u6DFB\u52A0\u6807\u8BB0\uFF08\u9700\u8981 4 \u7EA7\u6743\u9650\uFF09</li><li><code>-S, --unset</code> \u5220\u9664\u6807\u8BB0\uFF08\u9700\u8981 4 \u7EA7\u6743\u9650\uFF09</li><li><code>-u, --user [@user]</code> \u76EE\u6807\u7528\u6237\uFF08\u4EC5\u9650 user.flag \u6307\u4EE4\uFF0C\u9700\u8981 3 \u7EA7\u6743\u9650\uFF09</li><li><code>-c, --channel [#channel]</code> \u76EE\u6807\u9891\u9053\uFF08\u4EC5\u9650 channel.flag \u6307\u4EE4\uFF0C\u9700\u8981 3 \u7EA7\u6743\u9650\uFF09</li></ul></li></ul><p>\u8FD9\u4E24\u4E2A\u6307\u4EE4\u7528\u4E8E\u67E5\u770B\u548C\u4FEE\u6539\u7528\u6237\u6216\u9891\u9053\u7684\u72B6\u6001\u6807\u7B7E\u3002\u5982\u679C\u4E0D\u63D0\u4F9B\u9009\u9879\uFF0C\u5219\u4F1A\u663E\u793A\u5F53\u524D\u7684\u72B6\u6001\u6807\u7B7E\u3002\u5982\u679C\u4F7F\u7528\u4E86 <code>-l</code>\uFF0C\u5C31\u4F1A\u5217\u51FA\u6240\u6709\u53EF\u7528\u7684\u72B6\u6001\u6807\u7B7E\u3002\u5982\u679C\u4F7F\u7528\u4E86 <code>-s</code> \u6216 <code>-S</code>\uFF0C\u5219\u4F1A\u6DFB\u52A0 / \u5220\u9664 <code>names</code> \u4E2D\u7684\u6BCF\u4E00\u4E2A\u72B6\u6001\u6807\u7B7E\u3002</p>',6);function k(A,w){const s=c("RouterLink"),t=c("panel-view");return n(),r(h,null,[_,e("div",p,[f,e("p",null,[g,o(s,{to:"/guide/database/builtin.html"},{default:l(()=>[m]),_:1}),F])]),x,o(t,{class:"code",title:"",style:{}},{default:l(()=>[B]),_:1}),b,e("p",null,[v,o(s,{to:"/guide/manage.html#%E5%B9%B3%E5%8F%B0%E7%9B%B8%E5%85%B3%E5%AD%97%E6%AE%B5"},{default:l(()=>[y]),_:1}),z]),E],64)}var V=d(u,[["render",k],["__file","admin.html.vue"]]);export{V as default};
