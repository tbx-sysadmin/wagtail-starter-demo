/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static_src/sass/main.scss":
/*!***********************************!*\
  !*** ./static_src/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./static_src/javascript/components/desktop-search-panel.js":
/*!******************************************************************!*\
  !*** ./static_src/javascript/components/desktop-search-panel.js ***!
  \******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./static_src/javascript/components/mobile-menu.js":
/*!*********************************************************!*\
  !*** ./static_src/javascript/components/mobile-menu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


class MobileMenu {
    static selector() {
        return '[data-mobile-menu-toggle]';
    }

    constructor(node) {
        this.node = node;
        this.body = document.querySelector('body');
        this.mobileMenu = document.querySelector('[data-mobile-menu]');
        this.searchDropdown = document.querySelector('[data-search-dropdown]');

        this.bindEventListeners();
    }

    bindEventListeners() {
        this.node.addEventListener('click', () => {
            if (this.mobileMenu.classList.contains('invisible')) {
                this.open();
            } else {
                this.close();
            }
        });
    }

    open() {
        // Set the menu button to be a cross.
        this.node.classList.add('is-open');
        this.node.setAttribute('aria-expanded', 'true');
        this.body.classList.add('no-scroll');

        // Close the search dropdown, if it's open.
        if (!this.searchDropdown.classList.contains('invisible')) {
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.searchDropdown);

            this.toggleButtons = document.querySelector(
                '[data-mobile-toggle-buttons]',
            );
            this.searchIcon = this.toggleButtons.querySelector(
                '.icon--magnifying-glass',
            );
            this.crossIcon = this.toggleButtons.querySelector('.icon--cross');

            this.searchIcon.classList.remove('hidden');
            this.crossIcon.classList.add('hidden');
        }

        // Make sure that the page is not scrollable. Only the drawer.
        document.body.style.overflowY = 'hidden';

        // Open the mobile menu. Mobile menu slides from the right.
        this.mobileMenu.classList.remove('invisible');
        this.mobileMenu.classList.remove('translate-x-full');
        this.mobileMenu.classList.add('translate-x-0');
    }

    close() {
        // Set the cross button to be a menu button.
        this.node.classList.remove('is-open');
        this.node.setAttribute('aria-expanded', 'false');
        this.body.classList.remove('no-scroll');

        // Set the page to be scrollable.
        document.body.style.overflowY = 'visible';

        // Close the mobile menu.
        this.mobileMenu.classList.add('invisible');
        this.mobileMenu.classList.add('translate-x-full');
        this.mobileMenu.classList.remove('translate-x-0');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);


/***/ }),

/***/ "./static_src/javascript/components/theme-toggle.js":
/*!**********************************************************!*\
  !*** ./static_src/javascript/components/theme-toggle.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ThemeToggle {
    static selector() {
        return '[data-theme-toggle]';
    }
    
    constructor(node) {
        this.toggleSwitch = node;
        this.currentTheme = localStorage.getItem('theme');

        if (this.currentTheme) {
            document.documentElement.classList.add('theme', this.currentTheme);
            if (this.currentTheme === 'dark') {
                this.toggleSwitch.checked = true;
            }
        }
        this.bindEvents()
    }

    bindEvents() {
        this.toggleSwitch.addEventListener('change', this.switchTheme, false);
    }

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.classList.add('theme', 'dark');
            document.documentElement.classList.remove('theme', 'light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('theme', 'light');
            document.documentElement.classList.remove('theme', 'dark');
            localStorage.setItem('theme', 'light');
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./static_src/javascript/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theme_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/theme-toggle */ "./static_src/javascript/components/theme-toggle.js");
/* harmony import */ var _components_desktop_search_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/desktop-search-panel */ "./static_src/javascript/components/desktop-search-panel.js");
/* harmony import */ var _components_desktop_search_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_desktop_search_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu */ "./static_src/javascript/components/mobile-menu.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/main.scss */ "./static_src/sass/main.scss");







function initComponent(ComponentClass) {
    const items = document.querySelectorAll(ComponentClass.selector());
    items.forEach((item) => new ComponentClass(item));
}

document.addEventListener('DOMContentLoaded', () => {
    initComponent(_components_theme_toggle__WEBPACK_IMPORTED_MODULE_0__["default"]);
    initComponent((_components_desktop_search_panel__WEBPACK_IMPORTED_MODULE_1___default()));
    initComponent(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

})();

/******/ })()
;
