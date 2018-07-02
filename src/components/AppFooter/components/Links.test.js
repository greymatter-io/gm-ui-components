import React from "react";
import renderer from "react-test-renderer";

import Links from "./Links";

describe("Link", () => {
  it("should render", () => {
    const aLinks = renderer.create(<Links />).toJSON();
    expect(aLinks).toMatchSnapshot();
  });
});
