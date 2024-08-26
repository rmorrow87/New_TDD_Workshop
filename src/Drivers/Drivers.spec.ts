import { ageCheck, DriverStatus } from "./Drivers";

describe("Drivers", () => {
  test("ageCheck should retrun enum of TOO_YOUNG if age is < 16", () => {
    let age = 15;

    expect(ageCheck(age)).toBe(DriverStatus.TOO_YOUNG);
  });
  test("ageCheck should retrun enum of TOO_OLD if age is > 85", () => {
    let age = 86;

    expect(ageCheck(age)).toBe(DriverStatus.TOO_OLD);
  });
  test("ageCheck should retrun enum of ELIGIBLE if age is between 16 and 85 inclusive", () => {
    let age = 16;

    expect(ageCheck(age)).toBe(DriverStatus.ELIGIBLE);
  });
});
