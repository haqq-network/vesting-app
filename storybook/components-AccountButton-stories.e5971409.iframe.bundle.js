/*! For license information please see components-AccountButton-stories.e5971409.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haqq_vesting_app=self.webpackChunk_haqq_vesting_app||[]).push([[82],{"./src/components/AccountButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Connected:function(){return Connected},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _AccountButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/AccountButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"ui-kit-web3/AccountButton",component:_AccountButton__WEBPACK_IMPORTED_MODULE_1__.s,parameters:{layout:"centered"}};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AccountButton__WEBPACK_IMPORTED_MODULE_1__.s,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={};var Connected=Template.bind({});Connected.args={account:{address:"0xD090340493b9A23D2E695d2745BA7D7a4e8f836b",balance:"987.00"},symbol:"islm"},Default.parameters=Object.assign({storySource:{source:"(\n  args: AccountButtonProps,\n) => <AccountButton {...args} />"}},Default.parameters),Connected.parameters=Object.assign({storySource:{source:"(\n  args: AccountButtonProps,\n) => <AccountButton {...args} />"}},Connected.parameters);var __namedExportsOrder=["Default","Connected"]},"./src/components/AccountButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return AccountButton}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button.tsx"),_IdentIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/IdentIcon.tsx"),_headlessui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@headlessui/react/dist/components/menu/menu.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AddressButton(_ref){var children=_ref.children,onClick=_ref.onClick,className=_ref.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("h-[36px] px-[8px] py-[6px] appearance-none outline-none","rounded-[6px] font-sans","flex flex-row space-x-[8px] justify-center items-center","bg-white hover:bg-white/90","transition-colors duration-150 ease-linear",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:classNames,onClick:onClick,children:children})}function BalanceButton(_ref2){var children=_ref2.children,onClick=_ref2.onClick,className=_ref2.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("font-serif text-base leading-[24px]","px-[20px] py-[8px] rounded-none","text-white bg-primary hover:bg-[#20d775]","transition-colors duration-150 ease-linear","rounded-l-[8px]",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:classNames,onClick:onClick,children:children})}function AccountButton(_ref3){var address,lower,account=_ref3.account,onConnectClick=_ref3.onConnectClick,onDisconnectClick=_ref3.onDisconnectClick,onBalanceClick=_ref3.onBalanceClick;return account?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex flex-row",children:[account.balance&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BalanceButton,{onClick:onBalanceClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"mb-[-4px] font-bold",children:[Number.parseFloat(account.balance.formatted).toLocaleString()," ",account.balance.symbol.toLocaleUpperCase()]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.v,{as:"div",className:"relative inline-block text-left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.v.Button,{as:"div",className:"rounded-r-[8px] bg-primary p-[2px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(AddressButton,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"text-[14px] font-medium flex-1",children:(address=account.address,lower=address.toLocaleLowerCase(),lower.slice(0,6)+"..."+lower.slice(-4))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_IdentIcon__WEBPACK_IMPORTED_MODULE_2__.v,{address:account.address,size:16,className:"flex-none"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.u,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.v.Items,{className:"absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white focus:outline-none shadow p-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.v.Item,{as:"button",className:"py-[6px] px-[12px] leading-[24px] hover:bg-light-green transition-colors duration-150 ease-in-out block w-full rounded-sm text-left",onClick:onDisconnectClick,children:"Disconnect"})})})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:onConnectClick,children:"Connect Wallet"})}AddressButton.displayName="AddressButton",BalanceButton.displayName="BalanceButton",AccountButton.displayName="AccountButton";try{AccountButton.displayName="AccountButton",AccountButton.__docgenInfo={description:"",displayName:"AccountButton",props:{account:{defaultValue:null,description:"",name:"account",required:!1,type:{name:"{ address: string; balance?: { decimals: number; formatted: string; symbol: string; value: BigNumber; }; }"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},onConnectClick:{defaultValue:null,description:"",name:"onConnectClick",required:!1,type:{name:"(() => void)"}},onDisconnectClick:{defaultValue:null,description:"",name:"onDisconnectClick",required:!1,type:{name:"(() => void)"}},onAddressClick:{defaultValue:null,description:"",name:"onAddressClick",required:!1,type:{name:"(() => void)"}},onBalanceClick:{defaultValue:null,description:"",name:"onBalanceClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AccountButton.tsx#AccountButton"]={docgenInfo:AccountButton.__docgenInfo,name:"AccountButton",path:"src/components/AccountButton.tsx#AccountButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return DangerButton},z:function(){return Button}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var children=_ref.children,onClick=_ref.onClick,_ref$outline=_ref.outline,outline=void 0!==_ref$outline&&_ref$outline,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,className=_ref.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-primary border-[2px] box-border border-solid border-primary hover:text-[#20d775] hover:border-[#20d775]":"bg-primary text-white hover:bg-[#20d775]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[22px] appearance-none","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}function DangerButton(_ref2){var children=_ref2.children,onClick=_ref2.onClick,_ref2$outline=_ref2.outline,outline=void 0!==_ref2$outline&&_ref2$outline,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,_ref2$fill=_ref2.fill,fill=void 0!==_ref2$fill&&_ref2$fill,_ref2$type=_ref2.type,type=void 0===_ref2$type?"button":_ref2$type,className=_ref2.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-danger border-[2px] box-border border-solid border-danger hover:text-[#ff0000] hover:border-[#ff0000]":"bg-danger text-white hover:bg-[#ff0000]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[22px] appearance-none","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}Button.displayName="Button",DangerButton.displayName="DangerButton";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{DangerButton.displayName="DangerButton",DangerButton.__docgenInfo={description:"",displayName:"DangerButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#DangerButton"]={docgenInfo:DangerButton.__docgenInfo,name:"DangerButton",path:"src/components/Button.tsx#DangerButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IdentIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return IdentIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/jazzicon/index.js"),_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function IdentIcon(_ref){var address=_ref.address,_ref$size=_ref.size,size=void 0===_ref$size?16:_ref$size,className=_ref.className,iconElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){iconElementRef.current&&(iconElementRef.current.innerHTML="",iconElementRef.current.appendChild(_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1___default()(size,parseInt(address.slice(2,10),16))))}),[address,size]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:iconElementRef,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline-block leading-[0px] rounded-full overflow-hidden",className)})}IdentIcon.displayName="IdentIcon";try{IdentIcon.displayName="IdentIcon",IdentIcon.__docgenInfo={description:"",displayName:"IdentIcon",props:{address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IdentIcon.tsx#IdentIcon"]={docgenInfo:IdentIcon.__docgenInfo,name:"IdentIcon",path:"src/components/IdentIcon.tsx#IdentIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);