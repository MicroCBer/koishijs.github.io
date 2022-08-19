import{_ as d,o as i,c,a as e,e as t,w as r,F as h,d as o,b as a,r as l}from"./app.d5e91e3a.js";const u={},p=o('<h1 id="\u4E3B\u7EBF\u7A0B-api" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u7EBF\u7A0B-api" aria-hidden="true">#</a> \u4E3B\u7EBF\u7A0B API</h1><h2 id="\u751F\u547D\u5468\u671F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u4E8B\u4EF6" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F\u4E8B\u4EF6</h2><h3 id="eval-before-start" tabindex="-1"><a class="header-anchor" href="#eval-before-start" aria-hidden="true">#</a> eval/before-start</h3><ul><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul><p>\u5373\u5C06\u542F\u52A8\u5B50\u7EBF\u7A0B\u4E4B\u524D\u89E6\u53D1\u3002</p><h3 id="eval-start" tabindex="-1"><a class="header-anchor" href="#eval-start" aria-hidden="true">#</a> eval/start</h3>',6),g=e("strong",null,"response",-1),f=a(": "),F=e("code",null,"WorkerResponse",-1),_=a(" \u5B50\u7EBF\u7A0B\u7684 "),b=a("response"),y=a(" \u5BF9\u8C61"),m=e("li",null,[e("strong",null,"\u89E6\u53D1\u65B9\u5F0F:"),a(" parallel")],-1),x=o('<p>\u5B50\u7EBF\u7A0B\u6210\u529F\u542F\u52A8\u5E76\u5B8C\u6210\u521D\u59CB\u5316\u4E4B\u540E\u89E6\u53D1\u3002</p><h3 id="eval-before-send" tabindex="-1"><a class="header-anchor" href="#eval-before-send" aria-hidden="true">#</a> eval/before-send</h3><ul><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u5185\u5BB9</li><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> waterfall</li></ul><p>\u5728\u5B50\u7EBF\u7A0B\u4E2D\u8C03\u7528 <code>main.send()</code>\uFF0C\u4E3B\u7EBF\u7A0B\u5B9E\u9645\u53D1\u9001\u6D88\u606F\u4E4B\u524D\u89E6\u53D1\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u4FEE\u6539 <code>content</code> \u7684\u503C\u5E76\u8FD4\u56DE\u3002</p><h2 id="trap-\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#trap-\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> Trap \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="trap-define-key-decl" tabindex="-1"><a class="header-anchor" href="#trap-define-key-decl" aria-hidden="true">#</a> trap.define(key, decl)</h3><ul><li><strong>key:</strong> <code>string</code> \u5B57\u6BB5\u540D</li><li><strong>decl:</strong> <code>Declaraion</code> \u9677\u9631\u7684\u5B9A\u4E49 <ul><li><strong>decl.fields:</strong> <code>Iterable&lt;string&gt;</code> \u4F9D\u8D56\u7684\u5B57\u6BB5</li><li><strong>decl.get?:</strong> <code>(target: {}) =&gt; any</code> \u9677\u9631\u7684 getter</li><li><strong>decl.set?:</strong> <code>(target: {}, value: any) =&gt; void</code> \u9677\u9631\u7684 setter</li></ul></li></ul><p>\u5B9A\u4E49\u4E00\u4E2A\u9677\u9631\u5B57\u6BB5\u3002</p><h3 id="trap-fields-fields" tabindex="-1"><a class="header-anchor" href="#trap-fields-fields" aria-hidden="true">#</a> trap.fields(fields)</h3><ul><li><strong>fields:</strong> <code>Iterable&lt;string&gt;</code> \u9700\u8981\u7684\u5B57\u6BB5</li></ul><p>\u6839\u636E\u9677\u9631\u6240\u9700\u7684\u5B57\u6BB5\u751F\u6210\u5B9E\u9645\u6570\u636E\u6240\u9700\u7684\u5B57\u6BB5\u3002</p><h3 id="trap-get-target-fields" tabindex="-1"><a class="header-anchor" href="#trap-get-target-fields" aria-hidden="true">#</a> trap.get(target, fields)</h3><ul><li><strong>target:</strong> <code>Observed&lt;{}&gt;</code> \u76EE\u6807\u5BF9\u8C61</li><li><strong>fields:</strong> <code>Iterable&lt;string&gt;</code> \u9700\u8981\u7684\u5B57\u6BB5</li></ul><p>\u6839\u636E\u9700\u8981\u7684\u5B57\u6BB5\u751F\u6210\u4E00\u4E2A\u9677\u9631\u5BF9\u8C61\u3002</p><h3 id="trap-set-target-data" tabindex="-1"><a class="header-anchor" href="#trap-set-target-data" aria-hidden="true">#</a> trap.set(target, data)</h3><ul><li><strong>target:</strong> <code>Observed&lt;{}&gt;</code> \u76EE\u6807\u5BF9\u8C61</li><li><strong>data:</strong> <code>object</code> \u9700\u8981\u66F4\u65B0\u7684\u6570\u636E</li></ul><p>\u6839\u636E\u7ED9\u5B9A\u7684\u6570\u636E\u66F4\u65B0\u76EE\u6807\u5BF9\u8C61\u3002</p><h2 id="trap-\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#trap-\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> Trap \u9759\u6001\u5C5E\u6027</h2><h3 id="\u8BBF\u95EE\u914D\u7F6E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u914D\u7F6E\u683C\u5F0F" aria-hidden="true">#</a> \u8BBF\u95EE\u914D\u7F6E\u683C\u5F0F</h3>',19),k=a("\u8FD9\u4E2A\u6570\u636E\u7C7B\u578B\u5C06\u88AB\u7528\u4E8E "),v=e("code",null,"userFields",-1),w=a(" \u7B49\u914D\u7F6E\u9879\uFF0C\u4EE5\u53CA\u6269\u5C55\u529F\u80FD\u7684 manifest.yml \u4E2D\u3002\u5176\u4E2D readable \u8868\u793A\u53EF\u8BFB\u7684\u5B57\u6BB5\uFF0Cwritable \u8868\u793A\u53EF\u5199\u7684\u5B57\u6BB5\u3002\u5982\u679C\u76F4\u63A5\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5219\u8868\u793A\u6240\u6709\u8FD9\u4E9B\u5B57\u6BB5\u90FD\u662F\u53EA\u8BFB\u7684\u3002"),A=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"AccessObject"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},"> {")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  readable"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},"[]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  writable"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},"[]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Access"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},"[] "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"AccessObject"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},">")])])],-1),E=o('<h3 id="trap-user" tabindex="-1"><a class="header-anchor" href="#trap-user" aria-hidden="true">#</a> Trap.user</h3><ul><li>\u7C7B\u578B: <code>Trap</code></li></ul><p>\u4EE3\u7406\u7528\u6237\u6570\u636E\u7684\u9677\u9631\u5BF9\u8C61\u3002</p><h3 id="trap-channel" tabindex="-1"><a class="header-anchor" href="#trap-channel" aria-hidden="true">#</a> Trap.channel</h3><ul><li>\u7C7B\u578B: <code>Trap</code></li></ul><p>\u4EE3\u7406\u9891\u9053\u6570\u636E\u7684\u9677\u9631\u5BF9\u8C61\u3002</p><h3 id="trap-resolve-fields" tabindex="-1"><a class="header-anchor" href="#trap-resolve-fields" aria-hidden="true">#</a> Trap.resolve(fields)</h3><ul><li><strong>fields:</strong> <code>Access&lt;T&gt;</code> \u8BBF\u95EE\u914D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>AccessObject&lt;T&gt;</code></li></ul><p>\u5C06\u4E00\u4E2A\u4E00\u822C\u5F62\u5F0F\u7684\u8BBF\u95EE\u914D\u7F6E\u8F6C\u5316\u4E3A\u5BF9\u8C61\u683C\u5F0F\u7684\u3002</p><h3 id="trap-merge-baseaccess-fields" tabindex="-1"><a class="header-anchor" href="#trap-merge-baseaccess-fields" aria-hidden="true">#</a> Trap.merge(baseAccess, fields)</h3><ul><li><strong>baseAccess:</strong> <code>AccessObject&lt;T&gt;</code> \u8BBF\u95EE\u914D\u7F6E</li><li><strong>fields:</strong> <code>Access&lt;T&gt;</code> \u8BBF\u95EE\u914D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>AccessObject&lt;T&gt;</code></li></ul><p>\u4EE5 baseAccess \u4E3A\u57FA\u7840\uFF0C\u5408\u5E76\u53E6\u4E00\u4E2A\u8BBF\u95EE\u914D\u7F6E\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u683C\u5F0F\u8BBF\u95EE\u914D\u7F6E\u3002</p><h3 id="trap-action-command-useraccess-channelaccess-action" tabindex="-1"><a class="header-anchor" href="#trap-action-command-useraccess-channelaccess-action" aria-hidden="true">#</a> Trap.action(command, userAccess, channelAccess, action)</h3><ul><li><strong>command:</strong> <code>Command</code> \u6307\u4EE4</li><li><strong>userAccess:</strong> <code>AccessObject&lt;User.Field&gt;</code> \u7528\u6237\u6570\u636E\u8BBF\u95EE\u914D\u7F6E</li><li><strong>channelAccess:</strong> <code>AccessObject&lt;Channel.Field&gt;</code> \u9891\u9053\u6570\u636E\u8BBF\u95EE\u914D\u7F6E</li><li><strong>action:</strong> <code>Command.Action</code> \u56DE\u8C03\u51FD\u6570</li></ul><p>\u4EE5\u7528\u6237\u548C\u9891\u9053\u6570\u636E\u7684\u9677\u9631\u5BF9\u8C61\u4E3A\u57FA\u7840\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u7528\u4E8E\u5B50\u7EBF\u7A0B\u7684\u6307\u4EE4\u56DE\u8C03\u51FD\u6570\u3002\u5176\u53C2\u6570 <code>argv</code> \u9644\u52A0\u4E86\u4E00\u4E2A\u989D\u5916\u7684\u5C5E\u6027\uFF1A</p>',15),T=e("strong",null,"argv.payload:",-1),U=a(),O=e("code",null,"SessionData",-1),j=a(" \u4F1A\u8BDD\u4FE1\u606F\uFF0C\u53EF\u7528\u4E8E\u5B50\u7EBF\u7A0B\u4E2D\u7684 "),D=e("code",null,"createSession()",-1),I=a(" \u65B9\u6CD5"),C=o('<h2 id="mainhandle" tabindex="-1"><a class="header-anchor" href="#mainhandle" aria-hidden="true">#</a> MainHandle</h2><h3 id="handle-execute-uuid-content" tabindex="-1"><a class="header-anchor" href="#handle-execute-uuid-content" aria-hidden="true">#</a> handle.execute(uuid, content)</h3><ul><li><strong>uuid:</strong> <code>string</code> \u4F1A\u8BDD UUID</li><li><strong>content:</strong> <code>string</code> \u8981\u6267\u884C\u7684\u6307\u4EE4</li></ul><p>\u5728 uuid \u76F8\u5BF9\u5E94\u7684\u4F1A\u8BDD\u4E2D\u89E6\u53D1\u6307\u4EE4\u3002</p><h3 id="handle-send-uuid-content" tabindex="-1"><a class="header-anchor" href="#handle-send-uuid-content" aria-hidden="true">#</a> handle.send(uuid, content)</h3><ul><li><strong>uuid:</strong> <code>string</code> \u4F1A\u8BDD UUID</li><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u6587\u672C</li></ul><p>\u5728 uuid \u76F8\u5BF9\u5E94\u7684\u4F1A\u8BDD\u4E2D\u53D1\u9001\u6D88\u606F\u3002</p><h3 id="handle-updateuser-uuid-data" tabindex="-1"><a class="header-anchor" href="#handle-updateuser-uuid-data" aria-hidden="true">#</a> handle.updateUser(uuid, data)</h3><ul><li><strong>uuid:</strong> <code>string</code> \u4F1A\u8BDD UUID</li><li><strong>data:</strong> <code>Partial&lt;User&gt;</code> \u8981\u66F4\u65B0\u7684\u7528\u6237\u6570\u636E</li></ul><p>\u5728 uuid \u76F8\u5BF9\u5E94\u7684\u4F1A\u8BDD\u4E2D\u66F4\u65B0\u7528\u6237\u6570\u636E\u3002</p><h3 id="handle-updatechannel-uuid-data" tabindex="-1"><a class="header-anchor" href="#handle-updatechannel-uuid-data" aria-hidden="true">#</a> handle.updateChannel(uuid, data)</h3><ul><li><strong>uuid:</strong> <code>string</code> \u4F1A\u8BDD UUID</li><li><strong>data:</strong> <code>Partial&lt;Channel&gt;</code> \u8981\u66F4\u65B0\u7684\u9891\u9053\u6570\u636E</li></ul><p>\u5728 uuid \u76F8\u5BF9\u5E94\u7684\u4F1A\u8BDD\u4E2D\u66F4\u65B0\u9891\u9053\u6570\u636E\u3002</p><h2 id="evalworker" tabindex="-1"><a class="header-anchor" href="#evalworker" aria-hidden="true">#</a> EvalWorker</h2><h3 id="worker-remote" tabindex="-1"><a class="header-anchor" href="#worker-remote" aria-hidden="true">#</a> worker.remote</h3>',15),P=a("\u7C7B\u578B: "),W=e("code",null,"WorkerHandle",-1),H=o('<p>\u5B50\u7EBF\u7A0B WorkerHandle \u5BF9\u8C61\u7684\u4EE3\u7406\u3002Koishi \u7684\u5185\u90E8\u673A\u5236\u5C06\u5141\u8BB8\u4F60\u5982\u540C\u76F4\u63A5\u5728\u5B50\u7EBF\u7A0B\u91CC\u8C03\u7528 WorkerHandle \u65B9\u6CD5\u90A3\u6837\u8C03\u7528\u8FD9\u91CC\u7684 <code>remote</code> \u5BF9\u8C61\u3002\u5F53\u7136\u4F60\u53EA\u80FD\u901A\u8FC7 <code>remote</code> \u505A\u5230\u8FD9\u4EF6\u4E8B\u3002</p><h3 id="worker-state" tabindex="-1"><a class="header-anchor" href="#worker-state" aria-hidden="true">#</a> worker.state</h3><ul><li>\u7C7B\u578B: <code>number</code></li></ul><p>\u5B50\u7EBF\u7A0B\u7684\u8FD0\u884C\u72B6\u6001\u3002\u5206\u522B\u7528 0, 1, 2, 3 \u8868\u793A closing, close, opening, open\u3002</p><h3 id="worker-start" tabindex="-1"><a class="header-anchor" href="#worker-start" aria-hidden="true">#</a> worker.start()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u542F\u52A8\u5B50\u7EBF\u7A0B\u3002</p><h3 id="worker-stop" tabindex="-1"><a class="header-anchor" href="#worker-stop" aria-hidden="true">#</a> worker.stop()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5173\u95ED\u5B50\u7EBF\u7A0B\u3002</p><h3 id="worker-restart" tabindex="-1"><a class="header-anchor" href="#worker-restart" aria-hidden="true">#</a> worker.restart()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5173\u95ED\u5E76\u91CD\u65B0\u542F\u52A8\u5B50\u7EBF\u7A0B\u3002</p>',13);function N(S,V){const s=l("RouterLink"),n=l("panel-view");return i(),c(h,null,[p,e("ul",null,[e("li",null,[g,f,F,_,t(s,{to:"/community/eval/worker.html#response"},{default:r(()=>[b]),_:1}),y]),m]),x,e("p",null,[k,t(s,{to:"/community/eval/config.html#userfield"},{default:r(()=>[v]),_:1}),w]),t(n,{class:"code",title:"",style:{}},{default:r(()=>[A]),_:1}),E,e("ul",null,[e("li",null,[T,U,O,j,t(s,{to:"/community/eval/worker.html#createsession"},{default:r(()=>[D]),_:1}),I])]),C,e("ul",null,[e("li",null,[P,t(s,{to:"/community/eval/worker.html#workerhandle"},{default:r(()=>[W]),_:1})])]),H],64)}var R=d(u,[["render",N],["__file","main.html.vue"]]);export{R as default};
