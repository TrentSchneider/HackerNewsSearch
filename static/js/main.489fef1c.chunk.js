(this["webpackJsonphacker-news-search"]=this["webpackJsonphacker-news-search"]||[]).push([[0],{34:function(e,t,c){},37:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),a=c(26),n=c.n(a),l=(c(33),c(34),c(11)),i=c(0);var h=function(e){return 0===e.searchResult.length?Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"No Results"})}):(console.log("results",e.searchResult),Object(i.jsx)("div",{children:e.searchResult.map((function(e,t){return null===e.url?Object(i.jsxs)("div",{className:"card my-1 p-2",children:[Object(i.jsx)("h3",{className:"card-title",children:e.title}),Object(i.jsxs)("p",{className:"card-subtitle",children:["Author: ",e.author]})]},t):Object(i.jsxs)("div",{className:"card my-1 p-2",children:[Object(i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("h3",{className:"card-title",children:e.title})}),Object(i.jsxs)("p",{className:"card-subtitle",children:["Author: ",e.author]})]},t)}))}))};var o=function(e){return Object(s.useEffect)((function(){e.API.recent().then((function(t){e.setSearchResult(t.data.hits)})).catch((function(e){return console.log("err",e)}))}),[]),Object(i.jsxs)("div",{className:"mx-1",children:[Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{htmlFor:"searchInput",children:Object(i.jsx)("h1",{children:"Story Search"})}),Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:e.handleSearchClick,children:"Search"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"searchInput","aria-describedby":"SearchInputHelp",placeholder:"Enter Text",onChange:function(t){return e.setSearchText(t.target.value)}})]})]}),Object(i.jsxs)("div",{className:"card p-1 mt-4",children:[Object(i.jsx)("h2",{children:"Results:"}),Object(i.jsx)(h,{searchResult:e.searchResult})]})]})},j=c(27),u=c.n(j);var d=function(e){return void 0===e.history||null===e.history||0===e.history.length?Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"No History"})}):Object(i.jsx)("div",{children:e.history.map((function(e,t){return Object(i.jsxs)("div",{className:"card my-1 p-2",children:[Object(i.jsxs)("h3",{className:"card-title",children:["Search: ",e.search]}),Object(i.jsxs)("p",{className:"card-subtitle",children:["Date: ",u()(e.timestamp).format("M-D-YYYY h:mm:ssa")]})]},t)}))})};var b=function(e){return Object(i.jsxs)("div",{className:"mx-1",children:[Object(i.jsx)("h1",{children:"History"}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:e.clearStorage,children:"Clear History"})}),Object(i.jsxs)("div",{className:"card p-1 mt-4",children:[Object(i.jsx)("h2",{children:"Results:"}),Object(i.jsx)(d,{history:e.history})]})]})},O=c(10);c(37);var x=function(){return Object(i.jsxs)("div",{className:"headerBackground mb-2",children:[Object(i.jsx)(O.b,{to:"/",className:"btn btn-success m-1",children:"Home"}),Object(i.jsx)(O.b,{to:"/history",className:"btn btn-success m-1",children:"History"})]})},m=c(2),f=c(16),p=c.n(f),y={search:function(e){var t="https://hn.algolia.com/api/v1/search?query="+e+"&tags=story";return p.a.get(t)},recent:function(){return p.a.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")}};c(61);var g=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)([]),n=Object(l.a)(a,2),h=n[0],j=n[1],u=Object(s.useState)(""),d=Object(l.a)(u,2),f=d[0],p=d[1];return Object(s.useEffect)((function(){j(JSON.parse(localStorage.getItem("history")))}),[]),Object(s.useEffect)((function(){localStorage.setItem("history",JSON.stringify(h)),console.log("set local",h)}),[h]),Object(i.jsx)("div",{children:Object(i.jsxs)(O.a,{basename:"/HackerNewsSearch",children:[Object(i.jsx)(x,{}),Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:["/"],children:Object(i.jsx)(o,{API:y,handleSearchClick:function(e){e.preventDefault(),j(null===h?[{search:f,timestamp:new Date}]:h.concat({search:f,timestamp:new Date})),""!==f&&y.search(f).then((function(e){r(e.data.hits)})).catch((function(e){return console.log("err",e)}))},setSearchText:p,searchResult:c,setSearchResult:r})}),Object(i.jsx)(m.a,{exact:!0,path:["/history"],children:Object(i.jsx)(b,{history:h,clearStorage:function(){localStorage.clear(),j([])}})})]})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))};n.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.489fef1c.chunk.js.map