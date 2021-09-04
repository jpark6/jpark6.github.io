"use strict";(self.webpackChunkgatsby_blog_typescript=self.webpackChunkgatsby_blog_typescript||[]).push([[691],{5327:function(e,t,n){n.r(t),n.d(t,{default:function(){return We}});n(5168);var a,r=n(7462),o=n(4942),c=n(1002),i=n(885),l=n(7294),s=n(5900),u=n.n(s),d=n(7024),f=(0,l.createContext)({}),v=n(4224),p=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},b=new Map,h=-1,y={},g={matchHandlers:{},dispatch:function(e){return y=e,b.forEach((function(e){return e(y)})),b.size>=1},subscribe:function(e){return b.size||this.register(),h+=1,b.set(h,e),e(y),h},unsubscribe:function(e){b.delete(e),b.size||this.unregister()},unregister:function(){var e=this;Object.keys(m).forEach((function(t){var n=m[t],a=e.matchHandlers[n];null==a||a.mql.removeListener(null==a?void 0:a.listener)})),b.clear()},register:function(){var e=this;Object.keys(m).forEach((function(t){var n=m[t],a=function(n){var a=n.matches;e.dispatch((0,r.Z)((0,r.Z)({},y),(0,o.Z)({},t,a)))},c=window.matchMedia(n);c.addListener(a),e.matchHandlers[n]={mql:c,listener:a},a(c)}))}},Z=n(2034),E=function(){return(0,Z.Z)()&&window.document.documentElement},x=function(){var e=l.useState(!1),t=(0,i.Z)(e,2),n=t[0],r=t[1];return l.useEffect((function(){r(function(){if(!E())return!1;if(void 0!==a)return a;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=1===e.scrollHeight,document.body.removeChild(e),a}())}),[]),n},w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=((0,v.b)("top","middle","bottom","stretch"),(0,v.b)("start","end","center","space-around","space-between"),l.forwardRef((function(e,t){var n,a=e.prefixCls,s=e.justify,v=e.align,m=e.className,b=e.style,h=e.children,y=e.gutter,Z=void 0===y?0:y,E=e.wrap,C=w(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=l.useContext(d.E_),k=N.getPrefixCls,O=N.direction,P=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,i.Z)(P,2),T=S[0],R=S[1],j=x(),I=l.useRef(Z);l.useEffect((function(){var e=g.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&R(e)}));return function(){return g.unsubscribe(e)}}),[]);var M,A=k("row",a),L=(M=[0,0],(Array.isArray(Z)?Z:[Z,0]).forEach((function(e,t){if("object"===(0,c.Z)(e))for(var n=0;n<p.length;n++){var a=p[n];if(T[a]&&void 0!==e[a]){M[t]=e[a];break}}else M[t]=e||0})),M),B=u()(A,(n={},(0,o.Z)(n,"".concat(A,"-no-wrap"),!1===E),(0,o.Z)(n,"".concat(A,"-").concat(s),s),(0,o.Z)(n,"".concat(A,"-").concat(v),v),(0,o.Z)(n,"".concat(A,"-rtl"),"rtl"===O),n),m),K={},D=L[0]>0?L[0]/-2:void 0,W=L[1]>0?L[1]/-2:void 0;if(D&&(K.marginLeft=D,K.marginRight=D),j){var z=(0,i.Z)(L,2);K.rowGap=z[1]}else W&&(K.marginTop=W,K.marginBottom=W);var _=l.useMemo((function(){return{gutter:L,wrap:E,supportFlexGap:j}}),[L,E,j]);return l.createElement(f.Provider,{value:_},l.createElement("div",(0,r.Z)({},C,{className:B,style:(0,r.Z)((0,r.Z)({},K),b),ref:t}),h))})));C.displayName="Row";var N=C,k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var O=["xs","sm","md","lg","xl","xxl"],P=l.forwardRef((function(e,t){var n,a=l.useContext(d.E_),i=a.getPrefixCls,s=a.direction,v=l.useContext(f),p=v.gutter,m=v.wrap,b=v.supportFlexGap,h=e.prefixCls,y=e.span,g=e.order,Z=e.offset,E=e.push,x=e.pull,w=e.className,C=e.children,N=e.flex,P=e.style,S=k(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),T=i("col",h),R={};O.forEach((function(t){var n,a={},i=e[t];"number"==typeof i?a.span=i:"object"===(0,c.Z)(i)&&(a=i||{}),delete S[t],R=(0,r.Z)((0,r.Z)({},R),(n={},(0,o.Z)(n,"".concat(T,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,o.Z)(n,"".concat(T,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,o.Z)(n,"".concat(T,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,o.Z)(n,"".concat(T,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,o.Z)(n,"".concat(T,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,o.Z)(n,"".concat(T,"-rtl"),"rtl"===s),n))}));var j=u()(T,(n={},(0,o.Z)(n,"".concat(T,"-").concat(y),void 0!==y),(0,o.Z)(n,"".concat(T,"-order-").concat(g),g),(0,o.Z)(n,"".concat(T,"-offset-").concat(Z),Z),(0,o.Z)(n,"".concat(T,"-push-").concat(E),E),(0,o.Z)(n,"".concat(T,"-pull-").concat(x),x),n),w,R),I={};if(p&&p[0]>0){var M=p[0]/2;I.paddingLeft=M,I.paddingRight=M}if(p&&p[1]>0&&!b){var A=p[1]/2;I.paddingTop=A,I.paddingBottom=A}return N&&(I.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(N),"auto"!==N||!1!==m||I.minWidth||(I.minWidth=0)),l.createElement("div",(0,r.Z)({},S,{style:(0,r.Z)((0,r.Z)({},I),P),className:j,ref:t}),C)}));P.displayName="Col";var S=P,T=n(6779),R=n(8613),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},I=function(e){var t=e.prefixCls,n=e.className,a=e.hoverable,c=void 0===a||a,i=j(e,["prefixCls","className","hoverable"]);return l.createElement(d.C,null,(function(e){var a=(0,e.getPrefixCls)("card",t),s=u()("".concat(a,"-grid"),n,(0,o.Z)({},"".concat(a,"-grid-hoverable"),c));return l.createElement("div",(0,r.Z)({},i,{className:s}))}))},M=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},A=function(e){return l.createElement(d.C,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,o=e.className,c=e.avatar,i=e.title,s=e.description,d=M(e,["prefixCls","className","avatar","title","description"]),f=n("card",a),v=u()("".concat(f,"-meta"),o),p=c?l.createElement("div",{className:"".concat(f,"-meta-avatar")},c):null,m=i?l.createElement("div",{className:"".concat(f,"-meta-title")},i):null,b=s?l.createElement("div",{className:"".concat(f,"-meta-description")},s):null,h=m||b?l.createElement("div",{className:"".concat(f,"-meta-detail")},m,b):null;return l.createElement("div",(0,r.Z)({},d,{className:v}),p,h)}))},L=n(4925),B=n(1413),K=n(1786),D=n(9866),W=n(1637),z=n(2982),_=n(518),H=n(8493);function q(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return function(){n.current=!0,_.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(_.Z.cancel(t.current),t.current=(0,_.Z)((function(){e.apply(void 0,r)})))}}var G=n(5934);function V(e,t){var n,a=e.prefixCls,r=e.id,c=e.active,i=e.tab,s=i.key,d=i.tab,f=i.disabled,v=i.closeIcon,p=e.closable,m=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,g=e.onRemove,Z=e.onFocus,E=e.style,x="".concat(a,"-tab");l.useEffect((function(){return g}),[]);var w=h&&!1!==p&&!f;function C(e){f||y(e)}var N=l.createElement("div",{key:s,ref:t,className:u()(x,(n={},(0,o.Z)(n,"".concat(x,"-with-remove"),w),(0,o.Z)(n,"".concat(x,"-active"),c),(0,o.Z)(n,"".concat(x,"-disabled"),f),n)),style:E,onClick:C},l.createElement("div",{role:"tab","aria-selected":c,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(x,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[G.Z.SPACE,G.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:Z},d),w&&l.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:s,event:t})}},v||h.removeIcon||"×"));return m?m(N):N}var F=l.forwardRef(V),Y={width:0,height:0,left:0,top:0};var X={width:0,height:0,left:0,top:0,right:0};var U=n(4553),$=n(8154),J={adjustX:1,adjustY:1},Q=[0,0],ee={topLeft:{points:["bl","tl"],overflow:J,offset:[0,-4],targetOffset:Q},topCenter:{points:["bc","tc"],overflow:J,offset:[0,-4],targetOffset:Q},topRight:{points:["br","tr"],overflow:J,offset:[0,-4],targetOffset:Q},bottomLeft:{points:["tl","bl"],overflow:J,offset:[0,4],targetOffset:Q},bottomCenter:{points:["tc","bc"],overflow:J,offset:[0,4],targetOffset:Q},bottomRight:{points:["tr","br"],overflow:J,offset:[0,4],targetOffset:Q}};var te=l.forwardRef((function(e,t){var n=e.arrow,a=void 0!==n&&n,r=e.prefixCls,c=void 0===r?"rc-dropdown":r,s=e.transitionName,d=e.animation,f=e.align,v=e.placement,p=void 0===v?"bottomLeft":v,m=e.placements,b=void 0===m?ee:m,h=e.getPopupContainer,y=e.showAction,g=e.hideAction,Z=e.overlayClassName,E=e.overlayStyle,x=e.visible,w=e.trigger,C=void 0===w?["hover"]:w,N=(0,L.Z)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),k=l.useState(),O=(0,i.Z)(k,2),P=O[0],S=O[1],T="visible"in e?x:P,R=l.useRef(null);l.useImperativeHandle(t,(function(){return R.current}));var j,I,M,A,B,K,D=function(){var t=e.overlay;return"function"==typeof t?t():t},W=function(t){var n=e.onOverlayClick,a=D().props;S(!1),n&&n(t),a.onClick&&a.onClick(t)},z=function(){var e=D(),t={prefixCls:"".concat(c,"-menu"),onClick:W};return"string"==typeof e.type&&delete t.prefixCls,l.createElement(l.Fragment,null,a&&l.createElement("div",{className:"".concat(c,"-arrow")}),l.cloneElement(e,t))},_=g;return _||-1===C.indexOf("contextMenu")||(_=["click"]),l.createElement($.Z,Object.assign({},N,{prefixCls:c,ref:R,popupClassName:u()(Z,(0,o.Z)({},"".concat(c,"-show-arrow"),a)),popupStyle:E,builtinPlacements:b,action:C,showAction:y,hideAction:_||[],popupPlacement:p,popupAlign:f,popupTransitionName:s,popupAnimation:d,popupVisible:T,stretch:(B=e.minOverlayWidthMatchTrigger,K=e.alignPoint,("minOverlayWidthMatchTrigger"in e?B:!K)?"minWidth":""),popup:"function"==typeof e.overlay?z:z(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;S(t),"function"==typeof n&&n(t)},getPopupContainer:h}),(I=e.children,M=I.props?I.props:{},A=u()(M.className,void 0!==(j=e.openClassName)?j:"".concat(c,"-open")),P&&I?l.cloneElement(I,{className:A}):I))}));function ne(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var ae=l.forwardRef(ne);function re(e,t){var n=e.prefixCls,a=e.id,r=e.tabs,c=e.locale,s=e.mobile,d=e.moreIcon,f=void 0===d?"More":d,v=e.moreTransitionName,p=e.style,m=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,g=e.onTabClick,Z=(0,l.useState)(!1),E=(0,i.Z)(Z,2),x=E[0],w=E[1],C=(0,l.useState)(null),N=(0,i.Z)(C,2),k=N[0],O=N[1],P="".concat(a,"-more-popup"),S="".concat(n,"-dropdown"),T=null!==k?"".concat(P,"-").concat(k):null,R=null==c?void 0:c.dropdownAriaLabel,j=l.createElement(U.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),w(!1)},id:P,tabIndex:-1,role:"listbox","aria-activedescendant":T,selectedKeys:[k],"aria-label":void 0!==R?R:"expanded dropdown"},r.map((function(e){return l.createElement(U.sN,{key:e.key,id:"".concat(P,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function I(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===k}))||0,a=t.length,o=0;o<a;o+=1){var c=t[n=(n+e+a)%a];if(!c.disabled)return void O(c.key)}}(0,l.useEffect)((function(){var e=document.getElementById(T);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[k]),(0,l.useEffect)((function(){x||O(null)}),[x]);var M=(0,o.Z)({},y?"marginRight":"marginLeft",h);r.length||(M.visibility="hidden",M.order=1);var A=u()((0,o.Z)({},"".concat(S,"-rtl"),y)),L=s?null:l.createElement(te,{prefixCls:S,overlay:j,trigger:["hover"],visible:x,transitionName:v,onVisibleChange:w,overlayClassName:A,mouseEnterDelay:.1,mouseLeaveDelay:.1},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:M,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":P,id:"".concat(a,"-more"),"aria-expanded":x,onKeyDown:function(e){var t=e.which;if(x)switch(t){case G.Z.UP:I(-1),e.preventDefault();break;case G.Z.DOWN:I(1),e.preventDefault();break;case G.Z.ESC:w(!1);break;case G.Z.SPACE:case G.Z.ENTER:null!==k&&g(k,e)}else[G.Z.DOWN,G.Z.SPACE,G.Z.ENTER].includes(t)&&(w(!0),e.preventDefault())}},f));return l.createElement("div",{className:u()("".concat(n,"-nav-operations"),m),style:p,ref:t},L,l.createElement(ae,{prefixCls:n,locale:c,editable:b}))}var oe=l.forwardRef(re),ce=(0,l.createContext)(null),ie=Math.pow(.995,20);function le(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,i.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var se=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,c.Z)(r)&&!l.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?l.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function ue(e,t){var n,a,c=l.useContext(ce),s=c.prefixCls,d=c.tabs,f=e.className,v=e.style,p=e.id,m=e.animated,b=e.activeKey,h=e.rtl,y=e.extra,g=e.editable,Z=e.locale,E=e.tabPosition,x=e.tabBarGutter,w=e.children,C=e.onTabClick,N=e.onTabScroll,k=(0,l.useRef)(),O=(0,l.useRef)(),P=(0,l.useRef)(),S=(0,l.useRef)(),T=(a=(0,l.useRef)(new Map),[function(e){return a.current.has(e)||a.current.set(e,l.createRef()),a.current.get(e)},function(e){a.current.delete(e)}]),R=(0,i.Z)(T,2),j=R[0],I=R[1],M="top"===E||"bottom"===E,A=le(0,(function(e,t){M&&N&&N({direction:e>t?"left":"right"})})),L=(0,i.Z)(A,2),K=L[0],D=L[1],W=le(0,(function(e,t){!M&&N&&N({direction:e>t?"top":"bottom"})})),G=(0,i.Z)(W,2),V=G[0],U=G[1],$=(0,l.useState)(0),J=(0,i.Z)($,2),Q=J[0],ee=J[1],te=(0,l.useState)(0),ne=(0,i.Z)(te,2),re=ne[0],ue=ne[1],de=(0,l.useState)(0),fe=(0,i.Z)(de,2),ve=fe[0],pe=fe[1],me=(0,l.useState)(0),be=(0,i.Z)(me,2),he=be[0],ye=be[1],ge=(0,l.useState)(null),Ze=(0,i.Z)(ge,2),Ee=Ze[0],xe=Ze[1],we=(0,l.useState)(null),Ce=(0,i.Z)(we,2),Ne=Ce[0],ke=Ce[1],Oe=(0,l.useState)(0),Pe=(0,i.Z)(Oe,2),Se=Pe[0],Te=Pe[1],Re=(0,l.useState)(0),je=(0,i.Z)(Re,2),Ie=je[0],Me=je[1],Ae=function(e){var t=(0,l.useRef)([]),n=(0,l.useState)({}),a=(0,i.Z)(n,2)[1],r=(0,l.useRef)("function"==typeof e?e():e),o=q((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Le=(0,i.Z)(Ae,2),Be=Le[0],Ke=Le[1],De=function(e,t,n){return(0,l.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||Y,o=r.left+r.width,c=0;c<e.length;c+=1){var i,l=e[c].key,s=t.get(l);s||(s=t.get(null===(i=e[c-1])||void 0===i?void 0:i.key)||Y);var u=a.get(l)||(0,B.Z)({},s);u.right=o-u.left-u.width,a.set(l,u)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(d,Be,Q),We="".concat(s,"-nav-operations-hidden"),ze=0,_e=0;function He(e){return e<ze?ze:e>_e?_e:e}M?h?(ze=0,_e=Math.max(0,Q-Ee)):(ze=Math.min(0,Ee-Q),_e=0):(ze=Math.min(0,Ne-re),_e=0);var qe=(0,l.useRef)(),Ge=(0,l.useState)(),Ve=(0,i.Z)(Ge,2),Fe=Ve[0],Ye=Ve[1];function Xe(){Ye(Date.now())}function Ue(){window.clearTimeout(qe.current)}function $e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=De.get(e)||{width:0,height:0,left:0,right:0,top:0};if(M){var n=K;h?t.right<K?n=t.right:t.right+t.width>K+Ee&&(n=t.right+t.width-Ee):t.left<-K?n=-t.left:t.left+t.width>-K+Ee&&(n=-(t.left+t.width-Ee)),U(0),D(He(n))}else{var a=V;t.top<-V?a=-t.top:t.top+t.height>-V+Ne&&(a=-(t.top+t.height-Ne)),D(0),U(He(a))}}!function(e,t){var n=(0,l.useState)(),a=(0,i.Z)(n,2),r=a[0],o=a[1],c=(0,l.useState)(0),s=(0,i.Z)(c,2),u=s[0],d=s[1],f=(0,l.useState)(0),v=(0,i.Z)(f,2),p=v[0],m=v[1],b=(0,l.useState)(),h=(0,i.Z)(b,2),y=h[0],g=h[1],Z=(0,l.useRef)(),E=(0,l.useRef)(),x=(0,l.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(Z.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,c=n.screenY;o({x:a,y:c});var i=a-r.x,l=c-r.y;t(i,l);var s=Date.now();d(s),m(s-u),g({x:i,y:l})}},onTouchEnd:function(){if(r&&(o(null),g(null),y)){var e=y.x/p,n=y.y/p,a=Math.abs(e),c=Math.abs(n);if(Math.max(a,c)<.1)return;var i=e,l=n;Z.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(i*=ie),20*(l*=ie))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),c=Math.abs(a);o===c?r="x"===E.current?n:a:o>c?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(k,(function(e,t){function n(e,t){e((function(e){return He(e+t)}))}if(M){if(Ee>=Q)return!1;n(D,e)}else{if(Ne>=re)return!1;n(U,t)}return Ue(),Xe(),!0})),(0,l.useEffect)((function(){return Ue(),Fe&&(qe.current=window.setTimeout((function(){Ye(0)}),100)),Ue}),[Fe]);var Je=function(e,t,n,a,r){var o,c,i,s=r.tabs,u=r.tabPosition,d=r.rtl;["top","bottom"].includes(u)?(o="width",c=d?"right":"left",i=Math.abs(t.left)):(o="height",c="top",i=-t.top);var f=t[o],v=n[o],p=a[o],m=f;return v+p>f&&(m=f-p),(0,l.useMemo)((function(){if(!s.length)return[0,0];for(var t=s.length,n=t,a=0;a<t;a+=1){var r=e.get(s[a].key)||X;if(r[c]+r[o]>i+m){n=a-1;break}}for(var l=0,u=t-1;u>=0;u-=1)if((e.get(s[u].key)||X)[c]<i){l=u+1;break}return[l,n]}),[e,i,m,u,s.map((function(e){return e.key})).join("_"),d])}(De,{width:Ee,height:Ne,left:K,top:V},{width:ve,height:he},{width:Se,height:Ie},(0,B.Z)((0,B.Z)({},e),{},{tabs:d})),Qe=(0,i.Z)(Je,2),et=Qe[0],tt=Qe[1],nt={};"top"===E||"bottom"===E?nt[h?"marginRight":"marginLeft"]=x:nt.marginTop=x;var at=d.map((function(e,t){var n=e.key;return l.createElement(F,{id:p,prefixCls:s,key:n,tab:e,style:0===t?void 0:nt,closable:e.closable,editable:g,active:n===b,renderWrapper:w,removeAriaLabel:null==Z?void 0:Z.removeAriaLabel,ref:j(n),onClick:function(e){C(n,e)},onRemove:function(){I(n)},onFocus:function(){$e(n),Xe(),k.current&&(h||(k.current.scrollLeft=0),k.current.scrollTop=0)}})})),rt=q((function(){var e,t,n,a,r,o,c,i,l,s=(null===(e=k.current)||void 0===e?void 0:e.offsetWidth)||0,u=(null===(t=k.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=S.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=S.current)||void 0===a?void 0:a.offsetHeight)||0,p=(null===(r=P.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(o=P.current)||void 0===o?void 0:o.offsetHeight)||0;xe(s),ke(u),Te(f),Me(v);var b=((null===(c=O.current)||void 0===c?void 0:c.offsetWidth)||0)-f,h=((null===(i=O.current)||void 0===i?void 0:i.offsetHeight)||0)-v;ee(b),ue(h);var y=null===(l=P.current)||void 0===l?void 0:l.className.includes(We);pe(b-(y?0:p)),ye(h-(y?0:m)),Ke((function(){var e=new Map;return d.forEach((function(t){var n=t.key,a=j(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),ot=d.slice(0,et),ct=d.slice(tt+1),it=[].concat((0,z.Z)(ot),(0,z.Z)(ct)),lt=(0,l.useState)(),st=(0,i.Z)(lt,2),ut=st[0],dt=st[1],ft=De.get(b),vt=(0,l.useRef)();function pt(){_.Z.cancel(vt.current)}(0,l.useEffect)((function(){var e={};return ft&&(M?(h?e.right=ft.right:e.left=ft.left,e.width=ft.width):(e.top=ft.top,e.height=ft.height)),pt(),vt.current=(0,_.Z)((function(){dt(e)})),pt}),[ft,M,h]),(0,l.useEffect)((function(){$e()}),[b,ft,De,M]),(0,l.useEffect)((function(){rt()}),[h,x,b,d.map((function(e){return e.key})).join("_")]);var mt,bt,ht,yt,gt=!!it.length,Zt="".concat(s,"-nav-wrap");return M?h?(bt=K>0,mt=K+Ee<Q):(mt=K<0,bt=-K+Ee<Q):(ht=V<0,yt=-V+Ne<re),l.createElement("div",{ref:t,role:"tablist",className:u()("".concat(s,"-nav"),f),style:v,onKeyDown:function(){Xe()}},l.createElement(se,{position:"left",extra:y,prefixCls:s}),l.createElement(H.Z,{onResize:rt},l.createElement("div",{className:u()(Zt,(n={},(0,o.Z)(n,"".concat(Zt,"-ping-left"),mt),(0,o.Z)(n,"".concat(Zt,"-ping-right"),bt),(0,o.Z)(n,"".concat(Zt,"-ping-top"),ht),(0,o.Z)(n,"".concat(Zt,"-ping-bottom"),yt),n)),ref:k},l.createElement(H.Z,{onResize:rt},l.createElement("div",{ref:O,className:"".concat(s,"-nav-list"),style:{transform:"translate(".concat(K,"px, ").concat(V,"px)"),transition:Fe?"none":void 0}},at,l.createElement(ae,{ref:S,prefixCls:s,locale:Z,editable:g,style:(0,B.Z)((0,B.Z)({},0===at.length?void 0:nt),{},{visibility:gt?"hidden":null})}),l.createElement("div",{className:u()("".concat(s,"-ink-bar"),(0,o.Z)({},"".concat(s,"-ink-bar-animated"),m.inkBar)),style:ut}))))),l.createElement(oe,(0,r.Z)({},e,{ref:P,prefixCls:s,tabs:it,className:!gt&&We})),l.createElement(se,{position:"right",extra:y,prefixCls:s}))}var de=l.forwardRef(ue);function fe(e){var t=e.id,n=e.activeKey,a=e.animated,r=e.tabPosition,c=e.rtl,i=e.destroyInactiveTabPane,s=l.useContext(ce),d=s.prefixCls,f=s.tabs,v=a.tabPane,p=f.findIndex((function(e){return e.key===n}));return l.createElement("div",{className:u()("".concat(d,"-content-holder"))},l.createElement("div",{className:u()("".concat(d,"-content"),"".concat(d,"-content-").concat(r),(0,o.Z)({},"".concat(d,"-content-animated"),v)),style:p&&v?(0,o.Z)({},c?"marginRight":"marginLeft","-".concat(p,"00%")):null},f.map((function(e){return l.cloneElement(e.node,{key:e.key,prefixCls:d,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:i})}))))}function ve(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,o=e.id,c=e.active,s=e.animated,d=e.destroyInactiveTabPane,f=e.tabKey,v=e.children,p=l.useState(n),m=(0,i.Z)(p,2),b=m[0],h=m[1];l.useEffect((function(){c?h(!0):d&&h(!1)}),[c,d]);var y={};return c||(s?(y.visibility="hidden",y.height=0,y.overflowY="hidden"):y.display="none"),l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(f),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(f),"aria-hidden":!c,style:(0,B.Z)((0,B.Z)({},y),r),className:u()("".concat(t,"-tabpane"),c&&"".concat(t,"-tabpane-active"),a)},(c||b||n)&&v)}var pe=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],me=0;function be(e,t){var n,a,s=e.id,d=e.prefixCls,f=void 0===d?"rc-tabs":d,v=e.className,p=e.children,m=e.direction,b=e.activeKey,h=e.defaultActiveKey,y=e.editable,g=e.animated,Z=void 0===g?{inkBar:!0,tabPane:!1}:g,E=e.tabPosition,x=void 0===E?"top":E,w=e.tabBarGutter,C=e.tabBarStyle,N=e.tabBarExtraContent,k=e.locale,O=e.moreIcon,P=e.moreTransitionName,S=e.destroyInactiveTabPane,T=e.renderTabBar,R=e.onChange,j=e.onTabClick,I=e.onTabScroll,M=(0,L.Z)(e,pe),A=function(e){return(0,K.Z)(e).map((function(e){if(l.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,B.Z)((0,B.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(p),z="rtl"===m;a=!1===Z?{inkBar:!1,tabPane:!1}:!0===Z?{inkBar:!0,tabPane:!0}:(0,B.Z)({inkBar:!0,tabPane:!1},"object"===(0,c.Z)(Z)?Z:{});var _=(0,l.useState)(!1),H=(0,i.Z)(_,2),q=H[0],G=H[1];(0,l.useEffect)((function(){G((0,D.Z)())}),[]);var V=(0,W.Z)((function(){var e;return null===(e=A[0])||void 0===e?void 0:e.key}),{value:b,defaultValue:h}),F=(0,i.Z)(V,2),Y=F[0],X=F[1],U=(0,l.useState)((function(){return A.findIndex((function(e){return e.key===Y}))})),$=(0,i.Z)(U,2),J=$[0],Q=$[1];(0,l.useEffect)((function(){var e,t=A.findIndex((function(e){return e.key===Y}));-1===t&&(t=Math.max(0,Math.min(J,A.length-1)),X(null===(e=A[t])||void 0===e?void 0:e.key));Q(t)}),[A.map((function(e){return e.key})).join("_"),Y,J]);var ee=(0,W.Z)(null,{value:s}),te=(0,i.Z)(ee,2),ne=te[0],ae=te[1],re=x;q&&!["left","right"].includes(x)&&(re="top"),(0,l.useEffect)((function(){s||(ae("rc-tabs-".concat(me)),me+=1)}),[]);var oe,ie={id:ne,activeKey:Y,animated:a,tabPosition:re,rtl:z,mobile:q},le=(0,B.Z)((0,B.Z)({},ie),{},{editable:y,locale:k,moreIcon:O,moreTransitionName:P,tabBarGutter:w,onTabClick:function(e,t){null==j||j(e,t),X(e),null==R||R(e)},onTabScroll:I,extra:N,style:C,panes:p});return oe=T?T(le,de):l.createElement(de,le),l.createElement(ce.Provider,{value:{tabs:A,prefixCls:f}},l.createElement("div",(0,r.Z)({ref:t,id:s,className:u()(f,"".concat(f,"-").concat(re),(n={},(0,o.Z)(n,"".concat(f,"-mobile"),q),(0,o.Z)(n,"".concat(f,"-editable"),y),(0,o.Z)(n,"".concat(f,"-rtl"),z),n),v)},M),oe,l.createElement(fe,(0,r.Z)({destroyInactiveTabPane:S},ie,{animated:a}))))}var he=l.forwardRef(be);he.TabPane=ve;var ye=he,ge=n(6002),Ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Ee=n(7143),xe=function(e,t){return l.createElement(Ee.Z,(0,B.Z)((0,B.Z)({},e),{},{ref:t,icon:Ze}))};xe.displayName="PlusOutlined";var we=l.forwardRef(xe),Ce=n(5663),Ne=n(200),ke=n(2226),Oe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function Pe(e){var t,n=e.type,a=e.className,c=e.size,i=e.onEdit,s=e.hideAdd,f=e.centered,v=e.addIcon,p=Oe(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=p.prefixCls,b=p.moreIcon,h=void 0===b?l.createElement(ge.Z,null):b,y=l.useContext(d.E_),g=y.getPrefixCls,Z=y.direction,E=g("tabs",m);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null==i||i("add"===e?a:n,e)},removeIcon:l.createElement(Ce.Z,null),addIcon:v||l.createElement(we,null),showAdd:!0!==s});var x=g();return(0,Ne.Z)(!("onPrevClick"in p)&&!("onNextClick"in p),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),l.createElement(ke.Z.Consumer,null,(function(e){var i,s=void 0!==c?c:e;return l.createElement(ye,(0,r.Z)({direction:Z,moreTransitionName:"".concat(x,"-slide-up")},p,{className:u()((i={},(0,o.Z)(i,"".concat(E,"-").concat(s),s),(0,o.Z)(i,"".concat(E,"-card"),["card","editable-card"].includes(n)),(0,o.Z)(i,"".concat(E,"-editable-card"),"editable-card"===n),(0,o.Z)(i,"".concat(E,"-centered"),f),i),a),editable:t,moreIcon:h,prefixCls:E}))}))}Pe.TabPane=ve;var Se=Pe,Te=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var Re=function(e){var t,n,a,c=l.useContext(d.E_),i=c.getPrefixCls,s=c.direction,f=l.useContext(ke.Z),v=e.prefixCls,p=e.className,m=e.extra,b=e.headStyle,h=void 0===b?{}:b,y=e.bodyStyle,g=void 0===y?{}:y,Z=e.title,E=e.loading,x=e.bordered,w=void 0===x||x,C=e.size,k=e.type,O=e.cover,P=e.actions,T=e.tabList,j=e.children,M=e.activeTabKey,A=e.defaultActiveTabKey,L=e.tabBarExtraContent,B=e.hoverable,K=e.tabProps,D=void 0===K?{}:K,W=Te(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),z=i("card",v),_=0===g.padding||"0px"===g.padding?{padding:24}:void 0,H=l.createElement("div",{className:"".concat(z,"-loading-block")}),q=l.createElement("div",{className:"".concat(z,"-loading-content"),style:_},l.createElement(N,{gutter:8},l.createElement(S,{span:22},H)),l.createElement(N,{gutter:8},l.createElement(S,{span:8},H),l.createElement(S,{span:15},H)),l.createElement(N,{gutter:8},l.createElement(S,{span:6},H),l.createElement(S,{span:18},H)),l.createElement(N,{gutter:8},l.createElement(S,{span:13},H),l.createElement(S,{span:9},H)),l.createElement(N,{gutter:8},l.createElement(S,{span:4},H),l.createElement(S,{span:3},H),l.createElement(S,{span:16},H))),G=void 0!==M,V=(0,r.Z)((0,r.Z)({},D),(t={},(0,o.Z)(t,G?"activeKey":"defaultActiveKey",G?M:A),(0,o.Z)(t,"tabBarExtraContent",L),t)),F=T&&T.length?l.createElement(Se,(0,r.Z)({size:"large"},V,{className:"".concat(z,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)}}),T.map((function(e){return l.createElement(Se.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(Z||m||F)&&(a=l.createElement("div",{className:"".concat(z,"-head"),style:h},l.createElement("div",{className:"".concat(z,"-head-wrapper")},Z&&l.createElement("div",{className:"".concat(z,"-head-title")},Z),m&&l.createElement("div",{className:"".concat(z,"-extra")},m)),F));var Y,X=O?l.createElement("div",{className:"".concat(z,"-cover")},O):null,U=l.createElement("div",{className:"".concat(z,"-body"),style:g},E?q:j),$=P&&P.length?l.createElement("ul",{className:"".concat(z,"-actions")},function(e){return e.map((function(t,n){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},l.createElement("span",null,t))}))}(P)):null,J=(0,R.Z)(W,["onTabChange"]),Q=C||f,ee=u()(z,(n={},(0,o.Z)(n,"".concat(z,"-loading"),E),(0,o.Z)(n,"".concat(z,"-bordered"),w),(0,o.Z)(n,"".concat(z,"-hoverable"),B),(0,o.Z)(n,"".concat(z,"-contain-grid"),(l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===I&&(Y=!0)})),Y)),(0,o.Z)(n,"".concat(z,"-contain-tabs"),T&&T.length),(0,o.Z)(n,"".concat(z,"-").concat(Q),Q),(0,o.Z)(n,"".concat(z,"-type-").concat(k),!!k),(0,o.Z)(n,"".concat(z,"-rtl"),"rtl"===s),n),p);return l.createElement("div",(0,r.Z)({},J,{className:ee}),a,X,U,$)};Re.Grid=I,Re.Meta=A;var je=Re,Ie=n(3132),Me=n(5444),Ae=n(7918);function Le(e){var t=e.node;return(0,Ae.tZ)(Me.Link,{to:t.frontmatter.slug},(0,Ae.tZ)(je,{hoverable:!0,bordered:!1,cover:(0,Ae.tZ)("img",{src:t.frontmatter.thumbnail,alt:t.frontmatter.title,style:{width:"100%",height:"270px",marginBottom:0,borderBottom:"1px solid #f0f0f0",objectFit:"cover"}}),style:{backgroundColor:"white",border:"1px solid #ddd"}},(0,Ae.tZ)(je.Meta,{title:t.frontmatter.title,description:(0,Ie.p)(t.frontmatter.date)})))}var Be=n(83);function Ke(){var e=(0,l.useState)(!1),t=e[0],n=e[1],a=(0,l.useRef)();return(0,l.useEffect)((function(){setTimeout((function(){n(!0)}),2e3)})),(0,Ae.tZ)(l.Fragment,null,!t&&(0,Ae.tZ)("div",{className:"beforeLoadPage",ref:a},(0,Ae.tZ)(Be.Z,{style:{fontSize:"64px",color:"#1ac5be"}})))}var De=n(7447);function We(e){var t=e.data;return(0,Ae.tZ)(l.Fragment,null,(0,Ae.tZ)(Ke,null),(0,Ae.tZ)(T.Z,null,(0,Ae.tZ)(De.Z,{title:"",lang:"ko"}),(0,Ae.tZ)("div",{className:"indexContainer"},(0,Ae.tZ)("h4",null,t.allMdx.totalCount," Posts"),(0,Ae.tZ)("div",{className:"cardContainer"},(0,Ae.tZ)(N,null,t.allMdx.edges.map((function(e){var t=e.node;return(0,Ae.tZ)(S,{key:t.id,className:"gutter-row",xs:24,sm:24,md:12,lg:8,xl:8,style:{padding:"0 4px 8px"}},(0,Ae.tZ)(Le,{node:t}))})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ef661a6acf2147f8052b.js.map