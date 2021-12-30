"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = RequireInitialization;
RequireInitialization.initialized = false;
