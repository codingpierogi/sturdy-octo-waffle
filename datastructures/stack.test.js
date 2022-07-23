const Stack = require("./stack");

test("Stack should be empty when initialized", () => {
  const stack = new Stack();
  expect(stack.isEmpty).toBe(true);
});

test("Stack should not be empty when pushed", () => {
  const stack = new Stack();
  stack.push(10);
  expect(stack.isEmpty).toBe(false);
});

test("Stack should push and pop", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(5);
  expect(stack.isEmpty).toBe(false);
  expect(stack.pop()).toBe(5);
  expect(stack.pop()).toBe(10);
  expect(stack.isEmpty).toBe(true);
});

test("Stack should peek", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(5);
  expect(stack.peek()).toBe(5);
});
