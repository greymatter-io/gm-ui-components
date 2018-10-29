import React from "react";
import renderer from "react-test-renderer";
import AppFooter from "./AppFooter.js";

describe("A Footer container", () => {
  it("should render", () => {
    const anAppFooter = renderer.create(<AppFooter />).toJSON();
    expect(anAppFooter).toMatchSnapshot();
  });
});
