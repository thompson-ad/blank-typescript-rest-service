import { sum, mult } from "./index";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("multiplies 2 and 6 to equal 12", () => {
  expect(mult(2, 6)).toBe(12);
});
