import generateButtonSize from "./generateButtonSize";

describe("generateButtonSize", () => {
  test("renders a block of CSS attributes for a particular string (xs, sm, normal, lg, xl)", () => {
    expect(generateButtonSize("xs")).toEqual(expect.anything());
    expect(generateButtonSize("sm")).toEqual(expect.anything());
    expect(generateButtonSize("lg")).toEqual(expect.anything());
    expect(generateButtonSize("xl")).toEqual(expect.anything());
    expect(generateButtonSize("normal")).toEqual(expect.anything());
  });
});
