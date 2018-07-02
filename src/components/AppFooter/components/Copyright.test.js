import React from "react";
import renderer from "react-test-renderer";

import Copyright from "./Copyright";

describe("Copyright", () => {
  it("should render when screen is 800px or higher", () => {
    const aCopyright = renderer.create(<Copyright />).toJSON();
    expect(aCopyright).toMatchSnapshot();
  });
  xit("should not render when screen is less that 800px", () => {});
});
