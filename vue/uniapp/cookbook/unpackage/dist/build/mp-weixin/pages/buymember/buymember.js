(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/buymember/buymember"],{"0adc":function(e,t,n){"use strict";var i=n("48cc"),o=n.n(i);o.a},"24c2":function(e,t,n){"use strict";n.r(t);var i=n("3041"),o=n("4eda");for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("0adc");var r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=c.exports},3041:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"8a3e"))},uAvatarGroup:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-avatar-group/u-avatar-group")]).then(n.bind(null,"d8f6"))},mybuymember:function(){return n.e("components/mybuymember/mybuymember").then(n.bind(null,"a496"))},mypricecard:function(){return n.e("components/mypricecard/mypricecard").then(n.bind(null,"2972"))},mybg:function(){return n.e("components/mybg/mybg").then(n.bind(null,"06bb"))},mypoweritem:function(){return n.e("components/mypoweritem/mypoweritem").then(n.bind(null,"c0ce"))},mypopup:function(){return n.e("components/mypopup/mypopup").then(n.bind(null,"67c3"))}},o=function(){var e=this.$createElement;this._self._c},u=[]},"359c":function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("2eee")),u=i(n("c973")),r=(n("3c43"),i(n("18dd"))),c={data:function(){return{imglist:["http://localhost:4000/public/images/yonghu6@2x.png","http://localhost:4000/public/images/yonghu5@2x.png","http://localhost:4000/public/images/yonghu4@2x.png","http://localhost:4000/public/images/yonghu6@2x.png"],powerlist:[{src:"../../static/bgimages/member2_power1.png",title:"1000+精品名厨菜谱",text:"大咖教学，轻松学会"},{src:"../../static/bgimages/member2_power2.png",title:"每周上新",text:"新菜持续更新中"},{src:"../../static/bgimages/member2_power3.png",title:"会员免广告打扰",text:"体验更流畅"},{src:"../../static/bgimages/member2_power4.png",title:"VIP尊贵身份标识",text:"随时随地、与众不同"}],isshowbuy:!1,islogin:!1,isvip:!1,userInfo:null,topupList:[],curindex:0,month:0,money:0,type:0}},methods:{getNow:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1;n<10&&(n="0"+n);var i=e.getDate();i<10&&(i="0"+i);var o=t+"-"+n+"-"+i;return o},showbuymember:function(){this.isshowbuy=!0},goclose:function(e){this.isshowbuy=e},goback:function(){1==this.type?e.switchTab({url:"/pages/my/my"}):(2==this.type||3==this.type)&&e.switchTab({url:"/pages/member/member"})},gologin:function(){e.switchTab({url:"/pages/my/my"})},checkcard:function(e,t){this.curindex=t,this.month=e.mouth,this.money=e.salePrice},domember:function(){var t=this;if(this.islogin)if(this.isvip){var n=(new Date).getTime(),i=new Date(this.userInfo.vipdate).getTime();console.log(n,i),n<i?e.showModal({title:"提示",content:"您的会员未到期",confirmText:"确认",showCancel:!1,confirmColor:"#39B54A",success:function(){var e=(0,u.default)(o.default.mark((function e(n){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.confirm&&(t.isshowbuy=!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):(console.log(this.month),this.$service.userService.openVip({_id:this.userInfo._id,date:this.month+""}).then(function(){var n=(0,u.default)(o.default.mark((function n(i){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:1==i.code&&(t.isshowbuy=!1,e.showModal({title:"提示",content:"续费成功",confirmText:"确认",showCancel:!1,confirmColor:"#39B54A",success:function(){var n=(0,u.default)(o.default.mark((function n(i){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!i.confirm){n.next=6;break}return n.next=3,r.default.getuserinfo();case 3:t.userInfo=n.sent,t.isvip=t.userInfo.vip,e.navigateTo({url:"/pages/buysucces/buysucces?money=".concat(t.money)});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))}else this.$service.userService.openVip({_id:this.userInfo._id,date:this.month}).then(function(){var n=(0,u.default)(o.default.mark((function n(i){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("openVip",i),1==i.code&&(t.isshowbuy=!1,e.showModal({title:"提示",content:"开通会员成功",confirmText:"确认",showCancel:!1,confirmColor:"#39B54A",success:function(){var n=(0,u.default)(o.default.mark((function n(i){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!i.confirm){n.next=10;break}return console.log("comfirm"),n.next=4,r.default.getuserinfo();case 4:t.userInfo=n.sent,t.isvip=t.userInfo.vip,console.log(t.isvip,"this.this.isvip"),e.navigateTo({url:"/pages/buysucces/buysucces?money=".concat(t.money)}),n.next=11;break;case 10:console.log("cancel");case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());else e.showToast({title:"请登录",mask:!0}),e.switchTab({url:"/pages/my/my"})}},onLoad:function(e){var t=this;return(0,u.default)(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e&&(t.type=e.type),t.islogin=r.default.islogin(),n.next=4,r.default.getuserinfo();case 4:return t.userInfo=n.sent,n.next=7,r.default.isVip();case 7:t.isvip=n.sent,console.log(t.userInfo),t.$service.userService.topupList().then((function(e){200==e.meta.status&&(t.topupList=e.data)}));case 10:case"end":return n.stop()}}),n)})))()}};t.default=c}).call(this,n("543d")["default"])},"409e":function(e,t,n){"use strict";(function(e,t){var i=n("4ea4");n("9b8f");i(n("66fd"));var o=i(n("24c2"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"48cc":function(e,t,n){},"4eda":function(e,t,n){"use strict";n.r(t);var i=n("359c"),o=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=o.a}},[["409e","common/runtime","common/vendor"]]]);