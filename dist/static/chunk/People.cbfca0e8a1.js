(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{C4Pk:function(t,n,e){"use strict";e.r(n);var o=e("Yz+Y"),r=e.n(o),a=e("iCc5"),c=e.n(a),i=e("V7oC"),u=e.n(i),s=e("FYw3"),p=e.n(s),l=e("mRg0"),f=e.n(l),h=e("q1tI"),m=e.n(h),C=e("/MKj"),d=e("CO5U"),_=function(t){function n(t){return c()(this,n),p()(this,(n.__proto__||r()(n)).call(this,t))}return f()(n,t),u()(n,[{key:"componentWillMount",value:function(){this.props.getClassData({classifysenname:"people"})}},{key:"render",value:function(){var t=this.props.peopleState.list;return m.a.createElement(d.a,{list:t})}}]),n}(h.Component),w=e("ANjH"),b=e("0RRa"),g=e("Nlzp");function k(t){return function(n){Object(g.a)(t).then(function(t){return n({type:b.a,data:t.data,msg:t.msg})}).catch(function(t){return console.log("error ",t)})}}var v=function(t){function n(t){return c()(this,n),p()(this,(n.__proto__||r()(n)).call(this,t))}return f()(n,t),u()(n,[{key:"render",value:function(){return m.a.createElement(_,this.props)}}]),n}(h.Component);n.default=Object(C.connect)(function(t){return{peopleState:t.people}},function(t){return{getClassData:Object(w.bindActionCreators)(k,t)}})(v)}}]);