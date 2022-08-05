function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire4cd8;n.register("c1v7q",(function(t,o){var r;r=t.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),e(t.exports,"ConnectButton",(function(){return l})),e(t.exports,"default",(function(){return l}));var a=n("21Wcl"),s=n("dCk83"),i=n("8EdNU"),c=n("aBr8q");function l(){const{isConnected:e,address:n}=(0,i.useAccount)(),{connect:t,connectors:o}=(0,i.useConnect)(),{data:r}=(0,i.useBalance)({addressOrName:n,watch:!0}),{disconnect:l}=(0,i.useDisconnect)(),d=(0,s.useCallback)((()=>{t({connector:o[0]})}),[t,o]),u=(0,s.useCallback)((()=>{l()}),[l]),p=(0,s.useMemo)((()=>{if(e&&n)return{address:n,balance:r}}),[n,r,e]);return(0,a.jsx)(c.AccountButton,{onConnectClick:d,onDisconnectClick:u,account:p})}})),n.register("aBr8q",(function(t,o){e(t.exports,"AccountButton",(function(){return x}));var r=n("21Wcl"),a=n("dCk83"),s=n("613K3"),i=n("4dJwt"),c=n("02Nru"),l=n("dbDlp");function d({children:e,onClick:n,className:t}){const o=(0,s.default)("h-[36px] px-[8px] py-[6px] appearance-none outline-none","rounded-[6px] font-sans","flex flex-row space-x-[8px] justify-center items-center","bg-white hover:bg-white/90","transition-colors duration-150 ease-linear",t);return(0,r.jsx)("button",{className:o,onClick:n,children:e})}function u({children:e,onClick:n,className:t}){const o=(0,s.default)("font-serif text-base leading-[24px]","px-[20px] py-[8px] rounded-none","text-white bg-primary hover:bg-[#20d775]","transition-colors duration-150 ease-linear","rounded-l-[8px]",t);return(0,r.jsx)("button",{className:o,onClick:n,children:e})}function p(e){const n=e.toLocaleLowerCase();return`${n.slice(0,6)}...${n.slice(-4)}`}function x({account:e,onConnectClick:n,onDisconnectClick:t,onBalanceClick:o}){return e?(0,r.jsxs)("div",{className:"flex flex-row",children:[e.balance&&(0,r.jsx)(u,{onClick:o,children:(0,r.jsxs)("div",{className:"mb-[-4px] font-bold",children:[Number.parseFloat(e.balance.formatted).toLocaleString()," ",e.balance.symbol.toLocaleUpperCase()]})}),(0,r.jsxs)(l.Menu,{as:"div",className:"relative inline-block text-left",children:[(0,r.jsx)(l.Menu.Button,{as:"div",className:"rounded-r-[8px] bg-primary p-[2px]",children:(0,r.jsxs)(d,{children:[(0,r.jsx)("div",{className:"text-[14px] font-medium flex-1",children:p(e.address)}),(0,r.jsx)(c.IdentIcon,{address:e.address,size:16,className:"flex-none"})]})}),(0,r.jsx)(l.Transition,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsx)(l.Menu.Items,{className:"absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white focus:outline-none shadow p-1",children:(0,r.jsx)(l.Menu.Item,{as:"button",className:"py-[6px] px-[12px] leading-[24px] hover:bg-light-green transition-colors duration-150 ease-in-out block w-full rounded-sm text-left",onClick:t,children:"Disconnect"})})})]})]}):(0,r.jsx)(i.Button,{onClick:n,children:"Connect Wallet"})}})),n.register("4dJwt",(function(t,o){e(t.exports,"Button",(function(){return s}));var r=n("21Wcl");n("dCk83");var a=n("613K3");function s({children:e,onClick:n,outline:t=!1,disabled:o=!1,fill:s=!1,type:i="button",className:c}){const l=(0,a.default)(t?"bg-transparent text-primary border-[2px] box-border border-solid border-primary hover:text-[#20d775] hover:border-[#20d775]":"bg-primary text-white hover:bg-[#20d775]","text-base font-semibold font-sans leading-[24px]","rounded-[8px] py-[8px] px-[22px] appearance-none","transition-colors duration-150 ease-linear",s?"w-full":"inline-block",{"opacity-75 cursor-not-allowed":o},c);return(0,r.jsx)("button",{type:i,disabled:o,onClick:n,className:l,children:e})}}));
//# sourceMappingURL=ConnectButton.3c7a600c.js.map