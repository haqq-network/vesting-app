/*! For license information please see components-Button-stories.95395242.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haqq_vesting_app=self.webpackChunk_haqq_vesting_app||[]).push([[706],{"./src/components/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:function(){return Danger},Disabled:function(){return Disabled},DisabledDanger:function(){return DisabledDanger},Outline:function(){return Outline},OutlineDanger:function(){return OutlineDanger},OutlineDisabled:function(){return OutlineDisabled},OutlineDisabledDanger:function(){return OutlineDisabledDanger},Primary:function(){return Primary},Secondary:function(){return Secondary},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_Button__WEBPACK_IMPORTED_MODULE_1__.z,title:"ui-kit/Button",parameters:{}};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,Object.assign({},args))};Template.displayName="Template";var DangerTemplate=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.O,Object.assign({},args))};DangerTemplate.displayName="DangerTemplate";var Primary=Template.bind({});Primary.args={primary:!0,children:"Primary Button"};var Secondary=Template.bind({});Secondary.args={children:"Secondary Button"};var Disabled=Template.bind({});Disabled.args={outline:!1,children:"Disabled Button",disabled:!0};var Outline=Template.bind({});Outline.args={outline:!0,children:"Outline Button"};var OutlineDisabled=Template.bind({});OutlineDisabled.args={outline:!0,children:"Outline Disabled Button",disabled:!0};var Danger=DangerTemplate.bind({});Danger.args={outline:!1,children:"Danger button",disabled:!1};var DisabledDanger=DangerTemplate.bind({});DisabledDanger.args={outline:!1,children:"Disabled Danger button",disabled:!0};var OutlineDanger=DangerTemplate.bind({});OutlineDanger.args={outline:!0,children:"Outline Danger button",disabled:!1};var OutlineDisabledDanger=DangerTemplate.bind({});OutlineDisabledDanger.args={outline:!0,children:"Outline Disabled Danger button",disabled:!0},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Disabled.parameters),Outline.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Outline.parameters),OutlineDisabled.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},OutlineDisabled.parameters),Danger.parameters=Object.assign({storySource:{source:"(args) => (\n  <DangerButton {...args} />\n)"}},Danger.parameters),DisabledDanger.parameters=Object.assign({storySource:{source:"(args) => (\n  <DangerButton {...args} />\n)"}},DisabledDanger.parameters),OutlineDanger.parameters=Object.assign({storySource:{source:"(args) => (\n  <DangerButton {...args} />\n)"}},OutlineDanger.parameters),OutlineDisabledDanger.parameters=Object.assign({storySource:{source:"(args) => (\n  <DangerButton {...args} />\n)"}},OutlineDisabledDanger.parameters);var __namedExportsOrder=["Primary","Secondary","Disabled","Outline","OutlineDisabled","Danger","DisabledDanger","OutlineDanger","OutlineDisabledDanger"]},"./src/components/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return DangerButton},z:function(){return Button}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var children=_ref.children,onClick=_ref.onClick,_ref$outline=_ref.outline,outline=void 0!==_ref$outline&&_ref$outline,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,className=_ref.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-primary border-[2px] border-solid border-primary hover:text-[#20d775] hover:border-[#20d775]":"bg-primary text-white hover:bg-[#20d775]","bg-primary text-white hover:bg-[#20d775]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[16px] appearance-none box-border","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}function DangerButton(_ref2){var children=_ref2.children,onClick=_ref2.onClick,_ref2$outline=_ref2.outline,outline=void 0!==_ref2$outline&&_ref2$outline,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,_ref2$fill=_ref2.fill,fill=void 0!==_ref2$fill&&_ref2$fill,_ref2$type=_ref2.type,type=void 0===_ref2$type?"button":_ref2$type,className=_ref2.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-danger border-[2px] border-solid border-danger hover:text-[#ff0000] hover:border-[#ff0000]":"bg-danger text-white hover:bg-[#ff0000]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[16px] appearance-none box-border","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}Button.displayName="Button",DangerButton.displayName="DangerButton";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{DangerButton.displayName="DangerButton",DangerButton.__docgenInfo={description:"",displayName:"DangerButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#DangerButton"]={docgenInfo:DangerButton.__docgenInfo,name:"DangerButton",path:"src/components/Button.tsx#DangerButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);