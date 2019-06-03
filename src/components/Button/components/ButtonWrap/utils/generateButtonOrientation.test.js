import generateButtonOrientation from "./generateButtonOrientation";

describe("generateButtonOrientation", () => {
  test("generates a CSS mixin containing button orientation rulesets", () => {
    expect(generateButtonOrientation("horizontal")).toEqual(
      `
      flex-direction: row;
      > :not(:first-child) {
        flex-basis: auto;
      }
    `
    );
    expect(generateButtonOrientation("vertical")).toEqual(
      `
      flex-direction: column;
    `
    );
  });
});
