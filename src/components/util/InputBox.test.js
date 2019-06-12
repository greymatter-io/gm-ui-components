import React from "react";
import renderer from "react-test-renderer";

import InputBox from "./InputBox";

describe("InputBox", () => {
  it("should render", () => {
    const aInputBox = renderer.create(<InputBox />).toJSON();
    expect(aInputBox).toMatchSnapshot();
  });
});
