/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Beyond Wonderland.woff2 */ "./src/fonts/Beyond Wonderland.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Beyond Wonderland.woff */ "./src/fonts/Beyond Wonderland.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/GreatVibes-Regular.woff2 */ "./src/fonts/GreatVibes-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/GreatVibes-Regular.woff */ "./src/fonts/GreatVibes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/oak-texture.jpg */ "./src/images/oak-texture.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* stylesheet for all pages */
@font-face{
    font-family: "Beyond Wonderland";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
}

@font-face{
    font-family: "Great Vibes";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"),
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
}

:root {
    --base-background-color: #AF8F6F;
    --content-background-color: #543310;
    --wood-texture: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    --white-text-color: white;
    --box-shadow-settings: 2px 2px 2px black;
}

h1, h2, h3, p, div{
    padding:0;
    margin:0;
}

p{
    min-width: 50ch;
    max-width: 80ch;
}

body{
    background-color: var(--base-background-color);
    margin:0;
}

/* style buttons */
nav {
    display: flex;
    justify-content: center;
    gap: max(40px, 5vw);
}

header{
    margin: 20px;
}

header .button{
    background: var(--wood-texture);
    border: 2px solid var(--white-text-color);
    padding: 10px 40px;
    color: var(--white-text-color);
    font-size: 24px;
    box-shadow: var(--box-shadow-settings);
}

/* every page will use the same content backing and page layout*/
.page{
    margin: 50px;
    margin-top: 0;
    display:flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    color: var(--white-text-color);
}

.page > * {
    background: var(--content-background-color);
    border-width: 5px;
    border-style: solid;
    border-image: var(--wood-texture) round;
    border-image-slice: 50;
    box-shadow: var(--box-shadow-settings);
    padding: 8px;
    min-width: min-content;
}

/* style home page */
.home.page .header.area{
    min-width: 505px;
}

.home.page .header h1{
    font-family:"Beyond Wonderland";
    text-align: center;
    font-weight:normal;
    font-size: 50px;
}

.home.page .intro.area {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    gap: 10px;
    min-width: 591px;
}

.home.page .intro.area .intro.text2, .home.page .intro.area .cheers{
    text-align:center;
}

.home.page .intro.area .cheers{
    font-family:"Great Vibes";
    font-size: 50px;
}

.home.page .description.area{
    display:flex;
    justify-content: space-around;
    gap: 20px;
    min-width: 788px;
}

.home.page .description.text{
    display:grid;
    grid-auto-rows: max(30px,min-content) 50px;
    gap: 3px;
}


.home.page .description.area h2{
    font-size: 30px;
    min-width:269px;
}

.home.page .description.area p{
    font-size: 16px;
    min-width:269px;
}

.home.page .description.area img{
    height: 255px;
    justify-self: end;
}

/* styling menu page, note that background, border, and font color are styled earlier*/
.menu.page .header.area h1{
    text-align: center;
    font-weight:normal;
    font-size: 40px;
}

.menu.page .header.area{
    width: min-content;
    padding: 0 70px;
    align-self: center;
}

/* override general page content background so that we can apply it to each menu item individually */
.menu.page .meal.area, .menu.page .drink.area {
    padding:0;
    background: none;
    border: none;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 23px;
    box-shadow: none;
}

.menu.page .item.area{
    background: var(--content-background-color);
    border-width: 5px;
    border-style: solid;
    border-image: var(--wood-texture) round;
    border-image-slice: 50;
    box-shadow: var(--box-shadow-settings);
    padding: 8px;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 20px;
    padding-top: 10px;
}

.menu.page p{
    min-width: 0;
    margin-bottom: 5px;
}

.menu.page img{
    width: 300px;
    height: 300px;
    object-fit: cover;
}

/* stylize about page */
.about.page .bio.area{
    display:flex;
    flex-direction:column;
    align-items: center;
}

.about.page .contact-form{
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: repeat(3,min-content);
    grid-auto-rows: min-content; 
    align-items: center;
    margin: 10px;
    gap: 20px;
}

.about.page .contact-form input, .about.page .contact-form textarea{
    border: none;
    border-radius: 8px;
    padding: 8px 20px;
}

.about.page .contact-form textarea{
    font-family: Arial, Helvetica, sans-serif;
    resize: vertical;
}

