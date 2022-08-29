(self.webpackChunk_haqq_vesting_app=self.webpackChunk_haqq_vesting_app||[]).push([[249],{"./src/components/DepositStatsWidget.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DepositStatsWidget:function(){return DepositStatsWidget_stories_DepositStatsWidget},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DepositStatsWidget_stories}});var react=__webpack_require__("./node_modules/react/index.js"),config=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./src/config.ts")),wagmi_esm=__webpack_require__("./node_modules/wagmi/dist/wagmi.esm.js"),Card=__webpack_require__("./src/components/Card.tsx"),Typography=__webpack_require__("./src/components/Typography.tsx"),HaqqVesting_namespaceObject=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiaryAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"depositId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sumInWeiDeposited","type":"uint256"},{"indexed":false,"internalType":"address","name":"depositedBy","type":"address"}],"name":"DepositMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"sumInWei","type":"uint256"},{"indexed":true,"internalType":"address","name":"triggeredByAddress","type":"address"}],"name":"WithdrawalMade","type":"event"},{"inputs":[],"name":"MAX_DEPOSITS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NUMBER_OF_PAYMENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_BETWEEN_PAYMENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryAddress","type":"address"},{"internalType":"uint256","name":"_depositId","type":"uint256"}],"name":"amountForOneWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryAddress","type":"address"},{"internalType":"uint256","name":"_depositId","type":"uint256"}],"name":"amountToWithdrawNow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryAddress","type":"address"}],"name":"calculateAvailableSumForAllDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryAddress","type":"address"}],"name":"deposit","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"sumInWeiDeposited","type":"uint256"},{"internalType":"uint256","name":"sumPaidAlready","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositsCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryAddress","type":"address"},{"internalType":"uint256","name":"_depositId","type":"uint256"}],"name":"totalPayoutsUnblocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newBeneficiaryAddress","type":"address"}],"name":"transferDepositRights","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryAddress","type":"address"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}'),Playground=__webpack_require__("./src/components/Playground.tsx"),utils=__webpack_require__("./node_modules/ethers/lib/utils.js"),Button=__webpack_require__("./src/components/Button.tsx"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DepositNavigation(_ref){var current=_ref.current,total=_ref.total,className=_ref.className,onChange=_ref.onChange,handlePrevClick=(0,react.useCallback)((function(){onChange(current-1)}),[current,onChange]),handleNextClick=(0,react.useCallback)((function(){onChange(current+1)}),[current,onChange]);return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("flex flex-row items-center justify-center",className),children:[(0,jsx_runtime.jsx)("button",{onClick:handlePrevClick,disabled:current<=1,className:"h-6 w-6 hover:text-primary cursor-pointer p-1 disabled:cursor-not-allowed disabled:text-gray-300",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:3,children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Typography.x,{color:"light",className:"text-lg",children:[current," of ",total]})}),(0,jsx_runtime.jsx)("button",{onClick:handleNextClick,disabled:current>=total,className:"h-6 w-6 hover:text-primary cursor-pointer p-1 disabled:cursor-not-allowed disabled:text-gray-300",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:3,children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})})]})}DepositNavigation.displayName="DepositNavigation";try{DepositNavigation.displayName="DepositNavigation",DepositNavigation.__docgenInfo={description:"",displayName:"DepositNavigation",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(nextPage: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DepositNavigation.tsx#DepositNavigation"]={docgenInfo:DepositNavigation.__docgenInfo,name:"DepositNavigation",path:"src/components/DepositNavigation.tsx#DepositNavigation"})}catch(__react_docgen_typescript_loader_error){}var Modal=__webpack_require__("./src/components/modals/Modal.tsx"),Alert=__webpack_require__("./src/components/modals/Alert.tsx"),Confirm=__webpack_require__("./src/components/modals/Confirm.tsx"),Input=__webpack_require__("./src/components/Input.tsx");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function NextDepositUnlock(_ref){var createdAt=_ref.createdAt,period=_ref.period,nextUnlockDate=function useNextUnlockDate(startDate,period){return(0,react.useMemo)((function(){for(var now=Date.now(),offset=1e3*period,unlockTime=startDate.getTime();unlockTime<=now;)unlockTime+=offset;return new Date(unlockTime)}),[startDate,period])}(new Date(createdAt),period);return(0,jsx_runtime.jsx)(StatsRow,{label:"Next unlock date",value:""+nextUnlockDate.toLocaleString()})}function StatsRow(_ref2){var label=_ref2.label,value=_ref2.value;return(0,jsx_runtime.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Typography.x,{children:label})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Typography.x,{bold:!0,children:value})})]})}function DepositStatsWidget(_ref3){var _chain$nativeCurrency,_chain$nativeCurrency2,_chain$nativeCurrency3,_chain$nativeCurrency4,_chain$nativeCurrency5,_chain$nativeCurrency6,contractAddress=_ref3.contractAddress,chain=(0,config.zK)(),_useAccount=(0,wagmi_esm.mA)(),address=_useAccount.address,isConnected=_useAccount.isConnected,provider=(0,wagmi_esm.yL)(),contract=(0,wagmi_esm.cq)({addressOrName:contractAddress,contractInterface:HaqqVesting_namespaceObject.Mt,signerOrProvider:provider}),_useState2=_slicedToArray((0,react.useState)(null),2),deposit=_useState2[0],setDeposit=_useState2[1],_useState4=_slicedToArray((0,react.useState)(0),2),depositsCount=_useState4[0],setDepositsCount=_useState4[1],_useState6=_slicedToArray((0,react.useState)(0),2),currentDeposit=_useState6[0],setCurrentDeposit=_useState6[1],requestDepositCount=(0,react.useCallback)((async function(){try{var _depositsCount=await contract.depositsCounter(address);setDepositsCount(_depositsCount.toNumber())}catch(error){console.error(error)}}),[address,contract]),requestDepStats=(0,react.useCallback)((async function(address,depositNumber){if(depositNumber>0)try{var _deposit=await contract.deposits(address,depositNumber),amount=await contract.amountToWithdrawNow(address,depositNumber),paymentsPeriod=await contract.TIME_BETWEEN_PAYMENTS();setDeposit(function mapSCResponseToJson(contract,available,period){var deposited=contract.sumInWeiDeposited,withdrawn=contract.sumPaidAlready,unlocked=contract.sumPaidAlready.add(available);return{locked:deposited.sub(unlocked),unlocked:unlocked,available:available,deposited:deposited,withdrawn:withdrawn,createdAt:new Date(1e3*contract.timestamp.toNumber()).toISOString(),unlockPeriod:period.toNumber()}}(_deposit,amount,paymentsPeriod))}catch(error){console.error(error)}}),[contract]);return(0,react.useEffect)((function(){requestDepositCount()}),[address,contract,requestDepositCount]),(0,react.useEffect)((function(){depositsCount>0&&setCurrentDeposit(1)}),[depositsCount]),(0,react.useEffect)((function(){0===depositsCount?(setCurrentDeposit(0),setDeposit(null)):depositsCount>0&&currentDeposit>0&&address&&requestDepStats(address,currentDeposit)}),[address,currentDeposit,depositsCount,requestDepStats]),(0,jsx_runtime.jsx)(Card.Z,{className:"overflow-hidden max-w-lg mx-auto w-full",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,jsx_runtime.jsxs)("div",{className:"pt-6 px-6 flex flex-row space-x-6 justify-between",children:[(0,jsx_runtime.jsx)(Typography.X,{level:3,className:"uppercase",children:"Deposit"}),isConnected&&depositsCount>0&&(0,jsx_runtime.jsx)(DepositNavigation,{total:depositsCount,current:currentDeposit,onChange:setCurrentDeposit})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4",children:[!isConnected&&(0,jsx_runtime.jsx)("div",{className:"p-10 flex items-center justify-center min-h-[200px]",children:(0,jsx_runtime.jsx)(Playground.$,{})}),isConnected&&0===depositsCount&&(0,jsx_runtime.jsx)("div",{className:"text-center px-6 py-12",children:(0,jsx_runtime.jsx)(Typography.X,{level:3,children:"You have no deposits"})}),isConnected&&null!==deposit&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(DepositInfo,{deposit:deposit,symbol:null!==(_chain$nativeCurrency=null===(_chain$nativeCurrency2=chain.nativeCurrency)||void 0===_chain$nativeCurrency2?void 0:_chain$nativeCurrency2.symbol)&&void 0!==_chain$nativeCurrency?_chain$nativeCurrency:""}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 px-6 pb-6",children:[(0,jsx_runtime.jsx)(Withdraw,{deposit:deposit,symbol:null!==(_chain$nativeCurrency3=null===(_chain$nativeCurrency4=chain.nativeCurrency)||void 0===_chain$nativeCurrency4?void 0:_chain$nativeCurrency4.symbol)&&void 0!==_chain$nativeCurrency3?_chain$nativeCurrency3:"",contractAddress:contractAddress}),(0,jsx_runtime.jsx)(Transfer,{deposit:deposit,symbol:null!==(_chain$nativeCurrency5=null===(_chain$nativeCurrency6=chain.nativeCurrency)||void 0===_chain$nativeCurrency6?void 0:_chain$nativeCurrency6.symbol)&&void 0!==_chain$nativeCurrency5?_chain$nativeCurrency5:"",contractAddress:contractAddress})]})]})]})]})})}function DepositInfo(_ref4){var deposit=_ref4.deposit,symbol=_ref4.symbol;return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-2 px-6",children:[(0,jsx_runtime.jsx)(StatsRow,{label:"Deposit creation date",value:new Date(deposit.createdAt).toLocaleString()}),(0,jsx_runtime.jsx)(StatsRow,{label:"My timezone",value:Intl.DateTimeFormat().resolvedOptions().timeZone}),(0,jsx_runtime.jsx)(StatsRow,{label:"Deposited",value:(0,utils.formatEther)(deposit.deposited)+" "+symbol}),(0,jsx_runtime.jsx)(StatsRow,{label:"Locked",value:Number.parseInt((0,utils.formatEther)(deposit.locked),10).toLocaleString()+" "+symbol}),(0,jsx_runtime.jsx)(StatsRow,{label:"Unlocked",value:Number((0,utils.formatEther)(deposit.unlocked)).toFixed(3)+" "+symbol}),(0,jsx_runtime.jsx)(StatsRow,{label:"Withdrawn",value:Number((0,utils.formatEther)(deposit.withdrawn)).toFixed(3)+" "+symbol}),(0,jsx_runtime.jsx)(StatsRow,{label:"Available",value:Number((0,utils.formatEther)(deposit.available)).toFixed(3)+" "+symbol}),(0,jsx_runtime.jsx)(NextDepositUnlock,{createdAt:deposit.createdAt,period:deposit.unlockPeriod})]})}function Withdraw(_ref5){var symbol=_ref5.symbol,deposit=_ref5.deposit,contractAddress=_ref5.contractAddress,address=(0,wagmi_esm.mA)().address,signer=(0,wagmi_esm.mx)().data,contract=(0,wagmi_esm.cq)({addressOrName:contractAddress,contractInterface:HaqqVesting_namespaceObject.Mt,signerOrProvider:signer}),_useState8=_slicedToArray((0,react.useState)(null),2),withdrawTx=_useState8[0],setWithdrawTx=_useState8[1],_useState10=_slicedToArray((0,react.useState)(!1),2),isPending=_useState10[0],setPending=_useState10[1],_useState12=_slicedToArray((0,react.useState)(!1),2),isComplete=_useState12[0],setComplete=_useState12[1],_useState14=_slicedToArray((0,react.useState)(),2),error=_useState14[0],setError=_useState14[1],isWithdrawAvailable=(0,react.useMemo)((function(){var _Number$parseInt,_deposit$available,available=null!==(_Number$parseInt=Number.parseInt(null===(_deposit$available=deposit.available)||void 0===_deposit$available?void 0:_deposit$available.toString(),10))&&void 0!==_Number$parseInt?_Number$parseInt:0;return Boolean(available>0)}),[deposit]),handleWithdrawClick=(0,react.useCallback)((async function(){setPending(!0);try{var withdraw=await contract.withdraw(address);console.log({withdraw:withdraw}),setWithdrawTx(withdraw.hash),setComplete(!0)}catch(error){console.error(error),setError(error.message)}finally{setPending(!1)}}),[address,contract]);return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{onClick:handleWithdrawClick,fill:!0,disabled:!isWithdrawAvailable||isPending||isComplete,children:isPending?"Processing withdraw":"Withdraw"}),(0,jsx_runtime.jsx)(Alert.b,{isOpen:Boolean(error),onClose:function(){setError(void 0)},title:"Withdraw failure",children:error}),(0,jsx_runtime.jsx)(Alert.b,{isOpen:isComplete,onClose:function(){setComplete(!1)},title:"Withdraw success",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("b",{children:[(0,utils.formatEther)(deposit.unlocked)," ",symbol]})," ","have been withdrawn on your account"]}),(0,jsx_runtime.jsxs)("div",{children:["Your transaction is ",withdrawTx]})]})})]})}function Transfer(_ref6){var contractAddress=_ref6.contractAddress,symbol=_ref6.symbol,address=(0,wagmi_esm.mA)().address,signer=(0,wagmi_esm.mx)().data,contract=(0,wagmi_esm.cq)({addressOrName:contractAddress,contractInterface:HaqqVesting_namespaceObject.Mt,signerOrProvider:signer}),_useState16=_slicedToArray((0,react.useState)(),2),transferTx=_useState16[0],setTransferTx=_useState16[1],_useState18=_slicedToArray((0,react.useState)(!1),2),isPending=_useState18[0],setPending=_useState18[1],_useState20=_slicedToArray((0,react.useState)(!1),2),isComplete=_useState20[0],setComplete=_useState20[1],_useState22=_slicedToArray((0,react.useState)(),2),error=_useState22[0],setError=_useState22[1],_useState24=_slicedToArray((0,react.useState)(""),2),newBeneficiaryAddress=_useState24[0],setNewBeneficiaryAddress=_useState24[1],_useState26=_slicedToArray((0,react.useState)(!1),2),isAddressValid=_useState26[0],setAddressValid=_useState26[1],_useState28=_slicedToArray((0,react.useState)(!1),2),isWarningModalOpen=_useState28[0],setWarningModalOpen=_useState28[1],_useState30=_slicedToArray((0,react.useState)(!1),2),isWarned=_useState30[0],setWarned=_useState30[1],_useState32=_slicedToArray((0,react.useState)(!1),2),isConfirmModalOpen=_useState32[0],setConfirmModalOpen=_useState32[1],handleTransfer=(0,react.useCallback)((async function(){setPending(!0),setConfirmModalOpen(!1);try{var transfer=await contract.transferDepositRights(newBeneficiaryAddress);console.log({transfer:transfer}),setTransferTx(transfer.hash),setComplete(!0)}catch(error){console.error(error),setError(error.message)}finally{setPending(!1)}}),[contract,newBeneficiaryAddress]);(0,react.useEffect)((function(){setAddressValid((0,utils.isAddress)(newBeneficiaryAddress))}),[newBeneficiaryAddress,setAddressValid]);var handleBeneficiaryAddressChange=(0,react.useCallback)((function(value){setNewBeneficiaryAddress(value)}),[]),handleResetTransferState=(0,react.useCallback)((function(){setTransferTx(void 0),setPending(!1),setComplete(!1),setError(void 0),setNewBeneficiaryAddress(""),setAddressValid(!1),setWarningModalOpen(!1),setWarned(!1),setConfirmModalOpen(!1)}),[]);return(0,jsx_runtime.jsxs)(react.Fragment,{children:[isWarned?(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-4 mt-4",children:[(0,jsx_runtime.jsx)(Typography.X,{level:4,children:"Transfer deposit ownership"}),(0,jsx_runtime.jsx)(Input.I,{required:!0,label:"New deposit owner address",disabled:isPending,value:newBeneficiaryAddress,onChange:handleBeneficiaryAddressChange,state:isAddressValid?"success":"error",hint:isAddressValid?void 0:"Insert a valid address"}),(0,jsx_runtime.jsx)(Button.O,{fill:!0,onClick:function(){setConfirmModalOpen(!0)},disabled:!isAddressValid||isPending,children:"Transfer ownership"})]}):(0,jsx_runtime.jsx)(Button.O,{fill:!0,onClick:function(){setWarningModalOpen(!0)},disabled:isPending,children:"Transfer ownership"}),(0,jsx_runtime.jsx)(Modal.u,{isOpen:isWarningModalOpen,onClose:function(){setWarningModalOpen(!1)},children:(0,jsx_runtime.jsx)("div",{className:"bg-white rounded-2xl p-6 max-w-xl mx-auto",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-between items-center",children:[(0,jsx_runtime.jsx)(Typography.X,{level:3,children:"Transfer deposit ownership"}),(0,jsx_runtime.jsx)(Modal.o,{onClick:function(){setWarningModalOpen(!1)}})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,jsx_runtime.jsx)(Typography.x,{children:"You are about to transfer deposit rights to another account."}),(0,jsx_runtime.jsxs)(Typography.x,{children:["Once it's done, ",(0,jsx_runtime.jsx)(Typography.x,{bold:!0,children:address})," won't be able to withdraw ",symbol," from this deposit."]}),(0,jsx_runtime.jsx)(Typography.x,{children:"Are you sure you want to do this?"})]}),(0,jsx_runtime.jsx)("div",{className:"text-right",children:(0,jsx_runtime.jsx)(Button.z,{onClick:function(){setWarningModalOpen(!1),setWarned(!0)},className:"px-10",children:"Agree"})})]})})}),(0,jsx_runtime.jsx)(Confirm.I,{isOpen:isConfirmModalOpen,title:"THIS OPERATION IS IRREVERSIBLE",onClose:handleResetTransferState,buttonTitle:"Yes, I'm sure!",onConfirm:handleTransfer,children:(0,jsx_runtime.jsxs)("div",{children:["Are you sure you want to transfer deposit ownership from"," ",(0,jsx_runtime.jsx)("b",{children:address})," to ",(0,jsx_runtime.jsx)("b",{children:newBeneficiaryAddress}),"?"]})}),(0,jsx_runtime.jsx)(Alert.b,{isOpen:Boolean(error),onClose:function(){setError(void 0)},title:"Transfer failure",children:error}),(0,jsx_runtime.jsx)(Alert.b,{isOpen:isComplete,onClose:handleResetTransferState,title:"Transfer ownership success",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{children:["Deposit ownership was successfully transferred to"," ",(0,jsx_runtime.jsx)("b",{children:newBeneficiaryAddress})]}),(0,jsx_runtime.jsxs)("div",{children:["Transfer transaction is ",transferTx]})]})})]})}NextDepositUnlock.displayName="NextDepositUnlock",StatsRow.displayName="StatsRow",DepositStatsWidget.displayName="DepositStatsWidget",DepositInfo.displayName="DepositInfo",Withdraw.displayName="Withdraw",Transfer.displayName="Transfer";try{DepositStatsWidget.displayName="DepositStatsWidget",DepositStatsWidget.__docgenInfo={description:"",displayName:"DepositStatsWidget",props:{contractAddress:{defaultValue:null,description:"",name:"contractAddress",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DepositStatsWidget.tsx#DepositStatsWidget"]={docgenInfo:DepositStatsWidget.__docgenInfo,name:"DepositStatsWidget",path:"src/components/DepositStatsWidget.tsx#DepositStatsWidget"})}catch(__react_docgen_typescript_loader_error){}var DepositStatsWidget_stories={title:"ui-kit/Widgets",component:DepositStatsWidget},Template=function(args){return(0,jsx_runtime.jsx)(DepositStatsWidget,Object.assign({},args))};Template.displayName="Template";var DepositStatsWidget_stories_DepositStatsWidget=Template.bind({});DepositStatsWidget_stories_DepositStatsWidget.args={},DepositStatsWidget_stories_DepositStatsWidget.parameters=Object.assign({storySource:{source:"(\n  args: any,\n) => {\n  return <DepositStatsWidgetComponent {...args} />;\n}"}},DepositStatsWidget_stories_DepositStatsWidget.parameters);var __namedExportsOrder=["DepositStatsWidget"]},"./src/components/Playground.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function JSONPre(_ref){var object=_ref.object;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre",{className:"p-2 rounded-md bg-slate-100 border border-slate-200",children:JSON.stringify(object,null,2)})}function Spinner(_ref2){var className=_ref2.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("leading-none w-[48+px] h-[48px] text-primary opacity-50",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("path",{d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z",transform:"translate(12, 12) scale(0)",stroke:"currentColor",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{id:"a",begin:"0;c.end",attributeName:"transform",calcMode:"spline",type:"translate",dur:"1.2s",values:"12 12;0 0",keySplines:".52,.6,.25,.99"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{begin:"0;c.end",attributeName:"transform",calcMode:"spline",additive:"sum",type:"scale",dur:"1.2s",values:"0;1",keySplines:".52,.6,.25,.99"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{begin:"0;c.end",attributeName:"opacity",calcMode:"spline",dur:"1.2s",values:"1;0",keySplines:".52,.6,.25,.99"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("path",{d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z",transform:"translate(12, 12) scale(0)",stroke:"currentColor",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{id:"b",begin:"a.begin+0.2s",attributeName:"transform",calcMode:"spline",type:"translate",dur:"1.2s",values:"12 12;0 0",keySplines:".52,.6,.25,.99"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{begin:"a.begin+0.2s",attributeName:"transform",calcMode:"spline",additive:"sum",type:"scale",dur:"1.2s",values:"0;1",keySplines:".52,.6,.25,.99"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{begin:"a.begin+0.2s",attributeName:"opacity",calcMode:"spline",dur:"1.2s",values:"1;0",keySplines:".52,.6,.25,.99"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("path",{d:"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z",transform:"translate(12, 12) scale(0)",stroke:"currentColor",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{id:"c",begin:"a.begin+0.4s",attributeName:"transform",calcMode:"spline",type:"translate",dur:"1.2s",values:"12 12;0 0",keySplines:".52,.6,.25,.99"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{begin:"a.begin+0.4s",attributeName:"transform",calcMode:"spline",additive:"sum",type:"scale",dur:"1.2s",values:"0;1",keySplines:".52,.6,.25,.99"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{begin:"a.begin+0.4s",attributeName:"opacity",calcMode:"spline",dur:"1.2s",values:"1;0",keySplines:".52,.6,.25,.99"})]})]})}JSONPre.displayName="JSONPre",Spinner.displayName="Spinner";try{JSONPre.displayName="JSONPre",JSONPre.__docgenInfo={description:"",displayName:"JSONPre",props:{object:{defaultValue:null,description:"",name:"object",required:!0,type:{name:"Record<string, unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Playground.tsx#JSONPre"]={docgenInfo:JSONPre.__docgenInfo,name:"JSONPre",path:"src/components/Playground.tsx#JSONPre"})}catch(__react_docgen_typescript_loader_error){}try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Playground.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Playground.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/config.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{vc:function(){return config},zK:function(){return getChain}});var _process$env$BUILD_HA,_process$env$NETWORK,_package_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./package.json"),process=__webpack_require__("./node_modules/process/browser.js"),buildHash=null!==(_process$env$BUILD_HA=process.env.BUILD_HASH)&&void 0!==_process$env$BUILD_HA?_process$env$BUILD_HA:"dev",config={contractAddress:process.env.CONTRACT_ADDRESS,sentryDsn:process.env.SENTRY_DSN,network:null!==(_process$env$NETWORK=process.env.NETWORK)&&void 0!==_process$env$NETWORK?_process$env$NETWORK:"dev",version:_package_json__WEBPACK_IMPORTED_MODULE_0__.i8+"-"+buildHash,publicUrl:null!=="."?".":"/"},currency={name:"Islamic Coin",symbol:"ISLM",decimals:18},chains={local:{id:1337,name:"Haqq Localnet",network:"haqq-localnet",rpcUrls:{default:"http://127.0.0.1:7545",ws:"ws://127.0.0.1:7545"},nativeCurrency:currency,testnet:!0},dev:{id:121799,name:"Haqq Devnet",network:"haqq-devnet",rpcUrls:{default:"http://159.69.6.222:8545"},testnet:!0,nativeCurrency:currency},test:{id:53211,name:"Haqq Testedge",network:"haqq-testedge",rpcUrls:{default:"https://rpc.eth.testedge.haqq.network"},testnet:!0,nativeCurrency:currency},main:{id:11235,name:"Haqq Mainnet",network:"haqq-mainnet",rpcUrls:{default:"https://rpc.eth.haqq.network"},testnet:!1,nativeCurrency:currency}};function getChain(){var currentChain=chains[config.network];if(!currentChain)throw new Error("No configuration for "+config.network);return currentChain}},"?8131":function(){},"./package.json":function(module){"use strict";module.exports=JSON.parse('{"i8":"0.1.0","cj":{"H":"https://github.com/haqq-network/vesting-app.git"}}')}}]);