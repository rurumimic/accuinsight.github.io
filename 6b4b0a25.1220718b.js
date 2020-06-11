(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{219:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),l=(r(0),r(369));const c={title:"Cluster"},i={id:"mlmodeler/cluster/cluster",title:"Cluster",description:"## Cluster\r",source:"@site/docs\\mlmodeler\\cluster\\cluster.md",permalink:"/docs/mlmodeler/cluster/cluster",sidebar:"mlmodeler",previous:{title:"Training History",permalink:"/docs/mlmodeler/history/history"},next:{title:"Tutorial",permalink:"/docs/mlmodeler/tutorial/tutorial"}},s=[{value:"Cluster",id:"cluster",children:[{value:"\ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac",id:"\ud074\ub7ec\uc2a4\ud130-\uad00\ub9ac",children:[]},{value:"Livy Session \uad00\ub9ac",id:"livy-session-\uad00\ub9ac",children:[]}]}],o={rightToc:s};function u({components:e,...t}){return Object(l.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"cluster"},"Cluster"),Object(l.b)("p",null,"\ud559\uc2b5, \uc608\uce21 \uc2dc \uc0ac\uc6a9\ud560 \ud074\ub7ec\uc2a4\ud130 \ubaa9\ub85d\uc744 \uad00\ub9ac\ud55c\ub2e4."),Object(l.b)("h3",{id:"\ud074\ub7ec\uc2a4\ud130-\uad00\ub9ac"},"\ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac"),Object(l.b)("h4",{id:"\ud074\ub7ec\uc2a4\ud130-\uc870\ud68c"},"\ud074\ub7ec\uc2a4\ud130 \uc870\ud68c"),Object(l.b)("p",null,"\ud604\uc7ac \ub85c\uadf8\uc778\ud55c ID\ub97c \ud1b5\ud574 \uc0dd\uc131\ub418\uac70\ub098 \uad8c\ud55c \uc788\ub294 \ud074\ub7ec\uc2a4\ud130 \ubaa9\ub85d\uc744 \uc870\ud68c\ud55c\ub2e4. \uac80\uc0c9 \ud544\ud130\ub97c \ud1b5\ud574\uc11c \uc870\ud68c\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster001_cluster%EC%A1%B0%ED%9A%8C.png",alt:"cluster001"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc0c1\ub2e8\uc758 Pipeline \uba85 \ub610\ub294 Dataset \uba85, \ub0a0\uc9dc\ub85c \uac80\uc0c9\ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc88c\uce21 \ubaa9\ub85d\uc5d0\uc11c \ud559\uc2b5\ud55c \uc774\ub825\ub4e4\uc758 \uc815\ubcf4(\ud30c\uc774\ud504\ub77c\uc778 \uba85, \uc0c1\ud0dc, \ub370\uc774\ud130\uc14b, \uc5d0\ub7ec \uba54\uc2dc\uc9c0, eval, \uc2dc\uc791\uc2dc\uac04, \uc885\ub8cc\uc2dc\uac04)\ub97c \ud655\uc778\ud55c\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud558\ub098\ub97c \uc120\ud0dd \ud558\uba74 \uc6b0\uce21\uc5d0\uc11c Pipeline \uc815\ubcf4(\ub370\uc774\ud130\uc14b \ubc0f \uc54c\uace0\ub9ac\uc998)\uc640 \ud559\uc2b5 Property(\ud504\ub85c\ud37c\ud2f0) \uac12\uc744 \ud655\uc778\ud55c\ub2e4.")),Object(l.b)("h4",{id:"\ud074\ub7ec\uc2a4\ud130-\ub4f1\ub85d"},"\ud074\ub7ec\uc2a4\ud130 \ub4f1\ub85d"),Object(l.b)("p",null,"\uc6b0\uce21 \uc0c1\ub2e8 '\uc2e0\uaddc \ub4f1\ub85d' \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ub4f1\ub85d\ud560 \ud074\ub7ec\uc2a4\ud130 \uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster002_cluster%EB%93%B1%EB%A1%9D.png",alt:"cluster002"}))),Object(l.b)("h4",{id:"\ud074\ub7ec\uc2a4\ud130-\uc218\uc815"},"\ud074\ub7ec\uc2a4\ud130 \uc218\uc815"),Object(l.b)("p",null,"\uae30\ub2a5 \uceec\ub7fc\uc5d0 '\ud3b8\uc9d1' \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \ud3b8\uc9d1 \ucc3d\uc5d0\uc11c \ud074\ub7ec\uc2a4\ud130 \uc815\ubcf4\ub97c \uc218\uc815\ud55c\ub2e4. ( DHP\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ud074\ub7ec\uc2a4\ud130\ub098 \ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131\uc790\uac00 \uc544\ub2cc \uacbd\uc6b0\ub294 \uc218\uc815 \ubd88\uac00\ub2a5/\uc870\ud68c\ub9cc \uac00\ub2a5)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster003_cluster%EC%88%98%EC%A0%95.png",alt:"cluster003"}))),Object(l.b)("h4",{id:"\ud074\ub7ec\uc2a4\ud130-\uc0ad\uc81c"},"\ud074\ub7ec\uc2a4\ud130 \uc0ad\uc81c"),Object(l.b)("p",null,"\uc6b0\uce21 \uc0c1\ub2e8 '\uc0ad\uc81c' \ubc84\ud2bc \ub610\ub294 \uae30\ub2a5 \uceec\ub7fc\uc5d0 '\uc0ad\uc81c' \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \ud074\ub7ec\uc2a4\ud130\ub97c \uc0ad\uc81c\ud55c\ub2e4. ( DHP\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ud074\ub7ec\uc2a4\ud130\ub098 \ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131\uc790\uac00 \uc544\ub2cc \uacbd\uc6b0\ub294 \uc0ad\uc81c \ubd88\uac00\ub2a5)"),Object(l.b)("h4",{id:"\ud074\ub7ec\uc2a4\ud130-\uad8c\ud55c-\uad00\ub9ac"},"\ud074\ub7ec\uc2a4\ud130 \uad8c\ud55c \uad00\ub9ac"),Object(l.b)("p",null,"\uad8c\ud55c \uceec\ub7fc\uc5d0 '\uad8c\ud55c' \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \ud574\ub2f9 \ud074\ub7ec\uc2a4\ud130\ub97c \uc0ac\uc6a9\ud560 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uad8c\ud55c\uc744 \ubd80\uc5ec\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster004_cluster%EA%B6%8C%ED%95%9C%EA%B4%80%EB%A6%AC.png",alt:"cluster004"}))),Object(l.b)("h3",{id:"livy-session-\uad00\ub9ac"},"Livy Session \uad00\ub9ac"),Object(l.b)("h4",{id:"livy-session-\uad00\ub9ac-1"},"Livy Session \uad00\ub9ac"),Object(l.b)("p",null,"SparkML \uc791\uc5c5\uc744 \uc2e4\ud589\ud558\uae30 \uc704\ud55c Livy Session\uc744 \uad00\ub9ac\ud55c\ub2e4.\n\ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac \ud654\uba74\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ud074\ub7ec\uc2a4\ud130\uc758 \uc124\uc815 \uceec\ub7fc\uc5d0 \uc5f0\ud544 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster005_livysession%EA%B4%80%EB%A6%AC.png",alt:"cluster005"}))),Object(l.b)("h4",{id:"livy-session-\uc870\ud68c"},"Livy Session \uc870\ud68c"),Object(l.b)("p",null,"Livy Session\ub4e4\uc774 \uc870\ud68c\ub418\uace0, \ud604\uc7ac \uc0c1\ud0dc\ub4e4\uc774 \ubcf4\uc5ec\uc9c4\ub2e4. \u201cIDLE\u201d\uc774 \ub418\uba74 \ud559\uc2b5 \uc2dc\ud0ac \uc900\ube44\uac00 \ub418\uc5b4\uc788\ub294 \uc0c1\ud0dc\uc774\ub2e4. (\u201cBusy\u201d\ub294 \ud559\uc2b5 \uc911\uc778 \uc0c1\ud0dc\uc774\ub2e4.)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster006_livysession%EC%A1%B0%ED%9A%8C.png",alt:"cluster006"}))),Object(l.b)("p",null,"\uc0c1\ud0dc\uc758 \uc0c1\uc138 \ub0b4\uc6a9\uc740 \uc544\ub798\uc640 \uac19\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster007_livysession%EC%83%81%ED%83%9C%EC%83%81%EC%84%B8%EB%82%B4%EC%9A%A9.png",alt:"cluster007"}))),Object(l.b)("h4",{id:"livy-session-\ub4f1\ub85d"},"Livy Session \ub4f1\ub85d"),Object(l.b)("p",null,"\uc6b0\uce21 \uc0c1\ub2e8 New \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec Livy Session\uc744 \ub4f1\ub85d\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster008_livysession%EB%93%B1%EB%A1%9D.png",alt:"cluster008"}))),Object(l.b)("p",null,"\uc785\ub825\ud560 \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster009_livysession%EB%93%B1%EB%A1%9D%EC%A0%95%EB%B3%B4.png",alt:"cluster009"}))),Object(l.b)("h4",{id:"livy-session-log-\uc870\ud68c"},"Livy Session Log \uc870\ud68c"),Object(l.b)("p",null,"Logs \uceec\ub7fc\uc758 \ub3cb\ubcf4\uae30 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec Session\uc758 \ub85c\uadf8\ub97c \uc870\ud68c\ud55c\ub2e4. Session\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0 \uc6d0\uc778\uc744 \ud30c\uc545\ud560 \uc218 \uc788\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster010_livysession%EB%A1%9C%EA%B7%B8%EC%A1%B0%ED%9A%8C.png",alt:"cluster010"}))),Object(l.b)("h4",{id:"livy-session-statements-\uc870\ud68c"},"Livy Session Statements \uc870\ud68c"),Object(l.b)("p",null,"Action \uceec\ub7fc\uc758 \ub9ac\uc2a4\ud2b8 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec Statement \uc0c1\ud0dc\uc640 \uc9c4\ud589\ub960, Code, Output\uc744 \uc870\ud68c\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/mlmodeler/cluster/cluster011_livysession%EB%A1%9C%EA%B7%B8statement%EC%A1%B0%ED%9A%8C.png",alt:"cluster011"}))),Object(l.b)("h4",{id:"livy-session-\uc0ad\uc81c"},"Livy Session \uc0ad\uc81c"),Object(l.b)("p",null,"Action \uceec\ub7fc\uc758 \ud734\uc9c0\ud1b5 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec Session\uc744 \uc0ad\uc81c\ud55c\ub2e4."))}u.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return O}));var n=r(0),l=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=l.a.createContext({}),b=function(e){var t=l.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},a=function(e){var t=b(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),a=b(r),m=n,O=a["".concat(i,".").concat(m)]||a[m]||p[m]||c;return r?l.a.createElement(O,s({ref:t},u,{components:r})):l.a.createElement(O,s({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<c;u++)i[u]=r[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);