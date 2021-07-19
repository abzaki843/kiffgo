module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./animations/Contact.animation.js":
/*!*****************************************!*\
  !*** ./animations/Contact.animation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_lottie_contact_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/lottie/contact.json */ "./public/lottie/contact.json");
var _public_lottie_contact_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/lottie/contact.json */ "./public/lottie/contact.json", 1);

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\animations\\Contact.animation.js";




function ContactAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _public_lottie_contact_json__WEBPACK_IMPORTED_MODULE_3__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lottie__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: defaultOptions,
    height: '75%',
    width: '75%'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ContactAnimation);

/***/ }),

/***/ "./animations/Van.animation.js":
/*!*************************************!*\
  !*** ./animations/Van.animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_lottie_main_van_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/lottie/main van.json */ "./public/lottie/main van.json");
var _public_lottie_main_van_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/lottie/main van.json */ "./public/lottie/main van.json", 1);

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\animations\\Van.animation.js";




function VanAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _public_lottie_main_van_json__WEBPACK_IMPORTED_MODULE_3__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lottie__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: defaultOptions,
    height: '75%',
    width: '75%'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (VanAnimation);

/***/ }),

/***/ "./components/AboutUs/AboutUs.js":
/*!***************************************!*\
  !*** ./components/AboutUs/AboutUs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\AboutUs\\AboutUs.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  divider: {
    width: '100%',
    maxWidth: '100%'
  }
});
const theme = {
  spacing: 2
};
function ProjectContainer() {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_8__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.divider,
      id: "projects",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: "center",
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
          mt: 10,
          display: "grid",
          justifyItems: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
            initial: {
              x: '100vw'
            },
            animate: {
              x: 0
            },
            transition: {
              delay: 0.5,
              duration: 0.5
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              container: true,
              direction: "row",
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                item: true,
                xs: 12,
                lg: 11,
                style: {
                  margin: 'auto'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  variant: "h4",
                  gutterBottom: true,
                  color: "textPrimary",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: " Our "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, this), " Story"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  variant: "subtitle2",
                  gutterBottom: true,
                  color: "textPrimary",
                  children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
          m: 4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          container: true,
          spacing: 2,
          align: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
            ml: 4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            lg: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/Assets/team.jpg",
              style: {
                width: '100%',
                height: 'auto'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            lg: 5,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
              variant: "h4",
              gutterBottom: true,
              color: "textPrimary",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: " Our "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), " Leaders"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
              variant: "subtitle2",
              gutterBottom: true,
              color: "textPrimary",
              children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
          m: 4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          container: true,
          spacing: 2,
          align: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
            ml: 4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            lg: 5,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
              variant: "h4",
              gutterBottom: true,
              color: "textPrimary",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: " Work "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), " with us"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
              variant: "subtitle2",
              gutterBottom: true,
              color: "textPrimary",
              children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            lg: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/Assets/careers.jpg",
              style: {
                width: '100%',
                height: 'auto'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/PWA/Pwa.js":
/*!*******************************!*\
  !*** ./components/PWA/Pwa.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pwa; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutlineRounded */ "@material-ui/icons/CheckCircleOutlineRounded");
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\PWA\\Pwa.js";













const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const childVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  divider: {
    width: '100%',
    maxWidth: '100%'
  }
});
const theme = {
  spacing: 2
};
function Pwa() {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_13__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.divider,
      id: "projects",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: "center",
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          direction: "column",
          xs: 12,
          lg: 4,
          justifyItems: "grid",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
            mt: 10,
            display: "grid",
            justifyItems: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__["motion"].div, {
              initial: {
                x: '100vw'
              },
              animate: {
                x: 0
              },
              transition: {
                delay: 0.5,
                duration: 0.5
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "h3",
                gutterBottom: true,
                color: "textPrimary",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: " Technology Used "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
        mt: 7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 3,
        direction: "row",
        justify: "center",
        alignItems: "flex-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          lg: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__["motion"].div, {
            variants: containerVariants,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/Assets/pwa.png",
              style: {
                width: '90%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 12,
          lg: 6,
          style: {
            marginTop: '50px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__["motion"].div, {
            variants: childVariants,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "h4",
                gutterBottom: true,
                color: "textPrimary",
                align: "justify",
                children: "Progressive Web Apps"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "subtitle",
                gutterBottom: true,
                color: "textPrimary",
                align: "justify",
                children: [' ', "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classes.list,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  component: "nav",
                  "aria-label": "main mailbox folders",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_5___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
                      primary: " Lorem Ipsum is simply dummy text of the printing and\r typesetting industry"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_5___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
                      primary: " Lorem Ipsum is simply dummy text of the printing and\r typesetting industry"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_5___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
                      primary: " Lorem Ipsum is simply dummy text of the printing and\r typesetting industry"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Projects/ProjectCont.js":
/*!********************************************!*\
  !*** ./components/Projects/ProjectCont.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProjectsOdd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectsOdd */ "./components/Projects/ProjectsOdd.js");
/* harmony import */ var _ProjectsEven__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectsEven */ "./components/Projects/ProjectsEven.js");
/* harmony import */ var _ProjectsSm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProjectsSm */ "./components/Projects/ProjectsSm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\Projects\\ProjectCont.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  divider: {
    width: '100%',
    maxWidth: '100%'
  }
});
const theme = {
  spacing: 2
};
function ProjectContainer() {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  const projectInfo = [{
    image: '/Assets/pickup.png',
    title: 'Jamcommerce',
    Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
    feature1: 'It provides powerful framework so that no high customizability is needed everything is already done for you and only minor additions are needed.',
    feature2: 'It has E-Commerce Store which is blazing fast due to usage of Next JS ',
    feature3: 'It has  sections and information blocks  display content and images on your store strategically so visitors can quickly find the information they need.',
    feature4: ' No need to use any 3rd Party Pre-made Cart technology we use snip cart as a backend for cart operation handling. ',
    href: 'https://jamcommerce-pro.vercel.app/'
  }, {
    image: '/Assets/delivery.png',
    title: 'Covid 19',
    Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
    feature1: ' Complete details about COVID-19 that include General Information, Wrong Myths, Precautionary Measures, and Symptoms',
    feature2: 'Global COVID-19 Count which is up to date and is refreshed every day to keep data up to date.',
    feature3: '  COVID-19 cases for a specific country using the Country Wise Cases Search and see all relevant information all at once.',
    feature4: 'developed using PWA intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices ',
    href: 'https://covid19-black.vercel.app/'
  }, {
    image: '/Assets/orderetail.png',
    title: 'Tours De North',
    Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
    feature1: '  Detailed info about different tourist attraction site in Northeren Areas of Pakistan ',
    feature2: 'Details about pervious tours clicks and activities',
    feature3: ' It provides detailed information about different packages offered  ',
    feature4: '  It  Provides facility for online booking according to package one wills',
    href: 'https://toursdenorth.com/'
  }, {
    image: '/Assets/order.png',
    title: 'Steamskinstore',
    Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
    feature1: '  Payment via EasyPaisa and Bank Transfer for Pakistani Customer ',
    feature2: 'A Single Sale Point for all Type and Categories of Custom Game Skins',
    feature3: ' Fast and Responsive Site made using Next JS ',
    feature4: ' Use of Latest JAM Commerce Technology and 3rd Party Cart free.',
    href: 'https://steamskinstore.com/'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.divider,
      id: "projects",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        justify: "center",
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          direction: "column",
          xs: 12,
          lg: 4,
          justifyItems: "grid",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
            mt: 10,
            display: "grid",
            justifyItems: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
              initial: {
                x: '100vw'
              },
              animate: {
                x: 0
              },
              transition: {
                delay: 0.5,
                duration: 0.5
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "h4",
                gutterBottom: true,
                color: "textPrimary",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Hidden"], {
                  mdDown: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      color: ' #F8F008'
                    },
                    children: " How "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this), " it works"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Hidden"], {
                  lgUp: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      color: '#707070'
                    },
                    children: " Our Projects "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
              initial: {
                x: '-100vw'
              },
              animate: {
                x: 0
              },
              transition: {
                delay: 1,
                duration: 2
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/Assets/divider.png",
                style: {
                  width: '100%',
                  height: '2px'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), projectInfo.map((project, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [index % 2 == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectsEven__WEBPACK_IMPORTED_MODULE_9__["default"], {
          projectImage: project.image,
          ProjectTitle: project.title,
          projectText: project.Text,
          projectFeature1: project.feature1,
          projectFeature2: project.feature2,
          projectFeature3: project.feature3,
          projectFeature4: project.feature4,
          projectImage1: project.image1,
          projectRef: project.href
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectsOdd__WEBPACK_IMPORTED_MODULE_8__["default"], {
          projectImage: project.image,
          projectImage1: project.image1,
          ProjectTitle: project.title,
          projectText: project.Text,
          projectFeature1: project.feature1,
          projectFeature2: project.feature2,
          projectFeature3: project.feature3,
          projectFeature4: project.feature4,
          projectRef: project.href
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectsSm__WEBPACK_IMPORTED_MODULE_10__["default"], {
          projectImage: project.image,
          ProjectTitle: project.title,
          projectText: project.Text,
          projectFeature1: project.feature1,
          projectFeature2: project.feature2,
          projectFeature3: project.feature3,
          projectFeature4: project.feature4,
          projectRef: project.href
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, this)]
      }, void 0, true))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Projects/ProjectsEven.js":
/*!*********************************************!*\
  !*** ./components/Projects/ProjectsEven.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsEven; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutlineRounded */ "@material-ui/icons/CheckCircleOutlineRounded");
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\Projects\\ProjectsEven.js";













const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const childVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const buttonVariants = {
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],
  //   transition: { delay: 2 }
  // },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  margin: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  root: {
    flexGrow: 1
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  bg: {
    backgroundColor: '#F5F5F5'
  }
}));
const theme = {
  spacing: 8
};
function ProjectsEven({
  projectImage,
  projectText,
  ProjectTitle,
  projectFeature1,
  projectFeature2,
  projectFeature3,
  projectFeature4,
  projectRef
}) {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: (classes.root, classes.margin),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
        mr: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          container: true,
          spacing: 3,
          direction: "row",
          justify: "center",
          alignItems: "flex-start",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            lg: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
              variants: containerVariants,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: projectImage,
                style: {
                  width: '90%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            xs: 12,
            lg: 6,
            style: {
              marginTop: '50px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
              variants: childVariants,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  variant: "h4",
                  gutterBottom: true,
                  color: "textPrimary",
                  align: "justify",
                  children: ProjectTitle
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  variant: "subtitle",
                  gutterBottom: true,
                  color: "textPrimary",
                  align: "justify",
                  children: projectText
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: classes.list,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    component: "nav",
                    "aria-label": "main mailbox folders",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      button: true,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                          color: "secondary"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 146,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        primary: projectFeature1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      button: true,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                          color: "secondary"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        primary: projectFeature2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      button: true,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                          color: "secondary"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 158,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        primary: projectFeature3
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      button: true,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                          color: "secondary"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 164,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        primary: projectFeature4
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  ml: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
                    variants: buttonVariants,
                    whileHover: {
                      scale: 1.1,
                      originX: 0
                    },
                    ref: ref,
                    style: {
                      opacity: inView ? 1 : 0
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      variant: "contained",
                      color: "secondary",
                      href: projectRef,
                      children: "LEARN MORE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Projects/ProjectsOdd.js":
/*!********************************************!*\
  !*** ./components/Projects/ProjectsOdd.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsOdd; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutlineRounded */ "@material-ui/icons/CheckCircleOutlineRounded");
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\Projects\\ProjectsOdd.js";













const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const childVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const buttonVariants = {
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],
  //   transition: { delay: 2 }
  // },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  margin: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  root: {
    flexGrow: 1
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));
const theme = {
  spacing: 8
};
function ProjectsOdd({
  projectImage,
  projectText,
  ProjectTitle,
  projectFeature1,
  projectFeature2,
  projectFeature3,
  projectFeature4,
  projectRef
}) {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: (classes.root, classes.margin),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
        ml: 10,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          container: true,
          spacing: 1,
          direction: "row",
          justify: "center",
          alignItems: "flex-start",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              xs: 12,
              lg: 6,
              style: {
                marginTop: '100px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
                variants: containerVariants,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    variant: "h4",
                    gutterBottom: true,
                    color: "textPrimary",
                    align: "justify",
                    children: ProjectTitle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    variant: "subtitle",
                    gutterBottom: true,
                    color: "textPrimary",
                    align: "justify",
                    children: projectText
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: classes.list,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
                      component: "nav",
                      "aria-label": "main mailbox folders",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                        button: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                            color: "secondary"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 135,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          primary: projectFeature1
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 138,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 134,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                        button: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                            color: "secondary"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 142,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 141,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          primary: projectFeature2
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                        button: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                            color: "secondary"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 148,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          primary: projectFeature3
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                        button: true,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                            color: "secondary"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          primary: projectFeature4
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    ml: 8,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
                      whileHover: {
                        scale: 1.1,
                        originX: 0
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        variant: "contained",
                        color: "secondary",
                        href: projectRef,
                        children: "LEARN MORE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              lg: 6,
              style: {
                marginTop: '50px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
                variants: childVariants,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: projectImage,
                  style: {
                    width: '90%'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Projects/ProjectsSm.js":
/*!*******************************************!*\
  !*** ./components/Projects/ProjectsSm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsSm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutlineRounded */ "@material-ui/icons/CheckCircleOutlineRounded");
/* harmony import */ var _material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\Projects\\ProjectsSm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass: 0.4,
      damping: 10
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  hide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  root: {
    flexGrow: 1
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));
const theme = {
  spacing: 8
};

function ListItemLink(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread({
    button: true,
    component: "a"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 10
  }, this);
}

function ProjectsSm({
  projectImage,
  projectText,
  ProjectTitle,
  projectFeature1,
  projectFeature2,
  projectFeature3,
  projectFeature4,
  projectRef
}) {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: (classes.root, classes.hide),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
          variants: containerVariants,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            container: true,
            direction: "row",
            justify: "center",
            alignItems: "center",
            spacing: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              container: true,
              direction: "row",
              justify: "center",
              alignItems: "center",
              spacing: 3,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                margin: 'auto',
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    variant: "h4",
                    gutterBottom: true,
                    color: "textPrimary",
                    style: {
                      marginTop: '100px'
                    },
                    children: ProjectTitle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              xs: 10,
              sm: 10,
              md: 10,
              lg: 5,
              align: "justify",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "subtitle",
                gutterBottom: true,
                color: "textPrimary",
                align: "justify",
                children: projectText
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              xs: 10,
              md: 8,
              lg: 6,
              align: "justify",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classes.list,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  component: "nav",
                  "aria-label": "main mailbox folders",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      primary: projectFeature1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      primary: projectFeature2
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      primary: projectFeature3
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    button: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_13___default.a, {
                        color: "secondary"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      primary: projectFeature4
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    container: true,
                    direction: "row",
                    justify: "center",
                    alignItems: "center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      margin: 'auto',
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                          variant: "contained",
                          color: "secondary",
                          justify: "center",
                          href: projectRef,
                          align: "justify",
                          children: "Visit Web"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 157,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: projectImage,
                width: '100%'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/contact/contact.js":
/*!***************************************!*\
  !*** ./components/contact/contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Message */ "@material-ui/icons/Message");
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _animations_Contact_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../animations/Contact.animation */ "./animations/Contact.animation.js");

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\contact\\contact.js";


















const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const childVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  input: {
    height: 150
  },
  bg: {
    backgroundColor: '#F5F5F5'
  }
}));
const theme = {
  spacing: 2
};
function Contact() {
  const classes = useStyles();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_15__["useAnimation"])();
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_16__["useInView"])({
    threshold: 0.1
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('');
    }
  }, [animation, inView]);
  const container = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     render: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('../animations/contact.json'),
  //   })
  // }, [])

  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: submitted,
    1: setSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      name,
      email,
      message
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received');

      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setBody('');
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_15__["motion"].div, {
    ref: ref,
    initial: "hidden",
    animate: animation,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
      mt: 10,
      id: "contact",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          container: true,
          direction: "row",
          alignItems: "center",
          justify: "center",
          spacing: 5,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            container: true,
            direction: "column",
            alignItems: "center",
            justify: "center",
            spacing: '3',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              XS: 12,
              sm: 12,
              md: 10,
              lg: 10,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                component: "h1",
                variant: "h3",
                color: "textPrimary",
                align: "center",
                children: ["Get ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    color: '#FEB204'
                  },
                  children: " In Touch"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 23
                }, this), " with us"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              item: true,
              sm: 12,
              md: 10,
              lg: 10,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                variant: "body1",
                color: "textPrimary",
                justifyContent: "center",
                children: "Lets Start Something New ! Just ask and get Answers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            xl: 12,
            xs: 10,
            sm: 6,
            md: 6,
            lg: 6,
            xl: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_animations_Contact_animation__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_15__["motion"].div, {
              variants: childVariants,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  mt: 2
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  my: 2
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  item: true,
                  xs: 10,
                  md: 6,
                  lg: 6,
                  xl: 6,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                    className: classes.form,
                    noValidate: true,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      variant: "outlined",
                      margin: "normal",
                      required: true,
                      fullWidth: true,
                      id: "email",
                      label: "Name",
                      name: "name",
                      autoComplete: "name",
                      onChange: e => {
                        setName(e.target.value);
                      },
                      InputProps: {
                        startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          position: "start",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 206,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 205,
                          columnNumber: 29
                        }, this)
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      variant: "outlined",
                      margin: "normal",
                      required: true,
                      fullWidth: true,
                      label: "email",
                      onChange: e => {
                        setEmail(e.target.value);
                      },
                      InputProps: {
                        startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          position: "start",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 223,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 222,
                          columnNumber: 29
                        }, this)
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      variant: "outlined",
                      margin: "normal",
                      required: true,
                      fullWidth: true,
                      label: "message",
                      onChange: e => {
                        setMessage(e.target.value);
                      },
                      InputProps: {
                        className: classes.input,
                        startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default.a, {
                          position: "start",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 241,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 240,
                          columnNumber: 29
                        }, this)
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      align: "left",
                      mb: 4,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        variant: "contained",
                        color: "secondary",
                        className: classes.submit,
                        onClick: e => {
                          handleSubmit(e);
                        },
                        children: "Send us Message"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        lg: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/Assets/footerlayer.png",
          style: {
            width: '100%',
            height: '40%',
            objectFit: 'cover',
            marginBottom: '-110%',
            marginLeft: '50px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Call */ "@material-ui/icons/Call");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\footer.js";














function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      position: "static ",
      style: {
        background: '#520D57'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Hidden"], {
        mdDown: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
              container: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                item: true,
                xs: 6,
                md: 3,
                lg: 2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  variant: "h6",
                  children: "About Us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  variant: "captiontext",
                  children: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                item: true,
                xs: 6,
                md: 3,
                lg: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "#hero",
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "#tech",
                    children: "Services"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "#projects",
                    children: "PWA Technology"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "#team",
                    children: "How it Worls"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "#contact",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                item: true,
                xs: 6,
                md: 3,
                lg: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      style: {
                        color: '#FFFFFF'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      variant: "OVERLINE TEXT",
                      children: "info@ineffabledevs.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      style: {
                        color: '#FFFFFF'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      variant: "subtitle",
                      children: [' ', "Comsats, Islamabad"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      style: {
                        color: '#FFFFFF'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      variant: "subtitle",
                      children: "00923365551788"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                item: true,
                xs: 6,
                md: 3,
                lg: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      px: 2,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        href: "https://www.facebook.com/ineffabledevs",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "/Assets/facebook.png",
                          style: {
                            width: '100%'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      px: 2,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        href: "https://www.linkedin.com/company/ineffable-devs",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "/Assets/twitter.png",
                          style: {
                            width: '100%'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      px: 2,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        href: "https://www.linkedin.com/company/ineffable-devs",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "/Assets/instagram.png",
                          style: {
                            width: '100%'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                direction: "column",
                justify: "center",
                alignItems: "center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  item: true,
                  xs: 12,
                  sm: 8,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    variant: "caption text",
                    children: "Copyright \xA9 2021 VanGO. All rights reserved"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Hidden"], {
          lgUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
              container: true,
              direction: "row",
              justify: "center",
              flexWrap: "wrap",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                mt: 15
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                direction: "row",
                justify: "center",
                item: true,
                xs: 10,
                sm: 4,
                md: 3,
                lg: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        href: "https://www.facebook.com/ineffabledevs",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "/Assets/facebook.png",
                          style: {
                            width: '20%'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 143,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 25
                      }, this)
                    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 2
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      href: "https://www.linkedin.com/company/ineffable-devs",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/Assets/instagram.png",
                        style: {
                          width: '20%'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 2
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                      href: "https://www.linkedin.com/company/ineffable-devs",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/Assets/twitter.png",
                        style: {
                          width: '20%'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                direction: "row",
                justify: "center",
                item: true,
                xs: 10,
                sm: 5,
                md: 3,
                lg: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_8___default.a, {
                      style: {
                        color: '#FFFFFF'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 178,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      variant: "subtitle",
                      children: "info@ineffabledevs.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      style: {
                        color: '#FFFFFF'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      variant: "subtitle",
                      children: [' ', "Comsats, Islamabad"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      style: {
                        color: '#FFFFFF'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13___default.a, {
                      m: 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      variant: "subtitle",
                      children: "00923365551788"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                container: true,
                direction: "column",
                justify: "center",
                alignItems: "center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    variant: "caption text",
                    children: "Copyright \xA9 2021 VanGo. All rights reserved"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _animations_Van_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animations/Van.animation */ "./animations/Van.animation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\components\\hero.js";


 // import 'fontsource-roboto'








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  bg: {
    backgroundColor: '#F5F5F5'
  }
}));
const theme = {
  spacing: 2
};
function Hero() {
  const classes = useStyles();
  const container = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     render: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('./animations/hero.json'),
  //   })
  // }, [])

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    id: "hero",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
      initial: {
        x: '-100vw'
      },
      animate: {
        x: 0
      },
      transition: {
        delay: 1,
        duration: 1
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        direction: "row",
        justify: "center",
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          lg: 5,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
            mt: 15,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
              mdDown: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                variant: "h4",
                gutterBottom: true,
                color: "textPrimary",
                children: ["Get Your Things Delivered", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    color: '#FEB204'
                  },
                  children: " Quickly"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, this), " & Smart", ' ']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
              lgUp: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  variant: "h4",
                  gutterBottom: true,
                  color: "textPrimary",
                  children: "Innovative Software Company"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this), ' ']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
              mdDown: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
                initial: {
                  x: '-100vw'
                },
                animate: {
                  x: 0
                },
                transition: {
                  delay: 1,
                  duration: 2
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  variant: "h5",
                  component: "h2",
                  gutterBottom: true,
                  color: "textSecondary",
                  align: "justify",
                  children: "Inventing better Convenience"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
                variant: "subtitle1",
                gutterBottom: true,
                color: "textPrimary",
                align: "justify",
                children: "We Are a Team of software developers, Highly Dedicated to develop Products that Matter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
                mt: 2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 12,
          md: 10,
          lg: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_animations_Van_animation__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              width: '100%',
              height: 'auto'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Hidden"], {
          lgUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
            item: true,
            xs: 11,
            md: 10,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              variant: "h5",
              gutterBottom: true,
              color: "textSecondary",
              align: "center",
              children: "We Are here to give Best Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
              variant: "subtitle1",
              gutter: true,
              color: "textPrimary",
              align: "justify",
              paragraph: true,
              children: "We Are a Team of software developers. Highly Dedicated to develop Products that Matter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
              container: true,
              justify: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/withWidth */ "@material-ui/core/withWidth");
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Projects_ProjectCont__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Projects/ProjectCont */ "./components/Projects/ProjectCont.js");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/contact/contact */ "./components/contact/contact.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_AboutUs_AboutUs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/AboutUs/AboutUs */ "./components/AboutUs/AboutUs.js");
/* harmony import */ var _components_PWA_Pwa__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/PWA/Pwa */ "./components/PWA/Pwa.js");

var _jsxFileName = "C:\\Users\\abk51\\Desktop\\kiffgo\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};
const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  margin: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '-10px'
    }
  },
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  drawer: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  border: {
    '&:hover': {
      borderBottom: '4px solid #2BA054'
    }
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: _objectSpread(_objectSpread({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0)
  }, theme.mixins.toolbar), {}, {
    justifyContent: 'flex-end'
  }),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

function HideOnScroll(props) {
  const {
    children,
    window
  } = props; // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_25___default()({
    target: window ? window() : undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_26___default.a, {
    appear: false,
    direction: "down",
    in: !trigger,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  const {
    width
  } = props;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.roots,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HideOnScroll, _objectSpread(_objectSpread({}, props), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_27__["motion"].div, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            background: '#FFFFFF'
          },
          elevation: 0,
          position: "fixed",
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.appBar, {
            [classes.appBarShift]: open
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
            style: {
              height: '46px'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
              lgUp: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                edge: "start",
                color: "Primary",
                "aria-label": "menu",
                onClick: handleDrawerOpen,
                edge: "start",
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.menuButton, open && classes.hide),
                style: {
                  marginRight: '-54px'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  lgUp: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15___default.a, {
              display: "flex",
              flexGrow: 1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
                mdDown: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#hero",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_27__["motion"].img, {
                    src: "./Assets/logo.png",
                    alt: "Kitty Katty!",
                    style: {
                      maxWidth: 250,
                      flex: 1
                    },
                    variants: pathVariants,
                    initial: "hidden",
                    animate: "visible",
                    drag: true,
                    dragConstraints: {
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
                lgUp: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#hero",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "./Assets/logo.png",
                    alt: "Kitty Katty!",
                    style: {
                      maxWidth: 200,
                      margin: 'auto'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
              mdDown: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#hero",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    style: {
                      margin: '20px'
                    },
                    className: classes.border,
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#tech",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    style: {
                      margin: '20px'
                    },
                    className: classes.border,
                    children: "Services"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#projects",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    style: {
                      margin: '20px'
                    },
                    className: classes.border,
                    children: "PWA Technology"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#team",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    style: {
                      margin: '20px'
                    },
                    className: classes.border,
                    children: "How it Worls"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
                  href: "#contact",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
                    style: {
                      margin: '20px'
                    },
                    className: classes.border,
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
      lgUp: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_18___default.a, {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: open,
        classes: {
          paper: classes.drawerPaper
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.drawerHeader,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
            onClick: handleDrawerClose,
            children: theme.direction === 'ltr' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_21___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_23___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
              href: "#hero",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
                variant: "button",
                display: "block",
                gutterBottom: true,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
              href: "#tech",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
                variant: "button",
                display: "block",
                gutterBottom: true,
                children: "Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
              href: "#projects",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
                variant: "button",
                display: "block",
                gutterBottom: true,
                children: "PWA Technology"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
              href: "#team",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
                variant: "button",
                display: "block",
                gutterBottom: true,
                children: "How it Works"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
              href: "#contact",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
                variant: "button",
                display: "block",
                gutterBottom: true,
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.content, {
        [classes.contentShift]: open
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_hero__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutUs_AboutUs__WEBPACK_IMPORTED_MODULE_28__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Projects_ProjectCont__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PWA_Pwa__WEBPACK_IMPORTED_MODULE_29__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contact_contact__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_24__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./public/lottie/contact.json":
/*!************************************!*\
  !*** ./public/lottie/contact.json ***!
  \************************************/
/*! exports provided: ip, fr, v, assets, layers, op, w, h, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ip\":0,\"fr\":60,\"v\":\"5.1.20\",\"assets\":[],\"layers\":[{\"ty\":4,\"nm\":\"Callus-06\",\"ip\":0,\"st\":0,\"ind\":6,\"hix\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[100],\"e\":[0],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":50,\"s\":[0],\"e\":[100],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":100}]},\"or\":{\"a\":0,\"k\":[0,0,0]},\"a\":{\"a\":0,\"k\":[237.5,168.5,0]},\"p\":{\"s\":true,\"x\":{\"a\":0,\"k\":272.5005},\"y\":{\"a\":0,\"k\":164.5125}},\"rx\":{\"a\":0,\"k\":0},\"ry\":{\"a\":0,\"k\":0},\"rz\":{\"a\":0,\"k\":0},\"s\":{\"a\":0,\"k\":[106.1,106.1]}},\"shapes\":[{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[424.523,286.755],[423.81300000000005,286.044],[423.10200000000003,286.755],[423.10200000000003,288.426],[421.43100000000004,288.426],[420.72,289.13599999999997],[421.43100000000004,289.84599999999995],[423.10200000000003,289.84599999999995],[423.10200000000003,291.51699999999994],[423.81300000000005,292.2269999999999],[424.523,291.51699999999994],[424.523,289.84599999999995],[426.19500000000005,289.84599999999995],[426.90500000000003,289.13599999999997],[426.19500000000005,288.426],[424.523,288.426]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3919999999999959],[0,0],[0,0],[0,-0.3919999999999959],[-0.3930000000000291,0],[0,0],[0,0],[-0.3930000000000291,0],[0,0.3909999999999627],[0,0],[0,0],[0,0.3909999999999627],[0.3909999999999627,0],[0,0]],\"o\":[[0,-0.3919999999999959],[-0.39299999999997226,0],[0,0],[0,0],[-0.39299999999997226,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.3919999999999959,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.39299999999997226],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[327.158,287.56],[326.44800000000004,286.849],[325.73800000000006,287.56],[325.73800000000006,289.231],[324.06700000000006,289.231],[323.3570000000001,289.941],[324.06700000000006,290.65099999999995],[325.73800000000006,290.65099999999995],[325.73800000000006,292.32199999999995],[326.44800000000004,293.0319999999999],[327.158,292.32199999999995],[327.158,290.65099999999995],[328.83000000000004,290.65099999999995],[329.54,289.941],[328.83000000000004,289.231],[327.158,289.231]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3919999999999959],[0,0],[0,0],[0,-0.3919999999999959],[-0.39299999999997226,0],[0,0],[0,0],[-0.39299999999997226,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.3919999999999959,0],[0,0]],\"o\":[[0,-0.39299999999997226],[-0.39299999999997226,0],[0,0],[0,0],[-0.39299999999997226,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.39299999999997226],[0.39299999999997226,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.3919999999999959],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[281.292,142.719],[280.582,142.00799999999998],[279.871,142.719],[279.871,144.39],[278.2,144.39],[277.489,145.101],[278.2,145.811],[279.871,145.811],[279.871,147.482],[280.582,148.192],[281.292,147.482],[281.292,145.811],[282.96299999999997,145.811],[283.67299999999994,145.101],[282.96299999999997,144.39],[281.292,144.39]],\"i\":[[0,0],[0.3909999999999627,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3930000000000291,0],[0,0],[0,0],[-0.3930000000000291,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.3919999999999959,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.39299999999997226,0],[0,0],[0,0],[-0.39299999999997226,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.3919999999999959,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[187.95,131.454],[187.23999999999998,130.743],[186.52999999999997,131.454],[186.52999999999997,133.125],[184.85899999999998,133.125],[184.14799999999997,133.836],[184.85899999999998,134.54600000000002],[186.52999999999997,134.54600000000002],[186.52999999999997,136.21800000000002],[187.23999999999998,136.92800000000003],[187.95,136.21800000000002],[187.95,134.54600000000002],[189.62099999999998,134.54600000000002],[190.331,133.836],[189.62099999999998,133.125],[187.95,133.125]],\"i\":[[0,0],[0.39100000000001955,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.39100000000001955,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3930000000000007],[0.3919999999999959,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[239.449,183.757],[238.739,183.046],[238.028,183.757],[238.028,185.428],[236.357,185.428],[235.646,186.139],[236.357,186.84900000000002],[238.028,186.84900000000002],[238.028,188.52],[238.739,189.23100000000002],[239.449,188.52],[239.449,186.84900000000002],[241.12,186.84900000000002],[241.83,186.139],[241.12,185.428],[239.449,185.428]],\"i\":[[0,0],[0.39100000000001955,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3919999999999959],[0.39100000000001955,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3930000000000007],[0.3919999999999959,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.3919999999999959],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[414.9,245.497],[414.19,244.786],[413.48,245.497],[413.48,247.168],[411.809,247.168],[411.09900000000005,247.87800000000001],[411.809,248.58900000000003],[413.48,248.58900000000003],[413.48,250.26000000000002],[414.19,250.97100000000003],[414.9,250.26000000000002],[414.9,248.58900000000003],[416.57099999999997,248.58900000000003],[417.28099999999995,247.87800000000001],[416.57099999999997,247.168],[414.9,247.168]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.39200000000002433],[0,0],[0,0],[0,-0.3919999999999959],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.39200000000002433],[0,0],[0,0],[0,0.39200000000002433],[0.3909999999999627,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3930000000000007],[0.3919999999999959,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.39200000000002433],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[406.048,152.959],[405.338,152.248],[404.62800000000004,152.959],[404.62800000000004,154.63],[402.95700000000005,154.63],[402.24700000000007,155.341],[402.95700000000005,156.05200000000002],[404.62800000000004,156.05200000000002],[404.62800000000004,157.723],[405.338,158.43400000000003],[406.048,157.723],[406.048,156.05200000000002],[407.719,156.05200000000002],[408.429,155.341],[407.719,154.63],[406.048,154.63]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.39200000000002433],[0,0],[0,0],[0,0.3930000000000007],[0.3919999999999959,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.39299999999997226,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3919999999999959],[0.39299999999997226,0],[0,0],[0,0],[0.39299999999997226,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[62.453,212.505],[61.743,211.795],[61.033,212.505],[61.033,214.176],[59.362,214.176],[58.652,214.886],[59.362,215.597],[61.033,215.597],[61.033,217.268],[61.743,217.978],[62.453,217.268],[62.453,215.597],[64.12400000000001,215.597],[64.83500000000001,214.886],[64.12400000000001,214.176],[62.45300000000001,214.176],[62.45300000000001,212.505]],\"i\":[[0,0],[0.392000000000003,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3919999999999959],[-0.392000000000003,0],[0,0],[0,0],[-0.392000000000003,0],[0,0.39100000000001955],[0,0],[0,0],[0,0.39200000000002433],[0.3919999999999959,0],[0,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.3930000000000007,0],[0,0],[0,0],[0.3930000000000007,0],[0,-0.39200000000002433],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[62.453,212.505]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[100.273,75.711],[99.563,75],[98.85300000000001,75.711],[98.85300000000001,77.382],[97.182,77.382],[96.47200000000001,78.093],[97.182,78.804],[98.85300000000001,78.804],[98.85300000000001,80.47500000000001],[99.563,81.185],[100.273,80.47500000000001],[100.273,78.804],[101.944,78.804],[102.654,78.093],[101.944,77.382],[100.273,77.382]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3930000000000007],[0.3919999999999959,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3919999999999959],[0.3930000000000007,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[111.538,145.717],[110.827,145.006],[110.117,145.717],[110.117,147.388],[108.446,147.388],[107.735,148.09900000000002],[108.446,148.81000000000003],[110.117,148.81000000000003],[110.117,150.48100000000002],[110.827,151.19200000000004],[111.538,150.48100000000002],[111.538,148.81000000000003],[113.21,148.81000000000003],[113.92099999999999,148.09900000000002],[113.21,147.388],[111.538,147.388]],\"i\":[[0,0],[0.3930000000000007,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.39099999999999113,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.39200000000002433],[0.3919999999999959,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3930000000000007],[0.3930000000000007,0],[0,0],[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[221.778,79.987],[221.06799999999998,79.276],[220.35799999999998,79.987],[220.35799999999998,81.658],[218.68699999999998,81.658],[217.97699999999998,82.369],[218.68699999999998,83.079],[220.35799999999998,83.079],[220.35799999999998,84.75099999999999],[221.06799999999998,85.46099999999998],[221.778,84.75099999999999],[221.778,83.079],[223.44899999999998,83.079],[224.16,82.369],[223.44899999999998,81.658],[221.778,81.658]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3919999999999959],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3919999999999959],[0,0],[0,0],[0,0.3919999999999959],[0.3930000000000007,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3930000000000007],[0.3930000000000007,0],[0,0],[0,0],[0.3930000000000007,0],[0,-0.3919999999999959],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[142.116,220],[141.406,219.29],[140.696,220],[140.696,221.671],[139.025,221.671],[138.315,222.381],[139.025,223.092],[140.696,223.092],[140.696,224.763],[141.406,225.47400000000002],[142.116,224.763],[142.116,223.092],[143.787,223.092],[144.497,222.381],[143.787,221.671],[142.116,221.671]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3930000000000007],[0,0],[0,0],[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.39200000000002433],[0,0],[0,0],[0,0.39200000000002433],[0.3919999999999959,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3930000000000007,0],[0,0],[0,0],[-0.3930000000000007,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3930000000000007],[0.3930000000000007,0],[0,0],[0,0],[0.3930000000000007,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[220.974,209.539],[220.26299999999998,208.82899999999998],[219.55299999999997,209.539],[219.55299999999997,211.20999999999998],[217.88199999999998,211.20999999999998],[217.17199999999997,211.921],[217.88199999999998,212.631],[219.55299999999997,212.631],[219.55299999999997,214.302],[220.26299999999998,215.012],[220.974,214.302],[220.974,212.631],[222.64499999999998,212.631],[223.356,211.921],[222.64499999999998,211.20999999999998],[220.974,211.20999999999998]],\"i\":[[0,0],[0.39200000000002433,0],[0,-0.3919999999999959],[0,0],[0,0],[0,-0.39200000000002433],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3919999999999959],[0.39200000000002433,0],[0,0]],\"o\":[[0,-0.3930000000000007],[-0.3919999999999959,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3930000000000007],[0,0],[0,0],[0,0.3930000000000007],[0.3930000000000007,0],[0,0],[0,0],[0.3930000000000007,0],[0,-0.3930000000000007],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-06 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[448.695,306.904],[447.985,306.194],[447.274,306.904],[447.274,308.575],[445.603,308.575],[444.89300000000003,309.28499999999997],[445.603,309.99499999999995],[447.274,309.99499999999995],[447.274,311.66599999999994],[447.985,312.37699999999995],[448.695,311.66599999999994],[448.695,309.99499999999995],[450.367,309.99499999999995],[451.077,309.28499999999997],[450.367,308.575],[448.695,308.575]],\"i\":[[0,0],[0.3919999999999959,0],[0,-0.3909999999999627],[0,0],[0,0],[0,-0.3919999999999959],[-0.3909999999999627,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.3930000000000291],[0,0],[0,0],[0,0.3919999999999959],[0.39299999999997226,0],[0,0]],\"o\":[[0,-0.3919999999999959],[-0.39299999999997226,0],[0,0],[0,0],[-0.3919999999999959,0],[0,0.39299999999997226],[0,0],[0,0],[0,0.39299999999997226],[0.3919999999999959,0],[0,0],[0,0],[0.39299999999997226,0],[0,-0.3919999999999959],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]}],\"op\":100},{\"ty\":4,\"nm\":\"Callus-05\",\"ip\":0,\"st\":0,\"ind\":5,\"hix\":2,\"ks\":{\"o\":{\"a\":0,\"k\":100},\"or\":{\"a\":0,\"k\":[0,0,0]},\"a\":{\"a\":0,\"k\":[225,123.5,0]},\"p\":{\"s\":true,\"x\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[325],\"e\":[394.5],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":50,\"s\":[394.5],\"e\":[325],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":100}]},\"y\":{\"a\":0,\"k\":98.29999923706055}},\"rx\":{\"a\":0,\"k\":0},\"ry\":{\"a\":0,\"k\":0},\"rz\":{\"a\":0,\"k\":0},\"s\":{\"a\":0,\"k\":[100,100,100]}},\"shapes\":[{\"ty\":\"gr\",\"nm\":\"Callus-05 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[237.759,105.942],[259.846,105.942],[261.169,106.41999999999999],[261.42699999999996,106.61899999999999],[261.518,106.78599999999999],[261.93199999999996,108.02799999999999],[261.93199999999996,121.00899999999999],[261.31999999999994,122.48099999999998],[261.31999999999994,122.48299999999998],[259.84599999999995,123.09599999999998],[237.75899999999996,123.09599999999998],[236.28499999999997,122.48299999999998],[235.67299999999997,121.00899999999997],[235.67299999999997,108.02799999999998],[236.08799999999997,106.78099999999998],[236.17799999999997,106.61899999999997],[236.43599999999998,106.41999999999997],[237.759,105.942]],\"i\":[[0,0],[0,0],[-0.36099999999999,-0.2979999999999876],[-0.06999999999999318,-0.09099999999999397],[-0.021000000000015007,-0.0589999999999975],[0,-0.46399999999999864],[0,0],[0.37700000000000955,-0.37699999999999534],[0,0],[0.5740000000000123,0],[0,0],[0.37699999999998113,0.3780000000000001],[0,0.5739999999999981],[0,0],[-0.2599999999999909,0.347999999999999],[-0.03900000000001569,0.05100000000000193],[-0.10000000000002274,0.04099999999999682],[-0.5009999999999764,0]],\"o\":[[0,0],[0.5009999999999764,0],[0.09899999999998954,0.04099999999999682],[0.03899999999998727,0.05200000000000671],[0.2599999999999909,0.347999999999999],[0,0],[0,0.5729999999999933],[0,0],[-0.3779999999999859,0.3780000000000001],[0,0],[-0.5740000000000123,0],[-0.3779999999999859,-0.3780000000000001],[0,0],[0,-0.46699999999999875],[0.020999999999986585,-0.05700000000000216],[0.06999999999999318,-0.09099999999999397],[0.36000000000001364,-0.2979999999999734],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[260.131,121.777],[251.378,115.09100000000001],[249.194,116.75900000000001],[249.19199999999998,116.76000000000002],[249.18499999999997,116.76500000000001],[249.13199999999998,116.80200000000002],[249.128,116.80400000000002],[249.117,116.81000000000002],[249.11499999999998,116.81200000000001],[249.10399999999998,116.81800000000001],[249.10199999999998,116.81900000000002],[249.08999999999997,116.82500000000002],[249.08799999999997,116.82600000000002],[249.07599999999996,116.83300000000003],[249.07399999999996,116.83300000000003],[249.06199999999995,116.83900000000003],[249.05999999999995,116.84000000000003],[249.04699999999994,116.84600000000003],[249.04599999999994,116.84600000000003],[249.03199999999993,116.85200000000003],[249.03199999999993,116.85200000000003],[248.95899999999992,116.87600000000003],[248.9579999999999,116.87600000000003],[248.8839999999999,116.89000000000003],[248.8829999999999,116.89000000000003],[248.8689999999999,116.89100000000003],[248.86799999999988,116.89200000000004],[248.85399999999987,116.89300000000004],[248.85199999999986,116.89300000000004],[248.82299999999987,116.89500000000004],[248.82199999999986,116.89500000000004],[248.80799999999985,116.89500000000004],[248.80699999999985,116.89500000000004],[248.79399999999984,116.89500000000004],[248.79199999999983,116.89500000000004],[248.77799999999982,116.89500000000004],[248.7759999999998,116.89500000000004],[248.74699999999982,116.89300000000004],[248.7459999999998,116.89300000000004],[248.7319999999998,116.89200000000004],[248.7309999999998,116.89100000000003],[248.71699999999979,116.89000000000003],[248.71599999999978,116.89000000000003],[248.64199999999977,116.87600000000003],[248.64099999999976,116.87600000000003],[248.56799999999976,116.85200000000003],[248.56799999999976,116.85200000000003],[248.55399999999975,116.84600000000003],[248.55299999999974,116.84600000000003],[248.53999999999974,116.84000000000003],[248.53899999999973,116.83900000000003],[248.52599999999973,116.83300000000003],[248.52499999999972,116.83300000000003],[248.51299999999972,116.82600000000002],[248.5109999999997,116.82500000000002],[248.4989999999997,116.81900000000002],[248.4969999999997,116.81800000000001],[248.4859999999997,116.81200000000001],[248.48299999999972,116.81000000000002],[248.47299999999973,116.80400000000002],[248.46899999999974,116.80200000000002],[248.41599999999974,116.76500000000001],[248.40899999999974,116.76000000000002],[248.40699999999973,116.75900000000001],[246.22299999999973,115.09100000000001],[237.47099999999972,121.77700000000002],[237.75699999999972,121.82900000000002],[259.8439999999997,121.82900000000002],[260.131,121.777]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.018000000000000682,-0.01100000000000989],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.025000000000005684,-0.007000000000005002],[0,0],[0.02400000000000091,-0.0030000000000001137],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.025000000000005684,0.006000000000000227],[0,0],[0.02400000000000091,0.010000000000005116],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.016999999999995907,0.01300000000000523],[0,0],[0,0],[0,0],[0,0],[-0.10099999999999909,0],[0,0],[-0.08999999999997499,0.034000000000006025]],\"o\":[[0,0],[0,0],[0,0],[0,0],[-0.016999999999995907,0.01300000000000523],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.02400000000000091,0.010000000000005116],[0,0],[-0.025000000000005684,0.006000000000000227],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.025000000000005684,-0.0030000000000001137],[0,0],[-0.025000000000005684,-0.007000000000005002],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.018000000000000682,-0.01099999999999568],[0,0],[0,0],[0,0],[0,0],[0.08899999999999864,0.034000000000006025],[0,0],[0.10100000000028331,-2.842170943040401e-14],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[252.16,114.494],[260.664,120.991],[260.664,108.029],[260.663,107.99799999999999],[252.16,114.494]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[236.94,120.991],[245.444,114.494],[236.94,107.998],[236.939,108.02900000000001],[236.939,120.991]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[248.802,115.467],[259.61199999999997,107.21],[237.99399999999997,107.21]],\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]}],\"op\":100},{\"ty\":4,\"nm\":\"Callus-04\",\"ip\":0,\"st\":0,\"ind\":4,\"hix\":3,\"ks\":{\"o\":{\"a\":0,\"k\":100},\"or\":{\"a\":0,\"k\":[0,0,0]},\"a\":{\"a\":0,\"k\":[131,111.5,0]},\"p\":{\"s\":true,\"x\":{\"a\":0,\"k\":488},\"y\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[296.552001953125],\"e\":[310.70001220703125],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":50,\"s\":[310.70001220703125],\"e\":[296.552001953125],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":100}]}},\"rx\":{\"a\":0,\"k\":0},\"ry\":{\"a\":0,\"k\":0},\"rz\":{\"a\":0,\"k\":0},\"s\":{\"a\":0,\"k\":[100,100,100]}},\"shapes\":[{\"ty\":\"gr\",\"nm\":\"Callus-04 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[69.169,84.673],[91.255,84.673],[92.579,85.151],[92.836,85.35],[92.928,85.517],[93.342,86.75999999999999],[93.342,99.74],[92.729,101.21199999999999],[92.729,101.21399999999998],[91.255,101.82599999999998],[69.169,101.82599999999998],[67.695,101.21399999999998],[67.083,99.73899999999999],[67.083,86.76],[67.498,85.513],[67.58800000000001,85.35000000000001],[67.84500000000001,85.15100000000001],[69.169,84.673]],\"i\":[[0,0],[0,0],[-0.3610000000000042,-0.2989999999999924],[-0.06900000000000261,-0.09099999999999397],[-0.02200000000000557,-0.0589999999999975],[0,-0.4649999999999892],[0,0],[0.3790000000000049,-0.3780000000000001],[0,0],[0.5750000000000028,0],[0,0],[0.3780000000000001,0.37699999999999534],[0,0.5749999999999886],[0,0],[-0.2600000000000051,0.347999999999999],[-0.0379999999999967,0.05100000000000193],[-0.09900000000000375,0.04099999999999682],[-0.5019999999999953,0]],\"o\":[[0,0],[0.5019999999999953,0],[0.09799999999999898,0.04200000000000159],[0.03900000000000148,0.05200000000000671],[0.2600000000000051,0.3469999999999942],[0,0],[0,0.5729999999999933],[0,0],[-0.3780000000000001,0.37699999999999534],[0,0],[-0.5750000000000028,0],[-0.3780000000000001,-0.3780000000000001],[0,0],[0,-0.46699999999999875],[0.02200000000000557,-0.05700000000000216],[0.06900000000000261,-0.09099999999999397],[0.3599999999999852,-0.29800000000001603],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[91.54,100.507],[82.787,93.821],[80.60300000000001,95.489],[80.602,95.49000000000001],[80.595,95.495],[80.542,95.53200000000001],[80.539,95.534],[80.528,95.54],[80.525,95.542],[80.51400000000001,95.548],[80.51200000000001,95.549],[80.5,95.556],[80.499,95.557],[80.487,95.563],[80.485,95.56400000000001],[80.472,95.57000000000001],[80.47099999999999,95.57100000000001],[80.45799999999998,95.57600000000001],[80.45699999999998,95.57700000000001],[80.44399999999997,95.58300000000001],[80.44299999999997,95.58300000000001],[80.36999999999998,95.60700000000001],[80.36899999999997,95.60800000000002],[80.29499999999997,95.62200000000001],[80.29299999999998,95.62300000000002],[80.27899999999998,95.62400000000002],[80.27799999999998,95.62500000000003],[80.26399999999998,95.62600000000003],[80.26299999999998,95.62600000000003],[80.23399999999998,95.62800000000003],[80.23299999999998,95.62800000000003],[80.21899999999998,95.62900000000003],[80.21799999999998,95.62900000000003],[80.20399999999998,95.62900000000003],[80.20299999999997,95.62900000000003],[80.18899999999998,95.62800000000003],[80.18699999999998,95.62800000000003],[80.15799999999999,95.62600000000003],[80.15599999999999,95.62600000000003],[80.14299999999999,95.62500000000003],[80.14099999999999,95.62400000000002],[80.127,95.62300000000002],[80.12599999999999,95.62200000000001],[80.05099999999999,95.60800000000002],[80.04999999999998,95.60700000000001],[79.97799999999998,95.58300000000001],[79.98,95.58300000000001],[79.967,95.57700000000001],[79.966,95.57600000000001],[79.95299999999999,95.57100000000001],[79.95199999999998,95.57000000000001],[79.93899999999998,95.56400000000001],[79.93799999999997,95.563],[79.92599999999997,95.557],[79.92399999999998,95.556],[79.91299999999998,95.55],[79.91099999999999,95.54899999999999],[79.89999999999999,95.54299999999999],[79.89699999999999,95.541],[79.88699999999999,95.535],[79.88299999999998,95.533],[79.82999999999998,95.496],[79.82299999999998,95.491],[79.82099999999998,95.49],[77.63699999999999,93.82199999999999],[68.88499999999999,100.50799999999998],[69.17099999999999,100.55999999999999],[91.25699999999999,100.55999999999999],[91.54,100.507]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.018000000000000682,-0.01100000000000989],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.024999999999991473,-0.007000000000005002],[0,0],[0.024999999999991473,-0.0030000000000001137],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.025000000000005684,0.006999999999990791],[0,0],[0.02400000000000091,0.010000000000005116],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.018000000000000682,0.01300000000000523],[0,0],[0,0],[0,0],[0,0],[-0.10099999999999909,0],[0,0],[-0.08900000000001285,0.03499999999999659]],\"o\":[[0,0],[0,0],[0,0],[0,0],[-0.016999999999995907,0.013999999999995794],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.02400000000000091,0.009000000000000341],[0,0],[-0.025000000000005684,0.006000000000000227],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.02599999999999625,-0.001999999999995339],[0,0],[-0.025000000000005684,-0.006000000000000227],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.018000000000000682,-0.01099999999999568],[0,0],[0,0],[0,0],[0,0],[0.08899999999999864,0.034000000000006025],[0,0],[0.09800000000001319,1.4210854715202004e-14],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[83.569,93.225],[92.074,99.722],[92.074,86.76],[92.073,86.72800000000001],[83.569,93.225]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[68.349,99.722],[76.854,93.225],[68.349,86.728],[68.348,86.75999999999999],[68.348,99.722]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[80.211,94.198],[91.021,85.94099999999999],[69.402,85.94099999999999]],\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-04 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[69.951,85.624],[92.038,85.624],[93.36099999999999,86.10199999999999],[93.61899999999999,86.30099999999999],[93.70999999999998,86.46799999999999],[94.12399999999998,87.71099999999998],[94.12399999999998,100.69099999999999],[93.51199999999999,102.16299999999998],[93.51199999999999,102.16499999999998],[92.03799999999998,102.77699999999997],[69.951,102.77699999999997],[68.47699999999999,102.16499999999998],[67.86399999999999,100.68999999999998],[67.86399999999999,87.71],[68.279,86.46199999999999],[68.369,86.29999999999998],[68.626,86.10099999999998]],\"i\":[[-0.5009999999999906,0],[0,0],[-0.35999999999999943,-0.2989999999999924],[-0.06900000000000261,-0.09099999999999397],[-0.021000000000000796,-0.058000000000006935],[0,-0.4649999999999892],[0,0],[0.3780000000000001,-0.3780000000000001],[0,0],[0.5739999999999981,0],[0,0],[0.37700000000000955,0.3780000000000001],[0,0.5749999999999886],[0,0],[-0.2600000000000051,0.34900000000000375],[-0.0379999999999967,0.05000000000001137],[-0.09900000000000375,0.04099999999999682]],\"o\":[[0,0],[0.5010000000000048,0],[0.09900000000000375,0.04099999999999682],[0.04000000000000625,0.05200000000000671],[0.2600000000000051,0.3469999999999942],[0,0],[0,0.5729999999999933],[0,0],[-0.3780000000000001,0.3780000000000001],[0,0],[-0.5739999999999981,0],[-0.3780000000000001,-0.3780000000000001],[0,0],[0,-0.46699999999999875],[0.02200000000000557,-0.05700000000000216],[0.06999999999999318,-0.09099999999999397],[0.36199999999999477,-0.2979999999999876]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]}],\"op\":100},{\"ty\":4,\"nm\":\"Callus-03\",\"ip\":0,\"st\":0,\"ind\":3,\"hix\":4,\"ks\":{\"o\":{\"a\":0,\"k\":100},\"or\":{\"a\":0,\"k\":[0,0,0]},\"a\":{\"a\":0,\"k\":[279.5,114,0]},\"p\":{\"s\":true,\"x\":{\"a\":0,\"k\":274.5},\"y\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[174.79998779296875],\"e\":[200],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":50,\"s\":[200],\"e\":[174.79998779296875],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":100}]}},\"rx\":{\"a\":0,\"k\":0},\"ry\":{\"a\":0,\"k\":0},\"rz\":{\"a\":0,\"k\":0},\"s\":{\"a\":0,\"k\":[106.80000000000001,106.80000000000001]}},\"shapes\":[{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[396.496,110.83],[399.027,108.298],[396.496,105.766],[393.96299999999997,108.298]],\"i\":[[-1.3949999999999818,0],[0,1.394999999999996],[1.3940000000000055,0],[0,-1.394999999999996]],\"o\":[[1.3940000000000055,0],[0,-1.394999999999996],[-1.3949999999999818,0],[5.684341886080802e-14,1.394999999999996]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[406.753,110.83],[409.28499999999997,108.298],[406.753,105.766],[404.221,108.298]],\"i\":[[-1.3940000000000055,0],[0,1.394999999999996],[1.3940000000000055,0],[0,-1.394999999999996]],\"o\":[[1.3940000000000055,0],[0,-1.394999999999996],[-1.3949999999999818,0],[0.0009999999999763531,1.394999999999996]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[417.011,110.83],[419.543,108.298],[417.011,105.766],[414.47900000000004,108.298]],\"i\":[[-1.3940000000000055,0],[0,1.394999999999996],[1.3949999999999818,0],[0,-1.394999999999996]],\"o\":[[1.3949999999999818,0],[0,-1.394999999999996],[-1.3940000000000055,0],[-5.684341886080802e-14,1.394999999999996]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[424.161,93.52],[389.347,93.52],[384.74899999999997,98.118],[384.74899999999997,117.078],[384.74899999999997,118.48100000000001],[384.74899999999997,130.55],[385.066,131.024],[385.625,130.913],[393.459,123.07800000000002],[424.16,123.07800000000002],[428.75800000000004,118.48000000000002],[428.75800000000004,98.117]],\"i\":[[2.52800000000002,0],[0,0],[0,-2.5289999999999964],[0,0],[0,0],[0,0],[-0.19600000000002638,-0.08099999999998886],[-0.1500000000000341,0.14999999999997726],[0,0],[0,0],[0,2.5289999999999964],[0,0]],\"o\":[[0,0],[-2.5289999999999964,0],[0,0],[0,0],[0,0],[0,0.21199999999998909],[0.19600000000002638,0.08099999999998886],[0,0],[0,0],[2.52800000000002,0],[0,0],[-5.684341886080802e-14,-2.5290000000000106]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[177.288,107.474],[179.82000000000002,104.94200000000001],[177.288,102.41000000000001],[174.756,104.94200000000001]],\"i\":[[-1.3950000000000102,0],[0,1.394999999999996],[1.3940000000000055,0],[0,-1.3939999999999912]],\"o\":[[1.3950000000000102,0],[0,-1.394999999999996],[-1.3940000000000055,0],[0,1.394999999999996]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[167.03,107.474],[169.563,104.94200000000001],[167.03,102.41000000000001],[164.498,104.94200000000001]],\"i\":[[-1.3950000000000102,0],[0,1.394999999999996],[1.3959999999999866,0],[0,-1.3939999999999912]],\"o\":[[1.3950000000000102,0],[0,-1.394999999999996],[-1.3950000000000102,0],[0,1.394999999999996]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[156.773,107.474],[159.304,104.94200000000001],[156.773,102.41000000000001],[154.24,104.94200000000001]],\"i\":[[-1.3959999999999866,0],[0,1.394999999999996],[1.3940000000000055,0],[0,-1.3939999999999912]],\"o\":[[1.3940000000000055,0],[0,-1.394999999999996],[-1.3950000000000102,0],[0,1.394999999999996]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-03 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[149.384,90.163],[182.385,90.163],[186.744,94.761],[186.744,113.721],[186.744,115.12400000000001],[186.744,127.19300000000001],[186.444,127.66700000000002],[185.914,127.55600000000001],[178.487,119.72200000000001],[149.384,119.72200000000001],[145.02499999999998,115.12400000000001],[145.02499999999998,94.761]],\"i\":[[-2.3969999999999914,0],[0,0],[0,-2.5289999999999964],[0,0],[0,0],[0,0],[0.18500000000000227,-0.08100000000000307],[0.14099999999999113,0.15000000000000568],[0,0],[0,0],[0,2.5289999999999964],[0,0]],\"o\":[[0,0],[2.397999999999996,0],[0,0],[0,0],[0,0],[0,0.2120000000000033],[-0.18600000000000705,0.08100000000000307],[0,0],[0,0],[-2.3969999999999914,0],[0,0],[2.842170943040401e-14,-2.5289999999999964]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]}],\"op\":100},{\"ty\":4,\"nm\":\"Callus_Artboard 2\",\"ip\":0,\"st\":0,\"ind\":2,\"hix\":5,\"ks\":{\"o\":{\"a\":0,\"k\":100},\"or\":{\"a\":0,\"k\":[0,0,0]},\"a\":{\"a\":0,\"k\":[200,200,0]},\"p\":{\"s\":true,\"x\":{\"a\":1,\"k\":[{\"t\":0,\"s\":[195],\"e\":[213],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":50,\"s\":[213],\"e\":[195],\"i\":{\"x\":[1],\"y\":[1]},\"o\":{\"x\":[0],\"y\":[0]}},{\"t\":100}]},\"y\":{\"a\":0,\"k\":177.79999923706055}},\"rx\":{\"a\":0,\"k\":0},\"ry\":{\"a\":0,\"k\":0},\"rz\":{\"a\":0,\"k\":0},\"s\":{\"a\":0,\"k\":[100,100,100]}},\"shapes\":[{\"ty\":\"gr\",\"nm\":\"Callus_Artboard 2 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[178.563,137.228],[179.82,135.971],[178.563,134.714],[177.30599999999998,135.971]],\"i\":[[-0.6919999999999789,0],[0,0.6920000000000073],[0.6920000000000073,0],[0,-0.6920000000000073]],\"o\":[[0.6920000000000073,0],[0,-0.6920000000000073],[-0.6920000000000073,0],[2.842170943040401e-14,0.6920000000000073]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus_Artboard 2 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[173.471,137.228],[174.728,135.971],[173.471,134.714],[172.214,135.971]],\"i\":[[-0.6920000000000073,0],[0,0.6920000000000073],[0.6920000000000073,0],[0,-0.6920000000000073]],\"o\":[[0.693000000000012,0],[0,-0.6920000000000073],[-0.6920000000000073,0],[0,0.6920000000000073]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus_Artboard 2 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[168.38,137.228],[169.636,135.971],[168.38,134.714],[167.123,135.971]],\"i\":[[-0.6929999999999836,0],[0,0.6920000000000073],[0.6920000000000073,0],[0,-0.6920000000000073]],\"o\":[[0.6920000000000073,0],[0,-0.6920000000000073],[-0.693000000000012,0],[-0.0009999999999763531,0.6920000000000073]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus_Artboard 2 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[178.797,147.237],[175.739,150.841],[173.49,151.876],[172.667,151.422],[172.644,151.171],[172.62300000000002,149.12199999999999],[172.389,148.00099999999998],[164.57600000000002,143.87699999999998],[161.25900000000001,135.259],[165.025,126.16599999999998],[174.11700000000002,122.39999999999998],[183.21,126.16599999999998],[186.977,135.259],[184.651,142.635]],\"i\":[[2.358000000000004,-0.9230000000000018],[1.3799999999999955,-0.8620000000000232],[0.7510000000000048,-0.21299999999999386],[0.10099999999999909,0.35200000000000387],[-0.009000000000014552,0.08400000000000318],[0.08999999999997499,0.679000000000002],[0.10699999999999932,0.36700000000001864],[2.039999999999992,2.2560000000000002],[0,3.194999999999993],[-2.4189999999999827,2.418999999999997],[-3.4210000000000207,0],[-2.4189999999999827,-2.419000000000011],[0,-3.421999999999997],[1.5209999999999866,-2.1670000000000016]],\"o\":[[-0.5490000000000066,1.546999999999997],[-0.6570000000000107,0.41100000000000136],[-0.35200000000000387,0.10200000000000387],[-0.022999999999996135,-0.08099999999998886],[0.0689999999999884,-0.6810000000000116],[-0.049000000000006594,-0.3789999999999907],[-3.0120000000000005,-0.40500000000000114],[-2.141999999999996,-2.3700000000000045],[0,-3.4209999999999923],[2.419000000000011,-2.418999999999997],[3.4209999999999923,0],[2.419000000000011,2.418999999999997],[0,2.6469999999999914],[-1.4560000000000173,2.0730000000000075]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]}],\"op\":100},{\"ty\":4,\"nm\":\"Callus-01\",\"ip\":0,\"st\":0,\"ind\":1,\"hix\":6,\"ks\":{\"o\":{\"a\":0,\"k\":100},\"or\":{\"a\":0,\"k\":[0,0,0]},\"a\":{\"a\":0,\"k\":[275,200,0]},\"p\":{\"s\":true,\"x\":{\"a\":0,\"k\":275},\"y\":{\"a\":0,\"k\":199.99999999999994}},\"rx\":{\"a\":0,\"k\":0},\"ry\":{\"a\":0,\"k\":0},\"rz\":{\"a\":0,\"k\":0},\"s\":{\"a\":0,\"k\":[111.1,111.1]}},\"shapes\":[{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[484.388,259.152],[484.388,259.152]],\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[486.542,250.952],[489.47099999999995,249.738],[492.3999999999999,250.952],[493.6139999999999,253.881],[492.3999999999999,256.811],[489.47099999999995,258.024],[486.542,256.811],[485.328,253.88099999999997],[486.542,250.952]],\"i\":[[0,0],[-1.1439999999999486,0],[-0.7489999999999668,-0.75],[0,-1.1440000000000055],[0.7509999999999764,-0.75],[1.1439999999999486,0],[0.7489999999999668,0.75],[0,1.1450000000000102],[-0.75,0.7489999999999952]],\"o\":[[0.75,-0.75],[1.1449999999999818,0],[0.7509999999999764,0.7489999999999952],[0,1.1450000000000102],[-0.75,0.75],[-1.1449999999999818,0],[-0.75,-0.75],[0,-1.1449999999999818],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[487.437,246.844],[485.814,247.535],[484.389,248.609],[484.08500000000004,248.64600000000002],[482.16,247.53400000000002],[482.15000000000003,247.52800000000002],[481.79900000000004,247.48800000000003],[481.509,247.71000000000004],[481.50100000000003,247.72300000000004],[480.146,250.06900000000005],[480.099,250.43200000000004],[480.32099999999997,250.72200000000004],[480.33399999999995,250.72900000000004],[482.24399999999997,251.83200000000005],[482.364,252.11300000000006],[482.364,252.11300000000006],[482.203,252.98800000000006],[482.15,253.88100000000006],[482.203,254.77300000000005],[482.364,255.64800000000005],[482.22999999999996,255.93700000000004],[480.32099999999997,257.03900000000004],[480.32099999999997,257.04],[480.099,257.33000000000004],[480.146,257.69200000000006],[481.509,260.0520000000001],[481.509,260.0510000000001],[481.79900000000004,260.2730000000001],[482.16,260.2270000000001],[482.175,260.2190000000001],[484.087,259.1150000000001],[484.389,259.1520000000001],[485.814,260.2260000000001],[487.44800000000004,260.92000000000013],[487.634,261.16500000000013],[487.634,263.38600000000014],[487.774,263.72200000000015],[488.111,263.86200000000014],[490.836,263.86200000000014],[491.172,263.72200000000015],[491.31300000000005,263.38600000000014],[491.31300000000005,261.16500000000013],[491.50900000000007,260.91700000000014],[493.13200000000006,260.22600000000017],[494.5570000000001,259.15200000000016],[494.87300000000005,259.12300000000016],[496.785,260.22700000000015],[497.14700000000005,260.27300000000014],[497.43600000000004,260.05100000000016],[497.44500000000005,260.03900000000016],[498.79900000000004,257.69100000000014],[498.79900000000004,257.69100000000014],[498.84600000000006,257.33000000000015],[498.62500000000006,257.04000000000013],[496.70200000000006,255.93000000000012],[496.58200000000005,255.64900000000011],[496.5810000000001,255.64900000000011],[496.7420000000001,254.77400000000011],[496.7950000000001,253.88200000000012],[496.7420000000001,252.98900000000012],[496.5810000000001,252.11400000000012],[496.7150000000001,251.82500000000013],[498.6250000000001,250.72300000000013],[498.8460000000001,250.43300000000013],[498.7990000000001,250.07100000000014],[498.7910000000001,250.05700000000013],[497.4370000000001,247.71100000000013],[497.4370000000001,247.71100000000013],[497.1470000000001,247.48900000000012],[496.7850000000001,247.5350000000001],[496.7850000000001,247.53600000000012],[494.86000000000007,248.6480000000001],[494.55000000000007,248.6060000000001],[493.1310000000001,247.53700000000012],[491.49700000000007,246.84300000000013],[491.31200000000007,246.59800000000013],[491.31200000000007,244.37800000000013],[491.17100000000005,244.04200000000012],[490.83500000000004,243.90100000000012],[488.11,243.90100000000012],[487.773,244.04200000000012],[487.63300000000004,244.37800000000013],[487.63300000000004,246.59800000000013]],\"i\":[[0.11099999999999,-0.025999999999982037],[0.5049999999999955,-0.2920000000000016],[0.42799999999999727,-0.41200000000000614],[0.09699999999997999,0.05500000000000682],[0,0],[0,0],[0.1150000000000091,-0.03100000000000591],[0.06600000000003092,-0.11299999999999955],[0,0],[0,0],[-0.03099999999994907,-0.12000000000000455],[-0.11299999999999955,-0.0660000000000025],[0,0],[0,0],[0.02600000000001046,-0.10800000000000409],[0,0],[0.03699999999997772,-0.2990000000000066],[0,-0.30299999999999727],[-0.03500000000002501,-0.2909999999999968],[-0.06999999999999318,-0.2839999999999918],[0.10400000000004184,-0.0519999999999925],[0,0],[0,0],[0.031999999999982265,-0.1190000000000282],[-0.06600000000003092,-0.11299999999999955],[0,0],[0,0],[-0.1190000000000282,-0.031999999999982265],[-0.11199999999996635,0.06499999999999773],[0,0],[0,0],[-0.07900000000000773,-0.07499999999998863],[-0.5180000000000291,-0.30000000000001137],[-0.5780000000000314,-0.16500000000002046],[-0.0009999999999763531,-0.11099999999999],[0,0],[-0.08699999999998909,-0.08600000000001273],[-0.1309999999999718,0],[0,0],[-0.08600000000001273,0.08600000000001273],[0,0.12999999999999545],[0,0],[-0.11200000000002319,0.02600000000001046],[-0.5049999999999955,0.29199999999997317],[-0.42799999999999727,0.4130000000000109],[-0.09699999999997999,-0.06499999999999773],[0,0],[-0.1190000000000282,0.031999999999982265],[-0.06499999999999773,0.1139999999999759],[0,0],[0,0],[0,0],[0.03099999999994907,0.117999999999995],[0.11299999999999955,0.06499999999999773],[0,0],[-0.02600000000001046,0.10699999999999932],[0,0],[-0.03699999999997772,0.2990000000000066],[0,0.30299999999999727],[0.036000000000001364,0.2909999999999968],[0.07100000000002638,0.2839999999999918],[-0.10400000000004184,0.0519999999999925],[0,0],[-0.031999999999982265,0.11899999999999977],[0.06600000000003092,0.11400000000000432],[0,0],[0,0],[0,0],[0.117999999999995,0.03300000000001546],[0.11299999999999955,-0.06499999999999773],[0,0],[0,0],[0.07999999999998408,0.08099999999998886],[0.5169999999999959,0.2980000000000018],[0.5780000000000314,0.16499999999999204],[0,0.11100000000001842],[0,0],[0.08700000000004593,0.08600000000001273],[0.13100000000002865,0],[0,0],[0.08699999999998909,-0.08599999999998431],[0,-0.13000000000002387],[0,0]],\"o\":[[-0.5740000000000123,0.16599999999999682],[-0.5190000000000055,0.3009999999999877],[-0.08300000000002683,0.0800000000000125],[0,0],[0,0],[-0.11099999999999,-0.060000000000002274],[-0.1190000000000282,0.03200000000001069],[0,0],[0,0],[-0.06499999999999773,0.11299999999999955],[0.031999999999982265,0.117999999999995],[0,0],[0,0],[0.10000000000002274,0.05699999999998795],[0,0],[-0.06999999999999318,0.2839999999999918],[-0.03500000000002501,0.2920000000000016],[0,0.30299999999999727],[0.03699999999997772,0.2990000000000066],[0.028999999999996362,0.11899999999999977],[0,0],[0,0],[-0.11299999999999955,0.06499999999999773],[-0.031999999999982265,0.1190000000000282],[0,0],[0,0],[0.06599999999997408,0.11299999999999955],[0.1190000000000282,0.031999999999982265],[0,0],[0,0],[0.10000000000002274,-0.05700000000001637],[0.42799999999999727,0.4130000000000109],[0.5079999999999814,0.2939999999999827],[0.11200000000002319,0.031999999999982265],[0,0],[0,0.12999999999999545],[0.08699999999998909,0.08600000000001273],[0,0],[0.1309999999999718,0],[0.08699999999998909,-0.08600000000001273],[0,0],[0,-0.1209999999999809],[0.5740000000000123,-0.16599999999999682],[0.5190000000000055,-0.29899999999997817],[0.08699999999998909,-0.08400000000000318],[0,0],[0.11299999999999955,0.06499999999999773],[0.117999999999995,-0.031999999999982265],[0,0],[0,0],[0,0],[0.06499999999999773,-0.11299999999999955],[-0.031999999999982265,-0.1190000000000282],[0,0],[-0.10000000000002274,-0.057999999999992724],[0,0],[0.06999999999999318,-0.28299999999998704],[0.036000000000001364,-0.2909999999999968],[0,-0.30299999999999727],[-0.03699999999997772,-0.2990000000000066],[-0.028999999999996362,-0.11899999999999977],[0,0],[0.11299999999999955,-0.06499999999999773],[0.031999999999982265,-0.11899999999999977],[0,0],[0,0],[0,0],[-0.06599999999997408,-0.11299999999999955],[-0.1190000000000282,-0.03200000000001069],[0,0],[0,0],[-0.10300000000000864,0.060000000000002274],[-0.4259999999999877,-0.41100000000000136],[-0.5079999999999814,-0.29400000000001114],[-0.11200000000002319,-0.03200000000001069],[0,0],[0,-0.12999999999999545],[-0.08600000000001273,-0.08600000000001273],[0,0],[-0.1309999999999718,0],[-0.08600000000001273,0.08600000000001273],[0,0],[-5.684341886080802e-14,0.11899999999988609]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[470.323,198.03],[473.49399999999997,195.911],[477.226,195.171],[480.957,195.912],[484.129,198.031],[486.24800000000005,201.202],[486.98800000000006,204.934],[486.24800000000005,208.666],[484.129,211.837],[480.959,213.95499999999998],[477.226,214.69699999999997],[473.49399999999997,213.95699999999997],[470.323,211.83799999999997],[468.20399999999995,208.66699999999997],[467.46399999999994,204.93499999999997],[468.20399999999995,201.20299999999997],[470.323,198.03]],\"i\":[[0,0],[-1.197999999999979,0.4960000000000093],[-1.3190000000000168,0],[-1.1510000000000105,-0.47800000000000864],[-0.8980000000000246,-0.8979999999999961],[-0.49600000000003774,-1.1970000000000027],[0,-1.3199999999999932],[0.4770000000000323,-1.1510000000000105],[0.8980000000000246,-0.8979999999999961],[1.1970000000000027,-0.49500000000000455],[1.3199999999999932,0],[1.1520000000000437,0.47700000000000387],[0.8979999999999677,0.8969999999999914],[0.49600000000003774,1.1970000000000027],[0,1.3189999999999884],[-0.4770000000000323,1.1519999999999868],[-0.8979999999999677,0.8969999999999914]],\"o\":[[0.8980000000000246,-0.8979999999999961],[1.1510000000000105,-0.47700000000000387],[1.3190000000000168,0],[1.197999999999979,0.4960000000000093],[0.8980000000000246,0.8979999999999961],[0.4759999999999991,1.1519999999999868],[0,1.3199999999999932],[-0.4959999999999809,1.1970000000000027],[-0.8980000000000246,0.8969999999999914],[-1.1510000000000105,0.47800000000000864],[-1.3190000000000168,0],[-1.1970000000000027,-0.4960000000000093],[-0.8980000000000246,-0.8979999999999961],[-0.47699999999997544,-1.1510000000000105],[0,-1.3189999999999884],[0.49600000000003774,-1.1989999999999839],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[473.837,196.744],[470.96299999999997,198.669],[469.03799999999995,201.543],[468.36799999999994,204.93200000000002],[469.03799999999995,208.32100000000003],[470.96299999999997,211.19500000000002],[473.837,213.12000000000003],[477.226,213.79000000000002],[480.613,213.12000000000003],[483.489,211.19500000000002],[485.414,208.32100000000003],[486.084,204.93200000000002],[485.414,201.543],[483.489,198.669],[480.61499999999995,196.744],[477.22599999999994,196.074],[473.837,196.744]],\"i\":[[0,0],[0.8180000000000405,-0.8190000000000168],[0.44700000000000273,-1.079999999999984],[0,-1.203000000000003],[-0.43200000000001637,-1.0420000000000016],[-0.8190000000000168,-0.8179999999999836],[-1.080000000000041,-0.4480000000000075],[-1.2030000000000314,0],[-1.0419999999999732,0.43199999999998795],[-0.81899999999996,0.8190000000000168],[-0.4480000000000359,1.079999999999984],[0,1.2019999999999982],[0.43200000000001637,1.0420000000000016],[0.8190000000000168,0.8179999999999836],[1.080000000000041,0.4480000000000075],[1.2019999999999982,0],[1.04200000000003,-0.4310000000000116]],\"o\":[[-1.0810000000000173,0.4480000000000075],[-0.8190000000000168,0.8189999999999884],[-0.43200000000001637,1.0420000000000016],[0,1.203000000000003],[0.44700000000000273,1.0800000000000125],[0.8179999999999836,0.8189999999999884],[1.0419999999999732,0.43199999999998795],[1.2010000000000218,0],[1.0819999999999936,-0.44700000000000273],[0.8190000000000168,-0.818000000000012],[0.43200000000001637,-1.0420000000000016],[0,-1.2019999999999982],[-0.44700000000000273,-1.0809999999999889],[-0.8190000000000168,-0.8189999999999884],[-1.0419999999999732,-0.43199999999998795],[-1.2029999999999177,0.0009999999999763531],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[472.758,189.561],[470.959,190.202],[469.231,191.065],[467.603,192.144],[466.116,193.412],[465.532,193.691],[464.895,193.56],[460.54999999999995,191.05100000000002],[460.33899999999994,190.98600000000002],[460.09899999999993,191.00500000000002],[459.8789999999999,191.11200000000002],[459.7209999999999,191.29200000000003],[456.6589999999999,196.59300000000002],[456.58299999999986,196.818],[456.60199999999986,197.06500000000003],[456.7089999999999,197.28400000000002],[456.8889999999999,197.443],[461.2079999999999,199.93800000000002],[461.6389999999999,200.42100000000002],[461.7029999999999,200.63400000000001],[461.7919999999999,200.663],[461.6929999999999,201.066],[461.4869999999999,202.01500000000001],[461.3419999999999,202.978],[461.25299999999993,203.949],[461.22399999999993,204.931],[461.25299999999993,205.911],[461.3419999999999,206.88400000000001],[461.48799999999994,207.847],[461.6929999999999,208.797],[461.62799999999993,209.471],[461.16599999999994,209.95000000000002],[457.34099999999995,212.15800000000002],[457.34299999999996,212.16000000000003],[456.89,212.42100000000002],[456.71,212.579],[456.60299999999995,212.798],[456.58399999999995,213.04500000000002],[456.65999999999997,213.27],[459.491,218.17600000000002],[459.493,218.175],[459.722,218.571],[459.88,218.751],[460.1,218.858],[460.345,218.877],[460.569,218.80100000000002],[464.898,216.30300000000003],[465.53000000000003,216.17300000000003],[466.115,216.44900000000004],[466.117,216.45100000000005],[467.605,217.72000000000006],[469.231,218.79900000000006],[470.971,219.66700000000006],[472.802,220.31500000000005],[473.33700000000005,220.68300000000005],[473.54400000000004,221.30000000000004],[473.54600000000005,226.29100000000005],[473.5930000000001,226.52500000000006],[473.7290000000001,226.72700000000006],[473.9300000000001,226.86300000000006],[474.16500000000013,226.90900000000005],[480.28900000000016,226.90900000000005],[480.52300000000014,226.86300000000006],[480.72500000000014,226.72700000000006],[480.86100000000016,226.52500000000006],[480.90700000000015,226.29100000000005],[480.90700000000015,221.3],[481.12900000000013,220.667],[481.6950000000001,220.304],[483.4940000000001,219.662],[485.2220000000001,218.799],[486.8490000000001,217.72],[488.3370000000001,216.451],[488.9520000000001,216.171],[489.6090000000001,216.33499999999998],[493.8810000000001,218.802],[494.1070000000001,218.878],[494.3540000000001,218.85899999999998],[494.5730000000001,218.75199999999998],[494.7310000000001,218.57199999999997],[497.7930000000001,213.271],[497.86900000000014,213.045],[497.85100000000017,212.79899999999998],[497.74400000000014,212.57899999999998],[497.5670000000001,212.421],[493.2450000000001,209.926],[492.8150000000001,209.44299999999998],[492.7600000000001,209.278],[492.6470000000001,209.255],[492.7610000000001,208.797],[492.96600000000007,207.849],[493.1120000000001,206.885],[493.2010000000001,205.91199999999998],[493.2290000000001,204.932],[493.2010000000001,203.951],[493.1120000000001,202.98],[492.96600000000007,202.01399999999998],[492.7610000000001,201.06699999999998],[492.8260000000001,200.39199999999997],[493.28600000000006,199.91399999999996],[497.56700000000006,197.44299999999996],[497.74500000000006,197.28599999999994],[497.8520000000001,197.06599999999995],[497.87000000000006,196.81999999999994],[497.79400000000004,196.59399999999994],[494.732,191.29299999999995],[494.574,191.11299999999994],[494.355,191.00599999999994],[494.108,190.98699999999994],[493.883,191.06399999999994],[489.558,193.55999999999995],[488.90999999999997,193.68899999999994],[488.325,193.39999999999995],[486.844,192.13799999999995],[485.222,191.06499999999994],[483.48199999999997,190.19699999999995],[481.65099999999995,189.54899999999995],[481.11499999999995,189.18099999999995],[480.90899999999993,188.56399999999996],[480.9069999999999,183.57399999999996],[480.86099999999993,183.33999999999995],[480.72399999999993,183.13899999999995],[480.5229999999999,183.00299999999996],[480.28899999999993,182.95699999999997],[474.1649999999999,182.95699999999997],[473.9299999999999,183.00299999999996],[473.7269999999999,183.13799999999995],[473.54599999999994,183.57399999999996],[473.54599999999994,188.56399999999996],[473.3259999999999,189.19699999999997],[472.758,189.561]],\"i\":[[0,0],[0.5869999999999891,-0.25],[0.5550000000000068,-0.3199999999999932],[0.5209999999999582,-0.3919999999999959],[0.4670000000000414,-0.44999999999998863],[0.21199999999998909,-0.02600000000001046],[0.19499999999999318,0.11299999999999955],[1.4040000000000532,0.8619999999999948],[0.07200000000000273,0.008000000000009777],[0.07800000000003138,-0.02199999999999136],[0.06500000000005457,-0.05000000000001137],[0.04200000000003001,-0.07200000000000273],[0.9680000000000177,-1.6769999999999925],[0.010000000000047748,-0.07699999999999818],[-0.02199999999999136,-0.08200000000002206],[-0.049000000000035016,-0.06499999999999773],[-0.07100000000002638,-0.04200000000000159],[-1.3670000000000186,-0.7890000000000157],[-0.08400000000000318,-0.19599999999999795],[-0.014000000000010004,-0.0730000000000075],[0,0],[0,0],[0.05900000000002592,-0.3160000000000025],[0.03999999999996362,-0.3340000000000032],[0.019000000000005457,-0.3199999999999932],[0,-0.3410000000000082],[-0.01999999999998181,-0.3109999999999786],[-0.040000000000020464,-0.32800000000000296],[-0.05700000000001637,-0.30699999999998795],[-0.07799999999997453,-0.31699999999997885],[0.09399999999999409,-0.20300000000000296],[0.20699999999999363,-0.10600000000002296],[0,0],[0,0],[0,0],[0.04800000000000182,-0.0619999999999834],[0.021000000000015007,-0.07900000000000773],[-0.009999999999990905,-0.08100000000001728],[-0.04099999999999682,-0.07200000000000273],[0,0],[0,0],[0,0],[-0.06200000000001182,-0.046999999999997044],[-0.08000000000004093,-0.020999999999986585],[-0.07999999999998408,0.009999999999990905],[-0.07099999999996953,0.04099999999999682],[-1.4139999999999873,0.8160000000000025],[-0.20999999999997954,-0.025000000000005684],[-0.16199999999997772,-0.15399999999999636],[0,0],[-0.5240000000000009,-0.39500000000001023],[-0.5629999999999882,-0.32600000000002183],[-0.6000000000000227,-0.2560000000000002],[-0.6310000000000286,-0.18099999999998317],[-0.1290000000000191,-0.17199999999999704],[-0.0009999999999763531,-0.2259999999999991],[0,0],[-0.03100000000000591,-0.07099999999999795],[-0.05800000000004957,-0.0589999999999975],[-0.07600000000002183,-0.031999999999982265],[-0.08500000000003638,0],[0,0],[-0.07099999999996953,0.030000000000001137],[-0.057999999999992724,0.057999999999992724],[-0.03100000000000591,0.07499999999998863],[0,0.08400000000000318],[0,0],[-0.13999999999998636,0.17600000000001614],[-0.2259999999999991,0.054000000000002046],[-0.5869999999999891,0.2510000000000048],[-0.5550000000000068,0.32099999999999795],[-0.5199999999999818,0.3930000000000007],[-0.46800000000001774,0.45000000000001705],[-0.22399999999998954,0.020000000000010232],[-0.19700000000000273,-0.12899999999999068],[0,0],[-0.07799999999997453,-0.009999999999990905],[-0.08199999999999363,0.02199999999999136],[-0.06400000000002137,0.05000000000001137],[-0.04099999999999682,0.07200000000000273],[-1.0160000000000196,1.768999999999977],[-0.010000000000047748,0.07800000000000296],[0.02199999999999136,0.08100000000001728],[0.049000000000035016,0.06399999999999295],[0.07100000000002638,0.04099999999999682],[0,0],[0.08300000000002683,0.19599999999999795],[0.013000000000033651,0.055999999999983174],[0,0],[0,0],[-0.057999999999992724,0.3149999999999977],[-0.04099999999999682,0.33500000000000796],[-0.019000000000005457,0.32200000000000273],[0,0.3400000000000034],[0.019000000000005457,0.3129999999999882],[0.040000000000020464,0.3269999999999982],[0.05600000000004002,0.30400000000000205],[0.07900000000000773,0.3160000000000025],[-0.09499999999997044,0.20199999999999818],[-0.20499999999998408,0.10599999999999454],[0,0],[-0.04800000000000182,0.0630000000000166],[-0.022000000000048203,0.08099999999998886],[0.010000000000047748,0.08100000000001728],[0.04099999999999682,0.07200000000000273],[0.9700000000000273,1.6699999999999875],[0.06200000000001182,0.046999999999997044],[0.07900000000000773,0.020999999999986585],[0.08100000000001728,-0.009999999999990905],[0.07300000000003593,-0.04200000000000159],[0,0],[0.21600000000000819,0.030000000000001137],[0.16100000000000136,0.1599999999999966],[0.5169999999999959,0.38800000000000523],[0.5660000000000309,0.3269999999999982],[0.6009999999999991,0.25499999999999545],[0.6299999999999955,0.18000000000000682],[0.12999999999999545,0.17099999999999227],[0,0.2259999999999991],[0,0],[0.028999999999996362,0.07099999999999795],[0.05900000000002592,0.057999999999992724],[0.07500000000004547,0.031999999999982265],[0.08299999999996999,0],[0,0],[0.07100000000002638,-0.030000000000001137],[0.057999999999992724,-0.05699999999998795],[0,-0.16900000000001114],[0,0],[0.13700000000000045,-0.1740000000000066],[0.2259999999999991,-0.05299999999999727]],\"o\":[[-0.6100000000000136,0.17599999999998772],[-0.5960000000000036,0.2539999999999907],[-0.5629999999999882,0.3259999999999934],[-0.5230000000000246,0.39400000000000546],[-0.16599999999999682,0.1599999999999966],[-0.21699999999998454,0.02600000000001046],[-1.4329999999999927,-0.828000000000003],[-0.06799999999998363,-0.03499999999999659],[-0.08100000000001728,-0.008000000000009777],[-0.07900000000000773,0.020999999999986585],[-0.06099999999997863,0.046999999999997044],[-1.045000000000016,1.5809999999999889],[-0.04199999999997317,0.07099999999999795],[-0.009999999999990905,0.08099999999998886],[0.021000000000015007,0.07900000000000773],[0.04800000000000182,0.06299999999998818],[1.2909999999999968,0.8530000000000086],[0.20100000000002183,0.1150000000000091],[0.028999999999996362,0.06800000000001205],[0,0],[0,0],[-0.07900000000000773,0.3170000000000073],[-0.055999999999983174,0.30699999999998795],[-0.040000000000020464,0.3259999999999934],[-0.019000000000005457,0.3129999999999882],[0,0.3410000000000082],[0.019000000000005457,0.32099999999999795],[0.040000000000020464,0.33500000000000796],[0.057999999999992724,0.3149999999999977],[0.057999999999992724,0.23500000000001364],[-0.09399999999999409,0.20199999999999818],[0,0],[0,0],[0,0],[-0.07200000000000273,0.04200000000000159],[-0.04899999999997817,0.06399999999999295],[-0.02199999999999136,0.08299999999999841],[0.009999999999990905,0.0759999999999934],[0,0],[0,0],[0,0],[0.04199999999997317,0.07200000000000273],[0.06499999999999773,0.05000000000001137],[0.08100000000001728,0.02199999999999136],[0.07600000000002183,-0.009999999999990905],[1.3700000000000045,-0.86099999999999],[0.20199999999999818,-0.1150000000000091],[0.21699999999998454,0.02600000000001046],[0,0],[0.46699999999998454,0.44999999999998863],[0.5190000000000055,0.3930000000000007],[0.5579999999999927,0.32200000000000273],[0.5889999999999986,0.25],[0.22100000000000364,0.06299999999998818],[0.132000000000005,0.17300000000000182],[0,0],[0,0.08400000000000318],[0.029999999999972715,0.07499999999998863],[0.05700000000001637,0.057999999999992724],[0.07100000000002638,0.030000000000001137],[0,0],[0.08300000000002683,0],[0.07499999999998863,-0.03200000000001069],[0.057999999999992724,-0.057999999999992724],[0.028999999999996362,-0.07099999999999795],[0,0],[0,-0.23699999999999477],[0.14100000000001955,-0.17900000000000205],[0.61099999999999,-0.17599999999998772],[0.5960000000000036,-0.2529999999999859],[0.5640000000000214,-0.32499999999998863],[0.5230000000000246,-0.39400000000000546],[0.17300000000000182,-0.16599999999999682],[0.22699999999997544,-0.020999999999986585],[0,0],[0.07100000000002638,0.04099999999999682],[0.08100000000001728,0.01099999999999568],[0.07900000000000773,-0.020999999999986585],[0.06200000000001182,-0.046999999999997044],[1.0149999999999864,-1.7700000000000102],[0.04099999999999682,-0.07099999999999795],[0.009999999999990905,-0.0800000000000125],[-0.02199999999999136,-0.08099999999998886],[-0.047000000000025466,-0.06399999999999295],[0,0],[-0.19999999999998863,-0.1150000000000091],[-0.023000000000024556,-0.05299999999999727],[0,0],[0,0],[0.07799999999997453,-0.3160000000000025],[0.055999999999983174,-0.30699999999998795],[0.040000000000020464,-0.3269999999999982],[0.019000000000005457,-0.3120000000000118],[0,-0.3410000000000082],[-0.019000000000005457,-0.3199999999999932],[-0.04199999999997317,-0.33899999999999864],[-0.057999999999992724,-0.31399999999999295],[-0.057999999999992724,-0.23599999999999],[0.09600000000000364,-0.20199999999999818],[0,0],[0.07100000000002638,-0.03999999999999204],[0.04800000000000182,-0.06299999999998818],[0.02199999999999136,-0.08199999999999363],[-0.011000000000024102,-0.07800000000000296],[-1.045000000000016,-1.554000000000002],[-0.04199999999997317,-0.07200000000000273],[-0.06499999999999773,-0.049000000000006594],[-0.08100000000001728,-0.02199999999999136],[-0.07499999999998863,0.00899999999998613],[0,0],[-0.20400000000000773,0.11899999999999977],[-0.21800000000001774,-0.030000000000001137],[-0.4700000000000273,-0.4519999999999982],[-0.51400000000001,-0.38700000000000045],[-0.5579999999999927,-0.32200000000000273],[-0.5889999999999986,-0.2510000000000048],[-0.22199999999998,-0.06399999999999295],[-0.132000000000005,-0.1740000000000066],[0,0],[0,-0.08400000000000318],[-0.029999999999972715,-0.07400000000001228],[-0.05700000000001637,-0.057999999999992724],[-0.07100000000002638,-0.030000000000001137],[0,0],[-0.08400000000000318,0],[-0.07600000000002183,0.03100000000000591],[-0.11099999999999,0.11299999999999955],[0,0],[0,0.23900000000000432],[-0.14399999999989177,0.18000000000003524],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[470.605,189.372],[468.778,190.28500000000003],[467.058,191.42400000000004],[465.49,192.76300000000003],[465.422,192.79500000000004],[465.34700000000004,192.78100000000003],[460.985,190.26200000000003],[460.439,190.09000000000003],[459.86600000000004,190.13300000000004],[459.33200000000005,190.39600000000004],[458.94000000000005,190.84100000000004],[455.87800000000004,196.14200000000002],[455.689,196.70600000000002],[455.72900000000004,197.3],[455.992,197.833],[456.437,198.224],[460.759,200.72],[460.808,200.776],[460.815,200.852],[460.714,201.255],[460.721,201.257],[460.6,201.854],[460.444,202.87300000000002],[460.35200000000003,203.89700000000002],[460.32000000000005,204.931],[460.35200000000003,205.965],[460.444,206.99],[460.6,208.008],[460.81600000000003,209.012],[460.80800000000005,209.09],[460.75500000000005,209.148],[455.98400000000004,211.901],[456.04,211.971],[455.992,212.031],[455.72900000000004,212.566],[455.689,213.159],[455.88,213.72199999999998],[459.17,219.421],[459.231,219.384],[459.33299999999997,219.469],[459.86699999999996,219.732],[460.45799999999997,219.772],[461.00699999999995,219.59099999999998],[465.34899999999993,217.08399999999997],[465.42099999999994,217.07199999999997],[465.49199999999996,217.10399999999998],[467.05899999999997,218.44199999999998],[468.77799999999996,219.57999999999998],[470.616,220.498],[472.553,221.185],[472.616,221.228],[472.64099999999996,221.30100000000002],[472.64099999999996,226.29200000000003],[472.758,226.87300000000002],[473.09,227.36800000000002],[473.58299999999997,227.69800000000004],[474.164,227.81400000000005],[480.288,227.81400000000005],[480.868,227.69800000000004],[481.362,227.36800000000002],[481.69300000000004,226.87300000000002],[481.81000000000006,226.29200000000003],[481.81000000000006,221.3],[481.83400000000006,221.22500000000002],[481.90100000000007,221.18300000000002],[481.92100000000005,221.175],[483.845,220.49300000000002],[485.672,219.58],[487.391,218.441],[488.96000000000004,217.101],[489.03100000000006,217.067],[489.10900000000004,217.086],[493.43100000000004,219.58100000000002],[493.992,219.77],[494.58500000000004,219.73000000000002],[495.119,219.467],[495.50300000000004,219.03500000000003],[498.79400000000004,213.33500000000004],[498.73600000000005,213.30000000000004],[498.761,213.15600000000003],[498.721,212.56400000000002],[498.458,212.02900000000002],[498.01300000000003,211.63800000000003],[493.69100000000003,209.14300000000003],[493.641,209.08700000000002],[493.63500000000005,209.00900000000001],[493.74700000000007,208.55200000000002],[493.7410000000001,208.55100000000002],[493.8500000000001,208.00900000000001],[494.0060000000001,206.989],[494.0990000000001,205.964],[494.1310000000001,204.93],[494.0990000000001,203.89700000000002],[494.0060000000001,202.86900000000003],[493.8500000000001,201.85000000000002],[493.63400000000007,200.85000000000002],[493.6430000000001,200.76900000000003],[493.6980000000001,200.71300000000002],[498.0150000000001,198.22100000000003],[498.4590000000001,197.82900000000004],[498.7210000000001,197.29600000000005],[498.76100000000014,196.70400000000004],[498.57800000000015,196.15300000000005],[495.28200000000015,190.44100000000006],[495.2210000000002,190.47800000000007],[495.1190000000002,190.39300000000006],[494.5850000000002,190.13000000000005],[493.9930000000002,190.09000000000006],[493.43200000000024,190.27700000000007],[493.11200000000025,190.46100000000007],[493.1130000000002,190.46400000000006],[489.1040000000002,192.77700000000004],[489.0280000000002,192.79300000000003],[488.9590000000002,192.75900000000004],[488.94800000000015,192.74800000000005],[487.38300000000015,191.41500000000005],[485.6730000000002,190.28200000000004],[483.8340000000002,189.36400000000003],[481.8980000000002,188.67700000000002],[481.8350000000002,188.63400000000001],[481.8110000000002,188.561],[481.8110000000002,183.571],[481.6940000000002,182.99],[481.36100000000016,182.496],[480.86800000000017,182.16500000000002],[480.2880000000002,182.04800000000003],[474.16400000000016,182.04800000000003],[473.58300000000014,182.16500000000002],[473.08800000000014,182.496],[472.64100000000013,183.571],[472.64100000000013,188.561],[472.61600000000016,188.637],[472.54900000000015,188.678],[472.53000000000014,188.685]],\"i\":[[0.6169999999999618,-0.26200000000000045],[0.5880000000000223,-0.33899999999999864],[0.5470000000000255,-0.41200000000000614],[0.4959999999999809,-0.47800000000000864],[0.02600000000001046,-0.0030000000000143245],[0.02199999999999136,0.012000000000000455],[1.4519999999999982,0.8439999999999941],[0.18799999999998818,0.02199999999999136],[0.18399999999996908,-0.049000000000006594],[0.16100000000000136,-0.12300000000001887],[0.10300000000000864,-0.17799999999999727],[1.0080000000000382,-1.745999999999981],[0.02400000000000091,-0.19499999999999318],[-0.051000000000044565,-0.1910000000000025],[-0.12299999999999045,-0.1599999999999966],[-0.17799999999999727,-0.10200000000000387],[-1.4230000000000018,-0.8220000000000027],[-0.008999999999957708,-0.023000000000024556],[0.007000000000005002,-0.025000000000005684],[0,0],[0,0],[0.03699999999997772,-0.20199999999999818],[0.04099999999999682,-0.3329999999999984],[0.020999999999958163,-0.3509999999999991],[0,-0.3359999999999843],[-0.020999999999958163,-0.35200000000000387],[-0.03999999999996362,-0.3310000000000173],[-0.06200000000001182,-0.34499999999999886],[-0.08100000000001728,-0.3259999999999934],[0.012000000000000455,-0.02400000000000091],[0.023000000000024556,-0.009999999999990905],[1.5699999999999932,-0.9070000000000107],[0,0],[0,0],[0.05099999999998772,-0.19200000000000728],[-0.024999999999977263,-0.2009999999999934],[-0.1029999999999518,-0.1769999999999925],[0,0],[0,0],[-0.036000000000001364,-0.027000000000015234],[-0.19200000000000728,-0.051000000000016144],[-0.19999999999998863,0.025000000000005684],[-0.17300000000000182,0.09700000000000841],[-1.4209999999999923,0.8199999999999932],[-0.024999999999977263,-0.003999999999990678],[-0.018000000000029104,-0.018000000000000682],[-0.5470000000000255,-0.4129999999999825],[-0.5989999999999895,-0.34600000000000364],[-0.6330000000000382,-0.27000000000001023],[-0.6610000000000014,-0.18999999999999773],[-0.014999999999986358,-0.020000000000010232],[0.0020000000000095497,-0.025000000000005684],[0,0],[-0.07600000000002183,-0.1799999999999784],[-0.14100000000001955,-0.14000000000001478],[-0.18500000000000227,-0.0770000000000266],[-0.20400000000000773,0],[0,0],[-0.18000000000000682,0.07400000000001228],[-0.14100000000001955,0.13900000000001],[-0.07800000000003138,0.1880000000000166],[0,0.2039999999999793],[0,0],[-0.014999999999986358,0.018999999999977035],[-0.026999999999986812,0.007000000000005002],[0,0],[-0.6169999999999618,0.26200000000000045],[-0.5869999999999891,0.3400000000000034],[-0.5459999999999923,0.41200000000000614],[-0.49600000000003774,0.4790000000000134],[-0.02400000000000091,0.002999999999985903],[-0.02400000000000091,-0.01500000000001478],[0,0],[-0.19299999999998363,-0.02400000000000091],[-0.18900000000002137,0.0519999999999925],[-0.16100000000000136,0.12300000000001887],[-0.10099999999999909,0.17099999999999227],[-1.08299999999997,1.875],[0,0],[-0.005999999999971806,0.04800000000000182],[0.05200000000002092,0.19000000000002615],[0.12299999999999045,0.16100000000000136],[0.17799999999999727,0.10299999999998022],[0,0],[0.011000000000024102,0.023000000000024556],[-0.006000000000028649,0.025000000000005684],[0,0],[0,0],[-0.033999999999991815,0.18299999999999272],[-0.040000000000020464,0.3340000000000032],[-0.02199999999999136,0.3509999999999991],[0,0.3359999999999843],[0.020999999999958163,0.35199999999997544],[0.04099999999999682,0.3340000000000032],[0.06299999999998818,0.3480000000000132],[0.08100000000001728,0.3230000000000075],[-0.012000000000000455,0.026999999999986812],[-0.02400000000000091,0.012000000000000455],[0,0],[-0.11700000000001864,0.15500000000000114],[-0.05099999999998772,0.18899999999999295],[0.025999999999953616,0.20000000000001705],[0.09800000000001319,0.17499999999998295],[1.0879999999999654,1.884999999999991],[0,0],[0.036000000000001364,0.027000000000015234],[0.19099999999997408,0.051000000000016144],[0.20099999999996498,-0.025000000000005684],[0.17499999999995453,-0.10000000000002274],[0,0],[0,0],[0,0],[0.025000000000034106,0.0030000000000143245],[0.019000000000005457,0.018000000000000682],[0,0],[0.5520000000000209,0.41499999999999204],[0.589999999999975,0.3410000000000082],[0.6340000000000146,0.26900000000000546],[0.6599999999999682,0.18999999999999773],[0.014999999999986358,0.020000000000010232],[-0.0020000000000095497,0.025000000000005684],[0,0],[0.07500000000004547,0.1799999999999784],[0.14100000000001955,0.13800000000000523],[0.18599999999997863,0.07699999999999818],[0.20299999999997453,0],[0,0],[0.18000000000000682,-0.07499999999998863],[0.1430000000000291,-0.13999999999998636],[0,-0.41799999999997794],[0,0],[0.01599999999996271,-0.020999999999986585],[0.02800000000002001,-0.006000000000000227],[0,0]],\"o\":[[-0.6299999999999955,0.2680000000000007],[-0.5989999999999895,0.34600000000000364],[-0.5470000000000255,0.4130000000000109],[-0.019000000000005457,0.018000000000000682],[-0.02600000000001046,0.002999999999985903],[-1.4540000000000077,-0.8389999999999986],[-0.17300000000000182,-0.09399999999999409],[-0.19299999999998363,-0.02199999999999136],[-0.19200000000000728,0.05099999999998772],[-0.15499999999997272,0.117999999999995],[-1.0529999999999973,1.7069999999999936],[-0.10199999999997544,0.1769999999999925],[-0.02600000000001046,0.2009999999999934],[0.05099999999998772,0.1910000000000025],[0.117999999999995,0.15500000000000114],[1.3910000000000196,0.8590000000000089],[0.02199999999999136,0.012000000000000455],[0.009999999999990905,0.02400000000000091],[0,0],[0,0],[-0.043000000000006366,0.19599999999999795],[-0.06299999999998818,0.34600000000000364],[-0.040000000000020464,0.33099999999998886],[-0.02199999999999136,0.35200000000000387],[0,0.33600000000001273],[0.021000000000015007,0.3509999999999991],[0.04099999999999682,0.3329999999999984],[0.06299999999998818,0.3439999999999941],[0.007000000000005002,0.02600000000001046],[-0.012000000000000455,0.02600000000001046],[-1.5880000000000223,0.8480000000000132],[0,0],[0,0],[-0.12299999999999045,0.16100000000000136],[-0.05099999999998772,0.18999999999999773],[0.02400000000000091,0.1939999999999884],[0,0],[0,0],[0.03300000000001546,0.030000000000001137],[0.16100000000000136,0.12299999999999045],[0.18900000000002137,0.0519999999999925],[0.18900000000002137,-0.02400000000000091],[1.4390000000000214,-0.76400000000001],[0.01999999999998181,-0.01099999999999568],[0.026999999999986812,0.002999999999985903],[0.4959999999999809,0.47800000000000864],[0.5459999999999923,0.41100000000000136],[0.5910000000000082,0.34200000000001296],[0.6290000000000191,0.2680000000000007],[0.02600000000001046,0.008000000000009777],[0.016999999999995907,0.02199999999999136],[0,0],[0,0.20400000000000773],[0.07799999999997453,0.18799999999998818],[0.14100000000001955,0.13900000000001],[0.18000000000000682,0.07400000000001228],[0,0],[0.20299999999997453,0],[0.18599999999997863,-0.07800000000000296],[0.13900000000001,-0.13999999999998636],[0.07499999999998863,-0.18000000000000682],[0,0],[0,-0.030000000000001137],[0.016000000000019554,-0.019000000000005457],[0,0],[0.6639999999999873,-0.1910000000000025],[0.6299999999999955,-0.26900000000000546],[0.5989999999999895,-0.3470000000000084],[0.5480000000000018,-0.4130000000000109],[0.01999999999998181,-0.020000000000010232],[0.026999999999986812,-0.0020000000000095497],[0,0],[0.17700000000002092,0.10200000000000387],[0.20100000000002183,0.025000000000005684],[0.19099999999997408,-0.05000000000001137],[0.15100000000001046,-0.11400000000000432],[1.134999999999991,-1.8259999999999934],[0,0],[0.011000000000024102,-0.04800000000000182],[0.02600000000001046,-0.2009999999999934],[-0.05099999999998772,-0.1910000000000025],[-0.117999999999995,-0.15399999999999636],[0,0],[-0.02199999999999136,-0.01300000000000523],[-0.009999999999990905,-0.025000000000005684],[0,0],[0,0],[0.038000000000010914,-0.17799999999999727],[0.06299999999998818,-0.34499999999999886],[0.040000000000020464,-0.33199999999999363],[0.021000000000015007,-0.35200000000000387],[0,-0.33600000000001273],[-0.021000000000015007,-0.35200000000000387],[-0.040000000000020464,-0.33099999999998886],[-0.06299999999998818,-0.3429999999999893],[-0.005999999999971806,-0.02600000000001046],[0.011000000000024102,-0.022999999999996135],[0,0],[0.17799999999999727,-0.10300000000000864],[0.12299999999999045,-0.16200000000000614],[0.05200000000002092,-0.18999999999999773],[-0.02400000000000091,-0.18899999999999295],[-1.02800000000002,-1.9050000000000011],[0,0],[-0.03300000000001546,-0.030000000000001137],[-0.16100000000000136,-0.12299999999999045],[-0.18900000000002137,-0.05099999999998772],[-0.19400000000001683,0.025000000000005684],[0,0],[0,0],[0,0],[-0.02400000000000091,0.014000000000010004],[-0.024999999999977263,-0.003999999999990678],[0,0],[-0.49099999999998545,-0.4720000000000084],[-0.5480000000000018,-0.41200000000000614],[-0.5910000000000082,-0.34200000000001296],[-0.6290000000000191,-0.2680000000000007],[-0.026999999999986812,-0.007000000000005002],[-0.016000000000019554,-0.02199999999999136],[0,0],[0,-0.20400000000000773],[-0.07799999999997453,-0.18799999999998818],[-0.13999999999998636,-0.13999999999998636],[-0.18000000000000682,-0.07499999999998863],[0,0],[-0.20400000000000773,0],[-0.18500000000000227,0.07699999999999818],[-0.27600000000001046,0.27600000000001046],[0,0],[0,0.028999999999996362],[-0.016000000000019554,0.019000000000005457],[0,0],[-0.6650000000001342,0.19499999999999318]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.156,336.617],[121.37400000000001,336.617],[124.35900000000001,332.78700000000003],[124.35900000000001,332.78700000000003],[121.37400000000001,328.958],[108.156,328.958],[105.171,332.78700000000003],[105.171,332.78700000000003]],\"i\":[[-1.6420000000000101,0],[0,0],[0,2.1059999999999945],[0,0],[1.6410000000000053,0],[0,0],[0,-2.1059999999999945],[0,0]],\"o\":[[0,0],[1.641999999999996,0],[0,0],[0,-2.1070000000000277],[0,0],[-1.641999999999996,0],[0,0],[0,2.1059999999999377]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.03529411764705882,0.0392156862745098,0.06666666666666667,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[508.016,336.617],[135.594,336.617],[132.60999999999999,332.78700000000003],[132.60999999999999,332.78700000000003],[135.594,328.958],[508.017,328.958],[511.001,332.78700000000003],[511.001,332.78700000000003]],\"i\":[[1.6399999999999864,0],[0,0],[0,2.1059999999999945],[0,0],[-1.6400000000000148,0],[0,0],[0,-2.1059999999999945],[0,0]],\"o\":[[0,0],[-1.63900000000001,0],[0,0],[0,-2.1070000000000277],[0,0],[1.6399999999999864,0],[0,0],[-0.0009999999999763531,2.1059999999999377]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.03529411764705882,0.0392156862745098,0.06666666666666667,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[228.757,319.858],[228.13400000000001,320.121],[227.62,320.851],[227.915,321.816],[228.373,321.75399999999996],[228.85899999999998,321.60599999999994],[228.51,322.3709999999999],[227.47799999999998,322.5559999999999],[226.51699999999997,322.1169999999999],[226.69199999999998,320.8469999999999],[227.30399999999997,319.93499999999995],[228.14299999999997,319.32899999999995],[229.10299999999998,319.11699999999996],[230.03199999999998,319.352],[229.43099999999998,320.06399999999996],[229.12699999999998,319.917],[228.757,319.858]],\"i\":[[0,0],[0.19999999999998863,-0.17499999999995453],[0.1419999999999959,-0.31100000000003547],[-0.4899999999999807,0],[-0.15799999999998704,0.04099999999999682],[-0.1670000000000016,0.05800000000004957],[0,0],[0.35200000000000387,0],[0.1360000000000241,0.29200000000003],[-0.25200000000000955,0.5539999999999736],[-0.2510000000000048,0.26200000000000045],[-0.3089999999999975,0.1419999999999959],[-0.3310000000000173,0],[-0.2580000000000098,-0.1570000000000391],[0,0],[0.10599999999999454,0.04099999999999682],[0.14300000000000068,0]],\"o\":[[-0.21399999999999864,0],[-0.2009999999999934,0.17700000000002092],[-0.29300000000000637,0.6429999999999723],[0.14699999999999136,0],[0.1570000000000107,-0.04099999999999682],[0,0],[-0.33600000000001273,0.12400000000002365],[-0.5049999999999955,0],[-0.13599999999999568,-0.29300000000000637],[0.15799999999998704,-0.3450000000000273],[0.25,-0.2629999999999768],[0.3100000000000023,-0.14100000000001955],[0.36099999999999,0],[0,0],[-0.09700000000000841,-0.057999999999992724],[-0.103999999999985,-0.03899999999998727],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[231.528,322.51],[232.517,322.51],[232.945,319.15],[231.739,319.15],[229.115,322.51],[230.108,322.51],[230.564,321.881],[231.65099999999998,321.881],[231.528,322.51]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[231.8,321.142],[231.089,321.142],[231.84,320.087],[232.097,319.702],[232.002,320.11899999999997],[231.90800000000002,320.592],[231.8,321.142]],\"i\":[[0,0],[0,0],[-0.1220000000000141,0.17700000000002092],[-0.05000000000001137,0.07799999999997453],[0.04099999999999682,-0.19499999999999318],[0.02199999999999136,-0.12100000000003774],[0,0]],\"o\":[[0,0],[0.3779999999999859,-0.5249999999999773],[0.12100000000000932,-0.17899999999997362],[-0.02400000000000091,0.08400000000000318],[-0.03999999999999204,0.19400000000001683],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[233.255,322.51],[234.78199999999998,319.164],[235.68499999999997,319.164],[234.49199999999996,321.779],[235.77999999999997,321.779],[235.44699999999997,322.51],[233.255,322.51]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[236.36,322.51],[237.88600000000002,319.164],[238.79000000000002,319.164],[237.597,321.779],[238.88500000000002,321.779],[238.55100000000002,322.51],[236.36,322.51]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[243.003,319.858],[242.38,320.121],[241.867,320.851],[242.161,321.816],[242.619,321.75399999999996],[243.105,321.60599999999994],[242.756,322.3709999999999],[241.724,322.5559999999999],[240.76299999999998,322.1169999999999],[240.938,320.8469999999999],[241.54999999999998,319.93499999999995],[242.38899999999998,319.32899999999995],[243.349,319.11699999999996],[244.278,319.352],[243.677,320.06399999999996],[243.373,319.917],[243.003,319.858]],\"i\":[[0,0],[0.19999999999998863,-0.17499999999995453],[0.14099999999999113,-0.31100000000003547],[-0.4900000000000091,0],[-0.1570000000000107,0.04099999999999682],[-0.1670000000000016,0.05800000000004957],[0,0],[0.35200000000000387,0],[0.1360000000000241,0.29200000000003],[-0.25200000000000955,0.5539999999999736],[-0.2510000000000048,0.26200000000000045],[-0.3100000000000023,0.1419999999999959],[-0.3310000000000173,0],[-0.2580000000000098,-0.1570000000000391],[0,0],[0.10599999999999454,0.04099999999999682],[0.14300000000000068,0]],\"o\":[[-0.21399999999999864,0],[-0.2009999999999934,0.17700000000002092],[-0.29400000000001114,0.6429999999999723],[0.14799999999999613,0],[0.1570000000000107,-0.04099999999999682],[0,0],[-0.33600000000001273,0.12400000000002365],[-0.5049999999999955,0],[-0.13599999999999568,-0.29300000000000637],[0.15799999999998704,-0.3450000000000273],[0.24899999999999523,-0.2629999999999768],[0.3100000000000023,-0.14100000000001955],[0.36099999999999,0],[0,0],[-0.09700000000000841,-0.057999999999992724],[-0.103999999999985,-0.03899999999998727],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[245.709,322.51],[246.04500000000002,321.774],[244.96200000000002,321.774],[245.251,321.142],[246.254,321.142],[246.58499999999998,320.415],[245.58299999999997,320.415],[245.82199999999997,319.89000000000004],[246.90499999999997,319.89000000000004],[247.23699999999997,319.16400000000004],[245.24999999999997,319.16400000000004],[243.72299999999998,322.51000000000005],[245.709,322.51000000000005]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[249.856,322.51],[248.67,322.51],[248.524,320.152],[248.504,320.152],[248.16,321.001],[247.472,322.51],[246.67100000000002,322.51],[248.19700000000003,319.164],[249.37700000000004,319.164],[249.53400000000005,321.489],[249.54800000000006,321.489],[249.88700000000006,320.67699999999996],[250.57700000000006,319.16499999999996],[251.38200000000006,319.16499999999996],[249.856,322.51]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0.08899999999999864,-0.19499999999999318],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.09399999999999409,0.20499999999998408],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[-0.13999999999998636,0.3709999999999809],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.132000000000005,-0.3369999999999891],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[252.433,322.51],[251.529,322.51],[252.71699999999998,319.904],[251.9,319.904],[252.238,319.164],[254.775,319.164],[254.437,319.904],[253.622,319.904],[252.433,322.51]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[256.09,322.51],[256.426,321.774],[255.34199999999998,321.774],[255.63099999999997,321.142],[256.63399999999996,321.142],[256.965,320.415],[255.96299999999997,320.415],[256.20199999999994,319.89000000000004],[257.28499999999997,319.89000000000004],[257.61699999999996,319.16400000000004],[255.62999999999997,319.16400000000004],[254.10299999999998,322.51000000000005],[256.09,322.51000000000005]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[258.511,321.292],[257.956,322.51],[257.052,322.51],[258.57800000000003,319.164],[259.67400000000004,319.164],[260.58700000000005,320.151],[259.61000000000007,321.05],[259.9190000000001,322.509],[258.8950000000001,322.509],[258.7410000000001,321.291],[258.511,321.291]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.30000000000001137,-0.6570000000000391],[0.47399999999998954,-0.21199999999998909],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0.9089999999999918,0],[-0.17700000000002092,0.38700000000000045],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[258.82,320.612],[258.99,320.612],[259.656,320.19300000000004],[259.348,319.848],[259.16900000000004,319.848]],\"i\":[[0,0],[0,0],[-0.12700000000000955,0.27899999999999636],[0.3100000000000023,0],[0,0]],\"o\":[[0,0],[0.3170000000000073,0],[0.10599999999999454,-0.2300000000000182],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[222.669,325.035],[260.882,325.035],[264.711,316.639],[226.499,316.639]],\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.6901960784313725,0.8666666666666667,0.8980392156862745,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[268.542,325.035],[245.907,325.035],[245.907,316.639],[264.712,316.639]],\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.03529411764705882,0.0392156862745098,0.06666666666666667,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[442.144,299.512],[443.45300000000003,298.205],[442.144,296.897],[420.751,296.897],[417.143,298.39799999999997],[417.138,298.402],[415.638,302.01],[417.138,305.616],[420.751,307.12199999999996],[442.144,307.12199999999996],[443.45300000000003,305.81399999999996],[442.144,304.50699999999995],[420.751,304.50699999999995],[418.988,303.77199999999993],[418.253,302.00899999999996],[418.985,300.24299999999994],[420.75100000000003,299.5109999999999],[442.144,299.5109999999999]],\"i\":[[0,0],[0,0.7210000000000036],[0.7220000000000368,0],[0,0],[0.9259999999999877,-0.9249999999999545],[0,0],[0,-1.4039999999999964],[-0.9250000000000114,-0.9250000000000114],[-1.4080000000000155,0],[0,0],[0,0.72199999999998],[0.7220000000000368,0],[0,0],[0.45299999999997453,0.4530000000000314],[0,0.686999999999955],[-0.45100000000002183,0.45400000000000773],[-0.6870000000000118,0],[0,0]],\"o\":[[0.72199999999998,0],[0,-0.7210000000000036],[0,0],[-1.4039999999999964,0],[0,0],[-0.9250000000000114,0.9259999999999877],[0,1.40300000000002],[0.9259999999999877,0.9309999999999832],[0,0],[0.72199999999998,0],[0,-0.7210000000000036],[0,0],[-0.6859999999999786,0],[-0.45400000000000773,-0.45100000000002183],[0,-0.6870000000000118],[0.45400000000000773,-0.4519999999999982],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[442.144,299.512]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[421.357,299.512],[422.66400000000004,298.205],[421.357,296.897],[400.03900000000004,296.897],[396.432,298.39799999999997],[396.427,298.402],[394.927,302.01],[396.427,305.616],[400.03900000000004,307.12199999999996],[421.357,307.12199999999996],[422.66400000000004,305.81399999999996],[421.357,304.50699999999995],[419.221,304.50699999999995],[418.194,303.61499999999995],[417.233,301.55099999999993],[418.46500000000003,299.51199999999994],[421.357,299.51199999999994]],\"i\":[[0,0],[0,0.7210000000000036],[0.7210000000000036,0],[0,0],[0.9260000000000446,-0.9249999999999545],[0,0],[0,-1.4039999999999964],[-0.9250000000000114,-0.9250000000000114],[-1.407000000000039,0],[0,0],[0,0.72199999999998],[0.7210000000000036,0],[0,0],[0.3129999999999882,0.32600000000002183],[-0.06999999999999318,0.7240000000000464],[-0.6200000000000045,0.5260000000000105],[0,0]],\"o\":[[0.7210000000000036,0],[0,-0.7210000000000036],[0,0],[-1.4039999999999964,0],[0,0],[-0.9250000000000114,0.9259999999999877],[0,1.40300000000002],[0.9250000000000114,0.9309999999999832],[0,0],[0.7210000000000036,0],[0,-0.7210000000000036],[0,0],[-0.35700000000002774,-0.26499999999998636],[-0.6009999999999991,-0.6240000000000236],[0.07999999999998408,-0.8290000000000077],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[421.357,299.512]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"rc\",\"s\":{\"a\":0,\"k\":[28.916,6.051]},\"r\":{\"a\":0,\"k\":0},\"p\":{\"a\":0,\"k\":[427.68600000000004,302.0095]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8980392156862745,0.8901960784313725,0.9176470588235294,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[380.093,309.677],[378.81600000000003,308.40000000000003],[380.093,307.12300000000005],[417.302,307.12300000000005],[420.826,308.58900000000006],[420.831,308.59400000000005],[422.297,312.119],[420.831,315.64300000000003],[417.302,317.115],[380.093,317.115],[378.81600000000003,315.837],[380.093,314.56],[417.302,314.56],[419.024,313.842],[419.743,312.11899999999997],[419.027,310.39399999999995],[417.30199999999996,309.67799999999994],[380.093,309.67799999999994]],\"i\":[[0,0],[0,0.7049999999999841],[-0.7040000000000077,0],[0,0],[-0.9039999999999964,-0.9039999999999964],[0,0],[0,-1.370999999999981],[0.90300000000002,-0.9039999999999964],[1.375,0],[0,0],[0,0.7050000000000409],[-0.7040000000000077,0],[0,0],[-0.4420000000000073,0.4420000000000073],[0,0.6709999999999923],[0.4410000000000309,0.4430000000000405],[0.6710000000000491,0],[0,0]],\"o\":[[-0.7049999999999841,0],[0,-0.7060000000000173],[0,0],[1.370999999999981,0],[0,0],[0.9039999999999964,0.9049999999999727],[0,1.372000000000014],[-0.9039999999999964,0.9089999999999918],[0,0],[-0.7049999999999841,0],[0,-0.7049999999999841],[0,0],[0.6689999999999827,0],[0.44299999999998363,-0.4399999999999977],[0,-0.6709999999999923],[-0.44299999999998363,-0.4409999999999741],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[380.093,309.677]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[416.71,309.677],[415.433,308.40000000000003],[416.71,307.12300000000005],[451.31199999999995,307.12300000000005],[454.83599999999996,308.58900000000006],[454.84099999999995,308.59400000000005],[456.30699999999996,312.119],[454.84099999999995,315.64300000000003],[451.31199999999995,317.115],[416.71,317.115],[415.433,315.837],[416.71,314.56],[418.79699999999997,314.56],[419.801,313.688],[420.74,311.67199999999997],[419.536,309.67799999999994],[416.71,309.67799999999994]],\"i\":[[0,0],[0,0.7049999999999841],[-0.7049999999999841,0],[0,0],[-0.9039999999999964,-0.9039999999999964],[0,0],[0,-1.370999999999981],[0.9039999999999964,-0.9039999999999964],[1.375,0],[0,0],[0,0.7050000000000409],[-0.7049999999999841,0],[0,0],[-0.30700000000001637,0.3190000000000168],[0.06799999999998363,0.7060000000000173],[0.6059999999999945,0.51400000000001],[0,0]],\"o\":[[-0.7060000000000173,0],[0,-0.7060000000000173],[0,0],[1.370999999999981,0],[0,0],[0.9039999999999964,0.9049999999999727],[0,1.372000000000014],[-0.9039999999999964,0.9089999999999918],[0,0],[-0.7060000000000173,0],[0,-0.7049999999999841],[0,0],[0.35000000000002274,-0.2599999999999909],[0.5869999999999891,-0.6100000000000136],[-0.07799999999997453,-0.8120000000000118],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[416.71,309.677]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"rc\",\"s\":{\"a\":0,\"k\":[44.56,5.914]},\"r\":{\"a\":0,\"k\":0},\"p\":{\"a\":0,\"k\":[402.37300000000005,312.11899999999997]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8980392156862745,0.8901960784313725,0.9176470588235294,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[462.591,318.905],[463.644,317.852],[462.591,316.799],[415.503,316.799],[412.598,318.007],[412.594,318.011],[411.385,320.916],[412.594,323.82099999999997],[415.504,325.034],[462.59200000000004,325.034],[463.64500000000004,323.981],[462.59200000000004,322.928],[415.504,322.928],[414.084,322.336],[413.493,320.916],[414.082,319.49399999999997],[415.505,318.905]],\"i\":[[0,0],[0,0.5810000000000173],[0.5819999999999936,0],[0,0],[0.7459999999999809,-0.7450000000000045],[0,0],[0,-1.1299999999999955],[-0.7450000000000045,-0.7449999999999477],[-1.1340000000000146,0],[0,0],[0,0.5819999999999936],[0.5819999999999936,0],[0,0],[0.3650000000000091,0.3650000000000091],[0,0.5529999999999973],[-0.3639999999999759,0.3650000000000091],[-0.5539999999999736,0]],\"o\":[[0.5819999999999936,0],[0,-0.5810000000000173],[0,0],[-1.1299999999999955,0],[0,0],[-0.7450000000000045,0.7459999999999809],[0,1.1309999999999718],[0.7450000000000045,0.75],[0,0],[0.5819999999999936,0],[0,-0.5810000000000173],[0,0],[-0.5529999999999973,0],[-0.36599999999998545,-0.36299999999999955],[0,-0.5529999999999973],[0.36599999999998545,-0.36299999999999955],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.10980392156862745,0.19215686274509805,0.3686274509803922,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[415.99,318.905],[417.043,317.852],[415.99,316.799],[378.444,316.799],[375.53900000000004,318.007],[375.535,318.011],[374.327,320.916],[375.535,323.82099999999997],[378.44500000000005,325.034],[415.99100000000004,325.034],[417.04400000000004,323.981],[415.99100000000004,322.928],[414.27200000000005,322.928],[413.4440000000001,322.209],[412.6700000000001,320.547],[413.6620000000001,318.90400000000005],[415.99,318.90400000000005]],\"i\":[[0,0],[0,0.5810000000000173],[0.5810000000000173,0],[0,0],[0.7459999999999809,-0.7450000000000045],[0,0],[0,-1.1299999999999955],[-0.7450000000000045,-0.7449999999999477],[-1.1340000000000146,0],[0,0],[0,0.5819999999999936],[0.5810000000000173,0],[0,0],[0.2519999999999527,0.2629999999999768],[-0.055999999999983174,0.58299999999997],[-0.49900000000002365,0.422999999999945],[0,0]],\"o\":[[0.5810000000000173,0],[0,-0.5810000000000173],[0,0],[-1.1309999999999718,0],[0,0],[-0.7450000000000045,0.7459999999999809],[0,1.1309999999999718],[0.7459999999999809,0.75],[0,0],[0.5810000000000173,0],[0,-0.5810000000000173],[0,0],[-0.28899999999998727,-0.21399999999999864],[-0.48399999999998045,-0.5029999999999859],[0.06400000000002137,-0.6680000000000064],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[415.99,318.905]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"rc\",\"s\":{\"a\":0,\"k\":[53.149,4.873]},\"r\":{\"a\":0,\"k\":0},\"p\":{\"a\":0,\"k\":[436.0165,320.91650000000004]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8745098039215686,0.8666666666666667,0.8784313725490196,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[269.775,137.245],[268.59099999999995,136.27700000000002],[268.5919999999999,136.276],[268.5689999999999,136.264],[268.4249999999999,136.185],[267.1999999999999,134.978],[264.32799999999986,135.202],[264.1009999999999,135.191],[264.0889999999999,135.19],[264.0719999999999,135.189],[264.0709999999999,135.189],[258.2219999999999,136.542],[267.79099999999994,131.842]],\"i\":[[0.771000000000015,-2.1580000000000155],[0.46399999999999864,0.26499999999998636],[0,0],[0,0],[0.04899999999997817,0.02600000000001046],[0,0],[0.66700000000003,0.02800000000002001],[0.07599999999996498,0.003999999999990678],[0,0],[0,0],[0,0],[0.014000000000010004,-0.7530000000000143],[-5.713999999999999,-5.902000000000015]],\"o\":[[-0.3170000000000073,-0.3830000000000098],[0,0],[0,0],[-0.04800000000000182,-0.026999999999986812],[-0.9119999999999777,-0.5250000000000057],[-0.43200000000001637,0.2980000000000018],[-0.07499999999998863,-0.003999999999990678],[0,0],[0,0],[0,0],[-2.964999999999975,-0.117999999999995],[-2.5689999999999884,-5.4010000000000105],[3.022000000000048,0.1449999999999818]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[259.441,135.35],[259.441,136.524],[259.126,137.29],[258.811,137.787],[258.582,134.704],[259.469,135.089]],\"i\":[[0,-0.09399999999999409],[0,-0.46000000000000796],[0.23099999999999454,-0.16799999999997794],[0.257000000000005,-0.10500000000001819],[0,0],[-0.285000000000025,-0.10499999999998977]],\"o\":[[0,0],[0,0.4619999999999891],[0,0],[0,0],[0.16100000000000136,0.18500000000000227],[-0.016999999999995907,0.0800000000000125]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[268.593,135.622],[268.593,137.25],[269.029,138.31],[269.189,139.072],[269.468,138.591],[269.468,134.64000000000001],[268.55400000000003,135.258]],\"i\":[[-0.0010000000000331966,-0.1290000000000191],[0,-0.6389999999999816],[-0.3199999999999932,-0.23199999999999932],[-0.35700000000002774,-0.14500000000001023],[-0.27899999999999636,0.1519999999999868],[0,0],[0.39400000000000546,-0.1449999999999818]],\"o\":[[0,0],[0,0.6380000000000052],[0,0],[0,0],[0,0],[-0.2230000000000132,0.2560000000000002],[0.023999999999944066,0.11400000000000432]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[263.999,130.511],[263.999,130.511],[269.18800000000005,135.7],[269.18800000000005,140.416],[263.999,145.605],[263.999,145.605],[258.81,140.416],[258.81,135.7]],\"i\":[[-2.855000000000018,0],[0,0],[0,-2.853999999999985],[0,0],[2.854000000000042,0],[0,0],[0,2.853999999999985],[0,0]],\"o\":[[0,0],[2.853999999999985,0],[0,0],[0,2.8540000000000134],[0,0],[-2.855000000000018,0],[0,0],[0,-2.853999999999985]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.6745098039215687,0.5137254901960784,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[269.182,138.545],[270.697,140.05999999999997],[269.182,141.57499999999996],[267.66700000000003,140.05999999999997]],\"i\":[[-0.8369999999999891,0],[0,-0.8369999999999891],[0.8360000000000127,0],[0,0.8369999999999891]],\"o\":[[0.8369999999999891,0],[0,0.8369999999999891],[-0.8369999999999891,0],[0,-0.8369999999999891]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9058823529411765,0.40784313725490196,0.3568627450980392,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[258.771,138.545],[260.286,140.05999999999997],[258.771,141.57499999999996],[257.25600000000003,140.05999999999997]],\"i\":[[-0.8369999999999891,0],[0,-0.8369999999999891],[0.8369999999999891,0],[0,0.8369999999999891]],\"o\":[[0.8369999999999891,0],[0,0.8369999999999891],[-0.8369999999999891,0],[0,-0.8369999999999891]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9058823529411765,0.40784313725490196,0.3568627450980392,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[258.48,135.524],[258.223,136.543],[259.611,137.233],[269.48,137.584],[269.77500000000003,137.245],[268.14300000000003,133.401]],\"i\":[[0,0],[-0.007000000000005002,-0.4890000000000043],[-0.35199999999997544,0],[0,0],[0,0.2839999999999918],[0,0]],\"o\":[[0,0],[0.005999999999971806,0.48799999999999955],[0.35199999999997544,0],[0,0],[0,-0.2839999999999918],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[265.685,142.178],[265.635,143.361],[265.635,146.152],[266.094,146.80999999999997],[261.83299999999997,146.80999999999997],[262.291,146.152],[262.291,143.361],[262.241,142.178],[263.964,142.545]],\"i\":[[0,0],[0,0],[0,-0.367999999999995],[-0.29300000000000637,-0.22399999999998954],[1.5190000000000055,1.6479999999999961],[0,0.1769999999999925],[0,0],[0,0],[-0.875,-0.2150000000000034]],\"o\":[[0,0],[0,0],[0,0.17799999999999727],[-1.5199999999999818,1.6479999999999961],[0.29199999999997317,-0.22399999999998954],[0,-0.367999999999995],[0,0],[0,0],[0.8740000000000236,-0.214999999999975]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9058823529411765,0.40784313725490196,0.3568627450980392,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[267.58,146.987],[267.66499999999996,147.012],[267.66599999999994,147.012],[267.66599999999994,147.012],[269.62499999999994,147.808],[269.92599999999993,148.065],[263.96199999999993,149.862],[257.99999999999994,148.066],[258.30099999999993,147.809],[260.25999999999993,147.013],[260.25999999999993,147.013],[260.2609999999999,147.013],[260.3459999999999,146.988],[260.35199999999986,146.994],[261.83299999999986,146.812],[263.9379999999999,147.115],[263.9639999999999,147.11200000000002],[263.98899999999986,147.115],[266.0939999999999,146.812],[267.5749999999999,146.994]],\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.7959999999999923,-0.42399999999997817],[-0.1239999999999668,-0.13300000000000978],[2.204999999999984,0],[1.70799999999997,1.1339999999999861],[-0.07200000000000273,0.045000000000015916],[-0.40399999999999636,0.11899999999999977],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.7959999999999923,-0.16100000000000136]],\"o\":[[0,0],[0,0],[0,0],[0.40399999999999636,0.11899999999999977],[0.07200000000000273,0.044999999999987494],[-1.7080000000000268,1.134999999999991],[-2.2040000000000077,0],[0.12400000000002365,-0.13300000000000978],[0.7970000000000255,-0.4240000000000066],[0,0],[0,0],[0,0],[0,0],[0.7959999999999923,-0.16100000000000136],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[268.584,148.824],[269.626,147.80800000000002],[269.941,148.05500000000004]],\"i\":[[0.47199999999998,-0.22400000000001796],[0,0],[-0.20199999999999818,-0.1810000000000116]],\"o\":[[0,0],[0,0],[-0.4319999999999595,0.2869999999999777]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.6196078431372549,0.6941176470588235,0.8431372549019608,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[268.584,148.824],[269.626,147.80800000000002],[269.941,148.05500000000004]],\"i\":[[0.47199999999998,-0.22400000000001796],[0,0],[-0.20199999999999818,-0.18000000000000682]],\"o\":[[0,0],[0,0],[-0.4319999999999595,0.2869999999999777]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.6196078431372549,0.6941176470588235,0.8431372549019608,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[259.34,148.824],[258.299,147.80800000000002],[257.984,148.05500000000004]],\"i\":[[-0.47199999999998,-0.22500000000002274],[0,0],[0.20199999999999818,-0.18000000000000682]],\"o\":[[0,0],[0,0],[0.43100000000004,0.2869999999999777]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.6196078431372549,0.6941176470588235,0.8431372549019608,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[259.34,148.824],[258.299,147.80800000000002],[257.984,148.05500000000004]],\"i\":[[-0.4709999999999468,-0.22500000000002274],[0,0],[0.20199999999999818,-0.18000000000000682]],\"o\":[[0,0],[0,0],[0.43100000000004,0.2869999999999777]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.6196078431372549,0.6941176470588235,0.8431372549019608,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.604,176.514],[285.51,176.04000000000002],[285.604,175.56600000000003],[289.471,175.56600000000003],[289.565,176.04000000000002],[289.471,176.514]],\"i\":[[0,0],[0,0.26200000000000045],[-0.05200000000002092,0],[0,0],[0,-0.2609999999999957],[0.05200000000002092,0]],\"o\":[[-0.05200000000002092,0],[0,-0.26200000000000045],[0,0],[0.05200000000002092,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,173.348],[285.511,172.87400000000002],[285.985,172.40000000000003],[305.515,172.40000000000003],[305.989,172.87400000000002],[305.515,173.348]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26200000000000045,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,170.399],[285.511,169.925],[285.985,169.45100000000002],[298.14500000000004,169.45100000000002],[298.619,169.925],[298.14500000000004,170.399]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.2609999999999957],[0.26200000000000045,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.2610000000000241,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,167.624],[285.511,167.15],[285.985,166.67600000000002],[292.065,166.67600000000002],[292.539,167.15],[292.065,167.624]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.2609999999999957],[0.26200000000000045,0]],\"o\":[[-0.26200000000000045,0],[0,-0.2609999999999957],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[286.123,164.469],[285.649,163.995],[286.123,163.52100000000002],[291.973,163.52100000000002],[292.447,163.995],[291.973,164.469]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26099999999996726,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,161.522],[285.511,161.047],[285.985,160.573],[301.18600000000004,160.573],[301.66,161.047],[301.18600000000004,161.522]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.2609999999999957],[0.26200000000000045,0]],\"o\":[[-0.2610000000000241,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,147.516],[285.511,147.042],[285.985,146.568],[305.515,146.568],[305.989,147.042],[305.515,147.516]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26200000000000045,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.642,144.351],[285.51,143.877],[285.642,143.40300000000002],[291.089,143.40300000000002],[291.222,143.877],[291.089,144.351]],\"i\":[[0,0],[0,0.2609999999999957],[-0.07299999999997908,0],[0,0],[0,-0.26200000000000045],[0.07399999999995543,0]],\"o\":[[-0.07299999999997908,0],[0,-0.26200000000000045],[0,0],[0.07400000000001228,0],[0,0.2609999999999957],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,141.402],[285.511,140.928],[285.985,140.454],[298.14500000000004,140.454],[298.619,140.928],[298.14500000000004,141.402]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26200000000000045,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.2610000000000241,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,138.627],[285.511,138.15300000000002],[285.985,137.67800000000003],[292.065,137.67800000000003],[292.539,138.15300000000002],[292.065,138.627]],\"i\":[[0,0],[0,0.2609999999999957],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26200000000000045,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.2609999999999957],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[286.123,135.471],[285.649,134.997],[286.123,134.52300000000002],[291.973,134.52300000000002],[292.447,134.997],[291.973,135.471]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26099999999996726,0]],\"o\":[[-0.26200000000000045,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[285.985,132.523],[285.511,132.049],[285.985,131.57500000000002],[301.18600000000004,131.57500000000002],[301.66,132.049],[301.18600000000004,132.523]],\"i\":[[0,0],[0,0.26200000000000045],[-0.26200000000000045,0],[0,0],[0,-0.26200000000000045],[0.26200000000000045,0]],\"o\":[[-0.2610000000000241,0],[0,-0.26200000000000045],[0,0],[0.26200000000000045,0],[0,0.26200000000000045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[264.577,164.871],[266.677,161.251],[266.957,161.231],[268.914,163.343],[268.921,165.92],[263.932,174.563],[261.687,175.862],[258.889,175.228],[258.755,174.988],[260.83299999999997,171.352],[261.14,171.304],[263.293,171.406],[265.853,166.971],[264.702,165.155]],\"i\":[[-0.029999999999972715,0.11400000000000432],[-0.132000000000005,0.09700000000000841],[-0.08999999999997499,-0.05299999999999727],[-0.3159999999999741,-0.7399999999999807],[0.3079999999999927,-0.5490000000000066],[0,0],[1.1190000000000282,-0.13500000000001933],[1.0459999999999923,0.5849999999999795],[-0.008999999999957708,0.10300000000000864],[-1.9470000000000027,1.9579999999999984],[-0.10200000000003229,-0.060000000000002274],[-0.5049999999999955,0.8489999999999895],[0,0],[0.132000000000005,0.07800000000000296]],\"o\":[[0.6859999999999786,-2.5360000000000014],[0.07799999999997453,-0.06200000000001182],[1.035000000000025,0.6150000000000091],[0.4390000000000214,1.0269999999999868],[0,0],[-0.3159999999999741,0.5459999999999923],[-0.7959999999999923,0.09600000000000364],[-0.08699999999998909,-0.04400000000001114],[0,-0.0049999999999954525],[0.07600000000002183,-0.08500000000000796],[0.0049999999999954525,0.002999999999985903],[0,0],[0.47800000000000864,-0.8269999999999982],[-0.10000000000002274,-0.05299999999999727]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"el\",\"p\":{\"a\":0,\"k\":[263,168]},\"s\":{\"a\":0,\"k\":[24.078,24.078]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[-41.861,236.025]},\"r\":{\"a\":0,\"k\":315.0121957629266}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[263.977,151.584],[276.01599999999996,139.54500000000002],[263.977,127.50600000000001],[251.938,139.54500000000002]],\"i\":[[-6.630999999999972,0],[0,6.631],[6.6299999999999955,0],[0,-6.6299999999999955]],\"o\":[[6.630999999999972,0],[0,-6.631],[-6.630999999999972,0],[0,6.630999999999972]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[279.051,257.32],[278.599,257.32],[277.801,257.993],[275.723,269.179],[276.27000000000004,269.852],[276.72200000000004,269.852],[277.51900000000006,269.179],[279.59800000000007,257.993]],\"i\":[[0.3690000000000282,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06800000000004047,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06799999999992679,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[282.6,257.32],[282.148,257.32],[281.351,257.993],[279.272,269.179],[279.819,269.852],[280.271,269.852],[281.06800000000004,269.179],[283.14700000000005,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06800000000004047,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06899999999995998,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[286.149,257.32],[285.697,257.32],[284.9,257.993],[282.82099999999997,269.179],[283.368,269.852],[283.82,269.852],[284.618,269.179],[286.69599999999997,257.993]],\"i\":[[0.3709999999999809,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.06900000000001683,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[289.699,257.32],[289.247,257.32],[288.45,257.993],[286.371,269.179],[286.918,269.852],[287.37,269.852],[288.16700000000003,269.179],[290.24600000000004,257.993]],\"i\":[[0.36899999999997135,0],[0,0],[0.06800000000004047,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06800000000004047,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06799999999998363,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[293.249,257.32],[292.79600000000005,257.32],[291.999,257.993],[289.92,269.179],[290.46700000000004,269.852],[290.92,269.852],[291.71700000000004,269.179],[293.79600000000005,257.993]],\"i\":[[0.36899999999997135,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06799999999992679,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[296.798,257.32],[296.345,257.32],[295.548,257.993],[293.469,269.179],[294.016,269.852],[294.468,269.852],[295.266,269.179],[297.345,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06799999999998363,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06899999999995998,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[300.347,257.32],[299.895,257.32],[299.09799999999996,257.993],[297.01899999999995,269.179],[297.566,269.852],[298.018,269.852],[298.815,269.179],[300.894,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06800000000004047,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.06900000000001683,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[303.897,257.32],[303.445,257.32],[302.64799999999997,257.993],[300.56899999999996,269.179],[301.116,269.852],[301.568,269.852],[302.365,269.179],[304.444,257.993]],\"i\":[[0.3690000000000282,0],[0,0],[0.06800000000004047,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06799999999998363,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[307.446,257.32],[306.994,257.32],[306.197,257.993],[304.118,269.179],[304.665,269.852],[305.117,269.852],[305.915,269.179],[307.994,257.993]],\"i\":[[0.3699999999999477,0],[0,0],[0.06800000000004047,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06799999999998363,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[310.996,257.32],[310.544,257.32],[309.74699999999996,257.993],[307.66799999999995,269.179],[308.21599999999995,269.852],[308.66799999999995,269.852],[309.46599999999995,269.179],[311.5439999999999,257.993]],\"i\":[[0.3690000000000282,0],[0,0],[0.06800000000004047,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06799999999998363,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06700000000006412,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[314.545,257.32],[314.093,257.32],[313.295,257.993],[311.216,269.179],[311.76300000000003,269.852],[312.21500000000003,269.852],[313.01200000000006,269.179],[315.09100000000007,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06999999999993634,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[318.094,257.32],[317.641,257.32],[316.844,257.993],[314.765,269.179],[315.312,269.852],[315.764,269.852],[316.56100000000004,269.179],[318.64000000000004,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.06999999999993634,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[321.643,257.32],[321.191,257.32],[320.39399999999995,257.993],[318.31499999999994,269.179],[318.86199999999997,269.852],[319.31399999999996,269.852],[320.11199999999997,269.179],[322.18999999999994,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.06900000000007367,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[325.193,257.32],[324.74199999999996,257.32],[323.94399999999996,257.993],[321.86499999999995,269.179],[322.412,269.852],[322.86499999999995,269.852],[323.662,269.179],[325.741,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06999999999999318,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3709999999999809,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.06800000000004047,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[328.742,257.32],[328.29,257.32],[327.493,257.993],[325.414,269.179],[325.96,269.852],[326.41299999999995,269.852],[327.21,269.179],[329.289,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.36899999999997135,0],[0,0],[-0.06800000000004047,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06999999999999318,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[332.292,257.32],[331.839,257.32],[331.042,257.993],[328.96299999999997,269.179],[329.51,269.852],[329.96299999999997,269.852],[330.76,269.179],[332.839,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.37000000000000455,0],[0,0],[-0.06799999999998363,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.06900000000001683,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[335.841,257.32],[335.389,257.32],[334.592,257.993],[332.513,269.179],[333.061,269.852],[333.513,269.852],[334.31,269.179],[336.389,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06800000000004047,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06799999999998363,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06900000000001683,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[339.391,257.32],[338.93800000000005,257.32],[338.141,257.993],[336.062,269.179],[336.60900000000004,269.852],[337.06100000000004,269.852],[337.85800000000006,269.179],[339.93600000000004,257.993]],\"i\":[[0.36899999999997135,0],[0,0],[0.06900000000001683,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06800000000004047,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06900000000001683,0.3690000000000282],[0,0],[0.3690000000000282,0],[0,0],[0.07099999999996953,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[342.94,257.32],[342.487,257.32],[341.69100000000003,257.993],[339.61100000000005,269.179],[340.15900000000005,269.852],[340.61000000000007,269.852],[341.4070000000001,269.179],[343.4860000000001,257.993]],\"i\":[[0.37000000000000455,0],[0,0],[0.06799999999998363,-0.37000000000000455],[0,0],[-0.37000000000000455,0],[0,0],[-0.06900000000001683,0.3709999999999809],[0,0]],\"o\":[[0,0],[-0.3690000000000282,0],[0,0],[-0.06799999999998363,0.3690000000000282],[0,0],[0.37000000000000455,0],[0,0],[0.06999999999987949,-0.3709999999999809]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[298.781,327.213],[280.431,327.213],[277.51599999999996,324.298],[277.51599999999996,324.298],[280.431,321.383],[298.781,321.383],[301.696,324.298],[301.696,324.298]],\"i\":[[1.6030000000000086,0],[0,0],[0,1.6040000000000418],[0,0],[-1.6040000000000418,0],[0,0],[0,-1.6040000000000418],[0,0]],\"o\":[[0,0],[-1.603999999999985,0],[0,0],[0,-1.603999999999985],[0,0],[1.6030000000000086,0],[0,0],[0,1.603999999999985]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7686274509803922,0.7490196078431373,0.8,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[338.099,327.213],[288.952,327.213],[286.037,324.298],[286.037,324.298],[288.952,321.383],[338.099,321.383],[341.013,324.298],[341.013,324.298]],\"i\":[[1.6020000000000323,0],[0,0],[0,1.6040000000000418],[0,0],[-1.6030000000000086,0],[0,0],[0,-1.6040000000000418],[0,0]],\"o\":[[0,0],[-1.6030000000000086,0],[0,0],[0,-1.603999999999985],[0,0],[1.6019999999999754,0],[0,0],[0,1.603999999999985]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[315.252,287.121],[304.305,287.121],[302.449,289.57099999999997],[310.038,320.86299999999994],[313.082,323.31299999999993],[324.029,323.31299999999993],[325.886,320.86299999999994],[318.29600000000005,289.5709999999999]],\"i\":[[1.3489999999999895,0],[0,0],[-0.3269999999999982,-1.3480000000000132],[0,0],[-1.3479999999999563,0],[0,0],[0.3269999999999982,1.3480000000000132],[0,0]],\"o\":[[0,0],[-1.3480000000000132,0],[0,0],[0.3269999999999982,1.3480000000000132],[0,0],[1.3480000000000132,0],[0,0],[-0.32600000000002183,-1.3479999999998995]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[311.471,287.121],[300.524,287.121],[298.668,289.57099999999997],[306.257,320.86299999999994],[309.302,323.31299999999993],[320.249,323.31299999999993],[322.105,320.86299999999994],[314.516,289.5709999999999]],\"i\":[[1.3480000000000132,0],[0,0],[-0.3280000000000314,-1.3480000000000132],[0,0],[-1.3480000000000132,0],[0,0],[0.3269999999999982,1.3480000000000132],[0,0]],\"o\":[[0,0],[-1.3480000000000132,0],[0,0],[0.3269999999999982,1.3480000000000132],[0,0],[1.3480000000000132,0],[0,0],[-0.3269999999999982,-1.3479999999998995]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7686274509803922,0.7490196078431373,0.8,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[331.272,274.867],[294.099,274.867],[292.336,276.353],[287.742,301.073],[288.952,302.55899999999997],[326.125,302.55899999999997],[327.888,301.073],[332.48199999999997,276.35299999999995]],\"i\":[[0.8179999999999836,0],[0,0],[0.1519999999999868,-0.8170000000000073],[0,0],[-0.8170000000000073,0],[0,0],[-0.15299999999996317,0.8170000000000073],[0,0]],\"o\":[[0,0],[-0.8179999999999836,0],[0,0],[-0.1519999999999868,0.8170000000000073],[0,0],[0.8170000000000073,0],[0,0],[0.15100000000001046,-0.8169999999999504]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9176470588235294,0.9137254901960784,0.9294117647058824,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[352.89,252.641],[268.462,252.641],[266.127,254.583],[255.372,307.681],[256.921,309.623],[341.348,309.623],[343.683,307.681],[354.43899999999996,254.58299999999997]],\"i\":[[1.0680000000000405,0],[0,0],[0.21599999999995134,-1.068000000000012],[0,0],[-1.0689999999999884,0],[0,0],[-0.214999999999975,1.0679999999999836],[0,0]],\"o\":[[0,0],[-1.0679999999999836,0],[0,0],[-0.21600000000000819,1.0679999999999836],[0,0],[1.0679999999999836,0],[0,0],[0.21600000000000819,-1.0679999999999836]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[351.103,250.88],[266.676,250.88],[264.341,252.823],[253.586,305.921],[253.734,307.073],[255.93,309.311],[337.385,305.871],[339.721,303.93],[354.151,253.22],[352.023,251.144]],\"i\":[[0.3550000000000182,0],[0,0],[0.21599999999995134,-1.0690000000000168],[0,0],[-0.17300000000000182,-0.3229999999999791],[-0.3789999999999907,0.014999999999986358],[0,0],[-0.2980000000000018,1.0439999999999827],[0,0],[0.49799999999999045,0.3299999999999841]],\"o\":[[0,0],[-1.0679999999999836,0],[0,0],[-0.08699999999998909,0.4300000000000068],[0.34600000000000364,0.6440000000000055],[0,0],[1.0640000000000214,-0.045000000000015916],[0,0],[0.005999999999971806,-0.019000000000005457],[-0.25200000000000955,-0.16800000000000637]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[216.157,301.006],[216.157,304.07],[215.52200000000002,304.825],[206.07700000000003,304.825],[206.07700000000003,304.972],[206.71200000000002,305.72799999999995],[216.71,305.72799999999995],[217.345,304.972],[217.345,301.24399999999997],[216.71,300.489],[216.45600000000002,300.489],[216.157,300.489]],\"i\":[[0,0],[0,0],[0.34899999999998954,0],[0,0],[0,0],[-0.3499999999999943,0],[0,0],[0,0.4159999999999968],[0,0],[0.3499999999999943,0],[0,0],[0,0]],\"o\":[[0,0],[0,0.41500000000002046],[0,0],[0,0],[0,0.4159999999999968],[0,0],[0.3499999999999943,0],[0,0],[0,-0.41500000000002046],[0,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9529411764705882,0.9529411764705882,0.9607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[213.994,301.26],[207.852,301.26],[207.46200000000002,301.651],[207.46200000000002,303.58],[207.852,303.971],[213.994,303.971],[214.384,303.58],[214.384,301.651]],\"i\":[[0.2150000000000034,0],[0,0],[0,-0.21500000000003183],[0,0],[-0.214999999999975,0],[0,0],[0,0.21500000000003183],[0,0]],\"o\":[[0,0],[-0.21399999999999864,0],[0,0],[0,0.214999999999975],[0,0],[0.2150000000000034,0],[0,0],[0.0010000000000047748,-0.21600000000000819]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9529411764705882,0.9529411764705882,0.9607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[216.71,300.489],[206.71200000000002,300.489],[206.07700000000003,301.24399999999997],[206.07700000000003,304.972],[206.71200000000002,305.727],[216.71,305.727],[217.345,304.972],[217.345,301.24399999999997]],\"i\":[[0.3499999999999943,0],[0,0],[0,-0.41500000000002046],[0,0],[-0.3499999999999943,0],[0,0],[0,0.41500000000002046],[0,0]],\"o\":[[0,0],[-0.3499999999999943,0],[0,0],[0,0.4159999999999968],[0,0],[0.3499999999999943,0],[0,0],[0,-0.4149999999999636]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[178.182,301.006],[178.182,304.07],[177.547,304.825],[168.102,304.825],[168.102,304.972],[168.737,305.72799999999995],[178.736,305.72799999999995],[179.36999999999998,304.972],[179.36999999999998,301.24399999999997],[178.736,300.489],[178.481,300.489],[178.183,300.489],[178.183,301.006]],\"i\":[[0,0],[0,0],[0.34899999999998954,0],[0,0],[0,0],[-0.34899999999998954,0],[0,0],[0,0.4159999999999968],[0,0],[0.34899999999998954,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0.41500000000002046],[0,0],[0,0],[0,0.4159999999999968],[0,0],[0.34899999999998954,0],[0,0],[0,-0.41500000000002046],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[178.182,301.006]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9529411764705882,0.9529411764705882,0.9607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[176.019,301.26],[169.877,301.26],[169.48700000000002,301.651],[169.48700000000002,303.58],[169.877,303.971],[176.019,303.971],[176.409,303.58],[176.409,301.651]],\"i\":[[0.21399999999999864,0],[0,0],[0,-0.21500000000003183],[0,0],[-0.214999999999975,0],[0,0],[0,0.21500000000003183],[0,0]],\"o\":[[0,0],[-0.2150000000000034,0],[0,0],[0,0.214999999999975],[0,0],[0.21399999999999864,0],[0,0],[0,-0.21600000000000819]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9529411764705882,0.9529411764705882,0.9607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.723,296.074],[197.14000000000001,296.074],[197.95200000000003,296.074],[201.89000000000001,296.074],[202.89800000000002,296.13800000000003],[206.96600000000004,300.48900000000003],[209.53000000000003,300.48900000000003],[209.49500000000003,300.43100000000004],[203.71800000000005,295.40500000000003],[193.28200000000004,295.40500000000003],[182.84600000000003,295.40500000000003],[177.06900000000005,300.43100000000004],[177.03500000000005,300.48900000000003],[178.48000000000005,300.48900000000003],[182.74400000000006,296.115],[183.55600000000007,296.074],[188.50100000000006,296.074]],\"i\":[[0,0],[0,0],[0,0],[0,0],[-0.3140000000000214,-0.04200000000003001],[0,-1.76400000000001],[0,0],[0,0],[4.314999999999998,0],[0,0],[0,0],[0,-2.218999999999994],[0,0],[0,0],[-3.1640000000000157,0.3269999999999982],[-0.285000000000025,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0.3580000000000041,0],[3.01400000000001,0.39800000000002456],[0,0],[0,0],[0,-2.218999999999994],[0,0],[0,0],[-4.314999999999998,0],[0,0],[0,0],[0,-1.802000000000021],[0.257000000000005,-0.026999999999986812],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[210.023,322.365],[208.99699999999999,323.391],[174.28799999999998,323.391],[174.28799999999998,323.925],[174.41599999999997,324.42],[211.22499999999997,324.42],[211.35299999999995,323.925],[211.35299999999995,321.04400000000004],[211.16399999999996,320.45300000000003],[211.16299999999995,320.45200000000006],[211.12799999999996,320.40500000000003],[210.32699999999997,320.01800000000003],[210.02199999999996,320.01800000000003],[210.02199999999996,320.45300000000003],[210.02199999999996,322.365]],\"i\":[[0,0],[0.5640000000000214,0],[0,0],[0,0],[-0.08199999999999363,-0.14699999999999136],[0,0],[0,0.17900000000003047],[0,0],[0.11899999999999977,0.16700000000003],[0.0010000000000047748,0.0009999999999763531],[0,0],[0.3229999999999791,0],[0,0],[0,0],[0,0]],\"o\":[[0,0.5640000000000214],[0,0],[0,0],[0,0.17899999999997362],[0,0],[0.08199999999999363,-0.14699999999999136],[0,0],[0,-0.22000000000002728],[0,0],[0,0],[-0.18799999999998818,-0.23500000000001364],[0,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[210.023,322.365]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[185.714,297.03],[187.01,298.32599999999996],[187.01,299.99199999999996],[188.501,299.99199999999996],[188.501,296.073],[183.556,296.073],[182.744,296.114],[182.744,297.029],[185.714,297.029]],\"i\":[[0,0],[0,-0.7129999999999654],[0,0],[0,0],[0,0],[0,0],[0.257000000000005,-0.026999999999986812],[0,0],[0,0]],\"o\":[[0.7129999999999939,0],[0,0],[0,0],[0,0],[0,0],[-0.2849999999999966,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[185.714,297.03]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.00392156862745098,0.14901960784313725,0.23137254901960785,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[178.735,300.489],[168.73600000000002,300.489],[168.10100000000003,301.24399999999997],[168.10100000000003,304.972],[168.73600000000002,305.727],[178.735,305.727],[179.369,304.972],[179.369,301.24399999999997]],\"i\":[[0.34899999999998954,0],[0,0],[0,-0.41500000000002046],[0,0],[-0.34899999999998954,0],[0,0],[0,0.41500000000002046],[0,0]],\"o\":[[0,0],[-0.34899999999998954,0],[0,0],[0,0.4159999999999968],[0,0],[0.34899999999998954,0],[0,0],[0.0010000000000047748,-0.4149999999999636]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[201.89,296.074],[206.96599999999998,300.48900000000003],[207.599,301.58500000000004],[215.65599999999998,301.58500000000004],[216.2,300.98800000000006],[216.2,298.3140000000001],[207.374,291.47100000000006],[192.72299999999998,291.47100000000006],[178.07199999999997,291.47100000000006],[169.24599999999998,298.3140000000001],[169.24599999999998,300.98800000000006],[169.79,301.58500000000004],[177.84699999999998,301.58500000000004],[178.48,300.48900000000003],[183.55599999999998,296.074],[192.72299999999998,296.074]],\"i\":[[0,0],[0,-1.948000000000036],[0,0],[0,0],[0,0],[0,0.9979999999999905],[9.019000000000005,0],[0,0],[0,0],[0,-0.9970000000000141],[0,0],[0,0],[0,0],[0,0],[-3.790999999999997,0],[0,0]],\"o\":[[3.790999999999997,0],[0,0],[0,0],[0,0],[0,0],[0,-0.9970000000000141],[0,0],[0,0],[-9.018,0],[0,0.9970000000000141],[0,0],[0,0],[0,0],[0,-1.947999999999979],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.2235294117647059,0.23921568627450981,0.36470588235294116,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.747,308.99],[192.055,308.298],[192.747,307.605],[198.144,307.605],[198.836,308.298],[198.144,308.99]],\"i\":[[0,0],[0,0.38299999999998136],[-0.382000000000005,0],[0,0],[0,-0.38299999999998136],[0.382000000000005,0]],\"o\":[[-0.382000000000005,0],[0,-0.38299999999998136],[0,0],[0.382000000000005,0],[0,0.38299999999998136],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[188.383,303.933],[189.48100000000002,303.933],[189.48100000000002,305.032],[188.383,305.032]],\"i\":[[-0.30400000000000205,0.30299999999999727],[-0.3030000000000257,-0.3039999999999736],[0.30299999999999727,-0.30299999999999727],[0.3030000000000257,0.30299999999999727]],\"o\":[[0.30299999999999727,-0.3039999999999736],[0.30299999999999727,0.30299999999999727],[-0.30299999999999727,0.30299999999999727],[-0.30400000000000205,-0.30299999999999727]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[186.574,308.298],[187.351,307.521],[188.128,308.298],[187.351,309.074]],\"i\":[[0,0.4289999999999736],[-0.4289999999999736,0],[0,-0.4289999999999736],[0.4289999999999736,0]],\"o\":[[0,-0.4289999999999736],[0.42900000000000205,0],[0,0.4289999999999736],[-0.42900000000000205,0.0009999999999763531]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[188.383,312.664],[188.383,311.565],[189.48100000000002,311.565],[189.48100000000002,312.664]],\"i\":[[0.30299999999999727,0.30299999999999727],[-0.30299999999999727,0.30299999999999727],[-0.3030000000000257,-0.30299999999999727],[0.30299999999999727,-0.30299999999999727]],\"o\":[[-0.30299999999999727,-0.3039999999999736],[0.30299999999999727,-0.30299999999999727],[0.30299999999999727,0.3039999999999736],[-0.3030000000000257,0.30299999999999727]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.747,314.471],[191.971,313.694],[192.747,312.91700000000003],[193.524,313.694]],\"i\":[[0.4289999999999736,0],[0,0.4289999999999736],[-0.42900000000000205,0],[0,-0.4289999999999736]],\"o\":[[-0.42900000000000205,0],[0,-0.4289999999999736],[0.42900000000000205,0],[0.0010000000000047748,0.4300000000000068]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[197.112,312.664],[196.01399999999998,312.664],[196.01399999999998,311.565],[197.112,311.565]],\"i\":[[0.30400000000000205,-0.3039999999999736],[0.3030000000000257,0.30299999999999727],[-0.30299999999999727,0.30299999999999727],[-0.3030000000000257,-0.30299999999999727]],\"o\":[[-0.30299999999999727,0.30299999999999727],[-0.30299999999999727,-0.3039999999999736],[0.30400000000000205,-0.30299999999999727],[0.30400000000000205,0.30299999999999727]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[197.112,303.933],[197.112,305.032],[196.01399999999998,305.032],[196.01399999999998,303.933]],\"i\":[[-0.30299999999999727,-0.3039999999999736],[0.30400000000000205,-0.30299999999999727],[0.3030000000000257,0.30299999999999727],[-0.30299999999999727,0.30299999999999727]],\"o\":[[0.30400000000000205,0.30299999999999727],[-0.30299999999999727,0.30299999999999727],[-0.30299999999999727,-0.30299999999999727],[0.30400000000003047,-0.3039999999999736]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.747,303.678],[193.524,302.902],[192.747,302.12399999999997],[191.971,302.902]],\"i\":[[-0.4270000000000209,0],[0,0.4270000000000209],[0.42799999999999727,0],[0,-0.42900000000003047]],\"o\":[[0.42799999999999727,0],[0,-0.4289999999999736],[-0.4269999999999925,0],[0,0.4270000000000209]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.7843137254901961,0.7647058823529411,0.8156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.747,306.615],[194.431,308.29900000000004],[192.747,309.982],[191.06400000000002,308.29900000000004]],\"i\":[[-0.929000000000002,0],[0,-0.93100000000004],[0.9300000000000068,0],[0,0.9289999999999736]],\"o\":[[0.9300000000000068,0],[0,0.9289999999999736],[-0.929000000000002,0],[-2.842170943040401e-14,-0.93100000000004]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9215686274509803,0.6862745098039216,0.12549019607843137,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[196.251,308.065],[196.258,308.299],[196.065,309.45],[192.74699999999999,309.45],[192.05499999999998,308.758],[192.74699999999999,308.066],[196.251,308.066]],\"i\":[[0,0],[0,-0.07900000000000773],[0.125,-0.36000000000001364],[0,0],[0,0.382000000000005],[-0.382000000000005,0],[0,0]],\"o\":[[0.0049999999999954525,0.07600000000002183],[0,0.40300000000002],[0,0],[-0.382000000000005,0],[0,-0.38299999999998136],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[196.251,308.065]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9215686274509803,0.6862745098039216,0.12549019607843137,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.747,311.809],[196.258,308.298],[192.747,304.787],[189.23600000000002,308.298]],\"i\":[[-1.934000000000026,0],[0,1.934000000000026],[1.9339999999999975,0],[0,-1.934000000000026]],\"o\":[[1.9339999999999975,0],[0,-1.934000000000026],[-1.9339999999999975,0],[-2.842170943040401e-14,1.934000000000026]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"el\",\"p\":{\"a\":0,\"k\":[192,308]},\"s\":{\"a\":0,\"k\":[14.494,14.494]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[175.314,320.018],[210.328,320.018],[211.354,321.044],[211.354,323.92499999999995],[210.328,324.94999999999993],[175.314,324.94999999999993],[174.289,323.92499999999995],[174.289,321.044]],\"i\":[[-0.563999999999993,0],[0,0],[0,-0.5649999999999977],[0,0],[0.5649999999999977,0],[0,0],[0,0.5639999999999645],[0,0]],\"o\":[[0,0],[0.563999999999993,0],[0,0],[0,0.5640000000000214],[0,0],[-0.563999999999993,0],[0,0],[-0.0009999999999763531,-0.5649999999999977]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.2235294117647059,0.23921568627450981,0.36470588235294116,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[202.387,301.68],[202.548,302.659],[204.845,316.66499999999996],[207.194,316.66499999999996],[207.183,316.57599999999996],[204.635,301.03799999999995],[203.41899999999998,299.99299999999994],[202.898,299.99299999999994],[201.40699999999998,299.99299999999994],[197.14,299.99299999999994],[192.72299999999998,299.99299999999994],[188.50099999999998,299.99299999999994],[187.00999999999996,299.99299999999994],[182.74299999999997,299.99299999999994],[182.02599999999995,299.99299999999994],[180.95699999999997,300.6359999999999],[182.74199999999996,300.6359999999999],[188.49999999999997,300.6359999999999],[190.47399999999996,300.6359999999999],[197.13899999999995,300.6359999999999],[201.16999999999996,300.6359999999999],[202.387,301.68]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0.0049999999999954525,0.03100000000000591],[0,0],[0.575000000000017,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.22099999999997522,-0.37599999999997635],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.09399999999999409,-0.5749999999999886]],\"o\":[[0,0],[0,0],[0,0],[-0.0020000000000095497,-0.028999999999996362],[0,0],[-0.09399999999999409,-0.5740000000000123],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.43199999999998795,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.5760000000000502,-0.0009999999999195097],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[193.412,301.556],[200.659,308.803],[193.41199999999998,316.05],[186.16499999999996,308.803]],\"i\":[[-4.0020000000000095,0],[0,-4.002999999999986],[4.0020000000000095,0],[0,4.002999999999986]],\"o\":[[4.0020000000000095,0],[0,4.002999999999986],[-4.0020000000000095,0],[0.0010000000000331966,-4.002999999999986]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.050980392156862744,0.29411764705882354,0.5019607843137255,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[192.821,316.665],[207.281,316.665],[209.08100000000002,317.69100000000003],[211.16500000000002,320.45300000000003],[192.82100000000003,320.45300000000003],[174.47700000000003,320.45300000000003],[176.56200000000004,317.69100000000003],[178.36100000000005,316.665]],\"i\":[[0,0],[0,0],[-0.42600000000001614,-0.5640000000000214],[0,0],[0,0],[0,0],[0,0],[-0.5630000000000166,0]],\"o\":[[0,0],[0.563999999999993,0],[0,0],[0,0],[0,0],[0,0],[0.42500000000001137,-0.5640000000000214],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[179.137,317.62],[192.724,317.62],[206.31099999999998,317.62],[207.18399999999997,316.575],[204.63599999999997,301.037],[203.41999999999996,299.99199999999996],[192.72399999999996,299.99199999999996],[182.02799999999996,299.99199999999996],[180.81199999999995,301.037],[178.26399999999995,316.575]],\"i\":[[-0.5749999999999886,0],[0,0],[0,0],[0.09400000000002251,0.5749999999999886],[0,0],[0.575000000000017,0],[0,0],[0,0],[0.09399999999999409,-0.5740000000000123],[0,0]],\"o\":[[0,0],[0,0],[0.5749999999999886,0],[0,0],[-0.09399999999999409,-0.5740000000000123],[0,0],[0,0],[-0.5749999999999886,0],[0,0],[-0.09499999999994202,0.5749999999999886]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"rc\",\"s\":{\"a\":0,\"k\":[5.758,7.097]},\"r\":{\"a\":0,\"k\":0},\"p\":{\"a\":0,\"k\":[185.623,299.1105]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.06666666666666667,0.25098039215686274,0.4117647058823529,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[200.11,297.03],[201.407,298.32599999999996],[201.407,299.99199999999996],[202.89800000000002,299.99199999999996],[202.89800000000002,296.073],[197.95200000000003,296.073],[197.14000000000001,296.114],[197.14000000000001,297.029],[200.11,297.029]],\"i\":[[0,0],[0,-0.7129999999999654],[0,0],[0,0],[0,0],[0,0],[0.257000000000005,-0.026999999999986812],[0,0],[0,0]],\"o\":[[0.7129999999999939,0],[0,0],[0,0],[0,0],[0,0],[-0.2839999999999918,0],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[200.11,297.03]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.00392156862745098,0.14901960784313725,0.23137254901960785,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"rc\",\"s\":{\"a\":0,\"k\":[5.758,7.097]},\"r\":{\"a\":0,\"k\":0},\"p\":{\"a\":0,\"k\":[200.01999999999998,299.1105]}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.06666666666666667,0.25098039215686274,0.4117647058823529,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[418.188,233.771],[417.807,234.213],[415.71700000000004,235.618],[415.499,235.704],[406.86,233.193],[404.766,228.354],[404.728,228.16500000000002]],\"i\":[[-5.485000000000014,1.714000000000027],[0.1309999999999718,-0.14100000000001955],[0.8089999999999691,-0.33199999999999363],[0.07300000000003593,-0.02800000000002001],[1.9600000000000364,2.5589999999999975],[0.34600000000000364,1.8220000000000027],[0.014000000000010004,0.06499999999999773]],\"o\":[[-0.12299999999999045,0.1529999999999916],[-0.5609999999999786,0.6030000000000086],[-0.07200000000000273,0.030000000000001137],[-3.617999999999995,1.3530000000000086],[-1.024000000000001,-1.336999999999989],[-0.012000000000000455,-0.06100000000000705],[2.4039999999999964,5.274999999999977]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9254901960784314,0.5607843137254902,0.4470588235294118,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[404.765,228.353],[401.264,219.452],[406.002,220.066],[408.646,222.202],[410.949,210.625],[413.144,209.641],[413.073,213.864],[413.07899999999995,217.79],[417.33099999999996,209.47899999999998],[419.77599999999995,211.12099999999998],[416.537,220.13199999999998],[417.464,220.03699999999998],[422.55,212.33499999999998],[424.481,214.19899999999998],[420.226,222.78599999999997],[421.923,222.39499999999998],[426.426,219.81799999999998],[426.39099999999996,222.38699999999997],[422.234,226.98699999999997],[417.805,234.21499999999997],[415.497,235.706]],\"i\":[[1.0090000000000146,5.310999999999979],[0.5840000000000032,0.606000000000023],[-1.4420000000000073,-3.8610000000000184],[-0.7400000000000091,0.42799999999999727],[-0.12400000000002365,1.2369999999999948],[-0.38299999999998136,-0.34899999999998954],[0.10200000000003229,-2.2840000000000202],[-0.19299999999998363,-0.2259999999999991],[-0.9730000000000132,0.5440000000000111],[0.10200000000003229,-1.157999999999987],[0.1099999999999568,-1.0010000000000048],[-0.4460000000000264,0.5449999999999875],[-0.5600000000000023,0.3410000000000082],[0.41500000000002046,-1.1730000000000018],[-0.026999999999986812,-0.5739999999999839],[-1.268000000000029,0.8979999999999961],[-0.7230000000000132,-0.17900000000000205],[1.1240000000000236,-1.1539999999999964],[0.3439999999999941,-0.48699999999999477],[1.690999999999974,-1.8160000000000025],[0.8979999999999677,-0.33500000000000796]],\"o\":[[-0.4889999999999759,-2.5740000000000123],[-0.771000000000015,-0.8019999999999925],[0,0],[0.7389999999999759,-0.4269999999999925],[0.125,-1.2369999999999948],[0.38400000000001455,0.34899999999998954],[-0.10000000000002274,2.2849999999999966],[0.5480000000000018,0.6399999999999864],[0.6120000000000232,-0.3439999999999941],[-0.10199999999997544,1.157999999999987],[-0.10899999999998045,1],[0.4449999999999932,-0.5449999999999875],[0.5600000000000023,-0.3410000000000082],[-0.41500000000002046,1.1730000000000018],[0.02800000000002001,0.5749999999999886],[1.266999999999996,-0.8990000000000009],[0.4700000000000273,-0.02199999999999136],[-1.125,1.1539999999999964],[-1.8129999999999882,2.5759999999999934],[-0.61099999999999,0.6560000000000059],[-5.506000000000029,2.0570000000000164]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.6745098039215687,0.5137254901960784,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[298.17,195.118],[301.48900000000003,194.565],[305.009,194.062],[305.14,192.762],[308.37899999999996,190.542],[311.748,190.09],[311.045,187.57500000000002],[311.452,186.82500000000002],[313.811,187.27300000000002],[312.503,183.75300000000001],[307.322,183.501],[306.165,185.362],[302.846,187.575],[300.436,188.885],[299.929,191.447]],\"i\":[[0.45299999999997453,-2.1119999999999948],[-0.9550000000000409,-1.5090000000000146],[0.6800000000000068,1.1869999999999834],[-0.9699999999999704,-0.33099999999998886],[1.5810000000000173,1.8599999999999852],[-0.6030000000000086,1.2059999999999889],[0,0],[-0.48399999999998045,0.04599999999999227],[-1.33299999999997,0.8520000000000039],[1.1059999999999945,0.5020000000000095],[0.9060000000000059,-0.4019999999999868],[0,0],[0.18800000000004502,-1.9629999999999939],[0.5500000000000114,-0.8499999999999943],[1.122000000000014,0.04899999999997817]],\"o\":[[1.9610000000000127,-1.1570000000000107],[0.9549999999999841,1.5089999999999861],[-1.0020000000000095,-1.75],[2.5400000000000205,0.8660000000000139],[0,0],[0.603999999999985,-1.2069999999999936],[0,0],[0.6630000000000109,-0.06200000000001182],[0.7490000000000236,-0.4790000000000134],[-1.1070000000000277,-0.5029999999999859],[-0.9049999999999727,0.4019999999999868],[-2.115000000000009,-0.3079999999999927],[-0.06700000000000728,0.6970000000000027],[-0.3100000000000023,0.47800000000000864],[-1.1549999999999727,-0.051000000000016144]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.6745098039215687,0.5137254901960784,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[316.852,236.38],[341.59099999999995,234.637],[342.3419999999999,235.773]],\"i\":[[0.5110000000000241,14.503000000000014],[-7.772999999999968,4.031000000000006],[1.2060000000000173,-1.9019999999999868]],\"o\":[[6.170999999999992,8.561000000000007],[1.9920000000000186,-1.032999999999987],[-7.967999999999904,12.575000000000017]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9019607843137255,0.6784313725490196,0.13333333333333333,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[325.656,206.178],[333.301,207.22899999999998],[332.202,208.999],[325.636,207.736]],\"i\":[[-0.11299999999999955,0.6409999999999911],[0,0],[0.5949999999999704,-0.10800000000000409],[0.33099999999996044,0.4890000000000043]],\"o\":[[0,0],[0.0049999999999954525,0.8619999999999948],[-0.7230000000000132,0.12999999999999545],[-0.160000000000025,-0.23599999999999]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[332.279,211.855],[329.038,212.51999999999998],[326.53700000000003,211.41899999999998],[329.60400000000004,209.98899999999998]],\"i\":[[-0.36899999999997135,-0.9759999999999991],[1.169999999999959,0.16200000000000614],[0.6899999999999977,0.5749999999999886],[-1.3410000000000082,-0.13299999999998136]],\"o\":[[-0.9390000000000214,0.5660000000000025],[-0.9560000000000173,-0.12999999999999545],[0.5179999999999723,-0.9590000000000032],[1.27699999999993,0.12800000000001432]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8352941176470589,0.25882352941176473,0.2549019607843137,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[334.642,208.272],[329.038,212.51999999999998],[324.79,206.91699999999997],[324.79900000000004,206.91799999999998],[325.766,206.18499999999997],[333.90000000000003,207.30399999999997],[334.634,208.271]],\"i\":[[0,0],[2.7210000000000036,0.375],[-0.37400000000002365,2.719999999999999],[0,0],[-0.4679999999999609,-0.06499999999999773],[0,0],[0.06400000000002137,-0.46700000000001296]],\"o\":[[-0.37400000000002365,2.719999999999999],[-2.7200000000000273,-0.3739999999999952],[0,0],[0.06400000000002137,-0.4679999999999893],[0,0],[0.46800000000001774,0.06399999999999295],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.047058823529411764,0.058823529411764705,0.10196078431372549,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[319.482,181.592],[329.951,172.17700000000002],[353.372,188.63400000000001]],\"i\":[[2.4869999999999663,-1.5830000000000268],[-6.1159999999999854,1.5180000000000007],[-4.47199999999998,-10.569999999999993]],\"o\":[[1.3620000000000232,-3.1939999999999884],[7.201999999999998,-1.7870000000000061],[-21.727000000000032,-14.860000000000014]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.047058823529411764,0.058823529411764705,0.10196078431372549,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[355.009,199.722],[354.052,205.763],[332.062,221.74200000000002],[332.062,221.74200000000002],[350.611,191.29200000000003],[337.133,180.31900000000002],[339.46999999999997,177.40300000000002],[344.92199999999997,177.466]],\"i\":[[1.1599999999999682,-8.721000000000004],[0,0],[10.441000000000031,1.6529999999999916],[0,0],[4.398000000000025,8.429999999999978],[0,0],[0,0],[-3.2730000000000246,-0.11599999999998545]],\"o\":[[0,0],[-1.65300000000002,10.442000000000007],[0,0],[14.399000000000001,1.5180000000000007],[-4.399000000000001,-8.430000000000007],[0,0],[0,0],[6.279000000000053,5.225999999999999]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9254901960784314,0.5607843137254902,0.4470588235294118,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[355.009,199.722],[354.052,205.763],[332.062,221.74200000000002],[332.062,221.74200000000002],[316.083,199.75100000000003],[318.46500000000003,184.70900000000003],[318.466,184.71000000000004],[329.951,172.17700000000005]],\"i\":[[2.0779999999999745,-15.620000000000005],[0,0],[10.441000000000031,1.6529999999999916],[0,0],[-1.65300000000002,10.441999999999979],[0,0],[0,0],[-9.562000000000012,2.3719999999999857]],\"o\":[[0,0],[-1.65300000000002,10.442000000000007],[0,0],[-10.442000000000007,-1.6539999999999964],[0,0],[0,0],[0,0],[9.560999999999979,-2.3720000000000425]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.6745098039215687,0.5137254901960784,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[318.183,186.494],[318.39799999999997,184.881],[318.602,183.345],[319.018,180.224],[332.89099999999996,167.904],[355.48099999999994,182.89499999999998],[358.58699999999993,196.331],[357.4939999999999,177.95399999999998],[357.68799999999993,176.05299999999997],[363.93699999999995,200.61899999999997],[335.239,229.80899999999997],[315.899,201.33599999999996],[330.469,191.56999999999996]],\"i\":[[0,0],[-0.1269999999999527,0.9569999999999936],[-0.07300000000003593,0.5560000000000116],[-0.132000000000005,0.9879999999999995],[-9.697000000000003,1.625],[-3.358000000000004,-7.635999999999996],[-0.6959999999999695,-1.0300000000000011],[4.798000000000002,11.683000000000021],[-0.5550000000000068,0.5120000000000005],[0.2559999999999718,-16.570999999999998],[17.490999999999985,-0.7949999999999875],[-1.983000000000004,14.882000000000005],[0,0]],\"o\":[[0,0],[0.06099999999997863,-0.45599999999998886],[0.1349999999999909,-1.0159999999999911],[0.3550000000000182,-2.662000000000006],[9.697999999999979,-1.625],[3.358000000000004,7.635999999999996],[0.6970000000000027,1.031000000000006],[0,0],[0.5559999999999832,-0.5130000000000052],[-0.2540000000000191,16.569999999999993],[-17.49200000000002,0.7940000000000111],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9215686274509803,0.6901960784313725,0.12156862745098039,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[315.78,181.631],[338.202,156.363],[369.808,181.456],[367.419,219.628],[367.419,219.628],[366.618,240.736],[355.965,233.00099999999998],[355.965,233.003],[350.16299999999995,236.67299999999997],[308.65399999999994,233.13699999999997],[314.1379999999999,199.03399999999996]],\"i\":[[-0.6199999999999477,7.048000000000002],[-14.42100000000005,1.0790000000000077],[-2.36099999999999,-18.524999999999977],[1.259999999999991,-11.75399999999999],[0,0],[2.3360000000000127,-3.2990000000000066],[0,0],[0,0],[1.5090000000000146,-3.0180000000000007],[-8.069999999999993,29.568000000000012],[-2.2819999999999823,25.917]],\"o\":[[0.9850000000000136,-11.186000000000007],[14.420000000000016,-1.0790000000000077],[1.5500000000000114,12.15700000000001],[0,0],[-2.0989999999999895,11.305000000000007],[-3.910000000000025,-6.942000000000007],[0,0],[-2.2069999999999936,-0.34600000000000364],[-17.536,35.085999999999984],[3.7930000000000064,-13.895999999999987],[0.43100000000009686,-4.873999999999967]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[341.603,207.299],[340.735,212.203],[339.184,223.841],[344.51800000000003,229.055],[328.00800000000004,232.507],[321.857,223.90300000000002],[324.41,222.64800000000002],[325.958,210.44100000000003]],\"i\":[[0,0],[0,0],[0.20499999999998408,-1.5349999999999966],[-4.432000000000016,-0.8029999999999973],[7.375,1.8499999999999943],[-2.9909999999999854,0.26499999999998636],[-0.6170000000000186,0.5159999999999911],[1.4010000000000105,2.3719999999999857]],\"o\":[[0,0],[0,0],[-0.20400000000000773,1.5339999999999918],[3.620999999999981,0.6550000000000011],[-7.629000000000019,-1.9139999999999873],[0.9300000000000068,-0.08299999999999841],[1.9309999999999832,-1.6160000000000139],[-1.4020000000000437,-2.3720000000000425]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8901960784313725,0.4823529411764706,0.39215686274509803,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[361.171,233.229],[367.022,241.269],[370.78999999999996,267.337],[406.89199999999994,245.12099999999998],[405.66399999999993,235.503],[407.30299999999994,232.47699999999998],[415.02799999999996,236.39299999999997],[393.57099999999997,276.484],[379.64099999999996,278.289],[355.91999999999996,256.902]],\"i\":[[0,0],[-2.238999999999976,-3.120999999999981],[-5.522999999999968,-5.529999999999973],[-7.633999999999958,16.769999999999982],[1.516999999999996,1.7990000000000066],[-0.3020000000000209,0.14400000000000546],[0.7629999999999768,-1.3599999999999852],[1.9920000000000186,-2.434000000000026],[6.2549999999999955,3.757000000000005],[2.454999999999984,2.7860000000000014]],\"o\":[[1.975999999999999,2.804000000000002],[-2.244000000000028,4.407000000000011],[18.653999999999996,18.675999999999988],[2.822999999999979,-6.199000000000012],[0.10899999999998045,-0.23099999999999454],[2.305000000000007,-1.1020000000000039],[-2.910000000000025,7.8770000000000095],[-3.086999999999989,3.7760000000000105],[-9.745000000000005,-5.853999999999985],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[362.735,234.577],[389.75100000000003,258.337],[406.91200000000003,232.81],[410.509,235.17600000000002],[413.774,236.61],[393.872,274.824],[375.982,275.099],[355.91900000000004,256.90299999999996]],\"i\":[[0,0],[-4.412000000000035,9.694999999999993],[-2.2130000000000223,4.7239999999999895],[-0.7189999999999941,-0.26900000000000546],[0.39800000000002456,-1.2069999999999936],[1.990000000000009,-2.434000000000026],[4.33299999999997,3.629000000000019],[6.526999999999987,7.40500000000003]],\"o\":[[5.562999999999988,7.890999999999991],[6.543000000000006,-10.913000000000011],[0.5360000000000014,-1.1430000000000007],[1.1730000000000018,0.4399999999999977],[-2.910000000000025,7.877999999999986],[-5.487000000000023,6.7099999999999795],[-5.947999999999979,-4.9839999999999804],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[336.277,227.343],[335.882,230.76399999999998],[356.602,242.99399999999997],[340.53099999999995,267.82],[305.07499999999993,265.771],[305.0759999999999,266.045],[308.4829999999999,271.539],[308.5509999999999,271.632],[308.5509999999999,271.632],[308.55199999999985,271.633],[308.55199999999985,271.633],[308.55899999999986,271.803],[308.56599999999986,271.972],[308.65099999999984,274.18699999999995],[308.67699999999985,274.21199999999993],[342.47199999999987,293.6599999999999],[336.1319999999999,327.96399999999994],[359.6339999999999,327.96399999999994],[349.8889999999999,283.97799999999995],[362.8479999999999,234.94899999999996]],\"i\":[[10.333000000000027,0.6730000000000018],[0,0],[0.1360000000000241,-12.533999999999992],[6.5190000000000055,-6.023000000000025],[0.5460000000000491,1.2939999999999827],[0.02800000000002001,-0.10000000000002274],[-1.4809999999999945,-2.005999999999972],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.025999999999953616,-0.7269999999999754],[-0.0010000000000331966,-0.016999999999995907],[-3.850999999999999,-17.402999999999963],[4.543999999999983,-10.937000000000012],[0,0],[-1.0709999999999695,13.379000000000019],[5.521000000000015,19.692999999999984]],\"o\":[[0,0],[0,0],[-0.13700000000000045,12.536000000000001],[-7.139999999999986,4.170999999999992],[0.031999999999982265,0.08300000000002683],[0.8109999999999786,1.6709999999999923],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.03100000000000591,0.7520000000000095],[0.014000000000010004,0.0009999999999763531],[15.646999999999991,-0.9490000000000123],[1.8659999999999854,8.430999999999983],[0,0],[-4.156999999999982,-15.850999999999999],[1.7379999999999995,-21.706999999999994],[-8.412999999999897,-6.362999999999943]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[362.847,234.949],[327.48199999999997,226.678],[312.06399999999996,237.884],[312.044,237.932],[312.02299999999997,237.981],[311.96,238.128],[311.93899999999996,238.177],[311.926,238.209],[311.919,238.226],[311.89799999999997,238.275],[311.816,238.47400000000002],[311.796,238.52300000000002],[311.779,238.56400000000002],[311.776,238.573],[311.75600000000003,238.62300000000002],[311.73600000000005,238.67300000000003],[311.67600000000004,238.82300000000004],[311.65600000000006,238.87300000000005],[311.65100000000007,238.88500000000005],[311.61600000000004,238.97400000000005],[311.59600000000006,239.02500000000003],[311.5180000000001,239.22700000000003],[311.4980000000001,239.27900000000002],[311.4950000000001,239.28600000000003],[311.4790000000001,239.32900000000004],[311.3650000000001,239.63700000000003],[311.35900000000015,239.65300000000002],[311.34700000000015,239.68800000000002],[311.32800000000015,239.74],[311.237,240],[311.228,240.026],[311.219,240.05200000000002],[310.989,240.73600000000002],[310.97499999999997,240.77900000000002],[310.972,240.788],[310.854,241.161],[310.848,241.165],[308.48400000000004,271.538],[308.552,271.63100000000003],[308.552,271.63100000000003],[308.553,271.632],[308.553,271.632],[308.56,271.802],[308.567,271.971],[306.53000000000003,327.963],[359.634,327.963],[349.889,283.97700000000003]],\"i\":[[5.520000000000039,19.69199999999998],[15.02600000000001,1.443000000000012],[2.7959999999999923,-6.413999999999987],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.07500000000004547,-0.228999999999985],[0,0],[0,0],[0.03899999999998727,-0.125],[0,0],[-10.618000000000052,-14.38900000000001],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.2849999999999682,-20.567000000000007],[0,0],[-1.0709999999999695,13.378999999999962]],\"o\":[[-10.63900000000001,-8.046999999999997],[-7.874000000000024,0.5020000000000095],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.07900000000000773,0.2259999999999991],[0,0],[0,0],[-0.03899999999998727,0.12399999999999523],[0,0],[-4.86099999999999,11.335000000000008],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.0289999999999964,24.875999999999976],[0,0],[-4.156999999999982,-15.850999999999999],[1.73599999999999,-21.706000000000017]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[301.531,200.097],[301.495,200.155],[301.438,200.12],[301.556,199.595],[301.791,199.507],[302.005,199.63400000000001],[301.995,200.20800000000003],[302.414,200.19300000000004],[302.556,200.64400000000003],[302.257,200.93800000000005],[301.89300000000003,201.00000000000006],[301.81300000000005,200.41300000000007],[301.48400000000004,200.46500000000006],[301.44200000000006,200.41200000000006],[301.49500000000006,200.37000000000006],[301.86100000000005,200.28300000000007],[301.88000000000005,200.23700000000008],[301.92400000000004,199.6850000000001],[301.78600000000006,199.6020000000001],[301.6190000000001,199.66600000000008],[301.531,200.097]],\"i\":[[0,0],[0.02600000000001046,-0.0049999999999954525],[0.006000000000028649,0.02600000000001046],[-0.11000000000001364,0.09999999999999432],[-0.08100000000001728,-0.004000000000019099],[-0.05099999999998772,-0.08100000000001728],[0.0999999999999659,-0.2740000000000009],[-0.17199999999996862,-0.09100000000000819],[0.08600000000001273,-0.16200000000000614],[0.12299999999999045,-0.06900000000001683],[0.0999999999999659,0.04200000000000159],[-0.1150000000000091,0.3599999999999852],[0.132000000000005,0.01500000000001478],[-0.0030000000000427463,0.02600000000001046],[-0.02600000000001046,-0.003999999999990678],[-0.10099999999999909,0.0549999999999784],[0,0],[0.06300000000004502,0.09600000000000364],[0.053999999999973625,0.003999999999990678],[0.05099999999998772,-0.044999999999987494],[-0.05099999999998772,-0.20400000000000773]],\"o\":[[0.005999999999971806,0.02600000000001046],[-0.024999999999977263,0.007000000000005002],[-0.06099999999997863,-0.24600000000000932],[0.06900000000001683,-0.06200000000001182],[0.08400000000000318,0.0049999999999954525],[0.07200000000000273,0.11099999999999],[0.12400000000002365,-0.06700000000000728],[0.21600000000000819,0.11400000000000432],[-0.06200000000001182,0.11600000000001387],[-0.12599999999997635,0.07200000000000273],[-0.132000000000005,-0.054000000000002046],[-0.09100000000000819,0.03999999999999204],[-0.024999999999977263,-0.0020000000000095497],[0.002999999999985903,-0.026999999999986812],[0.14999999999997726,0.016999999999995907],[0,0],[0.1150000000000091,-0.27600000000001046],[-0.03300000000001546,-0.0519999999999925],[-0.055999999999983174,-0.002999999999985903],[-0.08500000000009322,0.07899999999992247],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[305.153,206.662],[305.13100000000003,206.726],[305.06600000000003,206.704],[305.09400000000005,205.84900000000002],[305.26800000000003,205.69400000000002],[305.47,205.638],[305.47200000000004,205.638],[305.78100000000006,205.871],[305.8670000000001,206.10000000000002],[306.4860000000001,207.18400000000003],[306.5400000000001,206.836],[306.5400000000001,206.835],[306.70200000000006,206.452],[306.87000000000006,206.096],[306.87100000000004,206.094],[306.93000000000006,206.018],[307.06800000000004,205.997],[307.194,206.07000000000002],[307.37,206.312],[307.42,206.554],[307.41900000000004,206.556],[307.25300000000004,207.119],[306.97800000000007,207.426],[306.9410000000001,207.43599999999998],[306.9390000000001,207.43599999999998],[306.5660000000001,207.35199999999998],[306.5370000000001,207.67099999999996],[306.2750000000001,207.86999999999998],[306.1040000000001,207.87899999999996],[305.9330000000001,207.82199999999997],[305.7390000000001,207.26699999999997],[305.7580000000001,207.04799999999997],[305.77600000000007,206.83099999999996],[305.82900000000006,206.78899999999996],[305.87100000000004,206.84199999999996],[305.85400000000004,207.05399999999995],[305.83500000000004,207.27799999999993],[305.982,207.73899999999995],[306.115,207.78199999999995],[306.25600000000003,207.77399999999994],[306.44100000000003,207.65999999999994],[306.475,207.29799999999994],[305.776,206.13399999999996],[305.69100000000003,205.90899999999996],[305.46900000000005,205.73599999999996],[305.31500000000005,205.77799999999996],[305.1720000000001,205.90699999999995],[305.153,206.662]],\"i\":[[0,0],[0.02400000000000091,-0.01099999999999568],[0.012000000000000455,0.02400000000000091],[-0.1419999999999959,0.18999999999999773],[-0.06399999999996453,0.03499999999999659],[-0.06700000000000728,-0.0009999999999763531],[0,0],[-0.06300000000004502,-0.15899999999999181],[-0.03200000000003911,-0.08600000000001273],[-0.3120000000000118,-0.24100000000001387],[-0.02400000000000091,0.08900000000002706],[0,0],[-0.08599999999995589,0.17700000000002092],[-0.06999999999999318,0.15399999999999636],[0,0],[-0.023000000000024556,0.016999999999995907],[-0.04899999999997817,-0.014000000000010004],[-0.03999999999996362,-0.034000000000020236],[-0.036000000000001364,-0.08499999999997954],[-0.0020000000000095497,-0.08199999999999363],[0,0],[0.09399999999999409,-0.15899999999999181],[0.06599999999997408,-0.027999999999991587],[0.010999999999967258,-0.0010000000000047748],[0,0],[0.10899999999998045,0.05500000000000682],[0,0],[0.13999999999998636,-0.029000000000024784],[0.057999999999992724,0.007000000000005002],[0.05299999999999727,0.031999999999982265],[-0.033999999999991815,0.3050000000000068],[-0.0049999999999954525,0.0689999999999884],[-0.009999999999990905,0.07500000000001705],[-0.02600000000001046,-0.003999999999990678],[0.004000000000019099,-0.02600000000001046],[0.0049999999999954525,-0.06799999999998363],[0.009999999999990905,-0.07899999999997931],[-0.103999999999985,-0.06200000000001182],[-0.04800000000000182,-0.006000000000000227],[-0.045000000000015916,0.010000000000019327],[-0.004000000000019099,0.04599999999999227],[0,0],[0.14500000000003865,0.39799999999999613],[0.028999999999996362,0.0730000000000075],[0.08999999999997499,0.0020000000000095497],[0.05099999999998772,-0.027999999999991587],[0.04099999999999682,-0.0549999999999784],[-0.1560000000000059,-0.3190000000000168]],\"o\":[[0.011000000000024102,0.02400000000000091],[-0.02400000000000091,0.012000000000000455],[-0.17399999999997817,-0.3569999999999993],[0.05000000000001137,-0.0660000000000025],[0.06499999999999773,-0.03700000000000614],[0,0],[0.1279999999999859,0.0010000000000047748],[0.024999999999977263,0.06200000000001182],[0.13299999999998136,0.36600000000001387],[0.016000000000019554,-0.16100000000000136],[0,0],[0.029999999999972715,-0.11099999999999],[0.043000000000006366,-0.09000000000000341],[0,0],[0.014999999999986358,-0.033999999999991815],[0.04099999999999682,-0.030000000000001137],[0.043000000000006366,0.012000000000000455],[0.07299999999997908,0.06299999999998818],[0.03300000000001546,0.07800000000000296],[0,0],[0.004000000000019099,0.2009999999999934],[-0.09300000000001774,0.1599999999999966],[-0.012999999999976808,0.006000000000000227],[0,0],[-0.13900000000001,0.0020000000000095497],[0,0],[-0.007999999999981355,0.08600000000001273],[-0.05500000000000682,0.01099999999999568],[-0.05900000000002592,-0.007000000000005002],[-0.13400000000001455,-0.08099999999998886],[0.009000000000014552,-0.07900000000000773],[0.004000000000019099,-0.07099999999999795],[0.002999999999985903,-0.026999999999986812],[0.026999999999986812,0.0020000000000095497],[-0.007999999999981355,0.07499999999998863],[-0.0049999999999954525,0.07200000000000273],[-0.028999999999996362,0.2599999999999909],[0.040000000000020464,0.022999999999996135],[0.047000000000025466,0.0049999999999954525],[0.10000000000002274,-0.020000000000010232],[0,0],[-0.3639999999999759,-0.24399999999999977],[-0.028999999999996362,-0.07800000000000296],[-0.04800000000000182,-0.11899999999999977],[-0.05099999999998772,-0.0010000000000047748],[-0.05200000000002092,0.030000000000001137],[-0.12300000000010414,0.16600000000005366],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[306.577,207.245],[306.938,207.338],[306.942,207.33599999999998],[307.171,207.06799999999998],[307.325,206.557],[307.324,206.55499999999998],[307.281,206.349],[307.132,206.142],[307.043,206.089],[306.988,206.094],[306.959,206.134],[306.958,206.136],[306.78900000000004,206.493],[306.63400000000007,206.85999999999999],[306.6330000000001,206.861],[306.577,207.245]],\"i\":[[0,0],[-0.13599999999996726,0.0010000000000047748],[0,0],[-0.08400000000000318,0.14400000000000546],[0.0020000000000095497,0.18099999999998317],[0,0],[0.02800000000002001,0.0660000000000025],[0.06099999999997863,0.054000000000002046],[0.026999999999986812,0.006000000000000227],[0.014999999999986358,-0.009999999999990905],[0.009000000000014552,-0.019000000000005457],[0,0],[0.04499999999995907,-0.09399999999999409],[0.027999999999963165,-0.10299999999998022],[0,0],[0.016999999999995907,-0.1839999999999975]],\"o\":[[0.10599999999999454,0.060000000000002274],[0,0],[0.05000000000001137,-0.020999999999986585],[0.08600000000001273,-0.14500000000001023],[0,0],[-0.0020000000000095497,-0.06999999999999318],[-0.029999999999972715,-0.07499999999998863],[-0.03100000000000591,-0.026999999999986812],[-0.021000000000015007,-0.007000000000005002],[-0.009999999999990905,0.008000000000009777],[0,0],[-0.06700000000000728,0.14699999999999136],[-0.08300000000002683,0.17099999999999227],[0,0],[-0.02500000000009095,0.09400000000002251],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[306.633,206.861],[306.57399999999996,206.893],[306.633,206.861]],\"i\":[[0,0],[0,0],[-0.007000000000005002,0.025000000000005684]],\"o\":[[0,0],[0.026000000000067303,0.008000000000009777],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[303.976,202.809],[304.042,202.826],[304.02599999999995,202.892],[304.01599999999996,202.898],[303.86799999999994,202.99699999999999],[304.27799999999996,203.581],[304.37699999999995,203.71499999999997],[304.55199999999996,203.49699999999999],[304.57699999999994,203.464],[304.69499999999994,203.412],[304.8739999999999,202.871],[304.9679999999999,202.89700000000002],[304.7709999999999,203.484],[304.7709999999999,203.48600000000002],[304.7679999999999,203.49400000000003],[304.74299999999994,203.55700000000002],[304.5179999999999,203.97000000000003],[304.4839999999999,203.97200000000004],[304.48099999999994,203.97100000000003],[304.4599999999999,203.95700000000002],[304.37799999999993,203.86900000000003],[303.9119999999999,204.43400000000003],[303.8689999999999,204.47500000000002],[303.8159999999999,204.43200000000002],[303.41399999999993,203.68],[303.3019999999999,203.508],[303.5639999999999,203.109],[303.7379999999999,202.97400000000002],[303.6869999999999,202.894],[303.7159999999999,202.833],[303.7769999999999,202.862],[303.8149999999999,202.92],[303.9659999999999,202.819],[303.976,202.809]],\"i\":[[0,0],[-0.013999999999953161,-0.02400000000000091],[0.02199999999999136,-0.014000000000010004],[0,0],[0.06499999999999773,-0.046999999999997044],[-0.14100000000001955,-0.19599999999999795],[0,0],[0,0],[0,0],[-0.06999999999999318,-0.018000000000000682],[-0.04199999999997317,0.1599999999999966],[0,0],[0.07600000000002183,-0.19499999999999318],[0,0],[0,0],[0,0],[0.047000000000025466,-0.018000000000000682],[0.010999999999967258,0.002999999999985903],[0,0],[0.0049999999999954525,0.007000000000005002],[0.03300000000001546,0.04099999999999682],[0.08899999999999864,-0.09799999999998477],[0.02199999999999136,-0.002999999999985903],[0.002999999999985903,0.02600000000001046],[0.15699999999998226,0.2400000000000091],[0,0],[-0.17399999999997817,0.14300000000000068],[-0.055999999999983174,0.04099999999999682],[0.0020000000000095497,0.004000000000019099],[-0.024999999999977263,0.008000000000009777],[-0.008999999999957708,-0.02600000000001046],[-0.023000000000024556,-0.033999999999991815],[-0.028999999999996362,0.018000000000000682],[0,0]],\"o\":[[0.02199999999999136,-0.014000000000010004],[0.014000000000010004,0.022999999999996135],[0,0],[-0.028999999999996362,0.016999999999995907],[0.10099999999999909,0.14799999999999613],[0,0],[0,0],[0,0],[0.03500000000002501,-0.05099999999998772],[0.06900000000001683,-0.1810000000000116],[0,0],[-0.04599999999999227,0.1699999999999875],[0,0],[0,0],[0,0],[-0.08800000000002228,0.21999999999999886],[-0.012000000000000455,0.003999999999990678],[0,0],[-0.009000000000014552,-0.0020000000000095497],[-0.021000000000015007,-0.015999999999991132],[-0.17000000000001592,0.21199999999998909],[-0.004000000000019099,0.02199999999999136],[-0.026999999999986812,0.002999999999985903],[-0.014000000000010004,-0.15899999999999181],[0,0],[-0.055999999999983174,-0.09700000000000841],[0.055999999999983174,-0.04800000000000182],[-0.03100000000000591,-0.04599999999999227],[-0.009000000000014552,-0.025000000000005684],[0.024999999999977263,-0.00899999999998613],[0.0009999999999763531,0.002999999999985903],[0.06700000000000728,-0.046999999999997044],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[303.79,203.052],[303.62300000000005,203.18099999999998],[303.38300000000004,203.457],[303.492,203.626],[303.892,204.34],[304.313,203.791],[304.198,203.638],[303.79,203.052]],\"i\":[[0,0],[0.05499999999994998,-0.044999999999987494],[-0.022999999999967713,-0.04099999999999682],[-0.043000000000006366,-0.06499999999999773],[-0.06099999999997863,-0.19700000000000273],[-0.16300000000001091,0.2050000000000125],[0.04099999999999682,0.055999999999983174],[0.103999999999985,0.15500000000000114]],\"o\":[[-0.05500000000000682,0.03999999999999204],[-0.14100000000001955,0.11600000000001387],[0.029999999999972715,0.04800000000000182],[0.14100000000001955,0.2150000000000034],[0.07499999999998863,-0.09499999999999886],[-0.03500000000002501,-0.044999999999987494],[-0.13899999999995316,-0.19200000000000728],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[304.649,203.528],[304.625,203.558],[304.436,203.795],[304.495,203.867],[304.649,203.528]],\"i\":[[0,0],[0,0],[0,0],[-0.013000000000033651,-0.01300000000000523],[-0.06700000000000728,0.1670000000000016]],\"o\":[[0,0],[0,0],[0.02600000000001046,0.033999999999991815],[0.026999999999986812,-0.03899999999998727],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[303.557,202.651],[303.516,202.597],[303.57,202.555],[304.103,202.543],[305.005,202.594],[305.006,202.599],[303.557,202.651]],\"i\":[[0,0],[-0.004000000000019099,0.027000000000015234],[-0.025999999999953616,-0.002999999999985903],[-0.23900000000003274,0.012000000000000455],[-0.03299999999995862,-0.09399999999999409],[0,0],[0,0]],\"o\":[[-0.024999999999977263,-0.002999999999985903],[0.004000000000019099,-0.02600000000001046],[0.07600000000002183,0.01099999999999568],[0.4049999999999727,-0.020000000000010232],[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[304.108,202.64],[303.557,202.65099999999998],[304.108,202.64]],\"i\":[[0,0],[0,0],[-0.242999999999995,0.011000000000024102]],\"o\":[[0,0],[0.08599999999995589,0.011000000000024102],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[304.913,202.626],[304.108,202.64000000000001],[304.913,202.626]],\"i\":[[0,0],[0.3709999999999809,-0.019000000000005457],[0,0]],\"o\":[[-0.009000000000014552,-0.02600000000001046],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[304.914,202.628],[304.913,202.62699999999998],[304.914,202.628]],\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[304.872,202.871],[304.914,202.627],[304.872,202.871]],\"i\":[[0,0],[0.008000000000038199,0.030000000000001137],[0,0]],\"o\":[[0.031999999999982265,-0.1220000000000141],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[301.939,200.352],[301.93,200.913],[302.21,200.85600000000002],[302.471,200.60100000000003],[302.369,200.28000000000003],[301.968,200.33600000000004]],\"i\":[[0,0],[-0.09699999999997999,-0.040000000000020464],[-0.1029999999999518,0.0589999999999975],[-0.05299999999999727,0.09999999999999432],[0.15499999999997272,0.08199999999999363],[0.1279999999999859,-0.07400000000001228]],\"o\":[[-0.1379999999999768,0.36000000000001364],[0.07100000000002638,0.030000000000001137],[0.10800000000000409,-0.06100000000000705],[0.06099999999997863,-0.1150000000000091],[-0.15899999999999181,-0.08500000000000796],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[315.944,185.328],[300.673,198.055],[301.013,201.333],[304.741,208.323],[307.437,209.982],[322.15500000000003,197.655],[321.846,194.484],[317.581,186.519]],\"i\":[[0.7829999999999586,-0.31100000000000705],[0.88900000000001,-0.7090000000000032],[-1.0469999999999686,-1.929000000000002],[-0.5099999999999909,-1.1620000000000061],[-0.7840000000000487,0.7560000000000002],[-0.2440000000000282,0.33500000000000796],[1.1550000000000296,1.8859999999999957],[2.728999999999985,5.091000000000008]],\"o\":[[-0.5219999999999914,0.2079999999999984],[-0.8879999999999768,0.7090000000000032],[1.0480000000000018,1.9279999999999973],[0.5110000000000241,1.1620000000000061],[0.785000000000025,-0.7560000000000002],[0.24500000000000455,-0.33500000000000796],[-1.1019999999999754,-1.7959999999999923],[-0.3210000000000264,-0.5999999999999943]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.23137254901960785,0.25098039215686274,0.3607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[320.137,189.089],[319.688,188.234],[319.794,187.952],[320.299,187.536],[320.587,187.548],[320.995,188.333],[320.89300000000003,188.607],[320.31600000000003,189.081]],\"i\":[[0.06599999999997408,0.07800000000000296],[0.06499999999999773,0.11999999999997613],[-0.14100000000001955,0.11400000000000432],[-0.07299999999997908,0.07499999999998863],[-0.055999999999983174,-0.117999999999995],[-0.015000000000043201,-0.04599999999999227],[0.14999999999997726,-0.10300000000000864],[0.37000000000000455,-0.30299999999999727]],\"o\":[[-0.043000000000006366,-0.05099999999998772],[-0.06599999999997408,-0.12000000000000455],[0.13999999999998636,-0.11400000000000432],[0.07499999999998863,-0.0759999999999934],[0.05700000000001637,0.117999999999995],[0.014000000000010004,0.04599999999999227],[-0.14299999999997226,0.09800000000001319],[-0.043000000000006366,0.03500000000002501]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[322.175,192.937],[320.54,189.84400000000002],[320.646,189.56100000000004],[321.151,189.14400000000003],[321.439,189.15700000000004],[323.03200000000004,192.18100000000004],[322.93100000000004,192.45500000000004],[322.35300000000007,192.92800000000005]],\"i\":[[0.06499999999999773,0.07699999999999818],[0.06599999999997408,0.11999999999997613],[-0.13999999999998636,0.1139999999999759],[-0.07299999999997908,0.07699999999999818],[-0.055999999999983174,-0.11899999999999977],[-0.015000000000043201,-0.046999999999997044],[0.14999999999997726,-0.10300000000000864],[0.36899999999997135,-0.3030000000000257]],\"o\":[[-0.04399999999998272,-0.0519999999999925],[-0.06599999999997408,-0.12100000000000932],[0.14100000000001955,-0.11400000000000432],[0.07400000000001228,-0.07499999999998863],[0.05500000000000682,0.11899999999999977],[0.016000000000019554,0.04599999999999227],[-0.14299999999997226,0.09899999999998954],[-0.04300000000006321,0.03599999999994452]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[302.088,205.104],[300.434,204.816],[299.93600000000004,206.71],[301.59000000000003,206.99800000000002]],\"i\":[[0.31899999999996,0.6029999999999802],[0.5939999999999941,-0.44299999999998363],[-0.3199999999999932,-0.6020000000000039],[-0.5949999999999704,0.4439999999999884]],\"o\":[[-0.3190000000000168,-0.6020000000000039],[-0.5950000000000273,0.44300000000001205],[0.31799999999998363,0.6020000000000039],[0.5949999999999704,-0.44300000000001205]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[305.262,214.212],[325.377,197.345],[324.976,193.242],[319.457,182.934],[318.83299999999997,181.954],[298.5,199.005],[298.941,203.24599999999998],[303.76599999999996,212.29299999999998]],\"i\":[[-0.617999999999995,-0.47699999999997544],[-0.30299999999999727,0.41499999999999204],[1.4960000000000377,2.4390000000000214],[3.531000000000006,6.590000000000003],[0.25200000000000955,0.3059999999999832],[1.0369999999999777,-0.8279999999999745],[-1.3559999999999945,-2.495999999999981],[-0.6599999999999682,-1.5039999999999907]],\"o\":[[2.2579999999999814,-1.9869999999999948],[0.3159999999999741,-0.4329999999999927],[-1.4250000000000114,-2.3240000000000123],[-0.16500000000002046,-0.3060000000000116],[-3.559000000000026,2.8089999999999975],[-1.1510000000000105,0.9180000000000064],[1.3550000000000182,2.4950000000000045],[0.31100000000003547,0.7080000000000268]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.03529411764705882,0.0392156862745098,0.06666666666666667,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[317.338,181.392],[296.309,198.956],[296.749,203.196],[301.574,212.243],[305.062,214.391],[325.377,197.344],[324.976,193.24099999999999],[319.457,182.933]],\"i\":[[1.0139999999999532,-0.4019999999999868],[1.1499999999999773,-0.917999999999978],[-1.3550000000000182,-2.4950000000000045],[-0.6599999999999682,-1.502999999999986],[-1.0149999999999864,0.9790000000000134],[-0.3159999999999741,0.4329999999999927],[1.4960000000000377,2.4390000000000214],[3.5319999999999823,6.590000000000003]],\"o\":[[-0.6759999999999877,0.26900000000000546],[-1.1499999999999773,0.9170000000000016],[1.3550000000000182,2.4950000000000045],[0.660000000000025,1.5039999999999907],[1.0160000000000196,-0.9790000000000134],[0.3159999999999741,-0.4329999999999927],[-1.4250000000000114,-2.3240000000000123],[-0.4159999999999968,-0.7769999999999868]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.03529411764705882,0.0392156862745098,0.06666666666666667,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[315.097,181.247],[294.067,198.81],[294.508,203.051],[299.33299999999997,212.09699999999998],[302.04799999999994,214.54299999999998],[304.52399999999994,214.67199999999997],[323.1379999999999,197.19799999999998],[322.7369999999999,193.09499999999997],[317.2169999999999,182.78799999999998],[318.0109999999999,181.34599999999998]],\"i\":[[0.5590000000000259,-0.2220000000000084],[1.1509999999999536,-0.9169999999999732],[-1.3559999999999945,-2.495999999999981],[-0.6599999999999682,-1.502999999999986],[-0.9899999999999523,-0.03299999999998704],[-0.2259999999999991,0.21800000000001774],[-0.3159999999999741,0.4329999999999927],[1.4950000000000045,2.4390000000000214],[3.531000000000006,6.588999999999999],[0.40200000000004366,0.19200000000000728]],\"o\":[[-0.6759999999999877,0.2680000000000007],[-1.1499999999999773,0.9170000000000016],[1.3550000000000182,2.4950000000000045],[0.5129999999999768,1.1709999999999923],[0.2839999999999918,0.00899999999998613],[1.0149999999999864,-0.9790000000000134],[0.3149999999999977,-0.43199999999998795],[-1.4259999999999877,-2.3240000000000123],[-0.18700000000001182,-0.34899999999998954],[-0.7859999999998877,-0.37599999999997635]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[296,205.218],[293.926,206.60199999999998],[295.824,211.67899999999997],[298.656,215.01099999999997],[300.083,214.16199999999998]],\"i\":[[0,0],[0.4700000000000273,-0.4359999999999786],[-1.188000000000045,-2.1289999999999907],[-0.3709999999999809,-0.11199999999999477],[0,0]],\"o\":[[0,0],[-0.4700000000000273,0.4350000000000023],[1.1879999999999882,2.1289999999999907],[0.3720000000000141,0.11299999999999955],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.9372549019607843,0.9372549019607843,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[318.804,235.448],[315.667,230.887],[305.508,233.48],[295.84999999999997,243.986],[270.88599999999997,237.338],[311.381,252.40099999999998],[318.804,235.448]],\"i\":[[0,0],[0,0],[5.7239999999999895,-1.1379999999999768],[4.640000000000043,-1.9770000000000039],[3.1129999999999995,8.188999999999993],[-3.6920000000000073,1.960000000000008],[0,0]],\"o\":[[0,0],[0,0],[-1.88900000000001,3.8530000000000086],[-8.52800000000002,3.6330000000000098],[-0.9189999999999827,14.935000000000002],[3.6920000000000073,-1.961999999999989],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[283.659,230.935],[283.657,230.935],[294.018,213.71],[292.844,208.292],[296.388,205.925],[298.335,208.735],[300.58299999999997,212.83300000000003]],\"i\":[[-0.19599999999996953,-5.742999999999995],[0,0],[-1.1730000000000018,4.1299999999999955],[0.9479999999999791,1.3640000000000043],[-0.21199999999998909,0.04800000000000182],[-0.8070000000000164,-1.3329999999999984],[1.608000000000004,-1.7680000000000007]],\"o\":[[0,0],[-0.8109999999999786,-5.026999999999987],[0.6059999999999945,-2.1310000000000002],[1.978999999999985,-1.4639999999999986],[0.9440000000000168,-0.21100000000001273],[0.8070000000000164,1.3319999999999936],[-1.3269999999999982,1.4609999999999843]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[318.804,235.448],[315.667,230.887],[286.17999999999995,233.738],[300.5849999999999,212.834],[298.33699999999993,208.736],[296.38999999999993,205.926],[270.88699999999994,237.337],[311.38199999999995,252.39999999999998]],\"i\":[[0,0],[0,0],[9.990000000000009,3.5490000000000066],[-1.606999999999971,1.7680000000000007],[0.8070000000000164,1.3330000000000268],[0.9440000000000168,-0.2109999999999843],[0.9180000000000064,-14.935000000000002],[-3.6920000000000073,1.960000000000008]],\"o\":[[0,0],[0,0],[-9.990999999999985,-3.5490000000000066],[1.608000000000004,-1.7680000000000007],[-0.8070000000000164,-1.3319999999999936],[-0.9440000000000168,0.21100000000001273],[-0.9189999999999827,14.935000000000002],[3.691000000000031,-1.9609999999999843]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[296.52,208.206],[299.95799999999997,204.402],[306.91299999999995,203.84599999999998],[307.614,207.40299999999996],[308.226,209.42199999999997],[298.836,213.11299999999997]],\"i\":[[0.30400000000003047,1.875],[-0.6959999999999695,2.920000000000016],[-0.20999999999997954,-0.8619999999999948],[0.17699999999996407,-1.5379999999999825],[0,0],[4.600999999999999,-3.6040000000000134]],\"o\":[[0,0],[0.6960000000000264,-2.9199999999999875],[0.21100000000001273,0.86099999999999],[-0.17700000000002092,1.539999999999992],[-4.2239999999999895,2.540999999999997],[-1.4950000000000045,1.1710000000000207]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8980392156862745,0.5058823529411764,0.5686274509803921,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[129.471,252.078],[129.852,252.52],[131.941,253.925],[132.16,254.01100000000002],[140.799,251.50000000000003],[142.893,246.66100000000003],[142.931,246.47200000000004]],\"i\":[[5.484000000000009,1.7129999999999939],[-0.13100000000000023,-0.14100000000001955],[-0.8079999999999927,-0.33199999999999363],[-0.07399999999998386,-0.02800000000002001],[-1.960000000000008,2.5589999999999975],[-0.34600000000000364,1.8220000000000027],[-0.014000000000010004,0.06499999999999773]],\"o\":[[0.12299999999999045,0.1529999999999916],[0.561000000000007,0.6030000000000086],[0.07200000000000273,0.030000000000001137],[3.617999999999995,1.3530000000000086],[1.024000000000001,-1.336999999999989],[0.012000000000000455,-0.06100000000000705],[-2.405000000000001,5.272999999999968]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9254901960784314,0.5607843137254902,0.4470588235294118,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[142.893,246.659],[146.394,237.75799999999998],[141.656,238.373],[139.012,240.509],[136.709,228.93099999999998],[134.513,227.94699999999997],[134.584,232.16899999999998],[134.577,236.09599999999998],[130.326,227.78399999999996],[127.881,229.42599999999996],[131.12,238.43699999999995],[130.193,238.34299999999996],[125.10700000000001,230.64199999999997],[123.17600000000002,232.50499999999997],[127.43100000000001,241.09199999999996],[125.73400000000001,240.70099999999996],[121.23200000000001,238.12399999999997],[121.26700000000001,240.69299999999996],[125.424,245.29299999999995],[129.853,252.52099999999996],[132.161,254.01099999999997]],\"i\":[[-1.0090000000000146,5.312000000000012],[-0.5840000000000032,0.606000000000023],[1.4420000000000073,-3.862000000000023],[0.7400000000000091,0.42799999999999727],[0.12399999999999523,1.2379999999999995],[0.3830000000000098,-0.34899999999998954],[-0.10099999999999909,-2.2830000000000155],[0.19400000000001683,-0.2259999999999991],[0.9720000000000084,0.5450000000000159],[-0.10300000000000864,-1.1569999999999823],[-0.11000000000001364,-1.0010000000000048],[0.44599999999999795,0.5449999999999875],[0.5600000000000023,0.3400000000000034],[-0.41500000000000625,-1.171999999999997],[0.027000000000001023,-0.5749999999999886],[1.2680000000000007,0.8990000000000009],[0.7219999999999942,-0.17900000000000205],[-1.1239999999999952,-1.1539999999999964],[-0.3439999999999941,-0.48799999999999955],[-1.6910000000000025,-1.8160000000000025],[-0.8979999999999961,-0.33500000000000796]],\"o\":[[0.4900000000000091,-2.5740000000000123],[0.7709999999999866,-0.8009999999999877],[0,0],[-0.7400000000000091,-0.42799999999999727],[-0.125,-1.2379999999999995],[-0.38399999999998613,0.34899999999998954],[0.10099999999999909,2.2849999999999966],[-0.546999999999997,0.63900000000001],[-0.6119999999999948,-0.3429999999999893],[0.10200000000000387,1.157999999999987],[0.10900000000000887,1.0010000000000048],[-0.44599999999999795,-0.5449999999999875],[-0.561000000000007,-0.34200000000001296],[0.41500000000000625,1.1730000000000018],[-0.028000000000005798,0.5749999999999886],[-1.266999999999996,-0.8990000000000009],[-0.46999999999999886,-0.02199999999999136],[1.1239999999999952,1.1539999999999964],[1.813999999999993,2.576999999999998],[0.61099999999999,0.6570000000000107],[5.506,2.059000000000026]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.6745098039215687,0.5137254901960784,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[230.677,303.183],[208.069,234.31],[203.457,235.705],[205.738,247.66400000000002],[206.221,248.01700000000002],[211.596,247.27200000000002],[205.31900000000002,251.47000000000003],[230.45000000000002,303.35200000000003]],\"i\":[[0,0],[19.29400000000001,22.700999999999965],[1.6589999999999918,-0.6230000000000189],[-0.13400000000001455,-1.4660000000000082],[-0.36600000000001387,-0.09100000000000819],[0,0],[0.2740000000000009,-0.24800000000001887],[0,0]],\"o\":[[-1.9410000000000025,-26.502999999999986],[-1.3379999999999939,0.2560000000000002],[0.49500000000000455,2.4029999999999916],[0,0],[0.3669999999999902,0.09100000000000819],[0,0],[-0.2740000000000009,0.24799999999999045],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[201.692,199.703],[201.692,199.703],[203.119,201.129],[203.119,217.76999999999998],[201.692,219.19599999999997],[201.692,219.19599999999997],[200.26500000000001,217.76999999999998],[200.26500000000001,201.129]],\"i\":[[-0.7840000000000202,0],[0,0],[0,-0.7839999999999918],[0,0],[0.7839999999999918,0],[0,0],[0,0.782999999999987],[0,0]],\"o\":[[0,0],[0.7849999999999966,0],[0,0],[0,0.7839999999999918],[0,0],[-0.7849999999999966,0],[0,0],[0.0009999999999763531,-0.7839999999999918]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[201.692,217.451],[193.69,209.45],[193.69,209.45],[201.692,201.44799999999998]],\"i\":[[0,0],[0,4.4010000000000105],[0,0],[-4.4010000000000105,0]],\"o\":[[-4.4010000000000105,0],[0,0],[0,-4.4010000000000105],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.011764705882352941,0.4627450980392157,0.7372549019607844,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[193.303,207.44],[194.108,207.44],[196.116,209.44899999999998],[196.116,209.44899999999998],[194.108,211.45799999999997],[193.303,211.45799999999997],[191.294,209.44899999999998],[191.294,209.44899999999998]],\"i\":[[-1.1049999999999898,0],[0,0],[0,-1.1049999999999898],[0,0],[1.1040000000000134,0],[0,0],[0,1.1049999999999898],[0,0]],\"o\":[[0,0],[1.1049999999999898,0],[0,0],[0,1.1049999999999898],[0,0],[-1.1049999999999898,0],[0,0],[0,-1.1049999999999898]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.23137254901960785,0.25098039215686274,0.3607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[197.635,179.732],[197.635,202.692],[198.635,203.692],[199.635,202.692],[199.635,179.732]],\"i\":[[0,0],[0,0],[-0.5519999999999925,0],[0,0.5519999999999925],[0,0]],\"o\":[[0,0],[0,0.5519999999999925],[0.5519999999999925,0],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.011764705882352941,0.4627450980392157,0.7372549019607844,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[200.839,180.483],[199.446,201.829],[201.816,204.56300000000002],[201.717,206.96900000000002],[203.92600000000002,201.121],[216.747,186.996],[217.907,186.828],[236.50400000000002,202.721],[250.69100000000003,189.237],[238.96900000000002,196.905],[214.854,185.307],[202.012,175.69099999999997]],\"i\":[[0.07200000000000273,-1.740000000000009],[-7.681999999999988,-18.64500000000001],[0.04999999999998295,-1.207000000000022],[0,0],[0.37999999999999545,1.5260000000000105],[-1.9329999999999927,11.901999999999987],[-1.0809999999999889,-0.6949999999999932],[-8.492999999999995,-3.281000000000006],[0.16799999999997794,7.994],[10.923000000000002,3.674999999999983],[5.046999999999997,-1.8810000000000002],[-3.8189999999999884,12.365000000000009]],\"o\":[[0,0],[1.8870000000000005,0.07800000000000296],[0,0],[2.9569999999999936,-1.179000000000002],[0,0],[0,0],[0.9279999999999973,0.5970000000000084],[7.193000000000012,2.7789999999999964],[-0.027999999999991587,0.46700000000001296],[-11.162000000000006,-3.7539999999999907],[-5.040999999999997,1.8799999999999955],[-0.6879999999999882,1.4540000000000362]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.047058823529411764,0.058823529411764705,0.10196078431372549,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[200.839,180.483],[199.446,201.829],[201.816,204.56300000000002],[201.717,206.96900000000002],[203.92600000000002,201.121],[216.747,186.996],[217.907,186.828],[236.50400000000002,202.721],[250.51500000000001,187.369]],\"i\":[[0.8089999999999975,-19.709000000000003],[-7.681999999999988,-18.64500000000001],[0.04999999999998295,-1.207000000000022],[0,0],[0.37999999999999545,1.5260000000000105],[-1.9329999999999927,11.901999999999987],[-1.0809999999999889,-0.6949999999999932],[-8.492999999999995,-3.281000000000006],[1.467000000000013,8.498999999999995]],\"o\":[[0,0],[1.8870000000000005,0.07800000000000296],[0,0],[2.9569999999999936,-1.179000000000002],[0,0],[0,0],[0.9279999999999973,0.5970000000000084],[7.757000000000005,2.997000000000014],[-4.913000000000011,-28.449000000000012]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[217.225,213.7],[223.118,220.099],[229.517,214.20499999999998],[229.506,214.20399999999998],[228.488,213.099],[218.339,212.682],[217.234,213.7]],\"i\":[[0,0],[-3.3940000000000055,-0.13999999999998636],[-0.13999999999998636,3.3940000000000055],[0,0],[0.5840000000000032,0.02400000000000091],[0,0],[0.02400000000000091,-0.5840000000000032]],\"o\":[[-0.13999999999998636,3.3940000000000055],[3.3940000000000055,0.13900000000001],[0,0],[0.02400000000000091,-0.5840000000000032],[0,0],[-0.5840000000000032,-0.02400000000000091],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[219.697,174.153],[202.308,192.6],[201.587,210.161],[220.117,230.279],[220.117,230.279],[222.29899999999998,230.244],[208.19899999999998,207.886],[219.44599999999997,193.605],[228.74699999999996,197.81199999999998],[235.45399999999995,189.78699999999998]],\"i\":[[6.49199999999999,5.350999999999999],[0.39800000000002456,-9.705000000000013],[0,0],[-10.62899999999999,-0.4369999999999834],[0,0],[-0.7179999999999893,0.05099999999998772],[0,6.590000000000003],[-3.3999999999999773,0.1570000000000107],[0,0],[0.10500000000001819,-0.6279999999999859]],\"o\":[[-9.40700000000001,0.9480000000000075],[0,0],[-0.4370000000000118,10.627999999999986],[0,0],[0.73599999999999,0.030000000000001137],[-13.597000000000008,-0.15000000000000568],[0,-6.591000000000008],[3.4010000000000105,-0.1570000000000107],[0,0],[-1.493999999999943,-1.4929999999999666]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9254901960784314,0.5607843137254902,0.4470588235294118,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[222.424,174.07],[222.424,174.07],[202.30700000000002,192.599],[201.586,210.16],[220.116,230.277],[220.116,230.277],[240.233,211.74699999999999],[240.954,194.18599999999998]],\"i\":[[10.627999999999986,0.4370000000000118],[0,0],[0.4359999999999786,-10.627999999999986],[0,0],[-10.62899999999999,-0.4359999999999786],[0,0],[-0.4359999999999786,10.62899999999999],[0,0]],\"o\":[[0,0],[-10.628000000000014,-0.4370000000000118],[0,0],[-0.4370000000000118,10.628000000000014],[0,0],[10.628000000000014,0.4370000000000118],[0,0],[0.4359999999999786,-10.626999999999981]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9490196078431372,0.6745098039215687,0.5137254901960784,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[239.811,199.703],[239.811,199.703],[238.38400000000001,201.129],[238.38400000000001,217.76999999999998],[239.81,219.19599999999997],[239.811,219.19599999999997],[241.237,217.76999999999998],[241.237,201.129]],\"i\":[[0.7849999999999966,0],[0,0],[0,-0.7839999999999918],[0,0],[-0.7839999999999918,0],[0,0],[0,0.782999999999987],[0,0]],\"o\":[[0,0],[-0.7849999999999966,0],[0,0],[0,0.7839999999999918],[0,0],[0.7849999999999966,0],[0,0],[0,-0.7839999999999918]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[239.811,217.451],[247.812,209.45],[247.812,209.45],[239.811,201.44799999999998]],\"i\":[[0,0],[0,4.4010000000000105],[0,0],[4.400000000000006,0]],\"o\":[[4.4010000000000105,0],[0,0],[0,-4.4010000000000105],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.011764705882352941,0.4627450980392157,0.7372549019607844,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[248.2,207.44],[247.39499999999998,207.44],[245.386,209.44899999999998],[245.386,209.44899999999998],[247.39499999999998,211.45799999999997],[248.2,211.45799999999997],[250.20899999999997,209.44899999999998],[250.20899999999997,209.44899999999998]],\"i\":[[1.1050000000000182,0],[0,0],[0,-1.1049999999999898],[0,0],[-1.1049999999999898,0],[0,0],[0,1.1049999999999898],[0,0]],\"o\":[[0,0],[-1.1049999999999898,0],[0,0],[0,1.1049999999999898],[0,0],[1.1049999999999898,0],[0,0],[2.842170943040401e-14,-1.1049999999999898]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.23137254901960785,0.25098039215686274,0.3607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[241.715,204.455],[242.715,205.455],[243.715,204.455],[243.715,177.34500000000003],[238.915,166.99800000000002],[226.707,163.12500000000003],[207.38899999999998,165.74600000000004],[197.63599999999997,179.64400000000003],[197.63599999999997,202.69200000000004],[198.63599999999997,203.69200000000004],[199.63599999999997,202.69200000000004],[199.63599999999997,179.64400000000003],[208.15499999999997,167.59000000000003],[226.66099999999997,165.11700000000002],[237.64999999999998,168.53600000000003],[241.71599999999998,177.34400000000002],[241.71599999999998,204.455]],\"i\":[[0,0],[-0.5519999999999925,0],[0,0.5519999999999925],[0,0],[3.700000000000017,3.052000000000021],[5.703000000000003,0.15500000000000114],[5.532000000000011,-2.2920000000000016],[0,-7.268000000000001],[0,0],[-0.5519999999999925,0],[0,0.5519999999999925],[0,0],[-5.018000000000001,2.0800000000000125],[-6.4010000000000105,-0.17199999999999704],[-2.3000000000000114,-1.8970000000000198],[0,-2.6430000000000007],[0,0]],\"o\":[[0,0.5519999999999925],[0.5519999999999925,0],[0,0],[0,-3.0960000000000036],[-2.6100000000000136,-2.1529999999999916],[-6.63300000000001,-0.17900000000000205],[-5.746999999999986,2.3810000000000002],[0,0],[0,0.5519999999999925],[0.5519999999999925,0],[0,0],[0,-6.284999999999997],[5.233000000000004,-2.1680000000000064],[5.193999999999988,0.14099999999999113],[3.134999999999991,2.585000000000008],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[241.715,204.455]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.011764705882352941,0.4627450980392157,0.7372549019607844,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[193.577,240.164],[182.456,250.60299999999998],[163.367,277.87],[142.792,251.04500000000002],[139.63,248.096],[135.57999999999998,251.399],[132.28799999999998,253.715],[170.30399999999997,295.109],[195.17299999999997,268.00199999999995],[200.05999999999997,246.43299999999996],[200.06999999999996,246.41399999999996],[200.24899999999997,246.03299999999996],[200.31099999999998,245.90299999999996],[200.42499999999998,245.65799999999996],[200.427,245.65199999999996],[200.531,245.42299999999994],[200.59,245.28899999999996],[200.632,245.19499999999996],[200.631,245.19499999999996],[201.86,241.50499999999997],[199.27800000000002,244.37399999999997]],\"i\":[[0,0],[3.391999999999996,-4.588999999999999],[8.592000000000013,-9.221000000000004],[1.8049999999999784,3.512999999999977],[1.2920000000000016,-1.0409999999999968],[1.342000000000013,-0.6829999999999927],[0.3160000000000025,-1.98599999999999],[-18.712999999999994,13.843000000000018],[-1.693000000000012,2.1920000000000073],[-2.7450000000000045,5.6559999999999775],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[-4.974999999999994,2.680000000000007],[-7.546999999999997,10.21799999999999],[-3.1680000000000064,3.399000000000001],[-0.35300000000000864,-0.686000000000007],[-0.6049999999999898,0.48599999999999],[-1.342000000000013,0.6829999999999927],[3.540999999999997,13.178000000000026],[13.27600000000001,-9.819999999999993],[6.1440000000000055,-7.949000000000012],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.1620000000000061,-2.63900000000001],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[226.414,230.554],[223.55499999999998,236.451],[223.38099999999997,237.789],[225.63199999999998,243.563],[229.92699999999996,232.62599999999998]],\"i\":[[1.1610000000000014,0.31100000000000705],[3.4410000000000025,-1.554000000000002],[-0.7690000000000055,-0.86099999999999],[-0.3439999999999941,-1.524000000000001],[0.2990000000000066,4.743000000000023]],\"o\":[[0,0],[0,0],[0.7690000000000055,0.86099999999999],[0.3429999999999893,1.5229999999999961],[2.842170943040401e-14,2.842170943040401e-14]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[225.504,241.275],[223.99599999999998,240.621],[221.575,241.077],[220.405,242.924],[223.063,245.622],[225.047,245.50300000000001]],\"i\":[[0.4170000000000016,0.7079999999999984],[0.6750000000000114,0],[0.5169999999999959,-0.45599999999998886],[0.042999999999977945,-0.3370000000000175],[-0.6349999999999909,-0.31800000000001205],[-0.6750000000000114,-0.07900000000000773]],\"o\":[[0,0],[-0.6750000000000114,0],[-0.5159999999999911,0.45599999999998886],[-0.04400000000001114,0.3369999999999891],[0.6349999999999909,0.31800000000001205],[0.6760000000000161,0.07799999999997453]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[209.999,230.655],[219.998,236.846],[221.546,238.631],[216.864,246.21],[207.179,233.71300000000002]],\"i\":[[-1.3889999999999816,0.39699999999999136],[-7.2620000000000005,-1.271000000000015],[1.3249999999999886,0.24500000000000455],[0.3959999999999866,-2.1430000000000007],[0.5529999999999973,3.4919999999999902]],\"o\":[[0,0],[0.9939999999999998,0.20900000000000318],[-1.3259999999999934,-0.24500000000000455],[-0.39699999999999136,2.141999999999996],[0,-2.842170943040401e-14]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[1,1,1,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[222.463,241.139],[218.93099999999998,239.96800000000002],[216.134,240.22600000000003],[217.682,241.98200000000003],[217.801,242.72500000000002],[221.575,243.38500000000002]],\"i\":[[0,0],[1.6069999999999993,1.032999999999987],[0,0],[0,0],[0,0],[-1.4639999999999986,-1.0670000000000073]],\"o\":[[0,0],[-1.6059999999999945,-1.0320000000000107],[0,0],[0,0],[0,0],[1.4630000000000223,1.0669999999999789]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[225.262,238.241],[223.084,237.066],[222.642,239.55100000000002],[221.097,237.465],[217.64100000000002,240.324],[219.925,243.20100000000002],[225.388,242.633]],\"i\":[[0,0],[0,0],[0.2580000000000098,-0.0800000000000125],[0.9409999999999741,0.5740000000000123],[0,0],[-1.3489999999999895,-0.1980000000000075],[-0.0519999999999925,1.2160000000000082]],\"o\":[[0,0],[0,0],[-0.257000000000005,0.07900000000000773],[-0.9410000000000025,-0.5749999999999886],[0,0],[1.3489999999999895,0.19900000000001228],[0.05299999999999727,-1.2180000000000177]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8823529411764706,0.8784313725490196,0.9019607843137255,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[210.837,212.513],[211.06199999999998,217.79],[211.06199999999998,230.244],[209.017,233.178],[218.773,240.661],[228.177,238.597],[229.48399999999998,232.55700000000002],[229.17199999999997,232.443],[226.76499999999996,231.05900000000003],[226.84799999999996,218.00700000000003]],\"i\":[[0,0],[0,0],[0,-1.641999999999996],[1.3049999999999784,-0.9960000000000093],[-3.0109999999999957,-0.4660000000000082],[-1.1099999999999852,0.9519999999999982],[-0.45599999999998886,1.9279999999999973],[0.3620000000000232,0.11899999999999977],[0.5769999999999982,0.6289999999999907],[-1.8050000000000068,2.296999999999997]],\"o\":[[0,0],[0,0],[0,0.7940000000000111],[1.945999999999998,2.1119999999999948],[3.8489999999999895,0.5939999999999941],[0.7760000000000105,-0.6659999999999968],[-0.35900000000000887,-0.09899999999998954],[-0.938999999999993,-0.3089999999999975],[-1.8050000000000068,-1.9710000000000036],[1.8050000000000352,-2.2970000000000255]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9058823529411765,0.40784313725490196,0.3568627450980392,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[232.25,324.925],[231.625,315.302],[208.07,234.31],[193.577,240.16400000000002],[184.888,250.48600000000002],[195.75300000000001,295.14500000000004],[197.299,324.92500000000007],[232.25,324.92500000000007]],\"i\":[[0,0],[0.13300000000000978,1.5330000000000155],[22.12100000000001,26.02600000000001],[0,0],[0.6809999999999832,-4.742999999999995],[-4.506,-14.610000000000014],[0.6370000000000005,-12.704000000000008],[0,0]],\"o\":[[-0.25499999999999545,-4.696000000000026],[-2.8710000000000093,-32.92399999999998],[-5.174000000000007,0.9919999999999902],[-4.099999999999994,2.140999999999991],[-0.9650000000000034,6.731000000000023],[1.9410000000000025,6.293999999999983],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[232.25,324.925]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[228.754,233.195],[233.382,271.247],[229.525,291.011],[229.525,291.012],[230.195,294.148],[244.04399999999998,248.31900000000002],[238.78599999999997,247.822],[241.16599999999997,245.467],[232.31999999999996,233.94600000000003]],\"i\":[[1.2549999999999955,0.16900000000001114],[2.799999999999983,-20.31600000000003],[1.407999999999987,-5.61099999999999],[0,0],[0,0],[0.20900000000000318,0.10400000000001342],[0,0],[0.31399999999999295,0.5759999999999934],[1.4240000000000066,1.8269999999999982]],\"o\":[[0,0],[-1.0190000000000055,7.391999999999996],[0,0],[0,0],[5.522999999999996,-12.968000000000018],[-0.21000000000000796,-0.10499999999998977],[1.203000000000003,-1.1769999999999925],[-0.28299999999998704,-0.5169999999999959],[-1.1259999999999764,-0.32600000000002183]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.054901960784313725,0.09019607843137255,0.19607843137254902,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[228.754,233.195],[233.382,271.247],[224.671,307.116],[223.245,324.924],[248.921,324.924],[249.725,307.594]],\"i\":[[29.219000000000023,3.9350000000000023],[2.799999999999983,-20.31600000000003],[0,0],[0,0],[0,0],[-0.3669999999999902,4.091000000000008]],\"o\":[[0,0],[-2.7990000000000066,20.314999999999998],[0,0],[0,0],[0.17500000000001137,-7.189000000000021],[2.02200000000002,-22.534999999999968]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[224.512,244.57],[225.048,245.50199999999998],[232.391,287.243],[222.869,288.353],[223.064,245.621]],\"i\":[[-1.3249999999999886,-0.41800000000000637],[0,0],[0.31800000000001205,-18.569000000000017],[-0.15800000000001546,1.5879999999999654],[1.6230000000000189,10.912000000000006]],\"o\":[[0,0],[0,0],[-0.3170000000000073,18.569999999999993],[0.15799999999998704,-1.5860000000000127],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[187.991,250.677],[196.692,239.678],[198.616,238.027],[217.942,230.759],[226.886,232.153],[226.885,232.153],[236.56099999999998,236.456],[236.93699999999998,236.313],[242.212,251.488],[245.869,274.97],[245.048,300.58200000000005],[238.394,310.273],[209.111,306.338],[195.709,287.94500000000005]],\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.7539999999999907,0.03900000000001569],[-0.16499999999999204,0.08799999999999386],[0,0],[-0.45400000000000773,-1.4960000000000377],[1.663000000000011,-3.02800000000002],[6.402999999999992,-1.9699999999999704],[9.192000000000007,9.716000000000008],[2.296999999999997,3.283999999999992]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.08199999999999363,-0.0049999999999954525],[0,0],[0,0],[0.45400000000000773,1.497000000000014],[-1.663000000000011,3.02800000000002],[-6.402999999999992,1.9700000000000273],[-9.192000000000007,-9.716000000000008],[-2.3000000000000114,-3.2830000000000723]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.8823529411764706,0.8784313725490196,0.9019607843137255,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[240.725,240.164],[251.846,250.60299999999998],[270.935,277.87],[291.51,251.04500000000002],[294.67199999999997,248.096],[298.722,251.399],[302.01399999999995,253.715],[263.99699999999996,295.109],[239.12799999999996,268.00199999999995],[234.24099999999996,246.43299999999996],[234.22999999999996,246.41399999999996],[234.04999999999995,246.03299999999996],[233.98799999999994,245.90299999999996],[233.87499999999994,245.65799999999996],[233.87299999999993,245.65199999999996],[233.76899999999992,245.42299999999994],[233.70899999999992,245.28899999999996],[233.66799999999992,245.19499999999996],[233.66799999999992,245.19499999999996],[232.4389999999999,241.50499999999997],[235.0209999999999,244.37399999999997]],\"i\":[[0,0],[-3.3910000000000196,-4.588999999999999],[-8.591999999999985,-9.221000000000004],[-1.8050000000000068,3.512999999999977],[-1.2929999999999495,-1.0409999999999968],[-1.3419999999999845,-0.6829999999999927],[-0.3159999999999741,-1.98599999999999],[18.714,13.843000000000018],[1.6939999999999884,2.1920000000000073],[2.7450000000000045,5.6559999999999775],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[4.9739999999999895,2.680000000000007],[7.5470000000000255,10.21799999999999],[3.1680000000000064,3.399000000000001],[0.35199999999997544,-0.686000000000007],[0.6050000000000182,0.48599999999999],[1.3419999999999845,0.6829999999999927],[-3.540999999999997,13.178000000000026],[-13.275000000000006,-9.819999999999993],[-6.1440000000000055,-7.949000000000012],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.1610000000000014,-2.63900000000001],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,286.622],[170.809,286.622],[171.184,287.42400000000004],[169.376,290.814],[168.14600000000002,291.61600000000004],[105.35,291.61600000000004],[104.976,290.814],[106.784,287.42400000000004]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4410000000000309],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4410000000000309],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4420000000000073],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4410000000000309]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,279.932],[170.809,279.932],[171.184,280.735],[169.376,284.125],[168.14600000000002,284.928],[105.35,284.928],[104.976,284.125],[106.784,280.735]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4420000000000073],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4420000000000073],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4420000000000073]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,273.243],[170.809,273.243],[171.184,274.046],[169.376,277.436],[168.14600000000002,278.238],[105.35,278.238],[104.976,277.436],[106.784,274.046]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4410000000000309],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4409999999999741],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4420000000000073]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,266.553],[170.809,266.553],[171.184,267.356],[169.376,270.746],[168.14600000000002,271.548],[105.35,271.548],[104.976,270.746],[106.784,267.356]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4410000000000309],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4420000000000073],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4420000000000073]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,259.863],[170.809,259.863],[171.184,260.665],[169.376,264.055],[168.14600000000002,264.857],[105.35,264.857],[104.976,264.055],[106.784,260.665]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4410000000000309],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4410000000000309],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4420000000000073],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4410000000000309]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,253.174],[170.809,253.174],[171.184,253.976],[169.376,257.366],[168.14600000000002,258.169],[105.35,258.169],[104.976,257.366],[106.784,253.976]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4410000000000025],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4420000000000073],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4420000000000073],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4410000000000025]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,246.484],[170.809,246.484],[171.184,247.286],[169.376,250.676],[168.14600000000002,251.47899999999998],[105.35,251.47899999999998],[104.976,250.676],[106.784,247.286]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4410000000000025],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4420000000000073],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4420000000000073],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.4410000000000025]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[108.015,239.795],[170.809,239.795],[171.184,240.59799999999998],[169.376,243.98799999999997],[168.14600000000002,244.78999999999996],[105.35,244.78999999999996],[104.976,243.98799999999997],[106.784,240.59799999999998]],\"i\":[[-0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0],[-0.2360000000000042,0.4410000000000025],[0,0]],\"o\":[[0,0],[0.4420000000000073,0],[0,0],[-0.23500000000001364,0.4410000000000025],[0,0],[-0.44199999999999307,0],[0,0],[0.23499999999999943,-0.44299999999998363]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[164.102,323.323],[162.079,325.34499999999997],[160.05700000000002,323.323],[160.05700000000002,311.63899999999995],[162.079,309.61599999999993],[164.102,311.63899999999995]],\"i\":[[0,0],[1.1169999999999902,0],[0,1.1170000000000186],[0,0],[-1.1169999999999902,0],[0,-1.1180000000000518]],\"o\":[[0,1.1170000000000186],[-1.1169999999999902,0],[0,0],[0,-1.1170000000000186],[1.1169999999999902,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[161.573,208.845],[162.079,207.669],[162.585,208.845],[162.585,310.46299999999997],[162.079,311.63899999999995],[161.573,310.46299999999997]],\"i\":[[0,0],[-0.27899999999999636,0],[0,-0.6490000000000009],[0,0],[0.28000000000000114,0],[0,0.6490000000000009]],\"o\":[[0,-0.6500000000000057],[0.27899999999999636,0],[0,0],[0,0.6490000000000009],[-0.27899999999999636,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[110.403,233.105],[107.28,238.1],[168.144,238.1],[169.374,237.297],[171.182,233.907],[170.807,233.10500000000002],[110.403,233.10500000000002]],\"i\":[[0,0],[0.9620000000000033,-1.7180000000000177],[0,0],[-0.23499999999998522,0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0]],\"o\":[[-1.117999999999995,1.61099999999999],[0,0],[0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4410000000000025],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[110.403,233.105]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[115.786,226.415],[111.621,231.411],[168.14499999999998,231.411],[169.37499999999997,230.608],[171.18299999999996,227.21800000000002],[170.80799999999996,226.41500000000002],[115.786,226.41500000000002]],\"i\":[[0,0],[1.2990000000000066,-1.740000000000009],[0,0],[-0.23499999999998522,0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0]],\"o\":[[-1.4740000000000038,1.5889999999999986],[0,0],[0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[115.786,226.415]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[123.075,219.726],[117.413,224.721],[168.144,224.721],[169.374,223.918],[171.182,220.52800000000002],[170.807,219.72600000000003],[123.075,219.72600000000003]],\"i\":[[0,0],[1.781000000000006,-1.7789999999999964],[0,0],[-0.23499999999998522,0.4420000000000073],[0,0],[0.4410000000000025,0],[0,0]],\"o\":[[-1.9890000000000043,1.5480000000000018],[0,0],[0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4410000000000025],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[123.075,219.726]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[133.802,213.035],[125.359,218.031],[168.144,218.031],[169.374,217.229],[171.182,213.83900000000003],[170.807,213.03600000000003],[133.802,213.03600000000003]],\"i\":[[0,0],[2.666000000000011,-1.8830000000000098],[0,0],[-0.23499999999998522,0.4410000000000025],[0,0],[0.4410000000000025,0],[0,0]],\"o\":[[-2.9550000000000125,1.4399999999999977],[0,0],[0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[133.802,213.035]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[165.387,206.346],[160.111,206.975],[137.61499999999998,211.34],[168.14399999999998,211.34],[169.37399999999997,210.538],[171.18199999999996,207.14800000000002],[170.80699999999996,206.34500000000003],[165.387,206.34500000000003]],\"i\":[[0,0],[1.8160000000000025,0],[6.963000000000022,-2.811000000000007],[0,0],[-0.23499999999998522,0.4410000000000025],[0,0],[0.4410000000000025,0],[0,0]],\"o\":[[-1.6939999999999884,0.4099999999999966],[-7.939999999999998,0],[0,0],[0.4420000000000073,0],[0,0],[0.23500000000001364,-0.4420000000000073],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[165.387,206.346]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[220.504,169.341],[222.694,171.532],[224.884,169.341],[224.884,156.686],[222.694,154.495],[220.504,156.686]],\"i\":[[0,0],[-1.2090000000000032,0],[0,1.210000000000008],[0,0],[1.2090000000000032,0],[0,-1.210000000000008]],\"o\":[[0,1.210000000000008],[1.210000000000008,0],[0,0],[0,-1.210000000000008],[-1.210000000000008,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[223.242,109.351],[222.695,108.803],[222.148,109.351],[222.148,156.686],[222.695,157.234],[223.242,156.686]],\"i\":[[0,0],[0.3009999999999877,0],[0,-0.30299999999999727],[0,0],[-0.3019999999999925,0],[0,0.3019999999999925]],\"o\":[[0,-0.3020000000000067],[-0.30299999999999727,0],[0,0],[0,0.3019999999999925],[0.3019999999999925,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[281.249,114.617],[213.24,114.617],[212.835,115.486],[214.793,119.15700000000001],[216.126,120.02700000000002],[284.135,120.02700000000002],[284.541,119.15700000000001],[282.58299999999997,115.486]],\"i\":[[0.478999999999985,0],[0,0],[-0.25499999999999545,-0.47799999999999443],[0,0],[-0.478999999999985,0],[0,0],[0.2540000000000191,0.47800000000000864],[0,0]],\"o\":[[0,0],[-0.47800000000000864,0],[0,0],[0.25499999999999545,0.47799999999999443],[0,0],[0.47800000000000864,0],[0,0],[-0.2559999999999718,-0.47800000000000864]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[281.249,107.372],[213.24,107.372],[212.835,108.241],[214.793,111.912],[216.126,112.781],[284.135,112.781],[284.541,111.912],[282.58299999999997,108.241]],\"i\":[[0.478999999999985,0],[0,0],[-0.25499999999999545,-0.47799999999999443],[0,0],[-0.478999999999985,0],[0,0],[0.2540000000000191,0.47799999999999443],[0,0]],\"o\":[[0,0],[-0.47800000000000864,0],[0,0],[0.25499999999999545,0.47799999999999443],[0,0],[0.47800000000000864,0],[0,0],[-0.2559999999999718,-0.47799999999999443]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[384.491,264.613],[386.603,266.725],[388.71500000000003,264.613],[388.71500000000003,252.412],[386.603,250.3],[384.491,252.412]],\"i\":[[0,0],[-1.1659999999999968,0],[0,1.1659999999999968],[0,0],[1.16700000000003,0],[0,-1.1659999999999968]],\"o\":[[0,1.1659999999999968],[1.1659999999999968,0],[0,0],[0,-1.1659999999999968],[-1.1659999999999968,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[387.131,206.775],[386.60299999999995,206.247],[386.07499999999993,206.775],[386.07499999999993,252.412],[386.60299999999995,252.94],[387.131,252.412]],\"i\":[[0,0],[0.2909999999999968,0],[0,-0.2909999999999968],[0,0],[-0.2909999999999968,0],[0,0.2909999999999968]],\"o\":[[0,-0.2909999999999968],[-0.29199999999997317,0],[0,0],[0,0.2909999999999968],[0.2909999999999968,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[437.939,238.023],[437.60200000000003,232.807],[377.487,232.807],[377.096,233.64499999999998],[378.984,237.18399999999997],[380.269,238.02199999999996],[437.939,238.02199999999996]],\"i\":[[0,0],[0.03699999999997772,1.7580000000000098],[0,0],[-0.2459999999999809,-0.4609999999999843],[0,0],[-0.46200000000004593,0],[0,0]],\"o\":[[-0.18700000000001182,-1.718999999999994],[0,0],[-0.46100000000001273,0],[0,0],[0.2459999999999809,0.46100000000001273],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[437.939,238.023]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[437.58,231.038],[437.306,225.822],[377.488,225.822],[377.097,226.66],[378.98499999999996,230.2],[380.27,231.03799999999998],[437.58,231.03799999999998]],\"i\":[[0,0],[0.16599999999999682,1.718999999999994],[0,0],[-0.2459999999999809,-0.4609999999999843],[0,0],[-0.46200000000004593,0],[0,0]],\"o\":[[-0.016999999999995907,-1.7580000000000098],[0,0],[-0.46100000000001273,0],[0,0],[0.2459999999999809,0.46100000000001273],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[437.58,231.038]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[437.109,224.053],[436.202,218.837],[377.488,218.837],[377.097,219.67499999999998],[378.98499999999996,223.21499999999997],[380.27,224.05299999999997],[437.109,224.05299999999997]],\"i\":[[0,0],[0.37599999999997635,1.7130000000000223],[0,0],[-0.2459999999999809,-0.4609999999999843],[0,0],[-0.46200000000004593,0],[0,0]],\"o\":[[-0.22500000000002274,-1.7630000000000052],[0,0],[-0.46100000000001273,0],[0,0],[0.2459999999999809,0.46100000000001273],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[437.109,224.053]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[435.785,217.067],[434.20700000000005,211.851],[377.4870000000001,211.851],[377.09600000000006,212.689],[378.98400000000004,216.22799999999998],[380.26900000000006,217.06599999999997],[435.785,217.06599999999997]],\"i\":[[0,0],[0.6019999999999754,1.7050000000000125],[0,0],[-0.2459999999999809,-0.46000000000000796],[0,0],[-0.46200000000004593,0],[0,0]],\"o\":[[-0.4479999999999791,-1.7709999999999866],[0,0],[-0.46100000000001273,0],[0,0],[0.2459999999999809,0.46100000000001273],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[435.785,217.067]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[433.551,210.082],[431.222,204.867],[377.48699999999997,204.867],[377.09599999999995,205.70499999999998],[378.9839999999999,209.24399999999997],[380.26899999999995,210.08199999999997],[433.551,210.08199999999997]],\"i\":[[0,0],[0.8570000000000277,1.6940000000000168],[0,0],[-0.2459999999999809,-0.46000000000000796],[0,0],[-0.46200000000004593,0],[0,0]],\"o\":[[-0.6949999999999932,-1.781000000000006],[0,0],[-0.46100000000001273,0],[0,0],[0.2459999999999809,0.46100000000001273],[0,0],[0,0]]}}},{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[433.551,210.082]],\"i\":[[0,0]],\"o\":[[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.9882352941176471,0.7568627450980392,0.058823529411764705,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":100},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]},{\"ty\":\"gr\",\"nm\":\"Callus-01 shape group\",\"it\":[{\"ty\":\"sh\",\"ks\":{\"a\":0,\"k\":{\"c\":true,\"v\":[[219.137,324.656],[228.398,324.656],[493.15,324.656],[511,306.805],[511,306.805],[493.15,288.954],[485.727,288.954],[427.82899999999995,231.056],[369.9309999999999,173.15800000000002],[370.0559999999999,173.156],[322.29799999999994,173.156],[315.4839999999999,166.342],[315.4839999999999,166.342],[322.29799999999994,159.52800000000002],[352.61999999999995,159.52800000000002],[362.11799999999994,150.03000000000003],[362.11799999999994,150.03000000000003],[352.61999999999995,140.53100000000003],[314.55799999999994,140.53100000000003],[295.37499999999994,121.34700000000004],[276.18999999999994,102.16200000000003],[276.2319999999999,102.16200000000003],[228.39899999999992,102.16200000000003],[172.7969999999999,102.16200000000003],[153.2669999999999,121.69100000000003],[153.2669999999999,121.69100000000003],[172.7969999999999,141.22000000000003],[202.15499999999992,141.22000000000003],[202.1069999999999,141.22100000000003],[213.1349999999999,152.29600000000002],[213.1349999999999,152.29600000000002],[202.1069999999999,163.371],[202.15499999999992,163.371],[180.2599999999999,185.26600000000002],[158.3649999999999,207.16100000000003],[99.6179999999999,265.908],[99.6179999999999,265.908],[158.3649999999999,324.65500000000003],[219.137,324.65500000000003]],\"i\":[[0,0],[0,0],[0,0],[0,9.819000000000017],[0,0],[9.81800000000004,0],[0,0],[0,31.844000000000023],[31.84400000000005,0],[0,0],[0,0],[0,3.7479999999999905],[0,0],[-3.7480000000000473,0],[0,0],[0,5.2239999999999895],[0,0],[5.2239999999999895,0],[0,0],[0,10.550999999999988],[10.552000000000021,0],[0,0],[0,0],[0,0],[0,-10.741],[0,0],[-10.74199999999999,0],[0,0],[0,0],[0,-6.075999999999993],[0,0],[6.069999999999993,-0.025999999999982037],[0,0],[0,-12.042000000000002],[12.042000000000002,0],[0,-32.309999999999974],[0,0],[-32.31100000000001,0],[0,0]],\"o\":[[0,0],[0,0],[9.817999999999984,0],[0,0],[0,-9.819000000000017],[0,0],[-31.843999999999994,0],[0,-31.843999999999994],[0,0],[0,0],[-3.7479999999999905,0],[0,0],[0,-3.7479999999999905],[0,0],[5.2239999999999895,0],[0,0],[0,-5.2239999999999895],[0,0],[-10.550999999999988,0],[0,-10.551999999999992],[0,0],[0,0],[0,0],[-10.740999999999985,0],[0,0],[0,10.740999999999985],[0,0],[0,0],[6.070999999999998,0.02600000000001046],[0,0],[0,6.075999999999993],[0,0],[-12.042000000000002,0],[0,12.042000000000002],[-32.31100000000001,0],[0,0],[0,32.31099999999998],[0,0],[0,0]]}}},{\"ty\":\"st\",\"o\":{\"a\":0,\"k\":0},\"w\":{\"a\":0,\"k\":0},\"c\":{\"a\":0,\"k\":[0,0,0,0]},\"lc\":3,\"lj\":1,\"ml\":1},{\"ty\":\"fl\",\"o\":{\"a\":0,\"k\":100},\"r\":2,\"c\":{\"a\":0,\"k\":[0.1411764705882353,0.21176470588235294,0.43529411764705883,1]}},{\"ty\":\"tr\",\"o\":{\"a\":0,\"k\":10},\"a\":{\"a\":0,\"k\":[0,0]},\"s\":{\"a\":0,\"k\":[100,100]},\"p\":{\"a\":0,\"k\":[0,0]},\"r\":{\"a\":0,\"k\":0}}]}],\"op\":100}],\"op\":100,\"w\":550,\"h\":400}");

/***/ }),

/***/ "./public/lottie/main van.json":
/*!*************************************!*\
  !*** ./public/lottie/main van.json ***!
  \*************************************/
/*! exports provided: v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.20\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":29.9700012207031,\"ip\":0,\"op\":241.000009816131,\"w\":300,\"h\":200,\"nm\":\"Comp 1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Layer 3/Untitled-2 Outlines 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":161,\"s\":[344.25,40.375,0],\"to\":[-33.667,0,0],\"ti\":[33.667,0,0]},{\"t\":181.000007372281,\"s\":[142.25,40.375,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[43,23,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[3,3],[82.165,3]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.620000023935,0.620000023935,0.620000023935,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":181,\"s\":[100]},{\"t\":198.000008064705,\"s\":[0]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":150.000006109625,\"op\":209.000008512745,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Layer 3/Untitled-2 Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":115,\"s\":[344.25,40.375,0],\"to\":[-33.667,0,0],\"ti\":[33.667,0,0]},{\"t\":135.000005498663,\"s\":[142.25,40.375,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[43,-30,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[3,3],[82.165,3]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.620000023935,0.620000023935,0.620000023935,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":135,\"s\":[100]},{\"t\":152.000006191087,\"s\":[0]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":111.000004521123,\"op\":164.000006679857,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Layer 3/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":92,\"s\":[344.25,75.375,0],\"to\":[-22,0,0],\"ti\":[22,0,0]},{\"t\":110.000004480392,\"s\":[212.25,75.375,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[43,3,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[3,3],[82.165,3]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.620000023935,0.620000023935,0.620000023935,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":6,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":0,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":110,\"s\":[100]},{\"t\":127.000005172816,\"s\":[0]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":88.0000035843135,\"op\":136.000005539394,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Layer 6/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"t\":78,\"s\":[189,30,0],\"to\":[-7.167,0,0],\"ti\":[46.167,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":90,\"s\":[146,30,0],\"to\":[-46.167,0,0],\"ti\":[39,0,0]},{\"t\":111.000004521123,\"s\":[-88,30,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[28.5,6.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[129,129,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.115,0.019],[-1.707,0.798],[-0.241,-0.504],[-0.766,-0.613],[-2.686,1.802],[-0.793,2.443],[-0.711,-0.186],[-1.655,0.247],[-1.617,2.195],[2.792,2.841],[3.352,-0.05],[-0.242,1.549],[2.874,1.148],[3.201,-0.696],[0.352,0.599],[0.701,0.584],[2.715,-0.261],[1.586,-1.772],[0.248,-2.042],[0.515,-0.078],[1.586,-2.034],[-2.746,-2.886],[-3.337,-0.064],[0.031,-1.208],[-1.456,-1.411]],\"o\":[[1.861,-0.008],[0.521,-0.243],[0.437,0.913],[2.217,1.778],[2.153,-1.444],[0.241,-0.74],[1.586,0.415],[2.745,-0.41],[2.265,-3.078],[-2.431,-2.475],[-1.57,0.023],[0.611,-3.907],[-3.138,-1.253],[-0.667,0.146],[-0.452,-0.771],[-2.091,-1.741],[-2.37,0.229],[-1.373,1.535],[-0.063,0.514],[-2.516,0.382],[-2.55,3.272],[2.348,2.468],[1.205,0.023],[-0.05,2.024],[1.583,1.535]],\"v\":[[-6.79,15.867],[-2.39,14.9],[-1.292,15.238],[0.592,17.494],[8.669,18.211],[12.962,12.206],[14.235,11.508],[19.072,11.81],[25.656,7.929],[24.733,-1.831],[15.872,-5.017],[14.521,-6.54],[9.814,-14.519],[0.272,-14.859],[-1.068,-15.395],[-2.782,-17.468],[-9.984,-19.752],[-15.896,-16.687],[-18.359,-11.335],[-19.148,-10.58],[-25.37,-7.045],[-24.394,4.041],[-15.723,7.554],[-14.519,8.771],[-12.465,13.943]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9411764705882353,0.9294117647058824,0.9294117647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[28.171,20.263],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":121.000004928431,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Layer 9/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"t\":78,\"s\":[229,29,0],\"to\":[-9,0,0],\"ti\":[48,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":90,\"s\":[175,29,0],\"to\":[-48,0,0],\"ti\":[39,0,0]},{\"t\":111.000004521123,\"s\":[-59,29,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[43.5,14,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[129,129,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.573,0],[1.361,-0.229],[0.64,-0.282],[1.208,-1.522],[-0.451,-3.555],[-1.176,-1.111],[-1.688,-0.345],[-0.116,-0.587],[-2.115,-1.846],[-3.774,0.48],[-2.263,1.968],[-0.214,-0.526],[-0.821,-1.048],[-4.278,1.721],[-1.616,2.461],[-0.569,-0.476],[-3.455,0.557],[-1.915,3.772],[-0.608,-0.213],[-1.486,0.233],[0.109,5.265],[4.311,1.609],[3.217,-0.786],[-0.129,0.661],[0.495,1.312],[6.471,-3.084],[-0.113,0.477],[0.135,0.926],[5.014,-0.786],[1.192,-5.241],[0.936,0.404],[2.571,-1.132],[0.409,-3.86],[1.241,0.002]],\"o\":[[-1.155,-0.104],[-0.703,0.118],[-1.737,0.768],[-2.229,2.807],[0.207,1.626],[1.292,1.22],[0.566,0.115],[0.53,2.682],[3.024,2.639],[2.963,-0.376],[0.417,-0.364],[0.499,1.233],[3.014,3.849],[2.746,-1.104],[0.391,-0.596],[2.683,2.245],[4.189,-0.674],[0.298,-0.59],[1.472,0.518],[4.717,-0.741],[-0.099,-4.768],[-3.121,-1.164],[-0.637,0.155],[0.275,-1.394],[-2.357,-6.239],[-0.554,0.265],[0.221,-0.929],[-0.824,-5.589],[-5.289,0.829],[-0.224,0.986],[-2.619,-1.131],[-3.466,1.524],[-0.13,1.226],[-0.338,0]],\"v\":[[-29.38,-7.611],[-33.257,-7.259],[-35.241,-6.56],[-39.811,-3.334],[-42.482,6.211],[-40.372,10.336],[-35.724,12.388],[-34.834,13.256],[-31.034,20.119],[-20.671,22.834],[-12.829,19.172],[-11.966,19.379],[-9.957,22.787],[2.124,25.888],[8.617,20.448],[9.865,20.296],[19.133,23.038],[28.264,16.155],[29.42,15.63],[33.939,15.915],[42.824,5.45],[35.474,-4.753],[25.941,-5.2],[25.225,-5.839],[24.792,-9.898],[8.651,-16.409],[8.076,-16.817],[8.055,-19.578],[-2.042,-26.823],[-11.743,-17.427],[-12.904,-16.834],[-20.782,-16.907],[-26.744,-8.834],[-28.13,-7.611]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.74900004069,0.74900004069,0.74900004069,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[43.183,27.859],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":118.000004806239,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Layer 7/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":114,\"s\":[348,18,0],\"to\":[-69.833,0,0],\"ti\":[69.833,0,0]},{\"t\":151.000006150356,\"s\":[-71,18,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[37.5,8.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[129,129,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.285,-4.668],[-0.114,-0.545],[-3.779,-1.093],[-0.038,-0.43],[-2.894,-1.846],[-3.315,2.41],[-0.499,-0.515],[-4.254,1.417],[-1.111,0.889],[-0.414,-0.462],[-3.917,2.104],[-1.239,2.207],[-0.686,-0.218],[-2.11,1.072],[0.162,3.931],[4.539,0.745],[1.466,-0.328],[-0.141,0.62],[0.165,1.49],[3.998,1.127],[3.372,-1.443],[0.271,0.718],[2.935,0.741],[1.641,-0.189],[1.502,-1.369],[0.539,0.331],[1.948,-0.358],[0.302,-4.885],[1.23,-0.14]],\"o\":[[0.036,0.562],[0.792,3.791],[0.428,0.123],[0.304,3.396],[3.946,2.519],[0.582,-0.422],[3.315,3.42],[1.343,-0.448],[0.282,-0.226],[3.368,3.753],[2.24,-1.202],[0.319,-0.569],[2.246,0.715],[3.34,-1.698],[-0.199,-4.812],[-1.5,-0.246],[-0.692,0.155],[0.322,-1.421],[-0.539,-4.865],[-3.419,-0.963],[-0.757,0.323],[-1.045,-2.762],[-1.593,-0.402],[-2.021,0.232],[-0.505,0.461],[-1.725,-1.058],[-4.43,0.816],[-0.074,1.203],[-5.138,0.584]],\"v\":[[-36.488,0.785],[-36.37,2.467],[-29.631,9.928],[-29,10.678],[-24.183,18.462],[-11.947,18.078],[-10.546,18.164],[0.986,20.402],[4.651,18.346],[5.65,18.297],[18.284,19.919],[23.466,14.759],[24.821,14.229],[31.488,13.927],[36.611,5.615],[28.474,-2.974],[24.042,-2.803],[23.4,-3.539],[23.759,-7.865],[16.815,-16.085],[6.479,-15.598],[5.227,-16.168],[-0.61,-21.647],[-5.47,-21.797],[-10.806,-19.546],[-12.183,-19.456],[-17.796,-20.523],[-25.945,-11.116],[-27.218,-9.751]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.620000023935,0.620000023935,0.620000023935,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[37.023,22.299],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":105.000004276738,\"op\":158.000006435472,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"Layer 8/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":132,\"s\":[363,51,0],\"to\":[-72.5,0,0],\"ti\":[72.5,0,0]},{\"t\":174.000007087165,\"s\":[-72,51,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[44,11.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[129,129,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.14,0.067],[-0.677,0.163],[-1.866,3.089],[0.431,2.429],[2.571,1.235],[2.846,-0.435],[-0.147,0.724],[0.053,0.417],[2.969,0.5],[0.896,-0.022],[-0.088,0.809],[0.147,0.607],[3.868,0.114],[1.898,-0.833],[0.164,0.57],[0.324,0.75],[3.745,-1.972],[0.199,-3.451],[0.538,-0.066],[1.257,-3.462],[1.353,0.236],[0.195,-0.025],[1.263,-3.006],[0.992,0.03],[-0.312,-5.625],[-3.627,-1.791],[-3.735,2.248],[-0.541,-0.599],[-3.068,-0.096],[-2.268,2.37],[-1.657,-1.252],[-2.336,-0.064],[-1.975,1.396],[-0.307,-0.726],[-1.088,-0.995],[-3.267,1.607],[-1.081,1.968],[-0.711,-0.302]],\"o\":[[0.67,-0.053],[3.53,-0.851],[1.266,-2.098],[-0.526,-2.955],[-2.679,-1.288],[-0.578,0.089],[0.082,-0.402],[-0.397,-3.146],[-0.904,-0.152],[-0.742,0.019],[0.067,-0.618],[-0.881,-3.649],[-2.099,-0.062],[-0.562,0.247],[-0.224,-0.785],[-1.983,-4.594],[-3.1,1.631],[-0.031,0.526],[-3.643,0.447],[-0.412,1.138],[-0.179,-0.031],[-3.288,0.419],[-0.373,0.887],[-5.135,-0.152],[0.23,4.141],[3.981,1.966],[0.743,-0.448],[2.105,2.33],[3.266,0.102],[1.47,-1.535],[1.794,1.355],[2.436,0.067],[0.352,-0.249],[0.582,1.38],[2.562,2.344],[2.061,-1.014],[0.333,-0.606],[1.054,0.449]],\"v\":[[31.538,18.778],[33.558,18.676],[41.601,12.711],[43.048,5.919],[37.945,-0.064],[29.586,-0.835],[28.866,-1.461],[28.83,-2.721],[22.281,-9.075],[19.587,-9.201],[18.558,-10.195],[18.395,-12.038],[11.257,-18.026],[5.286,-16.733],[4.31,-17.176],[3.394,-19.442],[-8.718,-23.056],[-13.489,-15.223],[-14.224,-14.45],[-21.723,-8.637],[-23.853,-6.964],[-24.428,-6.853],[-31.233,-1.619],[-33.016,-0.385],[-43.167,9.685],[-37.34,18.602],[-25.666,17.812],[-24.004,18.023],[-16.108,21.475],[-7.814,18.002],[-4.711,17.813],[1.409,20.152],[7.991,18.162],[9.034,18.276],[11.705,21.724],[22.212,23.421],[26.824,18.882],[28.221,18.299]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9411764705882353,0.9294117647058824,0.9294117647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[43.729,25.278],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":129.000005254278,\"op\":186.000007575935,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Layer 4/Untitled-2 Outlines 2\",\"parent\":10,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.175],\"y\":[0]},\"t\":77,\"s\":[0]},{\"t\":240.0000097754,\"s\":[1802]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[49.19,110.804,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-23.372,93.552,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[126.582,126.582,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-9.035,-4.252]],\"o\":[[0,0],[0,0]],\"v\":[[35.731,74.376],[51.144,74.376]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.9411764705882353,0.9294117647058824,0.9294117647058824,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-66.793,7.126],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":241.000009816131,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Layer 4/Untitled-2 Outlines\",\"parent\":10,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.175],\"y\":[0]},\"t\":77,\"s\":[0]},{\"t\":240.0000097754,\"s\":[1802]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[149.823,110.804,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[56.128,93.552,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[126.582,126.582,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-9.035,-4.252]],\"o\":[[0,0],[0,0]],\"v\":[[35.731,74.376],[51.144,74.376]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.9411764705882353,0.9294117647058824,0.9294117647058824,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.707,7.126],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":241.000009816131,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"Layer 11/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":78,\"s\":[176,151,0],\"to\":[-2.5,0,0],\"ti\":[4.167,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":86,\"s\":[161,151,0],\"to\":[-4.167,0,0],\"ti\":[1.667,0,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":109,\"s\":[151,151,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":204,\"s\":[151,151,0],\"to\":[38.667,0,0],\"ti\":[-38.667,0,0]},{\"t\":229.000009327361,\"s\":[383,151,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[96.5,72.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[79,79,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.628,0.08],[-0.149,7.233],[-8.263,0],[-0.141,-0.004],[0.158,-8.383],[8.137,-0.011]],\"o\":[[-0.655,0],[-6.948,-0.897],[-0.435,-6.663],[0.14,0],[6.832,0.207],[-0.157,8.284],[0,0]],\"v\":[[0.007,14.146],[-1.914,14.009],[-13.798,0.172],[0.129,-13.899],[0.55,-13.893],[13.977,0.277],[0.024,14.146]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.123,-11.479],[-10.07,-0.601],[-0.408,0],[-0.22,0.008],[-0.301,0],[-0.065,10.8],[11.606,0.081]],\"o\":[[-11.35,0],[0.122,11.353],[0.404,0.025],[0.219,0],[0.304,0.014],[10.955,0],[0.073,-11.81],[0,0]],\"v\":[[-0.14,-20.814],[-20.814,0.202],[-1.914,20.766],[-0.694,20.804],[-0.037,20.792],[0.872,20.814],[20.864,0.37],[-0.001,-20.814]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.606,0],[0,0],[-0.162,8.578],[6.82,0.207],[0.145,0],[2.82,-3.011],[-0.221,-3.362],[-7.29,-0.94]],\"o\":[[0,0],[8.482,-0.012],[0.166,-8.801],[-0.146,-0.004],[-3.992,0],[-2.64,2.817],[-0.152,7.369],[0.748,0.097]],\"v\":[[0.007,14.646],[0.024,14.646],[14.477,0.286],[0.565,-14.393],[0.129,-14.399],[-10.436,-9.73],[-14.298,0.163],[-1.978,14.504]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.348,0],[0,0],[0.071,-11.517],[10.5,0],[0.339,0.015],[0.212,0],[0.422,0.025],[0.114,10.643],[-3.874,3.915]],\"o\":[[0,0],[11.491,0.08],[-0.065,10.812],[-0.293,0],[-0.214,0.008],[-0.379,0],[-10.22,-0.61],[-0.058,-5.424],[3.845,-3.887]],\"v\":[[-0.14,-20.314],[-0.004,-20.314],[20.364,0.367],[0.872,20.314],[-0.056,20.292],[-0.694,20.304],[-1.884,20.267],[-20.314,0.197],[-14.397,-14.286]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[149.639,110.714],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.143,0],[2.774,-2.96],[-0.218,-3.336],[-7.161,-0.925],[-0.593,0],[-0.16,8.43],[6.7,0.203]],\"o\":[[-3.922,0],[-2.593,2.767],[-0.15,7.218],[0.739,0.095],[8.352,-0.011],[0.163,-8.65],[-0.144,-0.004]],\"v\":[[0.098,-14.15],[-10.286,-9.559],[-14.079,0.19],[-1.977,14.258],[-0.024,14.396],[14.196,0.283],[0.527,-14.143]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[10.634,0],[0.3,0.015],[0.216,0],[0.399,0.024],[0.116,10.775],[-3.921,3.962],[-5.414,0],[0,0],[0.072,-11.657]],\"o\":[[-0.298,0],[-0.239,0.009],[-0.403,0],[-10.351,-0.618],[-0.059,-5.492],[3.893,-3.935],[0,0],[11.633,0.081],[-0.066,10.947]],\"v\":[[0.842,20.564],[-0.057,20.542],[-0.727,20.555],[-1.93,20.517],[-20.596,0.2],[-14.606,-14.462],[-0.174,-20.564],[-0.035,-20.563],[20.583,0.369]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.3215686274509804,0.050980392156862744,0.3411764705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[149.671,110.714],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.712,0],[0,0],[0.054,8.636],[-7.657,0.088],[-0.045,0],[0.414,-8.203],[6.027,-1.04]],\"o\":[[0,0],[-7.462,-0.024],[-0.048,-7.76],[0.045,0],[6.9,0],[0.371,7.406],[-0.713,0.123]],\"v\":[[0.383,14.051],[0.35,14.051],[-13.796,0.005],[0.199,-14.052],[0.337,-14.053],[13.885,0.098],[2.525,13.853]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.058,0],[-0.444,-10.068],[-12.678,0],[0,0],[-0.77,0.086],[-0.068,10.253],[11.964,0.097]],\"o\":[[-12.474,0],[-0.434,10.164],[0,0],[0.799,-0.001],[10.698,-1.187],[0.075,-11.147],[-0.058,-0.001]],\"v\":[[0.036,-20.821],[-20.663,-0.015],[0.148,20.821],[0.173,20.821],[2.525,20.682],[21.033,0.15],[0.212,-20.82]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.804,0.139],[0.381,7.868],[2.631,2.766],[3.722,0],[0,0],[0,0],[-0.05,-7.935],[-8.297,-0.027]],\"o\":[[0,0],[0.695,0],[5.997,-1.035],[0.183,-3.758],[-2.7,-2.839],[0,0],[0,0],[-8.04,0.093],[0.051,8.265],[0,0]],\"v\":[[0.382,14.551],[0.383,14.551],[2.609,14.346],[14.387,0.098],[10.592,-10.018],[0.337,-14.553],[0.337,-14.553],[0.195,-14.552],[-14.296,0.008],[0.348,14.551]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[-5.572,0],[0,0],[0.075,-11.195],[10.229,-1.134],[0.759,-0.001],[3.858,4.027],[-0.216,5.081],[-3.757,3.926]],\"o\":[[0,0],[11.281,0.091],[-0.068,10.289],[-0.811,0.09],[-5.664,0],[-3.739,-3.903],[-0.22,-4.984],[3.864,-4.037]],\"v\":[[0.036,-20.321],[0.208,-20.32],[20.533,0.146],[2.469,20.185],[0.148,20.321],[-14.618,14.075],[-20.163,-0.038],[-14.596,-14.06]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.201,111.036],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":5,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.048,-7.799],[-8.155,-0.027],[0,0],[-0.791,0.137],[0.388,7.738],[2.589,2.723],[3.654,0]],\"o\":[[-7.901,0.091],[0.051,8.123],[0,0],[0.71,0],[5.898,-1.017],[0.187,-3.672],[-2.653,-2.791],[0,0]],\"v\":[[0.086,-14.301],[-14.156,0.008],[0.238,14.303],[0.239,14.303],[2.456,14.099],[14.024,0.087],[10.299,-9.844],[0.226,-14.301]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.906,4.077],[-0.219,5.105],[-3.805,3.977],[-5.642,0],[0,0],[0.075,-11.331],[10.355,-1.149],[0.745,-0.001]],\"o\":[[-5.733,0],[-3.787,-3.951],[-0.223,-5.074],[3.911,-4.087],[0,0],[11.42,0.092],[-0.069,10.416],[-0.819,0.091],[0,0]],\"v\":[[0.038,20.57],[-14.91,14.247],[-20.524,-0.003],[-14.888,-14.232],[-0.075,-20.57],[0.099,-20.57],[20.672,0.149],[2.386,20.434],[0.063,20.57]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.3215686274509804,0.050980392156862744,0.3411764705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[48.312,111.036],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[20.083,8.98],[20.083,-7.195],[20.083,-12.513],[32.02,-12.561],[34.816,-12.574],[50.781,3.71],[44.107,8.859]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[11.125,0],[17.289,0.009],[1.288,0.25],[0.184,2.141],[0,0.532],[-0.008,14.959],[-5.106,0.003],[-6.236,0],[-8.104,0],[0,0],[-8.115,0],[-6.224,-0.003],[-0.004,-5.173],[0.004,-11.25],[0.002,-3.357],[0.124,-0.78],[2.585,-0.351],[0.582,0],[0.216,0],[0,0]],\"o\":[[-17.289,0],[-1.321,-0.001],[-2.126,-0.413],[-0.045,-0.527],[-0.001,-14.959],[0.003,-4.986],[6.236,-0.004],[8.104,0],[0,0],[8.115,0],[6.225,0],[5.147,0.003],[0.007,11.249],[0,3.356],[0,0.796],[-0.407,2.578],[-0.572,0.078],[-0.216,0],[0,0],[-11.125,0.002]],\"v\":[[-28.618,9.605],[-80.484,9.594],[-84.439,9.322],[-87.973,5.262],[-87.997,3.669],[-87.995,-41.208],[-81.26,-47.785],[-62.551,-47.789],[-38.241,-47.787],[-38.241,-47.781],[-13.896,-47.783],[4.778,-47.778],[11.587,-40.944],[11.585,-7.195],[11.585,2.873],[11.502,5.257],[7.143,9.516],[5.408,9.604],[4.761,9.602],[4.758,9.602]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[11.924,0],[11.634,-0.01],[4.515,-0.109],[0.22,-5.799],[0,-1.239],[-0.065,-0.839],[-4.053,0],[-0.006,0],[0,0],[-2.315,-0.015],[-0.964,0],[-1.549,0],[-4.557,4.608],[-6.394,0.356],[-0.437,0],[-3.984,-2.582],[-0.832,-8.421],[0,0],[-4.002,4.556],[-6.091,0.779],[-1.135,0],[-4.127,-2.694],[-0.877,-8.733],[-1.623,0],[-3.252,1.957],[3.063,3.688],[0.201,1.482],[0.283,6.17],[5.14,1.083],[3.97,4.198],[6.767,6.988],[3.313,0.163],[1.727,0.043],[2.599,0.009],[0.025,3.219],[0.137,4.868],[6.148,0.172],[3.984,0.003]],\"o\":[[-11.634,0],[-4.516,0.003],[-4.308,0.105],[-0.047,1.239],[-0.006,27.722],[0.286,3.694],[0.006,0],[0,0],[2.314,0],[0.958,0.007],[1.504,0],[0.817,-6.678],[4.57,-4.62],[0.442,-0.025],[4.653,0],[7.352,4.764],[0,0],[0.257,-6.258],[4.07,-4.635],[1.161,-0.148],[4.692,0],[7.552,4.932],[1.707,0.228],[3.778,0],[1.814,-4.799],[-0.969,-1.168],[-0.835,-6.131],[-0.282,-6.168],[-5.856,-1.234],[-6.684,-7.068],[-2.301,-2.377],[-1.723,-0.085],[-2.598,-0.067],[-3.233,-0.01],[-0.038,-4.871],[-0.175,-6.215],[-3.983,-0.11],[-11.925,-0.008]],\"v\":[[-38.188,-55.602],[-73.089,-55.589],[-86.637,-55.395],[-95.848,-46.697],[-95.934,-42.98],[-95.699,48.264],[-87.87,55.128],[-87.852,55.126],[-87.624,55.126],[-80.68,55.214],[-77.799,55.223],[-73.229,55.218],[-65.835,38.21],[-49.288,30.79],[-47.969,30.753],[-34.951,34.717],[-23.307,54.965],[28.718,54.965],[34.919,38.779],[50.169,30.471],[53.613,30.247],[66.889,34.223],[78.563,55.24],[83.561,55.602],[94.126,52.919],[92.149,40.465],[90.169,36.238],[88.176,17.785],[79.628,7.227],[65.454,-1.467],[45.186,-22.462],[36.781,-26.492],[31.605,-26.666],[23.808,-26.783],[19.429,-30.99],[19.329,-45.602],[9.54,-55.414],[-2.413,-55.589]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[19.583,9.482],[20.085,9.48],[44.11,9.359],[44.279,9.359],[44.413,9.255],[51.085,4.105],[51.531,3.762],[51.137,3.36],[35.174,-12.923],[35.025,-13.074],[34.814,-13.074],[32.018,-13.061],[20.08,-13.013],[19.583,-13.011],[19.583,-12.513],[19.583,-7.195],[19.583,8.98]],\"c\":true},\"ix\":2},\"nm\":\"Path 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[-17.289,0],[0,0],[0,0],[0,0],[-0.629,0.086],[-0.443,2.807],[0.006,0.653],[0,0],[0,0],[0,0],[0,0],[0.006,10.128],[5.392,0.003],[6.225,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[6.236,-0.004],[0.003,-5.287],[-0.002,-11.399],[0,0],[0,0],[-0.036,-0.423],[-2.293,-0.446],[-1.321,-0.001]],\"o\":[[0,0],[0,0],[0,0],[0.542,0],[2.822,-0.385],[0.106,-0.666],[0,0],[0,0],[0,0],[0,0],[0.003,-10.127],[-0.004,-5.411],[-6.224,-0.003],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-6.236,0],[-5.407,0.003],[-0.006,11.398],[0,0],[0,0],[-0.004,0.407],[0.208,2.419],[1.33,0.258],[17.289,0.009]],\"v\":[[-28.618,10.105],[4.761,10.102],[5.083,10.104],[5.408,10.104],[7.21,10.012],[11.996,5.335],[12.089,3.342],[12.085,2.873],[12.087,-2.229],[12.085,-7.195],[12.087,-10.563],[12.087,-40.945],[4.778,-48.278],[-13.896,-48.283],[-26.068,-48.283],[-37.741,-48.281],[-37.741,-48.287],[-38.241,-48.287],[-50.396,-48.288],[-62.551,-48.289],[-81.26,-48.285],[-88.495,-41.209],[-88.499,-7.015],[-88.497,3.669],[-88.499,4.055],[-88.471,5.305],[-84.535,9.813],[-80.484,10.094]],\"c\":true},\"ix\":2},\"nm\":\"Path 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[-11.634,0],[-11.924,-0.008],[-4.102,-0.114],[-0.167,-5.936],[0,-3.123],[-0.013,-1.693],[-3.576,-0.011],[-2.692,-0.068],[-1.699,-0.083],[-2.349,-2.425],[-1.859,-1.913],[-4.849,-5.127],[-5.247,-1.106],[-0.261,-5.689],[-0.776,-5.691],[0,0],[-1.11,-1.336],[1.639,-4.464],[3.946,0],[1.645,0.207],[6.927,4.523],[4.867,0],[1.182,-0.15],[4.259,-4.848],[0.349,-6.345],[0,0],[6.855,4.442],[4.676,0],[0.449,-0.026],[4.603,-4.654],[0.96,-7.311],[0,0],[0,0],[0.957,0.007],[1.017,0.018],[1.3,0],[0,0],[0.268,3.468],[-0.006,27.382],[-0.052,1.372],[-4.055,0.098],[-3.931,0.003]],\"o\":[[11.924,0],[3.821,0.002],[5.919,0.166],[0.089,3.171],[-0.001,1.693],[0.026,3.461],[2.474,0.008],[1.752,0.044],[3.007,0.149],[1.856,1.916],[4.838,4.976],[4.735,5.007],[5.224,1.101],[0.266,5.824],[0,0],[0.2,1.469],[2.97,3.578],[-2.888,1.698],[-1.407,0],[-1.049,-9.598],[-4.123,-2.692],[-1.146,0],[-6.067,0.776],[-3.888,4.427],[0,0],[-0.992,-8.942],[-4.142,-2.683],[-0.446,0],[-6.594,0.367],[-4.137,4.183],[0,0],[0,0],[-0.963,0],[-1.017,-0.006],[-1.276,-0.022],[0,0],[-3.705,0],[-0.067,-1.115],[0,-1.172],[0.208,-5.505],[5.304,-0.129],[11.634,-0.01]],\"v\":[[-38.188,-55.102],[-2.413,-55.089],[9.527,-54.914],[18.829,-45.587],[18.917,-36.064],[18.929,-30.985],[23.807,-26.283],[31.594,-26.167],[36.757,-25.993],[44.827,-22.115],[50.402,-16.373],[65.091,-1.123],[79.525,7.716],[87.678,17.807],[89.523,35.206],[89.674,36.305],[91.765,40.785],[93.721,52.578],[83.561,55.102],[79.02,54.794],[67.162,33.805],[53.613,29.747],[50.104,29.975],[34.542,38.449],[28.242,54.465],[-22.857,54.465],[-34.678,34.298],[-47.969,30.253],[-49.316,30.292],[-66.191,37.859],[-73.669,54.718],[-75.549,54.721],[-77.799,54.723],[-80.676,54.714],[-83.727,54.673],[-87.624,54.626],[-87.87,54.628],[-95.201,48.229],[-95.434,-42.98],[-95.348,-46.678],[-86.624,-54.895],[-73.089,-55.089]],\"c\":true},\"ix\":2},\"nm\":\"Path 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[96.191,55.852],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":7,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[19.86,-12.762],[19.86,9.232],[44.221,9.11],[51.184,3.737],[34.949,-12.823]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[6.145,-0.004],[0.003,-5.1],[-0.002,-11.319],[0,0],[-0.035,-0.407],[-2.176,-0.423],[-1.309,-0.001],[-17.057,0],[0,0],[-0.551,0.076],[-0.424,2.681],[0.007,0.642],[0,0],[0.007,11.225],[5.273,0.003],[0,0],[0,0],[0,0]],\"o\":[[-5.22,0.002],[-0.006,11.317],[0,0],[-0.004,0.411],[0.198,2.3],[1.308,0.254],[17.056,0.009],[0,0],[0.657,0],[2.695,-0.367],[0.103,-0.646],[0,0],[0.004,-11.299],[-0.004,-5.294],[-6.373,-0.004],[0,0],[0,0],[-6.145,0]],\"v\":[[-81.232,-48.033],[-88.218,-41.208],[-88.221,-7.254],[-88.222,4.055],[-88.195,5.284],[-84.46,9.567],[-80.456,9.844],[-29.29,9.856],[5.447,9.855],[7.205,9.764],[11.777,5.297],[11.866,3.346],[11.863,-7.195],[11.864,-40.944],[4.806,-48.028],[-37.964,-48.031],[-38.213,-48.036],[-62.795,-48.038]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.027,0],[1.734,0.225],[6.908,4.51],[4.818,0],[1.171,-0.149],[4.216,-4.801],[0.307,-6.394],[0,0],[6.845,4.435],[4.626,0],[0.447,-0.025],[4.558,-4.609],[0.933,-7.366],[0,0],[0.969,0.006],[1.024,0.018],[1.295,0],[0,0],[0.279,3.595],[-0.006,26.722],[-0.052,1.374],[-4.168,0.101],[-3.953,0.003],[-11.612,0],[-11.946,-0.008],[-4.106,-0.115],[-0.171,-6.091],[0.001,-3.12],[-0.014,-1.697],[-3.434,-0.011],[-2.658,-0.069],[-1.722,-0.085],[-2.394,-2.472],[-1.869,-1.923],[-4.839,-5.118],[-5.193,-1.095],[-0.263,-5.74],[-0.776,-5.691],[0,0],[-1.082,-1.303],[1.712,-4.593]],\"o\":[[-1.473,0],[-1.009,-9.621],[-4.082,-2.666],[-1.136,0],[-6.007,0.768],[-3.898,4.438],[0,0],[-0.94,-8.974],[-4.101,-2.658],[-0.442,0],[-6.531,0.364],[-4.136,4.182],[0,0],[-0.975,0],[-1.024,-0.007],[-1.294,-0.023],[0,0],[-3.847,0],[-0.065,-0.866],[0,-1.176],[0.214,-5.667],[5.413,-0.131],[11.612,-0.009],[11.946,0],[3.82,0.003],[6.073,0.17],[0.089,3.169],[0,1.697],[0.026,3.32],[2.512,0.009],[1.725,0.043],[3.073,0.151],[1.865,1.926],[4.828,4.967],[4.699,4.969],[5.278,1.112],[0.267,5.818],[0,0],[0.193,1.423],[3.053,3.674],[-2.944,1.752]],\"v\":[[83.589,55.352],[78.82,55.018],[67.053,34.015],[53.641,29.998],[50.165,30.223],[34.758,38.615],[28.506,54.717],[-23.054,54.717],[-34.787,34.509],[-47.94,30.504],[-49.275,30.541],[-65.986,38.035],[-73.422,54.969],[-77.737,54.974],[-80.651,54.966],[-83.723,54.923],[-87.606,54.878],[-87.826,54.878],[-95.423,48.246],[-95.657,-42.98],[-95.57,-46.687],[-86.603,-55.145],[-73.062,-55.338],[-38.228,-55.352],[-2.385,-55.339],[9.561,-55.163],[19.107,-45.594],[19.194,-36.079],[19.207,-30.987],[23.835,-26.532],[31.627,-26.416],[36.797,-26.241],[45.035,-22.288],[50.639,-16.516],[65.3,-1.295],[79.604,7.473],[87.954,17.798],[89.801,35.192],[89.949,36.273],[91.985,40.627],[93.951,52.749]],\"c\":true},\"ix\":2},\"nm\":\"Path 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[96.163,55.852],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":241.000009816131,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"Layer 10/Untitled-2 Outlines\",\"parent\":12,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":14,\"s\":[37]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":20,\"s\":[-0.286]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":28,\"s\":[-1]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":39,\"s\":[-1]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":50,\"s\":[40]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":60,\"s\":[-1]},{\"t\":76.0000030955435,\"s\":[-1]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[-44.1,-71.42,0],\"to\":[8.371,6.308,0],\"ti\":[-11.807,-6.315,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":14,\"s\":[6.124,-33.574,0],\"to\":[3.415,1.827,0],\"ti\":[-2.448,-0.177,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20,\"s\":[17.345,-34.091,0],\"to\":[6.015,0.434,0],\"ti\":[-2.442,-0.006,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28,\"s\":[26.742,-33.527,0],\"to\":[3.436,0.008,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":39,\"s\":[26.742,-33.527,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[46.132,-36.988,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":60,\"s\":[26.742,-33.527,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":76.0000030955435,\"s\":[26.742,-33.527,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[58.016,17.452,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[63.918,63.918,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.881,-1.933],[1.808,0.776],[-0.739,1.79],[-1.866,-0.809]],\"o\":[[-0.769,1.686],[-1.937,-0.832],[0.765,-1.851],[2.054,0.888]],\"v\":[[3.391,1.691],[-1.348,3.363],[-3.533,-1.413],[1.303,-3.33]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.605459451675,0.605459451675,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[69.96,60.168],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.9,-1.729],[1.766,0.988],[-0.907,1.729],[-1.833,-0.941]],\"o\":[[-0.917,1.761],[-1.863,-1.043],[0.909,-1.734],[1.799,0.924]],\"v\":[[3.386,1.751],[-1.659,3.202],[-3.378,-1.785],[1.692,-3.25]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[34.787,61.088],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.04,-0.67],[0.348,-0.207],[0,0],[0,0],[0.328,0.143],[0.11,0.138],[-0.107,0.659],[-0.657,0.02],[-1.941,0.009],[-0.117,-0.814],[-0.047,-0.523],[0,0],[0.112,0.785],[1.346,-0.005],[2.965,-0.093],[0.193,-1.188],[-1.473,-1.847],[-0.454,-0.197],[0,0],[0,0],[-0.141,0.083],[0.039,0.673],[0.092,1.03]],\"o\":[[0.06,0.668],[0.026,0.439],[-0.092,0.055],[0,0],[0,0],[-0.296,-0.13],[-0.964,-1.208],[0.126,-0.776],[1.94,-0.061],[0.88,-0.004],[0.074,0.519],[0,0],[-0.072,-0.791],[-0.177,-1.243],[-2.966,0.013],[-1.004,0.031],[-0.163,1.006],[0.167,0.21],[0.501,0.219],[0,0],[0,0],[0.532,-0.318],[-0.061,-1.032],[0,0]],\"v\":[[4.506,-0.411],[4.653,1.597],[4.175,2.663],[3.859,2.78],[-0.858,3.004],[-1.701,2.87],[-2.213,2.328],[-4.377,-2.199],[-3.005,-3.236],[2.817,-3.329],[4.333,-1.976],[4.506,-0.411],[6.735,-0.411],[6.473,-2.777],[4.156,-4.844],[-4.742,-4.702],[-6.839,-3.117],[-3.531,3.802],[-2.748,4.63],[-1.461,4.834],[5.749,4.492],[6.232,4.315],[6.963,2.684],[6.735,-0.411]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[35.624,37.493],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.904,-0.043],[2.708,-0.083],[-0.103,-1.459],[0,0],[0,0],[0,0],[-0.971,0.029],[-1.834,0.042],[0.391,-1.325],[0.274,-0.845],[0.543,-0.035],[1.889,-0.051],[0,0],[0,0],[0,0],[0,0],[-1.195,0],[-2.781,0.181],[-0.538,1.239],[-0.519,1.76]],\"o\":[[-2.708,0.062],[-1.433,0.043],[0,0],[0,0],[0,0],[-0.07,-0.988],[1.835,-0.057],[1.291,-0.03],[-0.351,1.193],[-0.365,0.84],[-1.884,0.124],[-0.81,0],[0,0],[0,0],[0,0],[0,0],[2.788,-0.075],[0.801,-0.053],[0.404,-1.247],[0.576,-1.956]],\"v\":[[3.999,-4.919],[-4.124,-4.626],[-6.559,-2.482],[-6.688,0.467],[-4.84,0.467],[-4.743,-1.758],[-3.094,-3.211],[2.41,-3.409],[3.932,-1.514],[2.898,1.7],[1.646,3.089],[-4.018,3.286],[-4.92,2.305],[-4.84,0.467],[-6.688,0.467],[-6.82,3.514],[-5.489,4.962],[2.872,4.672],[4.719,2.62],[6.245,-2.12]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[68.307,36.614],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.481,0.071],[-1.201,0.018],[0.115,-1.288],[0.004,-0.421],[0,0],[-0.07,0.787],[1.902,-0.028],[1.919,-0.04],[-0.488,-4.633],[0,0]],\"o\":[[1.201,-0.025],[1.189,-0.019],[-0.047,0.525],[0,0],[0.007,-0.642],[0.185,-2.06],[-1.92,0.029],[-5.518,0.113],[0,0],[-0.319,-2.973]],\"v\":[[-0.844,-0.602],[2.758,-0.682],[4.524,1.087],[4.462,2.499],[7.106,2.499],[7.204,0.361],[4.38,-2.471],[-1.378,-2.34],[-6.901,2.499],[-4.291,2.499]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.79,34.583],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[4.289,0.187],[1.115,0.338],[0.095,0.823],[0.024,0.226],[0,0],[-0.053,-0.463],[-1.421,-0.829],[-1.898,-0.083],[-0.046,3.84]],\"o\":[[-0.022,2.341],[-1.187,-0.052],[-0.888,-0.519],[-0.03,-0.261],[0,0],[0.042,0.395],[0.152,1.316],[1.781,0.542],[6.933,0.301],[0,0]],\"v\":[[4.168,-2.635],[0.072,0.324],[-3.431,0.249],[-4.505,-1.911],[-4.586,-2.635],[-7.196,-2.635],[-7.055,-1.361],[-5.337,2.094],[0.262,2.214],[6.812,-2.635]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[52.085,39.717],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.845,-0.047],[2.789,-0.091],[0.152,-4.295],[0.009,-0.227],[0,0],[-0.007,0.194],[-2.949,0.096],[-1.964,0.032],[0.446,-1.886],[0.333,-1.244],[1.213,-0.042],[2.087,-0.038],[-0.077,1.156],[-0.031,0.725],[0,0],[0.071,-1.078],[-1.645,0.03],[-2.962,0.104],[-0.679,1.459],[-0.42,1.779]],\"o\":[[-2.79,0.045],[-4.189,0.136],[-0.008,0.228],[0,0],[0.009,-0.195],[0.106,-3.025],[1.964,-0.064],[2.003,-0.033],[-0.295,1.253],[-0.479,1.028],[-2.086,0.072],[-1.158,0.022],[0.047,-0.725],[0,0],[-0.045,1.08],[-0.108,1.641],[2.964,-0.054],[1.722,-0.059],[0.474,-1.767],[0.633,-2.679]],\"v\":[[4.995,-5.674],[-3.373,-5.411],[-8.008,-0.673],[-8.043,0.008],[-5.898,0.008],[-5.867,-0.576],[-2.604,-3.913],[3.288,-4.098],[5.184,-1.837],[4.191,1.896],[1.859,3.758],[-4.402,3.906],[-6.01,2.184],[-5.898,0.008],[-8.043,0.008],[-8.211,3.245],[-5.926,5.691],[2.964,5.48],[6.275,2.839],[7.686,-2.464]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[70.167,24.074],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.238,-0.888],[0.771,-0.033],[2.079,-0.064],[0.197,1.675],[0.061,0.576],[0,0],[-0.129,-1.088],[-2.317,0.073],[-2.963,0.129],[-0.603,1.368],[-0.045,1.437]],\"o\":[[-0.031,1.026],[-0.423,0.96],[-2.078,0.091],[-1.626,0.051],[-0.093,-0.788],[0,0],[0.086,0.804],[0.282,2.388],[2.964,-0.092],[1.099,-0.048],[0.335,-1.244],[0,0]],\"v\":[[5.563,-3.135],[5.247,-0.223],[3.385,1.042],[-2.852,1.263],[-5.443,-1.106],[-5.678,-3.135],[-8.005,-3.135],[-7.678,-0.316],[-3.984,3.062],[4.906,2.746],[7.557,0.943],[8.005,-3.135]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.567,27.216],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-4.721,0.065],[-1.466,0.074],[0.075,-1.455],[0.015,-0.48],[0,0],[-0.037,0.717],[2.171,-0.111],[2.092,-0.029],[-0.569,-5.32],[0,0]],\"o\":[[1.468,-0.021],[1.522,-0.078],[-0.026,0.486],[0,0],[0.022,-0.709],[0.107,-2.075],[-2.089,0.106],[-6.762,0.094],[0,0],[-0.389,-3.676]],\"v\":[[-0.635,-0.79],[3.769,-0.899],[5.807,1.209],[5.755,2.66],[8.198,2.66],[8.275,0.519],[5.368,-2.486],[-0.908,-2.33],[-7.814,2.66],[-5.486,2.66]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.375,21.421],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.149,1.185],[0,0],[-0.065,-0.837],[1.074,-0.052],[2.344,-0.058],[0.129,0.028],[0.316,0.702],[0.474,1.235],[-1.083,0.055],[-2.945,0.104],[-0.12,-0.789],[-0.084,-0.657],[0,0],[0.151,0.999],[1.292,-0.046],[4.319,-0.216],[-0.581,-1.518],[-0.796,-1.771],[-1.307,-0.611],[-0.34,0.009],[-3.435,0.165],[0.105,1.355]],\"o\":[[0,0],[0.106,0.834],[0.071,0.924],[-2.341,0.112],[-0.232,0.005],[-0.89,-0.417],[-0.542,-1.206],[-0.396,-1.034],[2.942,-0.147],[0.88,-0.031],[0.099,0.655],[0,0],[-0.126,-1.004],[-0.176,-1.157],[-4.321,0.152],[-1.588,0.08],[0.695,1.811],[0.463,1.03],[0.189,0.042],[3.439,-0.083],[1.576,-0.076],[-0.092,-1.188]],\"v\":[[8.644,-0.771],[5.99,-0.771],[6.253,1.734],[4.896,3.514],[-2.133,3.729],[-2.729,3.604],[-4.168,1.701],[-5.709,-1.958],[-4.587,-3.688],[4.247,-4.035],[5.717,-2.738],[5.99,-0.771],[8.644,-0.771],[8.227,-3.775],[6.068,-5.676],[-6.894,-5.167],[-8.538,-2.628],[-6.278,2.738],[-4.166,5.531],[-3.292,5.714],[7.023,5.4],[9.014,2.788]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[32.02,24.852],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.93,0.225],[-0.354,0.009],[-10.529,0.274],[-0.937,3.249],[-2.324,8.346],[4.447,-0.014],[4.777,-0.139],[13.356,-0.517],[0.689,2.684],[1.235,1.747],[3.145,-0.292],[2.499,-2.631],[-0.994,-1.595],[-1.685,0.392],[-0.789,0.391],[-1.273,-3.128],[-4.526,-11.217],[0,0],[4.045,9.996],[1.031,2.153],[2.595,-1.165],[0.163,-0.07],[1.154,2.174],[-1.385,0.94],[-2.388,-4.964],[-0.51,-1.781],[-2.19,0.073],[-8.23,0.217],[-10.265,0.227],[1.031,-3.876],[2.155,-7.838],[2.351,-0.042],[10.97,-0.272],[0.255,-0.06],[0.267,-2.394],[-2.283,0.001],[-4.689,0.102],[-5.665,0.002],[-0.874,-3.406],[3.153,-2.034],[0.974,5.534],[5.016,-0.182],[3.629,0.002],[-0.324,-2.769],[4.067,-0.635],[1.073,3.983],[-1.181,2.501],[-0.656,0.505],[1.046,2.516],[0.409,0.994],[0,0],[-0.54,-1.338],[1.008,-1.021],[-2.532,-4.665],[-5.462,0.319],[-0.634,0.87],[-0.078,1.684],[-1.903,-0.002],[-3.092,0.19],[-0.257,-1.847],[-0.609,-1.232],[-3.701,-1.052],[-1.363,0.159],[-0.158,0.21],[-0.298,0.414],[2.704,2.879],[3.979,-0.173],[9.203,-0.21],[0.038,1.189]],\"o\":[[0.334,-0.08],[10.529,-0.255],[3.402,-0.089],[2.401,-8.324],[1.192,-4.278],[-4.779,0.014],[-13.361,0.385],[-2.799,0.109],[-0.528,-2.058],[-1.743,-2.468],[-3.704,0.343],[-1.286,1.353],[0.953,1.528],[0.847,-0.198],[2.962,-1.462],[4.562,11.204],[0,0],[-4.11,-9.968],[-0.896,-2.215],[-1.22,-2.549],[-0.162,0.072],[-1.528,0.653],[-1.074,-2.022],[4.536,-3.081],[0.803,1.669],[0.611,2.141],[8.228,-0.273],[10.265,-0.269],[3.999,-0.089],[-2.091,7.856],[-0.647,2.351],[-10.972,0.195],[-0.265,0.007],[-1.407,0.332],[-0.247,2.222],[4.689,-0.001],[5.665,-0.123],[3.917,-0.002],[0.877,3.418],[-4.495,2.9],[-0.867,-4.929],[-3.627,0.131],[-2.415,-0.002],[0.514,4.377],[-4.435,0.692],[-0.496,-1.839],[0.194,-0.311],[2.559,-1.974],[-0.412,-0.992],[0,0],[0.54,1.338],[0.488,1.209],[-3.976,4.026],[0.326,0.601],[5.463,-0.32],[1.02,-1.399],[0.099,-2.122],[3.097,0.006],[1.699,-0.104],[0.196,1.404],[0.545,1.103],[1.206,0.28],[3.796,-0.533],[0.582,-0.776],[2.001,-4.296],[-2.725,-2.902],[-9.195,0.401],[-0.95,0.021],[-0.048,-1.515]],\"v\":[[-3.415,12.945],[-2.357,12.934],[29.231,12.16],[34.781,7.949],[41.855,-17.06],[36.925,-23.548],[22.589,-23.285],[-17.492,-22.02],[-22.454,-25.558],[-25.255,-31.253],[-32.426,-34.989],[-41.624,-30.153],[-42.053,-25.481],[-37.855,-23.96],[-35.413,-24.967],[-30.415,-23.094],[-16.812,10.55],[-14.499,10.55],[-26.637,-19.436],[-29.449,-26.029],[-34.62,-27.826],[-35.096,-27.589],[-39.686,-27.229],[-36.88,-31.039],[-25.798,-28.041],[-23.837,-22.826],[-19.753,-19.913],[4.936,-20.609],[35.73,-21.385],[39.52,-16.616],[33.048,6.895],[28.484,10.031],[-4.428,10.813],[-5.222,10.867],[-8.993,12.736],[-4.84,17.374],[9.228,17.064],[26.223,16.756],[34.173,22.618],[30.55,31.296],[19.053,25.758],[13.171,21.045],[2.285,21.256],[-0.887,24.714],[-7.034,32.901],[-16.092,27.488],[-15.256,21.881],[-14.098,20.109],[-13.273,13.53],[-14.499,10.55],[-16.812,10.55],[-15.193,14.565],[-15.456,18.053],[-16.816,31.167],[-7.387,34.962],[-0.268,30.834],[1.368,26.121],[4.469,23.466],[13.76,23.179],[16.673,25.361],[17.926,29.308],[24.105,34.647],[28.031,34.908],[33.943,31.386],[35.378,29.399],[34.214,18.062],[24.117,14.433],[-3.489,15.157],[-5.894,14.135]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.607843160629,0.603921592236,0.603921592236,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[43.298,35.531],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":112.000004561854,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"Layer 2/Untitled-2 Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":76,\"s\":[-37]},{\"t\":85.000003462121,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[77.5,166.75,0],\"to\":[-3.833,3.167,0],\"ti\":[18.333,-3.167,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":85,\"s\":[54.5,185.75,0],\"to\":[-18.333,3.167,0],\"ti\":[14.5,0,0]},{\"t\":106.000004317469,\"s\":[-32.5,185.75,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[24.5,6.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[97,97,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,0.5],[57.555,0.5]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0.5,0.5],[57.555,0.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9411764705882353,0.9294117647058824,0.9294117647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":111.000004521123,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"logo Outlines\",\"parent\":10,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[1.276]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[1.429]},{\"i\":{\"x\":[0.833],\"y\":[0.677]},\"o\":{\"x\":[0.167],\"y\":[0.064]},\"t\":10,\"s\":[4.054]},{\"i\":{\"x\":[0.833],\"y\":[0.853]},\"o\":{\"x\":[0.167],\"y\":[0.092]},\"t\":20,\"s\":[-7.271]},{\"i\":{\"x\":[0.833],\"y\":[0.928]},\"o\":{\"x\":[0.167],\"y\":[0.207]},\"t\":26,\"s\":[-31.032]},{\"i\":{\"x\":[0.833],\"y\":[0.782]},\"o\":{\"x\":[0.167],\"y\":[-0.227]},\"t\":30,\"s\":[-42.288]},{\"i\":{\"x\":[0.833],\"y\":[0.975]},\"o\":{\"x\":[0.167],\"y\":[0.142]},\"t\":33,\"s\":[-39.59]},{\"i\":{\"x\":[0.833],\"y\":[0.822]},\"o\":{\"x\":[0.167],\"y\":[-0.046]},\"t\":37,\"s\":[-34.035]},{\"i\":{\"x\":[0.833],\"y\":[1.781]},\"o\":{\"x\":[0.167],\"y\":[0.126]},\"t\":42,\"s\":[-37.74]},{\"i\":{\"x\":[0.833],\"y\":[0.822]},\"o\":{\"x\":[0.167],\"y\":[0.134]},\"t\":43,\"s\":[-38.786]},{\"i\":{\"x\":[0.833],\"y\":[0.921]},\"o\":{\"x\":[0.167],\"y\":[0.143]},\"t\":48,\"s\":[-8.325]},{\"i\":{\"x\":[0.833],\"y\":[1.053]},\"o\":{\"x\":[0.167],\"y\":[0.636]},\"t\":50,\"s\":[6.821]},{\"i\":{\"x\":[0.833],\"y\":[0.73]},\"o\":{\"x\":[0.167],\"y\":[0.04]},\"t\":53,\"s\":[9.649]},{\"i\":{\"x\":[0.833],\"y\":[0.93]},\"o\":{\"x\":[0.167],\"y\":[0.137]},\"t\":57,\"s\":[4.735]},{\"i\":{\"x\":[0.833],\"y\":[0.787]},\"o\":{\"x\":[0.167],\"y\":[-0.177]},\"t\":64,\"s\":[-12.22]},{\"i\":{\"x\":[0.833],\"y\":[0.965]},\"o\":{\"x\":[0.167],\"y\":[0.137]},\"t\":69,\"s\":[-7.452]},{\"i\":{\"x\":[0.833],\"y\":[1.459]},\"o\":{\"x\":[0.167],\"y\":[-0.301]},\"t\":74,\"s\":[-0.016]},{\"i\":{\"x\":[0.833],\"y\":[0.854]},\"o\":{\"x\":[0.167],\"y\":[0.039]},\"t\":86,\"s\":[-2.105]},{\"i\":{\"x\":[0.833],\"y\":[1.016]},\"o\":{\"x\":[0.167],\"y\":[0.218]},\"t\":91,\"s\":[8.132]},{\"i\":{\"x\":[0.833],\"y\":[0.768]},\"o\":{\"x\":[0.167],\"y\":[0.014]},\"t\":94,\"s\":[12.239]},{\"i\":{\"x\":[0.833],\"y\":[0.921]},\"o\":{\"x\":[0.167],\"y\":[0.146]},\"t\":97,\"s\":[7.326]},{\"i\":{\"x\":[0.833],\"y\":[0.843]},\"o\":{\"x\":[0.167],\"y\":[-0.251]},\"t\":103,\"s\":[-8.266]},{\"i\":{\"x\":[0.833],\"y\":[0.997]},\"o\":{\"x\":[0.167],\"y\":[0.17]},\"t\":107,\"s\":[-4.99]},{\"i\":{\"x\":[0.833],\"y\":[0.852]},\"o\":{\"x\":[0.167],\"y\":[-0.002]},\"t\":118,\"s\":[3.325]},{\"i\":{\"x\":[0.833],\"y\":[1.004]},\"o\":{\"x\":[0.167],\"y\":[0.223]},\"t\":126,\"s\":[-4.729]},{\"i\":{\"x\":[0.833],\"y\":[0.789]},\"o\":{\"x\":[0.167],\"y\":[0.003]},\"t\":130,\"s\":[-7.403]},{\"i\":{\"x\":[0.833],\"y\":[0.973]},\"o\":{\"x\":[0.167],\"y\":[0.154]},\"t\":133,\"s\":[-4.62]},{\"i\":{\"x\":[0.833],\"y\":[0.838]},\"o\":{\"x\":[0.167],\"y\":[-0.054]},\"t\":141,\"s\":[5.542]},{\"i\":{\"x\":[0.833],\"y\":[1.338]},\"o\":{\"x\":[0.167],\"y\":[0.183]},\"t\":151,\"s\":[-0.875]},{\"i\":{\"x\":[0.833],\"y\":[0.92]},\"o\":{\"x\":[0.167],\"y\":[0.111]},\"t\":154,\"s\":[-2.587]},{\"i\":{\"x\":[0.833],\"y\":[0.682]},\"o\":{\"x\":[0.167],\"y\":[-0.275]},\"t\":163,\"s\":[12.989]},{\"i\":{\"x\":[0.833],\"y\":[0.898]},\"o\":{\"x\":[0.167],\"y\":[0.123]},\"t\":169,\"s\":[9.946]},{\"i\":{\"x\":[0.833],\"y\":[0.691]},\"o\":{\"x\":[0.167],\"y\":[-0.244]},\"t\":177,\"s\":[-0.569]},{\"i\":{\"x\":[0.833],\"y\":[0.877]},\"o\":{\"x\":[0.167],\"y\":[0.114]},\"t\":180,\"s\":[1.082]},{\"i\":{\"x\":[0.833],\"y\":[1.165]},\"o\":{\"x\":[0.167],\"y\":[0.351]},\"t\":183,\"s\":[5.55]},{\"i\":{\"x\":[0.833],\"y\":[0.825]},\"o\":{\"x\":[0.167],\"y\":[0.129]},\"t\":185,\"s\":[6.598]},{\"i\":{\"x\":[0.833],\"y\":[1.052]},\"o\":{\"x\":[0.167],\"y\":[0.143]},\"t\":199,\"s\":[-2.744]},{\"i\":{\"x\":[0.833],\"y\":[0.893]},\"o\":{\"x\":[0.167],\"y\":[0.054]},\"t\":203,\"s\":[-6.023]},{\"i\":{\"x\":[0.833],\"y\":[0.674]},\"o\":{\"x\":[0.167],\"y\":[0.654]},\"t\":211,\"s\":[0.322]},{\"i\":{\"x\":[0.833],\"y\":[1.019]},\"o\":{\"x\":[0.167],\"y\":[0.105]},\"t\":217,\"s\":[1.1]},{\"i\":{\"x\":[0.833],\"y\":[1.226]},\"o\":{\"x\":[0.167],\"y\":[0.021]},\"t\":222,\"s\":[3.111]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.079]},\"t\":229,\"s\":[0.554]},{\"t\":240.0000097754,\"s\":[12.02]}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":0,\"s\":[-156.828,67.779,0],\"to\":[12.869,0,0],\"ti\":[-16.245,2.532,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":14,\"s\":[-79.613,67.779,0],\"to\":[4.698,-0.732,0],\"ti\":[-2.531,1.635,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":20,\"s\":[-68.991,58.981,0],\"to\":[6.219,-4.019,0],\"ti\":[-2.399,1.799,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28,\"s\":[-59.359,52.589,0],\"to\":[3.376,-2.532,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":39,\"s\":[-59.359,52.589,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":43,\"s\":[-59.359,52.589,0],\"to\":[5.274,-3.586,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":50,\"s\":[-27.714,31.07,0],\"to\":[59.657,-7.608,0],\"ti\":[-14.135,-2.321,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":62,\"s\":[57.096,44.994,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"t\":70.0000028511585,\"s\":[57.096,44.994,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[148.374,139.024,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[67.696,67.696,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-1.411,7.949],[1.411,7.949],[1.411,-7.949],[-1.411,-7.949]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[174.078,151.55],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.509,0],[0,-3.218],[-3.232,0],[-0.883,1.145],[0,0],[1.185,0],[0.345,1.274],[0,0],[0,0.346],[0.097,0.435],[0,0],[-0.031,-0.123],[0,0],[-1.143,0],[-0.342,-0.92],[0,0]],\"o\":[[-3.124,0],[0,3.305],[2.349,0],[0,0],[-0.561,0.692],[-1.422,0],[0,0],[0.021,-0.173],[0,-0.481],[0,0],[0.043,0.114],[0,0],[0.324,-1.209],[1.092,0],[0,0],[-0.521,-2.356]],\"v\":[[0.152,-5.455],[-5.193,-0.033],[0.324,5.454],[4.912,3.445],[3.081,1.738],[0.518,2.926],[-2.262,0.896],[5.128,0.896],[5.192,-0.12],[5.029,-1.489],[2.279,-1.489],[2.391,-1.135],[-2.241,-1.135],[0.13,-2.992],[2.279,-1.489],[5.029,-1.489]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[182.384,154.239],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.283,0.842],[0,0.433],[-0.43,0],[-0.797,-0.778],[0,0],[1.443,0],[0,-1.9],[-1.745,-0.583],[0,-0.453],[0.82,0],[0.861,0.799],[0,0],[-1.681,0],[0,1.857]],\"o\":[[-1.034,-0.389],[0,-0.561],[0.776,0],[0,0],[-1.206,-0.929],[-2.176,0],[0,2.053],[1.357,0.454],[0,0.519],[-1.163,0],[0,0],[1.142,0.993],[2.758,0],[0,-2.096]],\"v\":[[0.55,-1.264],[-1.002,-2.387],[-0.011,-3.165],[2.51,-2.042],[3.889,-4.137],[0.054,-5.454],[-3.76,-2.323],[-0.506,1.133],[1.39,2.279],[0.118,3.144],[-2.811,1.934],[-4.169,3.9],[0.097,5.454],[4.169,2.171]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[193.081,154.239],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.013,0],[0,-0.951],[-1.034,0],[0,0.971]],\"o\":[[-1.034,0],[0,0.971],[1.013,0],[0,-0.951]],\"v\":[[0.001,-1.739],[-1.788,-0.01],[0.001,1.739],[1.788,-0.01]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[168.983,145.771],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-5.074,7.669],[-2.079,7.669],[-2.079,1.857],[3.889,1.857],[3.889,-0.865],[-2.079,-0.865],[-2.079,-4.969],[5.074,-4.969],[5.074,-7.669],[-5.074,-7.669]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[160.117,151.83],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-1.411,5.282],[1.411,5.282],[1.411,-5.281],[-1.411,-5.281]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[168.951,154.217],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.013,0],[0,-0.951],[-1.034,0],[0,0.971]],\"o\":[[-1.034,0],[0,0.971],[1.013,0],[0,-0.951]],\"v\":[[0,-1.739],[-1.788,-0.01],[0,1.739],[1.788,-0.01]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[139.553,145.771],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0.346],[2.974,0],[0.085,-0.003],[0.02,-0.918],[-0.325,0],[-0.279,-1.123],[0,0],[-0.702,0.258],[-0.335,0.839],[0,-3.129],[-3.233,0],[-0.884,1.145],[0,0],[1.185,0],[0.345,1.274],[0,0]],\"o\":[[0,-3.089],[-0.086,0],[-0.335,0.839],[0.279,-0.102],[1.228,0],[0,0],[0.232,-0.867],[0.02,-0.918],[-2.988,0.117],[0,3.306],[2.348,0],[0,0],[-0.56,0.691],[-1.422,0],[0,0],[0.021,-0.173]],\"v\":[[5.193,-0.119],[0.15,-5.454],[-0.098,-5.432],[-0.775,-2.832],[0.13,-2.992],[2.391,-1.134],[-2.242,-1.134],[-0.775,-2.832],[-0.098,-5.432],[-5.193,-0.033],[0.324,5.454],[4.912,3.445],[3.08,1.739],[0.516,2.927],[-2.262,0.897],[5.128,0.897]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[147.826,154.239],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 8\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.345,0],[0,0.929],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.81,0],[-0.668,0.367],[0,0]],\"o\":[[-0.668,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,2.377],[1.421,0],[0,0],[-0.475,0.237]],\"v\":[[1.465,4.677],[0.56,3.316],[0.56,-1.156],[3.403,-1.156],[3.403,-3.51],[0.56,-3.51],[0.56,-7.247],[-2.263,-6.945],[-2.263,-3.51],[-3.512,-3.51],[-3.512,-1.156],[-2.263,-1.156],[-2.263,3.726],[0.733,7.247],[3.512,6.578],[2.801,4.31]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[132.551,152.446],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 9\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-1.411,5.282],[1.411,5.282],[1.411,-5.281],[-1.411,-5.281]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[139.52,154.217],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 10\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-1.842,-7.669],[-4.924,-7.669],[-4.924,7.669],[4.924,7.669],[4.924,4.969],[-1.842,4.969]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[103.045,151.83],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 11\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.275,0],[0,-3.154],[-3.035,-0.252],[0,0],[0,1.441],[-1.637,0],[0,-1.729],[1.508,0],[0.182,0.036],[0,0],[-0.198,0],[0,3.218]],\"o\":[[-3.361,0],[0,2.968],[0,0],[-1.304,-0.261],[0,-1.664],[1.551,0],[0,1.728],[-0.198,0],[0,0],[0.191,0.016],[3.275,0],[0,-3.24]],\"v\":[[0.011,-5.455],[-5.591,-0.011],[-0.558,5.404],[-0.558,2.848],[-2.725,-0.011],[0.011,-2.928],[2.726,-0.011],[0.011,2.906],[-0.558,2.848],[-0.558,5.404],[0.011,5.454],[5.591,-0.011]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[114.808,154.239],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 12\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.345,0],[0,0.929],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.81,0],[-0.668,0.367],[0,0]],\"o\":[[-0.668,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,2.377],[1.421,0],[0,0],[-0.474,0.237]],\"v\":[[1.465,4.677],[0.56,3.316],[0.56,-1.156],[3.404,-1.156],[3.404,-3.51],[0.56,-3.51],[0.56,-7.247],[-2.263,-6.945],[-2.263,-3.51],[-3.512,-3.51],[-3.512,-1.156],[-2.263,-1.156],[-2.263,3.726],[0.733,7.247],[3.512,6.578],[2.801,4.31]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[124.6,152.446],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 13\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.746,-0.407],[0.108,-0.728],[0.727,0.108],[2.159,-4.123],[2.702,0.2],[-0.054,0.734],[-0.733,-0.054],[-2.179,4.16]],\"o\":[[0.727,0.107],[-0.107,0.728],[-1.288,-0.191],[-2.757,5.263],[-0.733,-0.054],[0.055,-0.734],[1.334,0.099],[2.774,-5.297]],\"v\":[[6.922,-7.969],[8.043,-6.456],[6.533,-5.333],[1.157,0.605],[-6.868,8.176],[-8.097,6.749],[-6.672,5.518],[-1.199,-0.633]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9411764705882353,0.9294117647058824,0.9294117647058824,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[147.101,123.742],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 14\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,-1.188],[0,0],[-1.188,0],[0,0],[0,1.188],[0,0],[1.189,0]],\"o\":[[-1.188,0],[0,0],[0,1.188],[0,0],[1.189,0],[0,0],[0,-1.188],[0,0]],\"v\":[[-11.098,-13.285],[-13.25,-11.133],[-13.25,11.133],[-11.098,13.285],[11.098,13.285],[13.25,11.133],[13.25,-11.133],[11.098,-13.285]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9725490196078431,0.9411764705882353,0.03137254901960784,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[147.08,123.83],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 15\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":241.000009816131,\"op\":241.000009816131,\"st\":0,\"bm\":0,\"hidden\":0}],\"markers\":[]}");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/core/withWidth":
/*!**********************************************!*\
  !*** external "@material-ui/core/withWidth" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Call":
/*!******************************************!*\
  !*** external "@material-ui/icons/Call" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "@material-ui/icons/CheckCircleOutlineRounded":
/*!***************************************************************!*\
  !*** external "@material-ui/icons/CheckCircleOutlineRounded" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutlineRounded");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Message":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Message" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Message");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });