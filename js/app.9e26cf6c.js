(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"052a":function(t,e,n){},"1c67":function(t,e,n){"use strict";var o=n("e5d5"),a=n.n(o);a.a},"27b9":function(t,e,n){"use strict";var o=n("4ef8"),a=n.n(o);a.a},"452d":function(t,e,n){},"4e42":function(t,e,n){"use strict";var o=n("eedd"),a=n.n(o);a.a},"4ef8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,a,r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("message",{attrs:{msg:t.msg}}),n("TodoForm")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("h1",[t._v(t._s(t.msg))])])},u=[],l={name:"Message",props:{msg:String}},d=l,f=(n("a66c"),n("2877")),p=Object(f["a"])(d,c,u,!1,null,"6e7a5484",null),m=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-container"},[n("form",{staticClass:"todo-form",attrs:{name:"todo"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],staticClass:"todo-input",attrs:{type:"text",placeholder:"Type todo here..."},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}}),n("button",{staticClass:"todo-add button",attrs:{disabled:!t.todo,type:"submit"},on:{click:function(e){return e.preventDefault(),t.setTodo(t.todo)}}},[t._v("Add")])]),t.todoArray.length>0?n("ListTodo",{attrs:{todoArray:t.todoArray},on:{changed:function(e){return t.refreshLocals()}}}):t._e()],1)},g=[],b=(n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{attrs:{modalKey:t.modalKey,"modal-title":"Delete todo # "},on:{confirmed:function(e){return t.removeTodo(t.modalKey)}},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}}),n("radio-button",{attrs:{activeIndex:t.doneFilter,statistic:[t.todoArray.length,t.alreadyDone,t.todoArray.length-t.alreadyDone]},on:{"state-change":function(e){return t.doneFilter=e}}}),n("DraggableExtended",{style:{counterReset:"my-awesome-counter "+t.pageIndex*t.pageSize},attrs:{tag:"ol","ghost-class":"moving-item",filter:".action-button",animation:200},model:{value:t.todoArray,callback:function(e){t.todoArray=e},expression:"todoArray"}},[n("transition-group",{attrs:{name:"list"}},t._l(t.paginatedArray,(function(e,o){return n("li",{key:e.id,class:"list-item "+(o%2?"even":"odd")},[n("p",{staticClass:"todo-item"},[t._v(t._s(e.todo))]),n("CloseButton",{staticClass:"list-close action-button",nativeOn:{click:function(n){return t.openModal(e.id)}}}),n("DoneCheck",{key:o,staticClass:"checkbox action-button",attrs:{checked:e.done},nativeOn:{click:function(n){return n.stopPropagation(),t.checkDone(e.id)}}})],1)})),0)],1),t.pages-1>0?n("paginator",{attrs:{pages:t.pages,activePage:t.pageIndex},on:{"go-page":function(e){return t.pageIndex=e}}}):t._e()],1)}),h=[],y=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("c975"),n("d81d"),n("fb6a"),n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{checked:t.checked}})}),x=[],_={name:"DoneCheck",props:{checked:Boolean}},A=_,k=(n("1c67"),Object(f["a"])(A,y,x,!1,null,"3a9a5018",null)),C=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close rounded black"})},P=[],T={name:"CloseButton"},w=T,j=(n("27b9"),Object(f["a"])(w,O,P,!1,null,"14412f57",null)),S=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal",on:{click:function(e){return t.closeModal()}}},[n("div",{staticClass:"modal__container",on:{click:function(t){t.stopPropagation()}}},[n("h2",{staticClass:"modal__title"},[t._v(t._s(t.modalTitle+(t.modalKey+1)))]),n("CloseButton",{staticClass:"modal-close",nativeOn:{click:function(e){return t.closeModal()}}}),n("button",{staticClass:"ok-button button",on:{click:t.confirmAction}},[t._v("OK")])],1)])},M=[],D=(n("a9e3"),{name:"Modal",props:{modalTitle:String,modalKey:Number,value:{required:!0}},components:{CloseButton:S},methods:{closeModal:function(){this.$emit("input",!this.value)},confirmAction:function(){this.$emit("confirmed",this.modalKey),this.closeModal()}}}),I=D,E=(n("fc5b"),Object(f["a"])(I,$,M,!1,null,"769a9126",null)),K=E.exports,N=n("310e"),B=n.n(N),F={extends:B.a,props:{myProp:String}},G=F,L=Object(f["a"])(G,o,a,!1,null,null,null),z=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-block"},[n("button",{staticClass:"filter-button button",attrs:{active:0==t.activeIndex},on:{click:function(e){t.index=0}}},[t._v(" All "),n("box-number",{attrs:{value:t.statistic[0]}})],1),n("button",{staticClass:"filter-button button",attrs:{active:1==t.activeIndex},on:{click:function(e){t.index=1}}},[t._v(" Done "),n("box-number",{attrs:{value:t.statistic[1]}})],1),n("button",{staticClass:"filter-button button",attrs:{active:2==t.activeIndex},on:{click:function(e){t.index=2}}},[t._v(" Left "),n("box-number",{attrs:{value:t.statistic[2]}})],1)])},q=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-wrapper"},[n("p",{staticClass:"box-number-p box-number"},[t._v("("+t._s(t.value)+")")])])},H=[],Q={name:"BoxNumber",props:{value:{type:Number,required:!0}}},U=Q,V=(n("59c5"),Object(f["a"])(U,J,H,!1,null,"7bb39638",null)),W=V.exports,X={name:"RadioButton",props:{activeIndex:Number,statistic:Array},data:function(){return{index:this.activeIndex}},components:{BoxNumber:W},watch:{index:function(){this.$emit("state-change",this.index)}}},Y=X,Z=(n("4e42"),Object(f["a"])(Y,R,q,!1,null,"bf8080ac",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paginator-container"},[n("button",{staticClass:"button-prev paginator-button button",attrs:{name:"previous",disabled:!t.activePage},on:{click:function(e){t.pageToGo=t.activePage?t.activePage-1:0}}},[t._v(" < Prev ")]),t.pages>2?n("button",{staticClass:"button-first paginator-button button",attrs:{name:"first",active:0==t.activePage},on:{click:function(e){t.pageToGo=0}}},[t._v(" First ")]):t._e(),t.pages>2?n("div",{staticClass:"pages-wrapper"},t._l(t.pages-2,(function(e){return n("button",{key:e,staticClass:"button-page paginator-button button",attrs:{active:e==t.activePage},on:{click:function(n){t.pageToGo=e}}},[t._v(" "+t._s(e+1)+" ")])})),0):t._e(),t.pages>2?n("button",{staticClass:"button-last paginator-button button",attrs:{name:"last",active:t.activePage==t.pages-1},on:{click:function(e){t.pageToGo=t.pages-1}}},[t._v(" Last ("+t._s(t.pages)+") ")]):t._e(),n("button",{staticClass:"button-next paginator-button button",attrs:{name:"next",disabled:t.activePage==t.pages-1},on:{click:function(e){t.pageToGo=t.activePage!=t.pages-1?t.activePage+1:t.pages-1}}},[t._v(" Next > ")])])},nt=[],ot={name:"Paginator",props:{pages:{type:Number,default:0},activePage:{type:Number,default:0}},data:function(){return{key:Number,pageToGo:0}},watch:{pageToGo:function(){this.$emit("go-page",this.pageToGo)}}},at=ot,rt=(n("f525"),Object(f["a"])(at,et,nt,!1,null,"3a0ea7ef",null)),it=rt.exports,st={name:"ListTodo",props:{todoArray:Array},data:function(){return{modalOpen:!1,modalKey:null,elementKey:null,doneFilter:0,pageSize:10,pageIndex:null,page:null}},components:{DoneCheck:C,CloseButton:S,Modal:K,DraggableExtended:z,RadioButton:tt,Paginator:it},methods:{removeTodo:function(t){var e=this;function n(t){var n=e.todoArray.map((function(t){return t.id})).indexOf(t);e.todoArray.splice(n,1)}setTimeout((function(){n(t)}),0)},checkDone:function(t){var e=this,n=e.todoArray.map((function(t){return t.id})).indexOf(t);e.todoArray[n].done=!e.todoArray[n].done,this.$emit("changed")},openModal:function(t){this.modalKey=t,this.modalOpen=!this.modalOpen}},watch:{filteredArray:function(){this.pageIndex*this.pageSize>=this.filteredArray.length&&(this.pageIndex=0)}},computed:{alreadyDone:function(){var t=0,e=!0,n=!1,o=void 0;try{for(var a,r=this.todoArray[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var i=a.value;i.done&&t++}}catch(s){n=!0,o=s}finally{try{e||null==r.return||r.return()}finally{if(n)throw o}}return 0==this.todoArray.length&&(t=!1),t},filteredArray:function(){switch(this.doneFilter){case 1:return this.todoArray.filter((function(t){return t.done}));case 2:return this.todoArray.filter((function(t){return!t.done}));default:return this.todoArray}},paginatedArray:function(){return this.filteredArray.slice(this.pageIndex*this.pageSize,(this.pageIndex+1)*this.pageSize)},pages:function(){return Math.ceil(this.filteredArray.length/this.pageSize)}}},ct=st,ut=(n("afc6"),Object(f["a"])(ct,b,h,!1,null,"e1430940",null)),lt=ut.exports,dt={name:"Form",data:function(){return{todo:"",todoArray:[]}},components:{ListTodo:lt},methods:{setTodo:function(t){var e=function(t){return t.split("").reduce((function(t,e){return t=(t<<5)-t+e.charCodeAt(0),t&t}),0)},n={id:Math.abs(e(t+Math.random())),todo:t,done:!1};this.todoArray.push(n),this.todo=""},refreshLocals:function(){this.$localStorage.set("todo",this.todoArray)}},watch:{todoArray:function(){this.$localStorage.set("todo",this.todoArray)}},beforeMount:function(){this.$localStorage.hasKey("todo")&&(this.todoArray=this.$localStorage.get("todo"))}},ft=dt,pt=(n("c4e7"),Object(f["a"])(ft,v,g,!1,null,null,null)),mt=pt.exports,vt={name:"App",data:function(){return{msg:"Simple ToDo list"}},components:{Message:m,TodoForm:mt}},gt=vt,bt=(n("5c0b"),Object(f["a"])(gt,i,s,!1,null,null,null)),ht=bt.exports,yt=n("80f1"),xt=n.n(yt);r["a"].use(xt.a,{prefix:"todo_list_",drivers:"local"}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(ht)}}).$mount("#app")},"574e":function(t,e,n){},"59c5":function(t,e,n){"use strict";var o=n("574e"),a=n.n(o);a.a},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"86b4":function(t,e,n){},"9c0c":function(t,e,n){},a66c:function(t,e,n){"use strict";var o=n("452d"),a=n.n(o);a.a},afc6:function(t,e,n){"use strict";var o=n("ce08"),a=n.n(o);a.a},c4e7:function(t,e,n){"use strict";var o=n("86b4"),a=n.n(o);a.a},ce08:function(t,e,n){},e5d5:function(t,e,n){},eedd:function(t,e,n){},f081:function(t,e,n){},f525:function(t,e,n){"use strict";var o=n("f081"),a=n.n(o);a.a},fc5b:function(t,e,n){"use strict";var o=n("052a"),a=n.n(o);a.a}});
//# sourceMappingURL=app.9e26cf6c.js.map