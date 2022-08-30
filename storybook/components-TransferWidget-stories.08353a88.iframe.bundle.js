/*! For license information please see components-TransferWidget-stories.08353a88.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_haqq_vesting_app=self.webpackChunk_haqq_vesting_app||[]).push([[513],{"./src/components/TransferWidget.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TransferWidget:function(){return TransferWidget_stories_TransferWidget},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TransferWidget_stories}});var react=__webpack_require__("./node_modules/react/index.js"),Button=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./src/components/Button.tsx")),Card=__webpack_require__("./src/components/Card.tsx"),Typography=__webpack_require__("./src/components/Typography.tsx"),Alert=__webpack_require__("./src/components/modals/Alert.tsx"),Confirm=__webpack_require__("./src/components/modals/Confirm.tsx"),Input=__webpack_require__("./src/components/Input.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TransferOwnershipConfirmation(_ref){var currentOwnerAddress=_ref.currentOwnerAddress,newOwnerAddress=_ref.newOwnerAddress;return(0,jsx_runtime.jsx)("div",{className:"flex flex-col break-normal",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Typography.x,{children:"Are you sure you want to transfer deposit ownership from address "}),(0,jsx_runtime.jsxs)(Typography.x,{bold:!0,children:["'",currentOwnerAddress,"'"]})," to ",(0,jsx_runtime.jsxs)(Typography.x,{bold:!0,children:["'",newOwnerAddress,"'"]})," ?",(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Typography.x,{bold:!0,children:"THIS OPERATION IS IRREVERSIBLE"})})]})})}TransferOwnershipConfirmation.displayName="TransferOwnershipConfirmation";try{TransferOwnershipConfirmation.displayName="TransferOwnershipConfirmation",TransferOwnershipConfirmation.__docgenInfo={description:"",displayName:"TransferOwnershipConfirmation",props:{currentOwnerAddress:{defaultValue:null,description:"",name:"currentOwnerAddress",required:!0,type:{name:"string"}},newOwnerAddress:{defaultValue:null,description:"",name:"newOwnerAddress",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/TransferOwnershipConfirmation.tsx#TransferOwnershipConfirmation"]={docgenInfo:TransferOwnershipConfirmation.__docgenInfo,name:"TransferOwnershipConfirmation",path:"src/components/modals/TransferOwnershipConfirmation.tsx#TransferOwnershipConfirmation"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TransferWidget(){var _useState2=_slicedToArray((0,react.useState)(!1),2),isWarningModalOpen=_useState2[0],setWarningModalOpen=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),isConfirmModalOpen=_useState4[0],setConfirmModalOpen=_useState4[1],_useState6=_slicedToArray((0,react.useState)(!1),2),isWarned=_useState6[0],setWarned=_useState6[1],_useState8=_slicedToArray((0,react.useState)(!1),2),isTranferPending=_useState8[0],setTranferPending=_useState8[1],handleResetState=(0,react.useCallback)((function(){setWarningModalOpen(!1),setConfirmModalOpen(!1),setWarned(!1)}),[]),handleDepositTransfer=(0,react.useCallback)((function(){setConfirmModalOpen(!1),setTranferPending(!0)}),[]),handleWarning=(0,react.useCallback)((function(){setWarningModalOpen(!1),setWarned(!0)}),[]);return(0,jsx_runtime.jsx)(Card.Z,{className:"overflow-hidden max-w-lg mx-auto w-full",children:(0,jsx_runtime.jsxs)("div",{className:"p-6 flex flex-col space-y-4",children:[isWarned?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.X,{level:3,className:"uppercase",children:"New deposit owner"}),(0,jsx_runtime.jsx)("div",{children:"Please insert new deposit owner ETH wallet"}),(0,jsx_runtime.jsx)(Input.I,{required:!0,type:"text",label:"address required",placeholder:"Insert your metamask wallet address...",state:"normal",disabled:isTranferPending}),(0,jsx_runtime.jsx)(Button.z,{fill:!0,onClick:function(){setConfirmModalOpen(!0)},disabled:isTranferPending,children:"Transfer ownership"})]}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.X,{level:3,className:"uppercase",children:"Transfer Start"}),(0,jsx_runtime.jsx)("div",{children:"Here you can transfer the deposit rights to another user"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Button.z,{fill:!0,onClick:function(){setWarningModalOpen(!0)},children:"Transfer ownership"})})]}),(0,jsx_runtime.jsxs)(Alert.b,{isOpen:isWarningModalOpen,title:"Message",onClose:function(){setWarningModalOpen(!1)},onClick:handleWarning,children:["You are about to transfer deposit rights to another account. Are you sure you want to do this? Once it's done wallet ",(0,jsx_runtime.jsx)(Typography.x,{bold:!0,children:"0xe40be11F5e7C6bC390bC4caf0138229a82eF6664"})," won't be able to withdraw ISLM from the deposit.",(0,jsx_runtime.jsx)(Typography.x,{bold:!0,children:"You will also transfer the rights to all already made deposits."})]}),(0,jsx_runtime.jsx)(Confirm.I,{isOpen:isConfirmModalOpen,title:"WARNING",onClose:handleResetState,buttonTitle:"Proceed",onConfirm:handleDepositTransfer,children:(0,jsx_runtime.jsx)(TransferOwnershipConfirmation,{currentOwnerAddress:"0xe40be11F5e7C6bC390bC4caf0138229a82eF6664",newOwnerAddress:"0x9a1FAb7FEd0b06045aAbEA2D1da73611F6DA2B07"})})]})})}TransferWidget.displayName="TransferWidget";var TransferWidget_stories={title:"ui-kit/Widgets",component:TransferWidget},Template=function(args){return(0,jsx_runtime.jsx)(TransferWidget,Object.assign({},args))};Template.displayName="Template";var TransferWidget_stories_TransferWidget=Template.bind({});TransferWidget_stories_TransferWidget.args={},TransferWidget_stories_TransferWidget.parameters=Object.assign({storySource:{source:"(\n  args: any,\n) => {\n  return <TransferWidgetComponent {...args} />;\n}"}},TransferWidget_stories_TransferWidget.parameters);var __namedExportsOrder=["TransferWidget"]},"./src/components/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return DangerButton},z:function(){return Button}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var children=_ref.children,onClick=_ref.onClick,_ref$outline=_ref.outline,outline=void 0!==_ref$outline&&_ref$outline,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,className=_ref.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-primary border-[2px] border-solid border-primary hover:text-[#20d775] hover:border-[#20d775]":"bg-primary text-white hover:bg-[#20d775]","bg-primary text-white hover:bg-[#20d775]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[16px] appearance-none box-border","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}function DangerButton(_ref2){var children=_ref2.children,onClick=_ref2.onClick,_ref2$outline=_ref2.outline,outline=void 0!==_ref2$outline&&_ref2$outline,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,_ref2$fill=_ref2.fill,fill=void 0!==_ref2$fill&&_ref2$fill,_ref2$type=_ref2.type,type=void 0===_ref2$type?"button":_ref2$type,className=_ref2.className,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(outline?"bg-transparent text-danger border-[2px] border-solid border-danger hover:text-[#ff0000] hover:border-[#ff0000]":"bg-danger text-white hover:bg-[#ff0000]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[16px] appearance-none box-border","transition-colors duration-150 ease-linear",fill?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":disabled},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:type,disabled:disabled,onClick:onClick,className:classNames,children:children})}Button.displayName="Button",DangerButton.displayName="DangerButton";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{DangerButton.displayName="DangerButton",DangerButton.__docgenInfo={description:"",displayName:"DangerButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},outline:{defaultValue:{value:"false"},description:"",name:"outline",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#DangerButton"]={docgenInfo:DangerButton.__docgenInfo,name:"DangerButton",path:"src/components/Button.tsx#DangerButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Card}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),CardStyled=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"eqzkq1l0"})("");function Card(_ref){var children=_ref.children,className=_ref.className,_ref$withShadow=_ref.withShadow,withShadow=void 0!==_ref$withShadow&&_ref$withShadow,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("bg-white rounded-[12px] shadow-sm",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardStyled,{className:classNames,withShadow:withShadow,children:children})}Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},withShadow:{defaultValue:{value:"false"},description:"",name:"withShadow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Input(_ref){var label=_ref.label,id=_ref.id,placeholder=_ref.placeholder,value=_ref.value,onChange=_ref.onChange,_ref$state=_ref.state,state=void 0===_ref$state?"normal":_ref$state,hint=_ref.hint,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,required=_ref.required,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,inputId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return id||(label&&""!==label?"input-"+Math.random():void 0)}),[id,label]),classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)({"border-danger":"error"===state,"border-primary":"success"===state,"border-gray-400 focus:border-black":"normal"===state,"border-black":value&&"normal"===state},"block outline-none border border-solid ","text-black text-sm","w-full px-[16px] py-[10px] rounded-md",disabled?"cursor-not-allowed":""),handleInputChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){if(onChange){var _value=event.target.value;onChange(_value,event)}}),[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[label&&""!==label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{htmlFor:inputId,className:"cursor-pointer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Typography__WEBPACK_IMPORTED_MODULE_1__.x,{color:"light",className:"mb-1 text-sm",children:[label,required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-primary",children:" *"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{disabled:disabled,type:type,id:inputId,className:classNames,placeholder:placeholder,required:required,onChange:handleInputChange,value:value}),hint&&""!==hint&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("text-sm font-normal leading-[18px] mt-1","error"===state?"text-danger":"text-dark-gray"),children:hint})]})}Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"InputValue"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string, event?: ChangeEvent<HTMLInputElement>) => void)"}},state:{defaultValue:{value:"normal"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"success"'},{value:'"error"'}]}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Heading},x:function(){return Text}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Heading(_ref){var children=_ref.children,_ref$level=_ref.level,level=void 0===_ref$level?2:_ref$level,className=_ref.className,color=_ref.color,headingClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("font-serif font-bold tracking-normal leading-[1em]",{"text-black":"default"===color,"text-dark-gray":"light"===color,"text-white":"white"===color,"text-primary":"primary"===color},{"text-[80px]":1===level,"text-[38px]":2===level,"text-[24px]":3===level,"text-[20px]":4===level},className);switch(level){case 1:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{className:headingClassName,children:children});case 3:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{className:headingClassName,children:children});case 4:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:headingClassName,children:children});default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{className:headingClassName,children:children})}}function Text(_ref2){var children=_ref2.children,className=_ref2.className,_ref2$italic=_ref2.italic,italic=void 0!==_ref2$italic&&_ref2$italic,_ref2$underline=_ref2.underline,underline=void 0!==_ref2$underline&&_ref2$underline,_ref2$running=_ref2.running,running=void 0!==_ref2$running&&_ref2$running,_ref2$bold=_ref2.bold,bold=void 0!==_ref2$bold&&_ref2$bold,_ref2$block=_ref2.block,block=void 0!==_ref2$block&&_ref2$block,_ref2$color=_ref2.color,color=void 0===_ref2$color?"default":_ref2$color,classNames=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-base",{"text-black":"default"===color,"text-dark-gray":"light"===color,"text-white":"white"===color,"text-primary":"primary"===color},{"leading-relaxed":running,"leading-tight":!running},{underline:underline,"font-bold":bold,italic:italic},block?"block":"inline-block",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classNames,children:children})}Text.displayName="Text";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"2"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"light"'},{value:'"white"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Typography.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"light"'},{value:'"white"'}]}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},bold:{defaultValue:{value:"false"},description:"",name:"bold",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}},running:{defaultValue:{value:"false"},description:"",name:"running",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Typography.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modals/Alert.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return Alert}});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button.tsx"),_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/modals/Modal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Alert(_ref){var isOpen=_ref.isOpen,title=_ref.title,children=_ref.children,onClose=_ref.onClose,onClick=_ref.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__.u,{isOpen:isOpen,onClose:onClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"bg-white rounded-2xl p-6 max-w-max mx-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex justify-between items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_2__.X,{level:3,children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__.o,{onClick:onClose})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"text-right",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:onClick,className:"min-w-[120px]",children:"Continue"})})]})})})}Alert.displayName="Alert";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/modals/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modals/Confirm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Confirm}});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button.tsx"),_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/modals/Modal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Confirm(_ref){var isOpen=_ref.isOpen,title=_ref.title,children=_ref.children,onClose=_ref.onClose,buttonTitle=_ref.buttonTitle,onConfirm=_ref.onConfirm;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__.u,{isOpen:isOpen,onClose:onClose,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"bg-white rounded-2xl p-6 max-w-lg mx-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex justify-between items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_2__.X,{level:3,children:title}),onClose&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__.o,{onClick:onClose})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:onClose,fill:!0,className:"px-10",children:"Abort"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.O,{onClick:onConfirm,fill:!0,className:"px-10",children:buttonTitle})})]})]})})})}Confirm.displayName="Confirm";try{Confirm.displayName="Confirm",Confirm.__docgenInfo={description:"",displayName:"Confirm",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/Confirm.tsx#Confirm"]={docgenInfo:Confirm.__docgenInfo,name:"Confirm",path:"src/components/modals/Confirm.tsx#Confirm"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modals/Modal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return ModalCloseButton},u:function(){return Modal}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");var ModalOverlay=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1w1jol80"})({name:"1rbnmax",styles:"--modal-overlay-bg-color:rgba(12, 12, 12, 0.4);background-color:var(--modal-overlay-bg-color)"});function Modal(_ref){var children=_ref.children,onClose=_ref.onClose,_ref$isOpen=_ref.isOpen,isOpen=void 0!==_ref$isOpen&&_ref$isOpen;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u,{appear:!0,show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.V,{as:"div",className:"relative z-50",onClose:onClose,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ModalOverlay,{role:"none",className:"fixed inset-0 backdrop-filter backdrop-blur transform-gpu",onClick:onClose,onKeyDown:function(event){event.preventDefault(),event.stopPropagation(),"Escape"===event.nativeEvent.code&&onClose()}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"fixed inset-0 overflow-y-auto pointer-events-none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 pointer-events-none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_1__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"w-full transform transition-all pointer-events-auto",children:children})})})})]})})}function ModalCloseButton(_ref2){var onClick=_ref2.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"cursor-pointer w-[24px] h-[24px] text-dark-gray hover:text-primary",onClick:onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M6 6L18.7742 18.7742",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M6 18.7734L18.7742 5.99924",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})}Modal.displayName="Modal",ModalCloseButton.displayName="ModalCloseButton";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modals/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{ModalCloseButton.displayName="ModalCloseButton",ModalCloseButton.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modals/Modal.tsx#ModalCloseButton"]={docgenInfo:ModalCloseButton.__docgenInfo,name:"ModalCloseButton",path:"src/components/modals/Modal.tsx#ModalCloseButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_exports__.Z=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);