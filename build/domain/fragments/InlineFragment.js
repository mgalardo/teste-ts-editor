"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineFragment = void 0;
const Fragment_1 = require("../Fragment");
class InlineFragment extends Fragment_1.Fragment {
    getSelector() {
        return 'b, i, u, s, sup, sub';
    }
}
exports.InlineFragment = InlineFragment;
