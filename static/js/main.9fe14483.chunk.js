(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),o=n(5),l=n(8),r=n(7),d=n(1),i=n.n(d),u=(n(13),n(6)),b=n.n(u),h=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={selectedGood:"Jam"},t.handleAddButton=function(e){t.setState({selectedGood:e})},t.handleClearButton=function(){t.setState({selectedGood:""})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.selectedGood,n=e.length>0;return Object(h.jsxs)("main",{className:"section container",children:[Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[n?"".concat(e," is selected"):"No goods selected",n&&Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){t.handleClearButton()}})]}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:j.map((function(n){return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()("",{"has-background-success-light":n===e}),children:[Object(h.jsx)("td",{children:n===e?Object(h.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return t.handleClearButton},children:"-"}):Object(h.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return t.handleAddButton},children:"+"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:n})]},n)}))})})]})}}]),n}(i.a.Component);a.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9fe14483.chunk.js.map