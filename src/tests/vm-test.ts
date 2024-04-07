export const vm_test_basic = `
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

export const vm_fn_basic = `
def add(x: Int, y: Int) = {
  x + y;
}
val result = add(3, 5);
result;
`;
