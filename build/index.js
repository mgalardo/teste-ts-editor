"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContentFragmentFactory_1 = require("./ContentFragmentFactory");
const InlineFragment_1 = require("./domain/fragments/InlineFragment");
const Paragraph_1 = require("./domain/fragments/Paragraph");
// const html = '<p>paragrafo</p>'
let p = new (Paragraph_1.Paragraph);
ContentFragmentFactory_1.ContentFragmentFactory.register(Paragraph_1.Paragraph.prototype);
ContentFragmentFactory_1.ContentFragmentFactory.register(InlineFragment_1.InlineFragment.prototype);
console.log(typeof Paragraph_1.Paragraph);
// console.log(ContentFragmentFactory.getFragmentTypes())
