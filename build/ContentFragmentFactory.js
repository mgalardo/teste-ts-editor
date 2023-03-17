"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentFragmentFactory = void 0;
class ContentFragmentFactory {
    static register(fragment) {
        this.fragmentTypes.push(fragment);
    }
    static getFragmentTypes() {
        return this.fragmentTypes;
    }
}
exports.ContentFragmentFactory = ContentFragmentFactory;
ContentFragmentFactory.fragmentTypes = [];
