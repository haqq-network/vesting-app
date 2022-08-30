(self.webpackChunk_haqq_vesting_app=self.webpackChunk_haqq_vesting_app||[]).push([[646],{"./src/OnboardingContainer.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:function(){return useOnboarding}});__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/ethers/lib/utils.js"),wagmi__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/wagmi/dist/wagmi.esm.js"),_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/config.ts"),_metamask_onboarding__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/onboarding/dist/metamask-onboarding.es.js"),_components_modals_NoMetamaskAlert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/modals/NoMetamaskAlert.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var OnboardingContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);function OnboardingContainer(_ref){var children=_ref.children,chain=(0,_config__WEBPACK_IMPORTED_MODULE_2__.zK)(),targetNetworkIdHex=(0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__.hexValue)(chain.id),onboarding=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("start"),2),step=_useState2[0],setOnboardingStep=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isNoMetamaskModalOpen=_useState4[0],setNoMetamaskModalOpen=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isOnboarded=_useState6[0],setOnboarded=_useState6[1],_useAccount=(0,wagmi__WEBPACK_IMPORTED_MODULE_7__.mA)(),isConnected=_useAccount.isConnected,address=_useAccount.address,_useConnect=(0,wagmi__WEBPACK_IMPORTED_MODULE_7__.$4)(),connect=_useConnect.connect,connectors=_useConnect.connectors,_useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),2),errors=_useState8[0],setErrors=_useState8[1],handleConnectWagmi=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){connect({connector:connectors[0]})}),[connect,connectors]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){onboarding.current||(onboarding.current=new _metamask_onboarding__WEBPACK_IMPORTED_MODULE_3__.Z)}),[]);var handleConnectWallet=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((async function(){_metamask_onboarding__WEBPACK_IMPORTED_MODULE_3__.Z.isMetaMaskInstalled()?handleConnectWagmi():setNoMetamaskModalOpen(!0)}),[handleConnectWagmi]),handleStartOnboarding=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){var _onboarding$current;null===(_onboarding$current=onboarding.current)||void 0===_onboarding$current||_onboarding$current.startOnboarding(),setNoMetamaskModalOpen(!1),setOnboardingStep("switch-network")}),[]),handleNetworkSwitch=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((async function(){var ethereum=window.ethereum;if(ethereum)try{await ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:targetNetworkIdHex}]}),setOnboardingStep("finish")}catch(error){4902===error.code?setOnboardingStep("add-network"):setErrors(Object.assign({},errors,{switchNetworkError:error}))}}),[errors,targetNetworkIdHex]),handleNetworkAdd=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((async function(){var ethereum=window.ethereum;if(ethereum)try{await ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:targetNetworkIdHex,chainName:chain.name,rpcUrls:[chain.rpcUrls.default],nativeCurrency:chain.nativeCurrency}]}),setOnboardingStep("finish")}catch(error){setErrors(Object.assign({},errors,{addNetworkError:error}))}}),[chain.name,chain.nativeCurrency,chain.rpcUrls.default,errors,targetNetworkIdHex]),clearError=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(errorName){setErrors(Object.assign({},errors,{[errorName]:void 0}))}),[errors]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var _window3,_window3$ethereum,_window4,_window4$ethereum;void 0!==address&&((null!==(_window3=window)&&void 0!==_window3&&null!==(_window3$ethereum=_window3.ethereum)&&void 0!==_window3$ethereum&&_window3$ethereum.networkVersion?Number.parseInt(null===(_window4=window)||void 0===_window4||null===(_window4$ethereum=_window4.ethereum)||void 0===_window4$ethereum?void 0:_window4$ethereum.networkVersion,10):null)!==chain.id?setOnboardingStep("switch-network"):setOnboardingStep("finish"))}),[address,chain.id]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var _onboarding$current2;"finish"===step&&(null===(_onboarding$current2=onboarding.current)||void 0===_onboarding$current2||_onboarding$current2.stopOnboarding(),setOnboarded(!0))}),[step]);var memoizedHook=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{connectWallet:handleConnectWallet,startOnboarding:handleStartOnboarding,switchNetwork:handleNetworkSwitch,addNetwork:handleNetworkAdd,step:step,isOnboarded:isOnboarded,isConnected:isConnected,errors:errors,clearError:clearError}}),[handleConnectWallet,handleNetworkAdd,handleNetworkSwitch,handleStartOnboarding,isOnboarded,isConnected,step,errors,clearError]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(OnboardingContext.Provider,{value:memoizedHook,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_modals_NoMetamaskAlert__WEBPACK_IMPORTED_MODULE_4__.q,{isOpen:isNoMetamaskModalOpen,onStartOnboarding:handleStartOnboarding,onClose:function(){return setNoMetamaskModalOpen(!1)}})]})}function useOnboarding(){var onboarding=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OnboardingContext);if(!onboarding)throw new Error("useOnboarding should be used only from child of OnboardingContext");return onboarding}OnboardingContainer.displayName="OnboardingContainer";try{OnboardingContainer.displayName="OnboardingContainer",OnboardingContainer.__docgenInfo={description:"",displayName:"OnboardingContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/OnboardingContainer.tsx#OnboardingContainer"]={docgenInfo:OnboardingContainer.__docgenInfo,name:"OnboardingContainer",path:"src/OnboardingContainer.tsx#OnboardingContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/AccountButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{s:function(){return AccountButton}});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Button=__webpack_require__("./src/components/Button.tsx"),IdentIcon=__webpack_require__("./src/components/IdentIcon.tsx"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js");var e,calculate_active_index_a=((e=calculate_active_index_a||{})[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e);function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=null!=l?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex((e=>!n.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((i,c,u)=>!(-1!==s&&u.length-c-1>=s)&&!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,i)=>!(i<=s)&&!n.resolveDisabled(e)));case 3:{let e=t.slice().reverse().findIndex((i=>!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((e=>n.resolveId(e)===r.id));case 5:return null;default:!function f(r){throw new Error("Unexpected object: "+r)}(r)}})();return-1===d?l:d}var bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");var open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function use_resolve_button_type_s(t,e){let[n,u]=(0,react.useState)((()=>i(t)));return(0,use_iso_morphic_effect.e)((()=>{u(i(t))}),[t.type,t.as]),(0,use_iso_morphic_effect.e)((()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}var a,o,use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),oe=((o=oe||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),ae=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(ae||{}),ie=((a=ie||{})[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a);function k(t,i=(o=>o)){let o=null!==t.activeItemIndex?t.items[t.activeItemIndex]:null,e=(0,focus_management.z2)(i(t.items.slice()),(u=>u.dataRef.current.domRef.current)),n=o?e.indexOf(o):null;return-1===n&&(n=null),{items:e,activeItemIndex:n}}let ue={1:t=>1===t.menuState?t:{...t,activeItemIndex:null,menuState:1},0:t=>0===t.menuState?t:{...t,menuState:0},2:(t,i)=>{var n;let o=k(t),e=x(i,{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...o,searchQuery:"",activeItemIndex:e,activationTrigger:null!=(n=i.trigger)?n:1}},3:(t,i)=>{let e=""!==t.searchQuery?0:1,n=t.searchQuery+i.value.toLowerCase(),s=(null!==t.activeItemIndex?t.items.slice(t.activeItemIndex+e).concat(t.items.slice(0,t.activeItemIndex+e)):t.items).find((c=>{var p;return(null==(p=c.dataRef.current.textValue)?void 0:p.startsWith(n))&&!c.dataRef.current.disabled})),a=s?t.items.indexOf(s):-1;return-1===a||a===t.activeItemIndex?{...t,searchQuery:n}:{...t,searchQuery:n,activeItemIndex:a,activationTrigger:1}},4:t=>""===t.searchQuery?t:{...t,searchQuery:"",searchActiveItemIndex:null},5:(t,i)=>{let o=k(t,(e=>[...e,{id:i.id,dataRef:i.dataRef}]));return{...t,...o}},6:(t,i)=>{let o=k(t,(e=>{let n=e.findIndex((u=>u.id===i.id));return-1!==n&&e.splice(n,1),e}));return{...t,...o,activationTrigger:1}}},w=(0,react.createContext)(null);function C(t){let i=(0,react.useContext)(w);if(null===i){let o=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,C),o}return i}function se(t,i){return(0,match.E)(i.type,ue,t,i)}w.displayName="MenuContext";let le=react.Fragment,ce=(0,render.yV)((function(i,o){let e=(0,react.useReducer)(se,{menuState:1,buttonRef:(0,react.createRef)(),itemsRef:(0,react.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:u,buttonRef:s},a]=e,c=(0,use_sync_refs.T)(o);(0,use_outside_click.O)([s,u],((M,R)=>{var T;a({type:1}),(0,focus_management.sP)(R,focus_management.tJ.Loose)||(M.preventDefault(),null==(T=s.current)||T.focus())}),0===n);let p=(0,react.useMemo)((()=>({open:0===n})),[n]),g=i,f={ref:c};return react.createElement(w.Provider,{value:e},react.createElement(open_closed.up,{value:(0,match.E)(n,{0:open_closed.ZM.Open,1:open_closed.ZM.Closed})},(0,render.sY)({ourProps:f,theirProps:g,slot:p,defaultTag:le,name:"Menu"})))})),de=(0,render.yV)((function(i,o){var T;let[e,n]=C("Menu.Button"),u=(0,use_sync_refs.T)(e.buttonRef,o),s=`headlessui-menu-button-${(0,use_id.M)()}`,a=(0,use_disposables.G)(),c=(0,use_event.z)((l=>{switch(l.key){case keyboard.R.Space:case keyboard.R.Enter:case keyboard.R.ArrowDown:l.preventDefault(),l.stopPropagation(),n({type:0}),a.nextFrame((()=>n({type:2,focus:calculate_active_index_a.First})));break;case keyboard.R.ArrowUp:l.preventDefault(),l.stopPropagation(),n({type:0}),a.nextFrame((()=>n({type:2,focus:calculate_active_index_a.Last})))}})),p=(0,use_event.z)((l=>{if(l.key===keyboard.R.Space)l.preventDefault()})),g=(0,use_event.z)((l=>{if((0,bugs.P)(l.currentTarget))return l.preventDefault();i.disabled||(0===e.menuState?(n({type:1}),a.nextFrame((()=>{var b;return null==(b=e.buttonRef.current)?void 0:b.focus({preventScroll:!0})}))):(l.preventDefault(),n({type:0})))})),f=(0,react.useMemo)((()=>({open:0===e.menuState})),[e]),M=i,R={ref:u,id:s,type:use_resolve_button_type_s(i,e.buttonRef),"aria-haspopup":!0,"aria-controls":null==(T=e.itemsRef.current)?void 0:T.id,"aria-expanded":i.disabled?void 0:0===e.menuState,onKeyDown:c,onKeyUp:p,onClick:g};return(0,render.sY)({ourProps:R,theirProps:M,slot:f,defaultTag:"button",name:"Menu.Button"})})),fe=render.AN.RenderStrategy|render.AN.Static,Te=(0,render.yV)((function(i,o){var b,O;let[e,n]=C("Menu.Items"),u=(0,use_sync_refs.T)(e.itemsRef,o),s=(0,use_owner.i)(e.itemsRef),a=`headlessui-menu-items-${(0,use_id.M)()}`,c=(0,use_disposables.G)(),p=(0,open_closed.oJ)(),g=null!==p?p===open_closed.ZM.Open:0===e.menuState;(0,react.useEffect)((()=>{let r=e.itemsRef.current;!r||0===e.menuState&&r!==(null==s?void 0:s.activeElement)&&r.focus({preventScroll:!0})}),[e.menuState,e.itemsRef,s]),function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react.useRef)(t),l=(0,react.useRef)(r);(0,react.useEffect)((()=>{o.current=t,l.current=r}),[t,r]),(0,use_iso_morphic_effect.e)((()=>{if(!e||!c)return;let n=(0,owner.r)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign((i=>f(i)),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)}),[e,c,o,l])}({container:e.itemsRef.current,enabled:0===e.menuState,accept:r=>"menuitem"===r.getAttribute("role")?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(r){r.setAttribute("role","none")}});let f=(0,use_event.z)((r=>{var m,v;switch(c.dispose(),r.key){case keyboard.R.Space:if(""!==e.searchQuery)return r.preventDefault(),r.stopPropagation(),n({type:3,value:r.key});case keyboard.R.Enter:if(r.preventDefault(),r.stopPropagation(),n({type:1}),null!==e.activeItemIndex){let{dataRef:A}=e.items[e.activeItemIndex];null==(v=null==(m=A.current)?void 0:m.domRef.current)||v.click()}(0,disposables.k)().nextFrame((()=>{var A;return null==(A=e.buttonRef.current)?void 0:A.focus({preventScroll:!0})}));break;case keyboard.R.ArrowDown:return r.preventDefault(),r.stopPropagation(),n({type:2,focus:calculate_active_index_a.Next});case keyboard.R.ArrowUp:return r.preventDefault(),r.stopPropagation(),n({type:2,focus:calculate_active_index_a.Previous});case keyboard.R.Home:case keyboard.R.PageUp:return r.preventDefault(),r.stopPropagation(),n({type:2,focus:calculate_active_index_a.First});case keyboard.R.End:case keyboard.R.PageDown:return r.preventDefault(),r.stopPropagation(),n({type:2,focus:calculate_active_index_a.Last});case keyboard.R.Escape:r.preventDefault(),r.stopPropagation(),n({type:1}),(0,disposables.k)().nextFrame((()=>{var A;return null==(A=e.buttonRef.current)?void 0:A.focus({preventScroll:!0})}));break;case keyboard.R.Tab:r.preventDefault(),r.stopPropagation();break;default:1===r.key.length&&(n({type:3,value:r.key}),c.setTimeout((()=>n({type:4})),350))}})),M=(0,use_event.z)((r=>{if(r.key===keyboard.R.Space)r.preventDefault()})),R=(0,react.useMemo)((()=>({open:0===e.menuState})),[e]),T=i,l={"aria-activedescendant":null===e.activeItemIndex||null==(b=e.items[e.activeItemIndex])?void 0:b.id,"aria-labelledby":null==(O=e.buttonRef.current)?void 0:O.id,id:a,onKeyDown:f,onKeyUp:M,role:"menu",tabIndex:0,ref:u};return(0,render.sY)({ourProps:l,theirProps:T,slot:R,defaultTag:"div",features:fe,visible:g,name:"Menu.Items"})})),Ie=react.Fragment,ye=(0,render.yV)((function(i,o){let{disabled:e=!1,...n}=i,[u,s]=C("Menu.Item"),a=`headlessui-menu-item-${(0,use_id.M)()}`,c=null!==u.activeItemIndex&&u.items[u.activeItemIndex].id===a,p=(0,react.useRef)(null),g=(0,use_sync_refs.T)(o,p);(0,use_iso_morphic_effect.e)((()=>{if(0!==u.menuState||!c||0===u.activationTrigger)return;let r=(0,disposables.k)();return r.requestAnimationFrame((()=>{var m,v;null==(v=null==(m=p.current)?void 0:m.scrollIntoView)||v.call(m,{block:"nearest"})})),r.dispose}),[p,c,u.menuState,u.activationTrigger,u.activeItemIndex]);let f=(0,react.useRef)({disabled:e,domRef:p});(0,use_iso_morphic_effect.e)((()=>{f.current.disabled=e}),[f,e]),(0,use_iso_morphic_effect.e)((()=>{var r,m;f.current.textValue=null==(m=null==(r=p.current)?void 0:r.textContent)?void 0:m.toLowerCase()}),[f,p]),(0,use_iso_morphic_effect.e)((()=>(s({type:5,id:a,dataRef:f}),()=>s({type:6,id:a}))),[f,a]);let M=(0,use_event.z)((r=>{if(e)return r.preventDefault();s({type:1}),(0,disposables.k)().nextFrame((()=>{var m;return null==(m=u.buttonRef.current)?void 0:m.focus({preventScroll:!0})}))})),R=(0,use_event.z)((()=>{if(e)return s({type:2,focus:calculate_active_index_a.Nothing});s({type:2,focus:calculate_active_index_a.Specific,id:a})})),T=(0,use_event.z)((()=>{e||c||s({type:2,focus:calculate_active_index_a.Specific,id:a,trigger:0})})),l=(0,use_event.z)((()=>{e||!c||s({type:2,focus:calculate_active_index_a.Nothing})})),b=(0,react.useMemo)((()=>({active:c,disabled:e})),[c,e]);return(0,render.sY)({ourProps:{id:a,ref:g,role:"menuitem",tabIndex:!0===e?void 0:-1,"aria-disabled":!0===e||void 0,disabled:void 0,onClick:M,onFocus:R,onPointerMove:T,onMouseMove:T,onPointerLeave:l,onMouseLeave:l},theirProps:n,slot:b,defaultTag:Ie,name:"Menu.Item"})})),We=Object.assign(ce,{Button:de,Items:Te,Item:ye});var transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),getFormattedAddress=__webpack_require__("./src/utils/getFormattedAddress.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AddressButton(_ref){var children=_ref.children,onClick=_ref.onClick,className=_ref.className,classNames=(0,clsx_m.Z)("h-[36px] px-[8px] py-[6px] appearance-none outline-none","rounded-[6px] font-sans","flex flex-row space-x-[8px] justify-center items-center","bg-white hover:bg-white/90","transition-colors duration-150 ease-linear",className);return(0,jsx_runtime.jsx)("button",{className:classNames,onClick:onClick,children:children})}function BalanceButton(_ref2){var children=_ref2.children,onClick=_ref2.onClick,className=_ref2.className,classNames=(0,clsx_m.Z)("font-serif text-base leading-[24px]","px-[20px] py-[8px] rounded-none","text-white bg-primary hover:bg-[#20d775]","transition-colors duration-150 ease-linear","rounded-l-[8px]",className);return(0,jsx_runtime.jsx)("button",{className:classNames,onClick:onClick,children:children})}function AccountButton(_ref3){var account=_ref3.account,onConnectClick=_ref3.onConnectClick,onDisconnectClick=_ref3.onDisconnectClick,onBalanceClick=_ref3.onBalanceClick;return account?(0,jsx_runtime.jsxs)("div",{className:"flex flex-row",children:[account.balance&&(0,jsx_runtime.jsx)(BalanceButton,{onClick:onBalanceClick,children:(0,jsx_runtime.jsxs)("div",{className:"mb-[-4px] font-bold",children:[Number.parseFloat(account.balance.formatted).toLocaleString()," ",account.balance.symbol.toLocaleUpperCase()]})}),(0,jsx_runtime.jsxs)(We,{as:"div",className:"relative inline-block text-left",children:[(0,jsx_runtime.jsx)(We.Button,{as:"div",className:"rounded-r-[8px] bg-primary p-[2px]",children:(0,jsx_runtime.jsxs)(AddressButton,{children:[(0,jsx_runtime.jsx)("div",{className:"text-[14px] font-medium flex-1",children:(0,getFormattedAddress.F)(account.address)}),(0,jsx_runtime.jsx)(IdentIcon.v,{address:account.address,size:16,className:"flex-none"})]})}),(0,jsx_runtime.jsx)(transition.u,{as:react.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,jsx_runtime.jsx)(We.Items,{className:"absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white focus:outline-none shadow-lg py-1",children:onDisconnectClick&&(0,jsx_runtime.jsx)(We.Item,{as:"button",className:"py-[6px] px-[16px] leading-[24px] hover:bg-light-green hover:text-primary transition-colors duration-150 ease-out block w-full text-left",onClick:onDisconnectClick,children:"Disconnect"})})})]})]}):(0,jsx_runtime.jsx)(Button.z,{onClick:onConnectClick,children:"Connect Wallet"})}AddressButton.displayName="AddressButton",BalanceButton.displayName="BalanceButton",AccountButton.displayName="AccountButton";try{AccountButton.displayName="AccountButton",AccountButton.__docgenInfo={description:"",displayName:"AccountButton",props:{account:{defaultValue:null,description:"",name:"account",required:!1,type:{name:"{ address: string; balance?: { decimals: number; formatted: string; symbol: string; value: BigNumber; }; }"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},onConnectClick:{defaultValue:null,description:"",name:"onConnectClick",required:!1,type:{name:"(() => void)"}},onDisconnectClick:{defaultValue:null,description:"",name:"onDisconnectClick",required:!1,type:{name:"(() => void)"}},onAddressClick:{defaultValue:null,description:"",name:"onAddressClick",required:!1,type:{name:"(() => void)"}},onBalanceClick:{defaultValue:null,description:"",name:"onBalanceClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AccountButton.tsx#AccountButton"]={docgenInfo:AccountButton.__docgenInfo,name:"AccountButton",path:"src/components/AccountButton.tsx#AccountButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ConnectButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConnectButton:function(){return ConnectButton},default:function(){return ConnectButton}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),wagmi__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/wagmi/dist/wagmi.esm.js"),_OnboardingContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/OnboardingContainer.tsx"),_AccountButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AccountButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ConnectButton(){var _useAccount=(0,wagmi__WEBPACK_IMPORTED_MODULE_4__.mA)(),isConnected=_useAccount.isConnected,address=_useAccount.address,balance=(0,wagmi__WEBPACK_IMPORTED_MODULE_4__.KQ)({addressOrName:address,watch:!0}).data,disconnect=(0,wagmi__WEBPACK_IMPORTED_MODULE_4__.qL)().disconnect,connectWallet=(0,_OnboardingContainer__WEBPACK_IMPORTED_MODULE_1__.P)().connectWallet,account=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){if(isConnected&&address)return{address:address,balance:balance}}),[address,balance,isConnected]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AccountButton__WEBPACK_IMPORTED_MODULE_2__.s,{onConnectClick:connectWallet,onDisconnectClick:disconnect,account:account})}ConnectButton.displayName="ConnectButton"},"./src/components/IdentIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{v:function(){return IdentIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/jazzicon/index.js"),_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function IdentIcon(_ref){var address=_ref.address,_ref$size=_ref.size,size=void 0===_ref$size?16:_ref$size,className=_ref.className,iconElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){iconElementRef.current&&(iconElementRef.current.innerHTML="",iconElementRef.current.appendChild(_metamask_jazzicon__WEBPACK_IMPORTED_MODULE_1___default()(size,parseInt(address.slice(2,10),16))))}),[address,size]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:iconElementRef,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline-block leading-[0px] rounded-full overflow-hidden",className)})}IdentIcon.displayName="IdentIcon";try{IdentIcon.displayName="IdentIcon",IdentIcon.__docgenInfo={description:"",displayName:"IdentIcon",props:{address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IdentIcon.tsx#IdentIcon"]={docgenInfo:IdentIcon.__docgenInfo,name:"IdentIcon",path:"src/components/IdentIcon.tsx#IdentIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{vc:function(){return config},zK:function(){return getChain}});var _process$env$BUILD_HA,_process$env$NETWORK,_package_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./package.json"),process=__webpack_require__("./node_modules/process/browser.js"),buildHash=null!==(_process$env$BUILD_HA=process.env.BUILD_HASH)&&void 0!==_process$env$BUILD_HA?_process$env$BUILD_HA:"dev",config={contractAddress:process.env.CONTRACT_ADDRESS,sentryDsn:process.env.SENTRY_DSN,network:null!==(_process$env$NETWORK=process.env.NETWORK)&&void 0!==_process$env$NETWORK?_process$env$NETWORK:"dev",version:_package_json__WEBPACK_IMPORTED_MODULE_0__.i8+"-"+buildHash,publicUrl:null!=="."?".":"/"},currency={name:"Islamic Coin",symbol:"ISLM",decimals:18},chains={local:{id:1337,name:"Haqq Localnet",network:"haqq-localnet",rpcUrls:{default:"http://127.0.0.1:7545",ws:"ws://127.0.0.1:7545"},nativeCurrency:currency,testnet:!0},dev:{id:121799,name:"Haqq Devnet",network:"haqq-devnet",rpcUrls:{default:"http://159.69.6.222:8545"},testnet:!0,nativeCurrency:currency},test:{id:53211,name:"Haqq Testedge",network:"haqq-testedge",rpcUrls:{default:"https://rpc.eth.testedge.haqq.network"},testnet:!0,nativeCurrency:currency},main:{id:11235,name:"Haqq Mainnet",network:"haqq-mainnet",rpcUrls:{default:"https://rpc.eth.haqq.network"},testnet:!1,nativeCurrency:currency}};function getChain(){var currentChain=chains[config.network];if(!currentChain)throw new Error("No configuration for "+config.network);return currentChain}},"./src/utils/getFormattedAddress.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function getFormattedAddress(address){var before=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,after=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return address.slice(0,before)+"..."+address.slice(-1*after)}__webpack_require__.d(__webpack_exports__,{F:function(){return getFormattedAddress}})},"?8131":function(){},"./package.json":function(module){"use strict";module.exports=JSON.parse('{"i8":"0.1.0","cj":{"H":"https://github.com/haqq-network/vesting-app.git"}}')}}]);