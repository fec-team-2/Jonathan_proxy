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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React from 'react';\n// import ReactDOM from 'react-dom';\n// import axios from 'axios';\n// class Betsy extends React.Component {\n//   constructor(props){\n//     super(props);\n//   }\n//   componentDidMount(){\n//     console.log('Mounted!');\n//     axios.get('http://localhost:3003/')\n//       .then((res) => {\n//         console.log('We are here');\n//         console.log(res.data.getElementById('jjc-app'));\n//       })\n//       .catch((err) => {\n//         console.log('Houston, we got an error', err);\n//       });\n//   }\n//   render(){\n//       return (\n//       <div>\n//         APPLICATION!!!!\n//         <div id='trevor'></div>\n//         <div id='jonathan'></div>\n//       </div>\n//       );\n//   }\n// }\n// ReactDOM.render(<Betsy />, document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzeD8xYzA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbi8vIGNsYXNzIEJldHN5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbi8vICAgICBzdXBlcihwcm9wcyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4vLyAgICAgY29uc29sZS5sb2coJ01vdW50ZWQhJyk7XHJcbi8vICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy8nKVxyXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1dlIGFyZSBoZXJlJyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZ2V0RWxlbWVudEJ5SWQoJ2pqYy1hcHAnKSk7XHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0hvdXN0b24sIHdlIGdvdCBhbiBlcnJvcicsIGVycik7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmVuZGVyKCl7XHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgQVBQTElDQVRJT04hISEhXHJcbi8vICAgICAgICAgPGRpdiBpZD0ndHJldm9yJz48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGlkPSdqb25hdGhhbic+PC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKDxCZXRzeSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/index.jsx\n");

/***/ })

/******/ });