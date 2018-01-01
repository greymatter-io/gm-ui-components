import generateButtonIconRatio from "./generateButtonIconRatio";

describe("generateButtonIconRatio", () => {
  test("generates a CSS mixin containing button icon rulesets", () => {
    expect(generateButtonIconRatio("xs")).toEqual(
      `> svg { width: 12px; 
  height: 12px; }`
    );
    expect(generateButtonIconRatio("sm")).toEqual(
      `> svg { width: 18px; 
  height: 18px; }`
    );
    expect(generateButtonIconRatio("lg")).toEqual(
      `> svg { width: 30px; 
  height: 30px; }`
    );
    expect(generateButtonIconRatio("xl")).toEqual(
      `> svg { width: 36px; 
  height: 36px; }`
    );
    expect(generateButtonIconRatio("normal")).toEqual(
      `> svg { width: 24px; 
  height: 24px; }`
    );
  });
});