.about.page .contact-form .submit.button{
    grid-column: 2/3;
    width: 80px;
    justify-self: end;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;IACI,gCAAgC;IAChC;8DACyD;AAC7D;;AAEA;IACI,0BAA0B;IAC1B;8DACyD;AAC7D;;AAEA;IACI,gCAAgC;IAChC,mCAAmC;IACnC,uDAA6C;IAC7C,yBAAyB;IACzB,wCAAwC;AAC5C;;AAEA;IACI,SAAS;IACT,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,8CAA8C;IAC9C,QAAQ;AACZ;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,yCAAyC;IACzC,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;IACf,sCAAsC;AAC1C;;AAEA,gEAAgE;AAChE;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,oBAAoB;IACpB,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,2CAA2C;IAC3C,iBAAiB;IACjB,mBAAmB;IACnB,uCAAuC;IACvC,sBAAsB;IACtB,sCAAsC;IACtC,YAAY;IACZ,sBAAsB;AAC1B;;AAEA,oBAAoB;AACpB;IACI,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,QAAQ;AACZ;;;AAGA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA,sFAAsF;AACtF;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA,oGAAoG;AACpG;IACI,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,2DAA2D;IAC3D,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,2CAA2C;IAC3C,iBAAiB;IACjB,mBAAmB;IACnB,uCAAuC;IACvC,sBAAsB;IACtB,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;;AAEA,uBAAuB;AACvB;IACI,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,yCAAyC;IACzC,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["/* stylesheet for all pages */\n@font-face{\n    font-family: \"Beyond Wonderland\";\n    src: url(\"./fonts/Beyond\\ Wonderland.woff2\") format(\"woff2\"),\n        url(\"./fonts/Beyond\\ Wonderland.woff\") format(\"woff\");\n}\n\n@font-face{\n    font-family: \"Great Vibes\";\n    src: url(\"./fonts/GreatVibes-Regular.woff2\") format(\"woff2\"),\n        url(\"./fonts/GreatVibes-Regular.woff\") format(\"woff\");\n}\n\n:root {\n    --base-background-color: #AF8F6F;\n    --content-background-color: #543310;\n    --wood-texture: url(./images/oak-texture.jpg);\n    --white-text-color: white;\n    --box-shadow-settings: 2px 2px 2px black;\n}\n\nh1, h2, h3, p, div{\n    padding:0;\n    margin:0;\n}\n\np{\n    min-width: 50ch;\n    max-width: 80ch;\n}\n\nbody{\n    background-color: var(--base-background-color);\n    margin:0;\n}\n\n/* style buttons */\nnav {\n    display: flex;\n    justify-content: center;\n    gap: max(40px, 5vw);\n}\n\nheader{\n    margin: 20px;\n}\n\nheader .button{\n    background: var(--wood-texture);\n    border: 2px solid var(--white-text-color);\n    padding: 10px 40px;\n    color: var(--white-text-color);\n    font-size: 24px;\n    box-shadow: var(--box-shadow-settings);\n}\n\n/* every page will use the same content backing and page layout*/\n.page{\n    margin: 50px;\n    margin-top: 0;\n    display:flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 20px;\n    color: var(--white-text-color);\n}\n\n.page > * {\n    background: var(--content-background-color);\n    border-width: 5px;\n    border-style: solid;\n    border-image: var(--wood-texture) round;\n    border-image-slice: 50;\n    box-shadow: var(--box-shadow-settings);\n    padding: 8px;\n    min-width: min-content;\n}\n\n/* style home page */\n.home.page .header.area{\n    min-width: 505px;\n}\n\n.home.page .header h1{\n    font-family:\"Beyond Wonderland\";\n    text-align: center;\n    font-weight:normal;\n    font-size: 50px;\n}\n\n.home.page .intro.area {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 22px;\n    gap: 10px;\n    min-width: 591px;\n}\n\n.home.page .intro.area .intro.text2, .home.page .intro.area .cheers{\n    text-align:center;\n}\n\n.home.page .intro.area .cheers{\n    font-family:\"Great Vibes\";\n    font-size: 50px;\n}\n\n.home.page .description.area{\n    display:flex;\n    justify-content: space-around;\n    gap: 20px;\n    min-width: 788px;\n}\n\n.home.page .description.text{\n    display:grid;\n    grid-auto-rows: max(30px,min-content) 50px;\n    gap: 3px;\n}\n\n\n.home.page .description.area h2{\n    font-size: 30px;\n    min-width:269px;\n}\n\n.home.page .description.area p{\n    font-size: 16px;\n    min-width:269px;\n}\n\n.home.page .description.area img{\n    height: 255px;\n    justify-self: end;\n}\n\n/* styling menu page, note that background, border, and font color are styled earlier*/\n.menu.page .header.area h1{\n    text-align: center;\n    font-weight:normal;\n    font-size: 40px;\n}\n\n.menu.page .header.area{\n    width: min-content;\n    padding: 0 70px;\n    align-self: center;\n}\n\n/* override general page content background so that we can apply it to each menu item individually */\n.menu.page .meal.area, .menu.page .drink.area {\n    padding:0;\n    background: none;\n    border: none;\n    display:grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 23px;\n    box-shadow: none;\n}\n\n.menu.page .item.area{\n    background: var(--content-background-color);\n    border-width: 5px;\n    border-style: solid;\n    border-image: var(--wood-texture) round;\n    border-image-slice: 50;\n    box-shadow: var(--box-shadow-settings);\n    padding: 8px;\n    display: flex;\n    flex-direction:column;\n    align-items: center;\n    padding: 20px;\n    padding-top: 10px;\n}\n\n.menu.page p{\n    min-width: 0;\n    margin-bottom: 5px;\n}\n\n.menu.page img{\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n}\n\n/* stylize about page */\n.about.page .bio.area{\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n}\n\n.about.page .contact-form{\n    display: grid;\n    grid-template-columns: 100px 1fr;\n    grid-template-rows: repeat(3,min-content);\n    grid-auto-rows: min-content; \n    align-items: center;\n    margin: 10px;\n    gap: 20px;\n}\n\n.about.page .contact-form input, .about.page .contact-form textarea{\n    border: none;\n    border-radius: 8px;\n    padding: 8px 20px;\n}\n\n.about.page .contact-form textarea{\n    font-family: Arial, Helvetica, sans-serif;\n    resize: vertical;\n}\n\n.about.page .contact-form .submit.button{\n    grid-column: 2/3;\n    width: 80px;\n    justify-self: end;\n    padding: 8px 10px;\n    border: none;\n    border-radius: 8px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPage: () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
console.log("hi I'm from about.js!");



const aboutPage = function(){

    const createAboutPage = function(){
        console.log("hi I'm from aboutPage.createAboutPage()!");
        const aboutPage = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","about page","");
        aboutPage.appendChild(appendBioElements());
        aboutPage.appendChild(appendLocationElements());
        aboutPage.appendChild(appendContactElements());
        return aboutPage;
    }

    const appendBioElements = function(){
        const bioArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","bio area");
        const bioTitle = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("h1","bio title","Meet the Terry Family");
        const bioText = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("p","bio text","Our happy tavern started in year 1234 when Terry Toots decided he wanted to share his passion for food and music with his friends. Terry's goals were to make the best spot to hang out and relax. The tavern started out as small gatherings with friends and family, and we have grown to our awesome tavern today. Terry's Terrific Tavern lives on and spreads its original purpose of cheer through descendants of the Toots family.");
        bioArea.appendChild(bioTitle);
        bioArea.appendChild(bioText);
        return bioArea;
    }

    const appendLocationElements = function(){
        const locationArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","location area");
        const locationTitle = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("h1","location title","Address");
        const location = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("p","location text","123 Old Town Ave, Islebury, Faerûn");
        locationArea.appendChild(locationTitle);
        locationArea.appendChild(location);
        return locationArea;
    }

    const appendContactElements = function(){
        const contactArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","contact area");
        const contactTitle = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("h1","contact title","Contact Us!");
        const contactForm = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("form", "contact-form");
        const firstNameField = createInputAndLabel("first-name","text","First Name");
        const lastNameField = createInputAndLabel("last-name","text","Last Name");
        const mailAddressField = createInputAndLabel("mail-address","text","Mail Address","Where should we send our messenger pigeon?");
        const commentField = createInputAndLabel("comment","textarea","Comments","Let us know what you think!");
        const submitButton = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("button","submit button","Submit");
        submitButton.type = "button";
        submitButton.addEventListener("click", processFormSubmit);
        contactArea.appendChild(contactTitle);
        contactForm.appendChild(firstNameField.label);
        contactForm.appendChild(firstNameField.input);
        contactForm.appendChild(lastNameField.label);
        contactForm.appendChild(lastNameField.input);
        contactForm.appendChild(mailAddressField.label);
        contactForm.appendChild(mailAddressField.input);
        contactForm.appendChild(commentField.label);
        contactForm.appendChild(commentField.input);
        contactForm.appendChild(submitButton);
        contactArea.appendChild(contactForm);
        return contactArea;
    }

    const processFormSubmit = function(){
        console.log("Form has been submitted! But I won't actually process the info bc this is out of scope for the project! I'll just reset the form for you <3");
        const inputs = document.querySelectorAll("input");
        for (let input of inputs){
            input.value = "";
        }
        const textarea = document.querySelector("textarea");
        textarea.value = "";
    }

    const createInputAndLabel = function(identifier,type, labelText, placeholder=""){
        const label = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("label",identifier, labelText);
        label.for = identifier;
        let input;
        if (type !== "textarea"){
            input = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("input",identifier);
            input.type = type;
        } else {
            input = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("textarea",identifier);
            input.rows = "1";
        }
        input.placeholder = placeholder;
        input.id = identifier;
        return {label, input};
    }

    return {createAboutPage}
}();



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _images_happy_tavern_joy_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/happy-tavern-joy.jpg */ "./src/images/happy-tavern-joy.jpg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
{/* <div class="logo">
<h1>Terry's Terrific Tavern</h1>
</div>
<p class="intro">Welcome adventurers! Every dragon-slayer, orc-destroyer, dungeon-conquerer
 needs to relax at the best tavern in Fantasy Town! Enjoy top-quality food, drink, and song today!</p>
<div class="">
<h2>50% off happy hour</h2>
<p>Enjoy twice as much of our famous Wyrmwizz Ale between 5-8!</p>
<h2>LFG nights-- everynight!</h2>
<p>Terry's Terrific Tavern is THE place to meet new adventurers!</p>
<h2>It's not just a bar</h2>
<p>Each meal is freshly prepared, locally sourced, and has the taste of fine dining!</p>
</div>
<img class="home image">
<div class="attribution">
<p>Woman in tavern photo by <a href="https://stockcake.com/i/medieval-tavern-joy_752875_804181">Stockcake</a></p>
</div> */}



const homePage = function(){

    const appendHeaderElements = function(){
        const headerArea = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("div","header area","");
        const logoText = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("h1","","Terry's Terrific Tavern")
        headerArea.appendChild(logoText);
        return headerArea;
    }

    const appendIntroElements = function(){
        const introArea = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("div","intro area","");
        const introParagraph = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("p", "intro text","Welcome adventurers! Every dragon-slayer, orc-destroyer, dungeon-conquerer needs to relax at the best tavern in Fantasy Town! Enjoy top-quality food, drink, and song today!");
        const introParagraphTwo = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("p","intro text2","As we like to say at Terry's");
        const introParagraphThree = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("p","cheers","Cheers!");
        introArea.appendChild(introParagraph);
        introArea.appendChild(introParagraphTwo);
        introArea.appendChild(introParagraphThree);
        return introArea;
    }

    const appendDescriptionElements = function(){
        const descriptionArea = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("div","description area","");
        const descriptionTextArea = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("div","description text");
        const headerOne = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("h2","","50% off happy hour");
        const descriptionOne = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("p","","Enjoy twice as much of our famous Wyrmwizz Ale between 5-8!");
        const headerTwo = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("h2","","LFG nights-- everynight!");
        const descriptionTwo = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("p","","Terry's Terrific Tavern is THE place to meet new adventurers!");
        const headerThree = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("h2","","It's not just a bar");
        const descriptionThree = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("p","","Each meal is freshly prepared, locally sourced, and has the taste of fine dining!");
        const happyGirlImage = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createImage(_images_happy_tavern_joy_jpg__WEBPACK_IMPORTED_MODULE_0__, "happy girl in tavern");
        descriptionTextArea.appendChild(headerOne);
        descriptionTextArea.appendChild(descriptionOne);
        descriptionTextArea.appendChild(headerTwo);
        descriptionTextArea.appendChild(descriptionTwo);
        descriptionTextArea.appendChild(headerThree);
        descriptionTextArea.appendChild(descriptionThree);
        descriptionArea.appendChild(descriptionTextArea);
        descriptionArea.appendChild(happyGirlImage);
        return descriptionArea;
    }

    const createHomePage = function(){
        const homePage = _index_js__WEBPACK_IMPORTED_MODULE_1__.createManager.createElement("div","home page","");
        homePage.appendChild(appendHeaderElements());
        homePage.appendChild(appendIntroElements());
        homePage.appendChild(appendDescriptionElements());
        return homePage;
    }

    return {createHomePage};
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createManager: () => (/* binding */ createManager)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
console.log("I am from index.js!");







const pageManager = function () {

    let currentPage = null;
    const init = function () {
        cacheDom();
        bindEvents();
        renderHomePage();
    }

    let contentSection;
    let homeButton;
    let menuButton;
    let aboutButton;
    const cacheDom = function () {
        contentSection = document.querySelector("#content");
        homeButton = document.querySelector(".home.button");
        menuButton = document.querySelector(".menu.button");
        aboutButton = document.querySelector(".about.button");
    }

    const bindEvents = function () {
        homeButton.addEventListener("click", renderHomePage);
        menuButton.addEventListener("click", renderMenuPage);
        aboutButton.addEventListener("click", renderAboutPage);
    }

    const renderHomePage = function () {
        if (currentPage !== "home") {
            deletePageContent();
            contentSection.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage.createHomePage());
        }
        currentPage = "home";
    }

    const renderMenuPage = function () {
        if (currentPage !== "menu") {
            deletePageContent();
            contentSection.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPage.createMenuPage());
        }
        currentPage = "menu";
    }

    const renderAboutPage = function () {
        if (currentPage != "about") {
            deletePageContent();
            contentSection.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage.createAboutPage());
        }
        currentPage = "about";
    }

    const deletePageContent = function () {
        while (contentSection.firstChild) {
            contentSection.removeChild(contentSection.firstChild);
        }
    }



    return { init };
}();


