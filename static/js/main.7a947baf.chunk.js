(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),c=n.n(a),s=n(1),l=n(2),u=n(3),i=n(5),d=n(4),m=n(6),f=(n(14),[1,2,3,4,5,6,7,8,9,10]),g=function(e){var t=e.onselect,n=e.currentSelected;return o.a.createElement("form",{action:"#"},o.a.createElement("select",{value:n,className:"form-control",onChange:t},o.a.createElement("option",{desabled:"true",value:"length"},"How long good name"),f.map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))))};g.defaultProps={onselect:function(){},currentSelected:0};n(15);var h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.reverse,n=e.sort,r=e.sortLength,a=e.onselect,c=e.currentSelected,s=e.reset;return o.a.createElement("div",{className:"jumbotron"},o.a.createElement("button",{type:"button",onClick:t,className:"btn btn-danger btn-sm "},"Reverse"),o.a.createElement("button",{type:"button",onClick:n,className:"btn btn-danger btn-sm "},"Sort A-Z"),o.a.createElement("button",{type:"button",onClick:r,className:"btn btn-danger btn-sm "},"Sort by Length"),o.a.createElement(g,{onselect:a,currentSelected:c}),o.a.createElement("button",{type:"button",onClick:s,className:"btn btn-danger btn-sm "},"Reset"))}}]),t}(o.a.PureComponent);h.defaultProps={reverse:function(){},sort:function(){},sortLength:function(){},onselect:function(){},currentSelected:"",reset:function(){}};n(16),n(17);var b=function(e){var t=e.good;return o.a.createElement("li",{className:"list-group-item"},t)};b.defaultProps={good:""};var p=function(e){var t=e.goods;return o.a.createElement("ul",{className:"list-group"},t.map((function(e){return o.a.createElement(b,{good:e,key:e})})))};p.defaultProps={goods:[]};n(18),n(19);var S=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={initialGoods:[],goods:[],isStarted:!1,currentSelected:"length"},n.handleStart=function(){n.setState((function(e){return{initialGoods:[].concat(S),goods:[].concat(S),isStarted:!0}}))},n.handleReverse=function(){n.setState((function(e){return{goods:Object(s.a)(e.goods).reverse()}}))},n.handleReset=function(){n.setState((function(e){return{goods:Object(s.a)(e.initialGoods),currentSelected:"length"}}))},n.handleSortByLength=function(){n.setState((function(e){return{goods:Object(s.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},n.handleSelect=function(e){var t="length"===e.target.value?1:e.target.value;n.setState((function(e){return{goods:Object(s.a)(e.initialGoods).filter((function(e){return e.length>=t})),currentSelected:t}}))},n.handleSort=function(){n.setState((function(e){return{goods:Object(s.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.goods,r=t.isStarted,a=t.currentSelected;return o.a.createElement("div",{className:"App container"},o.a.createElement("h1",null,"Goods"),r?o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{reset:this.handleReset,sort:this.handleSort,reverse:this.handleReverse,sortLength:this.handleSortByLength,onselect:function(t){return e.handleSelect(t)},currentSelected:a}),o.a.createElement(p,{goods:n})):o.a.createElement("button",{type:"button",onClick:this.handleStart,className:"btn btn-danger btn-sm "},"Start"))}}]),t}(o.a.Component);c.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7a947baf.chunk.js.map