import generateButtonOrientation from "./generateButtonOrientation";

describe("generateButtonOrientation", () => {
  test("generates a CSS mixin containing button orientation rulesets", () => {
    expect(generateButtonOrientation("horizontal")).toEqual(
      `
      flex-direction: row;
      > :not(:first-child) {
        margin-left: 4px;
        flex-basis: auto;
      }
    `
    );
    expect(generateButtonOrientation("vertical")).toEqual(
      `
      flex-direction: column;
      padding-top: 4px;
      > :not(:first-child) {
        margin-top: 0.25px;
      }
    `
    );
  });
});
