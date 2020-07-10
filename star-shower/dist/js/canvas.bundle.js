/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/variables.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variables__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/js/functions.js");
/* harmony import */ var _class_Star_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/Star.js */ "./src/js/class/Star.js");



_variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].width = innerWidth;
_variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height = innerHeight; // if window resized

addEventListener("resize", function () {
  _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].width = innerWidth;
  _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height = innerHeight;
  init();
}); // if user click the screen

_variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].addEventListener("click", function (e) {
  Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__["dropStar"])(e.clientX, e.clientY);
});

function init() {
  // draw star background
  for (var i = 0; i < 100; i++) {
    var radius = Math.random() * 2;
    _variables__WEBPACK_IMPORTED_MODULE_0__["backgroundStars"].push(new _class_Star_js__WEBPACK_IMPORTED_MODULE_2__["default"](Math.random() * _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, Math.random() * _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height, radius, "rgba(255,255,255, ".concat(Math.random(), ")")));
  }
} // Animation Loop


var frame = 0;

function animate() {
  requestAnimationFrame(animate);
  var nightSky = _variables__WEBPACK_IMPORTED_MODULE_0__["c"].createLinearGradient(0, 0, 0, _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
  nightSky.addColorStop(1, "#171e26");
  nightSky.addColorStop(0, "#3f586b");
  _variables__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = nightSky;
  _variables__WEBPACK_IMPORTED_MODULE_0__["c"].fillRect(0, 0, _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
  _variables__WEBPACK_IMPORTED_MODULE_0__["backgroundStars"].forEach(function (backgroundStar) {
    backgroundStar.draw();
  }); // draw mountain

  Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__["createMountain"])(1, _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 100, "#293B47");
  Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__["createMountain"])(2, _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 175, "#283843");
  Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__["createMountain"])(3, _variables__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - 200, "#26333e");
  _variables__WEBPACK_IMPORTED_MODULE_0__["stars"].forEach(function (star, index) {
    star.update();

    if (star.radius < 0) {
      _variables__WEBPACK_IMPORTED_MODULE_0__["stars"].splice(index, 1);
    }
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__["miniStars"].forEach(function (miniStar, index) {
    miniStar.update();

    if (miniStar.ttl === 0) {
      _variables__WEBPACK_IMPORTED_MODULE_0__["miniStars"].splice(index, 1);
    }
  });
  frame++;

  if (frame % 50 === 0) {
    Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__["dropStar"])();
  }
}

init();
animate();

/***/ }),

/***/ "./src/js/class/MiniStar.js":
/*!**********************************!*\
  !*** ./src/js/class/MiniStar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniStar; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.js */ "./src/js/variables.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variables_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MiniStar = /*#__PURE__*/function () {
  function MiniStar(x, y, radius, color) {
    _classCallCheck(this, MiniStar);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-5, 5),
      y: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-15, 15)
    };
    this.friction = 0.5;
    this.gravity = 0.5;
    this.ttl = 100;
    this.opacity = 1;
  }

  _createClass(MiniStar, [{
    key: "draw",
    value: function draw() {
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].save();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].beginPath();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].shadowColor = "rgba(255,255,255,".concat(this.opacity, ")");
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].shadowBlur = 20;
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = "rgba(255,255,255,".concat(this.opacity, ")");
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].fill();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].closePath();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();

      if (this.y + this.radius + this.velocity.y > _variables_js__WEBPACK_IMPORTED_MODULE_1__["canvas"].height) {
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        this.velocity.y += this.gravity;
      }

      if (this.x + this.radius > _variables_js__WEBPACK_IMPORTED_MODULE_1__["canvas"].width || this.x - this.radius < 0) {
        this.velocity.x = -this.velocity.x;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
    }
  }]);

  return MiniStar;
}();



/***/ }),

/***/ "./src/js/class/Star.js":
/*!******************************!*\
  !*** ./src/js/class/Star.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.js */ "./src/js/variables.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variables_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MiniStar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniStar.js */ "./src/js/class/MiniStar.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Star = /*#__PURE__*/function () {
  function Star(x, y, radius, color) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-20, 20),
      y: 3
    };
    this.friction = 0.75;
    this.gravity = 1;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].save();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].beginPath();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].shadowColor = this.color;
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].shadowBlur = 20;
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = this.color;
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].fill();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].closePath();
      _variables_js__WEBPACK_IMPORTED_MODULE_1__["c"].restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();

      if (this.y + this.radius + this.velocity.y > _variables_js__WEBPACK_IMPORTED_MODULE_1__["canvas"].height) {
        this.velocity.y = -this.velocity.y * this.friction;
        this.shatter();
        this.radius -= 3;
      } else {
        this.velocity.y += this.gravity;
      }

      if (this.x + this.radius + this.velocity.x > _variables_js__WEBPACK_IMPORTED_MODULE_1__["canvas"].width || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x;
        this.shatter();
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }, {
    key: "shatter",
    value: function shatter() {
      for (var i = 0; i < 5; i++) {
        _variables_js__WEBPACK_IMPORTED_MODULE_1__["miniStars"].push(new _MiniStar_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.x, this.y, 2, "rgba(255,255,255,1)"));
      }
    }
  }]);

  return Star;
}();



/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: dropStar, createMountain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropStar", function() { return dropStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMountain", function() { return createMountain; });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/js/variables.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variables_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _class_Star_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Star.js */ "./src/js/class/Star.js");


function dropStar() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var radius = 15;
  _variables_js__WEBPACK_IMPORTED_MODULE_0__["stars"].push(new _class_Star_js__WEBPACK_IMPORTED_MODULE_1__["default"](x === null ? Math.max(radius, Math.random() * _variables_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width + radius) : x, y === null ? 0 : y, radius, "rgba(255,255,255, 1)"));
}
function createMountain(amount, height, color) {
  var mountainWidth = _variables_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / amount;

  for (var i = 0; i < amount; i++) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].beginPath();
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].moveTo(i * mountainWidth, _variables_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(i * mountainWidth + 400 + mountainWidth, _variables_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(i * mountainWidth + mountainWidth / 2, _variables_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height - height);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(i * mountainWidth - 400, _variables_js__WEBPACK_IMPORTED_MODULE_0__["canvas"].height);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = color;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].fill();
    _variables_js__WEBPACK_IMPORTED_MODULE_0__["c"].closePath();
  }
}

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  randomIntFromRange: randomIntFromRange
};

/***/ }),

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var stars = [];
var miniStars = [];
var backgroundStars = [];
module.exports = {
  canvas: canvas,
  c: c,
  stars: stars,
  miniStars: miniStars,
  backgroundStars: backgroundStars
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map