import generateButtonSize from "./generateButtonSize";

describe("generateButtonSize", () => {
  test("renders a block of CSS attributes for a particular string (xs, sm, normal, lg, xl)", () => {
    expect(generateButtonSize("xs")).toContain(`
    font-size: 9px;
    border-radius: 4px;
    padding: 2px 8px;
    text-transform: uppercase;
  `);
    expect(generateButtonSize("sm")).toContain(`
    font-size: 11px;
    border-radius: 4px;
    padding: 2px 8px;
    text-transform: uppercase;
  `);
    expect(generateButtonSize("lg")).toContain(`
    font-size: 18px;
    border-radius: 4px;
    padding: 2px 10px;
  `);
    expect(generateButtonSize("xl")).toContain(`
    font-size: 18px;
    border-radius: 4px;
    padding: 2px 10px;
  `);
    expect(generateButtonSize("normal")).toContain(`
    font-size: 14px;
    border-radius: 4px;
    padding: 2px 8px;
  `);
  });
});
