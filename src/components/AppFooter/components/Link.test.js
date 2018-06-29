import React from "react";
import renderer from "react-test-renderer";

import Link from "./Link";

describe("Link", () => {
  it("should render", () => {
    const aLink = renderer.create(<Link />).toJSON();
    expect(aLink).toMatchSnapshot();
  });
});
