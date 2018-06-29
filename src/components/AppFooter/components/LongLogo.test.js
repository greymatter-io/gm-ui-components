import React from "react";
import renderer from "react-test-renderer";

import LongLogo from "./LongLogo";

describe("LongLogo", () => {
  it("should render", () => {
    const aLongLogo = renderer.create(<LongLogo />).toJSON();
    expect(aLongLogo).toMatchSnapshot();
  });
});
