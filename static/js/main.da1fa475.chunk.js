(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),i=(n(14),n(3)),s=n(4),o=n(6),u=n(5),m=n(7),p=(n(15),function(){return r.a.createElement("h2",null,"Timewatch app")}),d=function(t){return r.a.createElement("h1",null,t.timer)},h=function(t){return r.a.createElement("div",null,r.a.createElement("button",{onClick:t.clickStartStop},t.start?"Start":"Stop"),r.a.createElement("button",{onClick:t.clickReset},"Reset"))},f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).intervalIndex=null,n.state={timer:0,start:!0},n.handleStartStop=function(){n.state.start?(n.intervalIndex=setInterval(function(){n.setState(function(t){return{timer:t.timer+1}})},1e3),n.setState({start:!1})):(clearInterval(n.intervalIndex),n.setState({start:!0}))},n.handleReset=function(){clearInterval(n.intervalIndex),n.setState({timer:0,start:!0})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(d,{timer:this.state.timer}),r.a.createElement(h,{start:this.state.start,clickStartStop:this.handleStartStop,clickReset:this.handleReset}))}}]),e}(a.Component);l.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.da1fa475.chunk.js.map