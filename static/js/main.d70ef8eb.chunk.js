(this.webpackJsonpdirtydonkey=this.webpackJsonpdirtydonkey||[]).push([[0],{256:function(e,t,n){},257:function(e,t,n){},260:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_baseuri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_CAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"reservedQty","type":"uint256"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dev","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getReservedPresaleQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addr","type":"address[]"},{"internalType":"uint256[]","name":"quantities","type":"uint256[]"}],"name":"initPresaleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"presaleKangaroo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"presalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicsale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"publicsaleKangaroo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintCap","type":"uint256"}],"name":"setMintCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setPreSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_presaleSupply","type":"uint256"}],"name":"setPresaleSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_reserved","type":"uint256"}],"name":"setReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setTier1Price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setTier2Price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setTier3Price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tier1Price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tier2Price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tier3Price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePublicsale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"isApproved","type":"bool"},{"internalType":"uint256","name":"reservedQuantity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},274:function(e,t){},276:function(e,t){},278:function(e,t){},282:function(e,t){},309:function(e,t){},311:function(e,t){},320:function(e,t){},322:function(e,t){},332:function(e,t){},334:function(e,t){},451:function(e,t){},453:function(e,t){},460:function(e,t){},461:function(e,t){},479:function(e,t){},555:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(41),r=n.n(i),u=(n(255),n(256),n(257),n(26)),p=n.n(u),c=n(75),l=n(22),o=n(566),d=n(567),y=n(562),m=n(563),b=n(564),j=n(565),f=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=15;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),alert(e.t0.message),e.abrupt("return",{address:""});case 13:e.next=17;break;case 15:return alert("Metamask is not installed!"),e.abrupt("return",{address:""});case 17:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0]});case 9:return e.abrupt("return",{address:""});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:""});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:""});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),h=n(1),O=n(260),T=new((0,n(556).createAlchemyWeb3)("https://eth-mainnet.alchemyapi.io/v2/Zw9_j-IRNVZayx-EmaFt1yW2b4D2_ZxY").eth.Contract)(O,"0xC4dDc55DDA525Abb97B7A09667Ed11577A374824");function w(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(1),r=Object(l.a)(i,2),u=r[0],O=r[1],w=Object(a.useState)(0),g=Object(l.a)(w,2),v=g[0],N=g[1],M=Object(a.useState)(!1),k=Object(l.a)(M,2),P=k[0],_=k[1],A=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,s(t.address);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(){window.ethereum&&window.ethereum.on("accountsChanged",(function(e){e.length>0?s(e[0]):s("")}))}return Object(a.useEffect)((function(){function e(){return(e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n=t.address,s(n),T.methods.totalSupply().call().then((function(e){N(e)})).catch((function(e){return console.log(e)})),C();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"mint-container purple-text",children:[Object(h.jsxs)(o.a,{variant:"dark",expand:"md",className:"container bg-black",children:[Object(h.jsx)(o.a.Brand,{href:"/",children:Object(h.jsx)(d.a.Link,{href:"#home",children:Object(h.jsx)("img",{src:"../images/logo.png",className:"logo-img",alt:""})})}),Object(h.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"mx-4"}),Object(h.jsx)(o.a.Collapse,{id:"basic-navbar-nav",className:"d-md-flex justify-content-between",children:Object(h.jsx)(d.a,{className:"flex-grow-1",children:Object(h.jsxs)("div",{className:"d-flex mx-1 social-link",children:[Object(h.jsx)("div",{className:"text-center text-white mr-3",children:Object(h.jsxs)(y.a,{className:"connect-btn mx-4 d-flex",onClick:A,children:[Object(h.jsx)("img",{className:"mx-2 my-auto",src:"../images/walleticon.png",alt:"walleticon"}),n.length>0?String(n).substring(0,6)+"..."+String(n).substring(38):Object(h.jsx)("span",{children:"Connect"})]})}),Object(h.jsx)("a",{href:"https://discord.gg/",target:"_blank",className:"d-flex align-items-center",rel:"noreferrer",children:Object(h.jsx)("img",{className:"icon-link",src:"../images/discord.png",loading:"lazy",width:"32",alt:""})}),Object(h.jsx)("a",{href:"https://twitter.com/",target:"_blank",className:"d-flex align-items-center px-4",rel:"noreferrer",children:Object(h.jsx)("img",{className:"icon-link",src:"../images/ship.png",loading:"lazy",width:"32",alt:""})}),Object(h.jsx)("a",{href:"https://twitter.com/",target:"_blank",className:"d-flex align-items-center",rel:"noreferrer",children:Object(h.jsx)("img",{className:"icon-link",src:"../images/twitter.png",loading:"lazy",width:"32",alt:""})})]})})})]}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)(b.a,{className:"mt-160",children:[Object(h.jsx)(j.a,{lg:5,md:6,className:"p-3",children:Object(h.jsxs)("div",{className:"mint-box p-5 mx-auto",children:[Object(h.jsx)("h3",{className:"text-center mint-title",children:"Mint NFT"}),P?Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"text-center mint-txt",children:"Transaction in progress"}),Object(h.jsx)("p",{className:"text-center mint-sm-txt text-white mb-4 trans-txt-mt",children:"Your transaction is in progress"}),Object(h.jsxs)("p",{className:"text-center mint-sm-txt text-white trans-txt-mb",children:["Once your transaction is completed, head to",Object(h.jsx)("br",{}),Object(h.jsx)("a",{className:"casino-link",href:"http://spartan.casino/nfts",rel:"noopener noreferrer",target:"_blank",children:"spartan.casino/nfts "}),"to view your NFTs."]}),Object(h.jsx)("a",{href:"http://spartan.casino/nfts",rel:"noopener noreferrer",target:"_blank",children:Object(h.jsx)("button",{className:"mint-btn my-1 w-100 mb-5",children:"View Transactions"})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"text-center mint-txt",children:"10000 NFTs"}),Object(h.jsxs)("div",{className:"mint-div py-3  d-flex justify-content-between",children:[Object(h.jsx)("h4",{className:"mb-0 p-2",children:"Balance"}),Object(h.jsxs)("h4",{className:"mb-0 p-2",children:[v," / 380 Sold Out"]})]}),Object(h.jsxs)("div",{className:"mint-div py-3 d-flex justify-content-between",children:[Object(h.jsx)("h4",{className:"mb-0 p-2",children:"Amount "}),Object(h.jsxs)("div",{className:"mint-number",children:[Object(h.jsx)("button",{className:"min-add",type:"button",onClick:function(){1!==u&&O(u-1)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"-"})}),Object(h.jsx)("h4",{className:"mb-0 mx-3",children:u}),[u<3?Object(h.jsx)("button",{className:"min-add",type:"button",onClick:function(){return O(u+1)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"+"})}):Object(h.jsx)("button",{className:"min-add",type:"button",onClick:function(){return O(u)},children:Object(h.jsx)("span",{"aria-hidden":"true",children:"+"})})]]}),Object(h.jsx)("button",{className:"max-btn",onClick:function(){O(3)},children:"Max"})]}),Object(h.jsxs)("div",{className:"mint-div py-3 d-flex justify-content-between",children:[Object(h.jsx)("h4",{className:"mb-0 p-2",children:"Total"}),[u<=3?Object(h.jsxs)("h4",{className:"mb-0 p-2",children:[5*u/100," ETH"]}):[u<=3?Object(h.jsxs)("h4",{className:"mb-0 p-2",children:[4*u/100," ETH"]}):Object(h.jsxs)("h4",{className:"mb-0 p-2",children:[3*u/100," ETH"]})]]]}),Object(h.jsxs)("div",{className:"mt-5 pt-4",children:[n?Object(h.jsx)("button",{className:"mint-btn my-1 w-100",onClick:function(){return _(!0)},children:"mint"}):Object(h.jsx)("button",{className:"unav-btn my-1 w-100",disabled:!0,children:"unavailable"}),Object(h.jsx)("p",{className:"text-center text-white mb-0",children:"Make sure your metamask wallet is connected"})]})]})]})}),Object(h.jsx)(j.a,{lg:7,md:6,sm:12,className:"text-center",children:Object(h.jsx)("img",{className:"gif-ani",src:"../images/mint.gif",alt:""})})]}),Object(h.jsxs)(b.a,{className:"footer-top",children:[Object(h.jsx)(j.a,{className:"mt-5",md:4,sm:12,children:Object(h.jsxs)("div",{className:"footer-box p-3 text-center mx-auto",children:[Object(h.jsx)("img",{className:"footer-icon",src:"../images/eth.png",alt:""}),Object(h.jsx)("h2",{children:"10,000"}),Object(h.jsx)("h5",{className:"mb-5",children:"NFT Membership Cards"})]})}),Object(h.jsx)(j.a,{className:"mt-5",md:4,sm:12,children:Object(h.jsxs)("div",{className:"footer-box p-3 text-center mx-auto",children:[Object(h.jsx)("img",{className:"footer-icon",src:"../images/wallet.png",alt:""}),Object(h.jsx)("h2",{children:"0.05ETH"}),Object(h.jsx)("h5",{className:"mb-5",children:"Price per NFT"})]})}),Object(h.jsx)(j.a,{className:"mt-5",md:4,sm:12,children:Object(h.jsxs)("div",{className:"footer-box p-3 text-center mx-auto",children:[Object(h.jsx)("img",{className:"footer-icon",src:"../images/opt.png",alt:""}),Object(h.jsx)("h2",{children:"500K+"}),Object(h.jsx)("h5",{className:"mb-5",children:"Potential Options"})]})})]})]})]})}var g=function(){return Object(h.jsx)(a.Fragment,{children:Object(h.jsx)(w,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,568)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),v()}},[[555,1,2]]]);
//# sourceMappingURL=main.d70ef8eb.chunk.js.map