(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),a=n(6),l=n(4),r=n(5),o=n(8),i=n(7),u=n(1),d=n.n(u),h=(n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selected:["Jam"]},e.changeSelectedState=function(t){var n=e.state.selected;if(n.includes(t)){var c=n.filter((function(e){return e!==t}));e.setState({selected:c})}else if(!n.includes(t)){var s=Object(a.a)(n);s.push(t),e.setState({selected:s})}},e.removeAll=function(){e.setState({selected:[]})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selected;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"level",children:[t.length>0?"Selected goods: ".concat(t.join(", ")):"No selected goods",t.length>0&&Object(h.jsx)("button",{type:"button",className:"button is-small is-danger",onClick:function(){return e.removeAll()},children:"Clear all"})]}),Object(h.jsx)("ul",{className:"column",children:b.map((function(n){return Object(h.jsxs)("li",{className:"level\n                  ".concat(t.includes(n)?"has-background-success":""),children:[n,Object(h.jsx)("button",{type:"button",onClick:function(){return e.changeSelectedState(n)},className:"button\n                    is-small\n                  ".concat(t.includes(n)?"is-warning":"is-info"),children:e.state.selected.includes(n)?"Remove":"Select"})]},n)}))})]})}}]),n}(d.a.Component),m=j;s.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ea3e9904.chunk.js.map