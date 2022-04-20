(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BattisRequireInit"] = factory();
	else
		root["BattisRequireInit"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Core of a class that requires initialization before (some) actions can be taken
 */
class RequireInitialization {
    static requireInitialization() {
        if (!this.initialized) {
            throw new Error(`${this['name']} not yet initialized`);
        }
    }
    static markInitialized() {
        this.initialized = true;
    }
}
exports["default"] = RequireInitialization;
RequireInitialization.initialized = false;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0aXNSZXF1aXJlSW5pdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQmF0dGlzUmVxdWlyZUluaXQvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCYXR0aXNSZXF1aXJlSW5pdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCYXR0aXNSZXF1aXJlSW5pdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQ29yZSBvZiBhIGNsYXNzIHRoYXQgcmVxdWlyZXMgaW5pdGlhbGl6YXRpb24gYmVmb3JlIChzb21lKSBhY3Rpb25zIGNhbiBiZSB0YWtlblxuICovXG5jbGFzcyBSZXF1aXJlSW5pdGlhbGl6YXRpb24ge1xuICAgIHN0YXRpYyByZXF1aXJlSW5pdGlhbGl6YXRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXNbJ25hbWUnXX0gbm90IHlldCBpbml0aWFsaXplZGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBtYXJrSW5pdGlhbGl6ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlcXVpcmVJbml0aWFsaXphdGlvbjtcblJlcXVpcmVJbml0aWFsaXphdGlvbi5pbml0aWFsaXplZCA9IGZhbHNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9