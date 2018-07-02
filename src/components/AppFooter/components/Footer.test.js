import React from "react";
import renderer from "react-test-renderer";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render", () => {
    const aFooter = renderer.create(<Footer />).toJSON();
    expect(aFooter).toMatchSnapshot();
  });
});
