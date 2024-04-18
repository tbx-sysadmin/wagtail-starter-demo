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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksc0lBQW1COztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7OztVQ25DMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9EO0FBQ2U7QUFDakI7O0FBRXZCOzs7QUFHM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0VBQVc7QUFDN0Isa0JBQWtCLHlFQUFrQjtBQUNwQyxrQkFBa0IsK0RBQVU7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvLi9zdGF0aWNfc3JjL3Nhc3MvbWFpbi5zY3NzP2FjM2EiLCJ3ZWJwYWNrOi8vd2FndGFpbC1zdGFydGVyLWtpdC8uL3N0YXRpY19zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2Rlc2t0b3Atc2VhcmNoLXBhbmVsLmpzIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvLi9zdGF0aWNfc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly93YWd0YWlsLXN0YXJ0ZXIta2l0Ly4vc3RhdGljX3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLmpzIiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FndGFpbC1zdGFydGVyLWtpdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93YWd0YWlsLXN0YXJ0ZXIta2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YWd0YWlsLXN0YXJ0ZXIta2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2FndGFpbC1zdGFydGVyLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dhZ3RhaWwtc3RhcnRlci1raXQvLi9zdGF0aWNfc3JjL2phdmFzY3JpcHQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIiLCJpbXBvcnQgeyBoaWRlRHJvcGRvd25FbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIE1vYmlsZU1lbnUge1xuICAgIHN0YXRpYyBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS1tb2JpbGUtbWVudS10b2dnbGVdJztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW9iaWxlLW1lbnVdJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWFyY2gtZHJvcGRvd25dJyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIC8vIFNldCB0aGUgbWVudSBidXR0b24gdG8gYmUgYSBjcm9zcy5cbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcblxuICAgICAgICAvLyBDbG9zZSB0aGUgc2VhcmNoIGRyb3Bkb3duLCBpZiBpdCdzIG9wZW4uXG4gICAgICAgIGlmICghdGhpcy5zZWFyY2hEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzaWJsZScpKSB7XG4gICAgICAgICAgICBoaWRlRHJvcGRvd25FbGVtZW50KHRoaXMuc2VhcmNoRHJvcGRvd24pO1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICdbZGF0YS1tb2JpbGUtdG9nZ2xlLWJ1dHRvbnNdJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEljb24gPSB0aGlzLnRvZ2dsZUJ1dHRvbnMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmljb24tLW1hZ25pZnlpbmctZ2xhc3MnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NJY29uID0gdGhpcy50b2dnbGVCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoJy5pY29uLS1jcm9zcycpO1xuXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmNyb3NzSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwYWdlIGlzIG5vdCBzY3JvbGxhYmxlLiBPbmx5IHRoZSBkcmF3ZXIuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgICAgICAgLy8gT3BlbiB0aGUgbW9iaWxlIG1lbnUuIE1vYmlsZSBtZW51IHNsaWRlcyBmcm9tIHRoZSByaWdodC5cbiAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlLXgtZnVsbCcpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlLXgtMCcpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICAvLyBTZXQgdGhlIGNyb3NzIGJ1dHRvbiB0byBiZSBhIG1lbnUgYnV0dG9uLlxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcblxuICAgICAgICAvLyBTZXQgdGhlIHBhZ2UgdG8gYmUgc2Nyb2xsYWJsZS5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XG5cbiAgICAgICAgLy8gQ2xvc2UgdGhlIG1vYmlsZSBtZW51LlxuICAgICAgICB0aGlzLm1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGUteC1mdWxsJyk7XG4gICAgICAgIHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2xhdGUteC0wJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIiwiY2xhc3MgVGhlbWVUb2dnbGUge1xuICAgIHN0YXRpYyBzZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuICdbZGF0YS10aGVtZS10b2dnbGVdJztcbiAgICB9XG4gICAgXG4gICAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVN3aXRjaCA9IG5vZGU7XG4gICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRoZW1lKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGhlbWUnLCB0aGlzLmN1cnJlbnRUaGVtZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpXG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zd2l0Y2hUaGVtZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN3aXRjaFRoZW1lKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUaGVtZVRvZ2dsZSBmcm9tIFwiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZVwiO1xuaW1wb3J0IERlc2t0b3BTZWFyY2hQYW5lbCBmcm9tIFwiLi9jb21wb25lbnRzL2Rlc2t0b3Atc2VhcmNoLXBhbmVsXCI7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZS1tZW51XCI7XG5cbmltcG9ydCAnLi4vc2Fzcy9tYWluLnNjc3MnO1xuXG5cbmZ1bmN0aW9uIGluaXRDb21wb25lbnQoQ29tcG9uZW50Q2xhc3MpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ29tcG9uZW50Q2xhc3Muc2VsZWN0b3IoKSk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gbmV3IENvbXBvbmVudENsYXNzKGl0ZW0pKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBpbml0Q29tcG9uZW50KFRoZW1lVG9nZ2xlKTtcbiAgICBpbml0Q29tcG9uZW50KERlc2t0b3BTZWFyY2hQYW5lbCk7XG4gICAgaW5pdENvbXBvbmVudChNb2JpbGVNZW51KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9