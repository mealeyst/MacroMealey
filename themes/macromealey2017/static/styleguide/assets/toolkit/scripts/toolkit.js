/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	* Toolkit JavaScript
	*/
	
	function buildURL() {
	  var styleguide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	  if (window.location.origin === 'http://localhost:3000') {
	    return window.location.origin;
	  } else {
	    var pathArray = window.location.pathname.split('/');
	    var pathEnd = styleguide ? '/styleguide' : '';
	    return window.location.origin + '/' + pathArray[1] + pathEnd;
	  }
	}
	
	document.addEventListener("DOMContentLoaded", function (event) {
	  progressLoader().then(function (progressFile) {
	    var progressJSON = JSON.parse(progressFile);
	    var objectiveContainers = document.querySelectorAll('#objectives');
	    Object.keys(progressJSON.objectives).map(function (key) {
	      var percent = Math.floor(progressJSON.objectives[key].completed / progressJSON.objectives[key].total * 100);
	      var objective = document.createElement('div');
	      var label = document.createElement('label');
	      var progress = document.createElement('progress');
	      objective.className = 'objective site-footer__tertiary';
	      label.innerHTML = key.replace(/_/g, ' ');
	      progress.innerHTML = percent + '%';
	      progress.setAttribute('value', progressJSON.objectives[key].completed);
	      progress.setAttribute('max', progressJSON.objectives[key].total);
	      objective.appendChild(label);
	      objective.appendChild(progress);
	      var content = [];
	      Object.keys(objectiveContainers).map(function (objectiveContainer, index) {
	        var content = this;
	        content[objectiveContainer] = objective.cloneNode(true);
	        objectiveContainers[objectiveContainer].appendChild(content[objectiveContainer]);
	      }, content);
	    });
	  });
	  var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.ms-nav__toggle)');
	  var radios = document.querySelectorAll('input[type="radio"]');
	  var textareas = document.querySelectorAll('textarea');
	  var textfields = document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="file"], input[type="number"], input[type="month"], input[type="password"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"], input[type="week"]');
	
	  addInputEventListener(textfields, 'textfield');
	  addInputEventListener(textareas, 'textarea');
	  modifyToggle(checkboxes, 'checkbox');
	  modifyToggle(radios, 'radio');
	  addIcons();
	});
	
	function addInputEventListener(matches, type) {
	  Object.keys(matches).map(function (match) {
	    if (_typeof(matches[match]) === 'object') {
	      matches[match].classList.add(type);
	      matches[match].addEventListener('change', function (event) {
	        if (event.target.value !== "") {
	          event.target.classList.add(type + '--filled');
	        } else {
	          event.target.classList.remove(type + '--filled');
	        }
	      });
	    }
	  });
	}
	
	function modifyToggle(elements, type) {
	  Object.keys(elements).map(function (element) {
	    if (elements[element].id !== 'site-nav-toggle') {
	      var currentElement = elements[element];
	
	      loadSVG(buildURL() + '/assets/toolkit/images/' + type + '.svg').then(function (svg) {
	        var parser = new DOMParser();
	        var doc = parser.parseFromString(svg, 'image/svg+xml');
	        doc.documentElement.addEventListener('click', function () {
	          currentElement.click();
	        });
	        var wrapper = document.createElement('div');
	        wrapper.classList.add(type);
	        document.getElementsByTagName('body')[0].appendChild(wrapper);
	        currentElement.parentNode.insertBefore(wrapper, currentElement.nextSibling);
	        wrapper.appendChild(currentElement);
	        wrapper.appendChild(doc.documentElement);
	      });
	    }
	  });
	}
	
	function addIcons() {
	  loadSVG(buildURL() + '/assets/toolkit/images/spritesheet.svg').then(function (svg) {
	    var parser = new DOMParser();
	    var doc = parser.parseFromString(svg, 'image/svg+xml');
	    document.body.appendChild(doc.documentElement);
	  });
	}
	
	function loadSVG(filename) {
	  return new Promise(function (resolve, reject) {
	    var client = new XMLHttpRequest();
	    client.open('GET', filename);
	    client.onload = function () {
	      if (client.status >= 200 && client.status < 300) {
	        resolve(client.responseText);
	      } else {
	        reject({ status: client.status, statusText: client.statusText });
	      }
	    };
	    client.onerror = function () {
	      reject({ status: client.status, statusText: client.statusText });
	    };
	    client.send();
	  });
	}
	
	function progressLoader() {
	  return new Promise(function (resolve, reject) {
	    var client = new XMLHttpRequest();
	    client.open('GET', buildURL(false) + '/progress.json');
	    client.onload = function () {
	      if (client.status >= 200 && client.status < 300) {
	        resolve(client.responseText);
	      } else {
	        reject({ status: client.status, statusText: client.statusText });
	      }
	    };
	    client.onerror = function () {
	      reject({ status: client.status, statusText: client.statusText });
	    };
	    client.send();
	  });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=toolkit.js.map