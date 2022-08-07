function e(e,s,n,r){Object.defineProperty(e,s,{get:n,set:r,enumerable:!0,configurable:!0})}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4cd8;s.register("i7Et2",(function(n,r){var t;t=n.exports,Object.defineProperty(t,"__esModule",{value:!0,configurable:!0}),e(n.exports,"AccountWidget",(function(){return g})),e(n.exports,"default",(function(){return g}));var o=s("21Wcl"),i=s("8xGpt"),l=s("dCk83"),a=s("8EdNU"),c=s("iCfIT"),d=s("02Nru"),x=s("7sJIw"),p=s("4A2pB"),u=s("6lg3a"),f=s("ivsDT"),m=s("7n2hX");function h({children:e,onClick:s}){return(0,o.jsx)("button",{onClick:s,className:"text-dark-gray hover:text-primary cursor-pointer transition-colors duration-150",children:e})}function v(){const{disconnect:e}=(0,a.useDisconnect)();return(0,o.jsx)(h,{onClick:()=>{e()},children:(0,o.jsx)(f.DisconnectIcon,{})})}function C({text:e}){const{copyText:s}=(0,u.useClipboard)(),n=(0,l.useCallback)((()=>{s(e)}),[s,e]);return(0,o.jsx)(h,{onClick:n,children:(0,o.jsx)(f.CopyIcon,{})})}function g(){const{address:e,isConnected:s}=(0,a.useAccount)();return(0,o.jsx)(c.Card,{className:"max-w-lg mx-auto w-full",children:(0,o.jsxs)("div",{className:"p-6 flex flex-col space-y-4",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,o.jsx)(x.Heading,{level:3,className:"uppercase inline-flex",children:"Account info"}),s&&(0,o.jsxs)("div",{className:"flex flex-row space-x-3 mt-[-4px]",children:[e&&(0,o.jsx)(p.Tooltip,{text:"Copy address",children:(0,o.jsx)(C,{text:e})}),(0,o.jsx)(p.Tooltip,{text:"Disconnect",children:(0,o.jsx)(v,{})})]})]}),(0,o.jsx)(b,{})]})})}function j({address:e}){return void 0===e?(0,o.jsx)("div",{className:"animate-pulse opacity-30 flex flex-row space-x-10",children:(0,o.jsxs)("div",{className:"flex space-x-2 flex-row items-center h-[32px] flex-1",children:[(0,o.jsx)("div",{className:"rounded-full bg-primary h-[32px] w-[32px] flex-none opacity-30"}),(0,o.jsx)("div",{className:"h-[12px] bg-primary rounded-md flex-1 max-w-[240px] opacity-30"})]})}):(0,o.jsx)("div",{className:"flex flex-row space-x-2 items-center",children:(0,o.jsxs)("div",{className:"flex flex-row space-x-2 items-center h-[32px] flex-1 overflow-hidden",children:[(0,o.jsx)(d.IdentIcon,{address:e,size:32,className:"rounded-full leading-none flex-none"}),(0,o.jsx)("div",{className:"overflow-ellipsis text-lg font-medium overflow-hidden",children:e})]})})}const w=(0,i.default)("svg",{target:"evxbifo0"})({name:"jj0s3s",styles:"position:absolute;width:100px;height:100px;right:15px;bottom:15px"});function b(){const[e,s]=(0,l.useState)(!1),{address:n}=(0,a.useAccount)(),{data:r,isError:t,isLoading:i,status:c,error:d}=(0,a.useBalance)({addressOrName:n,watch:!0}),p=(0,l.useCallback)((()=>{s(!1)}),[]);return(0,l.useEffect)((()=>{(t||"error"===c)&&s(!0)}),[t,c]),(0,o.jsxs)("div",{className:"rounded-[12px] bg-light-green border border-[#04d484] border-opacity-20 h-[200px] relative",children:[(0,o.jsxs)("div",{className:"p-4 flex flex-col space-y-4 justify-between content-between h-full",children:[(0,o.jsx)(j,{address:n}),(0,o.jsx)("div",{className:"flex flex-row items-center",children:(0,o.jsx)("div",{className:"flex-1",children:i||void 0===r?(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)("div",{className:"animate-pulse opacity-30",children:[(0,o.jsx)("div",{className:"h-[16px] bg-primary rounded-md w-[110px] opacity-30 mb-1"}),(0,o.jsxs)("div",{className:"flex flex-row space-x-4 items-center",children:[(0,o.jsx)("div",{className:"h-[48px] bg-primary rounded-md w-[140px] opacity-30"}),(0,o.jsx)("div",{className:"h-[48px] bg-primary rounded-md w-[80px] opacity-30"})]})]})}):(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)(x.Text,{color:"light",className:"leading-[32px]",block:!0,children:"Current balance:"}),(0,o.jsxs)("div",{className:"text-5xl font-bold font-serif leading-[48px]",children:[Number.parseFloat(r.formatted).toLocaleString()," ",r.symbol.toLocaleUpperCase()]})]})})})]}),(0,o.jsx)(w,{viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-primary opacity-10",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30 0C38.2838 0 45.7843 3.35808 51.2131 8.78689C56.5777 14.1515 59.9198 21.5387 59.9981 29.7055V29.7225L59.9991 29.8339L60 29.9991L59.9981 30.2756V30.2935C59.9198 38.4603 56.5777 45.8466 51.2131 51.2112C45.7843 56.64 38.2848 59.9981 30 59.9981C21.7162 59.9981 14.2157 56.64 8.78689 51.2112C3.35808 45.7824 0 38.2819 0 29.9981C0 21.7143 3.35808 14.2147 8.78689 8.78594C14.2157 3.35714 21.7162 0 30 0ZM47.2425 17.2416C48.3798 17.2416 49.4831 17.3916 50.5336 17.67C47.4398 14.6678 43.2209 12.8189 38.5689 12.8189C33.8243 12.8189 29.529 14.7414 26.4211 17.8503C23.3121 20.9592 21.3896 25.2545 21.3896 29.9991C21.3896 34.7436 23.3121 39.0389 26.4211 42.1469C29.53 45.2558 33.8253 47.1783 38.5689 47.1783C43.2209 47.1783 47.4407 45.3294 50.5336 42.3271C49.484 42.6065 48.3807 42.7556 47.2434 42.7556C43.7211 42.7556 40.5311 41.3276 38.2234 39.0191C35.9149 36.7105 34.4869 33.5204 34.4869 29.9981C34.4869 26.4758 35.9149 23.2857 38.2234 20.9772C40.5301 18.6705 43.7192 17.2416 47.2425 17.2416ZM53.2565 23.9851C51.7171 22.4467 49.5907 21.4944 47.2416 21.4944C44.8924 21.4944 42.766 22.4467 41.2266 23.9851C39.6873 25.5244 38.7359 27.6509 38.7359 30C38.7359 32.3491 39.6882 34.4756 41.2266 36.0149C42.766 37.5533 44.8924 38.5056 47.2416 38.5056C49.5907 38.5056 51.7171 37.5533 53.2565 36.0149C54.7949 34.4756 55.7472 32.3491 55.7472 30L55.7462 29.8905C55.7179 27.5838 54.7713 25.4999 53.2565 23.9851ZM38.5679 8.56698C41.2399 8.56698 43.7966 9.05587 46.1562 9.94966C41.7382 6.38583 36.1178 4.25187 30 4.25187C22.8903 4.25187 16.4525 7.13427 11.7929 11.7929C7.13427 16.4516 4.25187 22.8893 4.25187 29.9991C4.25187 37.1097 7.13333 43.5465 11.7929 48.2061C16.4525 52.8648 22.8893 55.7472 30 55.7472C36.1187 55.7472 41.7382 53.6132 46.1562 50.0484C43.7966 50.9422 41.2399 51.4311 38.5679 51.4311C32.6502 51.4311 27.2913 49.032 23.4141 45.1538C19.536 41.2757 17.1368 35.9177 17.1368 30C17.1368 24.0823 19.536 18.7233 23.4141 14.8452C27.2913 10.9661 32.6502 8.56698 38.5679 8.56698Z",fill:"currentColor"})}),(0,o.jsx)(m.AlertWithDetails,{isOpen:e,title:"Balance update error",message:"Something went wrong and we cant get your balance. Please try again.",details:null==d?void 0:d.message,onClose:p})]})}})),s.register("4A2pB",(function(n,r){e(n.exports,"Tooltip",(function(){return i}));var t=s("21Wcl");s("dCk83");var o=s("613K3");function i({text:e,children:s}){return(0,t.jsxs)("span",{className:"relative leading-none group",children:[s,(0,t.jsx)("div",{className:(0,o.default)("invisible absolute w-max mb-1 opacity-0","left-1/2 -translate-x-1/2 -translate-y-2 bottom-full","transition ease-out duration-100","group-hover:visible group-hover:z-50 group-hover:opacity-100 group-hover:translate-y-0","py-[6px] px-[12px] rounded-md bg-primary shadow-xl leading-snug text-xs font-medium text-white"),children:e})]})}})),s.register("6lg3a",(function(n,r){e(n.exports,"useClipboard",(function(){return o}));var t=s("dCk83");function o(){return{copyText:(0,t.useCallback)((async e=>{try{await navigator.clipboard.writeText(e),console.log(`"${e}" copied to clipboard`)}catch(e){console.error("Error in copying text: ",e)}}),[])}}})),s.register("ivsDT",(function(n,r){e(n.exports,"CopyIcon",(function(){return o})),e(n.exports,"DisconnectIcon",(function(){return i}));var t=s("21Wcl");function o(){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[24px] w-[24px]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})}function i(){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[24px] w-[24px]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}s("dCk83")}));
//# sourceMappingURL=AccountWidget.97ea5f57.js.map
