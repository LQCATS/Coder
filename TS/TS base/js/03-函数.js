"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(x, y) {
    return x + y;
}
;
foo(1, 2);
const a = (x, y) => {
};
a(1);
const b = (x, y = 1) => {
    return x + y;
};
b(2);
const c = (x, ...rest) => {
    console.log(rest);
};
c(1, 2, 3, 4);
const d = (x, y) => {
    return x + y;
};
