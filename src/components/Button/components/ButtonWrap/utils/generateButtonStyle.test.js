import generateButtonStyle from "./generateButtonStyle";

describe("generateButtonStyle", () => {
  test("takes a button type and a boolean for rendering an outline and returns CSS", () => {
    // Only test for all CSS for the default button style, because
    // other types only touch background and border colors
    expect(generateButtonStyle("default", false)).toEqual(`
  background-color: #fff;
  color: #000;
  border-color: transparent;

  &:hover {
    filter: saturate(120%) brightness(95%);
  }

  &:active {
    transition-duration: 0s;
    filter: saturate(80%) brightness(90%) contrast(110%);
  }

  &:focus {
    z-index: 1;
  }

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    cursor: not-allowed;
    filter: saturate(0) opacity(70%);
  }
`);

    expect(generateButtonStyle("danger", false)).toContain(`
  background-color: #EB4F3D;
  color: #fff;
`);

    expect(generateButtonStyle("info", false)).toContain(`
  background-color: #094dff;
  color: #fff;
`);

    expect(generateButtonStyle("warning", false)).toContain(`
  background-color: #F7CD45;
  color: #fff;
`);

    expect(generateButtonStyle("primary", false)).toContain(`
  background-color: #0aab2a;
  color: #fff;
`);

    // Test outlines
    expect(generateButtonStyle("default", true)).toContain(`
  border-color: #e6e6e6;
`);
    expect(generateButtonStyle("danger", true)).toContain(`
  border-color: #EB4F3D;
`);
    expect(generateButtonStyle("info", true)).toContain(`
  border-color: #094dff;
`);
    expect(generateButtonStyle("warning", true)).toContain(`
  border-color: #F7CD45;
`);
    expect(generateButtonStyle("primary", true)).toContain(`
  border-color: #077b1e;
`);
  });
});
