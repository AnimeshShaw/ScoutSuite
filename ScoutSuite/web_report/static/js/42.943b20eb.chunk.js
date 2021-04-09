(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[42],{572:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(642)),r=n(640),i=n(103),l=n(645);t.default=function(e){var t=e.data;return t?Object(a.jsxs)(r.a,{data:t,children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(r.c,{label:"Name",valuePath:"name"}),Object(a.jsx)(r.c,{label:"Resource GUID",valuePath:"resource_guid"}),Object(a.jsx)(r.c,{label:"Type",valuePath:"type"}),Object(a.jsx)(r.c,{label:"Location",valuePath:"location"}),Object(a.jsx)(r.c,{label:"Provisioning State",valuePath:"provisioning_state"}),Object(a.jsx)(r.c,{label:"Address Space",valuePath:"address_space.address_prefixes",errorPath:"address_space"}),Object(a.jsx)(r.c,{label:"DHCP Options",valuePath:"dhcp_options",renderValue:i.n}),Object(a.jsx)(r.c,{label:"Virtual Network Peerings",valuePath:"virtual_network_peerings",renderValue:i.n}),Object(a.jsx)(r.c,{label:"Enable VM Protection",valuePath:"enable_vm_protection"}),Object(a.jsx)(r.c,{label:"Enable DDoS Protection",valuePath:"enable_ddos_protection"}),Object(a.jsx)(r.c,{label:"DDoS Protection Plan",valuePath:"ddos_protection_plan",renderValue:i.n}),Object(a.jsx)(r.c,{label:"Tags",valuePath:"tags",renderValue:function(e){return Object(i.k)(e,i.n)}}),Object(a.jsx)(r.c,{label:"Resource group",valuePath:"resource_group_name",renderValue:i.n})]}),Object(a.jsx)(l.b,{children:Object(a.jsx)(l.a,{title:"Subnets"})})]}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(0),c=n.n(a),r={path_to_issue:[],item:{}},i=c.a.createContext(r),l=c.a.createContext(""),s=c.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),c=n(1),r=n(0),i=n(633),l=n(7),s=n.n(l),o=n(15),u=n.n(o),b=n(10),d=n.n(b),j=n(637),p=n(103),v=n(83),h=(n(641),n(624)),O=n(191),f=n.n(O),x=n(192),P=n(130),m=function(e){var t=e.service,n=e.finding,a=e.path,l=Object(r.useContext)(P.a),s=l.exceptions,o=l.addException,b=Object(x.b)().enqueueSnackbar,d=u()(s,[t,n],[]).includes(a);return Object(c.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(c.jsx)(h.a,{disabled:d,size:"small",startIcon:Object(c.jsx)(f.a,{}),className:"exception-btn",onClick:function(){o(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},_=n(29),g=function(e){var t,n=e.label,l=e.separator,o=e.valuePath,b=e.errorPath,h=e.className,O=e.inline,f=e.tooltip,x=e.tooltipProps,P=e.renderValue,g=e.basePathOverwrite,C=Object(_.g)(),S=Object(r.useContext)(j.a),k=Object(r.useContext)(j.b),D=Object(r.useContext)(j.c),N=Object(p.a)(g||k,o),V=P(e.value||u()(S.item,N,e.value));("boolean"===typeof V&&(V=String(V)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(p.a)(g||k,e)})):t=[N];var w=t.some((function(e){return S.path_to_issues.includes(e)})),A=S.level;if(Object(r.useEffect)((function(){w&&D(A)}),[A]),void 0===V||null===V)return null;var E=Object(c.jsx)(m,{service:C.service,finding:C.finding,path:"".concat(S.path,".").concat(t[0])}),y=Object(c.jsxs)("span",{className:s()(w&&s()("issue",A)),children:[V,w&&E]});return Object(c.jsx)(v.a,{className:s()(h,"partial-value",{inline:O}),label:n,separator:l,value:f?Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({title:V},x),{},{children:y})):y})};g.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=g},639:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,l=Object(c.useContext)(r.b);return Object(a.jsx)(r.b.Provider,{value:Object(i.a)(l,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var a=n(1),c=(n(0),n(637)),r=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(c.a.Provider,{value:t,children:n})}),i=n(639),l=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s.b}));var a=n(1),c=n(18),r=n(0),i=n(7),l=n.n(i),s=n(104),o=n(637),u=n(56),b=(n(644),function(e){var t=e.title,n=e.isSelected,i=e.disabled,b=e.onClick,d=e.children,j=Object(r.useState)(""),p=Object(c.a)(j,2),v=p[0],h=p[1],O=v?Object(a.jsxs)(a.Fragment,{children:[t,u.a[v].icon]}):t;return Object(a.jsx)(o.c.Provider,{value:h,children:Object(a.jsx)(s.a,{title:O,className:l()("partial-tab-pane",v),isSelected:n,disabled:i,onClick:b,children:d})})})}}]);
//# sourceMappingURL=42.943b20eb.chunk.js.map