const createManager = function () {

    const createElement = function (type, classString = "", innerText = "") {
        const createdElement = document.createElement(type);
        if (classString !== "") {
            const classArray = classString.split(" ");
            for (let singleClass of classArray) {
                createdElement.classList.add(singleClass);
            }
        }
        createdElement.textContent = innerText;
        return createdElement;
    }

    const createImage = function(src, altText){
        const createdImage = new Image();
        createdImage.src = src;
        createdImage.alt = altText;
        createdImage.height = "300";
        return createdImage;
    }

    return {createElement, createImage}
}();


pageManager.init();



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _images_bread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bread.jpg */ "./src/images/bread.jpg");
/* harmony import */ var _images_steak_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/steak.jpg */ "./src/images/steak.jpg");
/* harmony import */ var _images_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/salad.jpg */ "./src/images/salad.jpg");
/* harmony import */ var _images_dark_beer_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dark-beer.jpg */ "./src/images/dark-beer.jpg");
/* harmony import */ var _images_pale_ale_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pale-ale.jpg */ "./src/images/pale-ale.jpg");
/* harmony import */ var _images_cocktail_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cocktail.jpg */ "./src/images/cocktail.jpg");









console.log("hi I'm from menu.js!");

const menuPage = function(){

    const createMenuPage = function(){
        console.log("hi I'm from menuPage.createMenuPage()!");
        const menuPage = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","menu page","");
        menuPage.appendChild(appendMealHeaderElements());
        menuPage.appendChild(appendMealElements());
        menuPage.appendChild(appendDrinkHeaderElements());
        menuPage.appendChild(appendDrinkElements());
        return menuPage;
    }
    
    const appendMealHeaderElements = function(){
        const headerArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","header area");
        const logo = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("h1","meal-title","Meals");
        headerArea.appendChild(logo);
        return headerArea;
    }

    const appendDrinkHeaderElements = function(){
        const headerArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","header area");
        const logo = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("h1","drink-title","Drinks");
        headerArea.appendChild(logo);
        return headerArea;
    }

    const createMenuItem = function(nameOfItem, priceString, imageSrc, imageAlt){
        const menuItemArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","item area");
        const itemName = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("h3","item name",nameOfItem);
        const itemPrice = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("p","item price",priceString);
        const itemImage = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createImage(imageSrc, imageAlt);
        menuItemArea.appendChild(itemName);
        menuItemArea.appendChild(itemPrice);
        menuItemArea.appendChild(itemImage);
        return menuItemArea;
    }

    const appendMealElements = function(){
        const mealArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","meal area");
        const itemTrollbread = createMenuItem("Trollbread", "6 silver", _images_bread_jpg__WEBPACK_IMPORTED_MODULE_1__, "artisan bread roll");
        const itemOwlbearSteak = createMenuItem("Owlbear Steak", "12 silver", _images_steak_jpg__WEBPACK_IMPORTED_MODULE_2__, "well-done steak on grill");
        const itemErdtreeSalad = createMenuItem("Erdtree Salad", "9 silver", _images_salad_jpg__WEBPACK_IMPORTED_MODULE_3__, "beet and lettuce salad platter");
        mealArea.appendChild(itemTrollbread);
        mealArea.appendChild(itemOwlbearSteak);
        mealArea.appendChild(itemErdtreeSalad);
        return mealArea;
    }

    const appendDrinkElements = function(){
        const drinkArea = _index_js__WEBPACK_IMPORTED_MODULE_0__.createManager.createElement("div","drink area");
        const itemWyrmwizzAle = createMenuItem("Wyrmwizz Ale", "4 silver", _images_pale_ale_jpg__WEBPACK_IMPORTED_MODULE_5__, "light-colored ale in glass");
        const itemGoodberryCocktail = createMenuItem("Goodberry Cocktail", "6 silver", _images_cocktail_jpg__WEBPACK_IMPORTED_MODULE_6__, "orange cocktail");
        const itemHauntedCheer = createMenuItem("Haunted Cheer", "6 silver", _images_dark_beer_jpg__WEBPACK_IMPORTED_MODULE_4__, "dark beer poured");
        drinkArea.appendChild(itemWyrmwizzAle);
        drinkArea.appendChild(itemGoodberryCocktail);
        drinkArea.appendChild(itemHauntedCheer);
        return drinkArea;
    }

    return {createMenuPage}
}();



/***/ }),

/***/ "./src/fonts/Beyond Wonderland.woff":
/*!******************************************!*\
  !*** ./src/fonts/Beyond Wonderland.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2207549b1bb4640dae7a.woff";

/***/ }),

/***/ "./src/fonts/Beyond Wonderland.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/Beyond Wonderland.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01d6d93a030e272cae01.woff2";

/***/ }),

/***/ "./src/fonts/GreatVibes-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/GreatVibes-Regular.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09870be578440a519fc7.woff";

/***/ }),

