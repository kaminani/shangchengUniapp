(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/auth"],{"1c8d":function(n,e,t){"use strict";(function(n){t("aead"),t("921b");o(t("66fd"));var e=o(t("b1d2"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"262c":function(n,e,t){"use strict";var o,i=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o}))},"4e52":function(n,e,t){"use strict";var o=t("7227"),i=t.n(o);i.a},"6a34":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{}},onLoad:function(){this.checkToken()},methods:{appLoginqx:function(){n.switchTab({url:"../index/index"})},checkToken:function(){n.getSetting({success:function(e){console.log("授权：",e),e.authSetting["scope.userInfo"]?(console.log("当前已授权"),n.switchTab({url:"../index/index"})):console.log("当前未授权")}})},appLoginWx:function(){var e=this;n.getProvider({service:"oauth",success:function(t){~t.provider.indexOf("weixin")?n.login({provider:"weixin",success:function(t){n.getUserInfo({provider:"weixin",success:function(o){console.log(o,t);var i=t.code,c=o.userInfo.nickName,u=o.userInfo.avatarUrl;e.$api.auth.login(i,u,c),n.switchTab({url:"../index/index"})},fail:function(){n.showToast({title:"微信登录授权失败",icon:"none"})}})},fail:function(){n.showToast({title:"微信登录授权失败",icon:"none"})}}):n.showToast({title:"请先安装微信或升级版本",icon:"none"})}})}}};e.default=t}).call(this,t("543d")["default"])},7227:function(n,e,t){},b1d2:function(n,e,t){"use strict";t.r(e);var o=t("262c"),i=t("e77a");for(var c in i)"default"!==c&&function(n){t.d(e,n,(function(){return i[n]}))}(c);t("4e52");var u,a=t("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=r.exports},e77a:function(n,e,t){"use strict";t.r(e);var o=t("6a34"),i=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a}},[["1c8d","common/runtime","common/vendor"]]]);