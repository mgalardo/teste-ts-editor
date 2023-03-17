"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
const ContentFragment_1 = require("../ContentFragment");
class Paragraph extends ContentFragment_1.ContentFragment {
    getSelector() {
        return 'p';
    }
}
exports.Paragraph = Paragraph;
