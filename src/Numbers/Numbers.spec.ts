import { sum, difference, product } from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test("difference() should subtract two numbers", () => {
    expect(difference(3, 2)).toEqual(1);
  });

  test("product() should multiply two numbers", () => {
    expect(product(2, 5)).toEqual(10);
  });
});
