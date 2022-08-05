function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4cd8;n.register("i7Et2",(function(t,r){var s;s=t.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),e(t.exports,"Tooltip",(function(){return w})),e(t.exports,"AccountWidget",(function(){return b})),e(t.exports,"default",(function(){return b}));var l=n("21Wcl"),a=n("8xGpt"),o=n("dCk83"),i=n("613K3"),c=n("8EdNU"),d=n("iCfIT"),x=n("02Nru"),u=n("7hDhl"),p=n("7sJIw"),f=n("6lg3a");function h(){return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[24px] w-[24px]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})}function m(){return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[24px] w-[24px]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}function v(){return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"h-[24px] w-[24px]",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}function g({children:e,onClick:n}){return(0,l.jsx)("button",{onClick:n,className:"text-dark-gray hover:text-primary cursor-pointer transition-colors duration-150",children:e})}function j(){const{disconnect:e}=(0,c.useDisconnect)();return(0,l.jsx)(g,{onClick:()=>{e()},children:(0,l.jsx)(m,{})})}function C({text:e}){const{copyText:n}=(0,f.useClipboard)(),t=(0,o.useCallback)((()=>{n(e)}),[n,e]);return(0,l.jsx)(g,{onClick:t,children:(0,l.jsx)(h,{})})}function w({text:e,children:n}){return(0,l.jsxs)("span",{className:"relative leading-none group",children:[(0,l.jsx)("div",{className:(0,i.default)("invisible absolute w-max mb-1 opacity-0","left-1/2 -translate-x-1/2 -translate-y-2 bottom-full","transition ease-out duration-100","group-hover:visible group-hover:z-50 group-hover:opacity-100 group-hover:translate-y-0","py-[4px] px-[10px] rounded-sm bg-primary shadow-xl"),children:(0,l.jsx)(p.Text,{className:"text-sm leading-[20px] font-medium",color:"white",children:e})}),n]})}function b(){const{address:e,isConnected:n}=(0,c.useAccount)();return(0,l.jsx)(d.Card,{className:"max-w-lg mx-auto w-full",children:(0,l.jsxs)("div",{className:"p-6 flex flex-col space-y-4",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,l.jsx)(p.Heading,{level:3,className:"uppercase inline-flex",children:"Account info"}),n&&(0,l.jsxs)("div",{className:"flex flex-row space-x-3 mt-[-4px]",children:[e&&(0,l.jsx)(w,{text:"Copy address",children:(0,l.jsx)(C,{text:e})}),(0,l.jsx)(w,{text:"Go to scanner",children:(0,l.jsx)("a",{href:"http://haqq.network",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(g,{children:(0,l.jsx)(v,{})})})}),(0,l.jsx)(w,{text:"Disconnect",children:(0,l.jsx)(j,{})})]})]}),(0,l.jsx)(T,{})]})})}function y({isOpen:e,error:n,onClose:t}){return null===n?null:(0,l.jsx)(u.Modal,{isOpen:e,onClose:t,children:(0,l.jsxs)(d.Card,{className:"p-6 overflow-hidden",children:[(0,l.jsx)("p",{children:n.message}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:t,children:"Close"})})]})})}function N({address:e}){return void 0===e?(0,l.jsx)("div",{className:"animate-pulse opacity-30 flex flex-row space-x-10",children:(0,l.jsxs)("div",{className:"flex space-x-2 flex-row items-center h-[32px] flex-1",children:[(0,l.jsx)("div",{className:"rounded-full bg-primary h-[32px] w-[32px] flex-none opacity-30"}),(0,l.jsx)("div",{className:"h-[12px] bg-primary rounded-full flex-1 max-w-[240px] opacity-30"})]})}):(0,l.jsx)("div",{className:"flex flex-row space-x-2 items-center",children:(0,l.jsxs)("div",{className:"flex flex-row space-x-2 items-center h-[32px] flex-1 overflow-hidden",children:[(0,l.jsx)(x.IdentIcon,{address:e,size:32,className:"rounded-full leading-none flex-none"}),(0,l.jsx)("div",{className:"overflow-ellipsis text-lg font-medium overflow-hidden",children:e})]})})}const k=(0,a.default)("svg",{target:"evxbifo0"})({name:"jj0s3s",styles:"position:absolute;width:100px;height:100px;right:15px;bottom:15px"});function T(){const[e,n]=(0,o.useState)(!1),{address:t}=(0,c.useAccount)(),{data:r,isError:s,isLoading:a,status:i,error:d}=(0,c.useBalance)({addressOrName:t,watch:!0}),x=(0,o.useCallback)((()=>{n(!1)}),[]);return(0,o.useEffect)((()=>{(s||"error"===i)&&n(!0)}),[s,i]),(0,l.jsxs)("div",{className:"rounded-[12px] bg-light-green border border-[#04d484] border-opacity-20 h-[200px] relative",children:[(0,l.jsxs)("div",{className:"p-4 flex flex-col space-y-4 justify-between content-between h-full",children:[(0,l.jsx)(N,{address:t}),(0,l.jsx)("div",{className:"flex flex-row items-center",children:(0,l.jsxs)("div",{className:"flex-1",children:[(0,l.jsx)(p.Text,{color:"light",className:"leading-[32px]",block:!0,children:"Current balance:"}),a||void 0===r?(0,l.jsxs)("div",{className:"animate-pulse opacity-30 flex flex-row space-x-4 items-center",children:[(0,l.jsx)("div",{className:"h-[48px] bg-primary rounded-md w-[140px] opacity-30"}),(0,l.jsx)("div",{className:"h-[48px] bg-primary rounded-md w-[80px] opacity-30"})]}):(0,l.jsxs)("div",{className:"text-5xl font-bold font-serif leading-[48px]",children:[Number.parseFloat(r.formatted).toLocaleString()," ",r.symbol.toLocaleUpperCase()]})]})})]}),(0,l.jsx)(k,{viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-primary opacity-10",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30 0C38.2838 0 45.7843 3.35808 51.2131 8.78689C56.5777 14.1515 59.9198 21.5387 59.9981 29.7055V29.7225L59.9991 29.8339L60 29.9991L59.9981 30.2756V30.2935C59.9198 38.4603 56.5777 45.8466 51.2131 51.2112C45.7843 56.64 38.2848 59.9981 30 59.9981C21.7162 59.9981 14.2157 56.64 8.78689 51.2112C3.35808 45.7824 0 38.2819 0 29.9981C0 21.7143 3.35808 14.2147 8.78689 8.78594C14.2157 3.35714 21.7162 0 30 0ZM47.2425 17.2416C48.3798 17.2416 49.4831 17.3916 50.5336 17.67C47.4398 14.6678 43.2209 12.8189 38.5689 12.8189C33.8243 12.8189 29.529 14.7414 26.4211 17.8503C23.3121 20.9592 21.3896 25.2545 21.3896 29.9991C21.3896 34.7436 23.3121 39.0389 26.4211 42.1469C29.53 45.2558 33.8253 47.1783 38.5689 47.1783C43.2209 47.1783 47.4407 45.3294 50.5336 42.3271C49.484 42.6065 48.3807 42.7556 47.2434 42.7556C43.7211 42.7556 40.5311 41.3276 38.2234 39.0191C35.9149 36.7105 34.4869 33.5204 34.4869 29.9981C34.4869 26.4758 35.9149 23.2857 38.2234 20.9772C40.5301 18.6705 43.7192 17.2416 47.2425 17.2416ZM53.2565 23.9851C51.7171 22.4467 49.5907 21.4944 47.2416 21.4944C44.8924 21.4944 42.766 22.4467 41.2266 23.9851C39.6873 25.5244 38.7359 27.6509 38.7359 30C38.7359 32.3491 39.6882 34.4756 41.2266 36.0149C42.766 37.5533 44.8924 38.5056 47.2416 38.5056C49.5907 38.5056 51.7171 37.5533 53.2565 36.0149C54.7949 34.4756 55.7472 32.3491 55.7472 30L55.7462 29.8905C55.7179 27.5838 54.7713 25.4999 53.2565 23.9851ZM38.5679 8.56698C41.2399 8.56698 43.7966 9.05587 46.1562 9.94966C41.7382 6.38583 36.1178 4.25187 30 4.25187C22.8903 4.25187 16.4525 7.13427 11.7929 11.7929C7.13427 16.4516 4.25187 22.8893 4.25187 29.9991C4.25187 37.1097 7.13333 43.5465 11.7929 48.2061C16.4525 52.8648 22.8893 55.7472 30 55.7472C36.1187 55.7472 41.7382 53.6132 46.1562 50.0484C43.7966 50.9422 41.2399 51.4311 38.5679 51.4311C32.6502 51.4311 27.2913 49.032 23.4141 45.1538C19.536 41.2757 17.1368 35.9177 17.1368 30C17.1368 24.0823 19.536 18.7233 23.4141 14.8452C27.2913 10.9661 32.6502 8.56698 38.5679 8.56698Z",fill:"currentColor"})}),(0,l.jsx)(y,{isOpen:e,error:d,onClose:x})]})}})),n.register("iCfIT",(function(t,r){e(t.exports,"Card",(function(){return i}));var s=n("21Wcl"),l=n("8xGpt"),a=n("613K3");n("dCk83");const o=(0,l.default)("div",{target:"eqzkq1l0"})("");function i({children:e,className:n,withShadow:t=!1}){const r=(0,a.default)("bg-white rounded-[12px] shadow-sm",n);return(0,s.jsx)(o,{className:r,withShadow:t,children:e})}})),n.register("7hDhl",(function(t,r){e(t.exports,"Modal",(function(){return o}));var s=n("21Wcl"),l=n("dCk83"),a=n("dbDlp");function o({children:e,onClose:n,isOpen:t=!1}){return(0,s.jsx)(a.Transition,{appear:!0,show:t,as:l.Fragment,children:(0,s.jsxs)(a.Dialog,{as:"div",className:"relative z-50",onClose:n,children:[(0,s.jsx)(a.Transition.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{role:"none",className:"fixed inset-0 backdrop-filter backdrop-blur transform-gpu bg-[rgba(12, 12, 12, 0.4)]",onClick:n,onKeyDown:e=>{e.preventDefault(),e.stopPropagation(),"Escape"===e.nativeEvent.code&&n()}})}),(0,s.jsx)("div",{className:"fixed inset-0 overflow-y-auto pointer-events-none",children:(0,s.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 pointer-events-none",children:(0,s.jsx)(a.Transition.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsx)("div",{className:"w-full transform transition-all pointer-events-auto",children:e})})})})]})})}})),n.register("7sJIw",(function(t,r){e(t.exports,"Heading",(function(){return a})),e(t.exports,"Text",(function(){return o}));var s=n("21Wcl");n("dCk83");var l=n("613K3");function a({children:e,level:n=2,className:t,color:r}){const a=(0,l.default)("font-serif font-bold tracking-normal leading-[1em]",{"text-black":"default"===r,"text-dark-gray":"light"===r,"text-white":"white"===r,"text-primary":"primary"===r},{"text-[80px]":1===n,"text-[38px]":2===n,"text-[24px]":3===n,"text-[20px]":4===n},t);switch(n){case 1:return(0,s.jsx)("h1",{className:a,children:e});case 3:return(0,s.jsx)("h3",{className:a,children:e});case 4:return(0,s.jsx)("h4",{className:a,children:e});default:return(0,s.jsx)("h2",{className:a,children:e})}}function o({children:e,className:n,italic:t=!1,underline:r=!1,running:a=!1,bold:o=!1,block:i=!1,color:c="default"}){const d=(0,l.default)("text-base",{"text-black":"default"===c,"text-dark-gray":"light"===c,"text-white":"white"===c,"text-primary":"primary"===c},{"leading-relaxed":a,"leading-tight":!a},{underline:r,"font-bold":o,italic:t,"inline-block":i},n);return(0,s.jsx)("span",{className:d,children:e})}})),n.register("6lg3a",(function(t,r){e(t.exports,"useClipboard",(function(){return l}));var s=n("dCk83");function l(){return{copyText:(0,s.useCallback)((async e=>{try{await navigator.clipboard.writeText(e),console.log(`"${e}" copied to clipboard`)}catch(e){console.error("Error in copying text: ",e)}}),[])}}}));
//# sourceMappingURL=AccountWidget.712d50ce.js.map