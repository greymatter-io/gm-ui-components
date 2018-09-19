import generateButtonStyle from "./generateButtonStyle";

const theme = {
  COLOR_INTENT_DANGER: "red",
  COLOR_INTENT_INFO: "blue",
  COLOR_INTENT_WARNING: "yellow",
  COLOR_INTENT_HIGHLIGHT: "green",
  COLOR_BACKGROUND_A: "white"
};

describe("generateButtonStyle", () => {
  test("takes a button type and a boolean for rendering an outline and returns CSS", () => {
    // Only test for all CSS for the default button style, because
    // other types only touch background and border colors
    expect(generateButtonStyle(theme, "default", false)).toEqual(`
  background-color: white;
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

    expect(generateButtonStyle(theme, "danger", false)).toContain(`
  background-color: red;
  color: #fff;
`);

    expect(generateButtonStyle(theme, "info", false)).toContain(`
  background-color: blue;
  color: #fff;
`);

    expect(generateButtonStyle(theme, "warning", false)).toContain(`
  background-color: yellow;
  color: #fff;
`);

    expect(generateButtonStyle(theme, "primary", false)).toContain(`
  background-color: green;
  color: #fff;
`);

    // Test outlines
    expect(generateButtonStyle(theme, "default", true)).toContain(`
  border-color: white;
`);
    expect(generateButtonStyle(theme, "danger", true)).toContain(`
  border-color: red;
`);
    expect(generateButtonStyle(theme, "info", true)).toContain(`
  border-color: blue;
`);
    expect(generateButtonStyle(theme, "warning", true)).toContain(`
  border-color: yellow;
`);
    expect(generateButtonStyle(theme, "primary", true)).toContain(`
  border-color: green;
`);
  });
});
