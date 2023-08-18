(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mytabspersonal/mytabspersonal"],{1005:function(n,t,e){"use strict";e.r(t);var u=e("224d"),r=e("d845");for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("3499");var a=e("f0c5"),o=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,"0a90f6a8",null,!1,u["a"],void 0);t["default"]=o.exports},"224d":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uTabs:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(e.bind(null,"54e5"))}},r=function(){var n=this.$createElement;this._self._c},i=[]},3499:function(n,t,e){"use strict";var u=e("5e43"),r=e.n(u);r.a},"5e43":function(n,t,e){},b757:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={props:{tabslist:{type:Array,default:function(){return[]}},curindex:{type:Number,default:0}},name:"mytabs",data:function(){return{current:0}},watch:{curindex:{handler:function(n,t){console.log("curindex",n,t),this.current=this.curindex},immediate:!0}},options:{styleIsolation:"shared"},methods:{click:function(n){this.current=n.index,this.$emit("change",n)}}};t.default=u},d845:function(n,t,e){"use strict";e.r(t);var u=e("b757"),r=e.n(u);for(var i in u)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mytabspersonal/mytabspersonal-create-component',
    {
        'components/mytabspersonal/mytabspersonal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1005"))
        })
    },
    [['components/mytabspersonal/mytabspersonal-create-component']]
]);
