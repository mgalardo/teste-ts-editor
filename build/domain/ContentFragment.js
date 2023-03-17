"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentFragment = void 0;
const Fragment_1 = require("./Fragment");
class ContentFragment extends Fragment_1.Fragment {
    isValid() {
        return this.getElement() ? true : false;
    }
}
exports.ContentFragment = ContentFragment;
