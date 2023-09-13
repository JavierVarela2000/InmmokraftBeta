import{o as Ce,t as se}from"../chunks/index.e681f7d3.js";import{S as ze,a as Ve,I as q,g as qe,f as Fe,b as ge,c as le,s as H,i as ye,d as Z,e as z,P as He,h as Ye}from"../chunks/singletons.c4d405c6.js";import{u as Xe}from"../chunks/parse.d12b0d5b.js";function Qe(n,i){return n==="/"||i==="ignore"?n:i==="never"?n.endsWith("/")?n.slice(0,-1):n:i==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function et(n){for(const i in n)n[i]=decodeURIComponent(n[i]);return n}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(n,i){const l=new URL(n);for(const f of tt){let h=l[f];Object.defineProperty(l,f,{get(){return i(),h},enumerable:!0,configurable:!0})}return at(l),l}function at(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(n){return n.replace(/\/$/,"")+rt}function Be(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Je(n,i){const l=JSON.stringify(i);try{sessionStorage[n]=l}catch{}}function it(...n){let i=5381;for(const l of n)if(typeof l=="string"){let f=l.length;for(;f;)i=i*33^l.charCodeAt(--f)}else if(ArrayBuffer.isView(l)){const f=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let h=f.length;for(;h;)i=i*33^f[--h]}else throw new TypeError("value must be a string or TypedArray");return(i>>>0).toString(36)}const ce=window.fetch;window.fetch=(n,i)=>((n instanceof Request?n.method:(i==null?void 0:i.method)||"GET")!=="GET"&&te.delete(be(n)),ce(n,i));const te=new Map;function st(n,i){const l=be(n,i),f=document.querySelector(l);if(f!=null&&f.textContent){const{body:h,...E}=JSON.parse(f.textContent),R=f.getAttribute("data-ttl");return R&&te.set(l,{body:h,init:E,ttl:1e3*Number(R)}),Promise.resolve(new Response(h,E))}return ce(n,i)}function lt(n,i,l){if(te.size>0){const f=be(n,l),h=te.get(f);if(h){if(performance.now()<h.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(h.body,h.init);te.delete(f)}}return ce(i,l)}function be(n,i){let f=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(i!=null&&i.headers||i!=null&&i.body){const h=[];i.headers&&h.push([...new Headers(i.headers)].join(",")),i.body&&(typeof i.body=="string"||ArrayBuffer.isView(i.body))&&h.push(i.body),f+=`[data-hash="${it(...h)}"]`}return f}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(n){const i=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${dt(n).map(f=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(h)return i.push({name:h[1],matcher:h[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const E=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(E)return i.push({name:E[1],matcher:E[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!f)return;const R=f.split(/\[(.+?)\](?!\])/);return"/"+R.map((_,v)=>{if(v%2){if(_.startsWith("x+"))return we(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return we(String.fromCharCode(..._.slice(2).split("-").map(L=>parseInt(L,16))));const g=ct.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,j,$,P]=g;return i.push({name:$,matcher:P,optional:!!D,rest:!!j,chained:j?v===1&&R[0]==="":!1}),j?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return we(_)}).join("")}).join("")}/?$`),params:i}}function ut(n){return!/^\([^)]+\)$/.test(n)}function dt(n){return n.slice(1).split("/").filter(ut)}function pt(n,i,l){const f={},h=n.slice(1);let E=0;for(let R=0;R<i.length;R+=1){const w=i[R],_=h[R-E];if(w.chained&&w.rest&&E){f[w.name]=h.slice(R-E,R+1).filter(v=>v).join("/"),E=0;continue}if(_===void 0){w.rest&&(f[w.name]="");continue}if(!w.matcher||l[w.matcher](_)){f[w.name]=_;const v=i[R+1],g=h[R+1];v&&!v.rest&&v.optional&&g&&(E=0);continue}if(w.optional&&w.chained){E++;continue}return}if(!E)return f}function we(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:i,dictionary:l,matchers:f}){const h=new Set(i);return Object.entries(l).map(([w,[_,v,g]])=>{const{pattern:D,params:j}=ft(w),$={id:w,exec:P=>{const L=D.exec(P);if(L)return pt(L,j,f)},errors:[1,...g||[]].map(P=>n[P]),layouts:[0,...v||[]].map(R),leaf:E(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function E(w){const _=w<0;return _&&(w=~w),[_,n[w]]}function R(w){return w===void 0?w:[h.has(w),n[w]]}}let ee=class{constructor(i,l){this.status=i,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${i}`}}toString(){return JSON.stringify(this.body)}},Ke=class{constructor(i,l){this.status=i,this.location=l}};async function mt(n){var i;for(const l in n)if(typeof((i=n[l])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([f,h])=>[f,await h])));return n}function gt(n){return n.filter(i=>i!=null)}const V=Be(ze)??{},Q=Be(Ve)??{};function _e(n){V[n]=Z()}function yt(n,i){var Te;const l=ht(n),f=n.nodes[0],h=n.nodes[1];f(),h();const E=document.documentElement,R=[],w=[];let _=null;const v={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},D=!1,j=!1,$=!0,P=!1,L=!1,G=!1,J=!1,F,O=(Te=history.state)==null?void 0:Te[q];O||(O=Date.now(),history.replaceState({...history.state,[q]:O},"",location.href));const fe=V[O];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let K,Ee,ne;async function Se(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=Y(t,!0);_=null,await Pe(e,t,[])}function ke(t){w.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=w.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Re(t){var e;(e=Q[t])==null||e.forEach((r,a)=>{var s,o;(o=(s=w[a])==null?void 0:s.snapshot)==null||o.restore(r)})}function xe(){_e(O),Je(ze,V),ke(O),Je(Ve,Q)}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:o=!1},u,c){return typeof t=="string"&&(t=new URL(t,qe(document))),ie({url:t,scroll:e?Z():null,keepfocus:a,redirect_chain:u,details:{state:s,replaceState:r},nav_token:c,accepted:()=>{o&&(J=!0)},blocked:()=>{},type:"goto"})}async function Le(t){return _={id:t.id,promise:Oe(t).then(e=>(e.type==="loaded"&&e.state.error&&(_=null),e))},_.promise}async function ae(...t){const r=l.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Pe(t,e,r,a,s,o={},u){var d,p,k;Ee=o;let c=t&&await Oe(t);if(!c){if(ye(e,z))return await B(e);c=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(t==null?void 0:t.url)||e,Ee!==o)return!1;if(c.type==="redirect")if(r.length>10||r.includes(e.pathname))c=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(c.location,e).href,{},[...r,e.pathname],o),!1;else((d=c.props.page)==null?void 0:d.status)>=400&&await H.updated.check()&&await B(e);if(R.length=0,J=!1,P=!0,a&&(_e(a),ke(a)),(p=c.props.page)!=null&&p.url&&c.props.page.url.pathname!==e.pathname&&(e.pathname=(k=c.props.page)==null?void 0:k.url.pathname),s&&s.details){const{details:y}=s,x=y.replaceState?0:1;if(y.state[q]=O+=x,history[y.replaceState?"replaceState":"pushState"](y.state,"",e),!y.replaceState){let S=O+1;for(;Q[S]||V[S];)delete Q[S],delete V[S],S+=1}}if(_=null,j?(g=c.state,c.props.page&&(c.props.page.url=e),F.$set(c.props)):Ue(c),s){const{scroll:y,keepfocus:x}=s,{activeElement:S}=document;if(await se(),$){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));y?scrollTo(y.x,y.y):U?U.scrollIntoView():scrollTo(0,0)}const m=document.activeElement!==S&&document.activeElement!==document.body;!x&&!m&&await ve()}else await se();$=!0,c.props.page&&(K=c.props.page),u&&u(),P=!1}function Ue(t){var a;g=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),K=t.props.page,F=new n.root({target:i,props:{...t.props,stores:H,components:w},hydrate:!0}),Re(O);const r={from:null,to:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};v.after_navigate.forEach(s=>s(r)),j=!0}async function W({url:t,params:e,branch:r,status:a,error:s,route:o,form:u}){let c="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(c=S.slash);t.pathname=Qe(t.pathname,c),t.search=t.search;const d={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:o},props:{constructors:gt(r).map(S=>S.node.component)}};u!==void 0&&(d.props.form=u);let p={},k=!K,y=0;for(let S=0;S<Math.max(r.length,g.branch.length);S+=1){const m=r[S],U=g.branch[S];(m==null?void 0:m.data)!==(U==null?void 0:U.data)&&(k=!0),m&&(p={...p,...m.data},k&&(d.props[`data_${y}`]=p),y+=1)}return(!g.url||t.href!==g.url.href||g.error!==s||u!==void 0&&u!==K.form||k)&&(d.props.page={error:s,params:e,route:{id:(o==null?void 0:o.id)??null},status:a,url:new URL(t),form:u??null,data:k?p:K.data}),d}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:o}){var p,k,y;let u=null;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},d=await t();if((p=d.universal)!=null&&p.load){let x=function(...m){for(const U of m){const{href:N}=new URL(U,r);c.dependencies.add(N)}};const S={route:{get id(){return c.route=!0,s.id}},params:new Proxy(a,{get:(m,U)=>(c.params.add(U),m[U])}),data:(o==null?void 0:o.data)??null,url:nt(r,()=>{c.url=!0}),async fetch(m,U){let N;m instanceof Request?(N=m.url,U={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...U}):N=m;const C=new URL(N,r);return x(C.href),C.origin===r.origin&&(N=C.href.slice(r.origin.length)),j?lt(N,C.href,U):st(N,U)},setHeaders:()=>{},depends:x,parent(){return c.parent=!0,e()}};u=await d.universal.load.call(null,S)??null,u=u?await mt(u):null}return{node:d,loader:t,server:o,universal:(k=d.universal)!=null&&k.load?{type:"data",data:u,uses:c}:null,data:u??(o==null?void 0:o.data)??null,slash:((y=d.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Ae(t,e,r,a,s){if(J)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const o of a.params)if(s[o]!==g.params[o])return!0;for(const o of a.dependencies)if(R.some(u=>u(new URL(o))))return!0;return!1}function pe(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Oe({id:t,invalidating:e,url:r,params:a,route:s}){if((_==null?void 0:_.id)===t)return _.promise;const{errors:o,layouts:u,leaf:c}=s,d=[...u,c];o.forEach(b=>b==null?void 0:b().catch(()=>{})),d.forEach(b=>b==null?void 0:b[1]().catch(()=>{}));let p=null;const k=g.url?t!==g.url.pathname+g.url.search:!1,y=g.route?s.id!==g.route.id:!1;let x=!1;const S=d.map((b,T)=>{var M;const A=g.branch[T],I=!!(b!=null&&b[0])&&((A==null?void 0:A.loader)!==b[1]||Ae(x,y,k,(M=A.server)==null?void 0:M.uses,a));return I&&(x=!0),I});if(S.some(Boolean)){try{p=await Me(r,S)}catch(b){return re({status:b instanceof ee?b.status:500,error:await X(b,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(p.type==="redirect")return p}const m=p==null?void 0:p.nodes;let U=!1;const N=d.map(async(b,T)=>{var he;if(!b)return;const A=g.branch[T],I=m==null?void 0:m[T];if((!I||I.type==="skip")&&b[1]===(A==null?void 0:A.loader)&&!Ae(U,y,k,(he=A.universal)==null?void 0:he.uses,a))return A;if(U=!0,(I==null?void 0:I.type)==="error")throw I;return de({loader:b[1],url:r,params:a,route:s,parent:async()=>{var Ne;const De={};for(let me=0;me<T;me+=1)Object.assign(De,(Ne=await N[me])==null?void 0:Ne.data);return De},server_data_node:pe(I===void 0&&b[0]?{type:"skip"}:I??null,b[0]?A==null?void 0:A.server:void 0)})});for(const b of N)b.catch(()=>{});const C=[];for(let b=0;b<d.length;b+=1)if(d[b])try{C.push(await N[b])}catch(T){if(T instanceof Ke)return{type:"redirect",location:T.location};let A=500,I;if(m!=null&&m.includes(T))A=T.status??A,I=T.error;else if(T instanceof ee)A=T.status,I=T.body;else{if(await H.updated.check())return await B(r);I=await X(T,{params:a,url:r,route:{id:s.id}})}const M=await $e(b,C,o);return M?await W({url:r,params:a,branch:C.slice(0,M.idx).concat(M.node),status:A,error:I,route:s}):await je(r,{id:s.id},I,A)}else C.push(void 0);return await W({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function $e(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let o=null;if(n.server_loads[0]===0)try{const p=await Me(r,[!0]);if(p.type!=="data"||p.nodes[0]&&p.nodes[0].type!=="data")throw 0;o=p.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await B(r)}const c=await de({loader:f,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(o)}),d={node:await h(),loader:h,universal:null,server:null,data:null};return await W({url:r,params:s,branch:[c,d],status:t,error:e,route:null})}function Y(t,e){if(ye(t,z))return;const r=oe(t);for(const a of l){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:et(s),url:t}}}function oe(t){return Ze(t.pathname.slice(z.length)||"/")}function Ie({url:t,type:e,intent:r,delta:a}){var c,d;let s=!1;const o={from:{params:g.params,route:{id:((c=g.route)==null?void 0:c.id)??null},url:g.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((d=r==null?void 0:r.route)==null?void 0:d.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(o.delta=a);const u={...o,cancel:()=>{s=!0}};return L||v.before_navigate.forEach(p=>p(u)),s?null:o}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:o,delta:u,nav_token:c,accepted:d,blocked:p}){const k=Y(t,!1),y=Ie({url:t,type:o,delta:u,intent:k});if(!y){p();return}const x=O;d(),L=!0,j&&H.navigating.set(y),await Pe(k,t,a,x,{scroll:e,keepfocus:r,details:s},c,()=>{L=!1,v.after_navigate.forEach(S=>S(y)),H.navigating.set(null)})}async function je(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!D?await re({status:a,error:r,url:t,route:e}):await B(t)}function B(t){return location.href=t.href,new Promise(()=>{})}function We(){let t;E.addEventListener("mousemove",o=>{const u=o.target;clearTimeout(t),t=setTimeout(()=>{a(u,2)},20)});function e(o){a(o.composedPath()[0],1)}E.addEventListener("mousedown",e),E.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(o=>{for(const u of o)u.isIntersecting&&(ae(oe(new URL(u.target.href))),r.unobserve(u.target))},{threshold:0});function a(o,u){const c=Fe(o,E);if(!c)return;const{url:d,external:p}=ge(c,z);if(p)return;const k=le(c);if(!k.reload)if(u<=k.preload_data){const y=Y(d,!1);y&&Le(y)}else u<=k.preload_code&&ae(oe(d))}function s(){r.disconnect();for(const o of E.querySelectorAll("a")){const{url:u,external:c}=ge(o,z);if(c)continue;const d=le(o);d.reload||(d.preload_code===He.viewport&&r.observe(o),d.preload_code===He.eager&&ae(oe(u)))}}v.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Ce(()=>(v.after_navigate.push(t),()=>{const e=v.after_navigate.indexOf(t);v.after_navigate.splice(e,1)}))},before_navigate:t=>{Ce(()=>(v.before_navigate.push(t),()=>{const e=v.before_navigate.indexOf(t);v.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(P||!j)&&($=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")R.push(t);else{const{href:e}=new URL(t,location.href);R.push(r=>r.href===e)}return Se()},invalidateAll:()=>(J=!0,Se()),preload_data:async t=>{const e=new URL(t,qe(document)),r=Y(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Le(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=g;if(!a)return;const s=await $e(g.branch.length,r,a.errors);if(s){const o=await W({url:e,params:g.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});g=o.state,F.$set(o.props),se().then(ve)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...K,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&ve())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(xe(),!L){const s={from:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};v.before_navigate.forEach(o=>o(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),(t=navigator.connection)!=null&&t.saveData||We(),E.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Fe(e.composedPath()[0],E);if(!r)return;const{url:a,external:s,target:o}=ge(r,z);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const u=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||u.reload){Ie({url:a,type:"link"})?L=!0:e.preventDefault();return}const[d,p]=a.href.split("#");if(p!==void 0&&d===location.href.split("#")[0]){G=!0,_e(O),g.url=a,H.page.set({...K,url:a}),H.page.notify();return}ie({url:a,scroll:u.noscroll?Z():null,keepfocus:u.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:u.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),E.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(o,z))return;const u=e.target,{keep_focus:c,noscroll:d,reload:p,replace_state:k}=le(u);if(p)return;e.preventDefault(),e.stopPropagation();const y=new FormData(u),x=a==null?void 0:a.getAttribute("name");x&&y.append(x,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(y).toString(),ie({url:o,scroll:d?Z():null,keepfocus:c??!1,redirect_chain:[],details:{state:{},replaceState:k??o.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===O)return;const a=V[e.state[q]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){V[O]=Z(),O=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-O;let o=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=e.state[q]},blocked:()=>{history.go(-s),o=!0},type:"popstate",delta:s}),o||Re(O)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[q]:++O},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&H.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:o,form:u})=>{D=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Y(c,!1)||{});let d;try{const p=r.map(async(k,y)=>{const x=o[y];return x!=null&&x.uses&&(x.uses=Ge(x.uses)),de({loader:n.nodes[k],url:c,params:a,route:s,parent:async()=>{const S={};for(let m=0;m<y;m+=1)Object.assign(S,(await p[m]).data);return S},server_data_node:pe(x)})});d=await W({url:c,params:a,branch:await Promise.all(p),status:t,error:e,form:u,route:l.find(({id:k})=>k===s.id)??null})}catch(p){if(p instanceof Ke){await B(new URL(p.location,location.href));return}d=await re({status:p instanceof ee?p.status:500,error:await X(p,{url:c,params:a,route:s}),url:c,route:s})}Ue(d)}}}async function Me(n,i){const l=new URL(n);l.pathname=ot(n.pathname),l.searchParams.append("x-sveltekit-invalidated",i.map(h=>h?"1":"").join("_"));const f=await ce(l.href);if(!f.ok)throw new ee(f.status,await f.json());return new Promise(async h=>{var g;const E=new Map,R=f.body.getReader(),w=new TextDecoder;function _(D){return Xe(D,{Promise:j=>new Promise(($,P)=>{E.set(j,{fulfil:$,reject:P})})})}let v="";for(;;){const{done:D,value:j}=await R.read();if(D&&!v)break;for(v+=!j&&v?`
`:w.decode(j);;){const $=v.indexOf(`
`);if($===-1)break;const P=JSON.parse(v.slice(0,$));if(v=v.slice($+1),P.type==="redirect")return h(P);if(P.type==="data")(g=P.nodes)==null||g.forEach(L=>{(L==null?void 0:L.type)==="data"&&(L.uses=Ge(L.uses),L.data=_(L.data))}),h(P);else if(P.type==="chunk"){const{id:L,data:G,error:J}=P,F=E.get(L);E.delete(L),J?F.reject(_(J)):F.fulfil(_(G))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function ve(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const i=document.body,l=i.getAttribute("tabindex");return i.tabIndex=-1,i.focus({preventScroll:!0}),l!==null?i.setAttribute("tabindex",l):i.removeAttribute("tabindex"),new Promise(f=>{setTimeout(()=>{var h;f((h=getSelection())==null?void 0:h.removeAllRanges())})})}}async function St(n,i,l){const f=yt(n,i);Ye({client:f}),l?await f._hydrate(l):f.goto(location.href,{replaceState:!0}),f._start_router()}export{St as start};