/***/ "./src/fonts/GreatVibes-Regular.woff2":
/*!********************************************!*\
  !*** ./src/fonts/GreatVibes-Regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6dcd1e3283327988061.woff2";

/***/ }),

/***/ "./src/images/bread.jpg":
/*!******************************!*\
  !*** ./src/images/bread.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99165c0804dd1743f0f2.jpg";

/***/ }),

/***/ "./src/images/cocktail.jpg":
/*!*********************************!*\
  !*** ./src/images/cocktail.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6fa4e47d897356640cd.jpg";

/***/ }),

/***/ "./src/images/dark-beer.jpg":
/*!**********************************!*\
  !*** ./src/images/dark-beer.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2189ca174393075d1864.jpg";

/***/ }),

/***/ "./src/images/happy-tavern-joy.jpg":
/*!*****************************************!*\
  !*** ./src/images/happy-tavern-joy.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a3334036269c3e40dfd.jpg";

/***/ }),

/***/ "./src/images/oak-texture.jpg":
/*!************************************!*\
  !*** ./src/images/oak-texture.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb42204672ca5300a79e.jpg";

/***/ }),

/***/ "./src/images/pale-ale.jpg":
/*!*********************************!*\
  !*** ./src/images/pale-ale.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ea9886d9931abf5ce02.jpg";

/***/ }),

/***/ "./src/images/salad.jpg":
/*!******************************!*\
  !*** ./src/images/salad.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fbc5488f6b7b376580d.jpg";

/***/ }),

