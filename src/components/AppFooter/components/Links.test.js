import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Links from "./Links";

describe("Link", () => {
  it("should render", () => {
    const aLinks = renderer.create(<Links />).toJSON();
    expect(aLinks).toMatchSnapshot();
  });
});
