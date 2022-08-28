(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{30874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var a=n(67294),i=n(9008),r=n(24237),o=n(47007),s=n(85973),p=(0,s.oM)({name:"mint",initialState:{amount:1},reducers:{handleAmount:function(e,t){e.amount=t.payload}}}),u=(p.actions,p),l=(0,s.xC)({reducer:{mint:u.reducer}}),d=n(15861),c=n(87757),y=n.n(c),m=n(50387),f=n(241),x=n(93226),b=n(36952),g=n(8044),h=n(42484),w=n.n(h),v=n(72485),T=n(80983),k=n(16901),M=n.n(k),N=n(72132),_=(n(30733),JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"Airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"Mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hiddenMetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLimitPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmountPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"name":"setHiddenMetadataUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintAmountPerTx","type":"uint256"}],"name":"setMaxMintAmountPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_sale","type":"bool"}],"name":"setSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriSuffix","type":"string"}],"name":"setUriSuffix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost1","type":"uint256"}],"name":"setcost1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost2","type":"uint256"}],"name":"setcost2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxLimitPerWallet","type":"uint256"}],"name":"setmaxLimitPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_supplyLimit","type":"uint256"}],"name":"setsupplyLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"seturi","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supplyLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')),j="0x700e118f70136be911aa520937122cf87b4d177d",C=n(85893),I=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],i=(0,a.useState)(),r=(i[0],i[1],(0,a.useState)()),o=(r[0],r[1],(0,a.useState)()),s=o[0],p=o[1],u=(0,a.useState)(),l=u[0],c=u[1],h=(0,a.useState)(1),k=h[0],I=h[1],O=function(){var e=(0,d.Z)(y().mark((function e(){var a,i,r,o;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={walletconnect:{package:v.Z,options:{chainId:1,rpc:{1:"https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"}}},injected:{display:{logo:"https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg",name:"MetaMask",description:"Connect with MetaMask in your browser"},package:null},"custom-walletlink":{display:{logo:"https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",name:"Coinbase Wallet",description:"Connect to Coinbase Wallet"},options:{appName:"Coinbase",networkUrl:"https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",chainId:1},package:T.ZP,connector:function(){var e=(0,d.Z)(y().mark((function e(t,n){var a,i,r,o,s;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.appName,i=n.networkUrl,r=n.chainId,o=new T.ZP({appName:a}),s=o.makeWeb3Provider(i,r),e.next=5,s.enable();case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},authereum:{package:M()}},i=new(w())({cacheProvider:!1,providerOptions:a,theme:{background:"#fff",main:"#000",secondary:"#000",border:"#fff",hover:"#fea593"}}),!t){e.next=7;break}i.clearCachedProvider(),window.location.reload(),e.next=14;break;case 7:return e.next=9,i.connect();case 9:r=e.sent,o=new f.Q(r),p(o),o.on("disconnect",(function(e){i.clearCachedProvider(),window.location.reload(),n(!1)})),n(!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,d.Z)(y().mark((function e(){var t,n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=s.getSigner(),n=new m.CH(j,_,t),e.next=5,t.getAddress();case 5:if(e.sent,console.log(k,"1000000000000000000000"*k,l),!(l<200)){e.next=12;break}return e.next=10,n.Mint(k);case 10:e.next=15;break;case 12:return console.log("hi","1000000000000000000000"*k),e.next=15,n.Mint(k,{value:("1000000000000000000000"*k).toString()});case 15:N.Am.success("Transaction submitted"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),e.t0.toString().includes("Max supply exceeded!")?N.Am.error("Sold out"):e.t0.toString().includes("Max mint per wallet exceeded!")?N.Am.error("Mint limit"):e.t0.toString().includes("Insufficient funds!")?N.Am.error("Insufficient funds"):N.Am.error("Something went wrong"),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,d.Z)(y().mark((function e(){var t,n,a;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new x.r("https://jsonrpc.canto.nodestake.top/"),n=new m.CH(j,_,t),e.next=4,n.totalSupply();case 4:a=e.sent,c(a.toString());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){z()}),[]),(0,C.jsxs)(A,{children:[(0,C.jsxs)("p",{className:"free",children:["FIRST CANTO PUNKS",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),"FIRST 200 ARE FREE, THEN 10 CANTO"]}),(0,C.jsx)("br",{}),t&&(0,C.jsxs)(g.Z,{size:"small",className:"wrapper",children:[(0,C.jsx)(b.Z,{className:"decrease",onClick:function(){k>1&&k<=5&&I((function(e){return e-1}))},children:"-"}),(0,C.jsx)(b.Z,{className:"quantity",disabled:!0,children:k}),(0,C.jsx)(b.Z,{className:"increase",onClick:function(){k>=1&&k<5&&I((function(e){return e+1}))},children:"+"})]}),(0,C.jsx)("div",{className:"connect",children:t?(0,C.jsx)(b.Z,{variant:"contained",className:"button",onClick:S,children:"MINT"}):(0,C.jsx)(b.Z,{variant:"contained",className:"button",onClick:O,children:"CONNECT WALLET"})}),(0,C.jsxs)("div",{className:"supp",children:[l," / 3333"]}),(0,C.jsx)(N.Ix,{style:{width:"400px"},toastClassName:"dark-toast",position:"top-center",rtl:!1,toastStyle:{backgroundColor:"rgb(20, 255, 83)"}})]})},A=r.ZP.div.withConfig({displayName:"MintButton__Wrapper",componentId:"sc-166rdfs-0"})(['width:100%;padding:0 25px;display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;.supp{font-size:1.5rem;color:#fff;}.free{font-size:1.5rem;color:#fff;text-align:center;letter-spacing:3px;}.mint-info{display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;select{width:200px;background-color:#fff;color:#000;height:30px;border-radius:12px;font-size:1.2rem;font-weight:900;box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,0.09) 0px -3px 5px;outline:2px solid #000;border-radius:15px;option{font-size:1.2rem;font-weight:900;}}}.connect{display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;p{font-size:4rem;color:#fff;}.button{font-size:1.5rem;background-color:transparent;font-size:1.5rem;font-weight:900;border-radius:10px;height:40px;box-shadow:none;text-decoration:underline;letter-spacing:3px;text-decoration-line:underline;text-decoration-thickness:4px;font-family:"Lilita One",cursive;color:#fff;&:hover{background-color:transparent;}}}.progress{p{color:#fff;}}.wrapper{font-size:20px;width:250px;border-radius:5px;border:4px solid #fff;.increase{font-size:30px;width:100%;color:#fff;border-radius:0px 15px 15px 0px;border:none;outline:none;&:hover{border:none;background-color:transparent;}}.decrease{font-size:30px;width:100%;color:#fff;border-radius:15px 0px 0px 15px;border:none;outline:none;&:hover{border:none;background-color:transparent;}}.quantity{font-size:30px;color:#000;width:100%;border:none;color:#fff;outline:none;&:hover{border:none;background-color:transparent;}}}']),O=function(){return(0,C.jsx)(o.zt,{store:l,children:(0,C.jsx)(S,{id:"mint",children:(0,C.jsx)(I,{})})})},S=r.ZP.div.withConfig({displayName:"Mint__Wrapper",componentId:"sc-d52fzb-0"})(["padding:40px 0;height:min-content;z-index:1;margin:0 auto;position:relative;display:flex;flex-direction:column;gap:40px;width:550px;@media only screen and (max-width:575px){width:95%;}"]),z=n(25084),P=function(){return(0,C.jsx)(Z,{children:(0,C.jsxs)("div",{className:"icons",children:[(0,C.jsx)("a",{href:"",className:"social",target:"_blank",rel:"noreferrer",children:(0,C.jsx)("img",{src:"./images/opensea.svg",alt:"",className:"icon1"})}),(0,C.jsx)("a",{href:"",className:"social",target:"_blank",rel:"noreferrer",children:(0,C.jsx)("img",{src:"./images/etherscan.svg",alt:"",className:"icon1"})}),(0,C.jsx)("a",{href:"https://twitter.com/CantoPunksNFT",className:"social",target:"_blank",rel:"noreferrer",children:(0,C.jsx)(z.Z,{className:"icon1"})})]})})},Z=r.ZP.div.withConfig({displayName:"Nav__Wrapper",componentId:"sc-128clzp-0"})(["width:100%;display:flex;justify-content:center;align-items:center;.socials{display:flex;justify-content:center;align-items:center;gap:50px;@media only screen and (max-width:750px){gap:25px;}a{fill:#00c4b1 !important;color:#00c4b1 !important;img{width:100px;@media only screen and (max-width:750px){width:60px;}fill:#fff !important;color:#fff !important;}}}.icons{display:flex;justify-content:center;align-items:center;gap:25px;padding-bottom:15px;fill:#00c4b1 !important;color:#00c4b1 !important;}.icon1{width:60px;font-size:60px;fill:#fff !important;color:#fff !important;transition:all 0.3s;}"]),E=function(){return(0,C.jsx)(F,{children:(0,C.jsx)("img",{src:"./images/punkgi.gif",alt:"",className:"logo"})})},F=r.ZP.div.withConfig({displayName:"Intro__Wrapper",componentId:"sc-cmovrd-0"})(["padding:0 20px;padding-top:50px;width:100%;.logo{width:400px;@media only screen and (max-width:900px){width:100%;}border-radius:12px;display:block;margin:0 auto;}.gif{width:300px;@media only screen and (max-width:900px){width:100%;}display:block;margin:0 auto;border-radius:50%;}"]),L=(r.ZP.div.withConfig({displayName:"FaqItem__Wrapper",componentId:"sc-1pb4qh6-0"})(['.accordion{background-color:#d8d3e9;color:#fff;text-align:left;border-radius:10px;font-family:"Lilita One",cursive;border:2px solid #000;outline:2px solid #000;border-radius:15px;.roadmap-faq{display:flex;flex-direction:column;gap:20px;align-items:flex-start;color:#000;.info{font-size:1.1rem;font-family:"Lilita One",cursive;color:#000;&-header{text-decoration:underline;}}.item{&__header{font-size:1.1rem;font-weight:900;}&__info{}}}.links{display:flex;flex-direction:column;gap:5px;a{color:#000;}}width:800px;@media only screen and (max-width:825px){width:90vw;}box-shadow:rgba(0,0,0,0.25) 0px 54px 55px,rgba(0,0,0,0.12) 0px -12px 30px,rgba(0,0,0,0.12) 0px 4px 6px,rgba(0,0,0,0.17) 0px 12px 13px,rgba(0,0,0,0.09) 0px -3px 5px;.icon{fill:#000;transform:scale(1.5);}.title{font-size:1.5rem;font-family:"Lilita One",cursive;color:#000;}.info{font-size:1.1rem;font-family:"Lilita One",cursive;color:#000;}}']),r.ZP.div.withConfig({displayName:"Faq__Wrapper",componentId:"sc-hp4qs2-0"})(["width:100%;height:max-content;position:relative;padding:50px 25px;color:#fff;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:25px;.header{width:420px;@media only screen and (max-width:450px){width:50%;}padding-bottom:50px;display:block;margin:0 auto;}"]),function(){return(0,C.jsxs)(W,{children:[(0,C.jsx)(E,{}),(0,C.jsx)(O,{}),(0,C.jsx)(P,{})]})}),W=r.ZP.div.withConfig({displayName:"Home__Wrapper",componentId:"sc-1qed54t-0"})(['overflow:hidden;position:relative;min-width:100vw;.text{max-width:800px;margin:0 auto;width:100%;padding:0 20px;display:flex;flex-direction:column;gap:20px;p{color:#fff;font-size:1.4rem;font-family:"Lilita One",cursive;}}.background{z-index:-1;position:absolute;width:100%;left:0;top:0;}max-width:1400px;max-height:max-content;margin:0 auto;.roadmap{padding:0 20px;padding-top:100px;@media only screen and (max-width:600px){padding-top:50px;}margin:0 auto;width:100%;display:flex;justify-content:center;align-items:center;p{color:#fff;font-size:3rem;@media only screen and (max-width:600px){font-size:2rem;}-webkit-text-stroke-width:1px;font-weight:900;text-align:center;}}padding-bottom:50px;']),R=function(){return(0,C.jsxs)(a.Fragment,{children:[(0,C.jsxs)(i.default,{children:[(0,C.jsx)("title",{children:"Canto Punks"}),(0,C.jsx)("link",{rel:"shortcut icon",href:"./images/punk.png"})]}),(0,C.jsx)(L,{})]})}},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(30874)}])},88677:function(){},62808:function(){},36563:function(){},93734:function(){},46601:function(){},89214:function(){},85568:function(){},91026:function(){},60280:function(){},40127:function(){},27790:function(){},52361:function(){},94616:function(){},87500:function(){}},function(e){e.O(0,[774,277,52,151,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
