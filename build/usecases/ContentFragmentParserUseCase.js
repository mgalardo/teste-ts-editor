"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentFragmentParserUseCase = void 0;
const ContentFragmentFactory_1 = require("../ContentFragmentFactory");
ContentFragmentFactory_1.ContentFragmentFactory;
class ContentFragmentParserUseCase {
    static parser(domain) {
        domain.children.forEach((c) => {
            const fragmentType = ContentFragmentFactory_1.ContentFragmentFactory.getFragmentTypes().find((f) => c.matches(f.getSelector()));
            if (fragmentType) {
            }
        });
    }
}
exports.ContentFragmentParserUseCase = ContentFragmentParserUseCase;
