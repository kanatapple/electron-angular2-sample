module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main/main.ts */1);


/***/ },
/* 1 */
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
const electron = __webpack_require__(/*! electron */ 2);
const { app, BrowserWindow } = electron;
let win;
function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(`file://${__dirname}/index.html`);
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ function(module, exports) {

module.exports = require("electron");

/***/ }
/******/ ]);