/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelUtterance: () => (/* binding */ cancelUtterance),
/* harmony export */   pauseUtterance: () => (/* binding */ pauseUtterance),
/* harmony export */   playUtterance: () => (/* binding */ playUtterance),
/* harmony export */   resumeUtterance: () => (/* binding */ resumeUtterance)
/* harmony export */ });
let synthesis;
let utterance;
if ('speechSynthesis' in window) {
  synthesis = window.speechSynthesis;
  utterance = new SpeechSynthesisUtterance();
} else {
  console.log('Text-to-speech not supported.');
}
const getContent = () => {
  const article = document.querySelector('.entry-content');
  if (article) {
    const content = article.querySelectorAll(':scope > :not(.wp-block-rdev-l2wp)');
    const toRead = [];
    content.forEach(element => toRead.push(element.innerText || element.textContent));
    return toRead.join(' ');
  } else {
    console.log('Can\'t find anything to read');
    return 'Non riesco a leggere il contenuto';
  }
};
const playUtterance = () => {
  utterance.text = getContent();
  if (synthesis && utterance) {
    synthesis.speak(utterance);
  }
};
const pauseUtterance = () => {
  if (synthesis) {
    synthesis.pause();
  } else {
    console.log('synthesis not defined');
  }
};
const resumeUtterance = () => {
  if (synthesis) {
    synthesis.resume();
  } else {
    console.log('synthesis not defined');
  }
};
const cancelUtterance = () => {
  if (synthesis) {
    synthesis.cancel();
  } else {
    console.log('synthesis not defined');
  }
};

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('l2wp-play-button');
  const pauseButton = document.getElementById('l2wp-pause-button');
  const resumeButton = document.getElementById('l2wp-resume-button');
  const cancelButton = document.getElementById('l2wp-cancel-button');
  if (playButton) playButton.addEventListener('click', _script__WEBPACK_IMPORTED_MODULE_0__.playUtterance);
  if (pauseButton) pauseButton.addEventListener('click', _script__WEBPACK_IMPORTED_MODULE_0__.pauseUtterance);
  if (resumeButton) resumeButton.addEventListener('click', _script__WEBPACK_IMPORTED_MODULE_0__.resumeUtterance);
  if (cancelButton) cancelButton.addEventListener('click', _script__WEBPACK_IMPORTED_MODULE_0__.cancelUtterance);
  (0,_script__WEBPACK_IMPORTED_MODULE_0__.cancelUtterance)();
});

/* eslint-enable no-console */
})();

/******/ })()
;
//# sourceMappingURL=view.js.map