/***/ "./src/images/steak.jpg":
/*!******************************!*\
  !*** ./src/images/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "122e1f5c0229abca6d3d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMseUlBQWlEO0FBQzdGLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVB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ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CZXlvbmQgV29uZGVybGFuZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQmV5b25kIFdvbmRlcmxhbmQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvR3JlYXRWaWJlcy1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9HcmVhdFZpYmVzLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL29hay10ZXh0dXJlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHN0eWxlc2hlZXQgZm9yIGFsbCBwYWdlcyAqL1xuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogXCJCZXlvbmQgV29uZGVybGFuZFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogXCJHcmVhdCBWaWJlc1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuOnJvb3Qge1xuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjQUY4RjZGO1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjNTQzMzEwO1xuICAgIC0td29vZC10ZXh0dXJlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgLS13aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJveC1zaGFkb3ctc2V0dGluZ3M6IDJweCAycHggMnB4IGJsYWNrO1xufVxuXG5oMSwgaDIsIGgzLCBwLCBkaXZ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xufVxuXG5we1xuICAgIG1pbi13aWR0aDogNTBjaDtcbiAgICBtYXgtd2lkdGg6IDgwY2g7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBtYXJnaW46MDtcbn1cblxuLyogc3R5bGUgYnV0dG9ucyAqL1xubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogbWF4KDQwcHgsIDV2dyk7XG59XG5cbmhlYWRlcntcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbmhlYWRlciAuYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdvb2QtdGV4dHVyZSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1zZXR0aW5ncyk7XG59XG5cbi8qIGV2ZXJ5IHBhZ2Ugd2lsbCB1c2UgdGhlIHNhbWUgY29udGVudCBiYWNraW5nIGFuZCBwYWdlIGxheW91dCovXG4ucGFnZXtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xufVxuXG4ucGFnZSA+ICoge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW1hZ2U6IHZhcigtLXdvb2QtdGV4dHVyZSkgcm91bmQ7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiA1MDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXNldHRpbmdzKTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLyogc3R5bGUgaG9tZSBwYWdlICovXG4uaG9tZS5wYWdlIC5oZWFkZXIuYXJlYXtcbiAgICBtaW4td2lkdGg6IDUwNXB4O1xufVxuXG4uaG9tZS5wYWdlIC5oZWFkZXIgaDF7XG4gICAgZm9udC1mYW1pbHk6XCJCZXlvbmQgV29uZGVybGFuZFwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uaG9tZS5wYWdlIC5pbnRyby5hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1pbi13aWR0aDogNTkxcHg7XG59XG5cbi5ob21lLnBhZ2UgLmludHJvLmFyZWEgLmludHJvLnRleHQyLCAuaG9tZS5wYWdlIC5pbnRyby5hcmVhIC5jaGVlcnN7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5ob21lLnBhZ2UgLmludHJvLmFyZWEgLmNoZWVyc3tcbiAgICBmb250LWZhbWlseTpcIkdyZWF0IFZpYmVzXCI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uaG9tZS5wYWdlIC5kZXNjcmlwdGlvbi5hcmVhe1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWluLXdpZHRoOiA3ODhweDtcbn1cblxuLmhvbWUucGFnZSAuZGVzY3JpcHRpb24udGV4dHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heCgzMHB4LG1pbi1jb250ZW50KSA1MHB4O1xuICAgIGdhcDogM3B4O1xufVxuXG5cbi5ob21lLnBhZ2UgLmRlc2NyaXB0aW9uLmFyZWEgaDJ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1pbi13aWR0aDoyNjlweDtcbn1cblxuLmhvbWUucGFnZSAuZGVzY3JpcHRpb24uYXJlYSBwe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtaW4td2lkdGg6MjY5cHg7XG59XG5cbi5ob21lLnBhZ2UgLmRlc2NyaXB0aW9uLmFyZWEgaW1ne1xuICAgIGhlaWdodDogMjU1cHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi8qIHN0eWxpbmcgbWVudSBwYWdlLCBub3RlIHRoYXQgYmFja2dyb3VuZCwgYm9yZGVyLCBhbmQgZm9udCBjb2xvciBhcmUgc3R5bGVkIGVhcmxpZXIqL1xuLm1lbnUucGFnZSAuaGVhZGVyLmFyZWEgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5tZW51LnBhZ2UgLmhlYWRlci5hcmVhe1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nOiAwIDcwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBvdmVycmlkZSBnZW5lcmFsIHBhZ2UgY29udGVudCBiYWNrZ3JvdW5kIHNvIHRoYXQgd2UgY2FuIGFwcGx5IGl0IHRvIGVhY2ggbWVudSBpdGVtIGluZGl2aWR1YWxseSAqL1xuLm1lbnUucGFnZSAubWVhbC5hcmVhLCAubWVudS5wYWdlIC5kcmluay5hcmVhIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICAgIGdhcDogMjNweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudS5wYWdlIC5pdGVtLmFyZWF7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbWFnZTogdmFyKC0td29vZC10ZXh0dXJlKSByb3VuZDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDUwO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctc2V0dGluZ3MpO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5tZW51LnBhZ2UgcHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWVudS5wYWdlIGltZ3tcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLyogc3R5bGl6ZSBhYm91dCBwYWdlICovXG4uYWJvdXQucGFnZSAuYmlvLmFyZWF7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQucGFnZSAuY29udGFjdC1mb3Jte1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMyxtaW4tY29udGVudCk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5hYm91dC5wYWdlIC5jb250YWN0LWZvcm0gaW5wdXQsIC5hYm91dC5wYWdlIC5jb250YWN0LWZvcm0gdGV4dGFyZWF7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbn1cblxuLmFib3V0LnBhZ2UgLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYXtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uYWJvdXQucGFnZSAuY29udGFjdC1mb3JtIC5zdWJtaXQuYnV0dG9ue1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3Nz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O0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVzaGVldCBmb3IgYWxsIHBhZ2VzICovXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCZXlvbmQgV29uZGVybGFuZFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0JleW9uZFxcXFwgV29uZGVybGFuZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgICAgIHVybChcXFwiLi9mb250cy9CZXlvbmRcXFxcIFdvbmRlcmxhbmQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvR3JlYXRWaWJlcy1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICAgICAgdXJsKFxcXCIuL2ZvbnRzL0dyZWF0VmliZXMtUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iYXNlLWJhY2tncm91bmQtY29sb3I6ICNBRjhGNkY7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjNTQzMzEwO1xcbiAgICAtLXdvb2QtdGV4dHVyZTogdXJsKC4vaW1hZ2VzL29hay10ZXh0dXJlLmpwZyk7XFxuICAgIC0td2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tYm94LXNoYWRvdy1zZXR0aW5nczogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbmgxLCBoMiwgaDMsIHAsIGRpdntcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxucHtcXG4gICAgbWluLXdpZHRoOiA1MGNoO1xcbiAgICBtYXgtd2lkdGg6IDgwY2g7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG1hcmdpbjowO1xcbn1cXG5cXG4vKiBzdHlsZSBidXR0b25zICovXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogbWF4KDQwcHgsIDV2dyk7XFxufVxcblxcbmhlYWRlcntcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgLmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td29vZC10ZXh0dXJlKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctc2V0dGluZ3MpO1xcbn1cXG5cXG4vKiBldmVyeSBwYWdlIHdpbGwgdXNlIHRoZSBzYW1lIGNvbnRlbnQgYmFja2luZyBhbmQgcGFnZSBsYXlvdXQqL1xcbi5wYWdle1xcbiAgICBtYXJnaW46IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ucGFnZSA+ICoge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWltYWdlOiB2YXIoLS13b29kLXRleHR1cmUpIHJvdW5kO1xcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDUwO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXNldHRpbmdzKTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4vKiBzdHlsZSBob21lIHBhZ2UgKi9cXG4uaG9tZS5wYWdlIC5oZWFkZXIuYXJlYXtcXG4gICAgbWluLXdpZHRoOiA1MDVweDtcXG59XFxuXFxuLmhvbWUucGFnZSAuaGVhZGVyIGgxe1xcbiAgICBmb250LWZhbWlseTpcXFwiQmV5b25kIFdvbmRlcmxhbmRcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4uaG9tZS5wYWdlIC5pbnRyby5hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogNTkxcHg7XFxufVxcblxcbi5ob21lLnBhZ2UgLmludHJvLmFyZWEgLmludHJvLnRleHQyLCAuaG9tZS5wYWdlIC5pbnRyby5hcmVhIC5jaGVlcnN7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uaG9tZS5wYWdlIC5pbnRyby5hcmVhIC5jaGVlcnN7XFxuICAgIGZvbnQtZmFtaWx5OlxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmhvbWUucGFnZSAuZGVzY3JpcHRpb24uYXJlYXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDc4OHB4O1xcbn1cXG5cXG4uaG9tZS5wYWdlIC5kZXNjcmlwdGlvbi50ZXh0e1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgoMzBweCxtaW4tY29udGVudCkgNTBweDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcblxcbi5ob21lLnBhZ2UgLmRlc2NyaXB0aW9uLmFyZWEgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWluLXdpZHRoOjI2OXB4O1xcbn1cXG5cXG4uaG9tZS5wYWdlIC5kZXNjcmlwdGlvbi5hcmVhIHB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWluLXdpZHRoOjI2OXB4O1xcbn1cXG5cXG4uaG9tZS5wYWdlIC5kZXNjcmlwdGlvbi5hcmVhIGltZ3tcXG4gICAgaGVpZ2h0OiAyNTVweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIHN0eWxpbmcgbWVudSBwYWdlLCBub3RlIHRoYXQgYmFja2dyb3VuZCwgYm9yZGVyLCBhbmQgZm9udCBjb2xvciBhcmUgc3R5bGVkIGVhcmxpZXIqL1xcbi5tZW51LnBhZ2UgLmhlYWRlci5hcmVhIGgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubWVudS5wYWdlIC5oZWFkZXIuYXJlYXtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAwIDcwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogb3ZlcnJpZGUgZ2VuZXJhbCBwYWdlIGNvbnRlbnQgYmFja2dyb3VuZCBzbyB0aGF0IHdlIGNhbiBhcHBseSBpdCB0byBlYWNoIG1lbnUgaXRlbSBpbmRpdmlkdWFsbHkgKi9cXG4ubWVudS5wYWdlIC5tZWFsLmFyZWEsIC5tZW51LnBhZ2UgLmRyaW5rLmFyZWEge1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyM3B4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubWVudS5wYWdlIC5pdGVtLmFyZWF7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItaW1hZ2U6IHZhcigtLXdvb2QtdGV4dHVyZSkgcm91bmQ7XFxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogNTA7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctc2V0dGluZ3MpO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5tZW51LnBhZ2UgcHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tZW51LnBhZ2UgaW1ne1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4vKiBzdHlsaXplIGFib3V0IHBhZ2UgKi9cXG4uYWJvdXQucGFnZSAuYmlvLmFyZWF7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQucGFnZSAuY29udGFjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMyxtaW4tY29udGVudCk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWJvdXQucGFnZSAuY29udGFjdC1mb3JtIGlucHV0LCAuYWJvdXQucGFnZSAuY29udGFjdC1mb3JtIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxufVxcblxcbi5hYm91dC5wYWdlIC5jb250YWN0LWZvcm0gdGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uYWJvdXQucGFnZSAuY29udGFjdC1mb3JtIC5zdWJtaXQuYnV0dG9ue1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zb2xlLmxvZyhcImhpIEknbSBmcm9tIGFib3V0LmpzIVwiKTtcblxuaW1wb3J0IHsgY3JlYXRlTWFuYWdlciB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBhYm91dFBhZ2UgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgY3JlYXRlQWJvdXRQYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJoaSBJJ20gZnJvbSBhYm91dFBhZ2UuY3JlYXRlQWJvdXRQYWdlKCkhXCIpO1xuICAgICAgICBjb25zdCBhYm91dFBhZ2UgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImFib3V0IHBhZ2VcIixcIlwiKTtcbiAgICAgICAgYWJvdXRQYWdlLmFwcGVuZENoaWxkKGFwcGVuZEJpb0VsZW1lbnRzKCkpO1xuICAgICAgICBhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYXBwZW5kTG9jYXRpb25FbGVtZW50cygpKTtcbiAgICAgICAgYWJvdXRQYWdlLmFwcGVuZENoaWxkKGFwcGVuZENvbnRhY3RFbGVtZW50cygpKTtcbiAgICAgICAgcmV0dXJuIGFib3V0UGFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRCaW9FbGVtZW50cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGJpb0FyZWEgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJpbyBhcmVhXCIpO1xuICAgICAgICBjb25zdCBiaW9UaXRsZSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImgxXCIsXCJiaW8gdGl0bGVcIixcIk1lZXQgdGhlIFRlcnJ5IEZhbWlseVwiKTtcbiAgICAgICAgY29uc3QgYmlvVGV4dCA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcInBcIixcImJpbyB0ZXh0XCIsXCJPdXIgaGFwcHkgdGF2ZXJuIHN0YXJ0ZWQgaW4geWVhciAxMjM0IHdoZW4gVGVycnkgVG9vdHMgZGVjaWRlZCBoZSB3YW50ZWQgdG8gc2hhcmUgaGlzIHBhc3Npb24gZm9yIGZvb2QgYW5kIG11c2ljIHdpdGggaGlzIGZyaWVuZHMuIFRlcnJ5J3MgZ29hbHMgd2VyZSB0byBtYWtlIHRoZSBiZXN0IHNwb3QgdG8gaGFuZyBvdXQgYW5kIHJlbGF4LiBUaGUgdGF2ZXJuIHN0YXJ0ZWQgb3V0IGFzIHNtYWxsIGdhdGhlcmluZ3Mgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHksIGFuZCB3ZSBoYXZlIGdyb3duIHRvIG91ciBhd2Vzb21lIHRhdmVybiB0b2RheS4gVGVycnkncyBUZXJyaWZpYyBUYXZlcm4gbGl2ZXMgb24gYW5kIHNwcmVhZHMgaXRzIG9yaWdpbmFsIHB1cnBvc2Ugb2YgY2hlZXIgdGhyb3VnaCBkZXNjZW5kYW50cyBvZiB0aGUgVG9vdHMgZmFtaWx5LlwiKTtcbiAgICAgICAgYmlvQXJlYS5hcHBlbmRDaGlsZChiaW9UaXRsZSk7XG4gICAgICAgIGJpb0FyZWEuYXBwZW5kQ2hpbGQoYmlvVGV4dCk7XG4gICAgICAgIHJldHVybiBiaW9BcmVhO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZExvY2F0aW9uRWxlbWVudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBsb2NhdGlvbkFyZWEgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImxvY2F0aW9uIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJoMVwiLFwibG9jYXRpb24gdGl0bGVcIixcIkFkZHJlc3NcIik7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwicFwiLFwibG9jYXRpb24gdGV4dFwiLFwiMTIzIE9sZCBUb3duIEF2ZSwgSXNsZWJ1cnksIEZhZXLDu25cIik7XG4gICAgICAgIGxvY2F0aW9uQXJlYS5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgICAgICAgbG9jYXRpb25BcmVhLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRDb250YWN0RWxlbWVudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWN0QXJlYSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLFwiY29udGFjdCBhcmVhXCIpO1xuICAgICAgICBjb25zdCBjb250YWN0VGl0bGUgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJoMVwiLFwiY29udGFjdCB0aXRsZVwiLFwiQ29udGFjdCBVcyFcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImNvbnRhY3QtZm9ybVwiKTtcbiAgICAgICAgY29uc3QgZmlyc3ROYW1lRmllbGQgPSBjcmVhdGVJbnB1dEFuZExhYmVsKFwiZmlyc3QtbmFtZVwiLFwidGV4dFwiLFwiRmlyc3QgTmFtZVwiKTtcbiAgICAgICAgY29uc3QgbGFzdE5hbWVGaWVsZCA9IGNyZWF0ZUlucHV0QW5kTGFiZWwoXCJsYXN0LW5hbWVcIixcInRleHRcIixcIkxhc3QgTmFtZVwiKTtcbiAgICAgICAgY29uc3QgbWFpbEFkZHJlc3NGaWVsZCA9IGNyZWF0ZUlucHV0QW5kTGFiZWwoXCJtYWlsLWFkZHJlc3NcIixcInRleHRcIixcIk1haWwgQWRkcmVzc1wiLFwiV2hlcmUgc2hvdWxkIHdlIHNlbmQgb3VyIG1lc3NlbmdlciBwaWdlb24/XCIpO1xuICAgICAgICBjb25zdCBjb21tZW50RmllbGQgPSBjcmVhdGVJbnB1dEFuZExhYmVsKFwiY29tbWVudFwiLFwidGV4dGFyZWFcIixcIkNvbW1lbnRzXCIsXCJMZXQgdXMga25vdyB3aGF0IHlvdSB0aGluayFcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwic3VibWl0IGJ1dHRvblwiLFwiU3VibWl0XCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvY2Vzc0Zvcm1TdWJtaXQpO1xuICAgICAgICBjb250YWN0QXJlYS5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmaXJzdE5hbWVGaWVsZC5sYWJlbCk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZpcnN0TmFtZUZpZWxkLmlucHV0KTtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWVGaWVsZC5sYWJlbCk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGxhc3ROYW1lRmllbGQuaW5wdXQpO1xuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtYWlsQWRkcmVzc0ZpZWxkLmxhYmVsKTtcbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWFpbEFkZHJlc3NGaWVsZC5pbnB1dCk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbW1lbnRGaWVsZC5sYWJlbCk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbW1lbnRGaWVsZC5pbnB1dCk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGNvbnRhY3RBcmVhLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RBcmVhO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2Nlc3NGb3JtU3VibWl0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZCEgQnV0IEkgd29uJ3QgYWN0dWFsbHkgcHJvY2VzcyB0aGUgaW5mbyBiYyB0aGlzIGlzIG91dCBvZiBzY29wZSBmb3IgdGhlIHByb2plY3QhIEknbGwganVzdCByZXNldCB0aGUgZm9ybSBmb3IgeW91IDwzXCIpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIGlucHV0cyl7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbnB1dEFuZExhYmVsID0gZnVuY3Rpb24oaWRlbnRpZmllcix0eXBlLCBsYWJlbFRleHQsIHBsYWNlaG9sZGVyPVwiXCIpe1xuICAgICAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsaWRlbnRpZmllciwgbGFiZWxUZXh0KTtcbiAgICAgICAgbGFiZWwuZm9yID0gaWRlbnRpZmllcjtcbiAgICAgICAgbGV0IGlucHV0O1xuICAgICAgICBpZiAodHlwZSAhPT0gXCJ0ZXh0YXJlYVwiKXtcbiAgICAgICAgICAgIGlucHV0ID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIixpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXQgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaW5wdXQucm93cyA9IFwiMVwiO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0LmlkID0gaWRlbnRpZmllcjtcbiAgICAgICAgcmV0dXJuIHtsYWJlbCwgaW5wdXR9O1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlQWJvdXRQYWdlfVxufSgpO1xuXG5leHBvcnQge2Fib3V0UGFnZX07Iiwiey8qIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG48aDE+VGVycnkncyBUZXJyaWZpYyBUYXZlcm48L2gxPlxuPC9kaXY+XG48cCBjbGFzcz1cImludHJvXCI+V2VsY29tZSBhZHZlbnR1cmVycyEgRXZlcnkgZHJhZ29uLXNsYXllciwgb3JjLWRlc3Ryb3llciwgZHVuZ2Vvbi1jb25xdWVyZXJcbiBuZWVkcyB0byByZWxheCBhdCB0aGUgYmVzdCB0YXZlcm4gaW4gRmFudGFzeSBUb3duISBFbmpveSB0b3AtcXVhbGl0eSBmb29kLCBkcmluaywgYW5kIHNvbmcgdG9kYXkhPC9wPlxuPGRpdiBjbGFzcz1cIlwiPlxuPGgyPjUwJSBvZmYgaGFwcHkgaG91cjwvaDI+XG48cD5FbmpveSB0d2ljZSBhcyBtdWNoIG9mIG91ciBmYW1vdXMgV3lybXdpenogQWxlIGJldHdlZW4gNS04ITwvcD5cbjxoMj5MRkcgbmlnaHRzLS0gZXZlcnluaWdodCE8L2gyPlxuPHA+VGVycnkncyBUZXJyaWZpYyBUYXZlcm4gaXMgVEhFIHBsYWNlIHRvIG1lZXQgbmV3IGFkdmVudHVyZXJzITwvcD5cbjxoMj5JdCdzIG5vdCBqdXN0IGEgYmFyPC9oMj5cbjxwPkVhY2ggbWVhbCBpcyBmcmVzaGx5IHByZXBhcmVkLCBsb2NhbGx5IHNvdXJjZWQsIGFuZCBoYXMgdGhlIHRhc3RlIG9mIGZpbmUgZGluaW5nITwvcD5cbjwvZGl2PlxuPGltZyBjbGFzcz1cImhvbWUgaW1hZ2VcIj5cbjxkaXYgY2xhc3M9XCJhdHRyaWJ1dGlvblwiPlxuPHA+V29tYW4gaW4gdGF2ZXJuIHBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3N0b2NrY2FrZS5jb20vaS9tZWRpZXZhbC10YXZlcm4tam95Xzc1Mjg3NV84MDQxODFcIj5TdG9ja2Nha2U8L2E+PC9wPlxuPC9kaXY+ICovfVxuaW1wb3J0IFRhdmVybkltYWdlIGZyb20gJy4vaW1hZ2VzL2hhcHB5LXRhdmVybi1qb3kuanBnJztcbmltcG9ydCB7IGNyZWF0ZU1hbmFnZXIgfSBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgaG9tZVBhZ2UgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgYXBwZW5kSGVhZGVyRWxlbWVudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBoZWFkZXJBcmVhID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJoZWFkZXIgYXJlYVwiLFwiXCIpO1xuICAgICAgICBjb25zdCBsb2dvVGV4dCA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImgxXCIsXCJcIixcIlRlcnJ5J3MgVGVycmlmaWMgVGF2ZXJuXCIpXG4gICAgICAgIGhlYWRlckFyZWEuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuICAgICAgICByZXR1cm4gaGVhZGVyQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRJbnRyb0VsZW1lbnRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaW50cm9BcmVhID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJpbnRybyBhcmVhXCIsXCJcIik7XG4gICAgICAgIGNvbnN0IGludHJvUGFyYWdyYXBoID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwicFwiLCBcImludHJvIHRleHRcIixcIldlbGNvbWUgYWR2ZW50dXJlcnMhIEV2ZXJ5IGRyYWdvbi1zbGF5ZXIsIG9yYy1kZXN0cm95ZXIsIGR1bmdlb24tY29ucXVlcmVyIG5lZWRzIHRvIHJlbGF4IGF0IHRoZSBiZXN0IHRhdmVybiBpbiBGYW50YXN5IFRvd24hIEVuam95IHRvcC1xdWFsaXR5IGZvb2QsIGRyaW5rLCBhbmQgc29uZyB0b2RheSFcIik7XG4gICAgICAgIGNvbnN0IGludHJvUGFyYWdyYXBoVHdvID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwicFwiLFwiaW50cm8gdGV4dDJcIixcIkFzIHdlIGxpa2UgdG8gc2F5IGF0IFRlcnJ5J3NcIik7XG4gICAgICAgIGNvbnN0IGludHJvUGFyYWdyYXBoVGhyZWUgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJjaGVlcnNcIixcIkNoZWVycyFcIik7XG4gICAgICAgIGludHJvQXJlYS5hcHBlbmRDaGlsZChpbnRyb1BhcmFncmFwaCk7XG4gICAgICAgIGludHJvQXJlYS5hcHBlbmRDaGlsZChpbnRyb1BhcmFncmFwaFR3byk7XG4gICAgICAgIGludHJvQXJlYS5hcHBlbmRDaGlsZChpbnRyb1BhcmFncmFwaFRocmVlKTtcbiAgICAgICAgcmV0dXJuIGludHJvQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmREZXNjcmlwdGlvbkVsZW1lbnRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25BcmVhID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJkZXNjcmlwdGlvbiBhcmVhXCIsXCJcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImRlc2NyaXB0aW9uIHRleHRcIik7XG4gICAgICAgIGNvbnN0IGhlYWRlck9uZSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImgyXCIsXCJcIixcIjUwJSBvZmYgaGFwcHkgaG91clwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25PbmUgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJcIixcIkVuam95IHR3aWNlIGFzIG11Y2ggb2Ygb3VyIGZhbW91cyBXeXJtd2l6eiBBbGUgYmV0d2VlbiA1LTghXCIpO1xuICAgICAgICBjb25zdCBoZWFkZXJUd28gPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLFwiXCIsXCJMRkcgbmlnaHRzLS0gZXZlcnluaWdodCFcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVHdvID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwicFwiLFwiXCIsXCJUZXJyeSdzIFRlcnJpZmljIFRhdmVybiBpcyBUSEUgcGxhY2UgdG8gbWVldCBuZXcgYWR2ZW50dXJlcnMhXCIpO1xuICAgICAgICBjb25zdCBoZWFkZXJUaHJlZSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImgyXCIsXCJcIixcIkl0J3Mgbm90IGp1c3QgYSBiYXJcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGhyZWUgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJcIixcIkVhY2ggbWVhbCBpcyBmcmVzaGx5IHByZXBhcmVkLCBsb2NhbGx5IHNvdXJjZWQsIGFuZCBoYXMgdGhlIHRhc3RlIG9mIGZpbmUgZGluaW5nIVwiKTtcbiAgICAgICAgY29uc3QgaGFwcHlHaXJsSW1hZ2UgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUltYWdlKFRhdmVybkltYWdlLCBcImhhcHB5IGdpcmwgaW4gdGF2ZXJuXCIpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHRBcmVhLmFwcGVuZENoaWxkKGhlYWRlck9uZSk7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dEFyZWEuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25PbmUpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHRBcmVhLmFwcGVuZENoaWxkKGhlYWRlclR3byk7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dEFyZWEuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ud28pO1xuICAgICAgICBkZXNjcmlwdGlvblRleHRBcmVhLmFwcGVuZENoaWxkKGhlYWRlclRocmVlKTtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0QXJlYS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRocmVlKTtcbiAgICAgICAgZGVzY3JpcHRpb25BcmVhLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xuICAgICAgICBkZXNjcmlwdGlvbkFyZWEuYXBwZW5kQ2hpbGQoaGFwcHlHaXJsSW1hZ2UpO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25BcmVhO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaG9tZVBhZ2UgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImhvbWUgcGFnZVwiLFwiXCIpO1xuICAgICAgICBob21lUGFnZS5hcHBlbmRDaGlsZChhcHBlbmRIZWFkZXJFbGVtZW50cygpKTtcbiAgICAgICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoYXBwZW5kSW50cm9FbGVtZW50cygpKTtcbiAgICAgICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoYXBwZW5kRGVzY3JpcHRpb25FbGVtZW50cygpKTtcbiAgICAgICAgcmV0dXJuIGhvbWVQYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlSG9tZVBhZ2V9O1xufSgpO1xuXG5leHBvcnQge2hvbWVQYWdlfTsiLCJjb25zb2xlLmxvZyhcIkkgYW0gZnJvbSBpbmRleC5qcyFcIik7XG5cbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGFib3V0UGFnZSB9IGZyb20gJy4vYWJvdXQuanMnO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgcGFnZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgY3VycmVudFBhZ2UgPSBudWxsO1xuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhY2hlRG9tKCk7XG4gICAgICAgIGJpbmRFdmVudHMoKTtcbiAgICAgICAgcmVuZGVySG9tZVBhZ2UoKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudFNlY3Rpb247XG4gICAgbGV0IGhvbWVCdXR0b247XG4gICAgbGV0IG1lbnVCdXR0b247XG4gICAgbGV0IGFib3V0QnV0dG9uO1xuICAgIGNvbnN0IGNhY2hlRG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS5idXR0b25cIik7XG4gICAgICAgIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUuYnV0dG9uXCIpO1xuICAgICAgICBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQuYnV0dG9uXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckhvbWVQYWdlKTtcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTWVudVBhZ2UpO1xuICAgICAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWJvdXRQYWdlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJIb21lUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlICE9PSBcImhvbWVcIikge1xuICAgICAgICAgICAgZGVsZXRlUGFnZUNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVQYWdlLmNyZWF0ZUhvbWVQYWdlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTWVudVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSAhPT0gXCJtZW51XCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZVBhZ2VDb250ZW50KCk7XG4gICAgICAgICAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51UGFnZS5jcmVhdGVNZW51UGFnZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UGFnZSA9IFwibWVudVwiO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckFib3V0UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlICE9IFwiYWJvdXRcIikge1xuICAgICAgICAgICAgZGVsZXRlUGFnZUNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0UGFnZS5jcmVhdGVBYm91dFBhZ2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBhZ2UgPSBcImFib3V0XCI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUGFnZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50U2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50U2VjdGlvbi5yZW1vdmVDaGlsZChjb250ZW50U2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4geyBpbml0IH07XG59KCk7XG5cblxuY29uc3QgY3JlYXRlTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY2xhc3NTdHJpbmcgPSBcIlwiLCBpbm5lclRleHQgPSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYgKGNsYXNzU3RyaW5nICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0FycmF5ID0gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgc2luZ2xlQ2xhc3Mgb2YgY2xhc3NBcnJheSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2luZ2xlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZWRFbGVtZW50LnRleHRDb250ZW50ID0gaW5uZXJUZXh0O1xuICAgICAgICByZXR1cm4gY3JlYXRlZEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbihzcmMsIGFsdFRleHQpe1xuICAgICAgICBjb25zdCBjcmVhdGVkSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY3JlYXRlZEltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgY3JlYXRlZEltYWdlLmFsdCA9IGFsdFRleHQ7XG4gICAgICAgIGNyZWF0ZWRJbWFnZS5oZWlnaHQgPSBcIjMwMFwiO1xuICAgICAgICByZXR1cm4gY3JlYXRlZEltYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlRWxlbWVudCwgY3JlYXRlSW1hZ2V9XG59KCk7XG5cblxucGFnZU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQge2NyZWF0ZU1hbmFnZXJ9OyIsImltcG9ydCB7IGNyZWF0ZU1hbmFnZXIgfSBmcm9tICcuL2luZGV4LmpzJztcblxuaW1wb3J0IEJyZWFkSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2JyZWFkLmpwZ1wiO1xuaW1wb3J0IFN0ZWFrSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3N0ZWFrLmpwZ1wiO1xuaW1wb3J0IFNhbGFkSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NhbGFkLmpwZ1wiO1xuaW1wb3J0IERhcmtCZWVySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2RhcmstYmVlci5qcGdcIjtcbmltcG9ydCBQYWxlQWxlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3BhbGUtYWxlLmpwZ1wiO1xuaW1wb3J0IENvY2t0YWlsSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2NvY2t0YWlsLmpwZ1wiO1xuXG5jb25zb2xlLmxvZyhcImhpIEknbSBmcm9tIG1lbnUuanMhXCIpO1xuXG5jb25zdCBtZW51UGFnZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBjcmVhdGVNZW51UGFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGkgSSdtIGZyb20gbWVudVBhZ2UuY3JlYXRlTWVudVBhZ2UoKSFcIik7XG4gICAgICAgIGNvbnN0IG1lbnVQYWdlID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJtZW51IHBhZ2VcIixcIlwiKTtcbiAgICAgICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoYXBwZW5kTWVhbEhlYWRlckVsZW1lbnRzKCkpO1xuICAgICAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChhcHBlbmRNZWFsRWxlbWVudHMoKSk7XG4gICAgICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGFwcGVuZERyaW5rSGVhZGVyRWxlbWVudHMoKSk7XG4gICAgICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGFwcGVuZERyaW5rRWxlbWVudHMoKSk7XG4gICAgICAgIHJldHVybiBtZW51UGFnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYXBwZW5kTWVhbEhlYWRlckVsZW1lbnRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaGVhZGVyQXJlYSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImRpdlwiLFwiaGVhZGVyIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJoMVwiLFwibWVhbC10aXRsZVwiLFwiTWVhbHNcIik7XG4gICAgICAgIGhlYWRlckFyZWEuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIHJldHVybiBoZWFkZXJBcmVhO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZERyaW5rSGVhZGVyRWxlbWVudHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBoZWFkZXJBcmVhID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJoZWFkZXIgYXJlYVwiKTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcImgxXCIsXCJkcmluay10aXRsZVwiLFwiRHJpbmtzXCIpO1xuICAgICAgICBoZWFkZXJBcmVhLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICByZXR1cm4gaGVhZGVyQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uKG5hbWVPZkl0ZW0sIHByaWNlU3RyaW5nLCBpbWFnZVNyYywgaW1hZ2VBbHQpe1xuICAgICAgICBjb25zdCBtZW51SXRlbUFyZWEgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcIml0ZW0gYXJlYVwiKTtcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBjcmVhdGVNYW5hZ2VyLmNyZWF0ZUVsZW1lbnQoXCJoM1wiLFwiaXRlbSBuYW1lXCIsbmFtZU9mSXRlbSk7XG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlRWxlbWVudChcInBcIixcIml0ZW0gcHJpY2VcIixwcmljZVN0cmluZyk7XG4gICAgICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGNyZWF0ZU1hbmFnZXIuY3JlYXRlSW1hZ2UoaW1hZ2VTcmMsIGltYWdlQWx0KTtcbiAgICAgICAgbWVudUl0ZW1BcmVhLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgbWVudUl0ZW1BcmVhLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIG1lbnVJdGVtQXJlYS5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgICAgICByZXR1cm4gbWVudUl0ZW1BcmVhO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZE1lYWxFbGVtZW50cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1lYWxBcmVhID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJtZWFsIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IGl0ZW1Ucm9sbGJyZWFkID0gY3JlYXRlTWVudUl0ZW0oXCJUcm9sbGJyZWFkXCIsIFwiNiBzaWx2ZXJcIiwgQnJlYWRJbWFnZSwgXCJhcnRpc2FuIGJyZWFkIHJvbGxcIik7XG4gICAgICAgIGNvbnN0IGl0ZW1Pd2xiZWFyU3RlYWsgPSBjcmVhdGVNZW51SXRlbShcIk93bGJlYXIgU3RlYWtcIiwgXCIxMiBzaWx2ZXJcIiwgU3RlYWtJbWFnZSwgXCJ3ZWxsLWRvbmUgc3RlYWsgb24gZ3JpbGxcIik7XG4gICAgICAgIGNvbnN0IGl0ZW1FcmR0cmVlU2FsYWQgPSBjcmVhdGVNZW51SXRlbShcIkVyZHRyZWUgU2FsYWRcIiwgXCI5IHNpbHZlclwiLCBTYWxhZEltYWdlLCBcImJlZXQgYW5kIGxldHR1Y2Ugc2FsYWQgcGxhdHRlclwiKTtcbiAgICAgICAgbWVhbEFyZWEuYXBwZW5kQ2hpbGQoaXRlbVRyb2xsYnJlYWQpO1xuICAgICAgICBtZWFsQXJlYS5hcHBlbmRDaGlsZChpdGVtT3dsYmVhclN0ZWFrKTtcbiAgICAgICAgbWVhbEFyZWEuYXBwZW5kQ2hpbGQoaXRlbUVyZHRyZWVTYWxhZCk7XG4gICAgICAgIHJldHVybiBtZWFsQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmREcmlua0VsZW1lbnRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZHJpbmtBcmVhID0gY3JlYXRlTWFuYWdlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJkcmluayBhcmVhXCIpO1xuICAgICAgICBjb25zdCBpdGVtV3lybXdpenpBbGUgPSBjcmVhdGVNZW51SXRlbShcIld5cm13aXp6IEFsZVwiLCBcIjQgc2lsdmVyXCIsIFBhbGVBbGVJbWFnZSwgXCJsaWdodC1jb2xvcmVkIGFsZSBpbiBnbGFzc1wiKTtcbiAgICAgICAgY29uc3QgaXRlbUdvb2RiZXJyeUNvY2t0YWlsID0gY3JlYXRlTWVudUl0ZW0oXCJHb29kYmVycnkgQ29ja3RhaWxcIiwgXCI2IHNpbHZlclwiLCBDb2NrdGFpbEltYWdlLCBcIm9yYW5nZSBjb2NrdGFpbFwiKTtcbiAgICAgICAgY29uc3QgaXRlbUhhdW50ZWRDaGVlciA9IGNyZWF0ZU1lbnVJdGVtKFwiSGF1bnRlZCBDaGVlclwiLCBcIjYgc2lsdmVyXCIsIERhcmtCZWVySW1hZ2UsIFwiZGFyayBiZWVyIHBvdXJlZFwiKTtcbiAgICAgICAgZHJpbmtBcmVhLmFwcGVuZENoaWxkKGl0ZW1XeXJtd2l6ekFsZSk7XG4gICAgICAgIGRyaW5rQXJlYS5hcHBlbmRDaGlsZChpdGVtR29vZGJlcnJ5Q29ja3RhaWwpO1xuICAgICAgICBkcmlua0FyZWEuYXBwZW5kQ2hpbGQoaXRlbUhhdW50ZWRDaGVlcik7XG4gICAgICAgIHJldHVybiBkcmlua0FyZWE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGVNZW51UGFnZX1cbn0oKTtcblxuZXhwb3J0IHttZW51UGFnZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9