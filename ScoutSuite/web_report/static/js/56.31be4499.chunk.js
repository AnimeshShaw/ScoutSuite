(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[56],{645:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(0),n(742)),i=n(739);n(91);t.default=function(e){var t=e.data;return t?Object(r.jsx)(i.a,{data:t,children:Object(r.jsx)(a.a,{children:Object(r.jsx)(i.c,{label:"No Administering Resource Locks Role",valuePath:"missing_custom_role_administering_resource_locks"})})}):null}},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n(0),a=n.n(r),i={path_to_issue:[],item:{}},c=a.a.createContext(i),o=a.a.createContext(""),s=a.a.createContext((function(){}))},737:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n(736),c=n(91);t.a=function(e){var t=e.path,n=e.children,o=Object(a.useContext)(i.b);return Object(r.jsx)(i.b.Provider,{value:Object(c.a)(o,t),children:n})}},738:function(e,t,n){"use strict";var r=n(13),a=n(1),i=n(0),c=n(732),o=n(9),s=n.n(o),u=n(16),l=n.n(u),d=n(14),f=n.n(d),b=n(736),v=n(91),j=n(71),p=(n(740),n(723)),h=n(216),x=n.n(h),O=n(741),m=n.n(O),g=n(217),P=n(151),_=function(e){var t=e.service,n=e.finding,r=e.path,o=Object(i.useContext)(P.a),s=o.exceptions,u=o.addException,d=o.removeException,f=Object(g.b)().enqueueSnackbar,b=l()(s,[t,n],[]).includes(r);return Object(a.jsx)(c.a,{title:b?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(a.jsx)(p.a,{size:"small",className:"exception-btn",onClick:b?function(){d(t,n,r),f("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,r),f("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:b?Object(a.jsx)(m.a,{}):Object(a.jsx)(x.a,{})})})},C=n(34),N=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,P=Object(C.g)(),N=Object(i.useContext)(b.a),k=Object(i.useContext)(b.b),A=Object(i.useContext)(b.c),E=Object(v.a)(g||k,u),w=m(e.value||l()(N.item,E,e.value));("boolean"===typeof w&&(w=String(w)),d)?t=(f()(d)?d:[d]).map((function(e){return Object(v.a)(g||k,e)})):t=[E];var R=t.some((function(e){return N.path_to_issues.includes(e)})),z=N.level;if(Object(i.useEffect)((function(){R&&A(z)}),[z]),void 0===w||null===w)return null;var y=Object(a.jsx)(_,{service:P.service,finding:P.finding,path:"".concat(N.path,".").concat(t[0])}),D=Object(a.jsxs)("span",{className:s()(R&&s()("issue",z)),children:[w,R&&y]});return Object(a.jsx)(j.a,{className:s()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(a.jsx)(c.a,Object(r.a)(Object(r.a)({title:w},O),{},{children:D})):D})};N.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=N},739:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c.a})),n.d(t,"c",(function(){return o.a}));var r=n(1),a=(n(0),n(736)),i=(n(91),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(r.jsx)(a.a.Provider,{value:t,children:n})}),c=n(737),o=n(738)},740:function(e,t,n){},741:function(e,t,n){"use strict";var r=n(36),a=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),c=(0,r(n(39)).default)(i.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=c},742:function(e,t,n){"use strict";var r=n(1);n(0),n(743);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},743:function(e,t,n){}}]);
//# sourceMappingURL=56.31be4499.chunk.js.map