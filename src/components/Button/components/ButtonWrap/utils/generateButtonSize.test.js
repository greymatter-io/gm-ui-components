import generateButtonSize from "./generateButtonSize";

describe("generateButtonSize", () => {
  test("renders a block of CSS attributes for a particular string (xs, sm, normal, lg, xl)", () => {
    expect(generateButtonSize("xs")).toEqual(`
    font-size: 7px;
    border-radius: 3px;
    padding: 2px 7px;
    text-transform: uppercase;
  `);
    expect(generateButtonSize("sm")).toEqual(`
    font-size: 11px;
    border-radius: 3px;
    padding: 2px 7px;
    text-transform: uppercase;
  `);
    expect(generateButtonSize("lg")).toEqual(`
    font-size: 18px;
    border-radius: 3px;
    padding: 2px 7px;
    
  `);
    expect(generateButtonSize("xl")).toEqual(`
    font-size: 21px;
    border-radius: 3px;
    padding: 2px 7px;
    
  `);
    expect(generateButtonSize("normal")).toEqual(`
    font-size: 14px;
    border-radius: 3px;
    padding: 2px 7px;
    
  `);
  });
});
