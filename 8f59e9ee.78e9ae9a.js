(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(345));const l={title:"withColumn"},o={id:"pipeline/workflow/workspace/data-processing-basic/with-column",title:"withColumn",description:"## withColumn\r",source:"@site/docs\\pipeline\\workflow\\workspace\\data-processing-basic\\with-column.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/with-column",sidebar:"pipeline",previous:{title:"withColumnRenamed",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/with-column-renamed"},next:{title:"addConditionCol",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/add-condition-col"}},c=[{value:"withColumn",id:"withcolumn",children:[]}],i={rightToc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"withcolumn"},"withColumn"),Object(a.b)("p",null,"\uc0c8\ub85c\uc6b4 \uceec\ub7fc\uc744 \ucd94\uac00\ud558\uac70\ub098, \ud55c \uceec\ub7fc\uc758 \uac12\uc744 \ub2e4\ub978 \uac12\uc73c\ub85c \ubcc0\uacbd\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[withColumn]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic051_withcolumn_workflow.png",alt:"prebasic051"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"expresstion : index, column, numeric, const \uc635\uc158\uc744 \uc120\ud0dd\ud55c\ub2e4. \uc635\uc158\ubcc4 \uc785\ub825  property \ub2e4\ub974\ub2e4.  ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"index : \ubaa9\ub85d\uc5d0\uc11c \uc9c0\uc815\ud55c \uceec\ub7fc\uac12\uc758 \uc778\ub371\uc2a4\ub97c \uc124\uc815\ud558\uc5ec \uc2e0\uaddc \uceec\ub7fc\uc5d0 \uc800\uc7a5\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"column : \uceec\ub7fc 2\uac1c\ub97c \uc120\ud0dd\ud558\uace0, \uceec\ub7fc \uac04 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\ub97c \uc2e0\uaddc \uceec\ub7fc\uc5d0 \uc800\uc7a5\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"numeric : \uceec\ub7fc 1\uac1c\uc640 \uace0\uc815 \uac12\uacfc\uc758 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\ub97c \uc2e0\uaddc \uceec\ub7fc\uc5d0 \uc800\uc7a5\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ul"},"const : \ud2b9\uc815 \uace0\uc815 \ubb38\uc790\uc5f4 \ucd94\uac00")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"expression \uc635\uc158\uc744 index\ub85c \uc124\uc815\ud558\uba74 targetColumn, newColumn\uc744 \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74\uc774 \ubcc0\uacbd\ub41c\ub2e4. targetColumn\uc5d0 \uc120\ud0dd\ud55c \uceec\ub7fc\uc758 index\uac00 newColumn\uc5d0 \uc800\uc7a5\ub41c\ub2e4. ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"targetColumn : \ubaa9\ub85d \uc911 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825")))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic052_withcolumn_indexproperty.png",alt:"prebasic052"}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"expression \uc635\uc158\uc744 column\uc73c\ub85c \uc124\uc815\ud558\uba74 col1, operator, col2, newColumn\uc744 \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74\uc774 \ubcc0\uacbd\ub41c\ub2e4. col1, col2 \uac04 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\uac00 newColumn\uc5d0 \uc800\uc7a5\ub41c\ub2e4. ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"col1 : \ubaa9\ub85d \uc911 \uccab \ubc88\uc9f8 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"operator : \uc0ac\uce59\uc5f0\uc0b0 (+, -, *, /) \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"col2 : \ubaa9\ub85d \uc911 \ub450 \ubc88\uc9f8 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825")))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic053_withcolumn_columnproperty.png",alt:"prebasic053"}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"expression \uc635\uc158\uc744 numeric\uc73c\ub85c \uc124\uc815\ud558\uba74 col1, operator, col2, newColumn\uc744 \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74\uc774 \ubcc0\uacbd\ub41c\ub2e4. col1, value\uc5d0 \uc785\ub825\ud558\ub294 \uace0\uc815\uac12 \uac04 \uc0ac\uce59\uc5f0\uc0b0 \uacb0\uacfc\uac00 newColumn\uc5d0 \uc800\uc7a5\ub41c\ub2e4. "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"col1 : \ubaa9\ub85d \uc911 \uccab \ubc88\uc9f8 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"operator : \uc0ac\uce59\uc5f0\uc0b0 (+, -, *, /) \uc120\ud0dd"),Object(a.b)("li",{parentName:"ul"},"value : \uc0ac\uce59\uc5f0\uc0b0\uc744 \uc704\ud55c \uace0\uc815 \uac12"),Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85 \uc785\ub825"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"expression \uc635\uc158\uc744 const\uc73c\ub85c \uc124\uc815\ud558\uba74 newColumn, constantValue, valueType\uc744 \uc785\ub825\ud558\ub3c4\ub85d \ud654\uba74\uc774 \ubcc0\uacbd\ub41c\ub2e4. constantValue\uc5d0 \uc785\ub825\ud558\ub294 \uace0\uc815 \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790\uac00 newColumn\uc5d0 \uc800\uc7a5\ub41c\ub2e4. "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85"),Object(a.b)("li",{parentName:"ul"},"constantValue : \uace0\uc815 \ubb38\uc790\uc5f4, \uc22b\uc790"),Object(a.b)("li",{parentName:"ul"},"valueType : \uceec\ub7fc \ub370\uc774\ud130 \ud0c0\uc785 (String, Number)")))))}p.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return w}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,w=b["".concat(o,".").concat(s)]||b[s]||m[s]||l;return n?a.a.createElement(w,c({ref:t},p,{components:n})):a.a.createElement(w,c({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);