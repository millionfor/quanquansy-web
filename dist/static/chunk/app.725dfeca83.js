(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/r84":function(t,e,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Yz+Y"),l=a.n(r),o=a("iCc5"),s=a.n(o),c=a("V7oC"),u=a.n(c),h=a("FYw3"),m=a.n(h),d=a("mRg0"),f=a.n(d),p=function(t){function e(){var t,a,n,i;s()(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=m()(this,(t=e.__proto__||l()(e)).call.apply(t,[this].concat(o))),n.state={mod:null},i=a,m()(n,i)}return f()(e,t),u()(e,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(t){t.load!==this.props.load&&this.load(t)}},{key:"load",value:function(t){var e=this;this.setState({mod:null}),t.load().then(function(t){e.setState({mod:t.default?t.default:t})})}},{key:"render",value:function(){return this.state.mod?this.props.children(this.state.mod):null}}]),e}(i.a.Component),v=function(){return i.a.createElement("div",null,"Loading...")};e.a=function(t){return function(e){return i.a.createElement(p,{load:t},function(t){return t?i.a.createElement(t,e):i.a.createElement(v,null)})}}},"0EbK":function(t,e,a){"use strict";(function(t){var n=a("q1tI"),i=a.n(n),r=a("jKe7"),l=a("2INN"),o=a("mf+E"),s=a("0cfB"),c=a("/r84"),u=a("oGRg"),h=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(4)]).then(a.bind(null,"kEfb"))}),m=Object(c.a)(function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"3fcI"))}),d=Object(c.a)(function(){return a.e(6).then(a.bind(null,"QMkk"))}),f=Object(c.a)(function(){return a.e(7).then(a.bind(null,"tc2w"))}),p=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,"r/Ic"))}),v=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(9)]).then(a.bind(null,"Vbgy"))}),E=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(10)]).then(a.bind(null,"rxiY"))}),y=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,"/Zgs"))}),b=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(12)]).then(a.bind(null,"IKHv"))}),g=Object(c.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(13)]).then(a.bind(null,"C4Pk"))});e.a=Object(s.hot)(t)(function(){return i.a.createElement("div",null,i.a.createElement(r.a,null,i.a.createElement(l.a,{path:"/",render:function(t){return i.a.createElement(u.a,null,i.a.createElement(r.a,null,i.a.createElement(l.a,{path:"/",exact:!0,component:h}),i.a.createElement(l.a,{path:"/index",component:h}),i.a.createElement(l.a,{path:"/about",component:m}),i.a.createElement(l.a,{path:"/three-years",component:d}),i.a.createElement(l.a,{path:"/about-to-shoot",component:f}),i.a.createElement(l.a,{path:"/landscapes",component:p}),i.a.createElement(l.a,{path:"/night",component:v}),i.a.createElement(l.a,{path:"/deliciousfood",component:E}),i.a.createElement(l.a,{path:"/stilllife",component:y}),i.a.createElement(l.a,{path:"/animal",component:b}),i.a.createElement(l.a,{path:"/people",component:g}),i.a.createElement(l.a,{render:function(){return i.a.createElement(o.a,{to:"/"})}})))}}),i.a.createElement(l.a,{render:function(){return i.a.createElement(o.a,{to:"/"})}})))})}).call(this,a("3UD+")(t))},"0RRa":function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return i});var n="GET_INDEX_DATA",i="GET_CLASS_DATA"},oGRg:function(t,e,a){"use strict";var n=a("Yz+Y"),i=a.n(n),r=a("iCc5"),l=a.n(r),o=a("V7oC"),s=a.n(o),c=a("FYw3"),u=a.n(c),h=a("mRg0"),m=a.n(h),d=a("q1tI"),f=a.n(d),p=a("/MKj"),v=a("wIs1"),E=a("17x9"),y=a.n(E),b=(a("T4fG"),a("uNOt")),g=function(t){function e(t){l()(this,e);var a=u()(this,(e.__proto__||i()(e)).call(this,t));return a.state={navList:[{key:"index",name:"HOME",title:"首页"},{key:"landscapes",name:"LANDSCAPES",title:"风景"},{key:"night",name:"NIGHT",title:"夜景"},{key:"deliciousfood",name:"DELICIOUS FOOD",title:"美食"},{key:"stilllife",name:"STILLLIFE",title:"静物"},{key:"animal",name:"ANIMAL",title:"动物"},{key:"people",name:"PEOPLE",title:"人像"},{key:"about",name:"ABOUT",title:"关于作者"},{key:"about-to-shoot",name:"ABOUT TO SHOOT",title:"关于约拍"},{key:"three-years",name:"3TH ANNIVERSARY",title:"圈圈摄影3年了"}]},a}return m()(e,t),s()(e,[{key:"render",value:function(){var t=this.state.navList,e=this.props.location;return t.map(function(t){return f.a.createElement("li",{key:t.key,className:"/"+t.key===e.pathname?"active":""},f.a.createElement(b.a,{to:{pathname:t.key},key:t.key},t.name))})}}]),e}(d.Component),k=Object(v.a)(g),O=(a("EVdn"),function(t){function e(t){l()(this,e);var a=u()(this,(e.__proto__||i()(e)).call(this,t));return a.state={},a.initCanvas=a.initCanvas.bind(a),a}return m()(e,t),s()(e,[{key:"initCanvas",value:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),a=t.width=window.innerWidth,n=t.height=window.innerHeight-16,i=400,r=[],l=0,o=document.createElement("canvas"),s=o.getContext("2d");o.width=100,o.height=100;var c=o.width/2,u=s.createRadialGradient(c,c,0,c,c,c);function h(t,e){if(arguments.length<2&&(e=t,t=0),t>e){var a=e;e=t,t=a}return Math.floor(Math.random()*(e-t+1))+t}u.addColorStop(.025,"#fff"),u.addColorStop(.1,"hsl("+i+", 61%, 33%)"),u.addColorStop(.25,"hsl("+i+", 64%, 6%)"),u.addColorStop(1,"transparent"),s.fillStyle=u,s.beginPath(),s.arc(c,c,c,0,2*Math.PI),s.fill();var m=function(){this.orbitRadius=h(function(t,e){var a=Math.max(t,e);return Math.round(Math.sqrt(a*a+a*a))/2}(a,n)),this.radius=h(60,this.orbitRadius)/12,this.orbitX=a/2,this.orbitY=n/2,this.timePassed=h(0,400),this.speed=h(this.orbitRadius)/9e4,this.alpha=h(2,10)/10,r[++l]=this};m.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,a=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,n=h(10);1===n&&this.alpha>0?this.alpha-=.05:2===n&&this.alpha<1&&(this.alpha+=.05),e.globalAlpha=this.alpha,e.drawImage(o,t-this.radius/2,a-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var d=0;d<400;d++)new m;!function t(){e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="hsla("+i+", 0%, 0%, 1)",e.fillRect(0,0,a,n),e.globalCompositeOperation="lighter";for(var l=1,o=r.length;l<o;l++)r[l].draw();window.requestAnimationFrame(t)}()}},{key:"componentDidMount",value:function(){this.initCanvas()}},{key:"componentDidUpdate",value:function(){this.initCanvas()}},{key:"render",value:function(){return f.a.createElement("canvas",{id:"canvas"})}}]),e}(d.Component)),C=function(t){function e(t){return l()(this,e),u()(this,(e.__proto__||i()(e)).call(this,t))}return m()(e,t),s()(e,[{key:"render",value:function(){return f.a.createElement("div",{className:"container"},f.a.createElement("div",{className:"nav-module"},f.a.createElement("div",{className:"logo"},f.a.createElement("a",{className:"ico-logo"}," ")),f.a.createElement("div",{className:"fn-clear"}," "),f.a.createElement("div",{className:"nav-list"},f.a.createElement("ul",null,f.a.createElement(k,null))),f.a.createElement("div",{className:"shars"},f.a.createElement("a",{href:"",title:""},f.a.createElement("i",{className:"ico-1"}," ")),f.a.createElement("a",{href:"",title:""},f.a.createElement("i",{className:"ico-2"}," ")),f.a.createElement("a",{href:"",title:""},f.a.createElement("i",{className:"ico-3"}," ")),f.a.createElement("a",{href:"",title:""},f.a.createElement("i",{className:"ico-4"}," "))),f.a.createElement("div",{className:"fn-clear"}," "),f.a.createElement("div",{className:"copyright"},f.a.createElement("span",null,"© COPYRIGHT 2017 QUANQUANSY.COM "))),this.props.children,f.a.createElement(O,null))}}]),e}(d.Component);C.defaultProps={title:"default title"},C.propTypes={title:y.a.string};var D=Object(v.a)(C),N=function(t){function e(t){return l()(this,e),u()(this,(e.__proto__||i()(e)).call(this,t))}return m()(e,t),s()(e,[{key:"render",value:function(){return f.a.createElement(D,{title:this.props.title},this.props.children)}}]),e}(d.Component);e.a=Object(p.connect)(function(t){return{title:t.index.title}})(N)},tjUo:function(t,e,a){"use strict";a.r(e);a("hZTp");var n=a("q1tI"),i=a.n(n),r=a("i8i4"),l=a.n(r),o=a("/MKj"),s=a("oFFJ"),c=(a("EJiy"),a("ANjH")),u=[a("sINF").default],h=(0,c.compose)(c.applyMiddleware.apply(void 0,u))(c.createStore),m=a("YEIV"),d=a.n(m),f=a("m1cH"),p=a.n(f),v=a("P2sY"),E=a.n(v),y=a("0RRa"),b={indexList:[],quanquanInfo:{},title:"quanquansy"},g=d()({},y.b,function(t,e){var a=e.data,n=a.hotBanner,i=a.hotList,r=a.configData;return E()({},t,{indexList:[].concat(p()(n),p()(i)),quanquanInfo:r})});var k={list:[],classifysData:{}},O=d()({},y.a,function(t,e){var a=e.data,n=a.classifysData,i=a.list;return E()({},t,{list:i,classifysData:n})});var C={list:[],classifysData:{}},D=d()({},y.a,function(t,e){var a=e.data,n=a.classifysData,i=a.list;return E()({},t,{list:i,classifysData:n})});var N={list:[],classifysData:{}},I=d()({},y.a,function(t,e){var a=e.data,n=a.classifysData,i=a.list;return E()({},t,{list:i,classifysData:n})});var w={list:[],classifysData:{}},_=d()({},y.a,function(t,e){var a=e.data,n=a.classifysData,i=a.list;return E()({},t,{list:i,classifysData:n})});var P={list:[],classifysData:{}},j=d()({},y.a,function(t,e){var a=e.data,n=a.classifysData,i=a.list;return E()({},t,{list:i,classifysData:n})});var A={list:[],classifysData:{}},R=d()({},y.a,function(t,e){var a=e.data,n=a.classifysData,i=a.list;return E()({},t,{list:i,classifysData:n})});var S={index:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments[1],a=g[e.type];return a?a(t,e):t},landscapes:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments[1],a=O[e.type];return a?a(t,e):t},night:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments[1],a=D[e.type];return a?a(t,e):t},deliciousfood:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments[1],a=I[e.type];return a?a(t,e):t},stilllife:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments[1],a=_[e.type];return a?a(t,e):t},animal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments[1],a=j[e.type];return a?a(t,e):t},people:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments[1],a=R[e.type];return a?a(t,e):t}};var M=h(Object(c.combineReducers)(S)),T=a("0EbK"),L=document.getElementById("app");l.a.render(i.a.createElement(o.Provider,{store:M},i.a.createElement(s.a,{basename:"/"},i.a.createElement(T.a,null))),L)}},[["tjUo",15,3,14]]]);