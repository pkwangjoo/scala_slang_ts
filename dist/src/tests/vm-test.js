"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vm_fn_basic = exports.vm_test_basic = void 0;
exports.vm_test_basic = `
{
  {
    val a = 1;
    val b = 2;
    val c = a + b;
    val d = 3 + c;
    d + 4 + 5;
  }
}
`;
exports.vm_fn_basic = `
def add(x: Int, y: Int) = {
  x + y;
}
val result = add(3, 5);
result;
`;
//# sourceMappingURL=vm-test.js.map