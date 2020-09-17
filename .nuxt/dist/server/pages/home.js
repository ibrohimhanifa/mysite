exports.ids = [1];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("25e3b0b0", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn{font-weight:700;padding:.5rem 1rem;border-radius:.25rem}.btn-index,.btn-index:hover{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.btn-index:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=f4e2dc02&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"flex items-center justify-between flex-wrap bg-white p-6\">","</nav>",[_vm._ssrNode("<div class=\"flex items-center flex-shrink-0 text-grey mr-6\">","</div>",[_vm._ssrNode("<svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current h-8 w-8 mr-2\"><path d=\"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z\"></path></svg> "),_c('nuxt-link',{attrs:{"to":"/"}},[_c('span',{staticClass:"font-semibold text-xl tracking-tight"},[_vm._v("Ibrohim Hanifa")])])],2),_vm._ssrNode(" <div class=\"block lg:hidden\"><button class=\"flex items-center px-3 py-2 border rounded text-grey-200 border-grey-400 hover:text-black hover:border-black\"><svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current h-3 w-3\"><title>Menu</title> <path d=\"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"></path></svg></button></div> <div class=\"w-full block flex-grow lg:flex lg:items-center lg:w-auto\"><div class=\"text-sm lg:flex-grow\"><a href=\"#responsive-header\" class=\"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4\">Docs</a> <a href=\"#responsive-header\" class=\"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4\">Examples</a> <a href=\"#responsive-header\" class=\"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white\">Blog</a></div> <div><a href=\"#\" class=\"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0\">Download</a></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=template&id=f4e2dc02&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/NavBar.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c1b5047"
  
)

/* harmony default export */ var NavBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=template&id=d2527936&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pageTransition',{attrs:{"name":"default"}},[_c('NavBar'),_vm._v(" "),_c('div',{staticClass:"flex justify-center items-center min-h-screen"},[_c('nuxt-link',{attrs:{"to":"/"}},[_c('button',{staticClass:"btn btn-index text-bold"},[_vm._v("Back")])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home.vue?vue&type=template&id=d2527936&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4adea616"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavBar: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=home.js.map