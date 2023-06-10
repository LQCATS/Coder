(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/uview-ui/components/u-avatar-group/u-avatar-group"],{

/***/ 354:
/*!*****************************************************************************************************************!*\
  !*** D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-avatar-group.vue?vue&type=template&id=905174ee&scoped=true& */ 355);
/* harmony import */ var _u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-avatar-group.vue?vue&type=script&lang=js& */ 357);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-avatar-group.vue?vue&type=style&index=0&id=905174ee&lang=scss&scoped=true& */ 360);
/* harmony import */ var _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "905174ee",
  null,
  false,
  _u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 355:
/*!************************************************************************************************************************************************************!*\
  !*** D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue?vue&type=template&id=905174ee&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-avatar-group.vue?vue&type=template&id=905174ee&scoped=true& */ 356);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_template_id_905174ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 356:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue?vue&type=template&id=905174ee&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uAvatar: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-avatar/u-avatar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-avatar/u-avatar.vue */ 479))
    },
    "u-Text": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--text/u--text */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--text/u--text")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--text/u--text.vue */ 433))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.showUrl, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = !(index === 0) ? _vm.$u.addUnit(-_vm.size * _vm.gap) : null
    var g1 = _vm.$u.test.object(item)
    var g2 =
      _vm.showMore &&
      index === _vm.showUrl.length - 1 &&
      (_vm.urls.length > _vm.maxCount || _vm.extraValue > 0)
    var g3 = g2 ? _vm.extraValue || _vm.urls.length - _vm.showUrl.length : null
    return {
      $orig: $orig,
      g0: g0,
      g1: g1,
      g2: g2,
      g3: g3,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 357:
/*!******************************************************************************************************************************************!*\
  !*** D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-avatar-group.vue?vue&type=script&lang=js& */ 358);
/* harmony import */ var _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 358:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 359));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * AvatarGroup  头像组
 * @description 本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。
 * @tutorial https://www.uviewui.com/components/avatar.html
 * 
 * @property {Array}           urls     头像图片组 （默认 [] ）
 * @property {String | Number} maxCount 最多展示的头像数量 （ 默认 5 ）
 * @property {String}          shape    头像形状（ 'circle' (默认) | 'square' ）
 * @property {String}          mode     图片裁剪模式（默认 'scaleToFill' ）
 * @property {Boolean}         showMore 超出maxCount时是否显示查看更多的提示 （默认 true ）
 * @property {String | Number} size      头像大小 （默认 40 ）
 * @property {String}          keyName  指定从数组的对象元素中读取哪个属性作为图片地址 
 * @property {String | Number} gap      头像之间的遮挡比例（0.4代表遮挡40%）  （默认 0.5 ）
 * @property {String | Number} extraValue  需额外显示的值
 * @event    {Function}        showMore 头像组更多点击
 * @example  <u-avatar-group:urls="urls" size="35" gap="0.4" ></u-avatar-group:urls=>
 */
var _default = {
  name: 'u-avatar-group',
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default],
  data: function data() {
    return {};
  },
  computed: {
    showUrl: function showUrl() {
      return this.urls.slice(0, this.maxCount);
    }
  },
  methods: {
    clickHandler: function clickHandler() {
      this.$emit('showMore');
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 360:
/*!***************************************************************************************************************************************************************************!*\
  !*** D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue?vue&type=style&index=0&id=905174ee&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../软件/chormexiazai/HBuilderX.3.8.3.20230526/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-avatar-group.vue?vue&type=style&index=0&id=905174ee&lang=scss&scoped=true& */ 361);
/* harmony import */ var _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chormexiazai_HBuilderX_3_8_3_20230526_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_avatar_group_vue_vue_type_style_index_0_id_905174ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 361:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/web/vscode/Coder/vue/uniapp/cookbook/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.vue?vue&type=style&index=0&id=905174ee&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-avatar-group/u-avatar-group-create-component',
    {
        'uni_modules/uview-ui/components/u-avatar-group/u-avatar-group-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(354))
        })
    },
    [['uni_modules/uview-ui/components/u-avatar-group/u-avatar-group-create-component']]
]);
