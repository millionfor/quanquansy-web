(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{IKHv:function(n,t,e){"use strict";e.r(t);var a=e("Yz+Y"),r=e.n(a),o=e("iCc5"),i=e.n(o),c=e("V7oC"),u=e.n(c),s=e("FYw3"),l=e.n(s),p=e("mRg0"),f=e.n(p),m=e("q1tI"),h=e.n(m),d=e("/MKj"),C=e("CO5U"),_=function(n){function t(n){return i()(this,t),l()(this,(t.__proto__||r()(t)).call(this,n))}return f()(t,n),u()(t,[{key:"componentWillMount",value:function(){this.props.getClassData({classifysEnName:"animal"})}},{key:"render",value:function(){var n=this.props.animalState.list;return h.a.createElement(C.a,{list:n})}}]),t}(m.Component),v=e("ANjH"),w=e("0RRa"),b=e("Nlzp");function g(n){return function(t){Object(b.a)(n).then(function(n){return t({type:w.a,data:n.data,msg:n.msg})}).catch(function(n){return console.log("error ",n)})}}var j=function(n){function t(n){return i()(this,t),l()(this,(t.__proto__||r()(t)).call(this,n))}return f()(t,n),u()(t,[{key:"render",value:function(){return h.a.createElement(_,this.props)}}]),t}(m.Component);t.default=Object(d.connect)(function(n){return{animalState:n.animal}},function(n){return{getClassData:Object(v.bindActionCreators)(g,n)}})(j)}}]);