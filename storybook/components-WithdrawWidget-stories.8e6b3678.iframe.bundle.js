/*! For license information please see components-WithdrawWidget-stories.8e6b3678.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haqq_vesting_app=self.webpackChunk_haqq_vesting_app||[]).push([[72],{"./src/components/WithdrawWidget.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithdrawWidget:function(){return WithdrawWidget_stories_WithdrawWidget},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return WithdrawWidget_stories}});var react=__webpack_require__("./node_modules/react/index.js"),Card=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./src/components/Card.tsx")),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Typography=__webpack_require__("./src/components/Typography.tsx"),Button=__webpack_require__("./src/components/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Loader(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsxs)("rect",{x:"1",y:"6",width:"2.8",height:"12",children:[(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.4s",attributeName:"y",calcMode:"spline",dur:"0.6s",values:"6;1;6",keySplines:".14,.73,.34,1;.65,.26,.82,.45"}),(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.4s",attributeName:"height",calcMode:"spline",dur:"0.6s",values:"12;22;12",keySplines:".14,.73,.34,1;.65,.26,.82,.45"})]}),(0,jsx_runtime.jsxs)("rect",{x:"5.8",y:"6",width:"2.8",height:"12",children:[(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.2s",attributeName:"y",calcMode:"spline",dur:"0.6s",values:"6;1;6",keySplines:".14,.73,.34,1;.65,.26,.82,.45"}),(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.2s",attributeName:"height",calcMode:"spline",dur:"0.6s",values:"12;22;12",keySplines:".14,.73,.34,1;.65,.26,.82,.45"})]}),(0,jsx_runtime.jsxs)("rect",{x:"10.6",y:"6",width:"2.8",height:"12",children:[(0,jsx_runtime.jsx)("animate",{id:"a",begin:"0;b.end-0.1s",attributeName:"y",calcMode:"spline",dur:"0.6s",values:"6;1;6",keySplines:".14,.73,.34,1;.65,.26,.82,.45"}),(0,jsx_runtime.jsx)("animate",{begin:"0;b.end-0.1s",attributeName:"height",calcMode:"spline",dur:"0.6s",values:"12;22;12",keySplines:".14,.73,.34,1;.65,.26,.82,.45"})]}),(0,jsx_runtime.jsxs)("rect",{x:"15.4",y:"6",width:"2.8",height:"12",children:[(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.2s",attributeName:"y",calcMode:"spline",dur:"0.6s",values:"6;1;6",keySplines:".14,.73,.34,1;.65,.26,.82,.45"}),(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.2s",attributeName:"height",calcMode:"spline",dur:"0.6s",values:"12;22;12",keySplines:".14,.73,.34,1;.65,.26,.82,.45"})]}),(0,jsx_runtime.jsxs)("rect",{x:"20.2",y:"6",width:"2.8",height:"12",children:[(0,jsx_runtime.jsx)("animate",{id:"b",begin:"a.begin+0.4s",attributeName:"y",calcMode:"spline",dur:"0.6s",values:"6;1;6",keySplines:".14,.73,.34,1;.65,.26,.82,.45"}),(0,jsx_runtime.jsx)("animate",{begin:"a.begin+0.4s",attributeName:"height",calcMode:"spline",dur:"0.6s",values:"12;22;12",keySplines:".14,.73,.34,1;.65,.26,.82,.45"})]})]})})}function WithdrawMarkup(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?"Request Withdrawal":_ref$children,className=_ref.className,_ref$isTransferPendin=_ref.isTransferPending,isTransferPending=void 0!==_ref$isTransferPendin&&_ref$isTransferPendin,_ref$isWithdrawSucces=_ref.isWithdrawSuccess,isWithdrawSuccess=void 0!==_ref$isWithdrawSucces&&_ref$isWithdrawSucces,_ref$isError=_ref.isError,isError=void 0!==_ref$isError&&_ref$isError,fill=_ref.fill,onClick=_ref.onClick,headingText=_ref.headingText,mainText=_ref.mainText,disabled=_ref.disabled,classNames=(0,clsx_m.Z)({"text-light-gray":isTransferPending,"text-primary":isWithdrawSuccess,"text-danger":isError},className);return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.X,{level:3,className:"uppercase "+classNames,children:headingText}),(0,jsx_runtime.jsx)("div",{className:classNames,children:mainText}),(0,jsx_runtime.jsxs)("div",{className:"flex-1",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Typography.x,{bold:!0,className:classNames,children:"Available to withdraw"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Typography.x,{bold:!0,className:classNames,children:Math.random().toLocaleString()})})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Button.z,{fill:fill,onClick:onClick,disabled:disabled,children:isTransferPending?(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(Loader,{})}):(0,jsx_runtime.jsx)(react.Fragment,{children:children})})})]})}WithdrawMarkup.displayName="WithdrawMarkup";try{WithdrawMarkup.displayName="WithdrawMarkup",WithdrawMarkup.__docgenInfo={description:"",displayName:"WithdrawMarkup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isTransferPending:{defaultValue:{value:"false"},description:"",name:"isTransferPending",required:!1,type:{name:"boolean"}},isWithdrawSuccess:{defaultValue:{value:"false"},description:"",name:"isWithdrawSuccess",required:!1,type:{name:"boolean"}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}},headingText:{defaultValue:null,description:"",name:"headingText",required:!1,type:{name:"string"}},mainText:{defaultValue:null,description:"",name:"mainText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WithdrawMarkup.tsx#WithdrawMarkup"]={docgenInfo:WithdrawMarkup.__docgenInfo,name:"WithdrawMarkup",path:"src/components/WithdrawMarkup.tsx#WithdrawMarkup"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function WithdrawWidget(){var _useState2=_slicedToArray((0,react.useState)(!1),2),isWithdrawSuccess=_useState2[0],setWithdrawSuccess=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),isTransferPending=_useState4[0],setTransferPending=_useState4[1],_useState6=_slicedToArray((0,react.useState)(!1),2),isError=_useState6[0],setError=_useState6[1],handleSuccessState=(0,react.useCallback)((function(){setTransferPending(!0),setTimeout((function(){setTransferPending(!1)}),5e3),setWithdrawSuccess(!0)}),[]),handleErrorState=(0,react.useCallback)((function(){setTransferPending(!0),setTimeout((function(){setTransferPending(!1)}),5e3),setWithdrawSuccess(!1),setError(!0)}),[]);return(0,jsx_runtime.jsx)(Card.Z,{className:"overflow-hidden max-w-lg mx-auto w-full",children:(0,jsx_runtime.jsx)("div",{className:"p-6 flex flex-col space-y-4",children:isTransferPending?(0,jsx_runtime.jsx)(WithdrawMarkup,{mainText:"Please wait while your request is being processed...",headingText:"2nd state pending",isTransferPending:!0,onClick:handleErrorState,fill:!0,disabled:!0}):isWithdrawSuccess?(0,jsx_runtime.jsx)(WithdrawMarkup,{mainText:"Funds received successfully!",headingText:"3rd state success",isWithdrawSuccess:!0,onClick:handleErrorState,fill:!0}):isError?(0,jsx_runtime.jsx)(WithdrawMarkup,{mainText:"Something went wrong...",headingText:"4th state error",isError:!0,onClick:handleSuccessState,fill:!0}):(0,jsx_runtime.jsx)(WithdrawMarkup,{mainText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci commodi",headingText:"1st state default",onClick:handleSuccessState,fill:!0})})})}WithdrawWidget.displayName="WithdrawWidget";var WithdrawWidget_stories={title:"ui-kit/Widgets",component:WithdrawWidget},Template=function(args){return(0,jsx_runtime.jsx)(WithdrawWidget,Object.assign({},args))};Template.displayName="Template";var WithdrawWidget_stories_WithdrawWidget=Template.bind({});WithdrawWidget_stories_WithdrawWidget.args={},WithdrawWidget_stories_WithdrawWidget.parameters=Object.assign({storySource:{source:"(\n  args: any,\n) => {\n  return <WithdrawWidgetComponent {...args} />;\n}"}},WithdrawWidget_stories_WithdrawWidget.parameters);var __namedExportsOrder=["WithdrawWidget"]},"./src/components/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return DangerButton},z:function(){return Button}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var children=_ref.children,onClick=_ref.onClick,_ref$outline=_ref.outline,outline=void 0!==_ref$outline&&_ref$outline,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,className=_ref.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-primary border-[2px] border-solid border-primary hover:text-[#20d775] hover:border-[#20d775]":"bg-primary text-white hover:bg-[#20d775]","bg-primary text-white hover:bg-[#20d775]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[16px] appearance-none box-border","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}function DangerButton(_ref2){var children=_ref2.children,onClick=_ref2.onClick,_ref2$outline=_ref2.outline,outline=void 0!==_ref2$outline&&_ref2$outline,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,_ref2$fill=_ref2.fill,fill=void 0!==_ref2$fill&&_ref2$fill,_ref2$type=_ref2.type,type=void 0===_ref2$type?"button":_ref2$type,className=_ref2.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-danger border-[2px] border-solid border-danger hover:text-[#ff0000] hover:border-[#ff0000]":"bg-danger text-white hover:bg-[#ff0000]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[16px] appearance-none box-border","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}Button.displayName="Button",DangerButton.displayName="DangerButton";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{DangerButton.displayName="DangerButton",DangerButton.__docgenInfo={description:"",displayName:"DangerButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#DangerButton"]={docgenInfo:DangerButton.__docgenInfo,name:"DangerButton",path:"src/components/Button.tsx#DangerButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Card}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),CardStyled=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"eqzkq1l0"})("");function Card(_ref){var children=_ref.children,className=_ref.className,_ref$withShadow=_ref.withShadow,withShadow=void 0!==_ref$withShadow&&_ref$withShadow,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("bg-white rounded-[12px] shadow-sm",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardStyled,{className:classNames,withShadow:withShadow,children:children})}Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},withShadow:{defaultValue:{value:"false"},description:"",name:"withShadow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Heading},x:function(){return Text}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Heading(_ref){var children=_ref.children,_ref$level=_ref.level,level=void 0===_ref$level?2:_ref$level,className=_ref.className,color=_ref.color,headingClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("font-serif font-bold tracking-normal leading-[1em]",{"text-black":"default"===color,"text-dark-gray":"light"===color,"text-white":"white"===color,"text-primary":"primary"===color},{"text-[80px]":1===level,"text-[38px]":2===level,"text-[24px]":3===level,"text-[20px]":4===level},className);switch(level){case 1:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{className:headingClassName,children:children});case 3:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{className:headingClassName,children:children});case 4:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:headingClassName,children:children});default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{className:headingClassName,children:children})}}function Text(_ref2){var children=_ref2.children,className=_ref2.className,_ref2$italic=_ref2.italic,italic=void 0!==_ref2$italic&&_ref2$italic,_ref2$underline=_ref2.underline,underline=void 0!==_ref2$underline&&_ref2$underline,_ref2$running=_ref2.running,running=void 0!==_ref2$running&&_ref2$running,_ref2$bold=_ref2.bold,bold=void 0!==_ref2$bold&&_ref2$bold,_ref2$block=_ref2.block,block=void 0!==_ref2$block&&_ref2$block,_ref2$color=_ref2.color,color=void 0===_ref2$color?"default":_ref2$color,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-base",{"text-black":"default"===color,"text-dark-gray":"light"===color,"text-white":"white"===color,"text-primary":"primary"===color},{"leading-relaxed":running,"leading-tight":!running},{underline:underline,"font-bold":bold,italic:italic},block?"block":"inline-block",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classNames,children:children})}Text.displayName="Text";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"2"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"light"'},{value:'"white"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Typography.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"light"'},{value:'"white"'}]}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},bold:{defaultValue:{value:"false"},description:"",name:"bold",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}},running:{defaultValue:{value:"false"},description:"",name:"running",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Typography.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);