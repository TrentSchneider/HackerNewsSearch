(this["webpackJsonphacker-news-search"]=this["webpackJsonphacker-news-search"]||[]).push([[0],{34:function(e,t,c){},37:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(26),a=c.n(n),i=(c(33),c(34),c(11)),l=c(1);var h=function(e){return 0===e.searchResult.length?Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"No Results"})}):Object(l.jsx)("div",{children:e.searchResult.map((function(e,t){return Object(l.jsxs)("div",{className:"card my-1 p-2",children:[Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("h4",{className:"card-title",children:e.title})}),Object(l.jsxs)("p",{className:"card-subtitle",children:["Author: ",e.author]})]},t)}))})};var o=function(e){return Object(s.useEffect)((function(){e.API.recent().then((function(t){e.setSearchResult(t.data.hits)})).catch((function(e){return console.log("err",e)}))}),[]),Object(l.jsxs)("div",{className:"mx-1",children:[Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{htmlFor:"searchInput",children:Object(l.jsx)("h2",{children:"Story Search"})}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("button",{type:"submit",className:"btn btn-secondary",onClick:e.handleSearchClick,children:"Search"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"searchInput","aria-describedby":"SearchInputHelp",placeholder:"Enter Text",onChange:function(t){return e.setSearchText(t.target.value)}})]})]}),Object(l.jsxs)("div",{className:"card p-1 mt-4",children:[Object(l.jsx)("h2",{children:"Results:"}),Object(l.jsx)(h,{searchResult:e.searchResult})]})]})},j=c(27),u=c.n(j);var d=function(e){return void 0===e.history||null===e.history?Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"No History"})}):Object(l.jsx)("div",{children:e.history.map((function(e,t){return Object(l.jsxs)("div",{className:"card my-1 p-2",children:[Object(l.jsxs)("h4",{className:"card-title",children:["Search: ",e.search]}),Object(l.jsxs)("p",{className:"card-subtitle",children:["Date: ",u()(e.timestamp).format("M-D-YYYY h:mm:ssa")]})]},t)}))})};var b=function(e){return Object(l.jsxs)("div",{className:"mx-1",children:[Object(l.jsx)("h2",{children:"History"}),Object(l.jsxs)("div",{className:"card p-1 mt-4",children:[Object(l.jsx)("h2",{children:"Results:"}),Object(l.jsx)("button",{className:"btn btn-secondary",onClick:e.clearStorage,children:"Clear History"}),Object(l.jsx)(d,{history:e.history})]})]})},O=c(10);c(37);var m=function(){return Object(l.jsxs)("div",{className:"headerBackground mb-2",children:[Object(l.jsx)(O.b,{to:"/",className:"btn m-1",children:"Home"}),Object(l.jsx)(O.b,{to:"/history",className:"btn m-1",children:"History"})]})},x=c(2),f=c(16),p=c.n(f),g={search:function(e){var t="https://hn.algolia.com/api/v1/search?query="+e+"&tags=story";return p.a.get(t)},recent:function(){return p.a.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")}};c(61);var y=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)([]),a=Object(i.a)(n,2),h=a[0],j=a[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),f=d[0],p=d[1];return Object(s.useEffect)((function(){null===h&&null===localStorage.getItem("history")?j([]):j(JSON.parse(localStorage.getItem("history")))}),[]),Object(s.useEffect)((function(){localStorage.setItem("history",JSON.stringify(h)),console.log("set local",h)}),[h]),Object(l.jsx)("div",{children:Object(l.jsxs)(O.a,{basename:"/HackerNewsSearch",children:[Object(l.jsx)(m,{}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:["/"],children:Object(l.jsx)(o,{API:g,handleSearchClick:function(e){e.preventDefault(),j(null===h?[{search:f,timestamp:new Date}]:h.concat({search:f,timestamp:new Date})),""!==f&&g.search(f).then((function(e){r(e.data.hits)})).catch((function(e){return console.log("err",e)}))},setSearchText:p,searchResult:c,setSearchResult:r})}),Object(l.jsx)(x.a,{exact:!0,path:["/history"],children:Object(l.jsx)(b,{history:h,clearStorage:function(){localStorage.clear(),j([])}})})]})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.9fa7b3db.chunk.js.map